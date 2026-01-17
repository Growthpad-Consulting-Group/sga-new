/**
 * Valkey (Redis-compatible) client configuration
 * Handles caching and session management
 */

import { createClient } from 'redis'

// Valkey client configuration
const valkeyConfig = {
  url: process.env.VALKEY_URL,
  socket: {
    host: process.env.VALKEY_HOST,
    port: parseInt(process.env.VALKEY_PORT || '10186'),
    tls: process.env.VALKEY_SSL === 'true',
  },
  username: process.env.VALKEY_USER || 'avnadmin',
  password: process.env.VALKEY_PASSWORD,
}

// Create Valkey client
let valkeyClient: ReturnType<typeof createClient> | null = null

export async function getValkeyClient() {
  if (!valkeyClient) {
    valkeyClient = createClient(valkeyConfig)
    
    valkeyClient.on('error', (err) => {
      console.error('Valkey Client Error:', err)
    })

    valkeyClient.on('connect', () => {
      console.log('Connected to Valkey')
    })

    valkeyClient.on('ready', () => {
      console.log('Valkey client ready')
    })

    valkeyClient.on('end', () => {
      console.log('Valkey connection ended')
    })

    await valkeyClient.connect()
  }

  return valkeyClient
}

// Cache helper functions
export class ValkeyCache {
  private static client: ReturnType<typeof createClient> | null = null

  static async getClient() {
    if (!this.client) {
      this.client = await getValkeyClient()
    }
    return this.client
  }

  /**
   * Set a value in cache with optional expiration
   */
  static async set(key: string, value: string | object, expirationSeconds?: number): Promise<void> {
    if (process.env.CACHE_ENABLED !== 'true') return

    try {
      const client = await this.getClient()
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
      
      if (expirationSeconds) {
        await client.setEx(key, expirationSeconds, serializedValue)
      } else {
        await client.set(key, serializedValue)
      }
    } catch (error) {
      console.error('Valkey set error:', error)
    }
  }

  /**
   * Get a value from cache
   */
  static async get(key: string): Promise<string | null> {
    if (process.env.CACHE_ENABLED !== 'true') return null

    try {
      const client = await this.getClient()
      return await client.get(key)
    } catch (error) {
      console.error('Valkey get error:', error)
      return null
    }
  }

  /**
   * Get and parse JSON value from cache
   */
  static async getJSON<T>(key: string): Promise<T | null> {
    const value = await this.get(key)
    if (!value) return null

    try {
      return JSON.parse(value) as T
    } catch (error) {
      console.error('JSON parse error:', error)
      return null
    }
  }

  /**
   * Delete a key from cache
   */
  static async del(key: string): Promise<void> {
    if (process.env.CACHE_ENABLED !== 'true') return

    try {
      const client = await this.getClient()
      await client.del(key)
    } catch (error) {
      console.error('Valkey delete error:', error)
    }
  }

  /**
   * Check if a key exists in cache
   */
  static async exists(key: string): Promise<boolean> {
    if (process.env.CACHE_ENABLED !== 'true') return false

    try {
      const client = await this.getClient()
      const result = await client.exists(key)
      return result === 1
    } catch (error) {
      console.error('Valkey exists error:', error)
      return false
    }
  }

  /**
   * Set expiration for a key
   */
  static async expire(key: string, seconds: number): Promise<void> {
    if (process.env.CACHE_ENABLED !== 'true') return

    try {
      const client = await this.getClient()
      await client.expire(key, seconds)
    } catch (error) {
      console.error('Valkey expire error:', error)
    }
  }

  /**
   * Get all keys matching a pattern
   */
  static async keys(pattern: string): Promise<string[]> {
    if (process.env.CACHE_ENABLED !== 'true') return []

    try {
      const client = await this.getClient()
      return await client.keys(pattern)
    } catch (error) {
      console.error('Valkey keys error:', error)
      return []
    }
  }

  /**
   * Clear all cache (use with caution)
   */
  static async flushAll(): Promise<void> {
    if (process.env.CACHE_ENABLED !== 'true') return

    try {
      const client = await this.getClient()
      await client.flushAll()
    } catch (error) {
      console.error('Valkey flush error:', error)
    }
  }
}

// Export default client getter
export default getValkeyClient