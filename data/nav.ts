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

export const navItems: NavItem[] = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/sustainability', label: 'SUSTAINABILITY' },
  { href: '/news-reports', label: 'NEWS & REPORTS' },
  { href: '#join-our-mission', label: 'CAREER' },
  { href: '/contact', label: 'CONTACT US' },
  { href: '/updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
]

export const socialLinks: SocialLink[] = [
  { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
]

export const countries: Country[] = [
  { code: 'ke', name: 'Kenya', path: '/ke', flag: 'twemoji:flag-kenya' },
  { code: 'ug', name: 'Uganda', path: '/ug', flag: 'twemoji:flag-uganda' },
  { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'twemoji:flag-tanzania' },
]