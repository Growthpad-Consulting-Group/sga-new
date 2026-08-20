'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Accordion from '@/components/Accordion'

interface IndustryEntry {
  slug: string
  industryName: string
  industryIcon: string
  image: string
  description: string
  services: { title: string; description: string }[]
}

export default function IndustriesAccordion({ industries }: { industries: IndustryEntry[] }) {
  const items = industries.map((industry) => ({
    id: industry.slug,
    title: (
      <div className="flex items-center gap-4 pr-4">
        <div className="w-11 h-11 rounded-full bg-primary-orange/10 flex items-center justify-center shrink-0">
          <Icon icon={industry.industryIcon} className="w-6 h-6 text-primary-orange" />
        </div>
        <h4 className="text-lg font-semibold text-dark-charcoal">{industry.industryName}</h4>
      </div>
    ),
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-56 md:h-full min-h-[220px] rounded-xl overflow-hidden bg-gray-300">
          <Image
            src={industry.image}
            alt={industry.industryName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-6">{industry.description}</p>
          <p className="text-sm font-semibold text-dark-charcoal uppercase tracking-wide mb-3">
            Services in this sector
          </p>
          <ul className="space-y-3">
            {industry.services.map((service, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-dark-charcoal">{service.title}</span>
                  <span className="text-gray-600"> — {service.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }))

  return (
    <section id="industries-list" className="flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
      <div className="w-full mx-auto container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider mb-2">
              Industries We Serve
            </p>
            <div className="section-title-container w-full">
              <h2 className="section-title text-xl md:text-5xl font-bold text-primary-orange">
                Security Solutions for Every Industry
              </h2>
              <div className="section-title-bar"></div>
            </div>
          </div>

          <Accordion items={items} variant="default" />
        </motion.div>
      </div>
    </section>
  )
}
