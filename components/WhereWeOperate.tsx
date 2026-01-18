'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import DecorativePattern from './DecorativePattern'

export default function WhereWeOperate(): React.JSX.Element {
  return (
    <section id="where-we-operate" className="section-snap flex items-center justify-center relative pb-0 overflow-x-hidden">
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
            className="space-y-3 flex flex-col"
          >
            <div>
              <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Where We Operate
              </p>
            <div className="section-title-container">
              <h3 className="section-title text-lg md:text-3xl font-bold text-primary-orange">
                Geographic footprint
              </h3>
            </div>
            </div>
            <div className="flex flex-col gap-3 mt-4 flex-1 overflow-y-auto max-w-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.15,
                  ease: "easeOut",
                  opacity: { duration: 0.5, delay: 0.1 },
                  y: { duration: 0.15 }
                }}
                className="bg-primary-orange rounded-lg p-3 py-6 shadow-sm hover:shadow-lg transition-shadow duration-150 cursor-pointer"
              >
                <h4 className="text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Icon 
                    icon="emojione:flag-for-kenya" 
                    className="w-8 h-8 text-white group-hover:opacity-100 transition-opacity duration-300"
                  />
                  Kenya HQ
                </h4>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-2">
                  Nairobi-based HQ serving nationwide clients.
                </p>
                <a 
                  href="#kenya" 
                  className="inline-block text-white text-xs font-normal hover:underline uppercase"
                >
                  Explore Kenya <Icon icon="iconoir:arrow-right-circle" className="inline-block ml-1 w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.15,
                  ease: "easeOut",
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: { duration: 0.15 }
                }}
                className="bg-primary-orange rounded-lg p-3 py-6 shadow-sm hover:shadow-lg transition-shadow duration-150 cursor-pointer"
              >
                <h4 className="text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Icon 
                    icon="emojione:flag-for-uganda" 
                    className="w-8 h-8 text-white group-hover:opacity-100 transition-opacity duration-300"
                  />
                  Uganda HQ
                </h4>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-2">
                    Reliable services across key urban centers.
                </p>
                <a 
                  href="#uganda" 
                  className="inline-block text-white text-xs font-normal hover:underline uppercase"
                >
                  Explore Uganda <Icon icon="iconoir:arrow-right-circle" className="inline-block ml-1 w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.15,
                  ease: "easeOut",
                  opacity: { duration: 0.5, delay: 0.3 },
                  y: { duration: 0.15 }
                }}
                className="bg-primary-orange rounded-lg p-3 py-6 shadow-sm hover:shadow-lg transition-shadow duration-150 cursor-pointer"
              >
                <h4 className="text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Icon 
                    icon="emojione:flag-for-tanzania" 
                    className="w-8 h-8 text-white group-hover:opacity-100 transition-opacity duration-300"
                  />
                  Tanzania HQ
                </h4>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-2">
                  Coast-to-inland coverage with rapid response.
                </p>
                <a 
                  href="#tanzania" 
                  className="inline-block text-white text-xs font-normal hover:underline uppercase"
                >
                  Explore Tanzania <Icon icon="iconoir:arrow-right-circle" className="inline-block ml-1 w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-md lg:max-w-lg"
          >
            <Image
                    src="/images/group/geographic-footprint.svg"
                    alt="Geographic Footprint"
                    width={400}
                    height={0}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
          </motion.div>
        </div>
      </motion.div>
      <DecorativePattern static={true} />
    </section>
  )
}

