'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Don't show global footer on group landing page (root path)
  if (pathname === '/' || pathname === '/about' || pathname === '/sustainability' || pathname === '/contact' || pathname === '/news-reports' || pathname === '/updates') {
    return null
  }
  
  return <Footer />
}

