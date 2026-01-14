import './globals.css'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
import { EnquiryModalProvider } from '@/contexts/EnquiryModalContext'
import { CVModalProvider } from '@/contexts/CVModalContext'
import { CountryProvider } from '@/contexts/CountryContext'
import { headers } from 'next/headers'
import { getCanonicalUrl, formatHrefLangLinks, getCountryMetadata } from '@/lib/seoHelpers'

export const metadata = {
  title: 'SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Professional security services across Kenya, Uganda, and Tanzania. Trusted protection for businesses and communities.',
  keywords: 'security services, security guards, East Africa, Kenya, Uganda, Tanzania',
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
}

export default function RootLayout({ children }) {
  // Extract country from middleware header
  const headersList = headers()
  const country = headersList.get('x-country') || 'ke'
  const pathname = headersList.get('x-pathname') || '/'

  // Get country metadata for locale
  const countryMeta = getCountryMetadata(country)
  const canonicalUrl = getCanonicalUrl(country, pathname)
  const hrefLangLinks = formatHrefLangLinks(pathname)

  return (
    <html lang={countryMeta.locale.split('_')[0]}>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang tags for alternate country versions */}
        {hrefLangLinks.map((link) => (
          <link
            key={link.key}
            rel={link.rel}
            hrefLang={link.hrefLang}
            href={link.href}
          />
        ))}
        
        {/* Country-specific metadata */}
        <meta name="geo.region" content={countryMeta.region} />
        <meta name="geo.placename" content={countryMeta.name} />
      </head>
      <body>
        <CountryProvider country={country}>
          <EnquiryModalProvider>
            <CVModalProvider>
              <Header />
              <main className="pt-28 sm:pt-32">
                {children}
              </main>
              <ConditionalFooter />
            </CVModalProvider>
          </EnquiryModalProvider>
        </CountryProvider>
      </body>
    </html>
  )
}

