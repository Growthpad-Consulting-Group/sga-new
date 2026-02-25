'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useCarousel, CarouselArrows } from './Carousel'

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1969',
    title: 'Factory Guards',
    description: 'We started off as Factory Guards in 1969 and since then we have been leaders in security. Bringing innovation and expertise to the industry.',
  },
  {
    year: '1979',
    title: 'Group 4 Security',
    description: 'In 1979 we expanded our services and grew from Factory Guards to Group 4 Security.',
  },
  {
    year: '1984',
    title: 'Tanzania Expansion',
    description: 'Our security journey in Tanzania began in 1984. We are proud to celebrate 40 years of safeguarding Tanzanians.',
  },
  {
    year: '1994',
    title: 'Uganda Operations',
    description: 'Uganda called for our security services and we answered in 1994. Since then we have had a remarkable journey as we turn 30 in the country.',
  },
  {
    year: '2000',
    title: 'Security Group',
    description: 'Year 2000 was another season of growth for us. We expanded from Group 4 Security to Security Group.',
  },
  {
    year: '2002',
    title: 'Safari Rally Sponsorship',
    description: 'We sponsored the 50th Safari Rally in 2002. Proving that we can rev up our engines in security and on the racetrack too.',
  },
  {
    year: '2009',
    title: 'SGA Security Group',
    description: 'We continued improving our services, technology and expertise and in 2009 we expanded again from Security Group to SGA Security Group.',
  },
  {
    year: 'Today',
    title: 'ICOCA Certification',
    description: 'Today we have upgraded our security and made our operations even more efficient and we have been rewarded with ICOCA membership and certification.',
  },
]

export default function OurJourney(): React.JSX.Element {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Use carousel hook for pagination (show itemsToShow items at a time)
  const carousel = useCarousel(timelineEvents.length, itemsToShow)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

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
      carousel.nextPage()
    } else if (isRightSwipe) {
      carousel.prevPage()
    }
  }

  // Wheel handler for trackpad/mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    // Prevent default scrolling behavior
    e.preventDefault()

    // Check if it's a horizontal scroll (trackpad swipe)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 30) {
        carousel.nextPage()
      } else if (e.deltaX < -30) {
        carousel.prevPage()
      }
    }
    // Also handle vertical scroll for mouse wheel
    else if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        carousel.nextPage()
      } else {
        carousel.prevPage()
      }
    }
  }

  return (
    <div id="our-journey" className="bg-light-grey py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-14">
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
              <p className="text-base md:text-xl text-gray-700">
                More than five decades of growth, innovation, and trusted security across East Africa.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <CarouselArrows
                onPrev={carousel.prevPage}
                onNext={carousel.nextPage}
                canGoPrev={carousel.canGoPrev}
                canGoNext={carousel.canGoNext}
              />
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
            key={carousel.currentPage}
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
              {carousel.currentItems(timelineEvents).map((event, index) => (
                <motion.div
                  key={`${carousel.currentPage}-${index}`}
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
    </div>
  )
}

