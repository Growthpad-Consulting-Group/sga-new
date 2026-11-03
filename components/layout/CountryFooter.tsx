'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { socialLinks } from '@/data/nav'
import ScrollToTop from '@/components/ui/ScrollToTop'

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
      { label: 'Tel', number: '+254 020 690 1000' },
      { label: 'WhatsApp', number: '+254 111 024 000' },
      { label: 'Emergency', number: '+254 733 700 500' }
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
      { label: 'Office', number: '+256 041 711 4400', icon: 'mdi:phone-in-talk' },
      { label: 'Mobile', number: '+256 717 800 752', icon: 'mdi:phone-alert' }
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
      { label: 'Main', number: '+255 754 303 076', icon: 'mdi:phone' },
      { label: 'Office', number: '+255 754 303 076', icon: 'mdi:phone-in-talk' },
      { label: 'Emergency Line', number: '+255 784 700 299', icon: 'mdi:phone-alert' }
    ],
    email: 'customercare@sgasecurity.co.tz',
  },
}

export default function CountryFooter(): React.JSX.Element {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  // Determine country from pathname
  let countryCode: keyof CountryDataMap = 'ke'
  if (pathname.startsWith('/ug')) {
    countryCode = 'ug'
  }
  if (pathname.startsWith('/tz')) {
    countryCode = 'tz'
  }

  const country = countryData[countryCode]

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-3 py-4">
      <footer className="bg-primary-orange pt-12 md:pt-24 pb-4 rounded-3xl no-snap relative overflow-hidden max-w-8xl mx-auto" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
        <div className="mx-auto container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo and branding Section */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <Image
                  src="/images/logo-white.svg"
                  alt="SGA Security"
                  width={220}
                  height={0}
                  className="h-auto w-[220px] lg:w-[180px] xl:w-[220px]"
                />
              </div>
              <div className="relative mb-6 pt-2 md:pt-4">
                <Icon
                  icon="mdi:plus-thick"
                  className="absolute -top-8 -left-14 md:-top-10 md:-left-14 lg:-top-8 lg:-left-12 xl:-top-10 xl:-left-14 w-10 h-10 md:w-20 md:h-20 lg:w-14 lg:h-14 xl:w-20 xl:h-20 text-white font-bold"
                  style={{ strokeWidth: 3 }}
                />
                <p className="text-white/90 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold">
                  Integrated security across Kenya, Uganda and Tanzania protecting what matters for people and organizations.
                </p>
              </div>
              
            </div>

            {/* SGA Group Section */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <h4 className="font-semibold mb-6 text-white text-3xl lg:text-xl xl:text-3xl">SGA Group</h4>
                <ul className="space-y-2 text-xl lg:text-sm xl:text-xl text-white/90">
                  <li>
                    <Link href="/" className="hover:text-dark-charcoal transition-colors cursor-pointer block">Group Website</Link>
                  </li>
                  <li>
                    <Link href="/sustainability" className="hover:text-dark-charcoal transition-colors cursor-pointer block">Sustainability</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-dark-charcoal transition-colors cursor-pointer block">Careers</Link>
                  </li>
                  <li>
                    <Link href="/news-reports" className="hover:text-dark-charcoal transition-colors cursor-pointer block">News & Insights</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-white text-3xl lg:text-xl xl:text-3xl">Legal</h4>
                <ul className="space-y-2 text-xl lg:text-sm xl:text-xl text-white/90">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-dark-charcoal transition-colors cursor-pointer block">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" className="hover:text-dark-charcoal transition-colors cursor-pointer block">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/site-map" className="hover:text-dark-charcoal transition-colors cursor-pointer block">Site Map</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h4 className="font-semibold mb-4 text-white text-xl sm:text-2xl lg:text-lg xl:text-2xl">Talk to us</h4>
                <div className="space-y-1.5 text-lg lg:text-sm xl:text-lg text-white/90 leading-relaxed">
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
                          className="hover:text-dark-charcoal transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="">
                    <a 
                      href={`mailto:${country.email}`} 
                      className="hover:text-dark-charcoal transition-colors break-all underline"
                    >
                      {country.email}
                    </a>
                  </div>

                    <div className="pt-6">
                      <div className="flex items-center space-x-4 lg:space-x-2 xl:space-x-4 py-2">
                        {socialLinks.map((social) => (
                          <a
                            key={social.icon}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/90 hover:text-dark-charcoal transition-colors"
                            aria-label={social.label}
                          >
                            <Icon icon={social.icon} className="w-8 h-8 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm lg:text-xs xl:text-base text-white/90">
            <p>&copy; {currentYear} SGA Security. All rights reserved.</p>
            
            <div className="flex items-center gap-8 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="hover:text-dark-charcoal transition-colors">Privacy Policy</Link>
              <Link href="/site-map" className="hover:text-dark-charcoal transition-colors">Site Map</Link>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
