'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

export default function CountryHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [countryModalOpen, setCountryModalOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { openModal } = useEnquiryModal()

  const servicesItems = [
    { href: '#integrated-solutions', label: 'Alarm & Response' },
    { href: '#integrated-solutions', label: 'Residential Guarding' },
    { href: '#integrated-solutions', label: 'Personal Panic App' },
    { href: '#services', label: 'Security Guarding' },
    { href: '#services', label: 'Electronic Security' },
    { href: '#services', label: 'Risk Assessment' },
    { href: '#services', label: 'Consulting Services' },
    { href: '#services', label: 'Event Security' },
    { href: '#services', label: 'Emergency Response' },
  ]

  // Get country prefix for navigation links
  const getCountryPrefix = () => {
    if (pathname.startsWith('/ke')) return '/ke'
    if (pathname.startsWith('/ug')) return '/ug'
    if (pathname.startsWith('/tz')) return '/tz'
    return ''
  }

  const countryPrefix = getCountryPrefix()

  const industriesItems = [
    { href: `${countryPrefix}/industries/residential`, label: 'Residential Estates & Apartments' },
    { href: `${countryPrefix}/industries/education`, label: 'Education & Schools' },
    { href: `${countryPrefix}/industries/healthcare`, label: 'Healthcare Facilities' },
    { href: `${countryPrefix}/industries/hospitality`, label: 'Hospitality & Holiday Homes' },
    { href: `${countryPrefix}/industries/banking`, label: 'Banking & Finance' },
    { href: `${countryPrefix}/industries/retail`, label: 'Retail & Commerce' },
    { href: `${countryPrefix}/industries/manufacturing`, label: 'Manufacturing' },
    { href: `${countryPrefix}/industries/logistics`, label: 'Logistics & Transportation' },
  ]

  const navItems = [
    { href: countryPrefix || '/', label: 'HOME' },
    { href: `${countryPrefix}/about`, label: 'ABOUT US' },
    { href: '#services', label: 'SERVICES', isDropdown: true, dropdownType: 'services' },
    { href: `${countryPrefix}/industries`, label: 'INDUSTRIES', isDropdown: true, dropdownType: 'industries' },
    { href: `${countryPrefix}/why-us`, label: 'WHY US' },
    { href: '/news-reports', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
  ]

  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
  ]

  const countries = [
    { code: 'ke', name: 'Kenya', path: '/ke', flag: 'twemoji:flag-kenya' },
    { code: 'ug', name: 'Uganda', path: '/ug', flag: 'twemoji:flag-uganda' },
    { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'twemoji:flag-tanzania' },
  ]

  const isActiveCountry = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  // Get country-specific phone number
  const getCountryPhone = () => {
    if (pathname.startsWith('/ke')) return '+254111024000'
    if (pathname.startsWith('/ug')) return '+256772200048'
    if (pathname.startsWith('/tz')) return '+255222123456'
    return null
  }

  const countryPhone = getCountryPhone()

  // Check if we're on an about page or industry page
  const isAboutPage = pathname.includes('/about') || pathname.includes('/industries')

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 shadow-md ${isAboutPage ? 'bg-white' : 'bg-primary-orange'}`}>
      {/* Top Bar with Social Icons and Flags */}
      <div className={isAboutPage ? 'bg-white text-dark-charcoal' : 'bg-primary-orange text-white'}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
                  className={isAboutPage ? 'text-dark-charcoal hover:text-primary-orange transition-colors' : 'text-white hover:text-white/80 transition-colors'}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>

            {/* Country Flags and Phone - Right */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {/* Country Phone Number - Before Flags */}
              {countryPhone && (
                <motion.a
                  href={`tel:${countryPhone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={isAboutPage ? "flex items-center gap-1.5 sm:gap-2 text-dark-charcoal hover:text-primary-orange transition-colors" : "flex items-center gap-1.5 sm:gap-2 text-white hover:text-white/80 transition-colors"}
                  aria-label={`Call ${countryPhone}`}
                >
                  <Icon icon="mdi:phone" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-medium hidden sm:inline">{countryPhone}</span>
                  <span className="font-medium sm:hidden text-xs">{countryPhone.replace(/\+/g, '')}</span>
                </motion.a>
              )}
              
              {/* Country Flags */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
              {countries.map((country) => {
                const active = isActiveCountry(country.path)
                return (
                  <motion.button
                    key={country.code}
                    onClick={() => router.push(country.path)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all
                      ${active 
                        ? isAboutPage ? 'bg-primary-orange text-white' : 'bg-white text-primary-orange'
                        : isAboutPage ? 'text-dark-charcoal/80 hover:text-primary-orange hover:bg-primary-orange/10' : 'text-white/80 hover:text-white hover:bg-white/20'
                      }
                    `}
                    aria-label={`Switch to ${country.name}`}
                    title={country.name}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden flex items-center justify-center ring-1 ring-white/20">
                      <Icon icon={country.flag} className="w-full h-full scale-125" />
                    </div>
                  </motion.button>
                )
              })}
              {/* Down Arrow Button */}
              <motion.button
                onClick={() => setCountryModalOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={isAboutPage ? 'text-dark-charcoal/80 hover:text-primary-orange transition-colors' : 'text-white/80 hover:text-white transition-colors'}
                aria-label="Open country selector"
              >
                <Icon icon="mdi:chevron-down" className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              </div>
            </div>
          </div>
        </div>
        {/* Border Bottom - Thick border matching content padding */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className={`border-b ${isAboutPage ? 'border-dark-charcoal/20' : 'border-white/30'} pt-2`}></div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={isAboutPage ? "/images/logo.svg" : "/images/sga-logo-white.svg"}
                alt="SGA Security Logo"
                width={140}
                height={40}
                className="h-8 w-auto sm:h-9 md:h-10"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => {
              if (item.isDropdown) {
                const isServices = item.dropdownType === 'services'
                const isIndustries = item.dropdownType === 'industries'
                const dropdownOpen = isServices ? servicesDropdownOpen : industriesDropdownOpen
                const setDropdownOpen = isServices ? setServicesDropdownOpen : setIndustriesDropdownOpen
                const dropdownItems = isServices ? servicesItems : industriesItems
                
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <motion.button
                      whileHover={{ y: -2 }}
                      className={`transition-colors font-medium flex items-center gap-1.5 text-sm xl:text-base ${isAboutPage ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'}`}
                    >
                      {item.label}
                      <Icon icon="mdi:plus" className={`w-4 h-4 xl:w-5 xl:h-5 ${isAboutPage ? 'text-primary-orange' : 'text-white'}`} />
                    </motion.button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-2"
                        >
                          {dropdownItems.map((dropdownItem) => {
                            const isRoute = !dropdownItem.href.startsWith('#')
                            const DropdownComponent = isRoute ? Link : 'a'
                            const props = isRoute ? { href: dropdownItem.href } : { href: dropdownItem.href }
                            
                            return (
                              <DropdownComponent
                                key={dropdownItem.label}
                                {...props}
                              className="block px-4 py-2.5 text-sm text-dark-charcoal hover:bg-primary-orange hover:text-white transition-colors"
                                onClick={() => setDropdownOpen(false)}
                            >
                                {dropdownItem.label}
                              </DropdownComponent>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              
              const isRoute = !item.href.startsWith('#')
              const isActive = isRoute ? pathname === item.href : false
              const NavComponent = isRoute ? motion(Link) : motion.a
              
              return (
                <NavComponent
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`transition-colors font-medium flex items-center gap-1.5 text-sm xl:text-base ${
                    isActive 
                      ? isAboutPage ? 'text-primary-orange' : 'text-white'
                      : isAboutPage ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.icon && <Icon icon={item.icon} className={`w-4 h-4 xl:w-5 xl:h-5 ${isAboutPage ? 'text-primary-orange' : 'text-white'}`} />}
                  {item.label}
                </NavComponent>
              )
            })}
            {/* Enquire Now Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={isAboutPage ? "bg-primary-orange text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full font-semibold text-sm xl:text-base shadow-md hover:shadow-lg transition-shadow ml-2 xl:ml-4" : "bg-white text-primary-orange px-4 py-2 xl:px-6 xl:py-2 rounded-full font-semibold text-sm xl:text-base shadow-md hover:shadow-lg transition-shadow ml-2 xl:ml-4"}
            >
              Enquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={isAboutPage ? "lg:hidden p-2 text-dark-charcoal" : "lg:hidden p-2 text-white"}
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
              {navItems.map((item) => {
                if (item.isDropdown) {
                  const isServices = item.dropdownType === 'services'
                  const isIndustries = item.dropdownType === 'industries'
                  const mobileOpen = isServices ? mobileServicesOpen : mobileIndustriesOpen
                  const setMobileOpen = isServices ? setMobileServicesOpen : setMobileIndustriesOpen
                  const dropdownItems = isServices ? servicesItems : industriesItems
                  
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`w-full py-3 sm:py-3.5 transition-colors flex items-center justify-between text-sm sm:text-base ${isAboutPage ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'}`}
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          <Icon icon="mdi:plus" className={`w-5 h-5 ${isAboutPage ? 'text-primary-orange' : 'text-white'} flex-shrink-0`} />
                        </span>
                        <Icon 
                          icon={mobileOpen ? "mdi:chevron-up" : "mdi:chevron-down"} 
                          className={`w-5 h-5 ${isAboutPage ? 'text-dark-charcoal' : 'text-white'} flex-shrink-0`} 
                        />
                      </button>
                      <AnimatePresence>
                        {mobileOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {dropdownItems.map((dropdownItem) => {
                                const isRoute = !dropdownItem.href.startsWith('#')
                                const DropdownComponent = isRoute ? Link : 'a'
                                const props = isRoute ? { href: dropdownItem.href } : { href: dropdownItem.href }
                                
                                return (
                                  <DropdownComponent
                                    key={dropdownItem.label}
                                    {...props}
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                      setMobileOpen(false)
                                  }}
                                  className={`block py-2 text-sm transition-colors ${isAboutPage ? 'text-dark-charcoal/80 hover:text-primary-orange' : 'text-white/80 hover:text-white'}`}
                                >
                                    {dropdownItem.label}
                                  </DropdownComponent>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                
                const isRoute = !item.href.startsWith('#')
                const isActive = isRoute ? pathname === item.href : false
                const NavComponent = isRoute ? Link : 'a'
                const props = isRoute ? {} : { href: item.href }
                
                return (
                  <NavComponent
                    key={item.href}
                    {...props}
                    href={isRoute ? item.href : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 sm:py-3.5 transition-colors flex items-center gap-2 text-sm sm:text-base ${
                      isActive 
                        ? isAboutPage ? 'text-primary-orange font-semibold' : 'text-white font-semibold'
                        : isAboutPage ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.icon && <Icon icon={item.icon} className={`w-5 h-5 ${isAboutPage ? 'text-primary-orange' : 'text-white'} flex-shrink-0`} />}
                    <span>{item.label}</span>
                  </NavComponent>
                )
              })}
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                whileTap={{ scale: 0.95 }}
                className={isAboutPage ? "block mt-4 sm:mt-5 bg-primary-orange text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-center text-sm sm:text-base shadow-md w-full" : "block mt-4 sm:mt-5 bg-white text-primary-orange px-6 py-3 sm:py-3.5 rounded-full font-semibold text-center text-sm sm:text-base shadow-md w-full"}
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
            {/* Blurry Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
              onClick={() => setCountryModalOpen(false)}
            />
            
            {/* Modal Content */}
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
                      className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white border-2 sm:border-4 border-white flex flex-col items-center justify-center shadow-xl transition-all overflow-hidden"
                      aria-label={`Enter ${country.name}`}
                    >
                      {/* Country Flag - Smaller, always visible */}
                      <Icon 
                        icon={country.flag} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10" 
                      />
                      
                      {/* Right Arrow at bottom - visible on hover */}
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

