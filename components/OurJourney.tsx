'use client'

import { useState, useRef } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface TimelineEvent {
  year: number
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1969,
    title: 'Foundation of Security',
    description: 'SGA Security was founded in Nairobi as Factory Guards Limited, laying the groundwork for professional security services in Kenya.',
  },
  {
    year: 1979,
    title: 'Regional Expansion',
    description: 'Within a decade, SGA expanded into Uganda and Tanzania, extending our trusted services across East Africa.',
  },
  {
    year: 2000,
    title: 'Diversification & Innovation',
    description: 'We transformed from a traditional guarding company into an integrated security provider, introducing advanced technologies and specialized services.',
  },
  {
    year: 1995,
    title: 'Uganda Operations',
    description: 'Extended our services to Uganda, strengthening our East African footprint.',
  },
  {
    year: 2005,
    title: 'Tanzania Expansion',
    description: 'Launched operations in Tanzania, completing our East African coverage.',
  },
  {
    year: 2010,
    title: 'Digital Innovation',
    description: 'Pioneered digital security solutions and remote monitoring capabilities.',
  },
  {
    year: 2015,
    title: 'Industry Leadership',
    description: 'Recognized as the leading security solutions provider in East Africa.',
  },
  {
    year: 2020,
    title: 'Sustainability Focus',
    description: 'Launched comprehensive ESG initiatives and community engagement programs.',
  },
  {
    year: 2025,
    title: 'Future Vision',
    description: 'Continuing to innovate and expand, setting new standards in security excellence.',
  },
]

export default function OurJourney(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const firstCard = container.querySelector('.timeline-card') as HTMLElement
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth
        const gap = 24 // gap-6 = 1.5rem = 24px
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
      const firstCard = container.querySelector('.timeline-card') as HTMLElement
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
    <SectionWrapper id="our-journey" className="bg-white py-16 sm:py-20">
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
            <p className="text-xs font-bold text-primary-orange uppercase tracking-wider">
              our journey
            </p>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-normal text-navy-blue relative pb-3 mb-4">
                  <span>More than five decades of growth, innovation, and trusted security across East Africa.</span>
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
          className="overflow-x-auto pb-4 scrollbar-hide"
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
    </SectionWrapper>
  )
}

