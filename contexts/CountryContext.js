'use client'

import { createContext, useContext } from 'react'
import { getCountryByCode } from '@/lib/countryConfig'

/**
 * Country Context
 * Provides country information throughout the application
 */
const CountryContext = createContext(null)

/**
 * CountryProvider component
 * Wraps the application to provide country context
 */
export function CountryProvider({ children, country = 'ke' }) {
  // Get country metadata
  const countryData = getCountryByCode(country)
  
  const value = {
    code: country,
    name: countryData?.name || 'Global',
    flag: countryData?.flag || '🌍',
    subdomain: countryData?.subdomain || country,
  }

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  )
}

/**
 * useCountry hook
 * Access country information from anywhere in the app
 */
export function useCountry() {
  const context = useContext(CountryContext)
  
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider')
  }
  
  return context
}
