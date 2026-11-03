'use client'

import { useState, ReactNode, useEffect, useRef, Fragment } from 'react'
import { Icon } from '@iconify/react'

interface CarouselProps {
  items: any[]
  itemsPerPage?: number
  renderItem: (item: any, index: number) => ReactNode
  showArrows?: boolean
  showDots?: boolean
  className?: string
  gridCols?: string
  controlsPosition?: 'top' | 'bottom'
  loop?: boolean
  autoplay?: number
  onPageChange?: (page: number) => void
}

// Custom hook for carousel logic
export function useCarousel(totalItems: number, itemsPerPage: number = 3, loop: boolean = false) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages)
    }
  }, [totalPages, currentPage])

  const currentItems = (items: any[]) =>
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const nextPage = () => {
    if (totalPages <= 1) return

    setCurrentPage(prev => prev < totalPages ? prev + 1 : loop ? 1 : prev)
  }

  const prevPage = () => {
    if (totalPages <= 1) return

    setCurrentPage(prev => prev > 1 ? prev - 1 : loop ? totalPages : prev)
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return {
    currentPage,
    totalPages,
    currentItems,
    nextPage,
    prevPage,
    goToPage,
    canGoPrev: totalPages > 1 && (loop || currentPage > 1),
    canGoNext: totalPages > 1 && (loop || currentPage < totalPages),
  }
}

export default function Carousel({
  items,
  itemsPerPage = 3,
  renderItem,
  showArrows = true,
  showDots = true,
  className = '',
  gridCols = 'md:grid-cols-3',
  controlsPosition = 'bottom',
  loop = false,
  autoplay,
  onPageChange,
}: CarouselProps) {
  const carousel = useCarousel(items.length, itemsPerPage, loop)

  // Pause autoplay while the pointer is over the items or a finger is on them
  const [paused, setPaused] = useState(false)

  // Advance automatically every `autoplay` ms when set
  useEffect(() => {
    if (!autoplay || paused) return
    const id = setInterval(() => carousel.nextPage(), autoplay)
    return () => clearInterval(id)
  }, [autoplay, paused, carousel.currentPage])

  // Swipe left/right to change page
  const touchStartX = useRef<number | null>(null)

  const handlePageChange = (page: number) => {
    carousel.goToPage(page)
    onPageChange?.(page)
  }

  // Dots sit between the previous and next arrows
  const dots = showDots && carousel.totalPages > 1 ? (
    <div className="flex items-center gap-2">
      {Array.from({ length: carousel.totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`rounded-full transition-all duration-300 ${carousel.currentPage === i + 1
              ? 'bg-primary-orange w-8 h-2'
              : 'bg-dark-charcoal/30 w-2 h-2'
            }`}
          aria-label={`Go to page ${i + 1}`}
        />
      ))}
    </div>
  ) : null

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Items Grid */}
      <div
        className={`grid ${gridCols} gap-6 md:gap-8`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          setPaused(true)
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          setPaused(false)
          if (touchStartX.current === null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          touchStartX.current = null
          if (dx < -40) carousel.nextPage()
          else if (dx > 40) carousel.prevPage()
        }}
      >
        {carousel.currentItems(items).map((item, index) => (
          <Fragment key={`${carousel.currentPage}-${index}`}>
            {renderItem(item, index)}
          </Fragment>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className={`flex items-center justify-center gap-4 ${controlsPosition === 'top' ? 'order-first mb-6' : 'mt-4'}`}>
        {showArrows ? (
          <CarouselArrows
            onPrev={carousel.prevPage}
            onNext={carousel.nextPage}
            canGoPrev={carousel.canGoPrev}
            canGoNext={carousel.canGoNext}
            middle={dots}
          />
        ) : (
          dots
        )}
      </div>
    </div>
  )
}

// Export ArrowButtons for external use (e.g., in section headers)
export function CarouselArrows({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  className = '',
  middle,
}: {
  onPrev: () => void
  onNext: () => void
  canGoPrev: boolean
  canGoNext: boolean
  className?: string
  middle?: ReactNode
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`w-8 h-8 xl:w-10 xl:h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center transition-all duration-300 ${!canGoPrev
            ? 'opacity-30 cursor-not-allowed text-dark-charcoal'
            : 'text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
          }`}
        aria-label="Previous page"
      >
        <Icon icon="mingcute:arrow-left-line" className="w-5 h-5 xl:w-6 xl:h-6" />
      </button>
      {middle}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`w-8 h-8 xl:w-10 xl:h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center transition-all duration-300 ${!canGoNext
            ? 'opacity-30 cursor-not-allowed text-dark-charcoal'
            : 'text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
          }`}
        aria-label="Next page"
      >
        <Icon icon="mingcute:arrow-right-line" className="w-5 h-5 xl:w-6 xl:h-6" />
      </button>
    </div>
  )
}
