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
}

// -------------------------------------------------------------------
// INDIVIDUAL SERVICES
// -------------------------------------------------------------------

const homeSecurity: ServiceData = {
    serviceName: 'Home Security',
    serviceIcon: 'mdi:home-shield',
    serviceType: 'Individual',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Protect Your Home and Family',
    heroDescription:
        'Our comprehensive home security solutions provide complete protection for your residence, family, and valuables. With advanced technology and professional monitoring, we ensure your home is secure 24/7 across {country}.',
    overviewTitle: 'About Home Security',
    overviewDescription:
        'Home security services provide comprehensive protection for residential properties, combining physical security measures with advanced technology. Our home security solutions include on-site security personnel, electronic surveillance systems, access control, alarm systems, and 24/7 monitoring. Security guards provide visible deterrence and immediate response capabilities, while electronic systems offer continuous monitoring and alert capabilities. Access control systems manage entry points, while alarm systems detect unauthorized access or security breaches. Our monitoring center operates 24/7, ensuring that any security alerts are immediately addressed. The service is designed to provide peace of mind, knowing that your home and family are protected around the clock. Our security personnel are trained to be professional and courteous while maintaining vigilance.',
    overviewImage: '/images/group/guarding.png',
    featuresTitle: 'Key Features',
    features: [
        { title: '24/7 Monitoring', description: 'Round-the-clock monitoring of your home security systems with immediate response to alerts.' },
        { title: 'Security Personnel', description: 'Professional security guards providing visible presence and immediate response capabilities.' },
        { title: 'Electronic Systems', description: 'Advanced surveillance cameras, alarm systems, and access control for comprehensive protection.' },
        { title: 'Rapid Response', description: 'Quick response teams ready to deploy when security incidents are detected.' },
        { title: 'Access Control', description: 'Professional management of entry points and visitor verification.' },
        { title: 'Customized Solutions', description: 'Tailored security solutions designed to meet your specific home security needs.' },
    ],
    relatedServices: [
        { image: '/images/group/CCTV.png', category: 'Security Service', title: '24/7 Monitoring', summary: 'Continuous monitoring of your security systems.', link: '/{cc}/services/individual/24-7-monitoring' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Safe Home Packages', summary: 'Complete home security packages.', link: '/{cc}/services/individual/safe-home-packages' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Emergency Response', summary: 'Immediate response to security incidents.', link: '/{cc}/services/individual/emergency-response' },
    ],
    metaTitle: 'Home Security Services - SGA Security {country}',
    metaDescription: 'Comprehensive home security solutions to protect your family and property in {country}. 24/7 monitoring and rapid response services.',
}

