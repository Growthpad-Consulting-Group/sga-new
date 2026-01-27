'use client'

interface SectionSeparatorProps {
  className?: string
}

export default function SectionSeparator({
  className = ''
}: SectionSeparatorProps) {
  return (
    <div
      className={`absolute left-0 right-0 w-full h-16 z-20 ${className || 'top-[-2rem]'}`}
      style={{
        backgroundImage: 'url(/images/misc/section-pattern.svg)',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
        backgroundSize: 'auto 70%',
        pointerEvents: 'none'
      }}
    />
  )
}