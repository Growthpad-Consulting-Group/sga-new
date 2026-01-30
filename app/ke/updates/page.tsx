import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Updates - SGA Security Kenya - Latest News & Reports',
    description: 'Stay up to date with the latest security updates, announcements, and news from SGA Security Kenya.',
}

export default function KenyaUpdatesPage(): React.JSX.Element {
    return (
        <>
            <UpdatesHero
                imageUrl="/images/contact/hero.png"
            />
            <NewsReportsCards providedCountry="Kenya" />
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
