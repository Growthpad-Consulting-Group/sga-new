'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

export default function GroupFooter() {
  const currentYear = new Date().getFullYear()
  const { openModal } = useEnquiryModal()

  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="bg-primary-orange py-12 md:py-16 no-snap relative" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Logo and Social Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/sga-logo-white.svg"
                alt="SGA Security"
                width={150}
                height={50}
                className="h-auto"
              />
            </div>
            <div className="relative mb-6">
              <Icon 
                icon="mdi:plus-thick" 
                className="absolute -top-2 -left-2 w-8 h-8 text-white font-bold" 
                style={{ strokeWidth: 3 }}
              />
              <p className="text-white/90 text-sm leading-relaxed pl-6 font-bold">
                Integrated security across Kenya, Uganda and Tanzania protecting what matters for people and organizations.
              </p>
            </div>
            <div className="pl-6">
              <h4 className="font-semibold mb-3 text-white text-sm">Connect With Us</h4>
              <div className="flex items-center space-x-4 mb-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-navy-blue transition-colors"
                    aria-label={social.label}
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="/contact"
                  className="bg-white text-primary-orange px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-white/90 transition-colors text-center"
                >
                  CONTACT US
                </a>
                <button
                  onClick={openModal}
                  className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-white hover:text-primary-orange transition-colors text-center"
                >
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/90">
              <li>
                <a href="/about" className="hover:text-navy-blue transition-colors cursor-pointer">Who we are</a>
              </li>
              <li>
                <a href="#services" className="hover:text-navy-blue transition-colors cursor-pointer">Services</a>
              </li>
              <li>
                <a href="/sustainability" className="hover:text-navy-blue transition-colors cursor-pointer">Sustainability</a>
              </li>
              <li>
                <a href="/news-reports" className="hover:text-navy-blue transition-colors cursor-pointer">News & Reports</a>
              </li>
              <li>
                <a href="/careers" className="hover:text-navy-blue transition-colors cursor-pointer">Career</a>
              </li>
            </ul>
          </div>

          {/* Kenya HQ */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Kenya HQ (Nairobi)</h4>
            <div className="space-y-1.5 text-xs text-white/90 leading-relaxed">
              <p>Tulip House, Ground Floor</p>
              <p>Mombasa Road</p>
              <p>P.O. Box 18670–00500</p>
              <p>Nairobi, Kenya</p>
              <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
                <a href="tel:+254111024000" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone" className="w-4 h-4 flex-shrink-0" />
                  <span>+254 (0) 111 024000</span>
                </a>
                <a href="tel:+254206901000" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone-in-talk" className="w-4 h-4 flex-shrink-0" />
                  <span>+254 (0) 20 6901000</span>
                </a>
                <a href="tel:+254733700500" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone-alert" className="w-4 h-4 flex-shrink-0" />
                  <span>+254 (0) 733 700500</span>
                </a>
                <a href="mailto:customerservice@ke.sgasecurity.com" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:email" className="w-4 h-4 flex-shrink-0" />
                  <span>customerservice@ke.sgasecurity.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tanzania HQ */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Tanzania HQ (Dar es Salaam)</h4>
            <div className="space-y-1.5 text-xs text-white/90 leading-relaxed">
              <p>Plot No. 74, Warioba/Serengeti Street</p>
              <p>Mikocheni Kinondoni</p>
              <p>Dar es Salaam, Tanzania</p>
              <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
                <a href="tel:+255754303076" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone" className="w-4 h-4 flex-shrink-0" />
                  <span>+255 754 303076</span>
                </a>
                <a href="tel:+255754303076" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone-in-talk" className="w-4 h-4 flex-shrink-0" />
                  <span>+255 754 303076</span>
                </a>
                <a href="tel:+255784700299" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone-alert" className="w-4 h-4 flex-shrink-0" />
                  <span>+255 784 700299</span>
                </a>
                <a href="mailto:customercare@sgasecurity.co.tz" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:email" className="w-4 h-4 flex-shrink-0" />
                  <span>customercare@sgasecurity.co.tz</span>
                </a>
              </div>
            </div>
          </div>

          {/* Uganda HQ */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Uganda HQ (Kampala)</h4>
            <div className="space-y-1.5 text-xs text-white/90 leading-relaxed">
              <p>Plot 5 Mvule Close, Naguru Hill</p>
              <p>P.O. Box 20097</p>
              <p>Kampala, Uganda</p>
              <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
                <a href="tel:+256772200048" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone" className="w-4 h-4 flex-shrink-0" />
                  <span>+256 772 200 048</span>
                </a>
                <a href="tel:+256417114400" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:phone-in-talk" className="w-4 h-4 flex-shrink-0" />
                  <span>+256 417 114400</span>
                </a>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:phone-alert" className="w-4 h-4 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+256717800752" className="hover:text-navy-blue transition-colors">+256 717 800752</a>
                    <a href="tel:+256717800952" className="hover:text-navy-blue transition-colors">+256 717 800952</a>
                  </div>
                </div>
                <a href="mailto:customerservice@ug.sgasecurity.com" className="flex items-center gap-2 hover:text-navy-blue transition-colors">
                  <Icon icon="mdi:email" className="w-4 h-4 flex-shrink-0" />
                  <span>customerservice@ug.sgasecurity.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/90">
          <p>&copy; {currentYear} SGA Security. All rights reserved.</p>
          <a href="/privacy-policy" className="mt-2 sm:mt-0 hover:text-navy-blue transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

