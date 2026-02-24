'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { countries as countriesData } from '@/data/countries-data'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import TopBar from './header/TopBar'
import MegaMenuDropdown from './header/MegaMenuDropdown'
import CountryModal from './header/CountryModal'
import MobileMenu from './header/MobileMenu'

interface NavItem {
  href: string
  label: string
  icon?: string
  isDropdown?: boolean
  dropdownType?: 'services' | 'industries'
}

interface ServiceItem {
  href: string
  label: string
}

interface Country {
  code: string
  name: string
  path: string
  flag: string
}

export default function CountryHeader(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [countryModalOpen, setCountryModalOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesViewType, setServicesViewType] = useState<'Individual' | 'Corporate'>('Individual')
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { openModal } = useEnquiryModal()

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scroll when modal or dropdowns are open
  useEffect(() => {
    if (countryModalOpen || servicesDropdownOpen || industriesDropdownOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [countryModalOpen, servicesDropdownOpen, industriesDropdownOpen])

  // Get country prefix for navigation links
  const getCountryPrefix = (): string => {
    if (pathname.startsWith('/ke')) return '/ke'
    if (pathname.startsWith('/ug')) return '/ug'
    if (pathname.startsWith('/tz')) return '/tz'
    return ''
  }

  const countryPrefix = getCountryPrefix()
  const currentCountryCode = pathname.split('/')[1] as keyof typeof countriesData
  const currentCountry = countriesData[currentCountryCode]

  const individualServicesItems: ServiceItem[] = [
    { href: `${countryPrefix}/services/individual/home-security`, label: 'Home Security' },
    { href: `${countryPrefix}/services/individual/emergency-response`, label: 'Emergency Response' },
    { href: `${countryPrefix}/services/individual/safe-home-packages`, label: 'Safe Home Packages' },
    { href: `${countryPrefix}/services/individual/personal-security`, label: 'Personal Security' },
    { href: `${countryPrefix}/services/individual/24-7-monitoring`, label: '24/7 Monitoring' },
  ]

  const corporateServicesItems: ServiceItem[] = [
    { href: `${countryPrefix}/services/corporate/security-guarding`, label: 'Security Guarding' },
    { href: `${countryPrefix}/services/corporate/electronic-security`, label: 'Electronic Security' },
    { href: `${countryPrefix}/services/corporate/risk-assessment`, label: 'Risk Assessment' },
    { href: `${countryPrefix}/services/corporate/consulting-services`, label: 'Consulting Services' },
    { href: `${countryPrefix}/services/corporate/event-security`, label: 'Event Security' },
    { href: `${countryPrefix}/services/corporate/emergency-response`, label: 'Emergency Response' },
  ]

  const servicesItems = servicesViewType === 'Individual' ? individualServicesItems : corporateServicesItems

  const industriesItems: ServiceItem[] = [
    { href: `${countryPrefix}/industries/banking`, label: 'Banking & Finance' },
    { href: `${countryPrefix}/industries/retail`, label: 'Retail & FMCG' },
    { href: `${countryPrefix}/industries/logistics`, label: 'Logistics & Ports' },
    { href: `${countryPrefix}/industries/manufacturing`, label: 'Manufacturing & Industrial' },
    { href: `${countryPrefix}/industries/real-estate`, label: 'Real Estate & Offices' },
    { href: `${countryPrefix}/industries/education`, label: 'Education & Healthcare' },
    { href: `${countryPrefix}/industries/events`, label: 'Events & Venues' },
    { href: `${countryPrefix}/industries/diplomatic`, label: 'Diplomatic & Government' },
  ]

  const shortcuts: ServiceItem[] = [
    { href: '/safety-tips', label: 'Safety tips' },
    { href: `${countryPrefix}/faqs`, label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
    { href: '/resources', label: 'Resources' },
  ]

  const navItems: NavItem[] = [
    { href: countryPrefix || '/', label: 'HOME' },
    { href: `${countryPrefix}/about`, label: 'ABOUT US' },
    { href: '#services', label: 'SERVICES', isDropdown: true, dropdownType: 'services' },
    { href: `${countryPrefix}/industries`, label: 'INDUSTRIES', isDropdown: true, dropdownType: 'industries' },
    { href: `${countryPrefix}/why-us`, label: 'WHY US' },
    { href: `${countryPrefix}/updates`, label: 'NEWS & INSIGHTS' },
    { href: `${countryPrefix}/contact`, label: 'CONTACT' },
  ]

  const countries: Country[] = [
    { code: 'ke', name: 'Kenya', path: '/ke', flag: 'emojione:flag-for-kenya' },
    { code: 'ug', name: 'Uganda', path: '/ug', flag: 'emojione:flag-for-uganda' },
    { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'emojione:flag-for-tanzania' },
  ]

  const isActiveCountry = (path: string): boolean => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const getCountryPhone = (): string | null => {
    return currentCountry?.phone || null
  }

  const countryPhone = getCountryPhone()

  const getCountryName = (): string => {
    return currentCountry?.name || ''
  }
  const currentCountryName = getCountryName()

  const isAboutPage = pathname.includes('/about') ||
    pathname.includes('/industries') ||
    pathname.includes('/services') ||
    pathname.includes('/why-us')

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
      ? `bg-white/90 ${servicesDropdownOpen || industriesDropdownOpen ? '' : 'backdrop-blur-md'} shadow-lg py-2`
      : (isAboutPage ? 'bg-white' : 'bg-primary-orange')
      }`}>
      {/* Top Bar */}
      <TopBar
        isScrolled={isScrolled}
        isAboutPage={isAboutPage}
        countries={countries}
        isActiveCountry={isActiveCountry}
        countryPhone={countryPhone}
        currentCountryName={currentCountryName}
        onCountryModalOpen={() => setCountryModalOpen(true)}
      />

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
                const dropdownOpen = isServices ? servicesDropdownOpen : industriesDropdownOpen
                const setDropdownOpen = isServices ? setServicesDropdownOpen : setIndustriesDropdownOpen
                const dropdownItems = isServices ? servicesItems : industriesItems

                return (
                  <div key={item.href} className="relative">
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

                    <AnimatePresence>
                      {dropdownOpen && (
                        <MegaMenuDropdown
                          isOpen={dropdownOpen}
                          onClose={() => setDropdownOpen(false)}
                          isServices={isServices}
                          servicesViewType={servicesViewType}
                          setServicesViewType={setServicesViewType}
                          dropdownItems={dropdownItems}
                          countries={countries}
                          isActiveCountry={isActiveCountry}
                          shortcuts={shortcuts}
                          countryPrefix={countryPrefix}
                          countryPhone={countryPhone}
                          openModal={openModal}
                        />
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
                  className={`transition-colors !font-nav font-bold tracking-widest flex items-center gap-1.5 text-sm xl:text-base ${isActive
                    ? (isScrolled || isAboutPage) ? 'text-primary-orange' : 'text-white'
                    : (isScrolled || isAboutPage) ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {item.icon && <Icon icon={item.icon} className={`w-4 h-4 xl:w-5 xl:h-5 ${(isScrolled || isAboutPage) ? 'text-primary-orange' : 'text-white'}`} />}
                  {item.label}
                </NavComponent>
              )
            })}
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
            <MobileMenu
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              navItems={navItems}
              pathname={pathname}
              isAboutPage={isAboutPage}
              mobileServicesOpen={mobileServicesOpen}
              setMobileServicesOpen={setMobileServicesOpen}
              mobileIndustriesOpen={mobileIndustriesOpen}
              setMobileIndustriesOpen={setMobileIndustriesOpen}
              servicesViewType={servicesViewType}
              setServicesViewType={setServicesViewType}
              servicesItems={servicesItems}
              industriesItems={industriesItems}
              openModal={openModal}
            />
          )}
        </AnimatePresence>
      </nav>

      {/* Country Selection Modal */}
      <AnimatePresence>
        {countryModalOpen && (
          <CountryModal
            isOpen={countryModalOpen}
            onClose={() => setCountryModalOpen(false)}
            countries={countries}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
