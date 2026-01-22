'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useCVModal } from '@/contexts/CVModalContext'

export default function JoinOurMission() {
  const { openModal } = useCVModal()

  return (
    <SectionWrapper id="join-our-mission" className="bg-light-grey py-8 md:py-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-navy-blue rounded-lg p-6 md:p-8"
        >
          <div className="space-y-4 md:space-y-5">
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              Join our mission
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-navy-blue relative pb-2">
              Build a career where security matters
              <span 
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h2>
            <p className="text-sm md:text-base text-dark-charcoal leading-relaxed">
              From field operations to technology and leadership roles — grow with training, mentorship and purpose.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-orange text-white px-5 py-2.5 rounded-full font-semibold text-xs md:text-sm uppercase shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                VIEW OPEN ROLES
                <Icon 
                  icon="mdi:arrow-right" 
                  className="w-4 h-4"
                />
              </motion.a>
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-navy-blue border-2 border-navy-blue px-5 py-2.5 rounded-full font-semibold text-xs md:text-sm uppercase hover:bg-navy-blue hover:text-white transition-colors"
              >
                SEND US YOUR CV
              </motion.button>
            </div>

            {/* Team Image at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden mt-6"
            >
              <Image
                src="/images/group/our-mission.png"
                alt="SGA Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

