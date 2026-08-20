'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'

interface IndustryEntry {
  slug: string
  industryName: string
  industryIcon: string
  image: string
  description: string
  services: { title: string; description: string }[]
}

export default function IndustriesGrid({ industries }: { industries: IndustryEntry[] }) {
  return (
    <section id="industries-grid" className="flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
      <div className="w-full mx-auto container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold text-primary-orange uppercase tracking-wider">
              Industries We Serve
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
              <span>Security Solutions for Every Industry</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px',
                }}
              ></span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl">
              From banking halls to manufacturing floors, SGA Security provides tailored security solutions designed to meet the unique needs of each industry we serve across Kenya, Uganda, and Tanzania.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              id={industry.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 scroll-mt-28"
            >
              <div className="relative h-48 md:h-56 bg-gray-300">
                <Image
                  src={industry.image}
                  alt={industry.industryName}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-primary-orange rounded-full p-3">
                    <Icon icon={industry.industryIcon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {industry.industryName}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-dark-charcoal mb-2">What we typically secure:</p>
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Icon icon="mdi:check-circle" className="w-4 h-4 text-primary-orange shrink-0 mt-0.5" />
                        <span>
                          <span className="font-semibold text-dark-charcoal">{service.title}</span>
                          {' — '}
                          {service.description}
                        </span>
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
          <a
            href="/contact"
            className="inline-block bg-primary-orange text-white px-8 py-3 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact Us for Custom Solutions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
