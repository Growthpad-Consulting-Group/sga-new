import { NextResponse } from 'next/server'
import { isValidCountry, isSubdomainEnabled, getDefaultCountry } from './lib/countryConfig'

/**
 * Extract country code from subdomain
 * Examples: ke.domainname.com -> 'ke', www.domainname.com -> null
 */
function getCountryFromSubdomain(host) {
  if (!host) return null

  // Remove port if present (for localhost:3001)
  const hostWithoutPort = host.split(':')[0]
  
  // Split by dots
  const parts = hostWithoutPort.split('.')
  
  // If only 1 part (localhost) or 2 parts (domainname.com), no subdomain
  if (parts.length <= 2) return null
  
  // Get the first part as potential country code
  const subdomain = parts[0]
  
  // Exclude common subdomains
  if (['www', 'api', 'admin', 'mail'].includes(subdomain)) return null
  
  return subdomain.toLowerCase()
}

/**
 * Extract country code from pathname
 * Examples: /ke/about -> 'ke', /about -> null
 */
function getCountryFromPath(pathname) {
  if (!pathname || pathname === '/') return null
  
  // Remove leading slash and split
  const parts = pathname.slice(1).split('/')
  const firstPart = parts[0]
  
  // Check if first part is a country code
  if (firstPart && isValidCountry(firstPart)) {
    return firstPart.toLowerCase()
  }
  
  return null
}

/**
 * Main middleware function
 * Detects country from subdomain or path and rewrites the request
 */
export function middleware(request) {
  const { pathname, host } = request.nextUrl
  
  // Skip middleware for static files and API routes that shouldn't be rewritten
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next()
  }

  const subdomainEnabled = isSubdomainEnabled()
  const defaultCountry = getDefaultCountry()
  
  let country = null
  let source = null

  // Try to get country from subdomain if enabled
  if (subdomainEnabled) {
    country = getCountryFromSubdomain(host)
    if (country) source = 'subdomain'
  }

  // If no country from subdomain, try path
  if (!country) {
    country = getCountryFromPath(pathname)
    if (country) source = 'path'
  }

  // If still no country, use default
  if (!country) {
    country = defaultCountry
    source = 'default'
  }

  // Validate country
  if (!isValidCountry(country)) {
    // Invalid country, redirect to default
    return NextResponse.redirect(new URL(`/${defaultCountry}`, request.url))
  }

  // Add country to headers for use in components
  const response = NextResponse.next()
  response.headers.set('x-country', country)
  response.headers.set('x-pathname', pathname)
  return response
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all routes except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
