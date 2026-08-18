import Hero from './components/Hero'
import SafetyTipsCards from './components/SafetyTipsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Safety Tips - SGA Security Group - Essential Security Guidance',
  description: 'Essential safety tips and security guidance from SGA Security Group. Learn how to protect yourself, your family, and your property with expert security advice.',
}

export default function SafetyTipsPage() {
  return (
    <>
      <Hero 
        imageUrl="/images/group/about/hero.png"
      />
      <SafetyTipsCards />
      <FloatingWhatsApp />
    </>
  )
}

