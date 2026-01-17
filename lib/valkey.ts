import Redis from 'ioredis';

interface ValkeyOptions {
  ex?: number; // expiration in seconds
}

class ValkeyClient {
  private client: Redis | null = null;
  private isConnected: boolean = false;

  async connect(): Promise<Redis> {
    if (this.isConnected && this.client) {
      return this.client;
    }

    try {
      // Create client with ioredis
      this.client = new Redis(process.env.VALKEY_URL!, {
        tls: {
          rejectUnauthorized: false
        },
        connectTimeout: 10000,
        lazyConnect: true,
        maxRetriesPerRequest: 3,
        enableOfflineQueue: false
      });

      // Handle connection events
      this.client.on('error', (err: Error) => {
        console.error('Valkey Client Error:', err);
        this.isConnected = false;
      });

      this.client.on('connect', () => {
        console.log('Connected to Valkey');
        this.isConnected = true;
      });

      this.client.on('ready', () => {
        console.log('Valkey client ready');
        this.isConnected = true;
      });

      this.client.on('close', () => {
        console.log('Valkey connection closed');
        this.isConnected = false;
      });

      this.client.on('reconnecting', () => {
        console.log('Reconnecting to Valkey...');
      });

      await this.client.connect();
      return this.client;

    } catch (error) {
      console.error('Failed to connect to Valkey:', (error as Error).message);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (this.client && this.isConnected) {
      this.client.disconnect();
      this.isConnected = false;
    }
  }

  async get(key: string): Promise<string | null> {
    const client = await this.connect();
    return await client.get(key);
  }

  async set(key: string, value: string, options: ValkeyOptions = {}): Promise<'OK'> {
    const client = await this.connect();
    if (options.ex) {
      return await client.setex(key, options.ex, value);
    }
    return await client.set(key, value);
  }

  async del(...keys: string[]): Promise<number> {
    const client = await this.connect();
    return await client.del(...keys);
  }

  async ping(): Promise<string> {
    const client = await this.connect();
    return await client.ping();
  }

  async exists(key: string): Promise<number> {
    const client = await this.connect();
    return await client.exists(key);
  }

  async ttl(key: string): Promise<number> {
    const client = await this.connect();
    return await client.ttl(key);
  }

  // Hash operations
  async hset(key: string, field: string, value: string | number): Promise<number>;
  async hset(key: string, hash: Record<string, string | number>): Promise<number>;
  async hset(key: string, fieldOrHash: string | Record<string, string | number>, value?: string | number): Promise<number> {
    const client = await this.connect();
    if (typeof fieldOrHash === 'string' && value !== undefined) {
      return await client.hset(key, fieldOrHash, value);
    } else if (typeof fieldOrHash === 'object') {
      return await client.hset(key, fieldOrHash);
    }
    throw new Error('Invalid arguments for hset');
  }

  async hget(key: string, field: string): Promise<string | null> {
    const client = await this.connect();
    return await client.hget(key, field);
  }

  async hgetall(key: string): Promise<Record<string, string>> {
    const client = await this.connect();
    return await client.hgetall(key);
  }

  // List operations
  async lpush(key: string, ...values: string[]): Promise<number> {
    const client = await this.connect();
    return await client.lpush(key, ...values);
  }

  async rpush(key: string, ...values: string[]): Promise<number> {
    const client = await this.connect();
    return await client.rpush(key, ...values);
  }

  async lrange(key: string, start: number, stop: number): Promise<string[]> {
    const client = await this.connect();
    return await client.lrange(key, start, stop);
  }

  // Counter operations
  async incr(key: string): Promise<number> {
    const client = await this.connect();
    return await client.incr(key);
  }

  async decr(key: string): Promise<number> {
    const client = await this.connect();
    return await client.decr(key);
  }

  // JSON helpers
  async setJSON(key: string, value: any, options: ValkeyOptions = {}): Promise<'OK'> {
    return await this.set(key, JSON.stringify(value), options);
  }

  async getJSON<T = any>(key: string): Promise<T | null> {
    const value = await this.get(key);
    return value ? JSON.parse(value) : null;
  }

  // Get the raw client for advanced operations
  async getClient(): Promise<Redis> {
    return await this.connect();
  }
}

export default new ValkeyClient();