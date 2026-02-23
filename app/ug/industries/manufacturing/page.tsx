import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Manufacturing Security - SGA Security Uganda',
  description: 'Industrial security for manufacturing facilities, warehouses, and production sites in Uganda. Protecting assets, inventory, and ensuring workplace safety.',
}

export default function ManufacturingIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Manufacturing"
        industryIcon="mdi:factory"
        heroImage="/images/ug/healthcare.png"
        heroTitle="Securing Production, Protecting Assets"
        heroDescription="Comprehensive industrial security solutions for manufacturing facilities, warehouses, and production sites across Uganda. We protect your assets, inventory, and ensure workplace safety."
        overviewTitle="About this industry"
        overviewDescription="Manufacturing facilities operate as production environments that must balance operational efficiency with protection of valuable equipment and inventory. These facilities combine high employee traffic, material handling needs, and the critical requirement to maintain secure production zones. Security must be visible enough to deter threats, controlled enough to manage access to restricted areas, and responsive enough to handle incidents quickly without disrupting production schedules. This is why manufacturing security works best when it is grounded in clear access control procedures at production zones, consistent coverage of perimeters and loading areas, and disciplined incident response that plant management can trust."
        overviewImage="/images/ug/healthcare.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Main entrances and employee access points',
            description: 'Controlled entry points to manage employee and visitor flow while preventing unauthorized access.',
          },
          {
            title: 'Production floors and equipment areas',
            description: 'Restricted access zones to protect valuable manufacturing equipment and production processes.',
          },
          {
            title: 'Warehouses and inventory storage',
            description: 'Strict access control and monitoring to protect raw materials and finished products.',
          },
          {
            title: 'Loading docks and perimeter boundaries',
            description: 'Monitoring to ensure secure material handling and protect facility boundaries.',
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

