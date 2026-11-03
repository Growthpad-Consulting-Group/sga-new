'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useCVModal } from '@/contexts/CVModalContext'
import Button from '@/components/ui/Button'

export default function JoinOurMission(): React.JSX.Element {
  const { openModal } = useCVModal()
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

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
              <Button href="/careers" variant="solid" size="small">
                View Open Roles
              </Button>
              <Button onClick={openModal} variant="light" size="small">
                Send Us Your CV
              </Button>
            </div>

            {/* Team Image at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              ref={imageRef}
              className="relative w-full h-[250px] md:h-[450px] mt-6 overflow-hidden rounded-2xl"
            >
              {/* Parallax: the image is taller than its frame and moves slightly on scroll */}
              <motion.div style={{ y }} className="absolute inset-x-0 top-[-10%] bottom-[-10%]">
                <Image
                  src="/images/careers/hero.jpg"
                  alt="SGA Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

