import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Retail & Commerce Security - SGA Security Kenya',
  description: 'Retail security services protecting shops, malls, and commercial establishments in Kenya. Reducing theft, ensuring customer safety, and maintaining secure business operations.',
}

export default function RetailIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Retail & Commerce"
        industryIcon="mdi:store"
        heroImage="/images/ug/education.png"
        heroTitle="Protecting Your Business, Securing Your Success"
        heroDescription="Comprehensive retail security services for shops, malls, and commercial establishments across Kenya. We help reduce theft, ensure customer safety, and maintain secure business operations."
        overviewTitle="About this industry"
        overviewDescription="Retail stores and shopping malls operate as customer-facing environments that must balance accessibility with protection of inventory and customer safety. These facilities combine high customer traffic, inventory management needs, and the expectation of a safe, welcoming shopping atmosphere. Security must be visible enough to deter theft, unobtrusive enough to support customer comfort, and responsive enough to handle incidents quickly without disrupting shopping activities. This is why retail security works best when it is grounded in clear loss prevention procedures, consistent coverage of sales floors and stockrooms, and disciplined incident response that store management can trust."
        overviewImage="/images/ug/education.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Store entrances and sales floors',
            description: 'Controlled access points and monitoring to manage customer flow and prevent theft.',
          },
          {
            title: 'Stockrooms and inventory areas',
            description: 'Strict access control and monitoring to protect valuable inventory from theft.',
          },
          {
            title: 'Cash handling and point-of-sale areas',
            description: 'Security coverage for cash registers and payment processing zones.',
          },
          {
            title: 'Parking areas and loading docks',
            description: 'Monitoring to ensure customer safety and protect deliveries.',
          },
        ]}
        countryCode="ke"
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
        country="Kenya"
        phone="+254111024000"
        url="https://wa.me/254111024000"
        flag="twemoji:flag-kenya"
      />
    </>
  )
}

