import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'News & Reports - SGA Security Tanzania',
    description: 'Stay informed with the latest news, reports, and security updates from SGA Security Tanzania.',
}

export default function TanzaniaUpdatesPage(): React.JSX.Element {
    return (
        <>
            <UpdatesHero
                imageUrl="/images/contact/hero.png"
            />
            <NewsReportsCards providedCountry="Tanzania" />
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
