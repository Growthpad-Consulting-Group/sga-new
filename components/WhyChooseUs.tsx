'use client'

import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import DecorativePattern from './DecorativePattern'

interface AccordionItem {
  title: string
  description: string
}

interface WhyChooseUsProps {
  decorativePatternColors?: string[] | null
  decorativePatternLineColor?: string | null
  countryName?: string
  staticPattern?: boolean
}

const accordionItems: AccordionItem[] = [
  {
    title: 'Local + Regional',
    description: 'Combining local market knowledge with regional expertise to deliver comprehensive security solutions across East Africa.',
  },
  {
    title: '24/7 Control Room',
    description: 'Round-the-clock monitoring and rapid response capabilities from our state-of-the-art control room, ensuring immediate action when needed.',
  },
  {
    title: 'People + Tech',
    description: 'The perfect blend of highly trained security professionals and cutting-edge technology for maximum protection and efficiency.',
  },
  {
    title: 'Proven Track Record',
    description: 'Years of experience protecting businesses, communities, and critical infrastructure with a reputation for reliability and excellence.',
  },
]

export default function WhyChooseUs({ 
  decorativePatternColors = null, 
  decorativePatternLineColor = null, 
  countryName = 'Kenya', 
  staticPattern = false 
}: WhyChooseUsProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="why-choose-us" className="section-snap flex items-center justify-center bg-white pt-8 md:pt-12 relative pb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Left Content - Title + Accordion */}
          <div className="h-[400px] md:h-[450px] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2 mb-4"
            >
              <p className="text-xs font-semibold text-navy uppercase tracking-wider">
                why us
              </p>
              <div className="section-title-container">
                <h2 className="section-title text-xl md:text-2xl font-bold text-navy-blue">
                  Why choose SGA {countryName}
                </h2>
              </div>
            </motion.div>
            
            {/* Accordion */}
            <div className="space-y-2 flex-1 overflow-y-auto mb-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-sm md:text-base font-bold text-navy-blue">{item.title}</h3>
                    <Icon
                      icon={openIndex === index ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                      className="w-4 h-4 text-navy-blue flex-shrink-0"
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="p-3 pt-0 text-xs md:text-sm text-dark-charcoal leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-blue text-white px-6 py-3 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange transition-colors w-1/2"
            >
              Talk to our team
            </motion.button>
          </div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] md:h-[450px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt={`Why Choose SGA ${countryName}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
      {decorativePatternColors && (
        <DecorativePattern static={staticPattern} />
      )}
    </section>
  )
}

