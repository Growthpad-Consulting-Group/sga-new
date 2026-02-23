'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function FAQsCTA() {
  return (
    <section id="faqs-cta" className="py-8 sm:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-orange rounded-lg py-6 sm:py-8 px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                Still have questions?
              </h2>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                Can't find what you're looking for? Contact SGA and our team will assist you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-orange px-6 py-3 rounded-full font-semibold text-xs uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Get in touch</span>
                <Icon icon="mdi:arrow-right" className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

