import Hero from './components/Hero'
import ResourcesDocuments from './components/ResourcesDocuments'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { countries } from '@/data/countries-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params
    const c = countries[country]
    if (!c) return {}
    return {
        title: `Resources - SGA Security ${c.name} - Official Guidance Documents`,
        description: `Download official SGA Security ${c.name} guidance documents (PDF) for offline use and internal sharing.`,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function ResourcesPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    return (
        <>
            <Hero />
            <ResourcesDocuments />
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
