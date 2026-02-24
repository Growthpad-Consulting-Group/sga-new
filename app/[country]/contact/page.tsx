import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import CustomerCare from '@/components/CustomerCare'
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
    const meta = resolveMetadata('contact', c.name)
    return {
        title: meta.title,
        description: meta.description,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function ContactPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    return (
        <>
            <ContactHero imageUrl="/images/contact/hero.png" />
            <ContactInfo providedCountry={c.name} />
            <CustomerCare />
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
