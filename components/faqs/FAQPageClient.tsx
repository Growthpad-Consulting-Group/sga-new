'use client'

import { useState } from 'react'
import FAQsHero from '@/components/FAQsHero'
import FAQsContent from '@/components/faqs/FAQsContent'
import FAQsCTA from '@/components/FAQsCTA'
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
