'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-100 py-16 no-snap relative" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-navy-blue text-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/sga-logo-white.svg"
                alt="SGA Security"
                width={150}
                height={50}
                className="h-auto"
              />
            </div>
            <div className="relative">
              <Icon 
                icon="mdi:plus-thick" 
                className="absolute -top-2 -left-2 w-8 h-8 text-primary-orange font-bold" 
                style={{ strokeWidth: 3 }}
              />
              <p className="text-light-grey text-base pl-6 mt-2">
                Integrated security across Kenya, Uganda and Tanzania protecting what matters for people and organizations.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-6 pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-grey hover:text-primary-orange transition-colors"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-orange">SGA Group</h4>
            <ul className="space-y-2 text-sm text-light-grey">
              <li>Group Website</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>News & Reports</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-orange">Legal</h4>
            <ul className="space-y-2 text-sm text-light-grey">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-orange">Talk to us</h4>
            <div className="space-y-2 text-sm text-light-grey">
              <p>Tulip House, Ground Floor</p>
              <p>Mombasa road</p>
              <p>P.O. Box 18670</p>
              <p>00500 Nairobi, Kenya</p>
              <p className="mt-3">Tel: +254 (0) 111 024000</p>
              <p>Customer Service: +254 (0) 20 6901000</p>
              <p>Emergency Line: +254 (0) 733 700500</p>
              <p>Email: customerservice@ke.sgasecurity.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-light-grey">
          <p>&copy; {currentYear} SGA Security. All rights reserved.</p>
          <a href="/privacy-policy" className="mt-2 sm:mt-0 hover:text-primary-orange transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

