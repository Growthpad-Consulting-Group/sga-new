import WhyUsHero from '@/components/company/WhyUsHero'
import WhyChooseUs from '@/components/WhyChooseUs'
import WhyUsCards from '@/components/WhyUsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'
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
    const meta = resolveMetadata('why-us', c.name)
    return {
        title: meta.title,
        description: meta.description,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function WhyUsPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    return (
        <>
            <div id="about" className="relative">
                <WhyUsHero countryCode={country} />
                <SectionSeparator />
            </div>
            <div id="services" className="relative">
                <WhyChooseUs countryName={c.name} backgroundColor="bg-light-grey" />
                <SectionSeparator />
            </div>
            <div id="industries" className="relative">
                <WhyUsCards />
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
