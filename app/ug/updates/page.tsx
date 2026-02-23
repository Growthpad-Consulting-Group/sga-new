import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import { getAllNewsPosts } from '@/lib/sanity'

export const metadata: Metadata = {
    title: 'News & Insights - SGA Security Uganda',
    description: 'Keep track of the latest news, insights, and security announcements from SGA Security Uganda.',
}

export default async function UgandaUpdatesPage(): Promise<React.JSX.Element> {
    const newsPosts = await getAllNewsPosts()

    return (
        <>
            <UpdatesHero
                imageUrl="/images/contact/hero.png"
            />
            <NewsReportsCards providedCountry="Uganda" initialNewsItems={newsPosts} />
            <FloatingWhatsApp
                singleCountry={true}
                country="Uganda"
                phone="+256772200048"
                url="https://wa.me/256772200048"
                flag="twemoji:flag-uganda"
            />
        </>
    )
}
