'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useInfiniteCarousel, CarouselArrows } from '@/components/ui/Carousel'

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

const groupTimelineEvents: TimelineEvent[] = [
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

interface OurJourneyProps {
  events?: TimelineEvent[]
}

export default function OurJourney({ events = groupTimelineEvents }: OurJourneyProps): React.JSX.Element {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const infiniteCarousel = useInfiniteCarousel(events.length, itemsToShow, 5000)
  const loopedEvents = [
    ...events,
    ...events.slice(0, Math.min(itemsToShow, events.length)),
  ]

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
      infiniteCarousel.next()
    } else if (isRightSwipe) {
      infiniteCarousel.previous()
    }
  }

  // Wheel handler for trackpad/mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    // Prevent default scrolling behavior
    e.preventDefault()

    // Check if it's a horizontal scroll (trackpad swipe)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 30) {
        infiniteCarousel.next()
      } else if (e.deltaX < -30) {
        infiniteCarousel.previous()
      }
    }
    // Also handle vertical scroll for mouse wheel
    else if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        infiniteCarousel.next()
      } else {
        infiniteCarousel.previous()
      }
    }
  }

  return (
    <div id="our-journey" className="bg-light-grey py-30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
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
              <p className="text-sm xl:text-base text-gray-700">
                More than five decades of growth, innovation, and trusted security across East Africa.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <CarouselArrows
                onPrev={infiniteCarousel.previous}
                onNext={infiniteCarousel.next}
                canGoPrev={infiniteCarousel.canMove}
                canGoNext={infiniteCarousel.canMove}
              />
            </div>
          </motion.div>
        </div>

        {/* Horizontal Timeline */}
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={handleWheel}
        >
          <div className="absolute top-[15px] left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

          <div
            className="relative z-10 flex w-full"
            style={infiniteCarousel.trackStyle}
            onTransitionEnd={infiniteCarousel.handleTransitionEnd}
          >
            {loopedEvents.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                className="relative shrink-0 px-2 md:px-4"
                style={{ width: `${100 / itemsToShow}%` }}
                aria-hidden={index >= events.length || undefined}
              >
                <div className="absolute top-0 left-2 md:left-4 w-8 h-8 bg-primary-orange rounded-full z-20"></div>

                <div className="ml-0 mt-16">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                    {event.year}
                  </h3>

                  <h4 className="text-lg md:text-3xl lg:text-2xl xl:text-2xl font-semibold text-dark-charcoal mb-3">
                    {event.title}
                  </h4>

                  <p className="text-sm md:text-xl lg:text-sm xl:text-base text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

