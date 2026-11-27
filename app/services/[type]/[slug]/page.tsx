import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/features/services/ServicePageTemplate'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { individualServices, corporateServices, resolveServiceData } from '@/features/services/data'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ type: string; slug: string }>
}

const regionName = 'East Africa'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { type, slug } = await params
    const service = type === 'corporate' ? corporateServices[slug] : individualServices[slug]
    if (!service) return {}

    const resolved = resolveServiceData(service, regionName, '')
    return {
        title: resolved.metaTitle,
        description: resolved.metaDescription,
    }
}

export async function generateStaticParams() {
    const params: { type: string; slug: string }[] = []
    Object.keys(individualServices).forEach((slug) => params.push({ type: 'individual', slug }))
    Object.keys(corporateServices).forEach((slug) => params.push({ type: 'corporate', slug }))
    return params
}

export default async function ServicePage({ params }: Props) {
    const { type, slug } = await params
    const service = type === 'corporate' ? corporateServices[slug] : individualServices[slug]

    if (!service) notFound()

    const resolvedData = resolveServiceData(service, regionName, '')

    return (
        <>
            <ServicePageTemplate {...resolvedData} countryCode="" />
            <FloatingWhatsApp />
        </>
    )
}
