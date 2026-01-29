'use client'

import { useState, useRef } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import DecorativePattern from '@/components/DecorativePattern'

const timelineEvents = [
  {
    year: 2005,
    title: 'Launch in Tanzania',
    description: 'SGA Security extended operations to Tanzania, establishing a strong presence in Dar es Salaam and beginning our commitment to security excellence in Tanzania.',
  },
  {
    year: 2010,
    title: 'Dar es Salaam Operations',
    description: 'Established comprehensive security services across Dar es Salaam, serving businesses, institutions, and residential communities.',
  },
  {
    year: 2015,
    title: 'Technology Integration',
    description: 'Introduced advanced security technology and monitoring systems, setting new standards in Tanzania\'s security industry.',
  },
  {
    year: 2018,
    title: 'Market Expansion',
    description: 'Expanded operations beyond Dar es Salaam, extending our trusted security services to other major cities across Tanzania.',
  },
  {
    year: 2020,
    title: 'Industry Recognition',
    description: 'Recognized as one of Tanzania\'s leading security providers, serving clients across all sectors with excellence and innovation.',
  },
  {
    year: 2022,
    title: 'Community Engagement',
    description: 'Launched comprehensive ESG initiatives and community engagement programs across Tanzania, reinforcing our commitment to social responsibility.',
  },
  {
    year: 2025,
    title: 'Future Vision',
    description: 'Continuing to innovate and expand in Tanzania, setting new standards in security excellence and protecting what matters most to Tanzanians.',
  },
]

export default function OurJourney() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const firstCard = container.querySelector('.timeline-card')
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth
        const gap = 24
        const scrollPosition = index * (cardWidth + gap)
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
        setCurrentIndex(index)
      }
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    const maxIndex = Math.max(0, timelineEvents.length - 3)
    if (currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const firstCard = container.querySelector('.timeline-card')
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth
        const gap = 24
        const scrollLeft = container.scrollLeft
        const newIndex = Math.round(scrollLeft / (cardWidth + gap))
        setCurrentIndex(Math.min(newIndex, Math.max(0, timelineEvents.length - 3)))
      }
    }
  }

  return (
    <SectionWrapper id="our-journey" className="bg-light-grey py-16 sm:py-20 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary-orange tracking-wider">
                Our Journey
              </p>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-md md:text-xl font-normal text-navy-blue relative pb-3 mb-4">
                    <span>Over two decades of growth, innovation, and trusted security in Tanzania.</span>
                    <span 
                      className="absolute bottom-0 left-0 w-full"
                      style={{
                        background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                        height: '1px'
                      }}
                    ></span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                      currentIndex === 0
                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                        : 'border-navy-blue text-navy-blue hover:bg-primary-orange hover:border-primary-orange hover:text-white'
                    }`}
                  >
                    <Icon icon="mdi:chevron-left" className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex >= Math.max(0, timelineEvents.length - 3)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                      currentIndex >= Math.max(0, timelineEvents.length - 3)
                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                        : 'border-navy-blue text-navy-blue hover:bg-primary-orange hover:border-primary-orange hover:text-white'
                    }`}
                  >
                    <Icon icon="mdi:chevron-right" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            <div className="flex gap-6 md:gap-8 min-w-max">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="timeline-card flex-shrink-0 w-80 md:w-96"
                >
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-orange"></div>
                    
                    {/* Year circle */}
                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary-orange flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                        {event.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pl-24">
                      <h4 className="text-lg md:text-xl font-bold text-navy-blue mb-2">
                        {event.title}
                      </h4>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full z-0" style={{ pointerEvents: 'none' }}>
        <DecorativePattern 
          className="transition-none" 
          static={true}
          colors={['bg-[#00A3DD]', 'bg-[#000000]', 'bg-[#17B636]']}
        />
      </div>
    </SectionWrapper>
  )
}

