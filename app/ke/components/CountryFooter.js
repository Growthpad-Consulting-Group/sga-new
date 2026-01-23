'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const countryData = {
  ke: {
    name: 'Kenya',
    address: [
      'Tulip House, Ground Floor',
      'Mombasa Road',
      'P.O. Box 18670–00500',
      'Nairobi, Kenya'
    ],
    phones: [
      { label: 'Tel', number: '+254 (0) 111 024000', icon: 'mdi:phone' },
      { label: 'Customer Service', number: '+254 (0) 20 6901000', icon: 'mdi:phone-in-talk' },
      { label: 'Emergency Line', number: '+254 (0) 733 700500', icon: 'mdi:phone-alert' }
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
      { label: 'Mobile', number: '+255 784 700299', icon: 'mdi:phone-alert' }
    ],
    email: 'customercare@sgasecurity.co.tz',
  },
}

export default function CountryFooter() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Determine country from pathname
  let countryCode = 'ke'
  let countryPrefix = '/ke'
  if (pathname.startsWith('/ug')) {
    countryCode = 'ug'
    countryPrefix = '/ug'
  }
  if (pathname.startsWith('/tz')) {
    countryCode = 'tz'
    countryPrefix = '/tz'
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
      if (scrollBottom >= documentHeight - 200) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="bg-white no-snap relative pt-8 pb-4 sm:pt-12 md:pt-16 md:pb-8" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-8 sm:py-10 md:py-12 bg-primary-orange text-white rounded-lg sm:rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-5">
              <Image
                src="/images/sga-logo-white.svg"
                alt="SGA Security"
                width={150}
                height={50}
                className="h-8 sm:h-10 md:h-auto w-auto"
              />
            </div>
            <div className="relative">
              <Icon 
                icon="mdi:plus-thick" 
                className="absolute -top-2 -left-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white font-bold" 
                style={{ strokeWidth: 3 }}
              />
              <p className="text-white/90 text-sm sm:text-base pl-5 sm:pl-6 mt-2 leading-relaxed font-bold">
                Integrated security solutions in {country.name} protecting what matters for people and organizations.
              </p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-5 sm:mt-6 pl-5 sm:pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">SGA {country.name}</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-white/90">
              <li>
                <Link href={`${countryPrefix}/about`} className="hover:text-white transition-colors cursor-pointer block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`${countryPrefix}#services`} className="hover:text-white transition-colors cursor-pointer block">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`${countryPrefix}/industries`} className="hover:text-white transition-colors cursor-pointer block">
                  Industries
                </Link>
              </li>
              <li>
                <Link href={`${countryPrefix}/why-us`} className="hover:text-white transition-colors cursor-pointer block">
                  Why Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-white/90">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Talk to us</h4>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-white/90">
              {country.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/20 space-y-1.5">
                {country.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.number.replace(/\s/g, '').replace(/[()]/g, '')}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Icon icon={phone.icon} className="w-4 h-4 flex-shrink-0" />
                    <span>{phone.number}</span>
                  </a>
                ))}
                <a
                  href={`mailto:${country.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Icon icon="mdi:email" className="w-4 h-4 flex-shrink-0" />
                  <span>{country.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-white/90">
          <p className="text-center sm:text-left">&copy; {currentYear} SGA Security {country.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors text-center sm:text-right">
              Privacy Policy
            </a>
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <Icon icon="mdi:chevron-up" className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

