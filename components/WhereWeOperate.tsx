'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'

export default function WhereWeOperate(): React.JSX.Element {
  return (
    <section id="where-we-operate" className="section-snap flex items-center justify-center relative min-h-[85vh] py-12 md:py-20 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
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
              <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider mb-2">
                Where We Operate
              </p>
              <div className="section-title-container">
                <h3 className="section-title text-xl md:text-5xl font-bold text-primary-orange">
                  Geographic footprint
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6 flex-1 overflow-y-auto max-w-md">
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
                className="bg-primary-orange rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-150 cursor-pointer border border-white/10"
              >
                <h4 className="text-lg md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Icon
                    icon="emojione:flag-for-kenya"
                    className="w-10 h-10 text-white group-hover:opacity-100 transition-opacity duration-300"
                  />
                  Kenya HQ
                </h4>
                <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-4">
                  Nairobi-based HQ serving nationwide clients.
                </p>
                <a
                  href="#kenya"
                  className="inline-block text-white text-sm font-semibold hover:underline uppercase tracking-wide"
                >
                  Explore Kenya <Icon icon="iconoir:arrow-right-circle" className="inline-block ml-1 w-5 h-5" />
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
                className="bg-primary-orange rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-150 cursor-pointer border border-white/10"
              >
                <h4 className="text-lg md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Icon
                    icon="emojione:flag-for-uganda"
                    className="w-10 h-10 text-white group-hover:opacity-100 transition-opacity duration-300"
                  />
                  Uganda HQ
                </h4>
                <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-4">
                  Reliable services across key urban centers.
                </p>
                <a
                  href="#uganda"
                  className="inline-block text-white text-sm font-semibold hover:underline uppercase tracking-wide"
                >
                  Explore Uganda <Icon icon="iconoir:arrow-right-circle" className="inline-block ml-1 w-5 h-5" />
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
                className="bg-primary-orange rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-150 cursor-pointer border border-white/10"
              >
                <h4 className="text-lg md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Icon
                    icon="emojione:flag-for-tanzania"
                    className="w-10 h-10 text-white group-hover:opacity-100 transition-opacity duration-300"
                  />
                  Tanzania HQ
                </h4>
                <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-4">
                  Coast-to-inland coverage with rapid response.
                </p>
                <a
                  href="#tanzania"
                  className="inline-block text-white text-sm font-semibold hover:underline uppercase tracking-wide"
                >
                  Explore Tanzania <Icon icon="iconoir:arrow-right-circle" className="inline-block ml-1 w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-xl lg:max-w-2xl"
          >
            <Image
              src="/images/group/geographic-footprint.svg"
              alt="Geographic Footprint"
              width={600}
              height={0}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

