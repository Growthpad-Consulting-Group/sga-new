import { getAllJobPostings } from '@/lib/sanity'

// Shared by the group careers page and the country careers pages
export async function loadJobCards() {
  return (await getAllJobPostings()).map((job) => ({
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
    deadlineLabel: job.applicationDeadline
      ? new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(job.applicationDeadline))
      : undefined,
  }))
}
