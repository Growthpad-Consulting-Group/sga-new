import IndustryPageTemplate from '../../components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Real Estate & Offices Security - SGA Security Uganda',
  description: 'Comprehensive security solutions for office buildings, commercial properties, and real estate developments in Uganda. Protecting tenants, assets, and property value with professional security services.',
}

export default function RealEstateIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Real Estate & Offices"
        industryIcon="mdi:office-building"
        heroImage="/images/ug/education.png"
        heroTitle="Securing Your Property Investments"
        heroDescription="Comprehensive security solutions for office buildings, commercial properties, and real estate developments across Uganda. We protect tenants, assets, and property value with professional security services."
        overviewTitle="About this industry"
        overviewDescription="Office buildings and commercial real estate require security that balances accessibility for tenants and visitors with protection of assets and property. These facilities combine high foot traffic, multiple tenants, and the need to maintain a professional business environment. Security must be visible enough to deter threats, professional enough to support business operations, and responsive enough to handle incidents quickly without disrupting daily activities. This is why real estate security works best when it is grounded in clear access control procedures at building entrances, consistent coverage of common areas and parking facilities, and disciplined incident response that property managers and tenants can trust."
        overviewImage="/images/ug/education.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Building entrances and lobbies',
            description: 'Controlled access points to manage visitor flow and ensure only authorized individuals enter the premises.',
          },
          {
            title: 'Parking facilities and garages',
            description: 'Monitoring and access control to protect vehicles and ensure tenant safety during arrival and departure.',
          },
          {
            title: 'Common areas and corridors',
            description: 'Security coverage for shared spaces to maintain a safe environment for all tenants and visitors.',
          },
          {
            title: 'Perimeter boundaries and loading docks',
            description: 'Monitoring to prevent unauthorized access and protect property assets.',
          },
        ]}
        countryCode="ug"
        relatedServices={[
          {
            image: '/images/ug/residentials.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Professional guards for office buildings and commercial properties.',
            link: '/ug/services/security-guarding',
          },
          {
            image: '/images/ug/education.png',
            category: 'Security Service',
            title: 'Electronic Security',
            summary: 'Advanced surveillance and access control systems.',
            link: '/ug/services/electronic-security',
          },
          {
            image: '/images/ug/healthcare.png',
            category: 'Security Service',
            title: 'Alarm & Response',
            summary: '24/7 monitoring with rapid deployment.',
            link: '/ug/services/alarm-response',
          },
        ]}
      />
      <FloatingWhatsApp 
        singleCountry={true}
        country="Uganda"
        phone="+256772200048"
        url="https://wa.me/256772200048"
        flag="twemoji:flag-uganda"
      />
    </>
  )
}

