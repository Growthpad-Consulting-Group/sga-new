'use client'

import SectionWrapper from '@/components/SectionWrapper'
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
        className="w-full max-w-8xl mx-auto "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-navy-blue rounded-2xl p-6 md:p-8"
        >
          <div className="">
            <p className="text-sm xl:text-base font-medium text-navy uppercase tracking-wider mb-2">
              Join our mission
            </p>
            <div className="section-title-container">
              <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange capitalize">
                Build a career where security matters
              </h2>
            </div>
            <p className="text-sm md:text-2xl lg:text-base xl:text-2xl text-dark-charcoal leading-relaxed mb-2">
              From field operations to technology and leadership roles — grow with training, mentorship and purpose.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/careers"
                className="bg-primary-orange text-white px-6 py-3 border border-primary-orange rounded-full font-semibold text-xs md:text-sm hover:bg-white hover:text-primary-orange shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Open Roles
              </a>
              <button
                onClick={openModal}
                className="bg-transparent text-dark-charcoal border border-dark-charcoal px-5 py-1.5 xl:px-6 xl:py-3 rounded-full font-semibold text-xs xl:text-sm hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Send Us Your CV
              </button>
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
                src="/images/careers/hero.jpg"
                alt="SGA Team"
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

