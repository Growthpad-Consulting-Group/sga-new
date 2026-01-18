'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const contactOffices = [
  {
    country: 'Kenya',
    city: 'Nairobi',
    address: [
      'Tulip House, Ground Floor',
      'Mombasa Road',
      'P.O. Box 18670–00500',
      'Nairobi, Kenya'
    ],
    phones: [
      { label: 'Main', number: '+254 (0) 111 024000', icon: 'mdi:phone' },
      { label: 'Office', number: '+254 (0) 20 6901000', icon: 'mdi:phone-in-talk' },
      { label: 'Mobile', number: '+254 (0) 733 700500', icon: 'mdi:phone-alert' }
    ],
    email: 'customerservice@ke.sgasecurity.com',
    flag: 'twemoji:flag-kenya',
    mapUrl: 'https://maps.google.com/?q=Tulip+House+Mombasa+Road+Nairobi+Kenya',
    websiteUrl: '/ke'
  },
  {
    country: 'Tanzania',
    city: 'Dar es Salaam',
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
    flag: 'twemoji:flag-tanzania',
    mapUrl: 'https://maps.google.com/?q=Plot+74+Warioba+Serengeti+Street+Mikocheni+Dar+es+Salaam+Tanzania',
    websiteUrl: '/tz'
  },
  {
    country: 'Uganda',
    city: 'Kampala',
    address: [
      'Plot 5 Mvule Close, Naguru Hill',
      'P.O. Box 20097',
      'Kampala, Uganda'
    ],
    phones: [
      { label: 'Main', number: '+256 772 200 048', icon: 'mdi:phone' },
      { label: 'Office', number: '+256 417 114400', icon: 'mdi:phone-in-talk' },
      { label: 'Mobile', number: '+256 717 800752 / +256 717 800952', icon: 'mdi:phone-alert' }
    ],
    email: 'customerservice@ug.sgasecurity.com',
    flag: 'twemoji:flag-uganda',
    mapUrl: 'https://maps.google.com/?q=Plot+5+Mvule+Close+Naguru+Hill+Kampala+Uganda',
    websiteUrl: '/ug'
  },
]

export default function ContactInfo() {
  return (
    <section id="contact-info" className="section-snap flex items-center justify-center bg-gray-100 text-dark-charcoal py-16 sm:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="section-title-container">
            <h2 className="section-title text-xl md:text-2xl lg:text-3xl font-bold text-primary-orange mb-6">
              Country Contacts
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl">
            Direct lines and offices for each country. You can also visit the country website for more local information.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {contactOffices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-primary-orange rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Icon icon={office.flag} className="w-8 h-8" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {office.country}
                  </h3>
                  <p className="text-sm text-white/90">{office.city}</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-3">
                  <Icon icon="mdi:map-marker" className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white leading-relaxed">
                    {office.address.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div className="mb-6 space-y-2">
                {office.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-white hover:text-navy-blue transition-colors"
                  >
                    <Icon icon={phone.icon} className="w-4 h-4 flex-shrink-0" />
                    <span>{phone.number}</span>
                  </a>
                ))}
              </div>

              {/* Visit Website */}
              <div className="mb-6">
                <Link
                  href={office.websiteUrl}
                  className="flex items-center gap-2 text-sm text-white hover:text-navy-blue transition-colors"
                >
                  <Icon icon="mdi:web" className="w-4 h-4 flex-shrink-0" />
                  <span>Visit website</span>
                </Link>
              </div>

              {/* Email */}
              <div className="mb-6">
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 text-sm text-white hover:text-navy-blue transition-colors"
                >
                  <Icon icon="mdi:email" className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">{office.email}</span>
                </a>
              </div>

              {/* View on Map Button */}
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-primary-orange hover:bg-navy-blue hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-semibold"
              >
                <Icon icon="mdi:map" className="w-5 h-5" />
                <span>View on map</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

