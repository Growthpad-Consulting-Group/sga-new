'use client'

import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DecorativePattern from './DecorativePattern'

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
  decorativePatternColors = null,
  decorativePatternLineColor = null,
  staticPattern = false
}) {
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
      <section id="about" className="section-snap flex items-center justify-center bg-light-grey relative pb-0 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {smallTitle && (
                <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  {smallTitle}
                </p>
              )}
              {h3Title && (
                <h3 className="text-xl md:text-2xl font-bold text-navy-blue relative pb-3">
                  {h3Title}
                  <span 
                    className="absolute bottom-0 left-0 h-1 w-3/4"
                    style={{
                      background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                      height: '3px'
                    }}
                  ></span>
                </h3>
              )}
              {h2Title && (
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {h2Title}
                </h2>
              )}
              {customDescription && (
                <p className="text-base md:text-lg text-dark-charcoal leading-relaxed">
                  {customDescription}
                </p>
              )}
              {buttonText && (
                <motion.a
                  href={buttonHref}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-sm uppercase hover:bg-primary-orange transition-colors mt-3"
                >
                  {buttonText}
                </motion.a>
              )}
              <div className="flex flex-wrap gap-6 mt-8 pt-6">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-navy-blue">24/7</span>
                  <span className="text-xs text-dark-charcoal mt-1">Control Room</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-navy-blue">50+ yrs</span>
                  <span className="text-xs text-dark-charcoal mt-1">Experience</span>
                </div>
                {!hideCountriesStat && (
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-navy-blue">3</span>
                    <span className="text-xs text-dark-charcoal mt-1">countries</span>
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
                className="relative w-full h-[320px] md:h-[380px] rounded-lg overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt={h2Title || 'About SGA'}
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
        <DecorativePattern circleCount={35} colors={decorativePatternColors} lineColor={decorativePatternLineColor} static={staticPattern} />
      </section>
    )
  }

  return (
    <SectionWrapper id="about" className="bg-light-grey">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">
            {content.title}
          </h2>
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

