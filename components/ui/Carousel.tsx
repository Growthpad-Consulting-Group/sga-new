'use client'

import { useState, ReactNode, useEffect, useRef, Fragment } from 'react'
import type { CSSProperties, TransitionEvent } from 'react'
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

export function useCarouselAutoplay(
  nextPage: () => void,
  interval: number | undefined,
  paused = false,
) {
  const nextPageRef = useRef(nextPage)

  useEffect(() => {
    nextPageRef.current = nextPage
  }, [nextPage])

  useEffect(() => {
    if (!interval || paused) return
    const autoplayId = window.setInterval(() => nextPageRef.current(), interval)
    return () => window.clearInterval(autoplayId)
  }, [interval, paused])
}

export function useInfiniteCarousel(
  totalItems: number,
  itemsPerView: number,
  autoplay = 5000,
) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const canMove = totalItems > itemsPerView

  const next = () => {
    if (!canMove || isResetting || isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((index) => Math.min(index + 1, totalItems))
  }

  const previous = () => {
    if (!canMove || isResetting || isTransitioning) return

    if (currentIndex > 0) {
      setIsTransitioning(true)
      setCurrentIndex((index) => index - 1)
      return
    }

    setIsResetting(true)
    setCurrentIndex(totalItems)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsResetting(false)
        setIsTransitioning(true)
        setCurrentIndex(totalItems - 1)
      })
    })
  }

  useEffect(() => {
    if (!canMove || !autoplay || isResetting || isTransitioning) return

    const autoplayId = window.setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((index) => Math.min(index + 1, totalItems))
    }, autoplay)

    return () => window.clearInterval(autoplayId)
  }, [autoplay, canMove, currentIndex, isResetting, isTransitioning, totalItems])

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return

    if (currentIndex !== totalItems) {
      setIsTransitioning(false)
      return
    }

    setIsResetting(true)
    setIsTransitioning(false)
    setCurrentIndex(0)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsResetting(false))
    })
  }

  const trackStyle: CSSProperties = {
    transform: `translate3d(-${currentIndex * (100 / itemsPerView)}%, 0, 0)`,
    transition: isResetting
      ? 'none'
      : 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'transform',
  }

  return {
    canMove,
    handleTransitionEnd,
    next,
    previous,
    trackStyle,
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

  useCarouselAutoplay(carousel.nextPage, autoplay, paused)

  // Drag or swipe left/right to change page
  const startX = useRef<number | null>(null)

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
        className={`grid ${gridCols} gap-6 md:gap-8 select-none cursor-grab active:cursor-grabbing`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={(e) => {
          setPaused(true)
          startX.current = e.clientX
        }}
        onPointerUp={(e) => {
          setPaused(false)
          if (startX.current === null) return
          const dx = e.clientX - startX.current
          startX.current = null
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
