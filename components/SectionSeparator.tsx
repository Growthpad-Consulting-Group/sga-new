'use client'

interface SectionSeparatorProps {
  className?: string
}

export default function SectionSeparator({ 
  className = ''
}: SectionSeparatorProps) {
  return (
    <div 
      className={`w-full h-16 relative ${className}`}
      style={{ 
        backgroundImage: 'url(/images/misc/section-pattern.svg)',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
        backgroundSize: 'auto 70%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  )
}