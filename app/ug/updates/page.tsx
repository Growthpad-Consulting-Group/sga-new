import UpdatesHero from '@/components/UpdatesHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'News & Reports - SGA Security Uganda',
    description: 'Keep track of the latest news, reports, and security announcements from SGA Security Uganda.',
}

export default function UgandaUpdatesPage(): React.JSX.Element {
    return (
        <>
            <UpdatesHero
                imageUrl="/images/contact/hero.png"
            />
            <NewsReportsCards providedCountry="Uganda" />
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
