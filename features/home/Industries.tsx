'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import CircleCard from '@/components/ui/CircleCard'
import { useCarousel, CarouselArrows } from '@/components/ui/Carousel'
export interface IndustryCarouselItem {
  name: string
  icon: string
  image: string
}

interface IndustriesProps {
  backgroundColor?: string
  industries: IndustryCarouselItem[]
  countryName?: string
  ctaLink?: string
  subtext?: string
}

export default function Industries({
  backgroundColor = 'bg-white',
  industries,
  countryName = 'Kenya',
  ctaLink = '#industries',
  subtext,
}: IndustriesProps) {
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const carousel = useCarousel(industries.length, itemsPerPage, true)

  return (
    <section id="industries" className={`flex items-center justify-center ${backgroundColor} relative min-h-[85vh] py-12 md:py-16 overflow-x-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between section-title-container w-full pb-1!">
              <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
                Industries We Serve
              </h3>
              <CarouselArrows
                onPrev={carousel.prevPage}
                onNext={carousel.nextPage}
                canGoPrev={carousel.canGoPrev}
                canGoNext={carousel.canGoNext}
                className="mb-1"
              />
            </div>
            <p className="text-sm md:text-base text-dark-charcoal pt-3">
              {subtext ?? `Beyond homes, we provide tailored solutions for businesses, institutions, and real estate developments across ${countryName}.`}
            </p>
          </motion.div>
        </div>

        <motion.div
          key={`${carousel.currentPage}-${itemsPerPage}`}
          initial={{ opacity: 0.35, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {carousel.currentItems(industries).map((industry) => (
            <CircleCard key={industry.name} title={industry.name} imageUrl={industry.image} />
          ))}
        </motion.div>

        {carousel.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: carousel.totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => carousel.goToPage(index + 1)}
                className={`rounded-full transition-all duration-300 ${carousel.currentPage === index + 1
                    ? 'bg-primary-orange w-8 h-2'
                    : 'bg-dark-charcoal/30 w-2 h-2'
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button href={ctaLink} variant="solid" size="small">
              Find Your Industry Solution
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

