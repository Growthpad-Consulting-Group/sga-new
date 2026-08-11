import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import CustomerCare from '@/components/contact/CustomerCare'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - SGA Security Group - Get In Touch',
  description: 'Contact SGA Security Group across Kenya, Tanzania, and Uganda. Reach out to our team for security solutions and consultations.',
}

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <ContactHero
        imageUrl="/images/contact/hero.png"
      />
      <ContactInfo />
      <CustomerCare />
      <FloatingWhatsApp />
    </>
  )
}