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
    serviceName: 'Courier',
    serviceIcon: 'mdi:truck-fast',
    serviceType: 'Corporate',
    heroImage: '/images/services/courier.jpg',
    heroTitle: 'Secure Courier and Delivery Services',
    heroDescription:
        "Secure courier and delivery services across Kenya, Uganda and Tanzania.",
    overviewTitle: 'About Courier Services',
    overviewDescription:
        "SGA Courier offers a suite of professional and efficient courier services. The experienced and courteous team is committed to meeting diverse delivery requirements through an extensive network of branches, depots, and drop-off points across Kenya, Uganda and Tanzania.",
    overviewImage: '/images/services/courier.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Unique Features',
    handlePoints: [
        'Overnight courier services',
        'Same-day express delivery services',
        'Dedicated service',
        'Countrywide network with adequate resources',
        'Assured security of your package',
        'Regional networks - East Africa Region',
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
    serviceName: 'Electronic Cargo Tracking Services (ECTS)',
    serviceIcon: 'mdi:map-marker-path',
    serviceType: 'Corporate',
    heroImage: '/images/services/tracking.jpg',
    heroTitle: 'Electronic Cargo Tracking Services (ECTS)',
    heroDescription:
        "SGA Asset monitoring and fleet management solutions cater to dynamic needs, enhancing organizational business growth and service potential. It is a flexible solution that offers complete visibility into asset location and utilization through a convenient portal.",
    overviewTitle: 'About Electronic Cargo Tracking',
    overviewDescription:
        "SGA Security fleet tracking solutions allows clients to monitor fleet and assets in real-time, save on (fuel) costs and improve the safety and efficiency of all fleet resulting in customer satisfaction.\n\nSGA Security uses GPS and Satellite systems to monitor installed units at the 24-hour operational Control Room where all alerts are logged and reported including Geofencing, remote immobilization and route monitoring.",
    overviewImage: '/images/services/tracking.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Unique Features',
    handlePoints: [
        'Comprehensive Asset Visibility',
        'Convenient Portal Access',
        'Enhanced Operational Efficiency',
        'Real-Time Data Analytics',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/cit.jpg', category: 'Security Service', title: 'CIT & Cash Management', summary: 'Armoured cash transport and secure cash handling.', link: '/{cc}/services/corporate/cit-and-cash-management' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: 'Electronic Cargo Tracking Services (ECTS) - SGA Security {country}',
    metaDescription: 'Electronic cargo, fleet and asset tracking from SGA Security in {country}, with real-time visibility through a convenient portal.',
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

const cctv: ServiceData = {
    serviceName: 'CCTV Services',
    serviceIcon: 'mdi:cctv',
    serviceType: 'Corporate',
    heroImage: '/images/services/cctv.jpg',
    heroTitle: 'CCTV, Access Control and Alarm Systems',
    heroDescription:
        'CCTV, access control and alarm systems, installed and maintained for your premises across {country}.',
    overviewTitle: 'About CCTV Services',
    overviewDescription:
        'SGA Security provides comprehensive CCTV services designed to enhance peace and security. The solutions cater to a wide range of needs, from basic single-camera setups to sophisticated systems with remote access capabilities, ensuring robust surveillance and protection.',
    overviewImage: '/images/services/cctv.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our CCTV Services Include',
    handlePoints: [
        'Covert surveillance equipment',
        'Digital incident recording cameras with analytics',
        'Automated building management and integrated modular access control systems',
        'Integrated vehicular access barriers',
        'Security systems tailored for retail and financial institutions',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: 'CCTV Services - SGA Security {country}',
    metaDescription: 'CCTV, access control and alarm system installation and maintenance from SGA Security in {country}, monitored from our Control Room.',
}

const fireDetection: ServiceData = {
    serviceName: 'Fire Detection and Suppression',
    serviceIcon: 'mdi:fire-alert',
    serviceType: 'Corporate',
    heroImage: '/images/group/core-services/alarm.jpg',
    heroTitle: 'Fire Detection, Alarm and Suppression Systems',
    heroDescription:
        'Fire detection, alarm and suppression systems designed, installed and maintained for your premises across {country}.',
    overviewTitle: 'About Fire Detection and Suppression',
    overviewDescription:
        "SGA Security's Fire Services provide comprehensive fire safety and prevention solutions, backed by over 55 years of expertise in both commercial and residential sectors. These include the design, supply, installation, and commissioning of diverse fire alarms and portable fire extinguishers.",
    overviewImage: '/images/group/core-services/alarm.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Our Fire Services Include',
    handlePoints: [
        'Comprehensive detection, protection, and suppression systems',
        'Advanced fire alarm and response solutions',
        'Effective fire risk assessments',
        '24-hour fire engine services with fully equipped rescue teams',
        'Prevention and preparedness training programs',
        'Health and Safety: First Aid training and drills',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: 'Fire Detection and Suppression Services - SGA Security {country}',
    metaDescription: 'Fire alarm, detection and suppression systems, fire risk assessments and training from SGA Security in {country}.',
}

const controlRoom: ServiceData = {
    serviceName: 'Control Room',
    serviceIcon: 'mdi:monitor-dashboard',
    serviceType: 'Corporate',
    heroImage: '/images/services/control-room.jpg',
    heroTitle: 'Control Room Services',
    heroDescription:
        '24/7 monitored control room coordinating rapid response across all client sites in {country}.',
    overviewTitle: 'About Control Room Services',
    overviewDescription:
        "SGA Security's Communications Centre operates 24/7, managing customer inquiries, emergency security responses, and CCTV performance monitoring. SGA also offers outsourced control room services, delivering comprehensive monitoring solutions to clients and other security companies.",
    overviewImage: '/images/services/control-room.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Unique Features',
    handlePoints: [
        '24/7 continuous monitoring and support, ensuring immediate response to security incidents and customer concerns at any time',
        'Comprehensive real-time incidents coverage',
        'Provision of high-level control room services outsourcing',
        'Utilization of cutting-edge systems and tools for effective surveillance, communication, and data management',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
    ],
    metaTitle: 'Control Room Services - SGA Security {country}',
    metaDescription: '24/7 control room monitoring, incident response and outsourced control room services from SGA Security in {country}.',
}

const reception: ServiceData = {
    serviceName: 'Reception and Front Office Services',
    serviceIcon: 'mdi:account-tie',
    serviceType: 'Corporate',
    heroImage: '/images/services/reception.jpg',
    heroTitle: 'Reception and Front Office Services',
    heroDescription:
        'Welcoming, professional customer service and reception teams for your premises across {country}.',
    overviewTitle: 'About Reception and Front Office Services',
    overviewDescription:
        "SGA Security understands the importance of delivering exceptional customer service and creating a welcoming environment for all visitors. The dedicated team of customer service representatives and receptionists are committed to providing a seamless experience for clients and guests alike.",
    overviewImage: '/images/services/reception.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Unique Features',
    handlePoints: [
        'Liaise between clients and security personnel',
        'Ensuring that security protocols are implemented smoothly and effectively',
        'Assist with access control, visitor management, and coordination of security measures',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/control-room.jpg', category: 'Security Service', title: 'Control Room', summary: '24/7 monitored control room coordinating response.', link: '/{cc}/services/corporate/control-room' },
    ],
    metaTitle: 'Reception and Front Office Services - SGA Security {country}',
    metaDescription: 'Professional reception, front office and customer service teams from SGA Security in {country}.',
}

const closeProtection: ServiceData = {
    serviceName: 'Close Protection',
    serviceIcon: 'mdi:shield-account',
    serviceType: 'Corporate',
    heroImage: '/images/group/core-services/close-protection.jpg',
    heroTitle: 'Close Protection Services',
    heroDescription:
        'Specialized close protection officers for executive and VIP security across {country}.',
    overviewTitle: '',
    overviewDescription: '',
    overviewImage: '/images/group/core-services/close-protection.jpg',
    handlePointsIntro: '',
    handlePointsTitle: 'Close Protection Officer',
    handlePoints: [
        'Ensuring personal safety',
        'Monitoring for potential threats',
        'Securing travel routes',
        'Protecting clients at events',
        'Responding to emergencies',
    ],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: 'Close Protection Services - SGA Security {country}',
    metaDescription: 'Specialized close protection officers for executive and VIP security from SGA Security in {country}.',
}

const businessSolutions: ServiceData = {
    serviceName: 'Business Solutions',
    serviceIcon: 'mdi:briefcase-outline',
    serviceType: 'Corporate',
    heroImage: '/images/group/core-services/guarding.jpg',
    heroTitle: 'Integrated Security Solutions for Business',
    heroDescription:
        'Integrated security solutions for businesses across {country}, combining guarding, electronic systems and monitoring.',
    overviewTitle: '',
    overviewDescription: '',
    overviewImage: '/images/group/core-services/guarding.jpg',
    handlePointsIntro: '',
    handlePointsTitle: '',
    handlePoints: [],
    featuresTitle: '',
    features: [],
    relatedServices: [
        { image: '/images/services/guarding.jpg', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel for your business.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/services/cctv.jpg', category: 'Security Service', title: 'CCTV Services', summary: 'CCTV, access control and alarm systems.', link: '/{cc}/services/corporate/cctv' },
        { image: '/images/services/alarm-response.jpg', category: 'Security Service', title: 'Alarm Response', summary: 'Monitored alarms with armed response teams on call.', link: '/{cc}/services/corporate/alarm-response' },
    ],
    metaTitle: 'Business Solutions - SGA Security {country}',
    metaDescription: 'Integrated security solutions for businesses in {country}, combining guarding, electronic systems and monitoring.',
}

// -------------------------------------------------------------------
// LOOKUP MAPS
// -------------------------------------------------------------------

export const individualServices: Record<string, ServiceData> = {
    courier: { ...courier, serviceType: 'Individual' },
    'alarm-response': { ...alarmResponse, serviceType: 'Individual' },
    'security-dogs': { ...securityDogs, serviceType: 'Individual' },
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
    'security-dogs': securityDogs,
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
        relatedServices: data.relatedServices.map((rs) => ({ ...rs, link: replace(rs.link) })),
    }
}
