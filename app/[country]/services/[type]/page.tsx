import { notFound } from 'next/navigation'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import SectionSeparator from '@/components/ui/SectionSeparator'
import ServicesGrid from '@/features/services/ServicesGrid'
import ServicesTypeHero from '@/features/services/ServicesTypeHero'
import { individualServices, corporateServices } from '@/features/services/data'
import { coreServices } from '@/data/coreServices'
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

    // Cards come from the shared core services list (same as the country menu).
    // A card links to its detail page where one exists for this service type,
    // otherwise to the service's own URL, otherwise to the country's contact page.
    const detailSlugs: Record<string, string> = {
        'Home Security Solutions': 'home-security',
        'Guarding Services': 'security-guarding',
    }
    const services = coreServices.map((service) => {
        const detailSlug = detailSlugs[service.title]
        const hasDetail = !!detailSlug && !!servicesMap[detailSlug]
        return {
            slug: detailSlug ?? service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            serviceName: service.title,
            serviceIcon: '',
            heroImage: service.imageUrl,
            heroDescription: service.description,
            href: hasDetail
                ? `/${country}/services/${type}/${detailSlug}`
                : service.href ?? `/${country}/contact`,
        }
    })

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

            <div className="relative">
                <SectionSeparator />

                <ServicesGrid
                    services={services}
                    country={country}
                    type={type}
                    isIndividual={isIndividual}
                    countryName={c.name}
                />

                <SectionSeparator className="bottom-0 translate-y-1/2" />
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