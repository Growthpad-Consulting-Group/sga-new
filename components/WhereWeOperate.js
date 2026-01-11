'use client'

import { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DecorativePattern from './DecorativePattern'
import dynamic from 'next/dynamic'

// Dynamically import the map component to avoid SSR issues
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  )
})

export default function WhereWeOperate() {
  return (
    <section id="where-we-operate" className="section-snap flex items-center justify-center bg-light-grey relative pb-0 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 flex flex-col h-[350px] md:h-[450px]"
          >
            <div>
              <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Where We Operate
              </p>
              <h3 className="text-lg md:text-xl font-bold text-primary-orange relative pb-3">
                  Geographic footprint
                <span 
                  className="absolute bottom-0 left-0 h-1 w-3/4"
                  style={{
                    background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                    height: '3px'
                  }}
                ></span>
              </h3>
            </div>
            <div className="flex flex-col gap-3 mt-4 flex-1 overflow-y-auto max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary-orange rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Image
                    src="https://flagcdn.com/w40/ke.png"
                    alt="Kenya Flag"
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  Kenya HQ
                </h4>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-2">
                  Nairobi-based HQ serving nationwide clients.
                </p>
                <a 
                  href="#kenya" 
                  className="inline-block text-white text-xs font-semibold hover:underline"
                >
                  Explore Kenya →
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary-orange rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Image
                    src="https://flagcdn.com/w40/ug.png"
                    alt="Uganda Flag"
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  Uganda HQ
                </h4>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-2">
                    Reliable services across key urban centers.
                </p>
                <a 
                  href="#uganda" 
                  className="inline-block text-white text-xs font-semibold hover:underline"
                >
                  Explore Uganda →
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary-orange rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Image
                    src="https://flagcdn.com/w40/tz.png"
                    alt="Tanzania Flag"
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  Tanzania HQ
                </h4>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-2">
                  Coast-to-inland coverage with rapid response.
                </p>
                <a 
                  href="#tanzania" 
                  className="inline-block text-white text-xs font-semibold hover:underline"
                >
                  Explore Tanzania →
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg z-0"
          >
            <InteractiveMap />
          </motion.div>
        </div>
      </motion.div>
      <DecorativePattern circleCount={35} static={true} />
    </section>
  )
}

