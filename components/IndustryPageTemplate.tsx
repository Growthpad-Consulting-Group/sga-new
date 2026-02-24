'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import SectionSeparator from '@/components/SectionSeparator'

interface IndustryPageTemplateProps {
  industryName?: string
  industryIcon?: string
  heroImage?: string
  heroTitle?: string
  heroDescription?: string
  overviewTitle?: string
  overviewDescription?: string
  overviewImage?: string
  servicesTitle?: string
  servicesDescription?: string
  services?: any[]
  relatedServices?: any[]
  whyChooseTitle?: string
  whyChooseDescription?: string
  whyChoosePoints?: string[]
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  countryCode?: 'ke' | 'ug' | 'tz' | string
  industryType?: 'individuals' | 'corporate'
}

export default function IndustryPageTemplate({
  industryName = '',
  industryIcon = '',
  heroImage = '',
  heroTitle = '',
  heroDescription = '',
  overviewTitle = '',
  overviewDescription = '',
  overviewImage = '',
  servicesTitle = '',
  servicesDescription = '',
  services = [],
  relatedServices = [],
  whyChooseTitle = '',
  whyChooseDescription = '',
  whyChoosePoints = [],
  ctaTitle = '',
  ctaDescription = '',
  ctaButtonText = '',
  ctaButtonLink = '',
  countryCode = 'ke',
  industryType = 'individuals',
}: IndustryPageTemplateProps) {
  const countryNames: Record<string, string> = {
    ke: 'Kenya',
    ug: 'Uganda',
    tz: 'Tanzania',
  }
  const countryName = countryNames[countryCode] || 'Kenya'

  const emergencyPhones: Record<string, string> = {
    ke: '0733 700 500',
    ug: '0717 800 752',
    tz: '0784 700 299',
  }
  const emergencyPhone = emergencyPhones[countryCode] || emergencyPhones.ke

  const [relatedServicesIndex, setRelatedServicesIndex] = useState(0)

  const handlePrevRelated = () => {
    if (!relatedServices) return
    setRelatedServicesIndex((prev) => (prev === 0 ? Math.max(0, relatedServices.length - 3) : prev - 1))
  }

  const handleNextRelated = () => {
    if (!relatedServices) return
    setRelatedServicesIndex((prev) => (prev >= relatedServices.length - 3 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="bg-white text-dark-charcoal pt-16 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12 lg:py-16 space-y-6 sm:space-y-8">
            {/* Orange Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              <span className="bg-primary-orange text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide">
                Industry Focus: {industryType === 'corporate' ? 'Corporate' : 'Individuals'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-blue leading-tight"
            >
              {heroTitle}
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl"
            >
              {heroDescription}
            </motion.p>

            {/* Flexed List with Check Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-4 pt-2"
            >
              {[
                '24/7 Alarm Monitoring',
                'Rapid Response Teams',
                'Professional Guarding',
                'Remote CCTV Surveillance'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <Icon
                    icon="icon-park-outline:check-one"
                    className="w-5 h-5 md:w-6 md:h-6 text-primary-orange flex-shrink-0"
                  />
                  <span className="text-sm md:text-base text-gray-800 font-medium whitespace-nowrap">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Full Width Image at Bottom */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full max-w-7xl mx-auto h-[280px] sm:h-[380px] md:h-[450px] lg:h-[520px] shadow-xl"
          >
            <Image
              src={heroImage}
              alt={`${industryName} Security - ${heroTitle}`}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </div>

        <SectionSeparator />
      </section>

      {/* Our Key Solutions Section */}
      <section className="bg-white text-dark-charcoal py-16 sm:py-20 lg:py-24 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-orange relative pb-3">
              <span>Our Key Solutions</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left Column - Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 order-1 lg:order-1 h-full">
              {[
                {
                  title: '24/7 Alarm Monitoring',
                  description: 'Linked to SGA\'s national control centre for instant alerts and verified dispatch.'
                },
                {
                  title: 'Rapid Response Teams',
                  description: 'Strategically deployed mobile units for immediate neighbourhood response.'
                },
                {
                  title: 'Professional Guarding',
                  description: 'Trained officers for access control, patrols, and visitor screening for homes and estates.'
                },
                {
                  title: 'Remote CCTV Surveillance',
                  description: 'Real-time monitoring with cloud access for complete visibility.'
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-orange rounded-xl p-6 lg:p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-full shadow-xl order-2 lg:order-2"
            >
              <Image
                src={heroImage}
                alt="Our Key Solutions"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        <SectionSeparator />
      </section>

      {/* The SGA Advantage Section */}
      <section className="bg-white text-dark-charcoal py-16 sm:py-20 lg:py-24 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12 lg:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-orange relative pb-3 inline-block">
              <span>The SGA Advantage</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                  height: '1px'
                }}
              ></span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {[
              {
                title: '50+ Years Experience',
                description: 'Decades of trusted security solutions in East Africa.'
              },
              {
                title: '24/7 Verified Response',
                description: 'Always on standby with swift, professional assistance.'
              },
              {
                title: 'Trained & Vetted Personnel',
                description: 'Highly skilled guards ensuring your complete safety.'
              },
              {
                title: 'Regional Presence',
                description: 'Operating seamlessly across Kenya, Uganda & Tanzania.'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-orange rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center flex-1 min-w-[240px] max-w-[270px]"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 lg:mb-4">
                  {advantage.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionSeparator />
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="flex items-center justify-center bg-white relative pb-0 pt-16 sm:pt-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 flex flex-col justify-center items-start text-left"
              >
                <p className="text-md font-medium text-dark-charcoal uppercase tracking-wider mb-2">
                  Related Services
                </p>
                <div className="section-title-container w-full flex items-end justify-between">
                  <h3 className="section-title text-xl md:text-4xl font-bold text-primary-orange">
                    More Industry Solutions.
                  </h3>
                  <div className="flex items-center gap-3 mb-1">
                    <button
                      onClick={handlePrevRelated}
                      className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                    >
                      <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextRelated}
                      className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                    >
                      <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <p className="text-base font-normal md:text-2xl text-dark-charcoal max-w-4xl mt-4">
                  Complement your industry security with our integrated range of services designed for maximum protection and efficiency.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pb-12">
                {relatedServices.slice(relatedServicesIndex, relatedServicesIndex + 3).map((service, index) => (
                  <motion.div
                    key={relatedServicesIndex + index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all flex flex-col group h-full"
                  >
                    {/* Featured Image - Clickable */}
                    <motion.a
                      href={service.link || '#'}
                      whileHover={{ opacity: 0.9 }}
                      className="relative w-full h-56 block cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </motion.a>

                    <div className="bg-primary-orange p-6 lg:p-8 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                        {service.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-white text-lg md:text-2xl leading-relaxed mb-6 flex-grow">
                        {service.summary}
                      </p>

                      {/* Request Quote Button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-start mt-auto"
                      >
                        <Link
                          href={service.link || "/contact"}
                          className="inline-block bg-white text-primary-orange px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg shadow-black/10"
                        >
                          Request a Quote
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <SectionSeparator />
        </section>
      )}

    </>
  )
}

