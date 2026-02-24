import AboutHero from '@/components/company/AboutHero'
import AboutIntro from '@/components/company/AboutIntro'
import OurFoundation from '@/components/company/OurFoundation'
import OurJourney from '@/components/company/OurJourney'
import OurPeople from '@/components/company/OurPeople'
import SectionSeparator from '@/components/SectionSeparator'
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
    const meta = resolveMetadata('about', c.name)
    return {
        title: meta.title,
        description: meta.description,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function AboutPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    return (
        <>
            <AboutHero countryName={c.name} />
            <div className="relative">
                <AboutIntro countryName={c.name} />
                <SectionSeparator />
            </div>
            <div className="relative">
                <OurFoundation countryName={c.name} />
                <SectionSeparator />
            </div>
            <div className="relative">
                <OurJourney />
            </div>
            <div className="relative">
                <OurPeople countryName={c.name} />
                <SectionSeparator />
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
