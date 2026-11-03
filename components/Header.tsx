'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useTransitionRouter } from 'next-view-transitions'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Button from '@/components/Button'
import { useCountryModal } from '@/contexts/CountryModalContext'
import { navItems, getCountryNavItems, socialLinks, countries } from '@/data/nav'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useTransitionRouter()
  const { openModal } = useEnquiryModal()
  const { isOpen: countryModalOpen, closeModal: closeCountryModal, redirectPath } = useCountryModal()

  // Determine if we're on a country page and get appropriate nav items
  const isHomePage = pathname === '/'
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

  // Browsers restore scroll position on reload by default, and the
  // hero/topbar's layout settling shortly after load makes that restoration
  // nudge the page down by a few px each time — most visible as a small
  // creeping offset when reloading at the very top. Opt out so reloads land
  // exactly where the URL says (0 for the homepage).
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Handle scroll detection: glass/scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scroll while an overlay is open
  useEffect(() => {
    if (countryModalOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [countryModalOpen, mobileMenuOpen])

  const isActiveCountry = (path: string): boolean => {
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  // Consolidated class generators
  const getTopBarColorClasses = () => {
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
    if (isScrolled) return 'border-dark-charcoal/80'
    return isCountryPage ? 'border-white/30' : 'border-dark-charcoal/80'
  }

  const getLogoSrc = () => {
    if (isCountryPage && !isScrolled) {
      return '/images/logo-white.svg'
    }
    return '/images/logo.svg'
  }

  // Common class strings
  // container-fluid's clamp(1rem,5vw,8rem) side padding is sized for a
  // full-width header. Once scrolled, the outer wrapper already insets the
  // pill with its own mx-4/mx-6/lg:mx-12 margin, so keeping container-fluid
  // on top of that stacks both and pushes content too far from the pill's
  // edge — swap to a smaller fixed padding instead.
  const containerClasses = `max-w-9xl mx-auto ${isScrolled ? 'px-4 sm:px-6 lg:px-4' : 'px-4 sm:px-6 lg:px-4 xl:container-fluid'}`
  const buttonHoverClasses = 'transition-colors'
  const flagButtonClasses = 'w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-7 lg:h-7 xl:w-10 xl:h-10 flex items-center justify-center rounded-full transition-all'
  const mobileMenuItemClasses = 'flex items-center gap-2 py-3 sm:py-3.5 transition-colors text-sm sm:text-base font-nav'

  return (
    <>
    {/* Liquid-glass refraction filter for the pill background layer below.
        Hidden via zero size + overflow (not display:none — some browsers
        won't apply a filter referenced from a display:none SVG). */}
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
      {/* Out of document flow (fixed, not sticky/static) so page content —
          starting with the hero — sits at y:0 and scrolls up through the
          transparent header instead of being pushed down by its box.
          Hide-on-scroll-down transform lives on this inner wrapper rather
          than on <header> itself — a transform on <header> would turn any
          `position: fixed` descendant (the country modal below) into being
          positioned relative to the header instead of the viewport.
          <header> itself is pointer-events-none because a transform on a
          child doesn't shrink the parent's box: even fully hidden, this
          wrapper's untransformed height would otherwise keep intercepting
          clicks/selection at the top of the page. Only this inner,
          actually-visible (and transform-following) layer takes events. */}
      <div
        style={{
          transition:
            'margin 500ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 550ms cubic-bezier(0.65, 0, 0.35, 1)',
        }}
        className={`pointer-events-auto relative isolate ${
          isScrolled ? 'mx-4 mt-4 rounded-3xl sm:mx-6 sm:mt-4 lg:mx-12' : 'mx-0 mt-0 w-full rounded-none'
        }`}
      >
      {/* "Liquid glass": a distorted+blurred backdrop layer, a faint white
          tint, and an inset specular ring — stacked behind the content so
          the distortion never touches the (crisp) links/logo on top.
          overflow-hidden is scoped to just this glass layer, not the whole
          pill, so the mobile dropdown (which extends below on open) isn't
          clipped by it. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
        <div
          aria-hidden
          style={{ filter: 'url(#header-glass-distortion)' }}
          className="absolute inset-0 backdrop-blur-[3px]"
        />
        <div
          aria-hidden
          className={`absolute inset-0 backdrop-saturate-180 transition-colors duration-500 ${
            isScrolled ? 'bg-white/70' : (isCountryPage || isHomePage) ? 'bg-white/10' : 'bg-white'
          }`}
        />
        <div
          aria-hidden
          className={`absolute inset-0 ring-1 ring-inset transition-shadow duration-500 ${
            isScrolled ? 'shadow-lg shadow-black/5 ring-white/40' : 'ring-white/20'
          }`}
        />
      </div>

      {/* Top Bar with Social Icons and Flags */}
      <div
        className={`relative grid transition-[grid-template-rows] duration-500 ease-out ${
          isScrolled ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
        } ${getTopBarColorClasses()}`}
      >
      <div className="overflow-hidden">
        <div className={containerClasses}>
          <div className="flex items-center justify-between h-10 sm:h-12 text-xs sm:text-sm">
            {/* Social Icons - Left */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-2 xl:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-200 hover:scale-[1.2] active:scale-90 ${getTextColor()}`}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-6 h-6 sm:w-6 sm:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                </a>
              ))}
            </div>

            {/* Country Flags - Right */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-0.5 xl:space-x-2">
              {/* Call Number - Only show on country pages */}
              {isCountryPage && countryPhone && (
                <a
                  href={`tel:${countryPhone.replace(/\s/g, '')}`}
                  className={`hidden sm:flex items-center gap-1 text-md font-semibold uppercase transition-all duration-200 hover:scale-105 active:scale-95 ${getTextColor()}`}
                  aria-label={`Call ${countryPhone}`}
                >
                  <Icon icon="mdi:phone" className="w-3 h-3" />
                  <span>Call: {countryPhone}</span>
                </a>
              )}

              {countries.map((country) => {
                const active = isActiveCountry(country.path)
                const flagButtonColor = active
                  ? 'bg-primary-orange text-white'
                  : isCountryPage && !isScrolled
                    ? 'text-white/80 hover:text-white hover:bg-white/20'
                    : 'text-black/80 hover:text-black hover:bg-light-grey'

                return (
                  <button
                    key={country.code}
                    onClick={() => router.push(country.path)}
                    disabled={active}
                    className={`${flagButtonClasses} ${flagButtonColor} ${active ? 'cursor-default' : 'cursor-pointer hover:scale-110 active:scale-95'}`}
                    aria-label={active ? `Currently in ${country.name}` : `Switch to ${country.name}`}
                    title={country.name}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-10 xl:h-10 rounded-full overflow-hidden flex items-center justify-center ring-1 ring-white/20">
                      <Icon icon={country.flag} className="w-8 h-8 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                    </div>
                  </button>
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

            </div>
          </div>
        </div>

        {/* Border Bottom */}
        <div className={containerClasses}>
          <div className={`border-b-2 lg:border-b ${getBorderColor()} transition-all duration-300`}></div>
        </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`relative ${containerClasses}`}>
        <div
          className={`flex items-center justify-between transition-[height] duration-500 ease-out ${
            isScrolled ? 'h-16 sm:h-20 lg:h-16 xl:h-20' : 'h-20 sm:h-24 lg:h-[4.5rem] xl:h-24'
          }`}
        >
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src={getLogoSrc()}
                alt="SGA Security Logo"
                width={202}
                height={72}
                className="w-[160px] lg:w-[128px] xl:w-[160px] h-auto"
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
                const NavComponent = isRoute ? Link : 'a'

                return (
                  <NavComponent
                    key={item.href}
                    href={item.href}
                    className={`transition-all duration-200 hover:-translate-y-0.5 font-nav font-bold tracking-widest text-xs xl:text-base ${getNavTextColor(isActive)}`}
                  >
                    {item.label}
                  </NavComponent>
                )
              })}
            </div>
          </div>

          {/* CTAs - Right */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
            {/* Icon-based nav items */}
            {currentNavItems.filter(item => item.icon).map((item) => {
              const isRoute = !item.href.startsWith('#')
              const isActive = isRoute ? pathname === item.href : false
              const NavComponent = isRoute ? Link : 'a'

              return (
                <NavComponent
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 hover:-translate-y-0.5 font-nav font-medium flex items-center gap-1.5 text-xs xl:text-base ${getNavTextColor(isActive)}`}
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
            <Button
              variant={isCountryPage && !isScrolled ? 'white' : 'solid'}
              size="compact"
              className="w-auto! uppercase"
              onClick={openModal}
            >
              Enquire Now
            </Button>
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
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-full z-50 mx-1 mt-2 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-3xl border border-white/70 bg-white/95 p-4 shadow-2xl shadow-black/15 backdrop-blur-xl sm:mx-2 sm:p-5 lg:hidden"
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-orange">Navigation</p>
                  <p className="mt-0.5 text-xs text-dark-charcoal/55">Explore SGA Security</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-orange/10 text-primary-orange">
                  <Icon icon="solar:compass-big-broken" className="h-5 w-5" />
                </span>
              </div>

              {/* Call Number - Mobile */}
              {isCountryPage && countryPhone && (
                <motion.a
                  href={`tel:${countryPhone.replace(/\s/g, '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mb-3 flex items-center gap-3 rounded-2xl bg-primary-orange/10 px-4 py-3 text-sm font-semibold text-primary-orange"
                  aria-label={`Call ${countryPhone}`}
                >
                  <Icon icon="mdi:phone" className="w-5 h-5 text-primary-orange shrink-0" />
                  <span>Call: {countryPhone}</span>
                </motion.a>
              )}

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {currentNavItems.map((item) => {
                  const isRoute = !item.href.startsWith('#')
                  const isActive = isRoute ? pathname === item.href : false
                  const itemClasses = `group flex min-h-12 items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${isActive
                    ? 'bg-primary-orange text-white shadow-md shadow-primary-orange/20'
                    : 'bg-light-grey/70 text-dark-charcoal hover:bg-primary-orange/10 hover:text-primary-orange'
                  }`

                  const content = (
                    <>
                      <span className="flex min-w-0 items-center gap-2.5">
                        {item.icon && (
                          <Icon
                            icon={item.icon}
                            className={`h-5 w-5 shrink-0 ${isActive ? 'text-white' : 'text-primary-orange'}`}
                          />
                        )}
                        <span className="truncate">{item.label}</span>
                      </span>
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isActive ? 'text-white/80' : 'text-dark-charcoal/35 group-hover:text-primary-orange'}`}
                      />
                    </>
                  )

                  if (isRoute) {
                    return (
                      <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={itemClasses}>
                        {content}
                      </Link>
                    )
                  }

                  return (
                    <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={itemClasses}>
                      {content}
                    </a>
                  )
                })}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-orange px-6 py-3.5 text-center font-heading text-sm font-semibold text-white shadow-lg shadow-primary-orange/20 transition-transform duration-150 active:scale-[0.98] sm:text-base"
              >
                Enquire Now
                <Icon icon="solar:arrow-right-linear" className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </div>

      {/* Country Selection Modal */}
      <AnimatePresence>
        {countryModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto fixed inset-0 bg-black/30 backdrop-blur-md z-50"
              onClick={() => closeCountryModal()}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => closeCountryModal()}
            >
              <div
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Now closer to content */}
                <button
                  onClick={() => closeCountryModal()}
                  className="absolute -top-12 -right-4 sm:-top-16 sm:-right-8 text-white hover:text-primary-orange transition-all duration-200 hover:scale-110 hover:rotate-90 active:scale-90 z-60"
                  aria-label="Close modal"
                >
                  <Icon icon="teenyicons:x-circle-outline" className="w-8 h-8 sm:w-9 sm:h-9" />
                </button>

                <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.code}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <button
                        onClick={() => {
                          if (!isActiveCountry(country.path)) {
                            // If redirectPath is set, combine country path with redirectPath
                            const targetPath = redirectPath
                              ? `/${country.code}${redirectPath}`
                              : country.path

                            router.push(targetPath)
                            closeCountryModal()
                          }
                        }}
                        disabled={isActiveCountry(country.path)}
                        className={`group relative w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-white border-2 sm:border-4 border-primary-orange flex items-center justify-center shadow-2xl transition-all duration-200 overflow-hidden ${isActiveCountry(country.path) ? 'cursor-default opacity-80' : 'cursor-pointer hover:scale-105 active:scale-95'}`}
                        aria-label={isActiveCountry(country.path) ? `Currently in ${country.name}` : `Enter ${country.name}`}
                      >
                        {/* ENTER label at the top - shows only on hover and if NOT active */}
                        {!isActiveCountry(country.path) && (
                          <div className="absolute top-6 sm:top-12 md:top-20 left-0 right-0 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-dark-charcoal uppercase tracking-[0.3em]">
                              {redirectPath ? 'SELECT REGION' : 'ENTER'}
                            </span>
                          </div>
                        )}

                        <div className={`flex items-center gap-2 sm:gap-4 md:gap-5 z-10 px-6 transition-transform duration-300 ${!isActiveCountry(country.path) ? 'group-hover:translate-y-2 md:group-hover:translate-y-4' : ''}`}>
                          <Icon
                            icon={country.flag}
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0"
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
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
    </>
  )
}
