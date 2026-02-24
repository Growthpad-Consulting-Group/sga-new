import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Diplomatic & Government Security - SGA Security Tanzania',
  description: 'High-level security services for diplomatic missions, government facilities, and international organizations in Tanzania. Protecting sensitive operations and personnel with specialized security solutions.',
}

export default function DiplomaticIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Diplomatic & Government"
        industryIcon="mdi:shield-account"
        heroImage="/images/ug/education.png"
        heroTitle="Protecting Diplomatic Missions and Government Facilities"
        heroDescription="High-level security services for diplomatic missions, government facilities, and international organizations across Tanzania. We protect sensitive operations and personnel with specialized security solutions."
        overviewTitle="About this industry"
        overviewDescription="Diplomatic missions and government facilities require the highest levels of security to protect sensitive operations, classified information, and personnel. These facilities combine strict access control requirements, high-profile visitors, and the need to maintain diplomatic protocols. Security must be discreet enough to support diplomatic activities, robust enough to deter sophisticated threats, and responsive enough to handle incidents quickly without compromising operations. This is why diplomatic security works best when it is grounded in comprehensive background checks for personnel, multi-layered access control systems, and disciplined incident response protocols that diplomatic staff and government officials can trust."
        overviewImage="/images/ug/education.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Embassy and consulate entrances',
            description: 'Highly controlled access points with advanced screening to manage visitor flow and ensure only authorized individuals enter diplomatic premises.',
          },
          {
            title: 'Government buildings and offices',
            description: 'Restricted access control and monitoring to protect sensitive operations and classified information.',
          },
          {
            title: 'Residential compounds for diplomatic staff',
            description: 'Comprehensive security coverage to protect diplomatic personnel and their families.',
          },
          {
            title: 'Perimeter boundaries and surveillance systems',
            description: 'Advanced monitoring and intrusion detection to prevent unauthorized access and protect against sophisticated threats.',
          },
        ]}
        countryCode="tz"
        relatedServices={[
          {
            image: '/images/ug/residentials.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Highly trained guards for diplomatic and government facilities.',
            link: '/tz/services/corporate/security-guarding',
          },
          {
            image: '/images/ug/education.png',
            category: 'Security Service',
            title: 'Electronic Security',
            summary: 'Advanced surveillance and access control systems.',
            link: '/tz/services/corporate/electronic-security',
          },
          {
            image: '/images/ug/healthcare.png',
            category: 'Security Service',
            title: 'Risk Assessment',
            summary: 'Comprehensive security audits and threat analysis.',
            link: '/tz/services/corporate/risk-assessment',
          },
        ]}
      />
      <FloatingWhatsApp 
        singleCountry={true}
        country="Tanzania"
        phone="+255754303076"
        url="https://wa.me/255754303076"
        flag="twemoji:flag-tanzania"
      />
    </>
  )
}

