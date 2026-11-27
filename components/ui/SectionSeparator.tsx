'use client'

import { usePathname } from 'next/navigation'

interface SectionSeparatorProps {
  className?: string
  imageUrl?: string
}

const COUNTRY_CODES = ['ke', 'ug', 'tz']

export default function SectionSeparator({
  className = '',
  imageUrl
}: SectionSeparatorProps) {
  const pathname = usePathname()
  // Country pages use their country's colours; other pages use the default pattern
  const countryCode = pathname.split('/').filter(Boolean)[0]
  const defaultPattern = COUNTRY_CODES.includes(countryCode)
    ? `/images/misc/section-pattern-${countryCode}.svg`
    : '/images/misc/section-pattern.svg'
  const pattern = imageUrl ?? defaultPattern

  return (
    <div
      className={`absolute left-0 right-0 w-full h-14 z-20 ${className || '-top-7'}`}
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
        backgroundSize: 'auto 80%',
        pointerEvents: 'none'
      }}
    />
  )
}