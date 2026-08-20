'use client'

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

export default function IndustriesAccordionList({ industries }: { industries: IndustryEntry[] }) {
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

  return <Accordion items={items} variant="default" />
}
