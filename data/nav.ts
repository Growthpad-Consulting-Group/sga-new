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
  { href: '/news-reports', label: 'NEWS & INSIGHTS' },
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
    { href: `${baseUrl}#services`, label: 'SERVICES' },
    { href: `${baseUrl}#industries`, label: 'INDUSTRIES' },
    { href: `${baseUrl}/why-us`, label: 'WHY US' },
    { href: `${baseUrl}/updates`, label: 'NEWS & INSIGHTS' },
    { href: `${baseUrl}#contact`, label: 'CONTACT' },
    { href: '/', label: 'SGA GROUP' },
  ]
}

// Country header "Services" mega menu — Individual tab. Items without a
// dedicated page yet link to the Individual services listing page rather
// than a dead link or an unrelated Contact page.
export const getIndividualServicesItems = (countryPrefix: string): NavItem[] => [
  { href: 'https://sgasecurity.com/home-security-solution/', label: 'Home Security Solutions' },
  { href: `${countryPrefix}/services/corporate/security-guarding`, label: 'Guarding' },
  { href: `${countryPrefix}/services/individual`, label: 'K-9 Services' },
  { href: `${countryPrefix}/services/individual`, label: 'Alarm Response Services' },
  { href: `${countryPrefix}/services/individual`, label: 'Control Room Services' },
  { href: `${countryPrefix}/services/individual`, label: 'Courier Services' },
  { href: `${countryPrefix}/services/individual`, label: 'Close Protection Officer' },
]

// Country header "Services" mega menu — Corporate tab. Same fallback rule
// as above, pointing at the Corporate services listing page instead.
export const getCorporateServicesItems = (countryPrefix: string): NavItem[] => [
  { href: 'https://sgasecurity.com/home-security-solution/', label: 'Business Security Solutions' },
  { href: `${countryPrefix}/services/corporate`, label: 'CCTV Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Cash-In-Transit Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Cash Management Solutions' },
  { href: `${countryPrefix}/services/corporate/security-guarding`, label: 'Guarding Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'K-9 Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Alarm Response Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Courier Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Control Room Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Electronic Cargo Tracking System (ECTS)' },
  { href: `${countryPrefix}/services/corporate`, label: 'Reception Services' },
  { href: `${countryPrefix}/services/corporate`, label: 'Close Protection Officer' },
]

// Country header "Industries" mega menu — all industries share one page's
// worth of content (accordion sections), but it's served at both /industries
// and /[country]/industries so navigating from a country page doesn't kick
// you out of that country's header/context. Link within the current country.
export const getIndustriesItems = (countryPrefix: string): NavItem[] => [
  { href: `${countryPrefix}/industries#banking`, label: 'Banking & Finance' },
  { href: `${countryPrefix}/industries#retail`, label: 'Retail & FMCG' },
  { href: `${countryPrefix}/industries#logistics`, label: 'Logistics & Ports' },
  { href: `${countryPrefix}/industries#manufacturing`, label: 'Manufacturing & Industrial' },
  { href: `${countryPrefix}/industries#real-estate`, label: 'Real Estate & Offices' },
  { href: `${countryPrefix}/industries#education`, label: 'Education & Healthcare' },
  { href: `${countryPrefix}/industries#events`, label: 'Events & Venues' },
  { href: `${countryPrefix}/industries#diplomatic`, label: 'Diplomatic & Government' },
]

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
  { href: `${countryPrefix}/about`, label: 'ABOUT US' },
  { href: '#services', label: 'SERVICES', isDropdown: true, dropdownType: 'services' },
  { href: `${countryPrefix}/industries`, label: 'INDUSTRIES', isDropdown: true, dropdownType: 'industries' },
  { href: `${countryPrefix}/why-us`, label: 'WHY US' },
  { href: `${countryPrefix}/updates`, label: 'NEWS & INSIGHTS' },
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
  { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'emojione:flag-for-tanzania' },
  { code: 'ug', name: 'Uganda', path: '/ug', flag: 'emojione:flag-for-uganda' },
  { code: 'ke', name: 'Kenya', path: '/ke', flag: 'emojione:flag-for-kenya' },
]

// Same data, Kenya-first order — kept separate from `countries` above so
// moving CountryHeader's inline copy here doesn't silently reorder the
// group header's (Header.tsx) country switcher, which relies on `countries`.
export const countryHeaderCountries: Country[] = [
  { code: 'ke', name: 'Kenya', path: '/ke', flag: 'emojione:flag-for-kenya' },
  { code: 'ug', name: 'Uganda', path: '/ug', flag: 'emojione:flag-for-uganda' },
  { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'emojione:flag-for-tanzania' },
]