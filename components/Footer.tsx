'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { socialLinks } from '@/data/nav'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-8 sm:py-12 md:py-16 no-snap relative" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 bg-primary-orange text-white rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-5">
              <Image
                src="/images/logo-white.svg"
                alt="SGA Security"
                width={150}
                height={50}
                className="h-8 sm:h-10 md:h-auto w-auto"
              />
            </div>
            <div className="relative">
              <Icon
                icon="mdi:plus-thick"
                className="absolute -top-2 -left-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-orange font-bold"
                style={{ strokeWidth: 3 }}
              />
              <p className="text-light-grey text-sm sm:text-base pl-5 sm:pl-6 mt-2 leading-relaxed">
                Integrated security across Kenya, Uganda and Tanzania protecting what matters for people and organizations.
              </p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-5 sm:mt-6 pl-5 sm:pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-grey hover:text-primary-orange transition-colors"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4  text-base sm:text-lg">SGA Group</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-light-grey">
              <li className="hover:text-primary-orange transition-colors cursor-pointer"><a href="/" className="hover:text-primary-orange transition-colors cursor-pointer">Group Website</a></li>
              <li className="hover:text-primary-orange transition-colors cursor-pointer"><a href="/sustainability" className="hover:text-primary-orange transition-colors cursor-pointer">Sustainability</a></li>
              <li className="hover:text-primary-orange transition-colors cursor-pointer"><a href="/careers" className="hover:text-primary-orange transition-colors cursor-pointer">Careers</a></li>
              <li className="hover:text-primary-orange transition-colors cursor-pointer"><a href="/news-reports" className="hover:text-primary-orange transition-colors cursor-pointer">News & Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4  text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-light-grey">
              <li className="hover:text-primary-orange transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary-orange transition-colors cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-primary-orange transition-colors cursor-pointer">Sitemap</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4  text-base sm:text-lg">Talk to us</h4>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-light-grey">
              <p>Tulip House, Ground Floor</p>
              <p>Mombasa road</p>
              <p>P.O. Box 18670</p>
              <p>00500 Nairobi, Kenya</p>
              <p className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">Tel: +254 111 024000</p>
              <p className="break-all">Email: customerservice@ke.sgasecurity.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-light-grey">
          <p className="text-center sm:text-left">&copy; {currentYear} SGA Security. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-primary-orange transition-colors text-center sm:text-right">
              Privacy Policy
            </a>
            <a href="/site-map" className="hover:text-primary-orange transition-colors text-center sm:text-right">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

