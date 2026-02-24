'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import SectionSeparator from '@/components/SectionSeparator'

export interface Industry {
  id: string
  name: string
  icon: string
  image: string
  description: string
  features: string[]
  link?: string
}

interface IndustriesDetailProps {
  countryCode?: 'ke' | 'ug' | 'tz' | string
  countryName?: string
  industries: Industry[]
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

export default function IndustriesDetail({
  countryCode = 'ke',
  countryName,
  industries,
  title = 'Security Solutions for Every Industry',
  subtitle = 'Industries We Serve',
  description,
  ctaText = 'Contact Us for Custom Solutions',
  ctaLink = '/contact',
}: IndustriesDetailProps) {
  const countryNames: Record<string, string> = {
    ke: 'Kenya',
    ug: 'Uganda',
    tz: 'Tanzania',
  }
  const displayCountryName = countryName || countryNames[countryCode] || 'Kenya'
  const defaultDescription = `From residential estates to financial institutions, SGA Security ${displayCountryName} provides tailored security solutions designed to meet the unique needs of each industry we serve.`

  return (
    <section id="industries-detail" className="section-snap flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              {subtitle}
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
              <span>{title}</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl">
              {description || defaultDescription}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 scroll-mt-20"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-primary-orange rounded-full p-3">
                    <Icon icon={industry.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {industry.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-navy-blue mb-2">Key Services:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon icon="mdi:check-circle" className="w-4 h-4 text-primary-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Don't see your industry listed? We customize our security solutions to meet your specific needs.
          </p>
          <motion.a
            href={ctaLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-navy-blue text-white px-8 py-3 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange transition-colors"
          >
            {ctaText}
          </motion.a>
        </motion.div>
      </motion.div>
      <SectionSeparator />
    </section>
  )
}
