'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface SocialLink {
  icon: string
  url: string
  label: string
}

export default function GroupFooter(): React.JSX.Element {
  const currentYear = new Date().getFullYear()
  const { openModal } = useEnquiryModal()

  const socialLinks: SocialLink[] = [
    { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="bg-primary-orange py-12 md:py-16 no-snap relative" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
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
              <p className="text-white/90 text-2xl leading-relaxed pl-6 font-bold">
                Integrated security across Kenya, Uganda and Tanzania protecting what matters for people and organizations.
              </p>
            </div>
            <div className="pl-6">
              <h4 className="font-semibold mb-3 text-white text-lg">Connect With Us</h4>
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
                    <Icon icon={social.icon} className="w-8 h-8" />
                  </a>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href="#contact"
                  className="bg-white text-primary-orange px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-white/90 transition-colors text-center flex-1"
                >
                  CONTACT US
                </a>
                <button
                  onClick={openModal}
                  className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-white hover:text-primary-orange transition-colors text-center flex-1"
                >
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-2xl">Company</h4>
            <ul className="space-y-2.5 text-md text-white/90">
              <li>
                <a href="#about" className="hover:text-navy-blue transition-colors cursor-pointer">Who we are</a>
              </li>
              <li>
                <a href="#services" className="hover:text-navy-blue transition-colors cursor-pointer">Services</a>
              </li>
              <li>
                <a href="#sustainability-esg" className="hover:text-navy-blue transition-colors cursor-pointer">Sustainability</a>
              </li>
              <li>
                <a href="#news" className="hover:text-navy-blue transition-colors cursor-pointer">News & Reports</a>
              </li>
              <li>
                <a href="#join-our-mission" className="hover:text-navy-blue transition-colors cursor-pointer">Career</a>
              </li>
            </ul>
          </div>

          {/* All Countries Section */}
          <div className="space-y-8">
            {/* Kenya HQ */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-2xl">Kenya HQ (Nairobi)</h4>
              <div className="space-y-1.5 text-md text-white/90 leading-relaxed">
                <p>Tulip House, Ground Floor, Mombasa Road</p>
                  <p>P.O. Box 18670–00500, Nairobi, Kenya</p>
                <div className="">
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="font-bold">Tel:</span> 
                      <a href="tel:+254111024000" className="hover:text-navy-blue transition-colors ml-1">+254 (0) 111 024000</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="font-bold">Customer Service:</span> 
                      <a href="tel:+254206901000" className="hover:text-navy-blue transition-colors ml-1">+254 (0) 20 6901000</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="font-bold">Emergency Line:</span> 
                      <a href="tel:+254733700500" className="hover:text-navy-blue transition-colors ml-1">+254 (0) 733 700500</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="font-bold">Email:</span> 
                      <a href="mailto:customerservice@ke.sgasecurity.com" className="hover:text-navy-blue transition-colors ml-1">customerservice@ke.sgasecurity.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tanzania HQ */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-2xl">Tanzania HQ (Dar es Salaam)</h4>
              <div className="space-y-1.5 text-md text-white/90 leading-relaxed">
                <p>Plot No. 74, Warioba/Serengeti Street, Mikocheni</p>
                <p>Kinondoni, Dar es Salaam, Tanzania</p>
                <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
                  <div>
                      <span className="font-bold">Tel:</span> 
                      <a href="tel:+254111024000" className="hover:text-navy-blue transition-colors ml-1">+254 (0) 111 024000</a>
                    </div>
                  <div>
                      <span className="font-bold">Customer Service:</span> 
                      <a href="tel:+255 754 303076" className="hover:text-navy-blue transition-colors ml-1">+255 754 303076</a>
                    </div>
                  <div>
                      <span className="font-bold">Emergency Line:</span> 
                      <a href="tel:+255 784 700299" className="hover:text-navy-blue transition-colors ml-1">+255 784 700299</a>
                    </div>
                  <div>
                      <span className="font-bold">Email:</span> 
                      <a href="mailto:customercare@sgasecurity.co.tz" className="hover:text-navy-blue transition-colors ml-1">customercare@sgasecurity.co.tz</a>
                    </div>
                </div>
              </div>
            </div>

            {/* Uganda HQ */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-2xl">Uganda HQ (Kampala)</h4>
              <div className="space-y-1.5 text-md text-white/90 leading-relaxed">
                <p>Plot 5 Mvule Close, Naguru Hill</p>
                <p>P.O. Box 20097, Kampala, Uganda</p>
                <div className="mt-3 pt-2 border-t border-white/20 space-y-1.5">
                  <div>
                      <span className="font-bold">Tel:</span> 
                      <a href="tel:+256 772 200 048" className="hover:text-navy-blue transition-colors ml-1">+256 772 200 048</a>
                    </div>
                  <div>
                      <span className="font-bold">Customer Service:</span> 
                      <a href="tel:+256 417 114400" className="hover:text-navy-blue transition-colors ml-1">+256 417 114400</a>
                  </div>
                  <div>
                      <span className="font-bold">Emergency Line:</span> 
                      <a href="tel:+256 717 800752" className="hover:text-navy-blue transition-colors ml-1">+256 717 800952</a> / <a href="tel:+256 717 800952" className="hover:text-navy-blue transition-colors ml-1">+256 717 800952</a>
                  </div>
                  <div>
                      <span className="font-bold">Email:</span> 
                      <a href="mailto:customerservice@ug.sgasecurity.com" className="hover:text-navy-blue transition-colors ml-1">customerservice@ug.sgasecurity.com</a>
                    </div>
                 
                  
                </div>
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
