import { NextRequest, NextResponse } from 'next/server'
import { ValkeyCache } from '@/lib/valkey'

export async function GET(request: NextRequest) {
  try {
    // Test basic operations
    const testKey = 'test:connection'
    const testValue = { 
      message: 'Valkey connection successful!', 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV 
    }

    // Set a test value with 60 second expiration
    await ValkeyCache.set(testKey, testValue, 60)
    
    // Get the value back
    const retrievedValue = await ValkeyCache.getJSON(testKey)
    
    // Check if key exists
    const keyExists = await ValkeyCache.exists(testKey)

    return NextResponse.json({
      success: true,
      message: 'Valkey connection test successful',
      data: {
        original: testValue,
        retrieved: retrievedValue,
        keyExists,
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