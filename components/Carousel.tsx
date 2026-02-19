'use client'

import { useState, ReactNode } from 'react'
import { Icon } from '@iconify/react'

interface CarouselProps {
  items: any[]
  itemsPerPage?: number
  renderItem: (item: any, index: number) => ReactNode
  showArrows?: boolean
  showDots?: boolean
  className?: string
  gridCols?: string
  onPageChange?: (page: number) => void
}

// Custom hook for carousel logic
export function useCarousel(totalItems: number, itemsPerPage: number = 3) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const currentItems = (items: any[]) =>
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
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
    canGoPrev: currentPage > 1,
    canGoNext: currentPage < totalPages,
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
  onPageChange,
}: CarouselProps) {
  const carousel = useCarousel(items.length, itemsPerPage)

  const handlePageChange = (page: number) => {
    carousel.goToPage(page)
    onPageChange?.(page)
  }

  return (
    <div className={className}>
      {/* Items Grid */}
      <div className={`grid ${gridCols} gap-6 md:gap-8`}>
        {carousel.currentItems(items).map((item, index) => renderItem(item, index))}
      </div>

      {/* Bottom Controls */}
      <div className="mt-8 flex items-center justify-center gap-8">
        {/* Arrows */}
        {showArrows && (
          <CarouselArrows
            onPrev={carousel.prevPage}
            onNext={carousel.nextPage}
            canGoPrev={carousel.canGoPrev}
            canGoNext={carousel.canGoNext}
          />
        )}

        {/* Dots Indicator */}
        {showDots && carousel.totalPages > 1 && (
          <div className="flex items-center gap-2">
            {Array.from({ length: carousel.totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`rounded-full transition-all duration-300 ${
                  carousel.currentPage === i + 1
                    ? 'bg-primary-orange w-8 h-2'
                    : 'bg-dark-charcoal/30 w-2 h-2'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
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
}: {
  onPrev: () => void
  onNext: () => void
  canGoPrev: boolean
  canGoNext: boolean
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center transition-all duration-300 ${
          !canGoPrev
            ? 'opacity-30 cursor-not-allowed text-dark-charcoal'
            : 'text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
        }`}
        aria-label="Previous page"
      >
        <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center transition-all duration-300 ${
          !canGoNext
            ? 'opacity-30 cursor-not-allowed text-dark-charcoal'
            : 'text-dark-charcoal hover:border-primary-orange hover:text-primary-orange'
        }`}
        aria-label="Next page"
      >
        <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
      </button>
    </div>
  )
}
