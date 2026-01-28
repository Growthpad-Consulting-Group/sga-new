/**
 * SEO helper functions for canonical URLs and hreflang tags
 * Handles multi-country SEO optimization
 */

import { getAllCountries, isSubdomainEnabled, getMainDomain } from './countryConfig'

// HrefLang link interface
export interface HrefLangLink {
  rel: string
  hrefLang: string
  href: string
}

// Formatted HrefLang link for JSX
export interface FormattedHrefLangLink extends HrefLangLink {
  key: string
}

// Country metadata interface
export interface CountryMetadata {
  name: string
  locale: string
  region: string
  description: string
}

// Canonical URL options
export interface CanonicalUrlOptions {
  protocol?: 'http' | 'https'
}

/**
 * Generate canonical URL for a page
 * @param country - Country code (e.g., 'ke')
 * @param pathname - Page pathname (e.g., '/about')
 * @param options - Optional configuration
 * @returns Full canonical URL
 */
export function getCanonicalUrl(
  country: string,
  pathname: string = '/',
  options: CanonicalUrlOptions = {}
): string {
  const domain = getMainDomain()
  const subdomainEnabled = isSubdomainEnabled()
  const protocol = options.protocol || 'https'

  // Normalize pathname
  const path = pathname === '/' ? '' : pathname

  if (subdomainEnabled) {
    // Subdomain-based URL: https://ke.domainname.com/about
    return `${protocol}://${country}.${domain}${path}`
  } else {
    // Path-based URL: https://domainname.com/ke/about
    return `${protocol}://${domain}/${country}${path}`
  }
}

/**
 * Generate hreflang tags for all country versions of a page
 * @param pathname - Page pathname (e.g., '/about')
 * @returns Array of hreflang tag objects
 */
export function getHrefLangTags(pathname: string = '/'): HrefLangLink[] {
  const countries = getAllCountries()
  const tags: HrefLangLink[] = []

  // Add hreflang tags for each country
  countries.forEach(country => {
    tags.push({
      rel: 'alternate',
      hrefLang: country.code,
      href: getCanonicalUrl(country.code, pathname),
    })
  })

  // Add x-default for global/default version
  tags.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: getCanonicalUrl('ke', pathname), // Default to Kenya
  })

  return tags
}

/**
 * Generate metadata object for a page
 * @param country - Country code
 * @param pathname - Page pathname
 * @param customMetadata - Custom metadata to merge
 * @returns Metadata object for Next.js
 */
export function generatePageMetadata(
  country: string,
  pathname: string = '/',
  customMetadata: Record<string, any> = {}
): Record<string, any> {
  const canonicalUrl = getCanonicalUrl(country, pathname)
  const countryName = country === 'ke' ? 'Kenya' : country === 'tz' ? 'Tanzania' : 'Uganda'

  return {
    ...customMetadata,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        getHrefLangTags(pathname)
          .filter(tag => tag.hrefLang !== 'x-default')
          .map(tag => [tag.hrefLang, tag.href])
      ),
    },
    openGraph: {
      ...customMetadata.openGraph,
      url: canonicalUrl,
      locale: country === 'ke' ? 'en_KE' : country === 'tz' ? 'en_TZ' : 'en_UG',
    },
  }
}

/**
 * Format hreflang tags as JSX elements
 * @param pathname - Page pathname
 * @returns Array of JSX link elements
 */
export function formatHrefLangLinks(pathname: string = '/'): FormattedHrefLangLink[] {
  return getHrefLangTags(pathname).map((tag, index) => ({
    key: `hreflang-${tag.hrefLang}-${index}`,
    rel: tag.rel,
    hrefLang: tag.hrefLang,
    href: tag.href,
  }))
}

/**
 * Get country-specific metadata
 * @param country - Country code
 * @returns Country metadata
 */
export function getCountryMetadata(country: string): CountryMetadata {
  const countryMap: Record<string, CountryMetadata> = {
    ke: {
      name: 'Kenya',
      locale: 'en_KE',
      region: 'KE',
      description: 'Professional security services in Kenya',
    },
    tz: {
      name: 'Tanzania',
      locale: 'en_TZ',
      region: 'TZ',
      description: 'Professional security services in Tanzania',
    },
    ug: {
      name: 'Uganda',
      locale: 'en_UG',
      region: 'UG',
      description: 'Professional security services in Uganda',
    },
  }

  return countryMap[country] || countryMap.ke
}
