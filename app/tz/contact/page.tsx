import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import CustomerCare from '@/components/CustomerCare'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - SGA Security Tanzania - Get In Touch',
    description: 'Connect with SGA Security Tanzania for comprehensive security services. Our team is ready to assist you across Tanzania.',
}

export default function TanzaniaContactPage(): React.JSX.Element {
    return (
        <>
            <ContactHero
                imageUrl="/images/contact/hero.png"
            />
            <ContactInfo providedCountry="Tanzania" />
            <CustomerCare />
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
