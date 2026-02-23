import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Banking & Finance Security - SGA Security Uganda',
  description: 'High-security solutions for banks, financial institutions, and ATMs in Uganda. Protecting financial assets, staff, and customers with advanced security systems and trained personnel.',
}

export default function BankingIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Banking & Finance"
        industryIcon="mdi:bank"
        heroImage="/images/ug/industries/banking/hero.png"
        heroTitle="Fortress Security for Financial Institutions"
        heroDescription="High-security solutions for banks, financial institutions, and ATMs across Uganda. We protect financial assets, staff, and customers with advanced security systems and highly trained personnel."
        overviewTitle="About this industry"
        overviewDescription="Banks operate public-facing facilities that handle cash and sensitive data daily. These environments combine high customer traffic, strict compliance requirements, and low tolerance for downtime. Security must be visible enough to deter threats, controlled enough to manage access, and responsive enough to handle incidents quickly without disrupting customer experience or core operations. This is why banking security works best when it is grounded in clear procedures at access points, consistent coverage of critical zones, and disciplined incident escalation that management can audit and trust."
        overviewImage="/images/ug/industries/banking/hero.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Branch entrances and teller halls',
            description: 'Controlled entry points to manage visitor flow and reduce unauthorized access.',
          },
          {
            title: 'Vaults and cash rooms',
            description: 'Strict access control and monitoring to protect high-value assets.',
          },
          {
            title: 'ATM and perimeter zones',
            description: 'Monitored to prevent tampering, fraud, and after-hours incidents.',
          },
          {
            title: 'Cash-in-Transit routes',
            description: 'Strict access control and monitoring to protect high-value assets.',
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

