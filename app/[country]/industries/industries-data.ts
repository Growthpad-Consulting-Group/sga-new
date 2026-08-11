export interface IndustrySolution {
    title: string
    description: string
}

export interface RelatedService {
    image: string
    category: string
    title: string
    summary: string
    /** Use `{cc}` as a placeholder for country code (ke/ug/tz) */
    link: string
}

export interface IndustryData {
    industryName: string
    industryIcon: string
    heroImage: string
    heroTitle: string
    /** Use `{country}` as placeholder for country name e.g. "Kenya" */
    heroDescription: string
    overviewTitle: string
    overviewDescription: string
    overviewImage: string
    servicesTitle: string
    servicesDescription?: string
    services: IndustrySolution[]
    relatedServices: RelatedService[]
    metaTitle: string
    /** Use `{country}` as placeholder */
    metaDescription: string
}

// -------------------------------------------------------------------
// INDUSTRIES
// -------------------------------------------------------------------

const banking: IndustryData = {
    industryName: 'Banking & Finance',
    industryIcon: 'mdi:bank',
    heroImage: '/images/ke/industries/banking/hero.png',
    heroTitle: 'Fortress Security for Financial Institutions',
    heroDescription:
        'High-security solutions for banks, financial institutions, and ATMs across {country}. We protect financial assets, staff, and customers with advanced security systems and highly trained personnel.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Banks operate public-facing facilities that handle cash and sensitive data daily. These environments combine high customer traffic, strict compliance requirements, and low tolerance for downtime. Security must be visible enough to deter threats, controlled enough to manage access, and responsive enough to handle incidents quickly without disrupting customer experience or core operations. This is why banking security works best when it is grounded in clear procedures at access points, consistent coverage of critical zones, and disciplined incident escalation that management can audit and trust.',
    overviewImage: '/images/ke/industries/banking/hero.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Branch entrances and teller halls', description: 'Controlled entry points to manage visitor flow and reduce unauthorized access.' },
        { title: 'Vaults and cash rooms', description: 'Strict access control and monitoring to protect high-value assets.' },
        { title: 'ATM and perimeter zones', description: 'Monitored to prevent tampering, fraud, and after-hours incidents.' },
        { title: 'Cash-in-Transit routes', description: 'Strict access control and monitoring to protect high-value assets.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Alarm & Response', summary: '24/7 monitoring with rapid deployment.', link: '/{cc}/services/individual/24-7-monitoring' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional guards for financial institutions.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Personal Panic App', summary: 'One-tap SOS linked to our control room.', link: '/contact' },
    ],
    metaTitle: 'Banking & Finance Security - SGA Security {country}',
    metaDescription: 'High-security solutions for banks, financial institutions, and ATMs in {country}. Protecting financial assets, staff, and customers with advanced security systems.',
}

const diplomatic: IndustryData = {
    industryName: 'Diplomatic & Government',
    industryIcon: 'mdi:shield-account',
    heroImage: '/images/ug/education.png',
    heroTitle: 'Protecting Diplomatic Missions and Government Facilities',
    heroDescription:
        'High-level security services for diplomatic missions, government facilities, and international organizations across {country}. We protect sensitive operations and personnel with specialized security solutions.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Diplomatic missions and government facilities require the highest levels of security to protect sensitive operations, classified information, and personnel. These facilities combine strict access control requirements, high-profile visitors, and the need to maintain diplomatic protocols. Security must be discreet enough to support diplomatic activities, robust enough to deter sophisticated threats, and responsive enough to handle incidents quickly without compromising operations. This is why diplomatic security works best when it is grounded in comprehensive background checks for personnel, multi-layered access control systems, and disciplined incident response protocols that diplomatic staff and government officials can trust.',
    overviewImage: '/images/ug/education.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Embassy and consulate entrances', description: 'Highly controlled access points with advanced screening to manage visitor flow and ensure only authorized individuals enter diplomatic premises.' },
        { title: 'Government buildings and offices', description: 'Restricted access control and monitoring to protect sensitive operations and classified information.' },
        { title: 'Residential compounds for diplomatic staff', description: 'Comprehensive security coverage to protect diplomatic personnel and their families.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and access control.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security audits.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Diplomatic & Government Security - SGA Security {country}',
    metaDescription: 'High-level security services for diplomatic missions and government facilities in {country}. Protecting sensitive operations and personnel.',
}

