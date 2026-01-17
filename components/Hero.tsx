'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import SectionWrapper from './SectionWrapper'

interface CustomButton {
  label?: string
  href: string
  className?: string
  style?: React.CSSProperties
  simple?: boolean
  readMoreText?: string
  arrowIcon?: string
}

interface HeroProps {
  countryName?: string
  countryDescription?: string
  whiteBackground?: boolean
  orangeBackground?: boolean
  twoCardLayout?: boolean
  imageUrl?: string
  imageUrl2?: string | null
  images?: string[] | null
  customH3?: string | null
  customTitle?: string | null
  customDescription?: string | null
  showToggle?: boolean
  customButtons?: CustomButton[] | null
}

export default function Hero({ 
  countryName = 'SGA Group', 
  countryDescription = 'Leading security solutions across East Africa',
  whiteBackground = false,
  orangeBackground = false,
  twoCardLayout = false,
  imageUrl = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
  imageUrl2 = null,
  images = null,
  customH3 = null,
  customTitle = null,
  customDescription = null,
  showToggle = false,
  customButtons = null
}: HeroProps) {
  const [toggleValue, setToggleValue] = useState('corporate')
  const bgClass = orangeBackground
    ? 'bg-primary-orange text-white'
    : whiteBackground 
    ? 'bg-white text-dark-charcoal' 
    : 'bg-gradient-to-br from-navy-blue via-navy-blue/90 to-dark-charcoal text-white'
  
  const textColorClass = orangeBackground ? 'text-white' : whiteBackground ? 'text-dark-charcoal' : 'text-white'
  const secondaryTextColorClass = orangeBackground ? 'text-white/90' : whiteBackground ? 'text-gray-700' : 'text-light-grey'
  
  if (twoCardLayout) {
    return (
      <SectionWrapper id="hero" className={`${bgClass} items-start pt-16 sm:pt-20 relative`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Card - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {customH3 && (
              <h3 className={`text-sm md:text-base font-bold uppercase tracking-wider ${secondaryTextColorClass}`}>
                {customH3}
              </h3>
            )}
            {customTitle && orangeBackground ? (
              <h2 className={`text-3xl md:text-4xl font-bold ${textColorClass}`}>
                {customTitle}
              </h2>
            ) : (
              <h1 className={`text-3xl md:text-4xl font-bold ${textColorClass}`}>
                {customTitle || (
                  <>
                    SGA Security
                    {countryName !== 'SGA Group' && (
                      <span className="block text-primary-orange mt-2">{countryName}</span>
                    )}
                  </>
                )}
              </h1>
            )}
            
            <p className={`text-lg md:text-xl ${secondaryTextColorClass} max-w-2xl`}>
              {customDescription || countryDescription}
            </p>

            {showToggle && (
              <div className="relative inline-flex items-center bg-gray-200 rounded-full p-1">
                <button
                  onClick={() => setToggleValue('individual')}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    toggleValue === 'individual'
                      ? 'text-white'
                      : secondaryTextColorClass
                  }`}
                >
                  Individual
                </button>
                <button
                  onClick={() => setToggleValue('corporate')}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    toggleValue === 'corporate'
                      ? 'text-white'
                      : secondaryTextColorClass
                  }`}
                >
                  Corporate
                </button>
                <span
                  className={`absolute top-1 bottom-1 rounded-full bg-primary-orange transition-all duration-300 ${
                    toggleValue === 'corporate' ? 'left-1/2 right-1' : 'left-1 right-1/2'
                  }`}
                />
              </div>
            )}

            {customButtons ? (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                {customButtons.map((button, index) => {
                  const label = button.label || ''
                  const parts = label.split('Explore for ')
                  const topText = parts.length > 1 ? 'Explore for' : ''
                  const mainText = parts.length > 1 ? parts[1] : label
                  
                  // Check if button should be rendered simply (for rounded-full buttons)
                  const isSimple = button.simple !== false && (button.className?.includes('rounded-full') || button.simple === true)
                  
                  // Independent styling for each button
                  const buttonClassName = button.className || `group relative bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-lg font-semibold transition-all text-left flex flex-col hover:bg-primary-orange w-full sm:flex-1`
                  
                  // Simple button structure for rounded-full buttons
                  if (isSimple) {
                    return (
                      <motion.a
                        key={`button-${index}`}
                        href={button.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={buttonClassName}
                        style={button.style}
                      >
                        {mainText}
                      </motion.a>
                    )
                  }
                  
                  // Complex button structure with hover effects
                  // Check if button has navy background (active state)
                  const hasNavyBg = buttonClassName.includes('bg-navy-blue')
                  const hoverTextColor = hasNavyBg ? 'group-hover:text-white' : (orangeBackground ? 'group-hover:text-navy-blue' : 'group-hover:text-white')
                  const readMoreTextColor = hasNavyBg ? 'text-white' : (orangeBackground ? 'text-navy-blue' : 'text-white')
                  
                  return (
                  <motion.a
                      key={`button-${index}`}
                    href={button.href}
                      whileTap={{ scale: 0.98 }}
                      className={buttonClassName}
                      style={button.style}
                    >
                      <div className={`transition-colors duration-300 ${hoverTextColor}`}>
                        {topText && (
                          <span className="text-sm mb-1 block">{topText}</span>
                        )}
                        <span className="text-xl font-bold block">{mainText}</span>
                      </div>
                      <span className={`flex items-center gap-2 ${readMoreTextColor} opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 mt-0 group-hover:mt-3 overflow-hidden`}>
                        <span className="text-lg">{button.readMoreText || 'Read More'}</span>
                        <Icon icon={button.arrowIcon || "mdi:arrow-right"} className="w-5 h-5" />
                      </span>
                  </motion.a>
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${whiteBackground ? 'bg-gray-100 text-dark-charcoal border-2 border-gray-300' : 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/20'} px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-colors text-center`}
                >
                  Our Services
                </motion.a>
              </div>
            )}
          </motion.div>

          {/* Right Card - Two Images as Marquees in Columns */}
          {images && images.length > 0 ? (
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-lg overflow-hidden flex flex-row">
              {/* Top feather effect */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
              {/* Bottom feather effect */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
              {/* Left Column - Scrolls Down */}
              <div className="relative w-1/2 h-full rounded-l-lg overflow-hidden -mr-1">
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{
                    y: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {images.slice(0, Math.ceil(images.length / 2)).map((img, idx) => (
                    <div key={`left-${idx}`} className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                      <Image
                        src={img}
                        alt={`${countryName} Security Services ${idx + 1}`}
                        fill
                        className="object-contain"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {images.slice(0, Math.ceil(images.length / 2)).map((img, idx) => (
                    <div key={`left-dup-${idx}`} className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                      <Image
                        src={img}
                        alt={`${countryName} Security Services ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Right Column - Scrolls Up */}
              <div className="relative w-1/2 h-full rounded-r-lg overflow-hidden -ml-1">
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{
                    y: ["-50%", "0%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {images.slice(Math.ceil(images.length / 2)).map((img, idx) => (
                    <div key={`right-${idx}`} className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                      <Image
                        src={img}
                        alt={`${countryName} Security Services ${Math.ceil(images.length / 2) + idx + 1}`}
                        fill
                        className="object-contain"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {images.slice(Math.ceil(images.length / 2)).map((img, idx) => (
                    <div key={`right-dup-${idx}`} className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                      <Image
                        src={img}
                        alt={`${countryName} Security Services ${Math.ceil(images.length / 2) + idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          ) : imageUrl2 ? (
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-lg overflow-hidden flex flex-row gap-4">
              {/* First Image Marquee - Left Column - Scrolls Down */}
              <div className="relative w-1/2 h-full rounded-lg overflow-hidden">
                <motion.div
                  className="flex flex-col"
                  animate={{
                    y: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={`${countryName} Security Services`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={`${countryName} Security Services`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Second Image Marquee - Right Column - Scrolls Up */}
              <div className="relative w-1/2 h-full rounded-lg overflow-hidden">
                <motion.div
                  className="flex flex-col"
                  animate={{
                    y: ["-50%", "0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                    <Image
                      src={imageUrl2}
                      alt={`${countryName} Security Services`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative w-full h-[140px] lg:h-[180px] flex-shrink-0">
                    <Image
                      src={imageUrl2}
                      alt={`${countryName} Security Services`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[350px] lg:h-[450px] rounded-lg overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt={`${countryName} Security Services`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          )}
        </div>
        
        {/* Scroll Down Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('#about') || document.querySelector('section:nth-of-type(2)')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className={`text-sm mb-2 ${secondaryTextColorClass} font-medium`}>Scroll</span>
            <Icon 
              icon="mdi:chevron-down" 
              className={`w-6 h-6 ${secondaryTextColorClass}`}
            />
          </motion.div>
        </motion.div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="hero" className={`${bgClass} items-start pt-0`}>
      <div className="text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          SGA Security
          {countryName !== 'SGA Group' && (
            <span className="block text-primary-orange mt-2">{countryName}</span>
          )}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl md:text-2xl ${secondaryTextColorClass} mb-8 max-w-3xl mx-auto`}
        >
          {countryDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${whiteBackground ? 'bg-gray-100 text-dark-charcoal border-2 border-gray-300' : 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/20'} px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-colors`}
          >
            Our Services
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

