'use client'

import { useState } from 'react'
import FAQsHero from './FAQsHero'
import FAQsContent from './FAQsContent'
import FAQsCTA from './FAQsCTA'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { countries } from '@/data/countries-data'

export default function FAQPageClient({ countryCode }: { countryCode: string }) {
    const [searchQuery, setSearchQuery] = useState('')
    const c = countries[countryCode]

    return (
        <>
            <FAQsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FAQsContent searchQuery={searchQuery} />
            <FAQsCTA />
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
