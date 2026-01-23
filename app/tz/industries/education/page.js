import IndustryPageTemplate from '../../components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Education & Healthcare Security - SGA Security Tanzania',
  description: 'Specialized security services for schools, colleges, universities, hospitals, and healthcare facilities in Tanzania. Ensuring safe learning and healing environments for students, patients, and staff.',
}

export default function EducationIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Education & Healthcare"
        industryIcon="mdi:school"
        heroImage="/images/ug/education.png"
        heroTitle="Protecting Tanzania's Future Leaders and Healthcare"
        heroDescription="Specialized security services for educational institutions and healthcare facilities across Tanzania. We create safe learning and healing environments where students and patients can focus without security concerns."
        overviewTitle="About this industry"
        overviewDescription="Educational institutions and healthcare facilities operate as critical environments that must balance accessibility with safety and security. Schools and universities combine high student and staff traffic with visitor management needs, while hospitals and clinics require protection of sensitive areas and valuable medical assets. Security must be visible enough to deter threats, unobtrusive enough to support learning and healing, and responsive enough to handle incidents quickly without disrupting educational activities or medical care. This is why education and healthcare security works best when it is grounded in clear access control at entry points, consistent coverage of critical zones, and disciplined emergency protocols that administrators, parents, and medical staff can trust."
        overviewImage="/images/ug/education.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Educational entrances and campus zones',
            description: 'Controlled entry points to manage visitor flow and ensure only authorized individuals enter educational facilities.',
          },
          {
            title: 'Healthcare emergency departments',
            description: 'Controlled access points to manage patient and visitor flow while ensuring rapid emergency response.',
          },
          {
            title: 'Classrooms, labs, and medical facilities',
            description: 'Access control and monitoring to protect students, patients, and staff during learning and treatment hours.',
          },
          {
            title: 'Pharmacy and medication storage',
            description: 'Strict access control and monitoring to protect valuable pharmaceuticals and controlled substances.',
          },
          {
            title: 'Playgrounds, sports facilities, and parking areas',
            description: 'Security coverage for outdoor areas where students and patients gather, ensuring safety during arrival and departure.',
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

