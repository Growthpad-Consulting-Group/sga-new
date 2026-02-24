import ServicePageTemplate from '@/components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Risk Assessment Services - SGA Security Tanzania',
  description: 'Comprehensive security risk assessments for businesses in Tanzania. Identify vulnerabilities and develop customized security strategies.',
}

export default function RiskAssessmentPage() {
  return (
    <>
      <ServicePageTemplate countryCode="tz" 
        serviceName="Risk Assessment"
        serviceIcon="mdi:clipboard-search"
        serviceType="Corporate"
        heroImage="/images/group/guarding.png"
        heroTitle="Comprehensive Security Risk Analysis"
        heroDescription="Our risk assessment services provide thorough analysis of your business security vulnerabilities. We identify potential threats and develop customized security strategies to protect your assets and operations across Tanzania."
        overviewTitle="About Risk Assessment"
        overviewDescription="Risk assessment services provide comprehensive analysis of security vulnerabilities and potential threats to your business. Our security experts conduct thorough evaluations of your premises, operations, and security measures to identify weaknesses and areas of concern. The assessment includes physical security evaluation, access control analysis, perimeter security review, and assessment of existing security systems. We examine operational procedures, employee practices, and security protocols to identify potential risks. The assessment also considers external threats, crime patterns in the area, and industry-specific security concerns. Based on our findings, we provide detailed reports with recommendations for improving security measures. Our risk assessments help businesses understand their security posture and prioritize security investments. The service includes follow-up consultations to discuss findings and implementation strategies. Risk assessments are essential for businesses looking to enhance their security or comply with security regulations. Our assessments are tailored to various business types including offices, warehouses, manufacturing facilities, retail locations, and other corporate environments."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'Comprehensive Analysis',
            description: 'Thorough evaluation of all aspects of your security posture.',
          },
          {
            title: 'Vulnerability Identification',
            description: 'Identification of security weaknesses and potential threats.',
          },
          {
            title: 'Detailed Reporting',
            description: 'Comprehensive reports with findings and recommendations.',
          },
          {
            title: 'Customized Recommendations',
            description: 'Tailored security improvement strategies for your business.',
          },
          {
            title: 'Expert Analysis',
            description: 'Security assessments conducted by experienced professionals.',
          },
          {
            title: 'Follow-Up Support',
            description: 'Consultation and support for implementing recommendations.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Professional on-site security personnel.',
            link: '/tz/services/corporate/security-guarding',
          },
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: 'Electronic Security',
            summary: 'Advanced surveillance and security systems.',
            link: '/tz/services/corporate/electronic-security',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Consulting Services',
            summary: 'Expert security consulting and strategy development.',
            link: '/tz/services/corporate/consulting-services',
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

