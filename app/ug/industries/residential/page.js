import IndustryPageTemplate from '../../components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Residential Estates & Apartments Security - SGA Security Uganda',
  description: 'Comprehensive security solutions for gated communities, residential estates, and apartment complexes in Uganda. 24/7 guarding, access control, CCTV monitoring, and rapid response.',
}

export default function ResidentialIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Residential Estates & Apartments"
        industryIcon="mdi:home"
        heroImage="/images/ug/residentials.png"
        heroTitle="Secure Your Home, Protect Your Community"
        heroDescription="Comprehensive security solutions for gated communities, residential estates, and apartment complexes across Uganda. We provide round-the-clock protection that gives residents peace of mind."
        overviewTitle="About this industry"
        overviewDescription="Residential estates and apartment complexes require security that balances accessibility for residents with protection from unauthorized access. These environments combine high resident traffic, visitor management needs, and the expectation of a safe, welcoming community atmosphere. Security must be visible enough to deter threats, discreet enough to maintain resident comfort, and responsive enough to handle incidents quickly without disrupting daily life. This is why residential security works best when it is grounded in clear access control procedures, consistent coverage of entry points and common areas, and disciplined incident response that residents can trust."
        overviewImage="/images/ug/residentials.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Main gates and entry points',
            description: 'Controlled access to manage resident and visitor flow while preventing unauthorized entry.',
          },
          {
            title: 'Common areas and amenities',
            description: 'Monitoring of shared spaces like playgrounds, pools, and community centers.',
          },
          {
            title: 'Perimeter fencing and boundaries',
            description: 'Regular patrols and surveillance to maintain secure property boundaries.',
          },
          {
            title: 'Parking areas and vehicle access',
            description: 'Security coverage for parking lots and vehicle entry points.',
          },
        ]}
        countryCode="ug"
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
        country="Uganda"
        phone="+256772200048"
        url="https://wa.me/256772200048"
        flag="twemoji:flag-uganda"
      />
    </>
  )
}

