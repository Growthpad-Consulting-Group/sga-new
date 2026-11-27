import { coreServices, type CoreService } from './coreServices'

// Single source of truth for the Individual and Corporate service lists.
// Used by the country header mega menu and the services page grid.
// `path` is relative to the country (e.g. '/services/individual') or an absolute URL.

export interface MenuService {
  title: string
  path: string
  description: string
  imageUrl: string
}

const core = (title: string): CoreService => {
  const service = coreServices.find((s) => s.title === title)
  if (!service) throw new Error(`Missing core service: ${title}`)
  return service
}

// Photos taken from the 2025 SGA photo shoot (public/images/services)
const photos: Record<string, string> = {
  'Home Security Solutions': '/images/services/home-security.jpg',
  'Guarding Services': '/images/services/guarding.jpg',
  'K-9 Services': '/images/services/k9.jpg',
  'Alarm Response Services': '/images/services/alarm-response.jpg',
  'CCTV Services': '/images/services/cctv.jpg',
  'Courier Services': '/images/services/courier.jpg',
  'CIT & Cash Management Services': '/images/services/cit.jpg',
  'Electronic Cargo Tracking System': '/images/services/tracking.jpg',
  'Control Room Services': '/images/services/control-room.jpg',
  'Reception and Front Office Services': '/images/services/reception.jpg',
}

// Reuse the card copy from the homepage list, under the menu's name; use the new photo where we have one
const fromCore = (title: string, path: string, coreTitle: string = title): MenuService => {
  const service = core(coreTitle)
  return { title, path, description: service.description, imageUrl: photos[title] ?? service.imageUrl }
}

export const individualServicesMenu: MenuService[] = [
  fromCore('Home Security Solutions', 'https://www.sgasecurity.com/home-security-solution/'),
  fromCore('Guarding Services', '/services/corporate/security-guarding'),
  fromCore('K-9 Services', '/services/individual/security-dogs'),
  fromCore('Alarm Response Services', '/services/individual/alarm-response'),
  fromCore('CCTV Services', '/services/individual/cctv'),
  fromCore('Courier Services', '/services/individual/courier'),
  fromCore('Close Protection Services', '/services/individual/close-protection'),
]

export const corporateServicesMenu: MenuService[] = [
  {
    title: 'Business Solutions Services',
    path: '/services/corporate/business-solutions',
    description: 'Integrated security solutions for businesses, combining guarding, electronic systems and monitoring.',
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
  fromCore('CCTV Services', '/services/corporate/cctv'),
  fromCore('Alarm Response Services', '/services/corporate/alarm-response'),
  fromCore('Guarding Services', '/services/corporate/security-guarding'),
  fromCore('CIT & Cash Management Services', '/services/corporate/cit-and-cash-management', 'CIT and Cash Management Services'),
  fromCore('K-9 Services', '/services/corporate/security-dogs'),
  fromCore('Electronic Cargo Tracking System', '/services/corporate/tracking', 'Electronic Cargo Tracking Services'),
  fromCore('Courier Services', '/services/corporate/courier'),
  {
    title: 'Fire Detection and Suppression Services',
    path: '/services/corporate/fire-detection',
    description: 'Fire detection, alarm and suppression systems designed, installed and maintained for your premises.',
    imageUrl: '/images/group/core-services/alarm.jpg',
  },
  fromCore('Control Room Services', '/services/corporate/control-room'),
  fromCore('Close Protection Services', '/services/corporate/close-protection'),
  fromCore('Reception and Front Office Services', '/services/corporate/reception'),
  {
    title: 'Risk Assessment Services',
    path: '/services/corporate/risk-assessment',
    description: 'Security audits and risk assessments that identify vulnerabilities and recommend practical controls.',
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
]

/** Resolve a menu path for a country, e.g. '/services/individual' -> '/ke/services/individual' */
export const resolveServiceHref = (countryPrefix: string, path: string): string =>
  path.startsWith('http') ? path : `${countryPrefix}${path}`
