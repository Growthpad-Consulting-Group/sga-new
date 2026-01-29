'use client'

import { useState, useRef } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const timelineEvents = [
  {
    year: '1995',
    title: 'Launch in Uganda',
    description: 'SGA Security extended operations to Uganda, establishing a strong presence in Kampala and beginning our commitment to security excellence in Uganda.',
  },
  {
    year: '2000',
    title: 'Kampala Operations',
    description: 'Established comprehensive security services across Kampala, serving businesses, institutions, and residential communities.',
  },
  {
    year: '2005',
    title: 'Technology Integration',
    description: 'Introduced advanced security technology and monitoring systems, setting new standards in Uganda\'s security industry.',
  },
  {
    year: '2010',
    title: '24/7 Control Room',
    description: 'Established state-of-the-art 24/7 control room in Kampala, providing round-the-clock monitoring and rapid response across Uganda.',
  },
  {
    year: '2015',
    title: 'Market Leadership',
    description: 'Became one of Uganda\'s leading security providers, recognized for excellence and innovation in security solutions.',
  },
  {
    year: '2020',
    title: 'Community Engagement',
    description: 'Launched comprehensive ESG initiatives and community engagement programs across Uganda, reinforcing our commitment to social responsibility.',
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Continuing to innovate and expand in Uganda, setting new standards in security excellence and protecting what matters most to Ugandans.',
  },
]

export default function OurJourney(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(timelineEvents.length / itemsPerSlide)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const handlePrevious = () => {
    setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1)
  }

  const handleNext = () => {
    setCurrentSlide(prev => prev === totalSlides - 1 ? 0 : prev + 1)
  }

  const getCurrentEvents = () => {
    const startIndex = currentSlide * itemsPerSlide
    return timelineEvents.slice(startIndex, startIndex + itemsPerSlide)
  }

  // Touch handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrevious()
    }
  }

  // Wheel handler for trackpad/mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    // Check if it's a horizontal scroll (trackpad swipe)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 30) {
        handleNext()
      } else if (e.deltaX < -30) {
        handlePrevious()
      }
    }
    // Also handle vertical scroll for mouse wheel
    else if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        handleNext()
      } else {
        handlePrevious()
      }
    }
  }

  return (
    <SectionWrapper id="our-journey" className="bg-light-grey py-24 sm:py-24 md:py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start justify-between gap-4"
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                Our Journey
              </h2>
              <p className="text-lg md:text-2xl text-gray-700">
                More than five decades of growth, innovation, and trusted security across East Africa.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon icon="mdi:chevron-left" className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon icon="mdi:chevron-right" className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Timeline */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={handleWheel}
        >
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

            {/* Timeline Events */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {getCurrentEvents().map((event, index) => (
                <motion.div
                  key={`${currentSlide}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot - Aligned with year */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-primary-orange rounded-full z-20"></div>

                  {/* Year */}
                  <div className="ml-0 mt-16">
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-orange mb-4">
                      {event.year}
                    </h3>

                    {/* Title */}
                    <h4 className="text-lg md:text-3xl font-semibold text-dark-charcoal mb-3">
                      {event.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm md:text-xl text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
