import { notFound } from 'next/navigation'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { industriesData, resolveIndustryData } from '@/data/industries-data'
import { countries } from '@/data/countries-data'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country, slug } = await params
    const c = countries[country]
    const industry = industriesData[slug]

    if (!industry || !c) return {}

    const resolved = resolveIndustryData(industry, c.name, country)
    return {
        title: resolved.metaTitle,
        description: resolved.metaDescription,
    }
}

export async function generateStaticParams() {
    const params: { country: string; slug: string }[] = []
    const slugs = Object.keys(industriesData)
    const countryCodes = ['ke', 'ug', 'tz']

    countryCodes.forEach((country) => {
        slugs.forEach((slug) => {
            params.push({ country, slug })
        })
    })

    return params
}

export default async function IndustryPage({ params }: Props) {
    const { country, slug } = await params
    const c = countries[country]
    const industry = industriesData[slug]

    if (!industry || !c) notFound()

    const resolvedData = resolveIndustryData(industry, c.name, country)

    return (
        <>
            <IndustryPageTemplate {...resolvedData} />
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
