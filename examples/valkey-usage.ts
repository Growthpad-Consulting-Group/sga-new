import valkey from '../lib/valkey';
import { config } from 'dotenv';

config();

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

interface Session {
  userId: number;
  status: string;
  loginTime: string;
}

interface Notification {
  type: 'welcome' | 'info' | 'warning' | 'error';
  message: string;
  timestamp?: string;
}

async function exampleUsage(): Promise<void> {
  try {
    console.log('🔄 Connecting to Valkey...');
    
    // Test connection
    const client = await valkey.connect();
    const pong = await valkey.ping();
    console.log('✅ Connection successful:', pong);

    // Example 1: Basic key-value operations with types
    console.log('\n📝 Basic Operations:');
    const user: User = {
      id: 1001,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date().toISOString()
    };
    
    await valkey.setJSON('user:1001', user);
    const userData = await valkey.getJSON<User>('user:1001');
    console.log('User data:', userData);

    // Example 2: Set with expiration
    console.log('\n⏰ Expiring Keys:');
    const session: Session = {
      userId: 1001,
      status: 'active',
      loginTime: new Date().toISOString()
    };
    
    await valkey.setJSON('session:abc123', session, { ex: 3600 }); // 1 hour
    const ttl = await valkey.ttl('session:abc123');
    console.log('Session TTL:', ttl, 'seconds');

    // Example 3: Check if key exists
    console.log('\n🔍 Key Existence:');
    const exists = await valkey.exists('user:1001');
    console.log('User exists:', exists === 1);

    // Example 4: Atomic operations with pipeline
    console.log('\n⚡ Pipeline Operations:');
    const pipeline = client.pipeline();
    pipeline.set('counter:views', '0');
    pipeline.incr('counter:views');
    pipeline.incr('counter:views');
    pipeline.incr('counter:views');
    pipeline.get('counter:views');
    
    const results = await pipeline.exec();
    console.log('Counter value after 3 increments:', results?.[4]?.[1]);

    // Example 5: Hash operations
    console.log('\n🗂️ Hash Operations:');
    await valkey.hset('user:1001:profile', {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      city: 'New York'
    });
    
    const profile = await valkey.hgetall('user:1001:profile');
    console.log('User profile:', profile);

    // Example 6: List operations with typed notifications
    console.log('\n📋 List Operations:');
    const notifications: Notification[] = [
      { type: 'welcome', message: 'Welcome to our platform!', timestamp: new Date().toISOString() },
      { type: 'info', message: 'Complete your profile', timestamp: new Date().toISOString() }
    ];
    
    await valkey.lpush('notifications:1001', 
      ...notifications.map(n => JSON.stringify(n))
    );
    
    const notificationStrings = await valkey.lrange('notifications:1001', 0, -1);
    const parsedNotifications: Notification[] = notificationStrings.map(n => JSON.parse(n));
    console.log('Notifications:', parsedNotifications);

    // Example 7: Session management
    console.log('\n🔐 Session Management:');
    const sessionKey = `session:user:${user.id}`;
    await valkey.setJSON(sessionKey, {
      userId: user.id,
      loginTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      permissions: ['read', 'write']
    }, { ex: 86400 }); // 24 hours

    const sessionData = await valkey.getJSON(sessionKey);
    console.log('Session created:', sessionData);

    // Example 8: Delete keys
    console.log('\n🗑️ Cleanup:');
    await valkey.del(
      'user:1001', 
      'session:abc123', 
      'counter:views',
      'user:1001:profile',
      'notifications:1001',
      sessionKey
    );
    console.log('Keys deleted');

    console.log('\n✅ All examples completed successfully!');

  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
  } finally {
    await valkey.disconnect();
  }
}

// Run examples
exampleUsage();

export { exampleUsage };