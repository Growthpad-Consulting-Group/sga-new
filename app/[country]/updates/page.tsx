import UpdatesHero from '@/features/news/UpdatesHero'
import NewsReportsCards from '@/features/news/NewsReportsCards'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { getAllNewsPosts } from '@/lib/sanity'
import { countries } from '@/data/countries-data'
import { resolveMetadata } from '@/data/metadata-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string }>
}

const updatesHeroImages: Record<string, string> = {
    ke: '/images/ke/updates-hero-spa2435.jpg',
    tz: '/images/tz/updates-hero-spa0109.jpg',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params
    const c = countries[country]
    if (!c) return {}
    const meta = resolveMetadata('updates', c.name)
    return {
        title: meta.title,
        description: meta.description,
    }
}

export async function generateStaticParams() {
    return [{ country: 'ke' }, { country: 'ug' }, { country: 'tz' }]
}

export default async function UpdatesPage({ params }: Props) {
    const { country } = await params
    const c = countries[country]
    if (!c) notFound()

    const newsPosts = await getAllNewsPosts()

    return (
        <>
            <UpdatesHero
                imageUrl={updatesHeroImages[country] || '/images/contact/hero.png'}
            />
            <NewsReportsCards providedCountry={c.name} initialNewsItems={newsPosts} />
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
