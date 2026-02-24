'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Link from 'next/link'

import { contactOffices } from '@/data/contact-data'

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
              {providedCountry ? `${providedCountry} Contact` : 'Contact Information'}
            </h2>
            <div className="section-title-bar"></div>
          </div>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-4xl">
            {providedCountry
              ? `Direct lines and offices for SGA Security ${providedCountry}.`
              : 'Direct lines and offices for each country. You can also visit the country website for more local information.'}
          </p>
        </motion.div>

        {/* Contact Content Area */}
        <div className={`mt-8 ${providedCountry ? 'grid lg:grid-cols-3 gap-8 items-stretch' : 'grid md:grid-cols-3 gap-6 md:gap-8'}`}>
          {/* Contact Cards */}
          <div className={providedCountry ? 'lg:col-span-1 space-y-6' : 'contents'}>
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
                        href={`tel:${phone.number.replace(/\s|\//g, '')}`}
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

          {/* Map Section (Only if country is provided) */}
          {providedCountry && filteredOffices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-orange/20"
            >
              <iframe
                src={filteredOffices[0].mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

