import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import CustomerCare from '@/components/CustomerCare'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Contact Us - SGA Security Group - Get In Touch',
  description: 'Contact SGA Security Group across Kenya, Tanzania, and Uganda. Reach out to our team for security solutions and consultations.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero 
        imageUrl="/images/contact/hero.png"
      />
      <ContactInfo/>
      <CustomerCare />
      <FloatingWhatsApp />
    </>
  )
}

