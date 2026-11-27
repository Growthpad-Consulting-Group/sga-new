import { notFound } from 'next/navigation'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import ServicesGrid from '@/features/services/ServicesGrid'
import ServicesTypeHero from '@/features/services/ServicesTypeHero'
import { individualServicesMenu, corporateServicesMenu, resolveServiceHref } from '@/data/servicesMenu'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ type: string }>
}

const regionName = 'East Africa'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { type } = await params
    if (type !== 'individual' && type !== 'corporate') return {}
    const label = type === 'individual' ? 'Individual' : 'Corporate'
    return {
        title: `${label} Security Services - SGA Security Group`,
        description: `Explore SGA Security ${label} services across ${regionName}. Professional protection tailored to your needs.`,
    }
}

export async function generateStaticParams() {
    return [{ type: 'individual' }, { type: 'corporate' }]
}

export default async function ServicesTypePage({ params }: Props) {
    const { type } = await params

    if (type !== 'individual' && type !== 'corporate') notFound()

    // Same list as the group header menu (data/servicesMenu.ts). A card links out only where the item points to a detail page or an external site.
    const menuList = type === 'individual' ? individualServicesMenu : corporateServicesMenu
    const services = menuList.map((service) => {
        const isDetailPage = service.path.split('/').length > 3
        const href = service.path.startsWith('http')
            ? service.path
            : isDetailPage ? resolveServiceHref('', service.path) : undefined
        return {
            slug: service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            serviceName: service.title,
            serviceIcon: '',
            heroImage: service.imageUrl,
            heroDescription: service.description,
            href,
        }
    })

    const isIndividual = type === 'individual'
    const description = isIndividual
        ? `Personal and residential security solutions designed to protect you, your family, and your home across ${regionName}.`
        : `Professional security solutions tailored for businesses, organisations, and enterprises across ${regionName}.`

    return (
        <>
            <ServicesTypeHero
                country=""
                countryName={regionName}
                type={type}
                isIndividual={isIndividual}
                description={description}
                heroImage={services[0]?.heroImage}
            />
            <ServicesGrid
                services={services}
                country=""
                type={type}
                isIndividual={isIndividual}
                countryName={regionName}
            />

            <FloatingWhatsApp />
        </>
    )
}
