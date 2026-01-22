import IndustryPageTemplate from '../../components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Healthcare Facilities Security - SGA Security Kenya',
  description: 'Specialized security services for hospitals, clinics, and healthcare facilities in Kenya. Protecting patients, staff, and sensitive medical equipment with round-the-clock security.',
}

export default function HealthcareIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Healthcare Facilities"
        industryIcon="mdi:hospital"
        heroImage="/images/ug/healthcare.png"
        heroTitle="Protecting Health, Securing Care"
        heroDescription="Specialized security services for hospitals, clinics, and healthcare facilities across Kenya. We ensure patient safety, protect medical assets, and maintain secure healthcare environments."
        overviewTitle="About this industry"
        overviewDescription="Healthcare facilities operate as critical care environments that must balance accessibility for patients with protection of sensitive areas and valuable assets. These facilities combine high patient and visitor traffic, strict compliance requirements, and the need to maintain a healing atmosphere. Security must be visible enough to deter threats, discreet enough to support patient comfort, and responsive enough to handle incidents quickly without disrupting medical care. This is why healthcare security works best when it is grounded in clear access control procedures at restricted zones, consistent coverage of critical areas, and disciplined incident response that medical staff can trust."
        overviewImage="/images/ug/healthcare.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Emergency departments and entrances',
            description: 'Controlled access points to manage patient and visitor flow while ensuring rapid emergency response.',
          },
          {
            title: 'Pharmacy and medication storage',
            description: 'Strict access control and monitoring to protect valuable pharmaceuticals and controlled substances.',
          },
          {
            title: 'Operating theaters and critical care units',
            description: 'Restricted access zones to protect sensitive medical procedures and equipment.',
          },
          {
            title: 'Parking areas and perimeter boundaries',
            description: 'Monitoring to ensure patient and staff safety during arrival and departure.',
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

