import ServicePageTemplate from '../../components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Event Security Services - SGA Security Tanzania',
  description: 'Professional event security services for corporate events, conferences, and gatherings in Tanzania. Comprehensive security solutions for your events.',
}

export default function EventSecurityPage() {
  return (
    <>
      <ServicePageTemplate
        serviceName="Event Security"
        serviceIcon="mdi:calendar-star"
        serviceType="Corporate"
        heroImage="/images/group/guarding.png"
        heroTitle="Professional Security for Your Events"
        heroDescription="Our event security services provide comprehensive protection for corporate events, conferences, meetings, and gatherings. With trained security personnel and professional planning, we ensure your events are secure and safe across Tanzania."
        overviewTitle="About Event Security"
        overviewDescription="Event security services provide specialized protection for corporate events, conferences, meetings, exhibitions, and other gatherings. Our event security teams are trained to handle the unique security challenges of events, including crowd management, access control, VIP protection, and emergency response. Event security planning begins with a thorough assessment of the event venue, expected attendance, and specific security requirements. We develop comprehensive security plans that address access control, perimeter security, crowd management, and emergency procedures. Our security personnel are trained to be professional and unobtrusive while maintaining vigilance. Event security services include pre-event security assessments, on-site security personnel, access control management, crowd monitoring, and post-event security reviews. We work closely with event organizers to ensure security measures align with event objectives and attendee experience. Our teams are equipped to handle various event types including corporate meetings, conferences, product launches, exhibitions, and VIP events. Event security personnel are trained in conflict resolution, emergency response, and coordination with venue staff and local authorities."
        overviewImage="/images/group/guarding.png"
        featuresTitle="Key Features"
        features={[
          {
            title: 'Event Planning',
            description: 'Comprehensive security planning tailored to your specific event.',
          },
          {
            title: 'Access Control',
            description: 'Professional management of entry points and attendee verification.',
          },
          {
            title: 'Crowd Management',
            description: 'Trained personnel for managing crowds and maintaining order.',
          },
          {
            title: 'VIP Protection',
            description: 'Specialized security services for VIPs and high-profile attendees.',
          },
          {
            title: 'Emergency Response',
            description: 'Rapid response capabilities for security incidents during events.',
          },
          {
            title: 'Professional Service',
            description: 'Discreet, professional security that enhances rather than detracts from your event.',
          },
        ]}
        countryCode="tz"
        whyChooseTitle="Why Choose Our Event Security"
        whyChooseDescription="Our event security services provide professional, reliable protection for your corporate events."
        whyChoosePoints={[
          {
            title: 'Event Expertise',
            description: 'Security teams with extensive experience in event security.',
          },
          {
            title: 'Comprehensive Planning',
            description: 'Thorough security planning tailored to your specific event needs.',
          },
          {
            title: 'Professional Service',
            description: 'Discreet, professional security personnel trained for events.',
          },
        ]}
        relatedServices={[
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Security Guarding',
            summary: 'Professional on-site security personnel.',
            link: '/tz/services/security-guarding',
          },
          {
            image: '/images/group/CIT.png',
            category: 'Security Service',
            title: 'Emergency Response',
            summary: 'Immediate response to security incidents.',
            link: '/tz/services/emergency-response',
          },
          {
            image: '/images/group/guarding.png',
            category: 'Security Service',
            title: 'Risk Assessment',
            summary: 'Comprehensive security risk analysis.',
            link: '/tz/services/risk-assessment',
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