const education: IndustryData = {
    industryName: 'Education & Healthcare',
    industryIcon: 'mdi:school',
    heroImage: '/images/ug/education.png',
    heroTitle: "Protecting {country}'s Future Leaders and Healthcare",
    heroDescription:
        'Specialized security services for educational institutions and healthcare facilities across {country}. We create safe learning and healing environments where students and patients can focus without security concerns.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Educational institutions and healthcare facilities operate as critical environments that must balance accessibility with safety and security. Schools and universities combine high student and staff traffic with visitor management needs, while hospitals and clinics require protection of sensitive areas and valuable medical assets. Security must be visible enough to deter threats, unobtrusive enough to support learning and healing, and responsive enough to handle incidents quickly without disrupting educational activities or medical care. This is why education and healthcare security works best when it is grounded in clear access control at entry points, consistent coverage of critical zones, and disciplined emergency protocols that administrators, parents, and medical staff can trust.',
    overviewImage: '/images/ug/education.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Educational entrances and campus zones', description: 'Controlled entry points to manage visitor flow and ensure only authorized individuals enter educational facilities.' },
        { title: 'Healthcare emergency departments', description: 'Controlled access points to manage patient and visitor flow while ensuring rapid emergency response.' },
        { title: 'Classrooms, labs, and medical facilities', description: 'Access control and monitoring to protect students, patients, and staff during learning and treatment hours.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional guards for schools and hospitals.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/education.png', category: 'Security Service', title: '24/7 Monitoring', summary: 'Continuous surveillance of your facility.', link: '/{cc}/services/individual/24-7-monitoring' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Emergency Response', summary: 'Rapid deployment for medical and security emergencies.', link: '/{cc}/services/individual/emergency-response' },
    ],
    metaTitle: 'Education & Healthcare Security - SGA Security {country}',
    metaDescription: 'Specialized security services for schools, colleges, and healthcare facilities in {country}. Ensuring safe learning and healing environments.',
}

const events: IndustryData = {
    industryName: 'Events & Venues',
    industryIcon: 'mdi:calendar-star',
    heroImage: '/images/ug/education.png',
    heroTitle: 'Securing Memorable Experiences',
    heroDescription:
        'Professional event security services for concerts, conferences, sports events, and venues across {country}. We ensure safe and secure experiences for attendees and organizers.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Events and venues require security that balances welcoming atmospheres for attendees with protection of people and assets. These environments combine high attendee traffic, temporary setups, and the need to maintain positive event experiences. Security must be visible enough to deter threats, approachable enough to support event atmosphere, and responsive enough to handle incidents quickly without disrupting activities. This is why event security works best when it is grounded in clear access control at entry points, consistent coverage of event spaces and parking areas, and disciplined crowd management that event organizers and attendees can trust.',
    overviewImage: '/images/ug/education.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Event entrances and ticket gates', description: 'Controlled access points to manage attendee flow and ensure only authorized individuals enter the venue.' },
        { title: 'VIP areas and backstage zones', description: 'Restricted access control to protect performers, speakers, and special guests.' },
        { title: 'Parking areas and perimeter boundaries', description: 'Monitoring to ensure attendee safety during arrival and departure, and prevent unauthorized access.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Event Security', summary: 'Professional security for your events.', link: '/{cc}/services/corporate/event-security' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security audits for venues.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Events & Venues Security - SGA Security {country}',
    metaDescription: 'Professional event security services for concerts, conferences, and sports events in {country}. Ensuring safe and secure experiences.',
}

