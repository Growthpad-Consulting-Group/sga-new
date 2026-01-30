'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Link from 'next/link'

interface Phone {
  label: string
  number: string
  icon: string
}

interface ContactOffice {
  country: string
  city: string
  address: string[]
  phones: Phone[]
  email: string
  whatsapp: string
  flag: string
  mapUrl: string
  websiteUrl: string
}

const contactOffices: ContactOffice[] = [
  {
    country: 'Kenya',
    city: 'SGA Security Kenya (Head Office)',
    address: [
      'Tulip House, Ground Floor',
      'Mombasa RD.',
    ],
    phones: [
      { label: 'Main', number: '+254 (0) 20 2604356-61', icon: 'mdi:phone' },
    ],
    email: 'info@ke.sgasecurity.com',
    whatsapp: '+254 111 024000',
    flag: 'emojione:flag-for-kenya',
    mapUrl: 'https://maps.google.com/?q=Tulip+House+Mombasa+Road+Nairobi+Kenya',
    websiteUrl: '/ke'
  },
  {
    country: 'Tanzania',
    city: 'SGA Security Tanzania',
    address: [
      'Warioba/Serengeti Street',
      'Mikocheni Kinondoni, Dar Es Salaam, Tanzania'
    ],
    phones: [
      { label: 'Main', number: '+255 (0) 784 555470-71', icon: 'mdi:phone' },
    ],
    email: 'info@tz.sgasecurity.com',
    whatsapp: '+255 754 303076',
    flag: 'emojione:flag-for-tanzania',
    mapUrl: 'https://maps.google.com/?q=Plot+74+Warioba+Serengeti+Street+Mikocheni+Dar+es+Salaam+Tanzania',
    websiteUrl: '/tz'
  },
  {
    country: 'Uganda',
    city: 'SGA Security Uganda',
    address: [
      'Plot 5 Mvule Close',
      'Naguru Hill, Kampala, Uganda'
    ],
    phones: [
      { label: 'Main', number: '+256-717-800752', icon: 'mdi:phone' },
    ],
    email: 'info@ug.sgasecurity.com',
    whatsapp: '+256 772 200 048',
    flag: 'emojione:flag-for-uganda',
    mapUrl: 'https://maps.google.com/?q=Plot+5+Mvule+Close+Naguru+Hill+Kampala+Uganda',
    websiteUrl: '/ug'
  },
]

interface ContactInfoProps {
  providedCountry?: string
}

export default function ContactInfo({ providedCountry }: ContactInfoProps): React.JSX.Element {
  const filteredOffices = providedCountry
    ? contactOffices.filter(office => office.country.toLowerCase() === providedCountry.toLowerCase())
    : contactOffices

  return (
    <section id="contact-info" className="section-snap flex items-center justify-center bg-white text-dark-charcoal py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="section-title-container">
            <h2 className="section-title text-xl md:text-5xl font-bold text-primary-orange">
              {providedCountry ? `${providedCountry} Contacts` : 'Country Contacts'}
            </h2>
            <div className="section-title-bar"></div>
          </div>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-4xl pt-6">
            {providedCountry
              ? `Direct lines and offices for SGA Security ${providedCountry}.`
              : 'Direct lines and offices for each country. You can also visit the country website for more local information.'}
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className={`grid gap-6 md:gap-8 mt-12 ${providedCountry ? 'md:grid-cols-1 max-w-2xl' : 'md:grid-cols-3'}`}>
          {filteredOffices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-primary-orange rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Icon icon={office.flag} className="w-10 h-10 border-4 border-white rounded-full flex-shrink-0 shadow-sm" />
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-white">
                      {office.country}
                    </h3>
                    <p className="text-sm md:text-xl font-normal text-white/90">{office.city}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <Icon icon="mdi:map-marker" className="w-8 h-8 text-white flex-shrink-0 mt-0.5" />
                    <div className="text-sm md:text-lg font-normal text-white leading-relaxed">
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
                      className="flex items-center gap-2 text-sm md:text-lg font-normal text-white hover:opacity-80 transition-opacity"
                    >
                      <Icon icon={phone.icon} className="w-8 h-8 flex-shrink-0" />
                      <span>{phone.number}</span>
                    </a>
                  ))}
                </div>

                {/* Email */}
                <div className="mb-6">
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 text-sm md:text-lg font-normal text-white hover:opacity-80 transition-opacity"
                  >
                    <Icon icon="mdi:email" className="w-8 h-8 flex-shrink-0" />
                    <span className="break-all">{office.email}</span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="mb-6">
                  <a
                    href={`https://wa.me/${office.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hello SGA Security, I would like to make an inquiry.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm md:text-lg font-normal text-white hover:opacity-80 transition-opacity"
                  >
                    <Icon icon="ri:whatsapp-fill" className="w-8 h-8 flex-shrink-0" />
                    <span>Talk to us</span>
                  </a>
                </div>

                {/* Visit Website */}
                <div className="mb-6">
                  <Link
                    href={office.websiteUrl}
                    className="flex items-center gap-2 text-sm md:text-lg font-normal text-white hover:opacity-80 transition-opacity"
                  >
                    <Icon icon="mdi:link-circle" className="w-8 h-8 flex-shrink-0" />
                    <span>Visit website</span>
                  </Link>
                </div>
              </div>

              {/* View on Map Button */}
              <div className="mt-auto pt-6">
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-primary-orange hover:bg-dark-charcoal hover:text-white px-10 py-3 rounded-full transition-colors text-sm md:text-md font-semibold uppercase w-fit"
                >
                  <span>VIEW ON MAP</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

