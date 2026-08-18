import Hero from './components/Hero'
import SafetyTipsCards from './components/SafetyTipsCards'
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
        title: `Safety Tips - SGA Security ${c.name} - Essential Security Guidance`,
        description: `Essential safety tips and security guidance from SGA Security ${c.name}. Learn how to protect yourself, your family, and your property with expert security advice.`,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function SafetyTipsPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    return (
        <>
            <Hero
                imageUrl="/images/group/about/hero.png"
            />
            <SafetyTipsCards />
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
