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
      <section id="hero" className="bg-white text-dark-charcoal pt-16 sm:pt-20 pb-20 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
            >
              <h3 className="text-sm md:text-base font-bold text-navy-blue tracking-wide">
                Industrial Detail • {countryName}
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange">
                {industryName}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {heroDescription}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-primary-orange/90 transition-colors"
                  >
                    Request quote
                  </Link>
                </motion.div>
                <motion.a
                  href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-navy-blue text-navy-blue px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-navy-blue hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Icon icon="streamline-sharp:emergency-call-remix" className="w-4 h-4" />
                  <span>Emergency: {emergencyPhone}</span>
                </motion.a>
              </div>

              {/* Explore More Animated Arrow - Middle of Left Column */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="pt-4"
              >
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    const nextSection = document.querySelector('#overview') || document.querySelector('section:nth-of-type(2)')
                    if (nextSection) {
                      nextSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <span className="text-sm text-gray-700 uppercase font-medium">Explore more</span>
                  <Icon 
                    icon="material-symbols-light:arrow-circle-down-outline-rounded" 
                    className="w-6 h-6 text-navy-blue"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px]"
            >
              <Image
                src={heroImage}
                alt={`${industryName} Security - ${heroTitle}`}
                fill
                className="object-cover rounded-lg"
                priority
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

      {/* Overview Section */}
      <section id="overview" className=" flex items-center justify-center bg-light-grey text-dark-charcoal py-16 sm:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
                <span>{overviewTitle}</span>
                <span 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                    height: '1px'
                  }}
                ></span>
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {overviewDescription}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-full min-h-[350px] lg:min-h-[450px]"
            >
              <Image
                src={overviewImage}
                alt={`${industryName} Security Overview`}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <DecorativePattern 
            className="transition-none" 
            static={true}
            colors={['bg-red-600', 'bg-green-600', 'bg-black']}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-snap flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
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
              <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
                <span>{servicesTitle}</span>
                <span 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                    height: '1px'
                  }}
                ></span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-orange rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

