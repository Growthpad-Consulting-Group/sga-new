import Hero from '@/features/careers/Hero'
import JobCards from '@/features/careers/Jobcards'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { loadJobCards } from '@/features/careers/loadJobCards'

export const metadata = {
  title: 'Careers at SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Learn about SGA Security Group, our mission, values, and commitment to providing exceptional security services across Kenya, Uganda, and Tanzania.',
}

export const revalidate = 60

export default async function CareersPage() {
  const jobs = await loadJobCards()

  return (
    <>
      <Hero
        imageUrl="/images/careers/spa-0443-edit.jpg"
      />
      <div className="relative">
        <JobCards jobs={jobs} />
      </div>
      <FloatingWhatsApp />
    </>
  )
}
