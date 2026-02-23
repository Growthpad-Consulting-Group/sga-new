import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import { getAllNewsPosts } from '@/lib/sanity'

export const metadata: Metadata = {
    title: 'News & Insights - SGA Security Kenya',
    description: 'Stay up to date with the latest security news, insights, and announcements from SGA Security Kenya.',
}

export default async function KenyaUpdatesPage(): Promise<React.JSX.Element> {
    const newsPosts = await getAllNewsPosts()

    return (
        <>
            <UpdatesHero
                imageUrl="/images/contact/hero.png"
            />
            <NewsReportsCards providedCountry="Kenya" initialNewsItems={newsPosts} />
            <FloatingWhatsApp
                singleCountry={true}
                country="Kenya"
                phone="+254111024000"
                url="https://wa.me/254111024000"
                flag="twemoji:flag-kenya"
            />
        </>
    )
}
