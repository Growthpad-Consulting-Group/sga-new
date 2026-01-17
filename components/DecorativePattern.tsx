'use client'

interface DecorativePatternProps {
  circleCount?: number
  circleSize?: string
  lineCount?: number
  color?: string
  colors?: string[] | null
  lineColor?: string | null
  className?: string
  static?: boolean
}

export default function DecorativePattern({ 
  circleCount = 25,
  circleSize = 'w-6 h-6',
  lineCount = 3,
  color = 'bg-primary-orange',
  colors = null,
  lineColor = null,
  className = '',
  static: isStatic = false
}: DecorativePatternProps) {
  // If colors array is provided, use sequential colors; otherwise use single color
  const getColor = (index: number): string => {
    if (colors && colors.length > 0) {
      return colors[index % colors.length]
    }
    return color
  }

  // Use lineColor if provided, otherwise use circle color
  const getLineColor = (): string => {
    return lineColor || color
  }

  // For static patterns, use a more aggressive isolation technique
  if (isStatic) {
    return (
      <div 
        className="absolute bottom-0 left-0 right-0 w-full"
        style={{ 
          transform: 'translate3d(0, 0, 0)',
          isolation: 'isolate',
          willChange: 'auto',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 1
        }}
      >
        <div 
          className={`absolute bottom-0 left-0 right-0 hidden md:flex items-center w-full pr-0 pl-0 transition-none ${className}`}
          style={{ 
            transform: 'translate3d(0, 0, 0)',
            willChange: 'auto',
            position: 'absolute'
          }}
        >
          {[...Array(circleCount)].map((_, index) => {
            const circleColor = getColor(index)
            const lineColorClass = lineColor || circleColor
            return (
              <div 
                key={index} 
                className="flex items-center flex-1"
                style={{ transform: 'none' }}
              >
                <div className={`${circleSize} rounded-full ${circleColor} shadow-lg flex-shrink-0`}></div>
                <div className="flex flex-col gap-1 flex-1 justify-center items-center">
                  {[...Array(lineCount)].map((_, lineIndex) => (
                    <div key={lineIndex} className={`w-full h-0.5 ${lineColorClass}`}></div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`absolute bottom-0 left-0 right-0 hidden md:flex items-center w-full pr-0 pl-0 transition-none ${className}`}
    >
      {[...Array(circleCount)].map((_, index) => {
        const circleColor = getColor(index)
        const lineColorClass = lineColor || circleColor
        return (
          <div key={index} className="flex items-center flex-1">
            <div className={`${circleSize} rounded-full ${circleColor} shadow-lg flex-shrink-0`}></div>
            <div className="flex flex-col gap-1 flex-1 justify-center items-center">
              {[...Array(lineCount)].map((_, lineIndex) => (
                <div key={lineIndex} className={`w-full h-0.5 ${lineColorClass}`}></div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

