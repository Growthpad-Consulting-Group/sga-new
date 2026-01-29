'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import DecorativePattern from '@/components/DecorativePattern'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

export default function ServicePageTemplate({
  serviceName,
  serviceIcon,
  heroImage,
  heroTitle,
  heroDescription,
  overviewTitle,
  overviewDescription,
  overviewImage,
  featuresTitle,
  featuresDescription,
  features,
  relatedServices,
  whyChooseTitle,
  whyChooseDescription,
  whyChoosePoints,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  countryCode = 'tz',
  serviceType = 'Individual', // 'Individual' or 'Corporate'
}) {
  const countryNames = {
    ke: 'Kenya',
    ug: 'Uganda',
    tz: 'Tanzania',
  }
  const countryName = countryNames[countryCode] || 'Tanzania'
  
  const emergencyPhones = {
    ke: '0733 700 500',
    ug: '0717 800 752',
    tz: '0784 700 299',
  }
  const emergencyPhone = emergencyPhones[countryCode] || emergencyPhones.tz
  const { openModal } = useEnquiryModal()

  const advantagePoints = [
    'Instant alarm and panic signal relay to our 24/7 Control Room.',
    'GPS-tracked units dispatched based on your location and alert type.',
    'First responders trained in first aid, fire safety, and conflict control.',
    'Seamless coordination with Police, Fire, and Ambulance services.',
    'Verified alerts via CCTV or mobile panic app to avoid false alarms.',
    'Digital reporting with photos, timestamps, and follow-up actions.',
  ]

  const stats = [
    { value: '24/7', label: 'Emergency Dispatch' },
    { value: '<5min', label: 'Average Response Time' },
    { value: 'GPS', label: 'Live Tracking & Updates' },
    { value: '100%', label: 'Verified Response' },
  ]

  const handlePoints = [
    'Panic & intrusion alarms at home',
    'Perimeter breaches or suspicious activity',
    'Fire or smoke emergencies',
    'Medical first-aid & ambulance coordination',
    'Break-ins, theft, or vandalism',
    'Home power/UPS system alerts',
  ]

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Alert Received',
      description: `Panic, alarm or CCTV signal triggers dispatch from our 24/7 ${countryName} Control Room.`,
      icon: 'mdi:alert-circle',
    },
    {
      step: 2,
      title: 'Unit Deployed',
      description: 'Nearest GPS-tracked team mobilizes; you get a live ETA via call/SMS.',
      icon: 'mdi:car-multiple',
    },
    {
      step: 3,
      title: 'Stabilize',
      description: 'Responders secure the scene, provide first-aid and de-escalate threats.',
      icon: 'mdi:shield-check',
    },
    {
      step: 4,
      title: 'Report',
      description: 'Digital report with photos and recommendations is shared with you.',
      icon: 'mdi:file-document-check',
    },
  ]

  const responsePackages = [
    {
      title: 'Essential Home Response',
      features: [
        'Rapid panic & alarm response',
      ],
    },
    {
      title: 'Pro Home Response',
      features: [
        'Everything in Essential',
        'CCTV verification',
        'Monthly check-ins',
      ],
    },
    {
      title: 'Family+ Response',
      features: [
        'Priority SLA',
        'On-site standby when required',
        'Annual safety drill',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="bg-white text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-20 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
            >
              {/* Service Type Badge */}
              <div className="mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${serviceType === 'Individual' ? 'bg-primary-orange text-white' : 'bg-primary-orange text-white'}`}>
                  For {serviceType}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-navy-blue tracking-wide">
                {countryName} · {serviceType} Service
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange">
                {serviceName}
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
                alt={`${serviceName} Service - ${heroTitle}`}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl md:text-3xl font-bold text-primary-orange relative pb-3">
                <span>SGA Response Advantage</span>
                <span 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                    height: '1px'
                  }}
                ></span>
              </h2>
              <ul className="space-y-4">
                {advantagePoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed"
                  >
                    <Icon 
                      icon="si:check-circle-fill" 
                      className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" 
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow"
              >
                Request Quote
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-orange rounded-full aspect-square flex flex-col items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/90 text-center font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
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

      {/* What We Handle Section */}
      <section className="flex items-center justify-center bg-primary-orange text-white py-16 sm:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl md:text-3xl font-bold text-white relative pb-3">
                <span>What We Handle</span>
                <span 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    background: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 70%, transparent 100%)',
                    height: '1px'
                  }}
                ></span>
              </h2>
              <ul className="space-y-4">
                {handlePoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm md:text-base text-white/90 leading-relaxed"
                  >
                    <Icon 
                      icon="icon-park-outline:check-one" 
                      className="w-5 h-5 text-white flex-shrink-0 mt-0.5" 
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
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
                alt={`${serviceName} - What We Handle`}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
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
                <span>How It Works</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-orange rounded-lg p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow relative min-h-[280px] flex flex-col"
              >
                {/* Step Badge */}
                <div className="absolute -top-3 left-3 bg-navy-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                  Step {step.step}
                </div>
                {/* Icon */}
                <div className="mb-5 mt-6 flex items-center justify-center lg:justify-start">
                  <Icon 
                    icon={step.icon} 
                    className="w-10 h-10 lg:w-12 lg:h-12 text-white" 
                  />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-white/95 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </motion.div>
            ))}
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

      {/* Response Packages Section */}
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
                <span>Response Packages</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {responsePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-orange rounded-lg p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <h3 className="text-lg lg:text-xl font-bold text-white mb-5">
                  {pkg.title}
                </h3>
                <ul className="space-y-3 flex-grow mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm lg:text-base text-white/95 leading-relaxed"
                    >
                      <Icon 
                        icon="icon-park-outline:check-one" 
                        className="w-5 h-5 text-white flex-shrink-0 mt-0.5" 
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-orange px-4 py-2 rounded-full font-semibold text-xs md:text-sm shadow-md hover:shadow-lg transition-shadow"
                  >
                    Request Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
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

      {/* Why Choose Section */}
      {whyChoosePoints && whyChoosePoints.length > 0 && (
        <section className="section-snap flex items-center justify-center bg-light-grey text-dark-charcoal py-16 sm:py-20 relative">
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
                  <span>{whyChooseTitle}</span>
                  <span 
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      background: 'linear-gradient(to right, #00043E 0%, #00043E 70%, transparent 100%)',
                      height: '1px'
                    }}
                  ></span>
                </h2>
                {whyChooseDescription && (
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {whyChooseDescription}
                  </p>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {whyChoosePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-bold text-navy-blue mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
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
      )}

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-snap flex items-center justify-center bg-white relative pb-0">
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
                        href={service.link || "/contact"}
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

