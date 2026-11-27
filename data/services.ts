// All services in one place:
// - the service records and detail pages (name, description, key points, sections, related services)
// - the homepage product list (coreServices)
// - the Individual and Corporate service menus, used by the header and the service pages

// Client copy for each service: name, short description and key points.
// Every other place that shows these uses SERVICE_COPY, so each service is written once.
const SERVICE_COPY = {
  alarm: {
    name: "Alarm Response Services",
    description: "Our alarm response services combine control room monitoring and dedicated response teams to verify alarm activations and respond to potential security incidents.",
    points: [
      "Monitoring of alarm signals through SGA Security control rooms.",
      "Coordination and dispatch of response teams when an alarm is activated.",
    ],
  },
  cctv: {
    name: "CCTV Services",
    description: "Our CCTV services provide video surveillance solutions that help clients monitor their premises and improve visibility of their security environments.",
    points: [
      "CCTV installation and video monitoring.",
      "Security surveillance for residential and commercial premises.",
    ],
  },
  courier: {
    name: "Courier Services",
    description: "SGA Security Courier provides professional collection and delivery services, supported by a network of branches, depots and drop-off points.",
    points: [
      "Collection and delivery of client consignments.",
      "Access to a network of courier service locations.",
    ],
  },
  closeProtection: {
    name: "Close Protection Services",
    description: "Our close protection services provide tailored personal security for individuals who require additional protection during their movements and activities.",
    points: [
      "VIP personal protection.",
      "Security escort services.",
    ],
  },
  business: {
    name: "Business Solutions Services",
    description: "SGA Security develops integrated security solutions based on each organisation's operational needs, combining personnel, procedures and technology to protect people and assets.",
    points: [
      "Security solutions tailored to business requirements.",
      "Integration of security personnel, procedures and technology.",
    ],
  },
  cash: {
    name: "CIT & Cash Management Services",
    description: "Our Cash-in-Transit and Cash Management services provide secure solutions for the collection, transportation, handling and management of cash and valuables.",
    points: [
      "Secure transportation of cash and valuables using tracked, armoured vehicles.",
      "Cash handling, collection and management solutions.",
    ],
  },
  tracking: {
    name: "Electronic Cargo Tracking System",
    description: "Our Electronic Cargo Tracking System enables the monitoring of cargo movements, helping clients maintain visibility of their consignments while in transit.",
    points: [
      "Electronic tracking of cargo movements.",
      "Monitoring of consignments and transport activities.",
    ],
  },
  fire: {
    name: "Fire Detection and Suppression Services",
    description: "Our fire detection and suppression services provide systems designed to identify fire risks and help protect people, property and business premises.",
    points: [
      "Fire detection system installation and support.",
      "Fixed fire suppression solutions.",
    ],
  },
  controlRoom: {
    name: "Control Room Services",
    description: "Our control room services support the monitoring and coordination of security activities, helping organisations maintain oversight of their security operations.",
    points: [
      "Monitoring of CCTV, alarms and tracking activities.",
      "Coordination of security communication and incident response.",
    ],
  },
  reception: {
    name: "Front Office & Reception Services",
    description: "Our front office and reception services provide professional reception support, helping organisations manage visitors and maintain an organised front-office environment.",
    points: [
      "Reception and visitor management.",
      "Professional front-office support.",
    ],
  },
  risk: {
    name: "Risk Assessment Services",
    description: "Our risk assessment services help organisations identify security risks and vulnerabilities, providing a basis for developing appropriate security measures.",
    points: [
      "Identification and assessment of security risks.",
      "Recommendations to support security planning and risk management.",
    ],
  },
  k9: {
    name: "K-9 Services",
    description: "Our K-9 services use security dogs and trained handlers to support security operations and strengthen the protection of people, property and premises.",
    points: [
      "Canine security support and patrols.",
      "Deployment based on specific security requirements.",
    ],
  },
}

export interface ServiceFeature {
    title: string
    description: string
}

export interface RelatedService {
    image: string
    category: string
    title: string
    summary: string
    /** Use `{cc}` as a placeholder for the country code (ke/ug/tz) */
    link: string
}

