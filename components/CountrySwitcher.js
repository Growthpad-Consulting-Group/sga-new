'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { getAllCountries, isSubdomainEnabled, getMainDomain } from '@/lib/countryConfig'

/**
 * Generate URL for a country based on environment configuration
 * Supports both subdomain-based (ke.domain.com) and path-based (/ke) routing
 */
function getCountryUrl(countryCode, pathname, isSubdomainEnabled) {
  if (isSubdomainEnabled) {
    // For subdomain routing, construct subdomain URL
    const domain = getMainDomain()
    const protocol = typeof window !== 'undefined' ? window.location.protocol : 'https:'
    
    // Preserve current page path
    const path = pathname === '/' ? '' : pathname
    
    // Handle localhost with port
    if (domain.includes('localhost')) {
      return `${protocol}//${countryCode}.${domain}${path}`
    }
    
    return `${protocol}//${countryCode}.${domain}${path}`
  } else {
    // For path-based routing, use path prefix
    const path = pathname === '/' ? '' : pathname
    return `/${countryCode}${path}`
  }
}

/**
 * Get current country from pathname or subdomain
 */
function getCurrentCountry(pathname, hostname) {
  // Check if we're on a subdomain
  if (hostname && !hostname.includes('localhost')) {
    const parts = hostname.split('.')
    if (parts.length > 2) {
      return parts[0].toLowerCase()
    }
  }
  
  // Check if country is in path
  const pathParts = pathname.slice(1).split('/')
  const firstPart = pathParts[0]
  
  const allowedCountries = getAllCountries().map(c => c.code)
  if (allowedCountries.includes(firstPart)) {
    return firstPart
  }
  
  return null
}

export default function CountrySwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  
  const subdomainEnabled = isSubdomainEnabled()
  const countries = getAllCountries()
  
  // Get current country from URL
  const hostname = typeof window !== 'undefined' ? window.location.hostname : ''
  const currentCountry = getCurrentCountry(pathname, hostname)

  const handleCountryClick = (countryCode) => {
    const url = getCountryUrl(countryCode, pathname, subdomainEnabled)
    router.push(url)
  }

  const isActive = (countryCode) => {
    return currentCountry === countryCode
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
      {countries.map((country) => {
        const active = isActive(country.code)
        return (
          <motion.button
            key={country.code}
            onClick={() => handleCountryClick(country.code)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-2xl
              transition-all duration-300 shadow-lg
              ${active 
                ? 'bg-primary-orange ring-4 ring-primary-orange/30' 
                : 'bg-white hover:bg-light-grey'
              }
            `}
            aria-label={`Switch to ${country.name}`}
            title={country.name}
          >
            {country.flag}
          </motion.button>
        )
      })}
    </div>
  )
}

