'use client'

import { useState } from 'react'
import FAQsHero from '@/components/FAQsHero'
import FAQsContent from '../components/FAQsContent'
import FAQsCTA from '@/components/FAQsCTA'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function FAQsPageClient() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <FAQsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FAQsContent searchQuery={searchQuery} />
      <FAQsCTA />
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

