import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Logistics & Transportation Security - SGA Security Tanzania',
  description: 'Security services for logistics companies, warehouses, and transportation hubs in Tanzania. Protecting goods in transit and securing distribution centers.',
}

export default function LogisticsIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Logistics & Transportation"
        industryIcon="mdi:truck"
        heroImage="/images/ug/hospitality.png"
        heroTitle="Securing Supply Chains, Protecting Cargo"
        heroDescription="Comprehensive security solutions for logistics companies, warehouses, and transportation hubs across Tanzania. We protect goods in transit and secure distribution centers."
        overviewTitle="About this industry"
        overviewDescription="Logistics and distribution facilities operate as supply chain hubs that must balance operational efficiency with protection of valuable cargo. These facilities combine high vehicle traffic, material handling needs, and the critical requirement to maintain secure cargo zones. Security must be visible enough to deter theft, controlled enough to manage access to cargo areas, and responsive enough to handle incidents quickly without disrupting supply chain operations. This is why logistics security works best when it is grounded in clear access control procedures at loading zones, consistent coverage of warehouse and distribution areas, and disciplined incident response that logistics management can trust."
        overviewImage="/images/ug/hospitality.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Warehouse entrances and loading docks',
            description: 'Controlled access points to manage vehicle and personnel flow while protecting cargo handling areas.',
          },
          {
            title: 'Cargo storage and distribution zones',
            description: 'Strict access control and monitoring to protect goods during storage and handling.',
          },
          {
            title: 'Vehicle yards and fleet parking',
            description: 'Security coverage for transportation vehicles and cargo carriers.',
          },
          {
            title: 'Perimeter boundaries and access roads',
            description: 'Monitoring to ensure secure facility boundaries and protect cargo in transit.',
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

