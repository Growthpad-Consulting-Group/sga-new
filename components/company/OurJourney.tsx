'use client'

import { useState, useRef, useEffect } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import { motion } from 'framer-motion'
import { useCarousel, CarouselArrows } from '@/components/Carousel'
import { timelineEvents } from '@/data/journey-data'

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

    // Use carousel hook for pagination
    const carousel = useCarousel(timelineEvents.length, itemsToShow)

    const minSwipeDistance = 50

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
        if (distance > minSwipeDistance) carousel.nextPage()
        else if (distance < -minSwipeDistance) carousel.prevPage()
    }

    const handleWheel = (e: React.WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            if (e.deltaX > 30) carousel.nextPage()
            else if (e.deltaX < -30) carousel.prevPage()
        } else if (Math.abs(e.deltaY) > 30) {
            if (e.deltaY > 0) carousel.nextPage()
            else carousel.prevPage()
        }
    }

    return (
        <SectionWrapper id="our-journey" className="bg-light-grey py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full mx-auto  relative z-10"
            >
                <div className="mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-start justify-between gap-4"
                    >
                        <div className="flex-1">
                            <div className="section-title-container">
                                <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-4">
                                    Our Journey
                                </h2>
                                <div className="section-title-bar"></div>
                            </div>
                            <p className="text-lg md:text-2xl text-gray-700 mt-4">
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
                        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                            {carousel.currentItems(timelineEvents).map((event, index) => (
                                <motion.div
                                    key={`${carousel.currentPage}-${index}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute top-0 left-0 w-8 h-8 bg-primary-orange rounded-full z-20"></div>
                                    <div className="ml-0 mt-16">
                                        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-orange mb-4">
                                            {event.year}
                                        </h3>
                                        <h4 className="text-lg md:text-3xl font-semibold text-dark-charcoal mb-3">
                                            {event.title}
                                        </h4>
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
