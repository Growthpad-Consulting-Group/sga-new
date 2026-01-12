'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SectionWrapper from './SectionWrapper'

const hotlines = [
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

export default function CustomerCare() {
  return (
    <SectionWrapper id="customer-care" className="bg-white relative py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
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
              className="absolute -top-2 -left-2 w-8 h-8 text-primary-orange font-bold" 
              style={{ strokeWidth: 3 }}
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-orange relative pl-6 pb-3">
              Need Help? Our Customer Care Team is Here 24/7
              <span 
                className="absolute bottom-0 left-6 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 pl-6">
            Reach us through our dedicated support channels. We'll respond promptly.
          </p>
        </motion.div>

        {/* Hotlines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4 pl-6"
        >
          {hotlines.map((hotline, index) => (
            <div key={index} className="text-sm md:text-base text-gray-700">
              <span className="font-semibold">{hotline.country} Hotline:</span>{' '}
              <a 
                href={`tel:${hotline.phone.replace(/\s/g, '').replace(/[()]/g, '').replace(/-/g, '')}`}
                className="text-primary-orange hover:text-navy-blue transition-colors"
              >
                {hotline.phone}
              </a>
              {' • '}
              <a 
                href={`mailto:${hotline.email}`}
                className="text-primary-orange hover:text-navy-blue transition-colors"
              >
                {hotline.email}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Standards Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8 pl-6"
        >
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We operate with integrity and align with international standards including ICoCA and ISO 18788:2015. For urgent escalation, contact{' '}
            <a 
              href="mailto:escalations@sgasecurity.com"
              className="text-primary-orange hover:text-navy-blue transition-colors"
            >
              escalations@sgasecurity.com
            </a>
            .
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 pl-6"
        >
          <motion.a
            href="tel:+254202604356"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-primary-orange text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Icon icon="mdi:phone" className="w-5 h-5" />
            <span>CALL HOTLINE</span>
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <span>Learn more</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

