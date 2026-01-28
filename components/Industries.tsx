'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import DecorativePattern from './DecorativePattern'

interface Industry {
  name: string
  icon: string
  image: string
}

interface IndustriesProps {
  backgroundColor?: string
}

const industries: Industry[] = [
  {
    name: 'Residential Estates & Apartments',
    icon: 'mdi:home',
    image: '/images/ug/residentials.png',
  },
  {
    name: 'Education & Schools',
    icon: 'mdi:school',
    image: '/images/ug/education.png',
  },
  {
    name: 'Healthcare Facilities',
    icon: 'mdi:hospital',
    image: '/images/ug/healthcare.png',
  },
  {
    name: 'Hospitality & Holiday Homes',
    icon: 'mdi:hotel',
    image: '/images/ug/hospitality.png',
  },
]

export default function Industries({
  backgroundColor = 'bg-white',
}: IndustriesProps) {
  return (
    <section id="industries" className={`section-snap flex items-center justify-center ${backgroundColor} relative pb-0 overflow-x-hidden min-h-[85vh]`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col justify-center items-start text-left"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              industries
            </p>
            <div className="section-title-container w-full">
              <h3 className="section-title text-xl md:text-4xl font-bold text-primary-orange flex items-center justify-between">
                <span>Built for your industry</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                    <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 rounded-full border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                    <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                  </button>
                </div>
              </h3>
            </div>
            <p className="text-base font-normal md:text-2xl text-dark-charcoal pb-4 mt-4">
              From banks to gated estates, we tailor protection to your world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-navy-blue flex flex-col items-center justify-center shadow-lg hover:bg-primary-orange hover:border-primary-orange transition-all mb-4 group relative overflow-hidden">
                {industry.image && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-20 transition-opacity"
                    />
                  </div>
                )}
                <Icon
                  icon={industry.icon}
                  className="w-8 h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity mb-2 relative z-10"
                />
                <span className="text-navy-blue group-hover:text-white text-center text-xs md:text-sm font-semibold px-4 transition-colors relative z-10">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-navy-blue text-white px-8 py-3 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange transition-colors"
          >
            See solutions for your industry
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

