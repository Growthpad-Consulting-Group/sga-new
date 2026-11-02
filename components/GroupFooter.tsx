'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import { Link } from 'next-view-transitions'
import Accordion from './Accordion'
import { socialLinks } from '@/data/nav'

export default function GroupFooter(): React.JSX.Element {
  const currentYear = new Date().getFullYear()
  const { openModal } = useEnquiryModal()

  const locationItems = [
    {
      id: 'kenya',
      title: 'Kenya - Headquarters',
      content: (
        <div className="space-y-1.5 text-lg lg:text-sm xl:text-lg text-white/90 leading-relaxed">
          <p className="font-semibold text-white">Nairobi</p>
          <p>Tulip House, Ground Floor Mombasa road</p>
          <p>P.O. Box 18670 00500 Nairobi, Kenya</p>
          <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
            <div>
              <span className="font-bold">Tel:</span>
              <a href="tel:+254111024000" className="hover:text-dark-charcoal transition-colors ml-1">+254 111 024 000</a>
            </div>
            <div>
              <span className="font-bold">Email:</span>
              <a href="mailto:customerservice@ke.sgasecurity.com" className="hover:text-dark-charcoal transition-colors ml-1">customerservice@ke.sgasecurity.com</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tanzania',
      title: 'Tanzania - Headquarters',
      content: (
        <div className="space-y-1.5 text-lg lg:text-sm xl:text-lg text-white/90 leading-relaxed">
          <p className="font-semibold text-white">Dar es Salaam</p>
          <p>Plot No.74, Warioba/Serengeti Street, Mikocheni</p>
          <p>Kinondoni, Dar Es Salaam, Tanzania</p>
          <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
            <div>
              <span className="font-bold">Tel:</span>
              <a href="tel:+255754303076" className="hover:text-dark-charcoal transition-colors ml-1">+255 754 303 076</a>
            </div>
            <div>
              <span className="font-bold">Email:</span>
              <a href="mailto:customercare@sgasecurity.co.tz" className="hover:text-dark-charcoal transition-colors ml-1">customercare@sgasecurity.co.tz</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'uganda',
      title: 'Uganda - Headquarters',
      content: (
        <div className="space-y-1.5 text-lg lg:text-sm xl:text-lg text-white/90 leading-relaxed">
          <p className="font-semibold text-white">Kampala</p>
          <p>Plot 5 Mvule Close, Naguru Hill</p>
          <p>P.O. Box 20097, Kampala, Uganda</p>
          <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
            <div>
              <span className="font-bold">Tel:</span>
              <a href="tel:+256772200048" className="hover:text-dark-charcoal transition-colors ml-1">+256 772 200 048</a>
            </div>
            <div>
              <span className="font-bold">Email:</span>
              <a href="mailto:customerservice@ug.sgasecurity.com" className="hover:text-dark-charcoal transition-colors ml-1">customerservice@ug.sgasecurity.com</a>
            </div>
          </div>
        </div>
      ),
    },
  ]

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
              <div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-primary-orange px-4 py-4 lg:py-2 xl:py-3 rounded-full font-semibold text-xs xl:text-sm hover:bg-primary-orange hover:text-white border border-white hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group relative text-center flex-1"
                  >
                    Contact Us
                    <Icon
                      icon="iconoir:arrow-right-circle"
                      className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4 top-1/2 -translate-y-1/2"
                    />
                  </Link>
                  <button
                    onClick={openModal}
                    className="bg-transparent text-white border border-white px-4 py-4 lg:py-2 xl:py-3 rounded-full font-semibold text-xs xl:text-sm hover:bg-white hover:text-primary-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group relative text-center flex-1"
                  >
                    Request Quote
                    <Icon
                      icon="iconoir:arrow-right-circle"
                      className="w-5 h-5 text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4 top-1/2 -translate-y-1/2"
                    />
                  </button>
                </div>
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

            {/* All Countries Section with Accordion */}
            <div className="lg:col-span-4">
              <Accordion
                items={locationItems}
                variant="footer"
              />

              <div className="pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4 text-white text-2xl lg:text-base xl:text-2xl tracking-wider">Connect With Us</h4>
                <div className="flex items-center space-x-6 lg:space-x-3 xl:space-x-6 py-2">
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

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xl lg:text-sm xl:text-xl text-white/90">
            <p>&copy; {currentYear} SGA Security. All rights reserved.</p>
            <div className="flex items-center gap-8 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="hover:text-dark-charcoal transition-colors">Privacy Policy</Link>
              <Link href="/site-map" className="hover:text-dark-charcoal transition-colors">Site Map</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
