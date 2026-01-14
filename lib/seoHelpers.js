/**
 * SEO helper functions for canonical URLs and hreflang tags
 * Handles multi-country SEO optimization
 */

import { getAllCountries, isSubdomainEnabled, getMainDomain } from './countryConfig'

/**
 * Generate canonical URL for a page
 * @param {string} country - Country code (e.g., 'ke')
 * @param {string} pathname - Page pathname (e.g., '/about')
 * @returns {string} - Full canonical URL
 */
export function getCanonicalUrl(country, pathname = '/') {
  const domain = getMainDomain()
  const subdomainEnabled = isSubdomainEnabled()
  const protocol = 'https'

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
 * @param {string} pathname - Page pathname (e.g., '/about')
 * @returns {Array} - Array of hreflang tag objects
 */
export function getHrefLangTags(pathname = '/') {
  const countries = getAllCountries()
  const tags = []

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
 * @param {string} country - Country code
 * @param {string} pathname - Page pathname
 * @param {Object} customMetadata - Custom metadata to merge
 * @returns {Object} - Metadata object for Next.js
 */
export function generatePageMetadata(country, pathname = '/', customMetadata = {}) {
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
 * @param {string} pathname - Page pathname
 * @returns {Array} - Array of JSX link elements
 */
export function formatHrefLangLinks(pathname = '/') {
  return getHrefLangTags(pathname).map((tag, index) => ({
    key: `hreflang-${tag.hrefLang}-${index}`,
    rel: tag.rel,
    hrefLang: tag.hrefLang,
    href: tag.href,
  }))
}

/**
 * Get country-specific metadata
 * @param {string} country - Country code
 * @returns {Object} - Country metadata
 */
export function getCountryMetadata(country) {
  const countryMap = {
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
