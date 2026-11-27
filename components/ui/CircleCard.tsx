import type { ReactNode } from 'react'
import Image from 'next/image'

interface CircleCardProps {
  title: string
  imageUrl: string
  description?: string
  href?: string
  withShadow?: boolean
  /** Optional call-to-action (e.g. a button) shown near the bottom of the circle */
  action?: ReactNode
}

// Circle card with image, dark overlay and text, as used in "Our Products and Services"
export default function CircleCard({ title, imageUrl, description, href, withShadow = true, action }: CircleCardProps) {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-0.5">
      <div className={`relative w-80 h-80 md:w-[360px] md:h-[360px] lg:w-[300px] lg:h-[300px] xl:w-[360px] xl:h-[360px] rounded-full overflow-hidden group ${withShadow ? 'shadow-2xl' : ''} ${href ? 'cursor-pointer' : ''}`}>
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 767px) 320px, 360px"
          className="object-cover transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-charcoal/60 group-hover:bg-primary-orange/80 transition-colors duration-300"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-white mb-3">
            {title}
          </h3>
          {description && (
            <p className="text-white/90 text-sm md:text-lg lg:text-sm xl:text-lg leading-relaxed max-w-xs mb-3 line-clamp-3">
              {description}
            </p>
          )}
        </div>
        {action && (
          <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 px-6 z-30">
            {action}
          </div>
        )}
        {href && (
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="absolute inset-0 z-20 rounded-full focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary-orange"
          />
        )}
      </div>
    </div>
  )
}
