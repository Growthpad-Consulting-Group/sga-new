'use client'

import { useState } from 'react'
import FAQsHero from '@/features/faqs/FAQsHero'
import FAQsContent from '@/features/faqs/FAQsContent'
import FAQsCTA from '@/features/faqs/FAQsCTA'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
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
