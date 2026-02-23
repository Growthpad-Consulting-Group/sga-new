'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'

interface ESGCard {
  title: string
  description: string
  imageUrl: string
}

const esgCards: ESGCard[] = [
  {
    title: 'Environment',
    description: 'We are committed to reducing our environmental footprint through sustainable practices, energy efficiency, and responsible resource management across all our operations.',
    imageUrl: '/images/misc/blog-placeholder',
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
    <section id="sustainability-intro" className="flex items-center justify-center bg-gray-100 text-dark-charcoal section-snap py-20 min-h-[85vh] relative">
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
          className="mb-12 space-y-3"
        >
          <div className="section-title-container">
            <h2 className="section-title text-xl md:text-4xl font-bold text-primary-orange">
              Our ESG Implementation Journey
            </h2>
          </div>
          <p className="text-base md:text-2xl text-gray-700 leading-relaxed max-w-7xl pt-4">
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
              className="relative h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-primary-orange transition-colors duration-300"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-10 text-left z-10">
                <h3 className="text-2xl md:text-4xl font-medium text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed hidden group-hover:block mb-4">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

