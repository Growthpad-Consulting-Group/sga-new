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
    serviceName: 'Risk Assessment',
    serviceIcon: 'mdi:clipboard-search',
    serviceType: 'Corporate',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Comprehensive Security Risk Analysis',
    heroDescription:
        'Our risk assessment services provide thorough analysis of your business security vulnerabilities. We identify potential threats and develop customized security strategies to protect your assets and operations across {country}.',
    overviewTitle: 'About Risk Assessment',
    overviewDescription:
        'Security risk assessment is a systematic process of identifying, analyzing, and evaluating security risks to your business. Our risk assessment methodology follows industry best practices and international security standards. The assessment process includes a thorough review of your current security measures, physical security inspection, threat analysis, vulnerability assessment, and risk evaluation. Our security consultants analyze potential threats specific to your industry, location, and business type. Based on the assessment findings, we develop detailed reports outlining identified risks, their potential impact, and prioritized recommendations for risk mitigation. Risk assessment services help businesses make informed decisions about security investments and develop effective security strategies aligned with business needs.',
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
    metaTitle: 'Security Risk Assessment Services - SGA Security {country}',
    metaDescription: 'Comprehensive security risk assessment and vulnerability analysis for businesses in {country}. Identify threats and strengthen your security posture.',
}

// -------------------------------------------------------------------
// SERVICES FROM sgasecurity.com/our-services (copy taken word for word from the live pages)
// -------------------------------------------------------------------

const securityGuardingLive: Partial<ServiceData> = {
    heroDescription:
        "SGA Security provides physical security services in combination with technology based on specific client requirements.",
    overviewDescription:
        "The group’s foundation in the field of intelligence gathering is always evident in the way recruitment as well as training and management of staff is conducted. The SGA Security approach embraces people, procedures, intelligence and technology to achieve real value and peace of mind while effectively offering a package of tailor made security solutions. Based on the needs of our clients, SGA Security offers the latest technology and supporting tools such as digital cameras, guarding monitoring systems, fixed and remote alarm response, sensor lights in combination with Control Room services. In Tanzania and Uganda, SGA Security offers its own armed guarding services while in Kenya SGA Security can provide contracted armed guarding services in cooperation with Police.\n\nSGA Security guarding services expand from airports to malls, commercial to residential buildings, manned guarding to canine security patrols. All personnel are specifically trained to match client’s exact requirements at the SGA Security training school where the training curriculums ensure that security officers have the skills and confidence to fully comply with contracted service requirements.",
    handlePointsIntro: '',
    handlePointsTitle: 'Our Security Guarding Services Include',
    handlePoints: ['Day & Night Guards', 'Mobile patrols', 'Diplomatic protection', 'Guard alert patrol systems', 'None core implant staff'],
    featuresTitle: '',
    features: [],
}

