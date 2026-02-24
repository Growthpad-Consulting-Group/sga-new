import ServicePageTemplate from '@/components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Security Guarding Services - SGA Security Tanzania',
  description: 'Professional on-site security personnel trained to protect your business assets and ensure safety in Tanzania. 24/7 security guarding services for corporate clients.',
}

export default function SecurityGuardingPage() {
  return (
    <>
      <ServicePageTemplate countryCode="tz" 
        serviceName="Security Guarding"
        serviceIcon="mdi:shield-account"
        serviceType="Corporate"
        heroImage="/images/group/guarding.png"
        heroTitle="Professional Security Personnel for Your Business"
        heroDescription="Our trained security guards provide round-the-clock protection for your business premises, assets, and personnel. With extensive experience and rigorous training, our security personnel are equipped to handle various security challenges across Tanzania."
        overviewTitle="About Security Guarding"
        overviewDescription="Security guarding is the foundation of physical security for businesses, providing visible deterrence and immediate response capabilities. Our security guards undergo comprehensive training in access control, patrol procedures, incident reporting, and emergency response. They serve as the first line of defense, monitoring entry points, conducting regular patrols, and maintaining a visible security presence that deters potential threats. Our guards are trained to be professional, courteous, and observant, ensuring they can identify and respond to security concerns while maintaining positive interaction with authorized personnel and visitors. For corporate clients, our security guarding services are tailored to business environments, including office buildings, warehouses, manufacturing facilities, and retail locations. Guards are trained in business-specific security protocols and work closely with management to ensure security measures align with business operations."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: '24/7 Coverage',
            description: 'Round-the-clock security coverage ensuring your business premises are protected at all times.',
          },
          {
            title: 'Trained Personnel',
            description: 'All guards undergo comprehensive training in security protocols, emergency response, and customer service.',
          },
          {
            title: 'Access Control',
            description: 'Professional management of entry points, visitor registration, and authorization verification.',
          },
          {
            title: 'Regular Patrols',
            description: 'Systematic patrols of your premises to identify and address security concerns proactively.',
          },
          {
            title: 'Incident Reporting',
            description: 'Detailed documentation and reporting of security incidents and observations.',
          },
          {
            title: 'Business-Focused',
            description: 'Security solutions tailored to corporate environments and business operations.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: 'Electronic Security',
            summary: 'Advanced surveillance and access control systems.',
            link: '/tz/services/corporate/electronic-security',
          },
          {
            image: '/images/group/CIT.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: '24/7 monitoring with rapid deployment to your location.',
            link: '/tz/services/individual/emergency-response',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Risk Assessment',
            summary: 'Comprehensive security audits for your business.',
            link: '/tz/services/corporate/risk-assessment',
          },
        ]}
      />
      <FloatingWhatsApp 
        singleCountry={true}
        country="Tanzania"
        phone="+255222123456"
        url="https://wa.me/255222123456"
        flag="twemoji:flag-tanzania"
      />
    </>
  )
}

