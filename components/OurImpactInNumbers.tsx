'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import Carousel from '@/components/Carousel'

interface Stat {
  number: string
  label: string
}

const topRowStats: Stat[] = [
  {
    number: '19,000+',
    label: 'Security Professionals',
  },
  {
    number: '500+',
    label: 'vehicles',
  },
  {
    number: '30+',
    label: 'Office Locations',
  },
]

const bottomRowStats: Stat[] = [
  {
    number: '$19m',
    label: 'Total Assets',
  },
  {
    number: '$78m',
    label: 'Group Revenue',
  },
  {
    number: '3',
    label: 'countries',
  },
  {
    number: '14',
    label: 'Member of Consolidated Groups',
  },
]

interface OurImpactInNumbersProps {
  showPattern?: boolean
  backgroundImage?: string
}

// Counts from 0 up to the figure (e.g. "19,000+", "$19m") when it scrolls into view.
// The prefix ($) and suffix (+, m) are kept as they are.
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? Number(match[2].replace(/,/g, '')) : 0
  const suffix = match?.[3] ?? ''
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const duration = 1600
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(Math.round(target * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{current.toLocaleString('en-US')}{suffix}
    </span>
  )
}

function renderStat(stat: Stat) {
  return (
    <div className="w-44 h-44 md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full border border-primary-orange bg-primary-orange flex flex-col items-center justify-center shadow-lg group relative p-3 md:p-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5 hover:border-[#d84c1e] hover:bg-[#d84c1e] hover:shadow-[0_20px_40px_rgba(216,76,30,0.3)]">
      <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white transition-colors mb-2">
        <CountUp value={stat.number} />
      </span>
      <span className="text-white text-center text-sm md:text-base lg:text-sm xl:text-lg font-normal px-2 leading-tight">
        {stat.label}
      </span>
    </div>
  )
}

export default function OurImpactInNumbers({
  showPattern = true,
  backgroundImage = '/images/group/impact-background.jpg',
}: OurImpactInNumbersProps): React.JSX.Element {
  const bgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <SectionWrapper id="our-impact" className="bg-white relative overflow-hidden">
      {/* Background Image - parallax on scroll */}
      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 top-[-10%] bottom-[-10%]">
          <Image
            src={backgroundImage}
            alt="Our Impact in Numbers Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          {/* White Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-8 md:py-24">
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-sm xl:text-base font-medium text-white uppercase tracking-wider">
              our impact in numbers
            </p>
            <div className="section-title-container">
              <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange capitalize">
                Security at scale, built on trust layer
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Phones and tablets: one circle per page */}
        <div className="lg:hidden">
          <Carousel
            items={[...topRowStats, ...bottomRowStats]}
            itemsPerPage={2}
            loop
            autoplay={4000}
            gridCols="grid-cols-2 justify-items-center"
            renderItem={(stat: Stat) => renderStat(stat)}
          />
        </div>

        {/* Top Row - 3 Circles */}
        <div className="hidden lg:flex justify-center items-center gap-1 md:gap-6 mb-4 md:mb-6 flex-wrap capitalize">
          {topRowStats.map((stat, index) => (
            <motion.div
              key={`top-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {renderStat(stat)}
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 4 Circles */}
        <div className="hidden lg:flex justify-center items-center gap-1 md:gap-6 flex-wrap capitalize">
          {bottomRowStats.map((stat, index) => (
            <motion.div
              key={`bottom-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="flex flex-col items-center"
            >
              {renderStat(stat)}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

