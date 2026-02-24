import IndustriesHero from '@/components/IndustriesHero'
import IndustriesDetail from '@/components/IndustriesDetail'
import { industriesSummary } from '@/data/industries-landing-data'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { countries } from '@/data/countries-data'
import { resolveMetadata } from '@/data/metadata-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params
    const c = countries[country]
    if (!c) return {}
    const meta = resolveMetadata('industries', c.name)
    return {
        title: meta.title,
        description: meta.description,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function IndustriesPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    const industries = industriesSummary[country]

    if (!c || !industries) notFound()

    return (
        <>
            <IndustriesHero
                countryCode={country}
                imageUrl={`/images/${country}/about-sga.png`}
            />
            <IndustriesDetail
                countryCode={country}
                industries={industries}
            />
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
