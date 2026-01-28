'use client'

import { useState, useEffect } from 'react'
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
  const [servicesViewType, setServicesViewType] = useState('Individual') // 'Individual' or 'Corporate'
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { openModal } = useEnquiryModal()

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Get country prefix for navigation links
  const getCountryPrefix = () => {
    if (pathname.startsWith('/ke')) return '/ke'
    if (pathname.startsWith('/ug')) return '/ug'
    if (pathname.startsWith('/tz')) return '/tz'
    return ''
  }

  const countryPrefix = getCountryPrefix()

  const individualServicesItems = [
    { href: `${countryPrefix}/services/home-security`, label: 'Home Security' },
    { href: `${countryPrefix}/services/emergency-response`, label: 'Emergency Response' },
    { href: `${countryPrefix}/services/safe-home-packages`, label: 'Safe Home Packages' },
    { href: `${countryPrefix}/services/personal-security`, label: 'Personal Security' },
    { href: `${countryPrefix}/services/24-7-monitoring`, label: '24/7 Monitoring' },
  ]

  const corporateServicesItems = [
    { href: `${countryPrefix}/services/security-guarding`, label: 'Security Guarding' },
    { href: `${countryPrefix}/services/electronic-security`, label: 'Electronic Security' },
    { href: `${countryPrefix}/services/risk-assessment`, label: 'Risk Assessment' },
    { href: `${countryPrefix}/services/consulting-services`, label: 'Consulting Services' },
    { href: `${countryPrefix}/services/event-security`, label: 'Event Security' },
    { href: `${countryPrefix}/services/emergency-response`, label: 'Emergency Response' },
  ]

  // Get services based on view type
  const servicesItems = servicesViewType === 'Individual' ? individualServicesItems : corporateServicesItems

  const industriesItems = [
    { href: `${countryPrefix}/industries/banking`, label: 'Banking & Finance' },
    { href: `${countryPrefix}/industries/retail`, label: 'Retail & FMCG' },
    { href: `${countryPrefix}/industries/logistics`, label: 'Logistics & Ports' },
    { href: `${countryPrefix}/industries/manufacturing`, label: 'Manufacturing & Industrial' },
    { href: `${countryPrefix}/industries/real-estate`, label: 'Real Estate & Offices' },
    { href: `${countryPrefix}/industries/education`, label: 'Education & Healthcare' },
    { href: `${countryPrefix}/industries/events`, label: 'Events & Venues' },
    { href: `${countryPrefix}/industries/diplomatic`, label: 'Diplomatic & Government' },
  ]

  const shortcuts = [
    { href: `${countryPrefix}/safety-tips`, label: 'Safety tips' },
    { href: `${countryPrefix}/faqs`, label: 'FAQs' },
    { href: `${countryPrefix}/contact`, label: 'Contact' },
    { href: `${countryPrefix}/resources`, label: 'Resources' },
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
    { icon: 'entypo-social:twitter-with-circle', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mage:instagram-circle', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'entypo-social:youtube-with-circle', url: 'https://youtube.com', label: 'Youtube' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  const countries = [
    { code: 'ke', name: 'Kenya', path: '/ke', flag: 'emojione:flag-for-kenya' },
    { code: 'ug', name: 'Uganda', path: '/ug', flag: 'emojione:flag-for-uganda' },
    { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'emojione:flag-for-tanzania' },
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

  // Get current country name for HQ display
  const getCountryName = () => {
    if (pathname.startsWith('/ke')) return 'Kenya'
    if (pathname.startsWith('/ug')) return 'Uganda'
    if (pathname.startsWith('/tz')) return 'Tanzania'
    return ''
  }
  const currentCountryName = getCountryName()

  // Check if we're on an about page, industry page, or service page
  const isAboutPage = pathname.includes('/about') || pathname.includes('/industries') || pathname.includes('/services')

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
        : (isAboutPage ? 'bg-white' : 'bg-primary-orange')
    }`}>
      {/* Top Bar with Social Icons and Flags */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : ''}`}>
        <div className={isAboutPage ? 'bg-white text-dark-charcoal' : 'bg-primary-orange text-white'}>
        <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
                  <Icon icon={social.icon} className="w-4 h-4 sm:w-6 sm:h-6" />
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
                  className={isAboutPage ? "flex items-center gap-1.5 text-dark-charcoal hover:text-primary-orange transition-colors" : "flex items-center gap-1.5 text-white hover:text-white/80 transition-colors"}
                  aria-label={`Call ${countryPhone}`}
                >
                  <span className="font-bold text-[10px] sm:text-sm tracking-wider uppercase">CALL: {countryPhone}</span>
                </motion.a>
              )}
              
              {/* Country Flags */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-1">
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

              {/* Country HQ Text */}
              {currentCountryName && (
                <div className="hidden sm:flex items-center border-l border-white/20 py-1">
                  <span className={`text-[10px] sm:text-sm font-bold tracking-widest uppercase ${isAboutPage ? 'text-dark-charcoal' : 'text-white'}`}>
                    {currentCountryName} HQ
                  </span>
                </div>
              )}
              </div>
            </div>
          </div>
          {/* Border Bottom - Thick border matching content padding */}
          <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className={`border-b ${isAboutPage ? 'border-dark-charcoal/20' : 'border-white/30'} pt-2`}></div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-16 sm:h-28'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={(isScrolled || isAboutPage) ? "/images/logo.svg" : "/images/logo-white.svg"}
                alt="SGA Security Logo"
                width={260}
                height={75}
                className={`transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'} w-auto`}
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
                  >
                    <motion.button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      whileHover={{ y: -2 }}
                      className={`transition-colors !font-nav font-bold tracking-widest flex items-center gap-1.5 text-sm xl:text-base ${(isScrolled || isAboutPage) ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white'}`}
                    >
                      {item.label}
                      <Icon 
                        icon="mdi:plus" 
                        className={`w-4 h-4 xl:w-5 xl:h-5 ${(isScrolled || isAboutPage) ? 'text-dark-charcoal' : 'text-white'}`} 
                      />
                    </motion.button>
                    
                    {/* Services/Industries Mega Menu Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-primary-orange z-[60] overflow-y-auto"
                        >
                          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {/* Top row: Logo, Toggle, Close */}
                            <div className="flex items-center justify-between border-b border-white/20 pb-8 mb-16">
                              <Link href="/" onClick={() => setDropdownOpen(false)}>
                                <Image
                                  src="/images/logo-white.svg"
                                  alt="SGA Security"
                                  width={220}
                                  height={65}
                                  className="h-12 w-auto"
                                />
                              </Link>

                              <div className="flex items-center gap-6">
                                {isServices && (
                                  <div className="flex items-center gap-2 bg-[#ecf2f7] rounded-full p-1">
                                    <button
                                      onClick={() => setServicesViewType('Individual')}
                                      className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all !font-nav ${
                                        servicesViewType === 'Individual'
                                          ? 'bg-primary-orange text-white shadow-lg'
                                          : 'text-[#2e2e2e] hover:text-primary-orange'
                                      }`}
                                    >
                                      Individual
                                    </button>
                                    <button
                                      onClick={() => setServicesViewType('Corporate')}
                                      className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all !font-nav ${
                                        servicesViewType === 'Corporate'
                                          ? 'bg-primary-orange text-white shadow-lg'
                                          : 'text-[#2e2e2e] hover:text-primary-orange'
                                      }`}
                                    >
                                      Corporate
                                    </button>
                                  </div>
                                )}

                                <motion.button
                                  onClick={() => setDropdownOpen(false)}
                                  whileHover={{ rotate: 90, scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors"
                                >
                                  <Icon icon="mdi:close" className="w-6 h-6" />
                                </motion.button>
                              </div>
                            </div>

                            {/* Main Grid Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                              {/* Column 1: Country & Shortcuts */}
                              <div className="lg:col-span-1 space-y-16">
                                <div>
                                  <h3 className="text-white font-normal text-lg uppercase tracking-[0.2em] mb-6">Country</h3>
                                  <div className="grid grid-cols-3 gap-2">
                                    {countries.map((country) => {
                                      const active = isActiveCountry(country.path)
                                      return (
                                        <button
                                          key={country.code}
                                          onClick={() => {
                                            router.push(country.path)
                                            setDropdownOpen(false)
                                          }}
                                          className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-full border transition-all ${
                                            active
                                              ? 'bg-white text-primary-orange border-white font-bold'
                                              : 'bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/40'
                                          }`}
                                        >
                                          <Icon icon={country.flag} className="w-6 h-6 rounded-full" />
                                          <span className="text-sm uppercase font-normal tracking-tight">{country.name}</span>
                                        </button>
                                      )
                                    })}
                                  </div>
                                </div>

                                <div>
                                  <h3 className="text-white font-normal text-lg uppercase tracking-[0.2em] mb-6">Shortcuts</h3>
                                  <div className="flex flex-col gap-6">
                                    {shortcuts.map((shortcut) => (
                                      <Link
                                        key={shortcut.label}
                                        href={shortcut.href}
                                        onClick={() => setDropdownOpen(false)}
                                        className="text-white text-xl font-bold hover:translate-x-2 transition-transform duration-300 block"
                                      >
                                        {shortcut.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Column 2: Services/Industries List */}
                              <div className="lg:col-span-1">
                                <h3 className="text-white font-normal text-lg uppercase tracking-[0.2em] mb-6">
                                  {isServices ? `Services — ${servicesViewType.toUpperCase()}` : 'Industries'}
                                </h3>
                                <div className="flex flex-col gap-6">
                                  {dropdownItems.map((service, index) => (
                                    <Link
                                      key={service.label}
                                      href={service.href}
                                      onClick={() => setDropdownOpen(false)}
                                      className="group relative flex items-start text-white"
                                    >
                                      <div className="absolute left-0 -top-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-3 group-hover:translate-x-0">
                                        <Icon icon="mdi:plus" className="w-8 h-8 font-bold" />
                                      </div>
                                      <span className="text-lg lg:text-2xl font-bold leading-tight capitalize tracking-wider transition-transform duration-300 group-hover:translate-x-10 inline-block">
                                        {service.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Column 3: Help Section */}
                              <div className="lg:col-span-1">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/60 h-fit">
                                  <div className="mb-6 text-white">
                                    <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-4 opacity-80">Need Help?</h3>
                                    <h2 className="text-xl lg:text-2xl font-bold leading-none">Talk to us fast</h2>
                                  </div>

                                  <div className="space-y-4">
                                    <button
                                      onClick={() => {
                                        setDropdownOpen(false)
                                        openModal()
                                      }}
                                      className="w-full bg-white text-primary-orange py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:bg-white/90 transition-colors"
                                    >
                                      <Icon icon="mdi:file-document-outline" className="w-5 h-5 outline-none" />
                                      Request a Quote
                                    </button>
                                    <button
                                      onClick={() => {
                                        setDropdownOpen(false)
                                        router.push(`${countryPrefix}/contact`)
                                      }}
                                      className="w-full bg-transparent text-white border-2 border-white/40 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-primary-orange hover:border-white transition-all"
                                    >
                                      <Icon icon="mdi:phone-outline" className="w-5 h-5" />
                                      Talk to Sales
                                    </button>
                                    <a
                                      href={`tel:${countryPhone?.replace(/\s/g, '') || '+254733700500'}`}
                                      className="w-full bg-transparent text-white border-2 border-white/40 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-primary-orange hover:border-white transition-all"
                                      onClick={() => setDropdownOpen(false)}
                                    >
                                      <Icon icon="material-symbols:e911-emergency-outline" className="w-6 h-6" />
                                      Emergency Line
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                  className={`transition-colors !font-nav font-bold tracking-widest flex items-center gap-1.5 text-sm xl:text-base ${
                    isActive 
                      ? (isScrolled || isAboutPage) ? 'text-primary-orange' : 'text-white'
                      : (isScrolled || isAboutPage) ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.icon && <Icon icon={item.icon} className={`w-4 h-4 xl:w-5 xl:h-5 ${(isScrolled || isAboutPage) ? 'text-primary-orange' : 'text-white'}`} />}
                  {item.label}
                </NavComponent>
              )
            })}
            {/* Enquire Now Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={(isScrolled || isAboutPage) ? "bg-primary-orange text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full font-semibold text-sm xl:text-base shadow-md hover:shadow-lg transition-shadow ml-2 xl:ml-4 !font-nav" : "bg-white text-primary-orange px-4 py-2 xl:px-6 xl:py-2 rounded-full font-semibold text-sm xl:text-base shadow-md hover:shadow-lg transition-shadow ml-2 xl:ml-4 !font-nav"}
            >
              Enquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={(isScrolled || isAboutPage) ? "lg:hidden p-2 text-dark-charcoal" : "lg:hidden p-2 text-white"}
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
                            {/* Toggle for Services in Mobile */}
                            {isServices && (
                              <div className="pl-4 mb-3">
                                <div className="flex items-center gap-2 bg-primary-orange/20 rounded-full px-2 py-1 w-fit">
                                  <button
                                    onClick={() => setServicesViewType('Individual')}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                                      servicesViewType === 'Individual'
                                        ? 'bg-primary-orange text-white'
                                        : 'text-primary-orange hover:text-primary-orange/80'
                                    }`}
                                  >
                                    Individual
                                  </button>
                                  <button
                                    onClick={() => setServicesViewType('Corporate')}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                                      servicesViewType === 'Corporate'
                                        ? 'bg-primary-orange text-white'
                                        : 'text-primary-orange hover:text-primary-orange/80'
                                    }`}
                                  >
                                    Corporate
                                  </button>
                                </div>
                              </div>
                            )}
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

