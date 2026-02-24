import ServicePageTemplate from '@/components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Safe Home Packages - SGA Security Kenya',
  description: 'Complete home security packages tailored to your needs in Kenya. Comprehensive protection with security personnel, monitoring, and technology.',
}

export default function SafeHomePackagesPage() {
  return (
    <>
      <ServicePageTemplate countryCode="ke" 
        serviceName="Safe Home Packages"
        serviceIcon="mdi:package-variant"
        serviceType="Individual"
        heroImage="/images/group/guarding.png"
        heroTitle="Complete Home Security Solutions"
        heroDescription="Our Safe Home Packages provide comprehensive, all-in-one security solutions for your residence. These carefully designed packages combine multiple security services to offer complete protection tailored to your specific needs across Kenya."
        overviewTitle="About Safe Home Packages"
        overviewDescription="Safe Home Packages are comprehensive security solutions that bundle multiple security services into convenient, cost-effective packages. These packages typically include security personnel, electronic surveillance systems, alarm monitoring, access control, and emergency response services. Packages are designed to provide complete protection while offering better value than purchasing services individually. Different package tiers are available to suit various property sizes and security requirements, from basic monitoring to comprehensive protection with on-site personnel. Each package is carefully designed to provide multiple layers of security, ensuring that your home is protected through various means. The packages include professional installation, ongoing monitoring, maintenance, and support services. Our team works with you to select the package that best meets your security needs and budget. The service includes regular security assessments and updates to ensure your protection remains effective. Safe Home Packages provide peace of mind through comprehensive, integrated security solutions."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'Comprehensive Coverage',
            description: 'Multiple security services bundled together for complete protection.',
          },
          {
            title: 'Flexible Packages',
            description: 'Different package tiers to suit various property sizes and security needs.',
          },
          {
            title: '24/7 Monitoring',
            description: 'Round-the-clock monitoring of all security systems included in the package.',
          },
          {
            title: 'Professional Installation',
            description: 'Expert installation and setup of all security systems and services.',
          },
          {
            title: 'Ongoing Support',
            description: 'Regular maintenance, updates, and support services included.',
          },
          {
            title: 'Cost-Effective',
            description: 'Better value through bundled services compared to individual purchases.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Home Security',
            summary: 'Comprehensive home security solutions.',
            link: '/ke/services/individual/home-security',
          },
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: '24/7 Monitoring',
            summary: 'Continuous monitoring services.',
            link: '/ke/services/individual/24-7-monitoring',
          },
          {
            image: '/images/group/CIT.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: 'Immediate response to security incidents.',
            link: '/ke/services/individual/emergency-response',
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

