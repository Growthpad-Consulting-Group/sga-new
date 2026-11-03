import Image from 'next/image'
import { Icon } from '@iconify/react'

interface CircleCardProps {
  title: string
  imageUrl: string
  description?: string
  href?: string
}

// Circle card with image, dark overlay and text, as used in "Our Products and Services"
export default function CircleCard({ title, imageUrl, description, href }: CircleCardProps) {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-0.5">
      <div className={`relative w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden shadow-2xl group ${href ? 'cursor-pointer' : ''}`}>
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 767px) 320px, 400px"
          className="object-cover transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-charcoal/60 group-hover:bg-primary-orange/80 transition-colors duration-300"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <h3 className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-bold text-white mb-3">
            {title}
          </h3>
          {description && (
            <p className="text-white/90 text-sm md:text-lg lg:text-sm xl:text-lg leading-relaxed max-w-xs mb-3">
              {description}
            </p>
          )}
          {href && (
            <Icon
              icon="iconoir:arrow-right-circle"
              className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
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
