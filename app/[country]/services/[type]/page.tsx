import { notFound } from 'next/navigation'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'
import ServicesGrid from './ServicesGrid'
import ServicesTypeHero from './ServicesTypeHero'
import { individualServices, corporateServices, resolveServiceData } from '@/data/services-data'
import { countries } from '@/data/countries-data'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string; type: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country, type } = await params
    const c = countries[country]
    if (!c || (type !== 'individual' && type !== 'corporate')) return {}
    const label = type === 'individual' ? 'Individual' : 'Corporate'
    return {
        title: `${label} Security Services - SGA Security ${c.name}`,
        description: `Explore SGA Security ${label} services in ${c.name}. Professional protection tailored to your needs.`,
    }
}

export async function generateStaticParams() {
    return ['ke', 'ug', 'tz'].flatMap((country) => [
        { country, type: 'individual' },
        { country, type: 'corporate' },
    ])
}

export default async function ServicesTypePage({ params }: Props) {
    const { country, type } = await params
    const c = countries[country]

    if (!c || (type !== 'individual' && type !== 'corporate')) notFound()

    const servicesMap = type === 'individual' ? individualServices : corporateServices
    const services = Object.entries(servicesMap).map(([slug, data]) => ({
        slug,
        ...resolveServiceData(data, c.name, country),
    }))

    const isIndividual = type === 'individual'
    const description = isIndividual
        ? `Personal and residential security solutions designed to protect you, your family, and your home in ${c.name}.`
        : `Professional security solutions tailored for businesses, organisations, and enterprises in ${c.name}.`

    return (
        <>
            <ServicesTypeHero
                country={country}
                countryName={c.name}
                type={type}
                isIndividual={isIndividual}
                description={description}
                heroImage={services[0]?.heroImage}
            />

            <SectionSeparator />

            <ServicesGrid
                services={services}
                country={country}
                type={type}
                isIndividual={isIndividual}
                countryName={c.name}
            />

            <SectionSeparator />

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