const logistics: IndustryData = {
    industryName: 'Logistics & Supply Chain',
    industryIcon: 'mdi:truck-delivery',
    heroImage: '/images/ke/industries/logistics/hero.png',
    heroTitle: 'Securing the Flow of Commerce',
    heroDescription:
        'High-security solutions for logistics facilities, warehouses, and distribution centers across {country}. We protect inventory, staff, and supply chain operations with advanced security and professional personnel.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Logistics and supply chain facilities operate as high-volume environments that handle valuable inventory and diverse transportation activities daily. These environments combine complex layouts, high vehicle traffic, and the need to protect assets from theft and tampering. Security must be robust enough to protect high-value areas, controlled enough to manage vehicle and personnel movement, and responsive enough to handle incidents quickly without disrupting supply chain operations. This is why logistics security works best when it is grounded in clear access control at entry points, consistent monitoring of loading docks and storage zones, and disciplined cargo protection protocols that logistics managers and clients can trust.',
    overviewImage: '/images/ke/industries/logistics/hero.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Warehouse and distribution center gates', description: 'Controlled entry points to manage vehicle and personnel flow while preventing unauthorized access.' },
        { title: 'Loading docks and cargo zones', description: 'Monitoring and access control to protect assets during loading and unloading activities.' },
        { title: 'Inventory storage and high-value cages', description: 'Strict access control and monitoring to protect valuable goods and sensitive inventory.' },
        { title: 'Vehicle parking and transit areas', description: 'Monitoring to ensure driver safety and protect transport vehicles while on premises.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and monitoring.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: '24/7 Monitoring', summary: 'Continuous monitoring of your facility.', link: '/{cc}/services/individual/24-7-monitoring' },
    ],
    metaTitle: 'Logistics & Supply Chain Security - SGA Security {country}',
    metaDescription: 'High-security solutions for logistics facilities and warehouses in {country}. Protecting inventory and supply chain operations.',
}

const manufacturing: IndustryData = {
    industryName: 'Manufacturing & Industry',
    industryIcon: 'mdi:factory',
    heroImage: '/images/ke/industries/manufacturing/hero.png',
    heroTitle: 'Industrial-Strength Security Solutions',
    heroDescription:
        'High-security solutions for manufacturing facilities, factories, and industrial sites across {country}. We protect assets, production processes, and staff with specialized security solutions.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Manufacturing and industrial facilities operate as complex environments that combine production activities, valuable equipment, and diverse personnel movement. These environments require security that balances safety compliance with protection of assets and operational continuity. Security must be visible enough to deter theft, robust enough to protect restricted zones, and responsive enough to handle incidents quickly without disrupting production schedules. This is why manufacturing security works best when it is grounded in clear access control procedures, consistent coverage of production and storage areas, and disciplined safety-security coordination that facility managers and staff can trust.',
    overviewImage: '/images/ke/industries/manufacturing/hero.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Main factory and site entrances', description: 'Controlled entry points to manage employee and visitor flow while preventing unauthorized access.' },
        { title: 'Production floors and equipment areas', description: 'Restricted access zones to protect valuable manufacturing equipment and production processes.' },
        { title: 'Warehouses and inventory storage', description: 'Strict access control and monitoring to protect raw materials and finished products.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security for factories.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and access control.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security audits for industrial sites.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Manufacturing & Industry Security - SGA Security {country}',
    metaDescription: 'High-security solutions for manufacturing facilities and factories in {country}. Protecting assets and production processes.',
}

