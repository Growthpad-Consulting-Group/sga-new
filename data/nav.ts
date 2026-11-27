import { industriesData } from './industries-data'
import { countryIndustries, type CountryCodeWithIndustries } from './industry-clients'
import { individualServicesMenu, corporateServicesMenu, resolveServiceHref } from './servicesMenu'
export interface NavItem {
  href: string
  label: string
  icon?: string
  isDropdown?: boolean
  dropdownType?: 'services' | 'industries'
}

export interface SocialLink {
  icon: string
  url: string
  label: string
}

export interface Country {
  code: string
  name: string
  path: string
  flag: string
}

// Group/Global navigation items
export const navItems: NavItem[] = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/sustainability', label: 'SUSTAINABILITY' },
  { href: '/news-reports', label: 'NEWS' },
  { href: '/careers', label: 'CAREERS' },
  { href: '/contact', label: 'CONTACT US' },
  // { href: '/updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
]

// Country-specific navigation items
export const getCountryNavItems = (countryCode: string): NavItem[] => {
  const baseUrl = `/${countryCode}`
  return [
    { href: baseUrl, label: 'HOME' },
    { href: `${baseUrl}/about`, label: 'ABOUT US' },
    { href: `${baseUrl}#services`, label: 'PRODUCT & SERVICES' },
    { href: `${baseUrl}#industries`, label: 'INDUSTRIES' },
    { href: `${baseUrl}/updates`, label: 'NEWS' },
    { href: `${baseUrl}#contact`, label: 'CONTACT' },
    { href: '/', label: 'SGA GROUP' },
  ]
}

// Country header "Services" mega menu. Both tabs read the shared list in data/servicesMenu.ts,
// the same list the services page uses.
export const getIndividualServicesItems = (countryPrefix: string): NavItem[] =>
  individualServicesMenu.map((s) => ({ href: resolveServiceHref(countryPrefix, s.path), label: s.title }))

export const getCorporateServicesItems = (countryPrefix: string): NavItem[] =>
  corporateServicesMenu.map((s) => ({ href: resolveServiceHref(countryPrefix, s.path), label: s.title }))

// Country header "Industries" mega menu — all industries share one page's
// worth of content (accordion sections), but it's served at both /industries
// and /[country]/industries so navigating from a country page doesn't kick
// you out of that country's header/context. Link within the current country.
// Country header "Industries" mega menu. Reads from the single industries
// source (data/industries-data.ts), so the menu always matches the industries shown.
// Kenya and Uganda list their own industries (same as their industries page); others use the shared list
export const getIndustriesItems = (countryPrefix: string): NavItem[] => {
  const code = countryPrefix.replace(/^\//, '') as CountryCodeWithIndustries
  const ownIndustries = countryIndustries[code]
  if (ownIndustries) {
    return ownIndustries.map((industry) => ({
      href: `${countryPrefix}/industries#${industry.id}`,
      label: industry.title,
    }))
  }
  return Object.entries(industriesData).map(([slug, industry]) => ({
    href: `${countryPrefix}/industries#${slug}`,
    label: industry.industryName,
  }))
}

// Country header mega menu "Shortcuts" column
export const getHeaderShortcuts = (countryPrefix: string): NavItem[] => [
  { href: `${countryPrefix}/safety-tips`, label: 'Safety tips' },
  { href: `${countryPrefix}/faqs`, label: 'FAQs' },
  { href: `${countryPrefix}/contact`, label: 'Contact' },
  { href: `${countryPrefix}/resources`, label: 'Resources' },
]

// Country header's top nav bar (distinct from getCountryNavItems above,
// which is unreachable dead code — Header.tsx only renders on non-country
// pages, so its isCountryPage branch never executes)
export const getCountryHeaderNavItems = (countryPrefix: string): NavItem[] => [
  { href: '/', label: 'SGA GROUP' },
  { href: '#services', label: 'SERVICES', isDropdown: true, dropdownType: 'services' },
  { href: `${countryPrefix}/industries`, label: 'INDUSTRIES', isDropdown: true, dropdownType: 'industries' },
  { href: `${countryPrefix}/why-us`, label: 'ABOUT US' },
  { href: `${countryPrefix}/updates`, label: 'NEWS' },
  { href: `${countryPrefix}/careers`, label: 'CAREERS' },
  { href: `${countryPrefix}/contact`, label: 'CONTACT' },
]

export const socialLinks: SocialLink[] = [
  { icon: 'mdi:facebook', url: 'https://www.facebook.com/people/SGA-Security/100091922621281/', label: 'Facebook' },
  { icon: 'tabler:brand-x', url: 'https://twitter.com/SGA_Security', label: 'Twitter' },
  { icon: 'mage:instagram-circle', url: 'https://www.instagram.com/sgasecurity/', label: 'Instagram' },
  { icon: 'entypo-social:youtube-with-circle', url: 'https://www.youtube.com/channel/UCusdwg-MGFNmPynBqBkajcw', label: 'Youtube' },
  { icon: 'mdi:linkedin', url: 'https://www.linkedin.com/company/5360016/', label: 'LinkedIn' },
]

export const countries: Country[] = [
  { code: 'ke', name: 'Kenya', path: '/ke', flag: 'emojione:flag-for-kenya' },
  { code: 'ug', name: 'Uganda', path: '/ug', flag: 'emojione:flag-for-uganda' },
  { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'emojione:flag-for-tanzania' },
]

// Kept as an alias for now — CountryHeader.tsx and Header.tsx both reference
// this name; remove it if that call site is ever consolidated onto `countries`.
export const countryHeaderCountries: Country[] = countries
