'use client'

import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import { Icon } from '@iconify/react'
import Button from '@/components/Button'

export default function FAQsCTA() {
  return (
    <section id="faqs-cta" className="py-8 sm:py-10">
      <div className="w-full  mx-auto container-fluid">
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
            <div className="shrink-0">
              <Button href="/contact" variant="solid" size="small">
                Get in touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

