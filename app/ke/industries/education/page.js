import IndustryPageTemplate from '../../components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Education & Schools Security - SGA Security Kenya',
  description: 'Specialized security services for schools, colleges, and universities in Kenya. Ensuring safe learning environments for students and staff with campus security and student safety programs.',
}

export default function EducationIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Education & Schools"
        industryIcon="mdi:school"
        heroImage="/images/ug/education.png"
        heroTitle="Protecting Kenya's Future Leaders"
        heroDescription="Specialized security services for educational institutions across Kenya. We create safe learning environments where students can focus on their education without security concerns."
        overviewTitle="About this industry"
        overviewDescription="Schools and universities operate as open learning environments that must balance accessibility with student safety. These facilities combine high student and staff traffic, visitor management needs, and the critical requirement to maintain a welcoming educational atmosphere. Security must be visible enough to deter threats, unobtrusive enough to support learning, and responsive enough to handle incidents quickly without disrupting educational activities. This is why education security works best when it is grounded in clear access control at entry points, consistent coverage of campus zones, and disciplined emergency protocols that administrators and parents can trust."
        overviewImage="/images/ug/education.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Main entrances and reception areas',
            description: 'Controlled entry points to manage visitor flow and ensure only authorized individuals enter campus.',
          },
          {
            title: 'Classrooms and academic buildings',
            description: 'Access control and monitoring to protect students and staff during learning hours.',
          },
          {
            title: 'Playgrounds and sports facilities',
            description: 'Security coverage for outdoor areas where students gather and play.',
          },
          {
            title: 'Parking lots and perimeter boundaries',
            description: 'Monitoring to prevent unauthorized access and ensure student safety during arrival and departure.',
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

