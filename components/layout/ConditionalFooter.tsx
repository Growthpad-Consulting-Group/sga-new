'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/layout/Footer'
import GroupFooter from '@/components/layout/GroupFooter'
import CountryFooter from '@/components/layout/CountryFooter'

export default function ConditionalFooter(): React.JSX.Element | null {
  const pathname = usePathname()

  // Check if current path is a country page
  const isCountryPage = pathname.startsWith('/ke') || pathname.startsWith('/ug') || pathname.startsWith('/tz')

  if (isCountryPage) {
    return <CountryFooter />
  }

  // Show GroupFooter on group landing pages and slug pages
  if (pathname === '/' ||
    pathname === '/about' ||
    pathname === '/sustainability' ||
    pathname === '/contact' ||
    pathname === '/news-reports' ||
    pathname === '/careers' ||
    pathname === '/updates' ||
    pathname === '/site-map' ||
    pathname === '/privacy-policy' ||
    pathname === '/terms-conditions' ||
    pathname?.startsWith('/updates/') ||
    pathname?.startsWith('/news-reports/')) {
    return <GroupFooter />
  }

  return <Footer />
}

