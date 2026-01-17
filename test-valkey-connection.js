/**
 * Simple test script to verify Valkey connection
 * Run with: node test-valkey-connection.js
 */

require('dotenv').config()
const { createClient } = require('redis')

async function testConnection() {
  console.log('Testing Valkey connection...')
  console.log('Configuration:')
  console.log('  Host:', process.env.VALKEY_HOST)
  console.log('  Port:', process.env.VALKEY_PORT)
  console.log('  Username:', process.env.VALKEY_USERNAME ? '***' : 'not set')
  console.log('  Password:', process.env.VALKEY_PASSWORD ? '***' : 'not set')
  console.log('  TLS:', process.env.VALKEY_TLS)
  console.log('')

  const config = {
    socket: {
      host: process.env.VALKEY_HOST || 'localhost',
      port: parseInt(process.env.VALKEY_PORT || '6379', 10),
    }
  }

  // Add TLS if required
  if (process.env.VALKEY_TLS === 'true' || process.env.VALKEY_SSL === 'true') {
    config.socket.tls = {
      rejectUnauthorized: process.env.VALKEY_REJECT_UNAUTHORIZED !== 'false'
    }
    
    if (process.env.VALKEY_CA_CERT) {
      config.socket.tls.ca = process.env.VALKEY_CA_CERT
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

  const client = createClient(config)

  client.on('error', (err) => {
    console.error('❌ Valkey Client Error:', err.message)
  })

  client.on('connect', () => {
    console.log('🔄 Connecting to Valkey...')
  })

  client.on('ready', () => {
    console.log('✅ Valkey client ready')
  })

  try {
    console.log('Attempting to connect...')
    await client.connect()
    
    console.log('✅ Connected successfully!')
    
    // Test ping
    console.log('Testing PING...')
    const pingResult = await client.ping()
    console.log('✅ PING result:', pingResult)
    
    // Test set/get
    console.log('Testing SET/GET...')
    const testKey = 'test:connection'
    const testValue = JSON.stringify({ 
      message: 'Connection test successful!', 
      timestamp: new Date().toISOString() 
    })
    
    await client.setEx(testKey, 60, testValue)
    console.log('✅ SET successful')
    
    const retrieved = await client.get(testKey)
    console.log('✅ GET successful')
    console.log('Retrieved value:', retrieved)
    
    // Clean up
    await client.del(testKey)
    console.log('✅ Test key deleted')
    
    await client.quit()
    console.log('✅ Connection closed')
    
    console.log('\n🎉 All tests passed! Valkey connection is working correctly.')
    process.exit(0)
    
  } catch (error) {
    console.error('\n❌ Connection test failed:')
    console.error('Error:', error.message)
    console.error('\nFull error:', error)
    
    if (client && client.isOpen) {
      await client.quit()
    }
    
    process.exit(1)
  }
}

testConnection()
