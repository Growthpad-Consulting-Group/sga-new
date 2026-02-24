'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useCVModal } from '@/contexts/CVModalContext'

export default function JoinOurMission(): React.JSX.Element {
  const { openModal } = useCVModal()

  return (
    <SectionWrapper id="join-our-mission" className="bg-light-grey py-8 md:py-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-navy-blue rounded-2xl p-6 md:p-8"
        >
          <div className="">
            <p className="text-md font-normal text-navy uppercase tracking-wider mb-2">
              Join our mission
            </p>
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-primary-orange capitalize">
                Build a career where security matters
              </h2>
            </div>
            <p className="text-sm md:text-xl text-dark-charcoal leading-relaxed mb-2">
              From field operations to technology and leadership roles — grow with training, mentorship and purpose.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-orange text-white px-8 py-4 border border-primary-orange rounded-full font-semibold text-xs md:text-sm uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                VIEW OPEN ROLES
              </motion.a>
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-dark-charcoal border border-dark-charcoal px-8 py-4 rounded-full font-semibold text-xs md:text-sm uppercase hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors"
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
              className="relative w-full h-[250px] md:h-[450px] mt-6"
            >
              <Image
                src="/images/group/our-mission.png"
                alt="SGA Team"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

