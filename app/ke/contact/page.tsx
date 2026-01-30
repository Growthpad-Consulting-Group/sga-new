import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import CustomerCare from '@/components/CustomerCare'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - SGA Security Kenya - Get In Touch',
    description: 'Get in touch with SGA Security Kenya for reliable security solutions. We are here to help with your security needs across Kenya.',
}

export default function KenyaContactPage(): React.JSX.Element {
    return (
        <>
            <ContactHero
                imageUrl="/images/contact/hero.png"
            />
            <ContactInfo providedCountry="Kenya" />
            <CustomerCare />
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
