'use client'

interface DecorativePatternProps {
  className?: string
  static?: boolean
}

export default function DecorativePattern({ 
  className = '',
  static: isStatic = false
}: DecorativePatternProps) {
  return (
    <div 
      className={`absolute bottom-0 left-0 right-0 w-full h-16 ${className}`}
      style={{ 
        backgroundImage: 'url(/images/misc/section-pattern.svg)',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom',
        backgroundSize: 'auto 70%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  )
}

