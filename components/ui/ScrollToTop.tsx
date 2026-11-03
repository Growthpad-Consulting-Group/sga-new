'use client'

import { useEffect, useRef, useState } from 'react'

const SHOW_AFTER_PX = 800
const SIZE = 40
const RADIUS = 18
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 108 108" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M107.471 104.891V28.512C107.471 12.774 94.705 0 78.956 0H2.374v11.929h76.582c.571 0 1.136.026 1.694.076a2.075 2.075 0 0 1 1.76 1.374 2.07 2.07 0 0 1-.487 2.169C67.58 29.899 0 97.426 0 97.426a28.43 28.43 0 0 1 9.946 9.987l81.966-81.903a2.07 2.07 0 0 1 2.184-.492 2.08 2.08 0 0 1 1.377 1.766c.046.567.077 1.147.077 1.728v76.379h11.921Z"
      />
    </svg>
  )
}

export default function ScrollToTop(): React.JSX.Element {
  const [visible, setVisible] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const ringRef = useRef<SVGCircleElement>(null)
  const percentRef = useRef<HTMLSpanElement>(null)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let animationFrame = 0

    const update = () => {
      animationFrame = 0
      const scrollY = window.scrollY
      setVisible(scrollY > SHOW_AFTER_PX)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, scrollY / scrollable) : 0

      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress))
      }
      if (percentRef.current) {
        percentRef.current.textContent = `${Math.round(progress * 100)}%`
      }
    }

    const onScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(update)
      setScrolling(true)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setScrolling(false), 1500)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(animationFrame)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
      className={`group fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-500 ${visible
          ? '-translate-y-10 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
        }`}
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          className="text-dark-charcoal/20"
        />
        <circle
          ref={ringRef}
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="currentColor"
          className="text-primary-orange"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>

      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary-orange text-white shadow-lg shadow-black/20 transition-colors group-hover:bg-primary-orange/90">
        <Arrow className={`absolute h-3.5 w-3.5 -rotate-45 transition-[opacity,transform] duration-300 ${scrolling ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`} />
        <span ref={percentRef} className={`absolute text-[10px] font-bold tabular-nums transition-[opacity,transform] duration-300 ${scrolling ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
      </span>
    </button>
  )
}
