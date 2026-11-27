'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import CountryHeader from '@/components/layout/CountryHeader'

export default function ConditionalHeader() {
    const pathname = usePathname()

    // The Sanity Studio has its own layout, so the site header is hidden there
    if (pathname.startsWith('/studio')) return null

    // Check if current path is a country page
    const isCountryPage = pathname.startsWith('/ke') || pathname.startsWith('/ug') || pathname.startsWith('/tz')

    return isCountryPage ? <CountryHeader /> : <Header />
}
