'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SectionWrapper from './SectionWrapper'

interface Hotline {
  country: string
  phone: string
  email: string
}

const hotlines: Hotline[] = [
  {
    country: 'Kenya',
    phone: '+254 (0) 20 2604356-61',
    email: 'info@ke.sgasecurity.com'
  },
  {
    country: 'Tanzania',
    phone: '+255 (0) 784 555470-71',
    email: 'info@tz.sgasecurity.com'
  },
  {
    country: 'Uganda',
    phone: '+256-717-800752',
    email: 'info@ug.sgasecurity.com'
  }
]

export default function CustomerCare(): React.JSX.Element {
  return (
    <SectionWrapper id="customer-care" className=" relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title Section with Plus Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative">
            <Icon
              icon="mdi:plus-thick"
              className="absolute -top-12 -left-2 w-12 h-12 text-primary-orange font-bold"
              style={{ strokeWidth: 3 }}
            />
            <h3 className="text-xl md:text-5xl font-bold text-primary-orange relative pl-6 pb-3">
              Need Help? Our Customer Care Team is Here 24/7

            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 pl-6">
            Reach us through our dedicated support channels. We'll respond promptly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pl-6 mt-12">
          {/* Hotlines - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {hotlines.map((hotline, index) => (
              <div key={index} className="text-md md:text-xl text-dark-charcoal">
                <span className="font-bold">{hotline.country} Hotline:</span>{' '}
                <a
                  href={`tel:${hotline.phone.replace(/\s/g, '').replace(/[()]/g, '').replace(/-/g, '')}`}
                  className='font-normal hover:text-primary-orange transition-colors'
                >
                  {hotline.phone}
                </a>
                <span className="mx-2 font-bold">•</span>
                <a
                  href={`mailto:${hotline.email}`}
                  className='font-normal hover:text-primary-orange transition-colors'
                >
                  {hotline.email}
                </a>
              </div>
            ))}
          </motion.div>

          {/* Buttons - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto"
          >
            <motion.a
              href="tel:+254202604356"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-primary-orange text-dark-charcoal px-10 py-4 rounded-full font-normal shadow-lg hover:shadow-xl transition-all uppercase text-sm md:text-base min-w-[200px]"
            >
              <span>CALL HOTLINE</span>
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-transparent border border-dark-charcoal text-dark-charcoal hover:bg-dark-charcoal hover:text-white px-10 py-4 rounded-full font-normal transition-all uppercase text-sm md:text-base min-w-[200px]"
            >
              <span>Learn more</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Standards & Escalation Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pl-6"
        >
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
            We operate with integrity and align with international standards including ICoCA and ISO 18788:2015. For urgent escalation, contact{' '}
            <a
              href="mailto:escalations@sgasecurity.com"
              className="text-primary-orange hover:opacity-80 transition-opacity font-bold underline underline-offset-4 decoration-primary-orange/30"
            >
              escalations@sgasecurity.com
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

