'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

interface ParallaxSectionProps {
  title?: string
  h2Title?: string
  description?: string
  id?: string
}

export default function ParallaxSection({
  title = "Who We Are",
  h2Title = "About SGA Group",
  description = "We are dedicated to supporting sustainable safety and security for our customers and communities — through exceptional personnel, innovative systems and uncompromising integrity.",
  id
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section
      ref={ref}
      id={id}
      className="section-snap relative w-full min-h-[100vh] overflow-hidden flex flex-col justify-center"
    >
      {/* Background Image - Reduced Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/group/about-sga-group.png"
          alt="About SGA Group"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay for better text readability - Orange tint */}
        <div className="absolute inset-0 bg-primary-orange/85"></div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex items-center">
        <motion.div
          style={{ opacity }}
          className="relative z-10 w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-md font-medium text-white/90 uppercase tracking-wider">
              {title}
            </p>
            <div className="section-title-container-white">
              <h2 className="section-title text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                {h2Title}
              </h2>
            </div>
            <div className="relative max-w-6xl mx-auto pt-12 md:pt-16">
              <div className="relative">
                {/* Plus Icon - Top Left of Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -top-6 -left-6 md:-top-20 md:-left-24 z-20"
                >
                  <Icon
                    icon="mdi:plus-thick"
                    className="w-12 h-12 md:w-28 md:h-28 text-white"
                  />
                </motion.div>
                <p className="text-lg md:text-2xl lg:text-6xl max-w-6xl text-white font-semibold leading-relaxed text-left">
                  {description}
                </p>
              </div>
              {/* Buttons */}
              <button className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-8 md:mt-12">
                <motion.a
                  href="#what-we-do"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white text-white hover:text-primary-orange border border-white px-14 hover:px-18 py-2 rounded-full font-semibold text-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
                >
                  What we do
                  <Icon
                    icon="iconoir:arrow-right-circle"
                    className="w-5 h-5 text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4"
                  />
                </motion.a>
                <motion.a
                  href="#sustainability"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white text-white hover:text-primary-orange border border-white px-14 hover:px-18 py-2 rounded-full font-semibold text-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
                >
                  Sustainability
                  <Icon
                    icon="iconoir:arrow-right-circle"
                    className="w-5 h-5 text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4"
                  />
                </motion.a>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}