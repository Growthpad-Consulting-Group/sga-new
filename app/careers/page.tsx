import Hero from './components/Hero'
import JobCards from './components/Jobcards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'
import { getAllJobPostings } from '@/lib/sanity'

export const metadata = {
  title: 'Careers at SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Learn about SGA Security Group, our mission, values, and commitment to providing exceptional security services across Kenya, Uganda, and Tanzania.',
}

export const revalidate = 60

export default async function CareersPage() {
  const jobs = (await getAllJobPostings()).map((job) => ({
    _id: job._id,
    location: `${job.city}, ${job.country}`,
    country: job.country,
    city: job.city,
    department: job.department,
    title: job.title,
    jobtype: `${job.department} • ${job.employmentType}`,
    summary: job.summary,
    date: new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(job.publishedAt)),
    responsibilities: job.responsibilities,
    requirements: job.requirements,
    applicationDeadline: job.applicationDeadline,
  }))

  return (
    <>
      <Hero
        imageUrl="/images/careers/20260720-162a9092.jpg"
      />
      <div className="relative">
        <JobCards jobs={jobs} />
        <SectionSeparator />
      </div>
      <FloatingWhatsApp />
    </>
  )
}

