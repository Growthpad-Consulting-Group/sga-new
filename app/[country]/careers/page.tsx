import Hero from '@/features/careers/Hero'
import JobCards from '@/features/careers/Jobcards'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { loadJobCards } from '@/features/careers/loadJobCards'
import { countries } from '@/data/countries-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string }>
}

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params
    const c = countries[country]
    if (!c) return {}
    return {
        title: `Careers at SGA Security ${c.name}`,
        description: `Explore career opportunities at SGA Security in ${c.name}.`,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function CountryCareersPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    // Only this country's openings
    const jobs = (await loadJobCards()).filter(
        (job) => job.country?.trim().toLowerCase() === c.name.toLowerCase()
    )

    return (
        <>
            <Hero
                imageUrl="/images/careers/spa-0443-edit.jpg"
            />
            <div className="relative">
                <JobCards jobs={jobs} lockedCountry={c.name} />
            </div>
            <FloatingWhatsApp
                singleCountry={true}
                country={c.name}
                phone={c.whatsapp}
                url={c.whatsappUrl}
                flag={c.flag}
            />
        </>
    )
}