const individualEmergencyResponse: ServiceData = {
    serviceName: 'Emergency Response',
    serviceIcon: 'mdi:alert-circle',
    serviceType: 'Individual',
    heroImage: '/images/group/CIT.png',
    heroTitle: 'Immediate Response When You Need It Most',
    heroDescription:
        'Our emergency response service provides 24/7 rapid deployment of trained response teams to handle security incidents immediately. When emergencies occur, our teams are ready to respond quickly and professionally across {country}.',
    overviewTitle: 'About Emergency Response',
    overviewDescription:
        'Emergency response services provide immediate deployment of trained security personnel to handle security incidents, threats, or emergencies. Our response teams are strategically located and equipped to respond quickly to various situations including security breaches, alarms, disturbances, and other urgent security concerns. Response teams are trained in incident assessment, de-escalation techniques, evidence preservation, and coordination with law enforcement and emergency services. They arrive equipped with communication devices, first aid supplies, and necessary equipment to handle various situations. The service operates 24/7, ensuring that help is available whenever needed.',
    overviewImage: '/images/group/CIT.png',
    featuresTitle: 'Key Features',
    features: [
        { title: '24/7 Availability', description: 'Round-the-clock availability for immediate response to emergencies.' },
        { title: 'Rapid Deployment', description: 'Quick response times with strategically located response teams.' },
        { title: 'Trained Personnel', description: 'Response teams trained in incident management and emergency procedures.' },
        { title: 'Incident Assessment', description: 'Professional assessment of situations to determine appropriate response.' },
        { title: 'Coordination Services', description: 'Coordination with law enforcement, emergency services, and other stakeholders.' },
        { title: 'Follow-Up Support', description: 'Post-incident support including reporting and recommendations.' },
    ],
    relatedServices: [
        { image: '/images/group/CCTV.png', category: 'Security Service', title: 'Alarm & Response', summary: '24/7 monitoring with rapid deployment.', link: '/{cc}/services/individual/24-7-monitoring' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Home Security', summary: 'Complete residential protection packages.', link: '/{cc}/services/individual/home-security' },
    ],
    metaTitle: 'Emergency Response Services - SGA Security {country}',
    metaDescription: '24/7 rapid response teams ready to handle security incidents immediately in {country}. Professional emergency response services.',
}

const safeHomePackages: ServiceData = {
    serviceName: 'Safe Home Packages',
    serviceIcon: 'mdi:package-variant',
    serviceType: 'Individual',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Complete Home Security Solutions',
    heroDescription:
        'Our Safe Home Packages provide comprehensive, all-in-one security solutions for your residence. These carefully designed packages combine multiple security services to offer complete protection tailored to your specific needs across {country}.',
    overviewTitle: 'About Safe Home Packages',
    overviewDescription:
        'Safe Home Packages are comprehensive security solutions designed to provide complete protection for residential properties. Each package is carefully curated to include the most essential security services for residential protection. Our packages typically include security personnel, electronic surveillance, alarm systems, and 24/7 monitoring. The packages are designed to be scalable, allowing you to choose the level of security that best meets your needs and budget. Each package can be further customized based on your specific security requirements. Our security consultants work with you to assess your needs and recommend the appropriate package. Safe Home Packages provide the convenience of a comprehensive security solution without the need to coordinate multiple separate services.',
    overviewImage: '/images/group/guarding.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'Comprehensive Package', description: 'All-in-one security solution combining multiple service types.' },
        { title: 'Customizable', description: 'Packages can be tailored to your specific security requirements.' },
        { title: 'Cost-Effective', description: 'Bundled services provide better value than individual service contracts.' },
        { title: '24/7 Monitoring', description: 'Continuous monitoring of all security systems as part of the package.' },
        { title: 'Professional Installation', description: 'Expert installation of all electronic security systems.' },
        { title: 'Regular Reviews', description: 'Periodic security reviews to ensure optimal protection.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Home Security', summary: 'Comprehensive residential security.', link: '/{cc}/services/individual/home-security' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: '24/7 Monitoring', summary: 'Continuous monitoring of your security systems.', link: '/{cc}/services/individual/24-7-monitoring' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Emergency Response', summary: 'Immediate response to security incidents.', link: '/{cc}/services/individual/emergency-response' },
    ],
    metaTitle: 'Safe Home Security Packages - SGA Security {country}',
    metaDescription: 'Comprehensive all-in-one home security packages for residential properties in {country}. Tailored protection solutions for your home.',
}

const personalSecurity: ServiceData = {
    serviceName: 'Personal Security',
    serviceIcon: 'mdi:account-shield',
    serviceType: 'Individual',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Protection for You and Your Family',
    heroDescription:
        'Our personal security services provide dedicated protection for individuals and families. With trained security personnel and advanced technology, we ensure your personal safety and peace of mind across {country}.',
    overviewTitle: 'About Personal Security',
    overviewDescription:
        'Personal security services provide dedicated protection for individuals, executives, and high-profile personalities requiring personal security solutions. Our personal security personnel are trained in close protection techniques, threat assessment, and emergency response. They provide a discreet but effective security presence, ensuring the safety of the protected individual while maintaining a low profile. Personal security services include close protection officers, residential security, transportation security, and travel security. Each personal security plan is developed based on a thorough threat assessment and the specific lifestyle and requirements of the client. Our personal security personnel undergo rigorous selection and training processes to ensure they meet the highest standards of professionalism and capability.',
    overviewImage: '/images/group/guarding.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'Close Protection', description: 'Dedicated close protection officers trained in personal security techniques.' },
        { title: 'Threat Assessment', description: 'Comprehensive assessment of personal security threats and risks.' },
        { title: 'Discreet Service', description: 'Professional security that maintains a low profile while ensuring safety.' },
        { title: 'Transportation Security', description: 'Secure transportation solutions for daily activities and travel.' },
        { title: 'Residential Security', description: 'Protection for your home environment and personal residence.' },
        { title: '24/7 Protection', description: 'Round-the-clock personal security coverage.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Home Security', summary: 'Comprehensive residential security protection.', link: '/{cc}/services/individual/home-security' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Emergency Response', summary: 'Immediate response when needed most.', link: '/{cc}/services/individual/emergency-response' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: '24/7 Monitoring', summary: 'Continuous monitoring and surveillance.', link: '/{cc}/services/individual/24-7-monitoring' },
    ],
    metaTitle: 'Personal Security Services - SGA Security {country}',
    metaDescription: 'Dedicated personal and executive security services for individuals and families in {country}. Professional close protection solutions.',
}

const monitoring247: ServiceData = {
    serviceName: '24/7 Monitoring',
    serviceIcon: 'mdi:monitor-dashboard',
    serviceType: 'Individual',
    heroImage: '/images/group/CCTV.png',
    heroTitle: 'Continuous Security Monitoring',
    heroDescription:
        'Our 24/7 monitoring service provides round-the-clock surveillance of your security systems. With our state-of-the-art monitoring center, we ensure immediate response to any security alerts, keeping your property protected at all times across {country}.',
    overviewTitle: 'About 24/7 Monitoring',
    overviewDescription:
        'Our 24/7 monitoring service provides continuous surveillance and monitoring of your security systems. Our monitoring center operates around the clock, with trained operators who monitor security systems, respond to alerts, and coordinate emergency response when needed. The service includes monitoring of alarm systems, CCTV cameras, access control systems, and other security equipment. When an alert is triggered, our operators immediately assess the situation and dispatch appropriate response teams if required. The monitoring service provides real-time visibility of your security status and ensures that any security concerns are addressed immediately. Our monitoring center uses advanced technology to provide reliable and efficient monitoring services.',
    overviewImage: '/images/group/CCTV.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'Round-the-Clock Monitoring', description: 'Continuous 24/7 surveillance of all your security systems.' },
        { title: 'Immediate Alert Response', description: 'Rapid response to security alerts with immediate action protocols.' },
        { title: 'CCTV Monitoring', description: 'Professional monitoring of CCTV cameras and surveillance systems.' },
        { title: 'Alarm Monitoring', description: 'Continuous monitoring of alarm systems with immediate response.' },
        { title: 'Emergency Dispatch', description: 'Coordination of emergency response when security incidents occur.' },
        { title: 'Reporting', description: 'Detailed monitoring reports and incident documentation.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Home Security', summary: 'Comprehensive residential security packages.', link: '/{cc}/services/individual/home-security' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Emergency Response', summary: 'Immediate response to security incidents.', link: '/{cc}/services/individual/emergency-response' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and electronic systems.', link: '/{cc}/services/corporate/electronic-security' },
    ],
    metaTitle: '24/7 Security Monitoring Services - SGA Security {country}',
    metaDescription: 'Round-the-clock security monitoring services for homes and businesses in {country}. Real-time surveillance and immediate incident response.',
}

