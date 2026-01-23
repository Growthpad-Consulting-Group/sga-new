import ServicePageTemplate from '../../components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: '24/7 Monitoring Services - SGA Security Uganda',
  description: 'Round-the-clock security monitoring services in Uganda. Continuous surveillance and immediate response to security alerts.',
}

export default function Monitoring24_7Page() {
  return (
    <>
      <ServicePageTemplate
        serviceName="24/7 Monitoring"
        serviceIcon="mdi:monitor-dashboard"
        serviceType="Individual"
        heroImage="/images/group/CCTV.png"
        heroTitle="Continuous Security Monitoring"
        heroDescription="Our 24/7 monitoring service provides round-the-clock surveillance of your security systems. With our state-of-the-art monitoring center, we ensure immediate response to any security alerts, keeping your property protected at all times across Uganda."
        overviewTitle="About 24/7 Monitoring"
        overviewDescription="24/7 monitoring services provide continuous surveillance and oversight of security systems through a dedicated monitoring center. The service monitors alarm systems, surveillance cameras, access control systems, and other security devices around the clock. When security alerts are triggered, monitoring operators immediately assess the situation and coordinate appropriate responses. The monitoring center is staffed by trained operators who are experienced in handling various types of security alerts and incidents. Operators have access to multiple communication channels and can coordinate with on-site security personnel, emergency response teams, and law enforcement as needed. The service includes regular system testing, maintenance coordination, and reporting. Monitoring operators maintain detailed logs of all activities and incidents, providing valuable documentation for security assessments. The service operates continuously, ensuring that security systems are monitored even when properties are unoccupied. Advanced technology and redundant systems ensure reliable monitoring service. The monitoring center serves as a central hub for coordinating security responses and maintaining situational awareness across multiple locations."
        overviewImage="/images/group/CCTV.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'Continuous Monitoring',
            description: 'Round-the-clock surveillance of all security systems without interruption.',
          },
          {
            title: 'Immediate Response',
            description: 'Rapid assessment and response coordination when alerts are triggered.',
          },
          {
            title: 'Trained Operators',
            description: 'Experienced monitoring center staff trained in security alert handling.',
          },
          {
            title: 'Multiple Systems',
            description: 'Monitoring of alarms, cameras, access control, and other security devices.',
          },
          {
            title: 'Coordination Services',
            description: 'Coordination with on-site personnel, response teams, and emergency services.',
          },
          {
            title: 'Detailed Reporting',
            description: 'Comprehensive logging and reporting of all monitoring activities and incidents.',
          },
        ]}
        countryCode="ug"
        whyChooseTitle="Why Choose Our 24/7 Monitoring"
        whyChooseDescription="Our 24/7 monitoring service provides reliable, professional surveillance and response coordination."
        whyChoosePoints={[
          {
            title: 'Reliable Service',
            description: 'Continuous monitoring with redundant systems ensuring uninterrupted coverage.',
          },
          {
            title: 'Professional Operators',
            description: 'Trained staff with experience in handling various security situations.',
          },
          {
            title: 'Rapid Response',
            description: 'Quick assessment and coordination for immediate response to security alerts.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: 'Electronic Security',
            summary: 'Advanced surveillance and security systems.',
            link: '/ug/services/electronic-security',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Home Security',
            summary: 'Comprehensive home security solutions.',
            link: '/ug/services/home-security',
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

