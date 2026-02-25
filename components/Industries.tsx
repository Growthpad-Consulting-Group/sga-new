'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
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
}

export default function Industries({
  backgroundColor = 'bg-white',
  industries,
  countryName = 'Kenya',
  ctaLink = '#industries',
}: IndustriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 4)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? Math.max(0, industries.length - itemsToShow) : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= industries.length - itemsToShow ? 0 : prev + 1))
  }

  return (
    <section id="industries" className={`section-snap flex items-center justify-center ${backgroundColor} relative pb-0 overflow-x-hidden min-h-[100vh]`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col justify-center items-start text-left"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              industries
            </p>
            <div className="section-title-container w-full flex items-end justify-between">
              <h3 className="section-title text-xl md:text-3xl lg:text-5xl text-primary-orange">
                Industries We Serve
              </h3>
              <div className="section-title-bar"></div>
              <div className="flex items-center gap-3 mb-1 relative z-20">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                >
                  <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                >
                  <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
                </button>
              </div>
            </div>
            <p className="text-base font-normal md:text-2xl text-dark-charcoal pb-4 mt-4">
              SGA Tanzania provides tailored security for homes, businesses, real estate, and institutions nationwide.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {industries.slice(currentIndex, currentIndex + itemsToShow).map((industry, index) => (
            <motion.div
              key={currentIndex + index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Circle with Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                {industry.image && (
                  <div className="relative w-full h-full">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Text Below */}
              <h4 className="text-center text-base md:text-2xl font-bold text-dark-charcoal">
                {industry.name}
              </h4>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.a
            href={ctaLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-10 py-5 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange/90 transition-colors"
          >
            Find Your Industry Solution
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

