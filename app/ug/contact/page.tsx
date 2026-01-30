import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import CustomerCare from '@/components/CustomerCare'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - SGA Security Uganda - Get In Touch',
    description: 'Reach out to SGA Security Uganda for trusted security solutions. Our Kampala office and regional teams are here to serve you.',
}

export default function UgandaContactPage(): React.JSX.Element {
    return (
        <>
            <ContactHero
                imageUrl="/images/contact/hero.png"
            />
            <ContactInfo providedCountry="Uganda" />
            <CustomerCare />
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
