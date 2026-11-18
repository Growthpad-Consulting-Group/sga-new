'use client'

import { motion } from 'framer-motion'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import { CarouselArrows, useInfiniteCarousel } from '@/components/ui/Carousel'
import Button from '@/components/ui/Button'
import CircleCard from '@/components/ui/CircleCard'
import { useEffect, useRef, useState } from 'react'
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
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const infiniteCarousel = useInfiniteCarousel(
    solutions.length,
    itemsPerPage,
    isHovered ? 0 : 5000,
  )

  // Drag (mouse) or swipe (touch) left/right to change page
  const dragStartX = useRef<number | null>(null)
  const didDrag = useRef(false)

  const finishDrag = (clientX: number) => {
    if (dragStartX.current === null) return
    const dx = clientX - dragStartX.current
    dragStartX.current = null
    if (dx < -40) infiniteCarousel.next()
    else if (dx > 40) infiniteCarousel.previous()
  }

  const loopedSolutions = [
    ...solutions,
    ...solutions.slice(0, Math.min(itemsPerPage, solutions.length)),
  ]

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
                onPrev={infiniteCarousel.previous}
                onNext={infiniteCarousel.next}
                canGoPrev={infiniteCarousel.canMove}
                canGoNext={infiniteCarousel.canMove}
                className="mb-1"
              />
            </div>
          </motion.div>
        </div>

        <div
          className="relative overflow-hidden py-2 select-none cursor-grab active:cursor-grabbing touch-pan-y"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            dragStartX.current = null
          }}
          onPointerDown={(e) => {
            dragStartX.current = e.clientX
            didDrag.current = false
          }}
          onPointerMove={(e) => {
            if (dragStartX.current !== null && Math.abs(e.clientX - dragStartX.current) > 5) {
              didDrag.current = true
            }
          }}
          onPointerUp={(e) => finishDrag(e.clientX)}
          onDragStart={(e) => e.preventDefault()}
          onClickCapture={(e) => {
            // Don't follow a card link at the end of a drag
            if (didDrag.current) {
              e.preventDefault()
              e.stopPropagation()
              didDrag.current = false
            }
          }}
        >
          <div
            className="flex w-full"
            style={infiniteCarousel.trackStyle}
            onTransitionEnd={infiniteCarousel.handleTransitionEnd}
          >
            {loopedSolutions.map((solution, index) => {
              const isClone = index >= solutions.length

              return (
                <div
                  key={`${solution.title}-${index}`}
                  className="flex shrink-0 justify-center px-4 md:px-6"
                  style={{ width: `${100 / itemsPerPage}%` }}
                  aria-hidden={isClone || undefined}
                >
                  <CircleCard
                    title={solution.title}
                    description={solution.description}
                    imageUrl={solution.imageUrl}
                    href={isClone ? undefined : solution.href}
                    withShadow={false}
                  />
                </div>
              )
            })}
          </div>
        </div>

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
