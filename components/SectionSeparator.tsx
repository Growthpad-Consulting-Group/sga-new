'use client'

interface SectionSeparatorProps {
  className?: string
  imageUrl?: string
}

export default function SectionSeparator({
  className = '',
  imageUrl = '/images/misc/section-pattern.svg'
}: SectionSeparatorProps) {
  return (
    <div
      className={`absolute left-0 right-0 w-full h-16 z-20 ${className || 'top-[-2rem]'}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
        backgroundSize: 'auto 80%',
        pointerEvents: 'none'
      }}
    />
  )
}