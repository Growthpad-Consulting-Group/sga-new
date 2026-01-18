'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import DecorativePattern from './DecorativePattern'

interface ESGCard {
  title: string
  description: string
  imageUrl: string
}

const esgCards: ESGCard[] = [
  {
    title: 'Environment',
    description: 'We are committed to reducing our environmental footprint through sustainable practices, energy efficiency, and responsible resource management across all our operations.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
  },
  {
    title: 'Social',
    description: 'We prioritize the well-being of our employees, communities, and stakeholders through fair labor practices, community engagement, and social responsibility initiatives.',
    imageUrl: '/images/sustainability/social.png',
  },
  {
    title: 'Governance',
    description: 'We maintain the highest standards of ethical conduct, transparency, and accountability, ensuring compliance with ICoCA and ISO 18788:2015 standards.',
    imageUrl: '/images/sustainability/governance.png',
  },
]

export default function SustainabilityIntro(): React.JSX.Element {
  return (
    <section id="sustainability-intro" className="section-snap flex items-center justify-center bg-gray-100 text-dark-charcoal py-16 sm:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="section-title-container">
            <h2 className="section-title text-xl md:text-2xl lg:text-3xl font-bold text-primary-orange mb-6">
              Our ESG Implementation Journey
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl">
            We are integrating Environmental, Social and Governance principles into our operations, aligning with ICoCA and ISO 18788:2015 to uphold human rights and ethical business conduct.
          </p>
        </motion.div>

        {/* ESG Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {esgCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy-blue/60 group-hover:bg-primary-orange transition-colors duration-300"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed hidden group-hover:block">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <DecorativePattern className="transition-none" static={true} />
      </div>
    </section>
  )
}

