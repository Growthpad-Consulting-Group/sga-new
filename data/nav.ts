export interface NavItem {
  href: string
  label: string
  icon?: string
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

// Country header "Services" mega menu — Individual tab
export const getIndividualServicesItems = (countryPrefix: string): NavItem[] => [
  { href: 'https://sgasecurity.com/home-security-solution/', label: 'Home Security Solutions' },
  { href: `${countryPrefix}/services/corporate/security-guarding`, label: 'Guarding' },
  { href: `${countryPrefix}/contact`, label: 'K-9 Services' },
  { href: `${countryPrefix}/contact`, label: 'Alarm Response Services' },
  { href: `${countryPrefix}/contact`, label: 'Control Room Services' },
  { href: `${countryPrefix}/contact`, label: 'Courier Services' },
  { href: `${countryPrefix}/contact`, label: 'Close Protection Officer' },
]

// Country header "Services" mega menu — Corporate tab
export const getCorporateServicesItems = (countryPrefix: string): NavItem[] => [
  { href: 'https://sgasecurity.com/home-security-solution/', label: 'Business Security Solutions' },
  { href: `${countryPrefix}/contact`, label: 'CCTV Services' },
  { href: `${countryPrefix}/contact`, label: 'Cash-In-Transit Services' },
  { href: `${countryPrefix}/contact`, label: 'Cash Management Solutions' },
  { href: `${countryPrefix}/services/corporate/security-guarding`, label: 'Guarding Services' },
  { href: `${countryPrefix}/contact`, label: 'K-9 Services' },
  { href: `${countryPrefix}/contact`, label: 'Alarm Response Services' },
  { href: `${countryPrefix}/contact`, label: 'Courier Services' },
  { href: `${countryPrefix}/contact`, label: 'Control Room Services' },
  { href: `${countryPrefix}/contact`, label: 'Electronic Cargo Tracking System (ECTS)' },
  { href: `${countryPrefix}/contact`, label: 'Reception Services' },
  { href: `${countryPrefix}/contact`, label: 'Close Protection Officer' },
]

// Country header "Industries" mega menu
export const getIndustriesItems = (countryPrefix: string): NavItem[] => [
  { href: `${countryPrefix}/industries/banking`, label: 'Banking & Finance' },
  { href: `${countryPrefix}/industries/retail`, label: 'Retail & FMCG' },
  { href: `${countryPrefix}/industries/logistics`, label: 'Logistics & Ports' },
  { href: `${countryPrefix}/industries/manufacturing`, label: 'Manufacturing & Industrial' },
  { href: `${countryPrefix}/industries/real-estate`, label: 'Real Estate & Offices' },
  { href: `${countryPrefix}/industries/education`, label: 'Education & Healthcare' },
  { href: `${countryPrefix}/industries/events`, label: 'Events & Venues' },
  { href: `${countryPrefix}/industries/diplomatic`, label: 'Diplomatic & Government' },
]

// Country header mega menu "Shortcuts" column
export const getHeaderShortcuts = (countryPrefix: string): NavItem[] => [
  { href: `${countryPrefix}/safety-tips`, label: 'Safety tips' },
  { href: `${countryPrefix}/faqs`, label: 'FAQs' },
  { href: `${countryPrefix}/contact`, label: 'Contact' },
  { href: `${countryPrefix}/resources`, label: 'Resources' },
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