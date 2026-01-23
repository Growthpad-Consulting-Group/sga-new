import ServicePageTemplate from '../../components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Home Security Services - SGA Security Uganda',
  description: 'Comprehensive home security solutions to protect your family and property in Uganda. 24/7 monitoring and rapid response services.',
}

export default function HomeSecurityPage() {
  return (
    <>
      <ServicePageTemplate
        serviceName="Home Security"
        serviceIcon="mdi:home-shield"
        serviceType="Individual"
        heroImage="/images/group/guarding.png"
        heroTitle="Protect Your Home and Family"
        heroDescription="Our comprehensive home security solutions provide complete protection for your residence, family, and valuables. With advanced technology and professional monitoring, we ensure your home is secure 24/7 across Uganda."
        overviewTitle="About Home Security"
        overviewDescription="Home security services provide comprehensive protection for residential properties, combining physical security measures with advanced technology. Our home security solutions include on-site security personnel, electronic surveillance systems, access control, alarm systems, and 24/7 monitoring. Security guards provide visible deterrence and immediate response capabilities, while electronic systems offer continuous monitoring and alert capabilities. Access control systems manage entry points, while alarm systems detect unauthorized access or security breaches. Our monitoring center operates 24/7, ensuring that any security alerts are immediately addressed. The service is designed to provide peace of mind, knowing that your home and family are protected around the clock. Our security personnel are trained to be professional and courteous while maintaining vigilance. The combination of human presence and technology creates a comprehensive security solution that addresses various security concerns and provides multiple layers of protection."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: '24/7 Monitoring',
            description: 'Round-the-clock monitoring of your home security systems with immediate response to alerts.',
          },
          {
            title: 'Security Personnel',
            description: 'Professional security guards providing visible presence and immediate response capabilities.',
          },
          {
            title: 'Electronic Systems',
            description: 'Advanced surveillance cameras, alarm systems, and access control for comprehensive protection.',
          },
          {
            title: 'Rapid Response',
            description: 'Quick response teams ready to deploy when security incidents are detected.',
          },
          {
            title: 'Access Control',
            description: 'Professional management of entry points and visitor verification.',
          },
          {
            title: 'Customized Solutions',
            description: 'Tailored security solutions designed to meet your specific home security needs.',
          },
        ]}
        countryCode="ug"
        whyChooseTitle="Why Choose Our Home Security"
        whyChooseDescription="Our home security services provide reliable, comprehensive protection for your residence and family."
        whyChoosePoints={[
          {
            title: 'Comprehensive Protection',
            description: 'Multiple layers of security combining personnel, technology, and monitoring.',
          },
          {
            title: 'Professional Service',
            description: 'Trained security personnel and reliable technology systems.',
          },
          {
            title: 'Peace of Mind',
            description: '24/7 protection ensuring your home and family are always secure.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: '24/7 Monitoring',
            summary: 'Continuous monitoring of your security systems.',
            link: '/ug/services/24-7-monitoring',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Safe Home Packages',
            summary: 'Complete home security packages.',
            link: '/ug/services/safe-home-packages',
          },
          {
            image: '/images/group/CIT.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: 'Immediate response to security incidents.',
            link: '/ug/services/emergency-response',
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

