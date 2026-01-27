'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import { navItems, getCountryNavItems, socialLinks, countries } from '@/data/nav'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [countryModalOpen, setCountryModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { openModal } = useEnquiryModal()

  // Determine if we're on a country page and get appropriate nav items
  const isCountryPage = pathname.startsWith('/ke') || pathname.startsWith('/ug') || pathname.startsWith('/tz')
  const currentCountryCode = isCountryPage ? pathname.split('/')[1] : null
  const currentNavItems = isCountryPage && currentCountryCode ? getCountryNavItems(currentCountryCode) : navItems

  // Get country phone number for header
  const getCountryPhone = (countryCode: string | null): string => {
    switch (countryCode) {
      case 'ke': return '+254 111 024000'
      case 'tz': return '+255 754 303076'
      case 'ug': return '+256 772 200 048'
      default: return ''
    }
  }

  // Get country name for header
  const getCountryName = (countryCode: string | null): string => {
    switch (countryCode) {
      case 'ke': return 'KENYA HQ'
      case 'tz': return 'TANZANIA HQ'
      case 'ug': return 'UGANDA HQ'
      default: return ''
    }
  }

  const countryPhone = getCountryPhone(currentCountryCode)
  const countryName = getCountryName(currentCountryCode)

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActiveCountry = (path: string): boolean => {
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  // Consolidated class generators
  const getHeaderClasses = () => {
    const baseClasses = 'fixed left-0 right-0 z-40 transition-all duration-300'
    if (isCountryPage) {
      return isScrolled 
        ? `${baseClasses} top-0 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg`
        : `${baseClasses} top-16 bg-transparent`
    }
    return isScrolled 
      ? `${baseClasses} top-0 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg`
      : `${baseClasses} top-0 bg-white`
  }

  const getTopBarClasses = () => {
    if (isScrolled) return 'h-0 overflow-hidden opacity-0'
    return isCountryPage ? 'bg-transparent text-white' : 'bg-white text-black'
  }

  const getTextColor = (isActive = false) => {
    if (isCountryPage && !isScrolled) {
      return isActive ? 'text-white' : 'text-white/90 hover:text-white'
    }
    return isActive ? 'text-primary-orange' : 'text-black/80 hover:text-primary-orange'
  }

  const getNavTextColor = (isActive = false) => {
    if (isCountryPage && !isScrolled) {
      return isActive ? 'text-white' : 'text-white hover:text-white/80'
    }
    return isActive ? 'text-primary-orange' : 'text-dark-charcoal hover:text-primary-orange'
  }

  const getBorderColor = () => {
    if (isScrolled) return 'border-black/20'
    return isCountryPage ? 'border-white/30' : 'border-black'
  }

  // Common class strings
  const containerClasses = 'max-w-9xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'
  const buttonHoverClasses = 'transition-colors'
  const flagButtonClasses = 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all'
  const mobileMenuItemClasses = 'flex items-center gap-2 py-3 sm:py-3.5 transition-colors text-sm sm:text-base font-nav'

  return (
    <header className={getHeaderClasses()}>
      {/* Top Bar with Social Icons and Flags */}
      <div className={`${getTopBarClasses()} transition-all duration-300`}>
        <div className={containerClasses}>
          <div className="flex items-center justify-between h-10 sm:h-12 text-xs sm:text-sm">
            {/* Social Icons - Left */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${buttonHoverClasses} ${getTextColor()}`}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>

            {/* Country Flags - Right */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Call Number - Only show on country pages */}
              {isCountryPage && countryPhone && (
                <motion.a
                  href={`tel:${countryPhone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`hidden sm:flex items-center gap-1 text-xs font-medium ${buttonHoverClasses} ${getTextColor()}`}
                  aria-label={`Call ${countryPhone}`}
                >
                  <Icon icon="mdi:phone" className="w-3 h-3" />
                  <span>Call: {countryPhone}</span>
                </motion.a>
              )}
              
              {countries.map((country) => {
                const active = isActiveCountry(country.path)
                const flagButtonColor = active 
                  ? 'bg-primary-orange text-white' 
                  : isCountryPage && !isScrolled 
                    ? 'text-white/80 hover:text-white hover:bg-white/20'
                    : 'text-black/80 hover:text-black hover:bg-light-grey'
                
                return (
                  <motion.button
                    key={country.code}
                    onClick={() => router.push(country.path)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${flagButtonClasses} ${flagButtonColor}`}
                    aria-label={`Switch to ${country.name}`}
                    title={country.name}
                  >
                    <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center ring-1 ring-white/20 bg-white/10 backdrop-blur-sm">
                      <Icon icon={country.flag} className="w-4 h-4 sm:w-6 sm:h-6 flag-icon" />
                    </div>
                  </motion.button>
                )
              })}
              
              {/* Country HQ Text */}
              {isCountryPage && countryName && (
                <div className="hidden sm:flex items-center">
                  <span className={`text-xs font-medium uppercase tracking-wide ${buttonHoverClasses} ${getTextColor()}`}>
                    {countryName}
                  </span>
                </div>
              )}
              
              {/* Down Arrow Button */}
              <motion.button
                onClick={() => setCountryModalOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${buttonHoverClasses} ${getTextColor()}`}
                aria-label="Open country selector"
              >
                <Icon icon="mdi:chevron-down" className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Border Bottom */}
        <div className={containerClasses}>
          <div className={`border-b-2 ${getBorderColor()} transition-all duration-300`}></div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={containerClasses}>
        <div className="flex items-center h-16 sm:h-28">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="SGA Security Logo"
                width={200}
                height={0}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
              {currentNavItems.filter(item => !item.icon).map((item) => {
                const isRoute = !item.href.startsWith('#')
                const isActive = isRoute ? pathname === item.href : false
                const NavComponent = isRoute ? motion(Link) : motion.a
                
                return (
                  <NavComponent
                    key={item.href}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    className={`${buttonHoverClasses} font-nav font-bold tracking-widest text-md ${getNavTextColor(isActive)}`}
                  >
                    {item.label}
                  </NavComponent>
                )
              })}
            </div>
          </div>

          {/* CTAs - Right */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            {/* Updates Link */}
            {currentNavItems.filter(item => item.icon).map((item) => {
              const isRoute = !item.href.startsWith('#')
              const isActive = isRoute ? pathname === item.href : false
              const NavComponent = isRoute ? motion(Link) : motion.a
              
              return (
                <NavComponent
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`${buttonHoverClasses} font-nav font-medium flex items-center gap-1.5 text-sm ${getNavTextColor(isActive)}`}
                >
                  {item.icon && (
                    <Icon 
                      icon={item.icon} 
                      className={`w-4 h-4 xl:w-5 xl:h-5 ${
                        isCountryPage && !isScrolled ? 'text-white' : 'text-primary-orange'
                      }`} 
                    />
                  )}
                  {item.label}
                </NavComponent>
              )
            })}
            
            {/* Enquire Now Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-orange text-white px-4 py-2 xl:px-6 xl:py-3 rounded-full font-heading font-medium uppercase text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              Enquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${buttonHoverClasses} ${
              isCountryPage && !isScrolled ? 'text-white' : 'text-dark-charcoal'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 overflow-hidden"
            >
              {/* Call Number - Mobile */}
              {isCountryPage && countryPhone && (
                <motion.a
                  href={`tel:${countryPhone.replace(/\s/g, '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${mobileMenuItemClasses} text-primary-orange font-semibold border-b border-gray-200`}
                  aria-label={`Call ${countryPhone}`}
                >
                  <Icon icon="mdi:phone" className="w-5 h-5 text-primary-orange flex-shrink-0" />
                  <span>Call: {countryPhone}</span>
                </motion.a>
              )}
              
              {currentNavItems.map((item) => {
                const isRoute = !item.href.startsWith('#')
                const isActive = isRoute ? pathname === item.href : false
                const itemClasses = `${mobileMenuItemClasses} ${
                  isActive ? 'text-primary-orange font-semibold' : 'text-dark-charcoal hover:text-primary-orange'
                }`
                
                if (isRoute) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={itemClasses}
                    >
                      {item.icon && <Icon icon={item.icon} className="w-5 h-5 text-primary-orange flex-shrink-0" />}
                      <span>{item.label}</span>
                    </Link>
                  )
                }
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={itemClasses}
                  >
                    {item.icon && <Icon icon={item.icon} className="w-5 h-5 text-primary-orange flex-shrink-0" />}
                    <span>{item.label}</span>
                  </a>
                )
              })}
              
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 sm:mt-5 bg-primary-orange text-white px-6 py-3 sm:py-3.5 rounded-full font-heading font-semibold text-center text-sm sm:text-base shadow-md w-full"
              >
                Enquire Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Country Selection Modal */}
      <AnimatePresence>
        {countryModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
              onClick={() => setCountryModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setCountryModalOpen(false)}
            >
              <div 
                className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4"
                onClick={(e) => e.stopPropagation()}
              >
                {countries.map((country, index) => (
                  <motion.div
                    key={country.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <motion.button
                      onClick={() => {
                        router.push(country.path)
                        setCountryModalOpen(false)
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white border-2 sm:border-4 border-primary-orange flex flex-col items-center justify-center shadow-xl transition-all overflow-hidden"
                      aria-label={`Enter ${country.name}`}
                    >
                      <Icon 
                        icon={country.flag} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10" 
                      />
                      
                      <div className="absolute bottom-2 sm:bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon 
                          icon="mdi:arrow-right" 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-orange" 
                        />
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
