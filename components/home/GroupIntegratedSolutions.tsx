'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Carousel, { useCarousel, CarouselArrows } from '@/components/Carousel'
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
    imageUrl: '/images/group/core-services/courier.jpg',
  },
  {
    title: 'Guarding',
    description: 'Professional guarding for offices, malls, logistics yards and estates.',
    imageUrl: '/images/group/core-services/guarding.jpg',
  },
  {
    title: 'Alarm Response',
    description: 'Rapid alarm response teams ready to respond to security alerts 24/7.',
    imageUrl: '/images/group/core-services/alarm.jpg',
  },
  {
    title: 'Electronic Cargo Tracking System',
    description: 'Advanced GPS tracking solutions for vehicles and assets with real-time monitoring.',
    imageUrl: '/images/group/core-services/tracking.jpg',
  },
  {
    title: 'CIT and Cash Management',
    description: 'Secure movement of valuables with armored fleet and vetted crews.',
    imageUrl: '/images/group/core-services/cit.jpg',
  },
  {
    title: 'CCTV Services',
    description: 'Installation and maintenance of security systems including CCTV, access control, and alarms.',
    imageUrl: '/images/group/core-services/cctv.jpg',
  },
  {
    title: 'K-9 Services',
    description: 'Trained K9 units for enhanced security patrols and detection services.',
    imageUrl: '/images/group/core-services/k9.jpg',
  },
  {
    title: 'Special Services',
    description: 'Customized security solutions tailored to unique client requirements and high-risk scenarios.',
    imageUrl: '/images/group/cit.png',
  },
  {
    title: 'Workshop',
    description: 'In-house workshop for vehicle maintenance and security equipment servicing.',
    imageUrl: '/images/group/guarding.png',
  },
  {
    title: 'Control Room Services',
    description: '24/7 monitored control room coordinating rapid response across all client sites.',
    imageUrl: '/images/group/cctv.png',
  },
  {
    title: 'Reception Services',
    description: 'Professional front-of-house teams managing access and visitor experience.',
    imageUrl: '/images/group/core-services/reception.jpg',
  },
  {
    title: 'Customer Service',
    description: 'Dedicated support teams ensuring responsive, client-focused service delivery.',
    imageUrl: '/images/group/core-services/customer-service.jpg',
  },
  {
    title: 'Close Protection Officer',
    description: 'Specialized close protection officers for executive and VIP security.',
    imageUrl: '/images/group/core-services/close-protection.jpg',
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

  const carousel = useCarousel(solutions.length, itemsPerPage, true)

  const renderSolution = (solution: Solution, index: number) => (
    <div
      key={index}
      className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden shadow-2xl group cursor-pointer">
        {/* Background Image */}
        <Image
          src={solution.imageUrl}
          alt={solution.title}
          fill
          sizes="(max-width: 767px) 320px, 400px"
          className="object-cover transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-charcoal/60 group-hover:bg-primary-orange/80 transition-colors duration-300"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <h3 className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-bold text-white mb-3">
            {solution.title}
          </h3>
          <p className="text-white/90 text-sm md:text-lg lg:text-sm xl:text-lg leading-relaxed max-w-xs mb-3">
            {solution.description}
          </p>
          <Icon
            icon="iconoir:arrow-right-circle"
            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section id="integrated-solutions" className="flex items-center justify-center bg-gray-200/90 relative min-h-[85vh] py-12 md:py-16">
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

        <motion.div
          key={`${carousel.currentPage}-${itemsPerPage}`}
          initial={{ opacity: 0.35, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {carousel.currentItems(solutions).map((solution, index) => renderSolution(solution, index))}
        </motion.div>

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
            className="bg-primary-orange text-white px-14 lg:px-10 xl:px-14 hover:px-18 lg:hover:px-14 xl:hover:px-18 py-3 rounded-full font-semibold text-sm xl:text-base hover:bg-white hover:text-primary-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center group relative"
          >
            Request a Quote
            <Icon
              icon="iconoir:arrow-right-circle"
              className="w-5 h-5 text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4"
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
