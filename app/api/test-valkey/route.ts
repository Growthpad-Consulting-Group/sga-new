import { NextRequest, NextResponse } from 'next/server'
import valkey from '@/lib/valkey'

export async function GET(request: NextRequest) {
  try {
    // Test basic operations
    const testKey = 'test:connection'
    const testValue = { 
      message: 'Valkey connection successful!', 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV 
    }

    console.log('Testing Valkey connection...')
    console.log('Config:', {
      host: process.env.VALKEY_HOST,
      port: process.env.VALKEY_PORT,
      cacheEnabled: process.env.CACHE_ENABLED,
      hasUrl: !!process.env.VALKEY_URL,
      hasPassword: !!process.env.VALKEY_PASSWORD,
    })
    
    // Get client directly to test
    const client = await valkey.getClient()
    console.log('Client connected, testing ping...')
    
    // Test ping
    const pingResult = await client.ping()
    console.log('Ping result:', pingResult)
    
    // Test direct set/get
    console.log('Setting value directly on client:', testValue)
    await client.set(testKey, JSON.stringify(testValue), 'EX', 60)
    console.log('Value set directly')
    
    // Get the value back directly
    console.log('Getting value directly...')
    const directValue = await client.get(testKey)
    console.log('Direct retrieved value:', directValue)
    
    // Test through cache class
    console.log('Testing through valkey class...')
    await valkey.setJSON('test:cache', testValue, { ex: 60 })
    const cacheValue = await valkey.getJSON('test:cache')
    console.log('Cache class value:', cacheValue)
    
    // Check if key exists
    const keyExists = await valkey.exists(testKey)
    console.log('Key exists:', keyExists)

    // Test simple string operations
    await valkey.set('test:simple', 'hello world', { ex: 30 })
    const simpleValue = await valkey.get('test:simple')
    console.log('Simple value:', simpleValue)

    return NextResponse.json({
      success: true,
      message: 'Valkey connection test successful',
      data: {
        original: testValue,
        directValue: directValue ? JSON.parse(directValue) : null,
        cacheValue,
        keyExists,
        simpleValue,
        pingResult,
        cacheEnabled: process.env.CACHE_ENABLED === 'true',
        host: process.env.VALKEY_HOST,
        port: process.env.VALKEY_PORT,
      }
    })

  } catch (error) {
    console.error('Valkey test error:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Valkey connection test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      config: {
        host: process.env.VALKEY_HOST,
        port: process.env.VALKEY_PORT,
        cacheEnabled: process.env.CACHE_ENABLED,
        hasUrl: !!process.env.VALKEY_URL,
        hasPassword: !!process.env.VALKEY_PASSWORD,
      }
    }, { status: 500 })
  }
}