export interface ServiceData {
    serviceName: string
    serviceIcon: string
    serviceType: 'Individual' | 'Corporate'
    heroImage: string
    heroTitle: string
    /** Use `{country}` as placeholder for country name e.g. "Kenya" */
    heroDescription: string
    overviewTitle: string
    overviewDescription: string
    overviewImage: string
    featuresTitle: string
    features: ServiceFeature[]
    relatedServices: RelatedService[]
    metaTitle: string
    /** Use `{country}` as placeholder */
    metaDescription: string
    /** Where the "Request a Quote" button goes. Defaults to the contact page. */
    ctaButtonLink?: string
    /** Heading above the bullet list. Defaults to the service name. */
    handlePointsTitle?: string
    /** Lead-in line above the bullet list, e.g. "SGA Security provides:" */
    handlePointsIntro?: string
    /** Bullet list shown under "What We Handle" */
    handlePoints?: string[]
    /** Extra titled sections (e.g. Fire Alarm Response on the alarm page) */
    sections?: { title: string; paragraphs: string[]; image?: string; pointsIntro?: string; points?: string[] }[]
}

// -------------------------------------------------------------------
// INDIVIDUAL SERVICES
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// CORPORATE SERVICES
// -------------------------------------------------------------------

const securityGuarding: ServiceData = {
    serviceName: 'Security Guarding',
    serviceIcon: 'mdi:shield-account',
    serviceType: 'Corporate',
    heroImage: '/images/services/guarding.jpg',
    heroTitle: 'Professional Security Personnel for Your Business',
    heroDescription:
        'Our trained security guards provide round-the-clock protection for your business premises, assets, and personnel. With extensive experience and rigorous training, our security personnel are equipped to handle various security challenges across {country}.',
    overviewTitle: 'About Security Guarding',
    overviewDescription:
        'Security guarding is the foundation of physical security for businesses, providing visible deterrence and immediate response capabilities. Our security guards undergo comprehensive training in access control, patrol procedures, incident reporting, and emergency response. They serve as the first line of defense, monitoring entry points, conducting regular patrols, and maintaining a visible security presence that deters potential threats. Our guards are trained to be professional, courteous, and observant, ensuring they can identify and respond to security concerns while maintaining positive interaction with authorized personnel and visitors. For corporate clients, our security guarding services are tailored to business environments, including office buildings, warehouses, manufacturing facilities, and retail locations.',
    overviewImage: '/images/services/guarding.jpg',
    featuresTitle: 'Key Features',
    features: [
        { title: '24/7 Coverage', description: 'Round-the-clock security coverage ensuring your business premises are protected at all times.' },
        { title: 'Trained Personnel', description: 'All guards undergo comprehensive training in security protocols, emergency response, and customer service.' },
        { title: 'Access Control', description: 'Professional management of entry points, visitor registration, and authorization verification.' },
        { title: 'Regular Patrols', description: 'Systematic patrols of your premises to identify and address security concerns proactively.' },
        { title: 'Incident Reporting', description: 'Detailed documentation and reporting of security incidents and observations.' },
        { title: 'Business-Focused', description: 'Security solutions tailored to corporate environments and business operations.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security audits for your business.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Security Guarding Services - SGA Security {country}',
    metaDescription: 'Professional on-site security personnel trained to protect your business assets and ensure safety in {country}. 24/7 security guarding services for corporate clients.',
}

const riskAssessment: ServiceData = {
    serviceName: SERVICE_COPY.risk.name,
    handlePoints: SERVICE_COPY.risk.points,
    handlePointsTitle: "Key Points",
    serviceIcon: 'mdi:clipboard-search',
    serviceType: 'Corporate',
    heroImage: '/images/group/guarding.png',
    heroTitle: SERVICE_COPY.risk.name,
    heroDescription: SERVICE_COPY.risk.description,
    overviewTitle: 'About Risk Assessment',
    overviewDescription: SERVICE_COPY.risk.description,
    overviewImage: '/images/group/guarding.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'Threat Analysis', description: 'Comprehensive identification and analysis of potential security threats.' },
        { title: 'Vulnerability Assessment', description: 'Identification of security vulnerabilities in your current setup.' },
        { title: 'Risk Evaluation', description: 'Systematic evaluation of risks and their potential business impact.' },
        { title: 'Detailed Reporting', description: 'Comprehensive risk assessment reports with clear findings.' },
        { title: 'Recommendations', description: 'Prioritized security recommendations based on assessment findings.' },
        { title: 'Implementation Support', description: 'Guidance on implementing recommended security improvements.' },
    ],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: `${SERVICE_COPY.risk.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.risk.description,
}

// -------------------------------------------------------------------
// SERVICES FROM sgasecurity.com/our-services (copy taken word for word from the live pages)
// -------------------------------------------------------------------

const securityGuardingLive: Partial<ServiceData> = {
    heroDescription:
        "Professional guarding that welcomes visitors warmly and steps up when your assets need protecting.",
    overviewDescription:
        "Security personnel at SGA are more than just a presence at your premises or office; SGA staff embody approachability, warmly welcome visitors and create a friendly and inviting atmosphere.\n\nHowever, when the situation calls for it, SGA staff seamlessly transition into a more assertive stance to safeguard your assets.",
    handlePointsIntro: '',
    handlePointsTitle: 'Unique Features',
    handlePoints: ['Well trained', 'Vigilant', 'Physically fit', 'Good communication skills', 'Honesty and Integrity'],
    featuresTitle: '',
    features: [],
}

const courier: ServiceData = {
    serviceName: SERVICE_COPY.courier.name,
    serviceIcon: 'mdi:truck-fast',
    serviceType: 'Corporate',
    heroImage: '/images/services/courier.jpg',
    heroTitle: SERVICE_COPY.courier.name,
    heroDescription: SERVICE_COPY.courier.description,
    overviewTitle: 'About Courier Services',
    overviewDescription: SERVICE_COPY.courier.description,
    overviewImage: '/images/services/courier.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.courier.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/tracking.jpg', category: 'Security Service', title: 'Fleet Tracking', summary: 'Real-time tracking of vehicles, assets and drivers.', link: '/{cc}/services/corporate/tracking' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: `${SERVICE_COPY.courier.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.courier.description,
}

const alarmResponse: ServiceData = {
    serviceName: SERVICE_COPY.alarm.name,
    serviceIcon: 'mdi:bell-ring',
    serviceType: 'Corporate',
    heroImage: '/images/services/alarm-response.jpg',
    heroTitle: SERVICE_COPY.alarm.name,
    heroDescription: SERVICE_COPY.alarm.description,
    overviewTitle: 'About Alarm Response',
    overviewDescription: SERVICE_COPY.alarm.description,
    overviewImage: '/images/services/alarm-response.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.alarm.points,
    sections: [
        {
            title: 'Fire Alarm Response',
            image: '/images/services/control-room.jpg',
            paragraphs: [
                "SGA Security is a fully accredited fire safety and prevention provider offering services that include design, supply, installation and commission of a wide range of fire alarms ranging from systems for detection, protection, suppression, emergency lighting and nurse call systems.",
                "SGA Security fire alarm response team will carry out an assessment of client premises to ensure that the fire solution offered is tailored to meet each client’s specific requirements. Regular service and maintenance is conducted for both fire and security equipment to ensure that all systems are in good condition.",
            ],
            pointsIntro: 'SGA Security fire alarm response provides:',
            points: ['Fire alarm solutions', 'Portable fire extinguishers', 'Fire Risk assessment', 'Signages'],
        },
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: `${SERVICE_COPY.alarm.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.alarm.description,
}

const fleetTracking: ServiceData = {
    serviceName: SERVICE_COPY.tracking.name,
    serviceIcon: 'mdi:map-marker-path',
    serviceType: 'Corporate',
    heroImage: '/images/services/tracking.jpg',
    heroTitle: SERVICE_COPY.tracking.name,
    heroDescription: SERVICE_COPY.tracking.description,
    overviewTitle: 'About Electronic Cargo Tracking',
    overviewDescription: SERVICE_COPY.tracking.description,
    overviewImage: '/images/services/tracking.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.tracking.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/cit.jpg', category: 'Security Service', title: 'CIT & Cash Management', summary: 'Armoured cash transport and secure cash handling.', link: '/{cc}/services/corporate/cit-and-cash-management' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: `${SERVICE_COPY.tracking.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.tracking.description,
}

const cashManagement: ServiceData = {
    serviceName: SERVICE_COPY.cash.name,
    serviceIcon: 'mdi:bank',
    serviceType: 'Corporate',
    heroImage: '/images/services/cit.jpg',
    heroTitle: SERVICE_COPY.cash.name,
    heroDescription: SERVICE_COPY.cash.description,
    overviewTitle: 'About CIT & Cash Management',
    overviewDescription: SERVICE_COPY.cash.description,
    overviewImage: '/images/services/cit.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.cash.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/tracking.jpg', category: 'Security Service', title: 'Fleet Tracking', summary: 'Real-time tracking of vehicles, assets and drivers.', link: '/{cc}/services/corporate/tracking' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: `${SERVICE_COPY.cash.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.cash.description,
}

const securityDogs: ServiceData = {
    serviceName: SERVICE_COPY.k9.name,
    serviceIcon: 'mdi:dog',
    serviceType: 'Corporate',
    heroImage: '/images/services/k9.jpg',
    heroTitle: SERVICE_COPY.k9.name,
    heroDescription: SERVICE_COPY.k9.description,
    overviewTitle: 'About K-9 Services',
    overviewDescription: SERVICE_COPY.k9.description,
    overviewImage: '/images/services/k9.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Key Points',
    handlePoints: SERVICE_COPY.k9.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: `${SERVICE_COPY.k9.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.k9.description,
}

const cctv: ServiceData = {
    serviceName: SERVICE_COPY.cctv.name,
    serviceIcon: 'mdi:cctv',
    serviceType: 'Corporate',
    heroImage: '/images/services/cctv.jpg',
    heroTitle: SERVICE_COPY.cctv.name,
    heroDescription: SERVICE_COPY.cctv.description,
    overviewTitle: 'About CCTV Services',
    overviewDescription: SERVICE_COPY.cctv.description,
    overviewImage: '/images/services/cctv.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.cctv.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: `${SERVICE_COPY.cctv.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.cctv.description,
}

const fireDetection: ServiceData = {
    serviceName: SERVICE_COPY.fire.name,
    serviceIcon: 'mdi:fire-alert',
    serviceType: 'Corporate',
    heroImage: '/images/group/core-services/alarm.jpg',
    heroTitle: SERVICE_COPY.fire.name,
    heroDescription: SERVICE_COPY.fire.description,
    overviewTitle: 'About Fire Detection and Suppression',
    overviewDescription: SERVICE_COPY.fire.description,
    overviewImage: '/images/group/core-services/alarm.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.fire.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: `${SERVICE_COPY.fire.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.fire.description,
}

const controlRoom: ServiceData = {
    serviceName: SERVICE_COPY.controlRoom.name,
    serviceIcon: 'mdi:monitor-dashboard',
    serviceType: 'Corporate',
    heroImage: '/images/services/control-room.jpg',
    heroTitle: SERVICE_COPY.controlRoom.name,
    heroDescription: SERVICE_COPY.controlRoom.description,
    overviewTitle: 'About Control Room Services',
    overviewDescription: SERVICE_COPY.controlRoom.description,
    overviewImage: '/images/services/control-room.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.controlRoom.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: `${SERVICE_COPY.controlRoom.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.controlRoom.description,
}

const reception: ServiceData = {
    serviceName: SERVICE_COPY.reception.name,
    serviceIcon: 'mdi:account-tie',
    serviceType: 'Corporate',
    heroImage: '/images/services/reception.jpg',
    heroTitle: SERVICE_COPY.reception.name,
    heroDescription: SERVICE_COPY.reception.description,
    overviewTitle: 'About Front Office & Reception Services',
    overviewDescription: SERVICE_COPY.reception.description,
    overviewImage: '/images/services/reception.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.reception.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/control-room.jpg', category: 'Security Service', title: 'Control Room', summary: '24/7 monitored control room coordinating response.', link: '/{cc}/services/corporate/control-room' },
    ],
    metaTitle: `${SERVICE_COPY.reception.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.reception.description,
}

const closeProtection: ServiceData = {
    serviceName: SERVICE_COPY.closeProtection.name,
    serviceIcon: 'mdi:shield-account',
    serviceType: 'Corporate',
    heroImage: '/images/group/core-services/close-protection.jpg',
    heroTitle: SERVICE_COPY.closeProtection.name,
    heroDescription: SERVICE_COPY.closeProtection.description,
    overviewTitle: '',
    overviewDescription: SERVICE_COPY.closeProtection.description,
    overviewImage: '/images/group/core-services/close-protection.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.closeProtection.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: `${SERVICE_COPY.closeProtection.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.closeProtection.description,
}

const businessSolutions: ServiceData = {
    serviceName: SERVICE_COPY.business.name,
    serviceIcon: 'mdi:briefcase-outline',
    serviceType: 'Corporate',
    heroImage: '/images/group/core-services/guarding.jpg',
    heroTitle: SERVICE_COPY.business.name,
    heroDescription: SERVICE_COPY.business.description,
    overviewTitle: '',
    overviewDescription: SERVICE_COPY.business.description,
    overviewImage: '/images/group/core-services/guarding.jpg',
    handlePointsIntro: '',
    handlePointsTitle: "Key Points",
    handlePoints: SERVICE_COPY.business.points,
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: `${SERVICE_COPY.business.name} - SGA Security {country}`,
    metaDescription: SERVICE_COPY.business.description,
}

// -------------------------------------------------------------------
// LOOKUP MAPS
// -------------------------------------------------------------------

export const individualServices: Record<string, ServiceData> = {
    courier: { ...courier, serviceType: 'Individual' },
    'alarm-response': { ...alarmResponse, serviceType: 'Individual' },
    'security-k9': { ...securityDogs, serviceType: 'Individual' },
    cctv: { ...cctv, serviceType: 'Individual' },
    'close-protection': { ...closeProtection, serviceType: 'Individual' },
}

export const corporateServices: Record<string, ServiceData> = {
    'security-guarding': { ...securityGuarding, ...securityGuardingLive },
    'risk-assessment': riskAssessment,
    courier,
    'alarm-response': alarmResponse,
    tracking: fleetTracking,
    'cit-and-cash-management': cashManagement,
    'security-k9': securityDogs,
    cctv,
    'fire-detection': fireDetection,
    'control-room': controlRoom,
    reception,
    'close-protection': closeProtection,
    'business-solutions': businessSolutions,
}

/** Inject country name and country code into template strings */
export function resolveServiceData(data: ServiceData, countryName: string, countryCode: string): ServiceData {
    const replace = (str: string) => str.replace(/\{country\}/g, countryName).replace(/\{cc\}/g, countryCode)
    return {
        ...data,
        heroDescription: replace(data.heroDescription),
        metaTitle: replace(data.metaTitle),
        metaDescription: replace(data.metaDescription),
        relatedServices: data.relatedServices.map((rs) => ({
            ...rs,
            link: rs.link.replace('/{cc}', countryCode ? `/${countryCode}` : '').replace(/\{country\}/g, countryName),
        })),
    }
}

/** The parts of a service page that the service modal shows */
export interface ServiceDetail {
    overviewTitle: string
    overviewDescription: string
    handlePointsTitle?: string
    handlePointsIntro?: string
    handlePoints?: string[]
    featuresTitle?: string
    features: ServiceFeature[]
    sections?: { title: string; paragraphs: string[]; pointsIntro?: string; points?: string[] }[]
}

/** Detail for a menu path such as /services/corporate/cctv, or undefined when there is no page for it */
export function getServiceDetail(path: string, countryName: string, countryCode: string): ServiceDetail | undefined {
    const [, , kind, slug] = path.split('/')
    const data = kind === 'corporate' ? corporateServices[slug] : kind === 'individual' ? individualServices[slug] : undefined
    if (!data) return undefined
    const r = resolveServiceData(data, countryName, countryCode)
    return {
        overviewTitle: r.overviewTitle,
        overviewDescription: r.overviewDescription,
        handlePointsTitle: r.handlePointsTitle,
        handlePointsIntro: r.handlePointsIntro,
        handlePoints: r.handlePoints,
        featuresTitle: r.featuresTitle,
        features: r.features,
        sections: r.sections,
    }
}

// -------------------------------------------------------------------
// HOMEPAGE PRODUCTS
// -------------------------------------------------------------------

export interface CoreService {
  title: string
  description: string
  imageUrl: string
  countryImageUrls?: Partial<Record<'ke' | 'ug' | 'tz', string>>
  href?: string
  /** Detail page slug per service type (the page exists under services/individual or services/corporate) */
  detailSlugs?: { individual?: string; corporate?: string }
}

export const coreServices: CoreService[] = [
  {
    title: 'Home Security Solutions',
    description: 'Comprehensive security solutions for residential properties with 24/7 monitoring and rapid response.',
    imageUrl: '/images/group/core-services/home-security-family.jpg',
    href: 'https://www.sgasecurity.com/home-security-solution/',
  },
  {
    title: 'Courier Services',
    detailSlugs: { corporate: 'courier' },
    description: SERVICE_COPY.courier.description,
    imageUrl: '/images/group/core-services/courier.jpg',
  },
  {
    title: 'Guarding Services',
    detailSlugs: { corporate: 'security-guarding' },
    description: 'Professional guarding for offices, malls, logistics yards and estates.',
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
  {
    title: 'Alarm Response Services',
    detailSlugs: { corporate: 'alarm-response' },
    description: SERVICE_COPY.alarm.description,
    imageUrl: '/images/group/core-services/alarm.jpg',
  },
  {
    title: 'Electronic Cargo Tracking System',
    detailSlugs: { corporate: 'tracking' },
    description: SERVICE_COPY.tracking.description,
    imageUrl: '/images/group/core-services/tracking.jpg',
  },
  {
    title: 'CIT & Cash Management Services',
    detailSlugs: { corporate: 'cit-and-cash-management' },
    description: SERVICE_COPY.cash.description,
    imageUrl: '/images/group/core-services/cit.jpg',
  },
  {
    title: 'CCTV Services',
    detailSlugs: { individual: 'cctv', corporate: 'cctv' },
    description: SERVICE_COPY.cctv.description,
    imageUrl: '/images/group/core-services/cctv.jpg',
  },
  {
    title: 'K-9 Services',
    detailSlugs: { corporate: 'security-k9' },
    description: SERVICE_COPY.k9.description,
    imageUrl: '/images/group/core-services/k9.jpg',
  },
  // Temporarily hidden: Special Services. Uncomment this block to show it again.
  // {
  //   title: 'Special Services',
  //   description: 'Customized security solutions tailored to unique client requirements and high-risk scenarios.',
  //   imageUrl: '/images/group/core-services/cit.jpg',
  //   countryImageUrls: {
  //     ke: '/images/ke/core-services/special-services-spa0908.jpg',
  //   },
  // },
  {
    title: 'Control Room Services',
    detailSlugs: { corporate: 'control-room' },
    description: SERVICE_COPY.controlRoom.description,
    imageUrl: '/images/services/control-room.jpg',
  },
  {
    title: 'Front Office & Reception Services',
    detailSlugs: { corporate: 'reception' },
    description: SERVICE_COPY.reception.description,
    imageUrl: '/images/group/core-services/reception.jpg',
  },
  {
    title: 'Close Protection Services',
    description: SERVICE_COPY.closeProtection.description,
    imageUrl: '/images/group/core-services/close-protection.jpg',
  },
]

export const coreServiceInterestOptions = coreServices.map((service) => service.title)

// -------------------------------------------------------------------
// SERVICE MENUS
// -------------------------------------------------------------------


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
  'Front Office & Reception Services': '/images/services/reception.jpg',
}

// Reuse the card copy from the homepage list, under the menu's name; use the new photo where we have one
const fromCore = (title: string, path: string, coreTitle: string = title): MenuService => {
  const service = core(coreTitle)
  return { title, path, description: service.description, imageUrl: photos[title] ?? service.imageUrl }
}

export const individualServicesMenu: MenuService[] = [
  fromCore('Home Security Solutions', 'https://www.sgasecurity.com/home-security-solution/'),
  fromCore('Guarding Services', '/services/corporate/security-guarding'),
  fromCore('K-9 Services', '/services/individual/security-k9'),
  fromCore('Alarm Response Services', '/services/individual/alarm-response'),
  fromCore('CCTV Services', '/services/individual/cctv'),
  fromCore('Courier Services', '/services/individual/courier'),
  fromCore('Close Protection Services', '/services/individual/close-protection'),
]

export const corporateServicesMenu: MenuService[] = [
  {
    title: 'Business Solutions Services',
    path: '/services/corporate/business-solutions',
    description: SERVICE_COPY.business.description,
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
  fromCore('CCTV Services', '/services/corporate/cctv'),
  fromCore('Alarm Response Services', '/services/corporate/alarm-response'),
  fromCore('Guarding Services', '/services/corporate/security-guarding'),
  fromCore('CIT & Cash Management Services', '/services/corporate/cit-and-cash-management'),
  fromCore('K-9 Services', '/services/corporate/security-k9'),
  fromCore('Electronic Cargo Tracking System', '/services/corporate/tracking'),
  fromCore('Courier Services', '/services/corporate/courier'),
  {
    title: 'Fire Detection and Suppression Services',
    path: '/services/corporate/fire-detection',
    description: SERVICE_COPY.fire.description,
    imageUrl: '/images/group/core-services/alarm.jpg',
  },
  fromCore('Control Room Services', '/services/corporate/control-room'),
  fromCore('Close Protection Services', '/services/corporate/close-protection'),
  fromCore('Front Office & Reception Services', '/services/corporate/reception'),
  {
    title: 'Risk Assessment Services',
    path: '/services/corporate/risk-assessment',
    description: SERVICE_COPY.risk.description,
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
]

/** Resolve a menu path for a country, e.g. '/services/individual' -> '/ke/services/individual' */
export const resolveServiceHref = (countryPrefix: string, path: string): string =>
  path.startsWith('http') ? path : `${countryPrefix}${path}`
