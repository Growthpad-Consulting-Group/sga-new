'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CountryContent {
  title: string
  description: string
  points: string[]
}

interface AboutProps {
  countryName?: string
  countryContent?: CountryContent | null
  customLayout?: boolean
  smallTitle?: string | null
  h3Title?: string | null
  h2Title?: string | React.ReactNode | null
  customDescription?: string | null
  buttonText?: string | null
  buttonHref?: string
  imageUrl?: string | null
  hideCountriesStat?: boolean
}

export default function About({
  countryName = 'SGA Group',
  countryContent = null,
  customLayout = false,
  smallTitle = null,
  h3Title = null,
  h2Title = null,
  customDescription = null,
  buttonText = null,
  buttonHref = '#about',
  imageUrl = null,
  hideCountriesStat = false,
}: AboutProps) {
  const defaultContent = {
    title: 'About SGA Security Group',
    description: 'SGA Security Group is a leading provider of comprehensive security solutions across East Africa. With decades of experience, we deliver trusted security services that protect businesses, communities, and critical infrastructure.',
    points: [
      'Industry-leading security expertise',
      '24/7 monitoring and response',
      'Certified and trained professionals',
      'Cutting-edge technology solutions',
    ],
  }

  const content = countryContent || defaultContent

  if (customLayout) {
    return (
      <section id="about" className="section-snap flex items-center justify-center bg-light-grey relative pb-0 overflow-x-hidden min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 flex flex-col justify-center items-start"
            >
              {smallTitle && (
                <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider">
                  {smallTitle}
                </p>
              )}
              {h3Title && (
                <div className="section-title-container w-full">
                  <h3 className="section-title text-xl md:text-4xl font-bold text-primary-orange">
                    {h3Title}
                  </h3>
                </div>
              )}
              {h2Title && (
                <h2 className="text-2xl md:text-5xl font-bold text-primary-orange pt-4">
                  {h2Title}
                </h2>
              )}
              {customDescription && (
                <p className="text-base font-normal md:text-2xl text-dark-charcoal pb-4">
                  {customDescription}
                </p>
              )}
              {buttonText && (
                <motion.a
                  href={buttonHref}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary-orange text-white px-10 py-4 rounded-full font-semibold text-md uppercase hover:bg-primary-orange/90 transition-colors"
                >
                  {buttonText}
                </motion.a>
              )}
              <div className="flex flex-wrap gap-20 mt-8 pt-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-5xl font-bold text-primary-orange">24/7</span>
                  <span className="text-lg text-dark-charcoal mt-1 text-center">Control Room</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-5xl font-bold text-primary-orange">50+ yrs</span>
                  <span className="text-lg text-dark-charcoal mt-1 text-center">Experience</span>
                </div>
                {!hideCountriesStat && (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-5xl font-bold text-primary-orange">3</span>
                    <span className="text-lg text-dark-charcoal mt-1 text-center">countries</span>
                  </div>
                )}
              </div>
            </motion.div>

            {imageUrl && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center h-full w-full"
              >
                <div className="relative w-full h-[450px] md:h-full rounded-2xl overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={typeof h2Title === 'string' ? h2Title : 'About SGA'}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <SectionWrapper id="about" className="bg-light-grey min-h-[85vh]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title-container">
            <h2 className="section-title text-4xl md:text-5xl font-bold text-primary-orange mb-6">
              {content.title}
            </h2>
          </div>
          <p className="text-lg text-dark-charcoal mb-6 leading-relaxed">
            {content.description}
          </p>
          <ul className="space-y-3">
            {content.points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-primary-orange mr-3 text-xl">✓</span>
                <span className="text-dark-charcoal">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-navy-blue rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-light-grey leading-relaxed">
              To provide world-class security solutions that enable our clients to focus on their core business, knowing they are protected by industry-leading professionals and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

