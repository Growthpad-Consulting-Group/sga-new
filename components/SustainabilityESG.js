'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import DecorativePattern from './DecorativePattern'

const sdgGoals = [
  {
    goal: 3,
    title: 'Good Health & Well‑Being',
    description: 'Ensuring healthy lives and promoting well-being for all at all ages.',
    bgColor: '#4C9F38',
    iconUrl: '/images/group/sdg/sdg-3.svg',
  },
  {
    goal: 4,
    title: 'Quality Education',
    description: 'Supporting inclusive and equitable education while promoting lifelong learning opportunities.',
    bgColor: '#C5192D',
    iconUrl: '/images/group/sdg/sdg-4.svg',
  },
  {
    goal: 5,
    title: 'Gender equality',
    description: 'Advancing equality by empowering women and ensuring equal opportunities for all.',
    bgColor: '#FF3A21',
    iconUrl: '/images/group/sdg/sdg-5.svg',
  },
  {
    goal: 8,
    title: 'Decent Work & Economic Growth',
    description: 'Advancing equality by empowering women and ensuring equal opportunities for all.',
    bgColor: '#A21942',
    iconUrl: '/images/group/sdg/sdg-8.svg',
  },
  {
    goal: 9,
    title: 'Industry, Innovation & Infrastructure',
    description: 'Building resilient systems through innovation, sustainable solutions, and infrastructure support.',
    bgColor: '#FD6925',
    iconUrl: '/images/group/sdg/sdg-9.svg',
  },
  {
    goal: 12,
    title: 'Responsible Consumption & Production',
    description: 'Supporting inclusive and equitable education while promoting lifelong learning opportunities.',
    bgColor: '#BF8B2E',
    iconUrl: '/images/group/sdg/sdg-12.svg',
  },
  {
    goal: 16,
    title: 'Peace, Justice & Strong Institutions',
    description: 'Upholding integrity, accountability, and fostering safe, inclusive communities.',
    bgColor: '#00689D',
    iconUrl: '/images/group/sdg/sdg-16.svg',
  },
]

export default function SustainabilityESG() {
  return (
    <section id="sustainability-esg" className="section-snap flex items-center justify-center bg-light-grey relative py-12 md:py-16">
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
              Sustainability & ESG
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-primary-orange relative pb-3">
              <span>Sustainable Development Goals</span>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h3>
            <p className="text-base md:text-lg text-dark-charcoal leading-relaxed">SGA aligns its environmental, social and governance initiatives with the UN SDGs. Here are the goals we actively support.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sdgGoals.map((sdg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[280px]"
              style={{ backgroundColor: sdg.bgColor }}
            >
              <div className="p-5 md:p-6 h-full flex flex-col text-white">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl md:text-5xl font-bold leading-none">
                    {sdg.goal}
                  </span>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                    <Image
                      src={sdg.iconUrl}
                      alt={`SDG Goal ${sdg.goal}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h4 className="text-base md:text-lg font-bold mb-2 leading-tight">
                  {sdg.title}
                </h4>
                <p className="text-xs md:text-sm leading-relaxed flex-1">
                  {sdg.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Learn More Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-navy-blue bg-transparent min-h-[280px]"
          >
            <div className="p-5 md:p-6 h-full flex flex-col items-center justify-center text-center">
              <h4 className="text-base md:text-lg font-bold text-navy-blue mb-4 leading-tight">
                Learn More About Our Sustainability Impact
              </h4>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-xs md:text-sm uppercase hover:bg-navy-blue transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                Learn More
                <Icon 
                  icon="mdi:arrow-right" 
                  className="w-4 h-4"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <DecorativePattern className="transition-none" static={true} />
    </section>
  )
}