// -------------------------------------------------------------------
// CORPORATE SERVICES
// -------------------------------------------------------------------

const securityGuarding: ServiceData = {
    serviceName: 'Security Guarding',
    serviceIcon: 'mdi:shield-account',
    serviceType: 'Corporate',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Professional Security Personnel for Your Business',
    heroDescription:
        'Our trained security guards provide round-the-clock protection for your business premises, assets, and personnel. With extensive experience and rigorous training, our security personnel are equipped to handle various security challenges across {country}.',
    overviewTitle: 'About Security Guarding',
    overviewDescription:
        'Security guarding is the foundation of physical security for businesses, providing visible deterrence and immediate response capabilities. Our security guards undergo comprehensive training in access control, patrol procedures, incident reporting, and emergency response. They serve as the first line of defense, monitoring entry points, conducting regular patrols, and maintaining a visible security presence that deters potential threats. Our guards are trained to be professional, courteous, and observant, ensuring they can identify and respond to security concerns while maintaining positive interaction with authorized personnel and visitors. For corporate clients, our security guarding services are tailored to business environments, including office buildings, warehouses, manufacturing facilities, and retail locations.',
    overviewImage: '/images/group/guarding.png',
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
        { image: '/images/group/CCTV.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and access control systems.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Emergency Response', summary: '24/7 monitoring with rapid deployment to your location.', link: '/{cc}/services/corporate/emergency-response' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security audits for your business.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Security Guarding Services - SGA Security {country}',
    metaDescription: 'Professional on-site security personnel trained to protect your business assets and ensure safety in {country}. 24/7 security guarding services for corporate clients.',
}

const electronicSecurity: ServiceData = {
    serviceName: 'Electronic Security',
    serviceIcon: 'mdi:cctv',
    serviceType: 'Corporate',
    heroImage: '/images/group/CCTV.png',
    heroTitle: 'Advanced Electronic Security Systems',
    heroDescription:
        'Our electronic security solutions provide comprehensive protection for your business through advanced surveillance, access control, and alarm systems. With cutting-edge technology and professional installation, we ensure your corporate assets are secure across {country}.',
    overviewTitle: 'About Electronic Security',
    overviewDescription:
        'Electronic security systems provide a technological layer of protection for business premises and assets. Our electronic security solutions include CCTV surveillance systems, access control systems, intrusion detection systems, alarm systems, and integrated security management platforms. CCTV systems provide continuous visual monitoring of your premises, both as a deterrent and for recording potential incidents. Access control systems manage and restrict entry to sensitive areas, ensuring only authorized personnel can access certain locations. Intrusion detection systems provide alerts when unauthorized access is attempted. Our electronic security systems are professionally designed, installed, and maintained to ensure optimal performance and reliability. We offer both standalone systems and integrated solutions that combine multiple security technologies.',
    overviewImage: '/images/group/CCTV.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'CCTV Systems', description: 'Professional installation of high-definition surveillance cameras for comprehensive monitoring.' },
        { title: 'Access Control', description: 'Advanced access control systems to manage entry to sensitive business areas.' },
        { title: 'Alarm Systems', description: 'Sophisticated alarm systems for intrusion detection and immediate alerts.' },
        { title: 'System Integration', description: 'Integration of multiple security systems for centralized management.' },
        { title: 'Remote Monitoring', description: 'Remote access and monitoring capabilities for security management.' },
        { title: 'Maintenance & Support', description: 'Regular maintenance and technical support for all installed systems.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: '24/7 Monitoring', summary: 'Continuous monitoring of your security systems.', link: '/{cc}/services/individual/24-7-monitoring' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security risk analysis.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Electronic Security Systems - SGA Security {country}',
    metaDescription: 'Advanced electronic security systems including CCTV, access control, and alarm systems for businesses in {country}.',
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
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and security systems.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Consulting Services', summary: 'Expert security strategy and planning.', link: '/{cc}/services/corporate/consulting-services' },
    ],
    metaTitle: 'Security Risk Assessment Services - SGA Security {country}',
    metaDescription: 'Comprehensive security risk assessment and vulnerability analysis for businesses in {country}. Identify threats and strengthen your security posture.',
}

const consultingServices: ServiceData = {
    serviceName: 'Consulting Services',
    serviceIcon: 'mdi:briefcase',
    serviceType: 'Corporate',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Expert Security Consulting for Your Business',
    heroDescription:
        'Our security consulting services provide expert guidance to develop customized security strategies for your business. We work with you to design comprehensive security solutions tailored to your specific needs across {country}.',
    overviewTitle: 'About Consulting Services',
    overviewDescription:
        'Security consulting services provide expert guidance and strategic planning for developing comprehensive security solutions. Our security consultants work closely with businesses to understand their unique security requirements, operational needs, and risk profiles. We help develop security policies, procedures, and protocols tailored to your business environment. Consulting services include security strategy development, policy creation, security program design, and implementation planning. Our consultants have extensive experience across various industries and can provide industry-specific security expertise. We help businesses identify security priorities, allocate security resources effectively, and develop long-term security strategies. Consulting services also include security training program development, security awareness initiatives, and compliance guidance.',
    overviewImage: '/images/group/guarding.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'Expert Guidance', description: 'Security consulting from experienced professionals with industry expertise.' },
        { title: 'Customized Strategies', description: 'Security strategies tailored to your specific business needs.' },
        { title: 'Policy Development', description: 'Development of security policies, procedures, and protocols.' },
        { title: 'Implementation Planning', description: 'Strategic planning for implementing security measures.' },
        { title: 'Industry Expertise', description: 'Consulting services with knowledge of various business sectors.' },
        { title: 'Ongoing Support', description: 'Continued consultation and support as your needs evolve.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security risk analysis.', link: '/{cc}/services/corporate/risk-assessment' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and security systems.', link: '/{cc}/services/corporate/electronic-security' },
    ],
    metaTitle: 'Security Consulting Services - SGA Security {country}',
    metaDescription: 'Expert security consulting and strategy development for businesses in {country}. Customized security solutions aligned with your goals.',
}

const eventSecurity: ServiceData = {
    serviceName: 'Event Security',
    serviceIcon: 'mdi:calendar-star',
    serviceType: 'Corporate',
    heroImage: '/images/group/guarding.png',
    heroTitle: 'Professional Security for Your Events',
    heroDescription:
        'Our event security services provide comprehensive protection for corporate events, conferences, meetings, and gatherings. With trained security personnel and professional planning, we ensure your events are secure and safe across {country}.',
    overviewTitle: 'About Event Security',
    overviewDescription:
        'Event security services provide specialized protection for corporate events, conferences, meetings, exhibitions, and other gatherings. Our event security teams are trained to handle the unique security challenges of events, including crowd management, access control, VIP protection, and emergency response. Event security planning begins with a thorough assessment of the event venue, expected attendance, and specific security requirements. We develop comprehensive security plans that address access control, perimeter security, crowd management, and emergency procedures. Our security personnel are trained to be professional and unobtrusive while maintaining vigilance. Event security services include pre-event security assessments, on-site security personnel, access control management, crowd monitoring, and post-event security reviews.',
    overviewImage: '/images/group/guarding.png',
    featuresTitle: 'Key Features',
    features: [
        { title: 'Event Planning', description: 'Comprehensive security planning tailored to your specific event.' },
        { title: 'Access Control', description: 'Professional management of entry points and attendee verification.' },
        { title: 'Crowd Management', description: 'Trained personnel for managing crowds and maintaining order.' },
        { title: 'VIP Protection', description: 'Specialized security services for VIPs and high-profile attendees.' },
        { title: 'Emergency Response', description: 'Rapid response capabilities for security incidents during events.' },
        { title: 'Professional Service', description: 'Discreet, professional security that enhances rather than detracts from your event.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Emergency Response', summary: 'Immediate response to security incidents.', link: '/{cc}/services/corporate/emergency-response' },
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive security risk analysis.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Event Security Services - SGA Security {country}',
    metaDescription: 'Professional event security services for corporate events, conferences, and gatherings in {country}. Comprehensive security solutions for your events.',
}

const corporateEmergencyResponse: ServiceData = {
    serviceName: 'Emergency Response',
    serviceIcon: 'mdi:alert-circle',
    serviceType: 'Corporate',
    heroImage: '/images/group/CIT.png',
    heroTitle: 'Rapid Corporate Emergency Response',
    heroDescription:
        'Our corporate emergency response service provides 24/7 rapid deployment of trained response teams to handle business security incidents immediately. When emergencies occur, our teams protect your assets, staff, and operations across {country}.',
    overviewTitle: 'About Corporate Emergency Response',
    overviewDescription:
        'Corporate emergency response services provide businesses with immediate deployment of trained security personnel to handle security incidents, threats, or emergencies. Our response teams are strategically positioned to respond to various corporate scenarios including security breaches, workplace disturbances, asset protection incidents, and business-critical emergencies. Response teams are trained in corporate incident assessment, de-escalation techniques, evidence preservation, and coordination with law enforcement and emergency services. They arrive equipped with communication devices, first aid supplies, and the necessary equipment to manage corporate emergency situations. The service operates 24/7, ensuring business continuity and rapid resolution of security concerns with minimal impact on operations.',
    overviewImage: '/images/group/CIT.png',
    featuresTitle: 'Key Features',
    features: [
        { title: '24/7 Corporate Response', description: 'Round-the-clock availability for immediate corporate emergency response.' },
        { title: 'Rapid Deployment', description: 'Quick response times with strategically located corporate response teams.' },
        { title: 'Trained Personnel', description: 'Response teams trained in corporate incident management and emergency procedures.' },
        { title: 'Incident Assessment', description: 'Professional assessment of corporate situations to determine appropriate response.' },
        { title: 'Coordination Services', description: 'Coordination with law enforcement, emergency services, and corporate stakeholders.' },
        { title: 'Follow-Up & Reporting', description: 'Comprehensive post-incident reporting and recommendations for business continuity.' },
    ],
    relatedServices: [
        { image: '/images/group/guarding.png', category: 'Security Service', title: 'Security Guarding', summary: 'Professional on-site corporate security personnel.', link: '/{cc}/services/corporate/security-guarding' },
        { image: '/images/group/CCTV.png', category: 'Security Service', title: 'Electronic Security', summary: 'Advanced surveillance and monitoring systems.', link: '/{cc}/services/corporate/electronic-security' },
        { image: '/images/group/CIT.png', category: 'Security Service', title: 'Risk Assessment', summary: 'Comprehensive corporate risk and vulnerability analysis.', link: '/{cc}/services/corporate/risk-assessment' },
    ],
    metaTitle: 'Corporate Emergency Response Services - SGA Security {country}',
    metaDescription: '24/7 rapid response teams ready to handle corporate security incidents immediately in {country}. Professional emergency response for businesses.',
}

// -------------------------------------------------------------------
// LOOKUP MAPS
// -------------------------------------------------------------------

export const individualServices: Record<string, ServiceData> = {
    'home-security': homeSecurity,
    'emergency-response': individualEmergencyResponse,
    'safe-home-packages': safeHomePackages,
    'personal-security': personalSecurity,
    '24-7-monitoring': monitoring247,
}

export const corporateServices: Record<string, ServiceData> = {
    'security-guarding': securityGuarding,
    'electronic-security': electronicSecurity,
    'risk-assessment': riskAssessment,
    'consulting-services': consultingServices,
    'event-security': eventSecurity,
    'emergency-response': corporateEmergencyResponse,
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
