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
      case 'ke': return 'Kenya HQ'
      case 'tz': return 'Tanzania HQ'
      case 'ug': return 'Uganda HQ'
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

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (countryModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [countryModalOpen])

  const isActiveCountry = (path: string): boolean => {
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  // Consolidated class generators
  const getHeaderClasses = () => {
    const baseClasses = 'fixed left-0 right-0 z-40 transition-all duration-300'
    if (isCountryPage) {
      return isScrolled
        ? `${baseClasses} top-0 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg`
        : `${baseClasses} top-0 bg-transparent`
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
    return isActive ? 'text-primary-orange' : 'hover:text-primary-orange'
  }

  const getBorderColor = () => {
    if (isScrolled) return 'border-black/20'
    return isCountryPage ? 'border-white/30' : 'border-black'
  }

  const getLogoSrc = () => {
    if (isCountryPage && !isScrolled) {
      return '/images/logo-white.svg'
    }
    return '/images/logo.svg'
  }

  // Common class strings
  const containerClasses = 'max-w-9xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'
  const buttonHoverClasses = 'transition-colors'
  const flagButtonClasses = 'w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all'
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
                  <Icon icon={social.icon} className="w-6 h-6 sm:w-6 sm:h-6" />
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
                  className={`hidden sm:flex items-center gap-1 text-md font-semibold uppercase ${buttonHoverClasses} ${getTextColor()}`}
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
                    disabled={active}
                    whileHover={!active ? { scale: 1.1 } : {}}
                    whileTap={!active ? { scale: 0.95 } : {}}
                    className={`${flagButtonClasses} ${flagButtonColor} ${active ? 'cursor-default' : 'cursor-pointer'}`}
                    aria-label={active ? `Currently in ${country.name}` : `Switch to ${country.name}`}
                    title={country.name}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center ring-1 ring-white/20">
                      <Icon icon={country.flag} className="w-8 h-8 sm:w-8 sm:h-8" />
                    </div>
                  </motion.button>
                )
              })}

              {/* Country HQ Text */}
              {isCountryPage && countryName && (
                <div className="hidden sm:flex items-center">
                  <span className={`text-md font-semibold tracking-wide uppercase ${buttonHoverClasses} ${getTextColor()}`}>
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
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src={getLogoSrc()}
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
            {/* Icon-based nav items */}
            {currentNavItems.filter(item => item.icon).map((item) => {
              const isRoute = !item.href.startsWith('#')
              const isActive = isRoute ? pathname === item.href : false
              const NavComponent = isRoute ? motion(Link) : motion.a

              return (
                <NavComponent
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`${buttonHoverClasses} font-nav font-medium flex items-center gap-1.5 text-md ${getNavTextColor(isActive)}`}
                >
                  {item.icon && (
                    <Icon
                      icon={item.icon}
                      className={`w-4 h-4 xl:w-5 xl:h-5 ${isCountryPage && !isScrolled ? 'text-white' : 'text-primary-orange'
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
              className={`${isCountryPage && !isScrolled
                ? 'bg-white text-primary-orange'
                : 'bg-primary-orange text-white'
                } px-4 py-2 xl:px-6 xl:py-3 rounded-full font-heading font-medium uppercase text-sm shadow-md hover:shadow-lg transition-shadow`}
            >
              Enquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${buttonHoverClasses} ${isCountryPage && !isScrolled ? 'text-white' : 'text-dark-charcoal'
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
              className="lg:hidden pb-4 px-4 overflow-hidden bg-white shadow-2xl rounded-b-2xl absolute left-0 right-0 top-full z-50 border-t border-gray-100"
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
                const itemClasses = `${mobileMenuItemClasses} ${isActive ? 'text-primary-orange font-semibold' : 'text-dark-charcoal hover:text-primary-orange font-semibold'}`

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
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Now closer to content */}
                <motion.button
                  onClick={() => setCountryModalOpen(false)}
                  className="absolute -top-12 -right-4 sm:-top-16 sm:-right-8 text-white hover:text-primary-orange transition-colors z-[60]"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  <Icon icon="teenyicons:x-circle-outline" className="w-8 h-8 sm:w-9 sm:h-9" />
                </motion.button>

                <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4">
                  {countries.map((country, index) => (
                    // ... (rest of the map content stays the same)
                    <motion.div
                      key={country.code}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <motion.button
                        onClick={() => {
                          if (!isActiveCountry(country.path)) {
                            router.push(country.path)
                            setCountryModalOpen(false)
                          }
                        }}
                        disabled={isActiveCountry(country.path)}
                        whileHover={!isActiveCountry(country.path) ? { scale: 1.05 } : {}}
                        whileTap={!isActiveCountry(country.path) ? { scale: 0.95 } : {}}
                        className={`group relative w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-white border-2 sm:border-4 border-primary-orange flex items-center justify-center shadow-2xl transition-all overflow-hidden ${isActiveCountry(country.path) ? 'cursor-default opacity-80' : 'cursor-pointer'}`}
                        aria-label={isActiveCountry(country.path) ? `Currently in ${country.name}` : `Enter ${country.name}`}
                      >
                        {/* ENTER label at the top - shows only on hover and if NOT active */}
                        {!isActiveCountry(country.path) && (
                          <div className="absolute top-6 sm:top-12 md:top-20 left-0 right-0 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-dark-charcoal uppercase tracking-[0.3em]">
                              ENTER
                            </span>
                          </div>
                        )}

                        <div className={`flex items-center gap-2 sm:gap-4 md:gap-5 z-10 px-6 transition-transform duration-300 ${!isActiveCountry(country.path) ? 'group-hover:translate-y-2 md:group-hover:translate-y-4' : ''}`}>
                          <Icon
                            icon={country.flag}
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0"
                          />
                          <span className="text-lg sm:text-2xl md:text-4xl font-bold text-dark-charcoal tracking-tight normal-case">
                            {country.name}
                          </span>
                        </div>

                        {!isActiveCountry(country.path) && (
                          <div className="absolute bottom-4 sm:bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Icon
                              icon="mynaui:arrow-right-circle"
                              className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 text-primary-orange"
                            />
                          </div>
                        )}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
