import IndustryPageTemplate from '../../components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Hospitality & Holiday Homes Security - SGA Security Tanzania',
  description: 'Security solutions for hotels, resorts, and holiday properties in Tanzania. Ensuring guest safety and protecting hospitality assets with discreet, professional security services.',
}

export default function HospitalityIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Hospitality & Holiday Homes"
        industryIcon="mdi:hotel"
        heroImage="/images/ug/hospitality.png"
        heroTitle="Secure Hospitality, Exceptional Guest Experience"
        heroDescription="Professional security services for hotels, resorts, and holiday properties across Tanzania. We ensure guest safety while maintaining the welcoming atmosphere that defines exceptional hospitality."
        overviewTitle="About this industry"
        overviewDescription="Hotels and resorts operate as welcoming guest environments that must balance accessibility with protection of guests and property. These facilities combine high guest traffic, visitor management needs, and the critical requirement to maintain a warm, inviting atmosphere. Security must be visible enough to deter threats, discreet enough to support guest comfort, and responsive enough to handle incidents quickly without disrupting the hospitality experience. This is why hospitality security works best when it is grounded in clear access control procedures at entry points, consistent coverage of common areas, and disciplined incident response that hotel management can trust."
        overviewImage="/images/ug/hospitality.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Main lobbies and reception areas',
            description: 'Controlled entry points to manage guest and visitor flow while maintaining welcoming atmosphere.',
          },
          {
            title: 'Guest floors and room access',
            description: 'Access control systems to ensure only authorized guests and staff enter guest areas.',
          },
          {
            title: 'Restaurants and event spaces',
            description: 'Security coverage for dining areas, conference rooms, and special event venues.',
          },
          {
            title: 'Parking areas and perimeter boundaries',
            description: 'Monitoring to ensure guest safety and protect property assets.',
          },
        ]}
        countryCode="tz"
        relatedServices={[
          {
            image: '/images/ug/residentials.png',
            category: 'Security Service',
            title: 'Alarm & Response',
            summary: '24/7 monitoring with rapid deployment to your home.',
            link: '/contact',
          },
          {
            image: '/images/ug/education.png',
            category: 'Security Service',
            title: 'Residential Guarding',
            summary: 'Professional guards for apartments and gated communities.',
            link: '/contact',
          },
          {
            image: '/images/ug/healthcare.png',
            category: 'Security Service',
            title: 'Personal Panic App',
            summary: 'One-tap SOS linked to our control room.',
            link: '/contact',
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

