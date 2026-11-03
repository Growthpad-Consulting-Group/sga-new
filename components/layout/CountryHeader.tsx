'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { countries as countriesData } from '@/data/countries-data'
import {
  getIndividualServicesItems,
  getCorporateServicesItems,
  getIndustriesItems,
  getHeaderShortcuts,
  getCountryHeaderNavItems,
  countryHeaderCountries,
} from '@/data/nav'
import Button from '@/components/ui/Button'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import TopBar from '@/components/layout/header/TopBar'
import MegaMenuDropdown from '@/components/layout/header/MegaMenuDropdown'
import MobileMenu from '@/components/layout/header/MobileMenu'

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
    if (servicesDropdownOpen || industriesDropdownOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [servicesDropdownOpen, industriesDropdownOpen])

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

  const individualServicesItems: ServiceItem[] = getIndividualServicesItems(countryPrefix)
  const corporateServicesItems: ServiceItem[] = getCorporateServicesItems(countryPrefix)

  const servicesItems = servicesViewType === 'Individual' ? individualServicesItems : corporateServicesItems

  const industriesItems: ServiceItem[] = getIndustriesItems(countryPrefix)

  const shortcuts: ServiceItem[] = getHeaderShortcuts(countryPrefix)

  const navItems: NavItem[] = getCountryHeaderNavItems(countryPrefix)

  const countries: Country[] = countryHeaderCountries

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
    pathname.includes('/services')

  return (
    <>
    {/* SVG filter for the liquid-glass distortion (same as the group header) */}
    <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
      <defs>
        <filter id="header-glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves="2" seed="8" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>

    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      {/* Floating glass layer (same as the group header): it moves into a pill
          when scrolled, and the transition is shared with the group header. */}
      <div
        style={{
          transition:
            'margin 500ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 550ms cubic-bezier(0.65, 0, 0.35, 1)',
        }}
        className={`pointer-events-auto relative isolate ${
          isScrolled ? 'mx-4 mt-4 rounded-3xl sm:mx-6 sm:mt-4 lg:mx-12' : 'mx-0 mt-0 w-full rounded-none'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
          <div
            aria-hidden
            style={isScrolled ? { filter: 'url(#header-glass-distortion)' } : undefined}
            className={`absolute inset-0 ${isScrolled ? 'backdrop-blur-[3px]' : ''}`}
          />
          <div
            aria-hidden
            className={`absolute inset-0 backdrop-saturate-180 transition-colors duration-500 ${
              isScrolled ? 'bg-white/70' : 'bg-primary-orange'
            }`}
          />
          <div
            aria-hidden
            className={`absolute inset-0 transition-shadow duration-500 ${
              isScrolled ? 'ring-1 ring-inset shadow-lg shadow-black/5 ring-white/40' : ''
            }`}
          />
        </div>
      {/* Top Bar */}
      <TopBar
        isScrolled={isScrolled}
        isAboutPage={false}
        countries={countries}
        isActiveCountry={isActiveCountry}
        countryPhone={countryPhone}
        currentCountryName={currentCountryName}
      />

      {/* Main Navigation */}
      <nav className={`mx-auto max-w-9xl px-4 sm:px-6 lg:px-4 ${isScrolled ? '' : 'xl:container-fluid'}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20 lg:h-16 xl:h-20' : 'h-20 sm:h-24 lg:h-[4.5rem] xl:h-24'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={countryPrefix || '/'} className="flex items-center">
              <Image
                src={isScrolled ? "/images/logo.svg" : "/images/logo-white.svg"}
                alt="SGA Security Logo"
                width={202}
                height={72}
                className="w-[160px] lg:w-[128px] xl:w-[160px] h-auto transition-all duration-300"
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
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`transition-all duration-200 hover:-translate-y-0.5 font-nav! font-bold tracking-widest flex items-center gap-1.5 text-xs xl:text-base ${isScrolled ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white'}`}
                    >
                      {item.label}
                      <Icon
                        icon="mdi:plus"
                        className={`w-4 h-4 xl:w-5 xl:h-5 ${isScrolled ? 'text-dark-charcoal' : 'text-white'}`}
                      />
                    </button>

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
              const NavComponent = isRoute ? Link : 'a'

              return (
                <NavComponent
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 hover:-translate-y-0.5 font-nav! font-bold tracking-widest flex items-center gap-1.5 text-xs xl:text-base ${isActive
                    ? isScrolled ? 'text-primary-orange' : 'text-white'
                    : isScrolled ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {item.icon && <Icon icon={item.icon} className={`w-4 h-4 xl:w-5 xl:h-5 ${isScrolled ? 'text-primary-orange' : 'text-white'}`} />}
                  {item.label}
                </NavComponent>
              )
            })}
            <Button
              variant={isScrolled ? 'solid' : 'white'}
              size="compact"
              className="w-auto! uppercase"
              onClick={openModal}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={isScrolled ? "lg:hidden p-2 text-dark-charcoal" : "lg:hidden p-2 text-white"}
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
      </div>
    </header>
    </>
  )
}
