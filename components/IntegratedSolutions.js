'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import DecorativePattern from './DecorativePattern'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

const solutions = [
  {
    title: 'Alarm & Response',
    icon: 'icon-park-solid:alarm',
    description: '24/7 monitoring with rapid deployment to your home.',
  },
  {
    title: 'Residential Guarding',
    icon: 'ic:baseline-apartment',
    description: 'Professional guards for apartments and gated communities.',
  },
  {
    title: 'Personal Panic App',
    icon: 'ic:baseline-dangerous',
    description: 'One-tap SOS linked to our control room.',
  },
]

export default function IntegratedSolutions({ 
  title = "Tailored protection, designed for Uganda's households.",
  description = "Security solutions built to keep your family, home, and property safe every day.",
  decorativePatternColors = null,
  decorativePatternLineColor = null,
  whiteBackground = false,
  staticPattern = false
}) {
  const { openModal } = useEnquiryModal()
  const bgClass = whiteBackground ? 'bg-white' : 'bg-light-grey'
  const cardBgClass = whiteBackground ? 'bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl' : 'bg-light-grey border border-gray-200 shadow-md hover:shadow-xl'
  return (
    <section id="integrated-solutions" className={`section-snap flex items-center justify-center ${bgClass} relative pb-0`}>
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
              integrated solutions
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-blue relative pb-3 flex items-center justify-between">
              <span>{title}</span>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                  <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                  <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                </button>
              </div>
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h3>
            <p className="text-base md:text-lg text-dark-charcoal max-w-2xl">
            {description}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${cardBgClass} rounded-lg p-6 transition-all duration-300 flex flex-col`}
            >
              <div className="mb-4">
                <Icon 
                  icon={solution.icon} 
                  className="w-12 h-12 text-navy-blue mb-4" 
                />
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {solution.title}
                </h3>
                <p className="text-dark-charcoal text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-navy-blue text-white px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-primary-orange transition-colors"
                >
                  Learn More
                </motion.button>
                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white border-2 border-navy-blue text-navy-blue px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-navy-blue hover:text-white transition-colors"
                >
                  Request Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <DecorativePattern colors={decorativePatternColors} lineColor={decorativePatternLineColor} static={staticPattern} />
    </section>
  )
}

