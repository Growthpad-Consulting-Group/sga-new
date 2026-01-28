/**
 * Country configuration and validation utilities
 * Handles country codes, validation, and environment-based configuration
 */

// Country interface
export interface Country {
  code: string
  name: string
  flag: string
  subdomain: string
}

// Country list with metadata
export const COUNTRIES: Country[] = [
  { code: 'ke', name: 'Kenya', flag: '🇰🇪', subdomain: 'ke' },
  { code: 'tz', name: 'Tanzania', flag: '🇹🇿', subdomain: 'tz' },
  { code: 'ug', name: 'Uganda', flag: '🇺🇬', subdomain: 'ug' },
]

// Get allowed countries from environment
export function getAllowedCountries(): string[] {
  const allowed = process.env.NEXT_PUBLIC_ALLOWED_COUNTRIES || 'ke,tz,ug'
  return allowed.split(',').map(code => code.trim())
}

// Validate if a country code is allowed
export function isValidCountry(code: string | null | undefined): boolean {
  if (!code) return false
  const allowed = getAllowedCountries()
  return allowed.includes(code.toLowerCase())
}

// Get country metadata by code
export function getCountryByCode(code: string | null | undefined): Country | null {
  if (!code) return null
  return COUNTRIES.find(c => c.code === code.toLowerCase()) || null
}

// Get default country from environment
export function getDefaultCountry(): string {
  return process.env.NEXT_PUBLIC_DEFAULT_COUNTRY || 'ke'
}

// Check if subdomains are enabled
export function isSubdomainEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_SUBDOMAINS === 'true'
}

// Get main domain from environment
export function getMainDomain(): string {
  return process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3001'
}

// Get all countries as array
export function getAllCountries(): Country[] {
  const allowed = getAllowedCountries()
  return COUNTRIES.filter(c => allowed.includes(c.code))
}
