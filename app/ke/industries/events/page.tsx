import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Events & Venues Security - SGA Security Kenya',
  description: 'Professional event security services for concerts, conferences, sports events, and venues in Kenya. Ensuring safe and secure experiences for attendees and organizers.',
}

export default function EventsIndustryPage() {
  return (
    <>
      <IndustryPageTemplate
        industryName="Events & Venues"
        industryIcon="mdi:calendar-star"
        heroImage="/images/ug/education.png"
        heroTitle="Securing Memorable Experiences"
        heroDescription="Professional event security services for concerts, conferences, sports events, and venues across Kenya. We ensure safe and secure experiences for attendees and organizers."
        overviewTitle="About this industry"
        overviewDescription="Events and venues require security that balances welcoming atmospheres for attendees with protection of people and assets. These environments combine high attendee traffic, temporary setups, and the need to maintain positive event experiences. Security must be visible enough to deter threats, approachable enough to support event atmosphere, and responsive enough to handle incidents quickly without disrupting activities. This is why event security works best when it is grounded in clear access control at entry points, consistent coverage of event spaces and parking areas, and disciplined crowd management that event organizers and attendees can trust."
        overviewImage="/images/ug/education.png"
        servicesTitle="What we typically secure"
        services={[
          {
            title: 'Event entrances and ticket gates',
            description: 'Controlled access points to manage attendee flow and ensure only authorized individuals enter the venue.',
          },
          {
            title: 'VIP areas and backstage zones',
            description: 'Restricted access control to protect performers, speakers, and special guests.',
          },
          {
            title: 'Parking areas and perimeter boundaries',
            description: 'Monitoring to ensure attendee safety during arrival and departure, and prevent unauthorized access.',
          },
          {
            title: 'Crowd management and emergency response',
            description: 'Trained personnel to manage large crowds and respond quickly to any incidents or emergencies.',
          },
        ]}
        countryCode="ke"
        relatedServices={[
          {
            image: '/images/ug/residentials.png',
            category: 'Security Service',
            title: 'Event Security',
            summary: 'Professional security for concerts, conferences, and events.',
            link: '/ke/services/corporate/event-security',
          },
          {
            image: '/images/ug/education.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Trained guards for venue protection and crowd management.',
            link: '/ke/services/corporate/security-guarding',
          },
          {
            image: '/images/ug/healthcare.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: 'Rapid response teams for event emergencies.',
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

