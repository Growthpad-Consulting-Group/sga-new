import { createClient, RedisClientType } from 'redis'

/**
 * ValkeyCache - A wrapper class for Valkey/Redis operations
 * Valkey is Redis-compatible, so we use the redis client
 */
class ValkeyCache {
  private static client: RedisClientType | null = null
  private static isConnecting = false

  /**
   * Get or create the Valkey client
   */
  static async getClient(): Promise<RedisClientType> {
    if (this.client && this.client.isOpen) {
      return this.client
    }

    if (this.isConnecting) {
      // Wait for connection to complete
      while (this.isConnecting) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      if (this.client && this.client.isOpen) {
        return this.client
      }
    }

    this.isConnecting = true

    try {
      const config: any = {}

      // Use VALKEY_URL if provided, otherwise use host/port
      if (process.env.VALKEY_URL) {
        config.url = process.env.VALKEY_URL
      } else {
        config.socket = {
          host: process.env.VALKEY_HOST || 'localhost',
          port: parseInt(process.env.VALKEY_PORT || '6379', 10),
        }

        // Add TLS/SSL if required
        if (process.env.VALKEY_TLS === 'true' || process.env.VALKEY_SSL === 'true') {
          config.socket.tls = {
            rejectUnauthorized: process.env.VALKEY_REJECT_UNAUTHORIZED !== 'false'
          }
          
          // Add CA certificate if provided (for Aiven services)
          if (process.env.VALKEY_CA_CERT) {
            config.socket.tls.ca = process.env.VALKEY_CA_CERT
          }
        }
      }

      // Add password if provided
      if (process.env.VALKEY_PASSWORD) {
        config.password = process.env.VALKEY_PASSWORD
      }

      // Add username if provided
      if (process.env.VALKEY_USERNAME) {
        config.username = process.env.VALKEY_USERNAME
      }

      this.client = createClient(config) as RedisClientType

      // Error handling
      this.client.on('error', (err) => {
        console.error('Valkey Client Error:', err)
      })

      this.client.on('connect', () => {
        console.log('Valkey client connecting...')
      })

      this.client.on('ready', () => {
        console.log('Valkey client ready')
      })

      // Connect to the server
      await this.client.connect()
      
      this.isConnecting = false
      return this.client
    } catch (error) {
      this.isConnecting = false
      console.error('Failed to create Valkey client:', error)
      throw error
    }
  }

  /**
   * Set a value in the cache
   */
  static async set(key: string, value: string | object, ttlSeconds?: number): Promise<void> {
    if (process.env.CACHE_ENABLED !== 'true') {
      return
    }

    try {
      const client = await this.getClient()
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value)
      
      if (ttlSeconds) {
        await client.setEx(key, ttlSeconds, stringValue)
      } else {
        await client.set(key, stringValue)
      }
    } catch (error) {
      console.error(`Error setting key ${key}:`, error)
      throw error
    }
  }

  /**
   * Get a value from the cache as string
   */
  static async get(key: string): Promise<string | null> {
    if (process.env.CACHE_ENABLED !== 'true') {
      return null
    }

    try {
      const client = await this.getClient()
      const value = await client.get(key)
      return typeof value === 'string' ? value : null
    } catch (error) {
      console.error(`Error getting key ${key}:`, error)
      throw error
    }
  }

  /**
   * Get a value from the cache as JSON
   */
  static async getJSON<T = any>(key: string): Promise<T | null> {
    const value = await this.get(key)
    if (!value) {
      return null
    }

    try {
      return JSON.parse(value) as T
    } catch (error) {
      console.error(`Error parsing JSON for key ${key}:`, error)
      return null
    }
  }

  /**
   * Check if a key exists
   */
  static async exists(key: string): Promise<boolean> {
    if (process.env.CACHE_ENABLED !== 'true') {
      return false
    }

    try {
      const client = await this.getClient()
      const result = await client.exists(key)
      return result > 0
    } catch (error) {
      console.error(`Error checking existence of key ${key}:`, error)
      throw error
    }
  }

  /**
   * Delete a key from the cache
   */
  static async delete(key: string): Promise<void> {
    if (process.env.CACHE_ENABLED !== 'true') {
      return
    }

    try {
      const client = await this.getClient()
      await client.del(key)
    } catch (error) {
      console.error(`Error deleting key ${key}:`, error)
      throw error
    }
  }

  /**
   * Close the connection
   */
  static async disconnect(): Promise<void> {
    if (this.client && this.client.isOpen) {
      await this.client.quit()
      this.client = null
    }
  }
}

export { ValkeyCache }
