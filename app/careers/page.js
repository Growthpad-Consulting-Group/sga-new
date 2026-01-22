import Hero from './components/Hero'
import JobCards from './components/Jobcards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Careers at SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Learn about SGA Security Group, our mission, values, and commitment to providing exceptional security services across Kenya, Uganda, and Tanzania.',
}

export default function CareersPage() {
  return (
    <>
      <Hero 
        imageUrl="/images/careers/hero.png"
      />
      <JobCards />
      <FloatingWhatsApp />
    </>
  )
}

