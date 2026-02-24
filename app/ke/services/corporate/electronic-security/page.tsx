import ServicePageTemplate from '@/components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Electronic Security Services - SGA Security Kenya',
  description: 'Advanced electronic security systems for businesses in Kenya. CCTV surveillance, access control, and alarm systems for comprehensive corporate protection.',
}

export default function ElectronicSecurityPage() {
  return (
    <>
      <ServicePageTemplate countryCode="ke" 
        serviceName="Electronic Security"
        serviceIcon="mdi:cctv"
        serviceType="Corporate"
        heroImage="/images/group/CCTV.png"
        heroTitle="Advanced Electronic Security Systems"
        heroDescription="Our electronic security solutions provide comprehensive protection for your business through advanced surveillance, access control, and alarm systems. With cutting-edge technology and professional installation, we ensure your corporate assets are secure across Kenya."
        overviewTitle="About Electronic Security"
        overviewDescription="Electronic security systems provide comprehensive protection through advanced technology including CCTV surveillance, access control systems, alarm systems, and intrusion detection. These systems offer continuous monitoring and automated responses to security threats. CCTV systems provide visual surveillance and recording capabilities, allowing for real-time monitoring and post-incident analysis. Access control systems manage entry points through card readers, biometric scanners, or keypad systems, ensuring only authorized personnel can access restricted areas. Alarm systems detect unauthorized access, intrusions, or security breaches and trigger immediate alerts. These systems can be integrated with monitoring centers for 24/7 oversight and rapid response. Electronic security systems are essential for modern businesses, providing scalable solutions that can grow with your organization. They offer detailed logging and reporting capabilities, helping with compliance and security audits. Our electronic security solutions are designed for corporate environments, providing reliable protection for offices, warehouses, manufacturing facilities, and retail locations."
        overviewImage="/images/group/CCTV.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'CCTV Surveillance',
            description: 'Advanced camera systems with recording and remote monitoring capabilities.',
          },
          {
            title: 'Access Control',
            description: 'Electronic access control systems for secure entry management.',
          },
          {
            title: 'Alarm Systems',
            description: 'Intrusion detection and alarm systems with immediate alert capabilities.',
          },
          {
            title: 'Integration',
            description: 'Seamless integration with monitoring centers and other security systems.',
          },
          {
            title: 'Scalable Solutions',
            description: 'Security systems that can grow with your business needs.',
          },
          {
            title: 'Professional Installation',
            description: 'Expert installation and configuration for optimal performance.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Professional on-site security personnel.',
            link: '/ke/services/corporate/security-guarding',
          },
          {
            image: '/images/group/CIT.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: 'Immediate response to security incidents.',
            link: '/ke/services/individual/emergency-response',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Risk Assessment',
            summary: 'Comprehensive security audits.',
            link: '/ke/services/corporate/risk-assessment',
          },
        ]}
      />
      <FloatingWhatsApp 
        singleCountry={true}
        country="Kenya"
        phone="+254111024000"
        url="https://wa.me/254111024000"
        flag="twemoji:flag-kenya"
      />
    </>
  )
}

