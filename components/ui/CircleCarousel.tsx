'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import CircleCard from '@/components/ui/CircleCard'
import { CarouselArrows, useInfiniteCarousel } from '@/components/ui/Carousel'

export interface CircleCarouselItem {
  key: string
  title: string
  description?: string
  imageUrl: string
  href?: string
  /** Optional call-to-action shown inside the circle (e.g. a "Learn more" button) */
  action?: ReactNode
}

/** Show dots only up to this many items */
const MAX_DOTS = 6

interface CircleCarouselProps {
  title: string
  /** Optional paragraph shown under the title */
  description?: string
  items: CircleCarouselItem[]
  /** Milliseconds between automatic slides. Autoplay pauses while the pointer is over the carousel. */
  autoplay?: number
}

/**
 * Looping carousel of circle cards with a title row and arrows.
 * Used for "Our Products and Services" and "Industries We Serve" so both behave the same:
 * infinite loop, autoplay that pauses on hover, drag or swipe, and 3 cards per row (1 on mobile).
 */
export default function CircleCarousel({ title, description, items, autoplay = 10000 }: CircleCarouselProps) {
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const carousel = useInfiniteCarousel(items.length, itemsPerPage, isHovered ? 0 : autoplay)

  // Drag (mouse) or swipe (touch) left/right to change page
  const dragStartX = useRef<number | null>(null)
  const didDrag = useRef(false)

  const finishDrag = (clientX: number) => {
    if (dragStartX.current === null) return
    const dx = clientX - dragStartX.current
    dragStartX.current = null
    if (dx < -40) carousel.next()
    else if (dx > 40) carousel.previous()
  }

  // Repeat the first page at the end so the loop looks continuous
  const loopedItems = [...items, ...items.slice(0, Math.min(itemsPerPage, items.length))]

  return (
    <>
      <div className="mb-12">
        <div className="space-y-3">
          <div className="flex items-center justify-between section-title-container w-full pb-1!">
            <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
              {title}
            </h3>
            <CarouselArrows
              onPrev={carousel.previous}
              onNext={carousel.next}
              canGoPrev={carousel.canMove}
              canGoNext={carousel.canMove}
              className="mb-1"
            />
          </div>
          {description && (
            <p className="text-sm md:text-base text-dark-charcoal">{description}</p>
          )}
        </div>
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
          style={carousel.trackStyle}
          onTransitionEnd={carousel.handleTransitionEnd}
        >
          {loopedItems.map((item, index) => {
            const isClone = index >= items.length

            return (
              <div
                key={`${item.key}-${index}`}
                className="flex shrink-0 justify-center px-4 md:px-6"
                style={{ width: `${100 / itemsPerPage}%` }}
                aria-hidden={isClone || undefined}
              >
                <CircleCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  href={isClone ? undefined : item.href}
                  withShadow={false}
                  action={item.action}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* One dot per item; the active dot follows the loop. Hidden for long lists, where dots clutter the page */}
      {carousel.canMove && items.length <= MAX_DOTS && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {items.map((item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => carousel.goTo(index)}
              className={`rounded-full transition-all duration-300 ${carousel.currentIndex % items.length === index
                  ? 'bg-primary-orange w-8 h-2'
                  : 'bg-dark-charcoal/30 w-2 h-2'
                }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      )}
    </>
  )
}
