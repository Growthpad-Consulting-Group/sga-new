'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Carousel, { useCarousel, CarouselArrows } from '@/components/ui/Carousel'
import Button from '@/components/ui/Button'
import CircleCard from '@/components/ui/CircleCard'
import { useState, useEffect } from 'react'
import { coreServices, type CoreService } from '@/data/coreServices'

type Solution = CoreService

interface GroupIntegratedSolutionsProps {
  title?: string
  description?: string
}

export default function GroupIntegratedSolutions({
  title = "What We Offer",
  description = "Security solutions built to keep your business, family, home, and property safe every day across Kenya, Uganda, and Tanzania.",
  solutions = coreServices
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
    <CircleCard
      key={index}
      title={solution.title}
      description={solution.description}
      imageUrl={solution.imageUrl}
      href={solution.href}
    />
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Button variant="solid" size="small" onClick={openModal} className="w-auto">
            Request a Quote
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
