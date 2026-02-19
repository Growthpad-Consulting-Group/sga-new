'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

interface SitemapSection {
  title: string
  links: { href: string; label: string }[]
}

export default function SitemapPage(): React.JSX.Element {
  const [sitemapSections, setSitemapSections] = useState<SitemapSection[]>([])

  useEffect(() => {
    // Fetch sitemap data from API route
    fetch('/api/sitemap-data')
      .then(res => res.json())
      .then(data => setSitemapSections(data))
      .catch(err => console.error('Failed to load sitemap:', err))
  }, [])

  if (sitemapSections.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Icon icon="mdi:loading" className="w-12 h-12 text-primary-orange animate-spin mx-auto mb-4" />
          <p className="text-dark-charcoal">Loading site map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-orange text-white py-16 md:py-24 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Icon icon="mdi:sitemap" className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Site Map</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Navigate through all pages of SGA Security Group website. Find information about our security services across Kenya, Tanzania, and Uganda.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {sitemapSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-primary-orange border-b-2 border-primary-orange pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-dark-charcoal hover:text-primary-orange transition-colors group"
                      >
                        <Icon 
                          icon="mdi:chevron-right" 
                          className="w-5 h-5 text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Contact Section */}
          <div className="mt-16 p-8 bg-light-grey rounded-lg">
            <h2 className="text-2xl font-bold text-dark-charcoal mb-4">Need Help Finding Something?</h2>
            <p className="text-lg text-dark-charcoal mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d84c1e] transition-colors"
              >
                <Icon icon="mdi:email" className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-navy-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-dark-charcoal transition-colors"
              >
                <Icon icon="mdi:briefcase" className="w-5 h-5" />
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
