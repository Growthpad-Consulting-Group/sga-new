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
        country="Tanzania"
        phone="+255222123456"
        url="https://wa.me/255222123456"
        flag="twemoji:flag-tanzania"
      />
    </>
  )
}

