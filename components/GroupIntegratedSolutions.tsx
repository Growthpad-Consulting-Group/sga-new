'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Carousel, { useCarousel, CarouselArrows } from './Carousel'
import { useState, useEffect } from 'react'

interface Solution {
  title: string
  description: string
  imageUrl: string
}

interface GroupIntegratedSolutionsProps {
  title?: string
  description?: string
}

const defaultSolutions: Solution[] = [
  {
    title: 'Home Security',
    description: 'Comprehensive security solutions for residential properties with 24/7 monitoring and rapid response.',
    imageUrl: '/images/group/guarding.png',
  },
  {
    title: 'Courier',
    description: 'Secure courier services for sensitive documents and valuable items with tracked delivery.',
    imageUrl: '/images/group/CCTV.png',
  },
  {
    title: 'Guarding',
    description: 'Professional guarding for offices, malls, logistics yards and estates.',
    imageUrl: '/images/group/guarding.png',
  },
  {
    title: 'Alarm Response',
    description: 'Rapid alarm response teams ready to respond to security alerts 24/7.',
    imageUrl: '/images/group/CCTV.png',
  },
  {
    title: 'Tracking',
    description: 'Advanced GPS tracking solutions for vehicles and assets with real-time monitoring.',
    imageUrl: '/images/group/CIT.png',
  },
  {
    title: 'CIT and Cash Management',
    description: 'Secure movement of valuables with armored fleet and vetted crews.',
    imageUrl: '/images/group/CIT.png',
  },
  {
    title: 'Technical Services',
    description: 'Installation and maintenance of security systems including CCTV, access control, and alarms.',
    imageUrl: '/images/group/CCTV.png',
  },
  {
    title: 'Security Dogs',
    description: 'Trained K9 units for enhanced security patrols and detection services.',
    imageUrl: '/images/group/guarding.png',
  },
  {
    title: 'Special Services',
    description: 'Customized security solutions tailored to unique client requirements and high-risk scenarios.',
    imageUrl: '/images/group/CIT.png',
  },
  {
    title: 'Workshop',
    description: 'In-house workshop for vehicle maintenance and security equipment servicing.',
    imageUrl: '/images/group/guarding.png',
  },
]

export default function GroupIntegratedSolutions({
  title = "What We Offer",
  description = "Security solutions built to keep your business, family, home, and property safe every day across Kenya, Uganda, and Tanzania.",
  solutions = defaultSolutions
}: GroupIntegratedSolutionsProps & { solutions?: Solution[] }) {
  const { openModal } = useEnquiryModal()
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const carousel = useCarousel(solutions.length, itemsPerPage)

  const renderSolution = (solution: Solution, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl group cursor-pointer">
        {/* Background Image */}
        <Image
          src={solution.imageUrl}
          alt={solution.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-charcoal/60 group-hover:bg-primary-orange/80 transition-colors duration-300"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
            {solution.title}
          </h3>
          <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-xs mb-3">
            {solution.description}
          </p>
          <Icon
            icon="iconoir:arrow-right-circle"
            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="integrated-solutions" className="flex items-center justify-center bg-gray-200/90 relative min-h-[85vh] py-12 md:py-16">
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
            className="space-y-3"
          >
            <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
              integrated solutions
            </p>
            <div className="flex items-end justify-between section-title-container w-full !pb-4">
              <h3 className="section-title text-xl md:text-5xl font-bold text-primary-orange">
                {title}
              </h3>
              <CarouselArrows
                onPrev={carousel.prevPage}
                onNext={carousel.nextPage}
                canGoPrev={carousel.canGoPrev}
                canGoNext={carousel.canGoNext}
                className="mb-1"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {carousel.currentItems(solutions).map((solution, index) => renderSolution(solution, index))}
        </div>

        {/* Page Indicator */}
        {carousel.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: carousel.totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => carousel.goToPage(i + 1)}
                className={`rounded-full transition-all duration-300 ${carousel.currentPage === i + 1
                    ? 'bg-primary-orange w-8 h-2'
                    : 'bg-dark-charcoal/30 w-2 h-2'
                  }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Request a Quote Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.button
            onClick={openModal}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-14 py-5 rounded-full font-semibold text-base uppercase hover:bg-[#d84c1e] transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Request a Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
