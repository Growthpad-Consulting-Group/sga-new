import { notFound } from 'next/navigation'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import ServicesGrid from '@/features/services/ServicesGrid'
import ServicesTypeHero from '@/features/services/ServicesTypeHero'
import { individualServicesMenu, corporateServicesMenu, resolveServiceHref } from '@/data/services'
import { countries } from '@/data/countries-data'
import { getServiceDetail } from '@/data/services'
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

    // Cards come from the same list as the country header menu (data/servicesMenu.ts).
    // A card links out only where the menu item points to a detail page or an external site.
    const menuList = type === 'individual' ? individualServicesMenu : corporateServicesMenu
    const services = menuList.map((service) => {
        const isDetailPage = service.path.split('/').length > 3
        const href = service.path.startsWith('http')
            ? service.path
            : isDetailPage ? resolveServiceHref(`/${country}`, service.path) : undefined
        return {
            slug: service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            serviceName: service.title,
            serviceIcon: '',
            heroImage: service.imageUrl,
            heroDescription: service.description,
            href,
            detail: isDetailPage && !service.path.startsWith('http') ? getServiceDetail(service.path, c.name, country) : undefined,
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
            <ServicesGrid
                    services={services}
                    country={country}
                    type={type}
                    isIndividual={isIndividual}
                    countryName={c.name}
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
