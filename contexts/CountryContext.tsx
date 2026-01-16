'use client'

import { createContext, useContext, ReactNode } from 'react'
import { getCountryByCode } from '@/lib/countryConfig'

/**
 * Country Context Value Interface
 */
export interface CountryContextValue {
  code: string
  name: string
  flag: string
  subdomain: string
}

/**
 * Country Provider Props Interface
 */
export interface CountryProviderProps {
  children: ReactNode
  country?: string
}

/**
 * Country Context
 * Provides country information throughout the application
 */
const CountryContext = createContext<CountryContextValue | null>(null)

/**
 * CountryProvider component
 * Wraps the application to provide country context
 */
export function CountryProvider({ children, country = 'ke' }: CountryProviderProps) {
  // Get country metadata
  const countryData = getCountryByCode(country)
  
  const value: CountryContextValue = {
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
export function useCountry(): CountryContextValue {
  const context = useContext(CountryContext)
  
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider')
  }
  
  return context
}
