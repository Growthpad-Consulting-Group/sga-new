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
  { href: '/news-reports', label: 'NEWS & REPORTS' },
  { href: '#join-our-mission', label: 'CAREER' },
  { href: '/contact', label: 'CONTACT US' },
  { href: '/updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
]

// Country-specific navigation items
export const getCountryNavItems = (countryCode: string): NavItem[] => {
  const baseUrl = `/${countryCode}`
  return [
    { href: baseUrl, label: 'HOME' },
    { href: `${baseUrl}#about`, label: 'ABOUT US' },
    { href: `${baseUrl}#services`, label: 'SERVICES' },
    { href: `${baseUrl}#industries`, label: 'INDUSTRIES' },
    { href: `${baseUrl}#why-us`, label: 'WHY US' },
    { href: `${baseUrl}#blog`, label: 'BLOG' },
    { href: '/updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
    { href: `${baseUrl}#contact`, label: 'CONTACT' },
  ]
}

export const socialLinks: SocialLink[] = [
  { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'entypo-social:twitter-with-circle', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mage:instagram-circle', url: 'https://instagram.com', label: 'Instagram' },
        { icon: 'entypo-social:youtube-with-circle', url: 'https://youtube.com', label: 'Youtube' },
  { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
]

export const countries: Country[] = [
    { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'emojione:flag-for-tanzania' },
    { code: 'ug', name: 'Uganda', path: '/ug', flag: 'emojione:flag-for-uganda' },
  { code: 'ke', name: 'Kenya', path: '/ke', flag: 'emojione:flag-for-kenya' },
]