import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import { getAllNewsPosts } from '@/lib/sanity'

export const metadata: Metadata = {
    title: 'News & Insights - SGA Security Tanzania',
    description: 'Stay informed with the latest news, insights, and security updates from SGA Security Tanzania.',
}

export default async function TanzaniaUpdatesPage(): Promise<React.JSX.Element> {
    const newsPosts = await getAllNewsPosts()

    return (
        <>
            <UpdatesHero
                imageUrl="/images/contact/hero.png"
            />
            <NewsReportsCards providedCountry="Tanzania" initialNewsItems={newsPosts} />
            <FloatingWhatsApp
                singleCountry={true}
                country="Tanzania"
                phone="+255754303076"
                url="https://wa.me/255754303076"
                flag="twemoji:flag-tanzania"
            />
        </>
    )
}
