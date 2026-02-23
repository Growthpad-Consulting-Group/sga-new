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
        country="Uganda"
        phone="+256772200048"
        url="https://wa.me/256772200048"
        flag="twemoji:flag-uganda"
      />
    </>
  )
}

