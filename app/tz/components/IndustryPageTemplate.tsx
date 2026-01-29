'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import DecorativePattern from '@/components/DecorativePattern'

export default function IndustryPageTemplate({
  industryName,
  industryIcon,
  heroImage,
  heroTitle,
  heroDescription,
  overviewTitle,
  overviewDescription,
  overviewImage,
  servicesTitle,
  servicesDescription,
  services,
  relatedServices,
  whyChooseTitle,
  whyChooseDescription,
  whyChoosePoints,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  countryCode = 'ke',
  industryType = 'individuals', // 'individuals' or 'corporate'
}) {
  const countryNames = {
    ke: 'Kenya',
    ug: 'Uganda',
    tz: 'Tanzania',
  }
  const countryName = countryNames[countryCode] || 'Kenya'
  
  const emergencyPhones = {
    ke: '0733 700 500',
    ug: '0717 800 752',
    tz: '0784 700 299',
  }
  const emergencyPhone = emergencyPhones[countryCode] || emergencyPhones.ke

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
            className="relative w-full max-w-7xl mx-auto h-[280px] sm:h-[380px] md:h-[450px] lg:h-[520px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={heroImage}
              alt={`${industryName} Security - ${heroTitle}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Decorative Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <DecorativePattern 
            className="transition-none" 
            static={true}
            colors={['bg-red-600', 'bg-green-600', 'bg-black']}
          />
        </div>
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
              className="relative w-full h-[350px] sm:h-[450px] lg:h-full rounded-xl overflow-hidden shadow-xl order-2 lg:order-2"
            >
              <Image
                src={heroImage}
                alt="Our Key Solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Decorative Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <DecorativePattern 
            className="transition-none" 
            static={true}
            colors={['bg-red-600', 'bg-green-600', 'bg-black']}
          />
        </div>
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

        {/* Decorative Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <DecorativePattern 
            className="transition-none" 
            static={true}
            colors={['bg-red-600', 'bg-green-600', 'bg-black']}
          />
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-snap flex items-center justify-center bg-light-grey relative pb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary-orange relative pb-3 flex items-center justify-between">
                  <span>Related Services</span>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full text-navy-blue border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                      <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                    </button>
                    <button className="w-8 h-8 rounded-full text-navy-blue border-2 border-navy-blue flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-colors">
                      <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                    </button>
                  </div>
                  <span 
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                      height: '1px'
                    }}
                  ></span>
                </h3>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pb-12">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
                >
                  {/* Featured Image - Clickable */}
                  <motion.a
                    href={service.link || '#'}
                    whileHover={{ opacity: 0.9 }}
                    className="relative w-full h-48 block cursor-pointer"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.a>
                  
                  <div className="bg-primary-orange p-6 flex flex-col flex-1">
                                       
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {service.summary}
                    </p>

                    {/* Request Quote Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="self-start"
                    >
                      <Link
                        href="/contact"
                        className="inline-block bg-white text-primary-orange px-4 py-2 rounded-full font-semibold text-xs uppercase hover:bg-light-grey transition-colors"
                      >
                        Request Quote
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <DecorativePattern 
            colors={['bg-red-600', 'bg-green-600', 'bg-black']} 
            static={true}
          />
        </section>
      )}

      </>
  )
}

