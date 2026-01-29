import ServicePageTemplate from '../../components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Security Consulting Services - SGA Security Uganda',
  description: 'Expert security consulting services for businesses in Uganda. Develop customized security strategies and solutions.',
}

export default function ConsultingServicesPage() {
  return (
    <>
      <ServicePageTemplate
        serviceName="Consulting Services"
        serviceIcon="mdi:briefcase"
        serviceType="Corporate"
        heroImage="/images/group/guarding.png"
        heroTitle="Expert Security Consulting for Your Business"
        heroDescription="Our security consulting services provide expert guidance to develop customized security strategies for your business. We work with you to design comprehensive security solutions tailored to your specific needs across Uganda."
        overviewTitle="About Consulting Services"
        overviewDescription="Security consulting services provide expert guidance and strategic planning for developing comprehensive security solutions. Our security consultants work closely with businesses to understand their unique security requirements, operational needs, and risk profiles. We help develop security policies, procedures, and protocols tailored to your business environment. Consulting services include security strategy development, policy creation, security program design, and implementation planning. Our consultants have extensive experience across various industries and can provide industry-specific security expertise. We help businesses identify security priorities, allocate security resources effectively, and develop long-term security strategies. Consulting services also include security training program development, security awareness initiatives, and compliance guidance. Our consultants work with management teams to ensure security measures align with business objectives and operational requirements. The service includes ongoing consultation and support as your security needs evolve. Our consulting services are designed to help businesses build comprehensive, effective security programs that protect assets, personnel, and operations."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'Expert Guidance',
            description: 'Security consulting from experienced professionals with industry expertise.',
          },
          {
            title: 'Customized Strategies',
            description: 'Security strategies tailored to your specific business needs.',
          },
          {
            title: 'Policy Development',
            description: 'Development of security policies, procedures, and protocols.',
          },
          {
            title: 'Implementation Planning',
            description: 'Strategic planning for implementing security measures.',
          },
          {
            title: 'Industry Expertise',
            description: 'Consulting services with knowledge of various business sectors.',
          },
          {
            title: 'Ongoing Support',
            description: 'Continued consultation and support as your needs evolve.',
          },
        ]}
        countryCode="ug"
        whyChooseTitle="Why Choose Our Consulting Services"
        whyChooseDescription="Our consulting services provide expert guidance to build effective security programs for your business."
        whyChoosePoints={[
          {
            title: 'Expert Consultants',
            description: 'Experienced security professionals with extensive industry knowledge.',
          },
          {
            title: 'Customized Solutions',
            description: 'Security strategies designed specifically for your business.',
          },
          {
            title: 'Comprehensive Approach',
            description: 'Holistic security consulting covering all aspects of business security.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Risk Assessment',
            summary: 'Comprehensive security risk analysis.',
            link: '/ug/services/risk-assessment',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Professional on-site security personnel.',
            link: '/ug/services/security-guarding',
          },
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: 'Electronic Security',
            summary: 'Advanced surveillance and security systems.',
            link: '/ug/services/electronic-security',
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