const realEstate: IndustryData = {
    industryName: 'Real Estate & Offices',
    industryIcon: 'mdi:office-building',
    heroImage: '/images/ug/education.png',
    heroTitle: 'Securing Your Property Investments',
    heroDescription:
        'Comprehensive security solutions for office buildings, commercial properties, and real estate developments across {country}. We protect tenants, assets, and property value with professional security services.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Office buildings and commercial real estate require security that balances accessibility for tenants and visitors with protection of assets and property. These facilities combine high foot traffic, multiple tenants, and the need to maintain a professional business environment. Security must be visible enough to deter threats, professional enough to support business operations, and responsive enough to handle incidents quickly without disrupting daily activities. This is why real estate security works best when it is grounded in clear access control procedures at building entrances, consistent coverage of common areas and parking facilities, and disciplined incident response that property managers and tenants can trust.',
    overviewImage: '/images/ug/education.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Building entrances and lobbies', description: 'Controlled access points to manage visitor flow and ensure only authorized individuals enter the premises.' },
        { title: 'Parking facilities and garages', description: 'Monitoring and access control to protect vehicles and ensure tenant safety during arrival and departure.' },
        { title: 'Common areas and corridors', description: 'Security coverage for shared spaces to maintain a safe environment for all tenants and visitors.' },
        { title: 'Perimeter boundaries and loading docks', description: 'Monitoring to prevent unauthorized access and protect property assets.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional guards for office buildings.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and access control.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Alarm & Response', summary: '24/7 monitoring with rapid deployment.', link: '/{cc}/services/individual/24-7-monitoring' },
    ],
    metaTitle: 'Real Estate & Offices Security - SGA Security {country}',
    metaDescription: 'Comprehensive security solutions for office buildings and commercial properties in {country}. Protecting tenants and property value.',
}

const retail: IndustryData = {
    industryName: 'Retail & Commercial',
    industryIcon: 'mdi:store',
    heroImage: '/images/ke/industries/retail/hero.png',
    heroTitle: 'Securing Success in Every Transaction',
    heroDescription:
        'Professional security solutions for retail stores, shopping malls, and commercial centers across {country}. We protect merchandise, staff, and customers with advanced security and professional personnel.',
    overviewTitle: 'About this industry',
    overviewDescription:
        'Retail and commercial facilities operate as high-traffic environments that balance welcoming customer experiences with the need to protect merchandise and people. These environments combine open accessibility, valuable inventory, and diverse personnel movement daily. Security must be discreet enough to support shopping experience, alert enough to prevent loss and theft, and responsive enough to handle incidents quickly without disrupting business operations. This is why retail security works best when it is grounded in clear entry and exit monitoring, consistent coverage of retail floors and storage zones, and disciplined incident response that retail managers and customers can trust.',
    overviewImage: '/images/ke/industries/retail/hero.png',
    servicesTitle: 'What we typically secure',
    services: [
        { title: 'Main store and mall entrances', description: 'Controlled access points to manage customer flow and ensure a safe shopping environment.' },
        { title: 'Retail floors and product zones', description: 'Visible security presence and monitoring to deter theft and ensure customer safety.' },
        { title: 'Cash offices and payment areas', description: 'Monitoring and controlled access to protect financial transactions and staff.' },
        { title: 'Warehouses and stock storage', description: 'Strict access control and monitoring to protect merchandise and inventory assets.' },
    ],
    relatedServices: [
        { image: '/images/ug/residentials.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional guards for retail stores.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/ug/education.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and loss prevention.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/ug/healthcare.png', category: 'Security Service', title: 'Alarm & Response', summary: '24/7 monitoring with rapid deployment.', link: '/{cc}/services/individual/24-7-monitoring' },
    ],
    metaTitle: 'Retail & Commercial Security - SGA Security {country}',
    metaDescription: 'Professional security solutions for retail stores and shopping malls in {country}. Protecting merchandise, staff, and customers.',
}

// -------------------------------------------------------------------
// LOOKUP MAP
// -------------------------------------------------------------------

export const industriesData: Record<string, IndustryData> = {
    banking: banking,
    diplomatic: diplomatic,
    education: education,
    events: events,
    logistics: logistics,
    manufacturing: manufacturing,
    'real-estate': realEstate,
    retail: retail,
}

/** Inject country name and country code into template strings */
export function resolveIndustryData(data: IndustryData, countryName: string, countryCode: string): IndustryData {
    const replace = (str: string) => str.replace(/\{country\}/g, countryName).replace(/\{cc\}/g, countryCode)
    return {
        ...data,
        heroDescription: replace(data.heroDescription),
        metaTitle: replace(data.metaTitle),
        metaDescription: replace(data.metaDescription),
        relatedServices: data.relatedServices.map((rs) => ({ ...rs, link: replace(rs.link) })),
    }
}