const courier: ServiceData = {
    serviceName: 'Courier',
    serviceIcon: 'mdi:truck-fast',
    serviceType: 'Corporate',
    heroImage: '/images/services/courier.jpg',
    heroTitle: 'Secure Courier and Delivery Services',
    heroDescription:
        "SGA Security Courier provides a range of professional and efficient courier services. With experienced and friendly staff SGA Security is dedicated to catering to all client delivery needs within a large network of branches, depots and drop off points in Uganda and Tanzania.",
    overviewTitle: '',
    overviewDescription: '',
    overviewImage: '/images/services/courier.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our Courier Services Include',
    handlePoints: [
        'National and International Courier',
        'High Value manned courier',
        'Dedicated air courier',
        'Secure and bonded warehousing',
        'Contract storage and distribution',
        'Messenger and mailroom services',
        'Distribution and supply chain',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/tracking.jpg', category: 'Security Service', title: 'Fleet Tracking', summary: 'Real-time tracking of vehicles, assets and drivers.', link: '/{cc}/services/corporate/tracking' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: 'Courier Services - SGA Security {country}',
    metaDescription: 'Professional courier, high value manned delivery and secure warehousing services from SGA Security in {country}.',
}

const alarmResponse: ServiceData = {
    serviceName: 'Alarm Response',
    serviceIcon: 'mdi:bell-ring',
    serviceType: 'Corporate',
    heroImage: '/images/services/alarm-response.jpg',
    heroTitle: 'Armed Response Backed by 24/7 Monitoring',
    heroDescription:
        "At SGA Security, your security is our highest priority.",
    overviewTitle: 'About Alarm Response',
    overviewDescription:
        "Monitoring and armed response services are closely integrated, and combine hi-tech solutions with dedicated manpower that is there when you need it.\n\nWhen an activation signal is received at one of the SGA Security Control Rooms professional and well trained staff will coordinate and dispatch armed or unarmed response teams to verify whether the activation was inadvertent or if an actual security breach has taken place.\n\nSGA Security alarm response agents will verify the status of the client’s property, facility or residence. Once a threat has been identified, the response agent will immediately notify Control Room to dispatch law enforcement/Police.\n\nIn Tanzania and Uganda, SGA Security response teams are armed whilst in Kenya most response teams are accompanied by armed Police.\n\nEach of our Control Rooms either centrally or locally are equipped with the latest technology.",
    overviewImage: '/images/services/alarm-response.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our Alarm Response Services Include',
    handlePoints: [
        '24/7 Control Room monitoring',
        'Strategically based radio dispatched alarm response vehicles that will respond in minutes',
        'Highly trained unarmed and armed units',
        'Fleet of vehicles equipped with satellite tracking',
        'K9 tracker dogs response unit on call',
        'Self-testing digital alarm transmitter equipped with anti-tamper device',
        'SMS alerts for client notification of alarm occurrence',
        'Roadside rescue service for clients',
        'Video alarm verification',
        'Fire alarm monitoring and response',
    ],
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
    metaTitle: 'Alarm Response Services - SGA Security {country}',
    metaDescription: '24/7 alarm monitoring and armed response from SGA Security in {country}. Verified response teams, backed by our control room.',
}

const fleetTracking: ServiceData = {
    serviceName: 'Fleet Tracking',
    serviceIcon: 'mdi:map-marker-path',
    serviceType: 'Corporate',
    heroImage: '/images/services/tracking.jpg',
    heroTitle: 'Real-Time Fleet and Asset Tracking',
    heroDescription:
        "As a business owner, you want to know how your vehicles are being handled, where they have travelled to and ensure that your drivers are arriving on time to your customers.",
    overviewTitle: 'About Fleet Tracking',
    overviewDescription:
        "SGA Security fleet tracking solutions allows clients to monitor fleet and assets in real-time, save on (fuel) costs and improve the safety and efficiency of all fleet resulting in customer satisfaction.\n\nSGA Security uses GPS and Satellite systems to monitor installed units at the 24-hour operational Control Room where all alerts are logged and reported including Geofencing, remote immobilization and route monitoring.",
    overviewImage: '/images/services/tracking.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our Fleet Tracking Services Include',
    handlePoints: [
        'Asset tracking (including movable containers) and investigation',
        'Telematics control systems',
        'Outsourced fleet management',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/cit.jpg', category: 'Security Service', title: 'CIT & Cash Management', summary: 'Armoured cash transport and secure cash handling.', link: '/{cc}/services/corporate/cit-and-cash-management' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: 'Fleet Tracking Services - SGA Security {country}',
    metaDescription: 'Real-time GPS and satellite fleet and asset tracking from SGA Security, monitored 24 hours in {country}.',
}

const cashManagement: ServiceData = {
    serviceName: 'CIT & Cash Management',
    serviceIcon: 'mdi:bank',
    serviceType: 'Corporate',
    heroImage: '/images/services/cit.jpg',
    heroTitle: 'Secure Cash-In-Transit and Cash Management',
    heroDescription:
        "SGA Security has the expertise and experience to provide efficient and secure cash management services that can be tailored to meet the requirements of each customer.",
    overviewTitle: 'About CIT & Cash Management',
    overviewDescription:
        "These services are carried out by professional security personnel, who have undergone specialized training and extensive vetting procedures to meet high industry standards.\n\nSGA Security Cash-In-Transit fleet of vehicles are fully armoured and equipped with sophisticated interlocking systems all of which are tracked and monitored at our Control Rooms. By allowing SGA Security to transport cash or other valuables, our customers experience reduced risk and improved safety for their customers and staff, convenient collection and delivery of cash and valuables, saving them time and money, an all risk insurance cover for Cash In Transit as well as Table to Table service.\n\nTypical clients are financial institutions, retail outlets, petrol stations, government bodies, churches, restaurants among others.",
    overviewImage: '/images/services/cit.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our CIT & Cash Management Services Include',
    handlePoints: [
        'Cash In Transit armoured transport with crew and armed escort',
        'Cash air operations',
        'Cash handling and sorting',
        'ATM stuffing and maintenance',
        'Point of Sale cash solutions',
        'Secure vaulting',
        'Forex and valuables IMPEX',
        'Payroll preparation and pay-outs',
        'Implant financial staff and tellers',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/tracking.jpg', category: 'Security Service', title: 'Fleet Tracking', summary: 'Real-time tracking of vehicles, assets and drivers.', link: '/{cc}/services/corporate/tracking' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: 'CIT & Cash Management Services - SGA Security {country}',
    metaDescription: 'Armoured cash-in-transit, cash handling and secure vaulting from SGA Security in {country}.',
}

const securityDogs: ServiceData = {
    serviceName: 'Security Dogs (K9)',
    serviceIcon: 'mdi:dog',
    serviceType: 'Corporate',
    heroImage: '/images/services/k9.jpg',
    heroTitle: 'Trained Security Dogs and Handlers',
    heroDescription:
        "SGA Security Dog Section provides trained security dogs and dog handlers for protection of people and property.",
    overviewTitle: 'About Security Dogs',
    overviewDescription:
        "Trained expert staff with dogs complement existing security procedures tailored to each client’s needs. SGA Security’s professional management team and supervisors ensure that security patrol as well as guard dogs and handler teams are kept up-to-date with regular training.\n\nSecurity Patrol together with Guard Dogs are a proven asset in the reduction of theft, criminal damage and violent behaviour. Security Dogs are also used as sniffer dogs to detect explosives, narcotics and other threatening materials.\n\nIt is commonly accepted that one security patrol dog and handler team can be as effective as five static security officers, due to the canine’s excellent olfactory system.\n\nSGA Security dogs are often deployed at Events like concerts, festivals, fairs, exhibitions, sports tournaments, parades among others for crowd control, guarding and detection.",
    overviewImage: '/images/services/k9.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our K9 Services Include',
    handlePoints: [
        'Security patrol dogs with handler',
        'Narcotics screening dogs',
        'Explosives screening dogs',
        'Crowd control',
        'Dog obedience and defense training',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: 'Security Dogs and K9 Services - SGA Security {country}',
    metaDescription: 'Trained security patrol, guard and screening dogs with expert handlers from SGA Security in {country}.',
}

// -------------------------------------------------------------------
// LOOKUP MAPS
// -------------------------------------------------------------------

export const individualServices: Record<string, ServiceData> = {
    courier: { ...courier, serviceType: 'Individual' },
    'alarm-response': { ...alarmResponse, serviceType: 'Individual' },
    'security-dogs': { ...securityDogs, serviceType: 'Individual' },
}

export const corporateServices: Record<string, ServiceData> = {
    'security-guarding': { ...securityGuarding, ...securityGuardingLive },
    'risk-assessment': riskAssessment,
    courier,
    'alarm-response': alarmResponse,
    tracking: fleetTracking,
    'cit-and-cash-management': cashManagement,
    'security-dogs': securityDogs,
}

/** Inject country name and country code into template strings */
export function resolveServiceData(data: ServiceData, countryName: string, countryCode: string): ServiceData {
    const replace = (str: string) => str.replace(/\{country\}/g, countryName).replace(/\{cc\}/g, countryCode)
    return {
        ...data,
        heroDescription: replace(data.heroDescription),
        metaTitle: replace(data.metaTitle),
        metaDescription: replace(data.metaDescription),
        relatedServices: data.relatedServices.map((rs) => ({ ...rs, link: replace(rs.link) })),
    }
}
