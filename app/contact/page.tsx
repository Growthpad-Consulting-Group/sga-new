import ContactHero from '@/app/_contact/components/ContactHero'
import ContactInfo from '@/app/_contact/components/ContactInfo'
import CustomerCare from '@/app/_contact/components/CustomerCare'
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