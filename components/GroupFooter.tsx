'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Link from 'next/link'
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
        <div className="space-y-1.5 text-lg text-white/90 leading-relaxed">
          <p className="font-semibold text-white">Nairobi</p>
          <p>Tulip House, Ground Floor Mombasa road</p>
          <p>P.O. Box 18670 00500 Nairobi, Kenya</p>
          <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
            <div>
              <span className="font-bold">Tel:</span>
              <a href="tel:+254111024000" className="hover:text-navy-blue transition-colors ml-1">+254 111 024000</a>
            </div>
            <div>
              <span className="font-bold">Email:</span>
              <a href="mailto:customerservice@ke.sgasecurity.com" className="hover:text-navy-blue transition-colors ml-1">customerservice@ke.sgasecurity.com</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tanzania',
      title: 'Tanzania - Headquarters',
      content: (
        <div className="space-y-1.5 text-lg text-white/90 leading-relaxed">
          <p className="font-semibold text-white">Dar es Salaam</p>
          <p>Plot No.74, Warioba/Serengeti Street, Mikocheni</p>
          <p>Kinondoni, Dar Es Salaam, Tanzania</p>
          <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
            <div>
              <span className="font-bold">Tel:</span>
              <a href="tel:+255754303076" className="hover:text-navy-blue transition-colors ml-1">+255 754 303076</a>
            </div>
            <div>
              <span className="font-bold">Email:</span>
              <a href="mailto:customercare@sgasecurity.co.tz" className="hover:text-navy-blue transition-colors ml-1">customercare@sgasecurity.co.tz</a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'uganda',
      title: 'Uganda - Headquarters',
      content: (
        <div className="space-y-1.5 text-lg text-white/90 leading-relaxed">
          <p className="font-semibold text-white">Kampala</p>
          <p>Plot 5 Mvule Close, Naguru Hill</p>
          <p>P.O. Box 20097, Kampala, Uganda</p>
          <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
            <div>
              <span className="font-bold">Tel:</span>
              <a href="tel:+256772200048" className="hover:text-navy-blue transition-colors ml-1">+256 772 200 048</a>
            </div>
            <div>
              <span className="font-bold">Email:</span>
              <a href="mailto:customerservice@ug.sgasecurity.com" className="hover:text-navy-blue transition-colors ml-1">customerservice@ug.sgasecurity.com</a>
            </div>
          </div>
        </div>
      ),
    },
  ]

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
              <div className="pl-6">
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="bg-white text-primary-orange px-4 py-4 rounded-full font-semibold text-md uppercase hover:bg-white/90 transition-colors text-center flex-1"
                  >
                    CONTACT US
                  </a>
                  <button
                    onClick={openModal}
                    className="bg-transparent text-white border border-white px-4 py-4 rounded-full font-semibold text-md uppercase hover:bg-white hover:text-primary-orange transition-colors text-center flex-1"
                  >
                    REQUEST QUOTE
                  </button>
                </div>
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

            {/* All Countries Section with Accordion */}
            <div className="lg:col-span-4">
              <Accordion
                items={locationItems}
                defaultOpenId="kenya"
                variant="footer"
              />

              <div className="pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4 text-white text-2xl uppercase tracking-wider">Connect With Us</h4>
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

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xl text-white/90">
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
