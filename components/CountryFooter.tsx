'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import { socialLinks } from '@/data/nav'

interface Phone {
  label: string
  number: string
  icon?: string
}

interface CountryData {
  name: string
  address: string[]
  phones: Phone[]
  email: string
}

interface CountryDataMap {
  ke: CountryData
  ug: CountryData
  tz: CountryData
}

const countryData: CountryDataMap = {
  ke: {
    name: 'Kenya',
    address: [
      'Tulip House, Ground Floor',
      'Mombasa Road, Nairobi',
      'P.O. Box 18670–00500',
      'Nairobi, Kenya'
    ],
    phones: [
      { label: 'Tel', number: '+254 (0) 20 6901000' },
      { label: 'WhatsApp', number: '+254 111 024000' },
      { label: 'Emergency', number: '+254 733 700500' }
    ],
    email: 'customerservice@ke.sgasecurity.com',
  },
  ug: {
    name: 'Uganda',
    address: [
      'Plot 5 Mvule Close, Naguru Hill',
      'P.O. Box 20097',
      'Kampala, Uganda'
    ],
    phones: [
      { label: 'Main', number: '+256 772 200 048', icon: 'mdi:phone' },
      { label: 'Office', number: '+256 417 114400', icon: 'mdi:phone-in-talk' },
      { label: 'Mobile', number: '+256 717 800752', icon: 'mdi:phone-alert' }
    ],
    email: 'customerservice@ug.sgasecurity.com',
  },
  tz: {
    name: 'Tanzania',
    address: [
      'Plot No. 74, Warioba/Serengeti Street',
      'Mikocheni Kinondoni',
      'Dar es Salaam, Tanzania'
    ],
    phones: [
      { label: 'Main', number: '+255 754 303076', icon: 'mdi:phone' },
      { label: 'Office', number: '+255 754 303076', icon: 'mdi:phone-in-talk' },
      { label: 'Emergency Line', number: '+255 784 700299', icon: 'mdi:phone-alert' }
    ],
    email: 'customercare@sgasecurity.co.tz',
  },
}

export default function CountryFooter(): React.JSX.Element {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const { openModal } = useEnquiryModal()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Determine country from pathname
  let countryCode: keyof CountryDataMap = 'ke'
  if (pathname.startsWith('/ug')) {
    countryCode = 'ug'
  }
  if (pathname.startsWith('/tz')) {
    countryCode = 'tz'
  }

  const country = countryData[countryCode]

  // Check if user has scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollBottom = scrollTop + windowHeight
      
      // Show button when user is near the bottom (within 200px)
      if (scrollBottom >= documentHeight - 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-3 py-4">
      <footer className="bg-primary-orange pt-12 md:pt-24 pb-4 rounded-3xl no-snap relative overflow-hidden max-w-8xl mx-auto" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo and branding Section */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <Image
                  src="/images/logo-white.svg"
                  alt="SGA Security"
                  width={220}
                  height={0}
                  className="h-auto"
                />
              </div>
              <div className="relative mb-20 pt-10">
                <Icon
                  icon="mdi:plus-thick"
                  className="absolute -top-4 -left-2 w-14 h-14 text-white font-bold"
                  style={{ strokeWidth: 3 }}
                />
                <p className="text-white/90 text-4xl pl-6 font-bold">
                  Integrated security across Kenya, Uganda and Tanzania protecting what matters for people and organizations.
                </p>
              </div>
              
            </div>

            {/* SGA Group Section */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <h4 className="font-semibold mb-6 text-white text-3xl">SGA Group</h4>
                <ul className="space-y-4 text-xl text-white/90">
                  <li>
                    <Link href="/" className="hover:text-navy-blue transition-colors cursor-pointer block">Group Website</Link>
                  </li>
                  <li>
                    <Link href="/sustainability" className="hover:text-navy-blue transition-colors cursor-pointer block">Sustainability</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-navy-blue transition-colors cursor-pointer block">Careers</Link>
                  </li>
                  <li>
                    <Link href="/news-reports" className="hover:text-navy-blue transition-colors cursor-pointer block">News & Insights</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-white text-3xl">Legal</h4>
                <ul className="space-y-4 text-xl text-white/90">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-navy-blue transition-colors cursor-pointer block">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" className="hover:text-navy-blue transition-colors cursor-pointer block">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/site-map" className="hover:text-navy-blue transition-colors cursor-pointer block">Site Map</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h4 className="font-semibold mb-4 text-white text-3xl">Talk to us</h4>
                <div className="space-y-3 text-xl text-white/90 leading-relaxed">
                  <div className="space-y-1">
                    {country.address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {country.phones.map((phone, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="font-normal">{phone.label}:</span>
                        <a 
                          href={phone.label === 'WhatsApp' ? `https://wa.me/${phone.number.replace(/\s/g, '').replace(/[()]/g, '').replace(/\+/g, '')}` : `tel:${phone.number.replace(/\s/g, '').replace(/[()]/g, '')}`} 
                          className="hover:text-navy-blue transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="">
                    <a 
                      href={`mailto:${country.email}`} 
                      className="hover:text-navy-blue transition-colors text-xl break-all underline"
                    >
                      {country.email}
                    </a>
                  </div>

                    <div className="pt-6">
                      <div className="flex items-center space-x-6 py-2">
                        {socialLinks.map((social) => (
                          <a
                            key={social.icon}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/90 hover:text-navy-blue transition-colors"
                            aria-label={social.label}
                          >
                            <Icon icon={social.icon} className="w-10 h-10" />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-12">
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary-orange hover:bg-navy-blue hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Scroll to top"
              >
                <Icon icon="mdi:chevron-up" className="w-8 h-8" />
              </button>
            )}
          </div>

          <div className="border-t border-white/20 mt-4 pt-8 flex flex-col sm:flex-row justify-between items-center text-xl text-white/90">
            <p>&copy; {currentYear} SGA Security. All rights reserved.</p>
            
            <div className="flex items-center gap-8 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="hover:text-navy-blue transition-colors">Privacy Policy</Link>
              <Link href="/site-map" className="hover:text-navy-blue transition-colors">Site Map</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
