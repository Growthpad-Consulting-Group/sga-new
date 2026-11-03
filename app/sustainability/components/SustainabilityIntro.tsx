'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/SectionWrapper'

interface ESGCard {
  title: string
  description: string
  imageUrl: string
}

const esgCards: ESGCard[] = [
  {
    title: 'Environment',
    description: 'We are committed to reducing our environmental footprint through sustainable practices, energy efficiency, and responsible resource management across all our operations.',
    imageUrl: '/images/sustainability/group/environment.jpg',
  },
  {
    title: 'Social',
    description: 'We prioritize the well-being of our employees, communities, and stakeholders through fair labor practices, community engagement, and social responsibility initiatives.',
    imageUrl: '/images/sustainability/group/social.jpg',
  },
  {
    title: 'Governance',
    description: 'We maintain the highest standards of ethical conduct, transparency, and accountability, ensuring compliance with ICoCA and ISO 18788:2015 standards.',
    imageUrl: '/images/sustainability/group/governance-spa-0032.jpg',
  },
]

export default function SustainabilityIntro(): React.JSX.Element {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="sustainability-intro" className="flex items-center justify-center bg-gray-100 text-dark-charcoal  py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-3"
        >
          <div className="section-title-container">
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
              Our ESG Implementation Journey
            </h2>
          </div>
          <p className="text-sm xl:text-base text-gray-700 leading-relaxed pt-4">
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
              onPointerEnter={(e) => { if (e.pointerType === 'mouse') setExpandedCard(index) }}
              onPointerLeave={(e) => { if (e.pointerType === 'mouse') setExpandedCard(null) }}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="relative h-[350px] md:h-[480px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-[translate,box-shadow] duration-300 group"
            >
              {/* Background Image */}
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-10 text-left z-10">
                <h3 className="text-xl md:text-3xl font-medium text-white mb-4">
                  {card.title}
                </h3>
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        height: { duration: 0.25, ease: 'easeOut' },
                        opacity: { duration: 0.2, ease: 'easeOut' },
                      }}
                      className="text-white text-sm md:text-sm leading-relaxed mb-4 overflow-hidden"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

