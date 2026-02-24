import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { individualServices, corporateServices, resolveServiceData } from '@/data/services-data'
import { countries } from '@/data/countries-data'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string; type: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country, type, slug } = await params
    const c = countries[country]
    const service = type === 'corporate' ? corporateServices[slug] : individualServices[slug]

    if (!service || !c) return {}

    const resolved = resolveServiceData(service, c.name, country)
    return {
        title: resolved.metaTitle,
        description: resolved.metaDescription,
    }
}

export async function generateStaticParams() {
    const params: { country: string; type: string; slug: string }[] = []
    const countryCodes = ['ke', 'ug', 'tz']

    countryCodes.forEach((country) => {
        Object.keys(individualServices).forEach((slug) => {
            params.push({ country, type: 'individual', slug })
        })
        Object.keys(corporateServices).forEach((slug) => {
            params.push({ country, type: 'corporate', slug })
        })
    })

    return params
}

export default async function ServicePage({ params }: Props) {
    const { country, type, slug } = await params
    const c = countries[country]
    const service = type === 'corporate' ? corporateServices[slug] : individualServices[slug]

    if (!service || !c) notFound()

    const resolvedData = resolveServiceData(service, c.name, country)

    return (
        <>
            <ServicePageTemplate {...resolvedData} />
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
