import ServicePageTemplate from '../../components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Emergency Response Services - SGA Security Uganda',
  description: '24/7 rapid response teams ready to handle security incidents immediately in Uganda. Professional emergency response services.',
}

export default function EmergencyResponsePage() {
  return (
    <>
      <ServicePageTemplate
        serviceName="Emergency Response"
        serviceIcon="mdi:alert-circle"
        serviceType="Individual"
        heroImage="/images/group/CIT.png"
        heroTitle="Immediate Response When You Need It Most"
        heroDescription="Our emergency response service provides 24/7 rapid deployment of trained response teams to handle security incidents immediately. When emergencies occur, our teams are ready to respond quickly and professionally across Uganda."
        overviewTitle="About Emergency Response"
        overviewDescription="Emergency response services provide immediate deployment of trained security personnel to handle security incidents, threats, or emergencies. Our response teams are strategically located and equipped to respond quickly to various situations including security breaches, alarms, disturbances, and other urgent security concerns. Response teams are trained in incident assessment, de-escalation techniques, evidence preservation, and coordination with law enforcement and emergency services. They arrive equipped with communication devices, first aid supplies, and necessary equipment to handle various situations. The service operates 24/7, ensuring that help is available whenever needed. Response teams work closely with our control room operators who coordinate responses and provide ongoing support. This service is essential for providing immediate security support when incidents occur, minimizing potential damage, and ensuring rapid resolution of security concerns."
        overviewImage="/images/group/CIT.png"
        featuresTitle="Key Features"
        features={[
          {
            title: '24/7 Availability',
            description: 'Round-the-clock availability for immediate response to emergencies.',
          },
          {
            title: 'Rapid Deployment',
            description: 'Quick response times with strategically located response teams.',
          },
          {
            title: 'Trained Personnel',
            description: 'Response teams trained in incident management and emergency procedures.',
          },
          {
            title: 'Incident Assessment',
            description: 'Professional assessment of situations to determine appropriate response.',
          },
          {
            title: 'Coordination Services',
            description: 'Coordination with law enforcement, emergency services, and other stakeholders.',
          },
          {
            title: 'Follow-Up Support',
            description: 'Post-incident support including reporting and recommendations.',
          },
        ]}
        countryCode="ug"
        whyChooseTitle="Why Choose Our Emergency Response"
        whyChooseDescription="Our emergency response service provides reliable, professional support when you need it most."
        whyChoosePoints={[
          {
            title: 'Fast Response',
            description: 'Quick deployment with strategically located teams for rapid arrival.',
          },
          {
            title: 'Professional Teams',
            description: 'Trained personnel equipped to handle various emergency situations.',
          },
          {
            title: 'Comprehensive Support',
            description: 'Full support from initial response through incident resolution.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: 'Alarm & Response',
            summary: '24/7 monitoring with rapid deployment.',
            link: '/ug/services/alarm-response',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Professional on-site security personnel.',
            link: '/ug/services/security-guarding',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Personal Panic App',
            summary: 'One-tap SOS linked to our control room.',
            link: '/ug/services/personal-panic-app',
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

