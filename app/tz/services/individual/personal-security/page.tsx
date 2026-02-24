import ServicePageTemplate from '@/components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Personal Security Services - SGA Security Tanzania',
  description: 'Professional personal security services to protect individuals and families in Tanzania. Bodyguards, close protection, and personal safety solutions.',
}

export default function PersonalSecurityPage() {
  return (
    <>
      <ServicePageTemplate countryCode="tz" 
        serviceName="Personal Security"
        serviceIcon="mdi:account-shield"
        serviceType="Individual"
        heroImage="/images/group/guarding.png"
        heroTitle="Protection for You and Your Family"
        heroDescription="Our personal security services provide dedicated protection for individuals and families. With trained security personnel and advanced technology, we ensure your personal safety and peace of mind across Tanzania."
        overviewTitle="About Personal Security"
        overviewDescription="Personal security services provide dedicated protection for individuals, families, and high-profile persons. These services include close protection officers, bodyguards, personal escorts, and residential security for personal residences. Personal security personnel are specially trained in close protection techniques, threat assessment, defensive tactics, and emergency response. They work closely with clients to understand their routines, preferences, and specific security concerns. The service provides protection during travel, at events, at home, and in various daily activities. Personal security officers are trained to be discreet, professional, and observant, maintaining a low profile while ensuring protection. The service includes risk assessment, route planning, and coordination with other security measures. Personal security personnel are equipped with communication devices and have access to emergency response support. The service is designed to provide comprehensive protection while allowing clients to maintain their normal lifestyle. Our personal security team works to identify and mitigate potential threats before they materialize, ensuring proactive protection."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'Close Protection',
            description: 'Trained bodyguards and close protection officers for personal safety.',
          },
          {
            title: '24/7 Availability',
            description: 'Round-the-clock personal security coverage when needed.',
          },
          {
            title: 'Threat Assessment',
            description: 'Professional assessment of potential threats and security risks.',
          },
          {
            title: 'Travel Security',
            description: 'Personal security services during travel and at events.',
          },
          {
            title: 'Residential Protection',
            description: 'Security personnel for personal residences and family protection.',
          },
          {
            title: 'Discreet Service',
            description: 'Professional, low-profile security that maintains your privacy.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Home Security',
            summary: 'Comprehensive home security solutions.',
            link: '/tz/services/individual/home-security',
          },
          {
            image: '/images/group/CIT.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: 'Immediate response to security incidents.',
            link: '/tz/services/individual/emergency-response',
          },
          {
            image: '/images/group/CCTV.png',
            category: 'Security Service',
            title: '24/7 Monitoring',
            summary: 'Continuous monitoring services.',
            link: '/tz/services/individual/24-7-monitoring',
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

