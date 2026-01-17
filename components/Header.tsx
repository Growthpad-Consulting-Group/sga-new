'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface NavItem {
  href: string
  label: string
  icon?: string
}

interface SocialLink {
  icon: string
  url: string
  label: string
}

interface Country {
  code: string
  name: string
  path: string
  flag: string
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [countryModalOpen, setCountryModalOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { openModal } = useEnquiryModal()

  const navItems: NavItem[] = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/sustainability', label: 'SUSTAINABILITY' },
    { href: '/news-reports', label: 'NEWS & REPORTS' },
    { href: '#join-our-mission', label: 'CAREER' },
    { href: '/contact', label: 'CONTACT US' },
    { href: '/updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
  ]

  const socialLinks: SocialLink[] = [
    { icon: 'mdi:facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'mdi:twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:instagram', url: 'https://instagram.com', label: 'Instagram' },
  ]

  const countries: Country[] = [
    { code: 'ke', name: 'Kenya', path: '/ke', flag: 'twemoji:flag-kenya' },
    { code: 'ug', name: 'Uganda', path: '/ug', flag: 'twemoji:flag-uganda' },
    { code: 'tz', name: 'Tanzania', path: '/tz', flag: 'twemoji:flag-tanzania' },
  ]

  const isActiveCountry = (path: string): boolean => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white">
      {/* Top Bar with Social Icons and Flags */}
      <div className="bg-white text-black">
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
                  className="text-black hover:text-primary-orange transition-colors"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>

            {/* Country Flags - Right */}
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
                        ? 'bg-primary-orange text-white' 
                        : 'text-black/80 hover:text-black hover:bg-light-grey'
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
                className="text-black/80 hover:text-black transition-colors"
                aria-label="Open country selector"
              >
                <Icon icon="mdi:chevron-down" className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>
        {/* Border Bottom - Thick border matching content padding */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="border-b-2 border-black pt-2"></div>
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
                src="/images/logo.svg"
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
                      ? 'text-primary-orange' 
                      : 'text-dark-charcoal hover:text-primary-orange'
                  }`}
                >
                  {item.icon && <Icon icon={item.icon} className="w-4 h-4 xl:w-5 xl:h-5 text-primary-orange" />}
                  {item.label}
                </NavComponent>
              )
            })}
            {/* Enquire Now Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-orange text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full font-semibold text-sm xl:text-base shadow-md hover:shadow-lg transition-shadow ml-2 xl:ml-4"
            >
              Enquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-dark-charcoal"
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
                const isRoute = !item.href.startsWith('#')
                const isActive = isRoute ? pathname === item.href : false
                
                if (isRoute) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 sm:py-3.5 transition-colors flex items-center gap-2 text-sm sm:text-base ${
                        isActive 
                          ? 'text-primary-orange font-semibold' 
                          : 'text-dark-charcoal hover:text-primary-orange'
                      }`}
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
                    className="block py-3 sm:py-3.5 transition-colors flex items-center gap-2 text-sm sm:text-base text-dark-charcoal hover:text-primary-orange"
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
                className="block mt-4 sm:mt-5 bg-primary-orange text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-center text-sm sm:text-base shadow-md w-full"
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
                      className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white border-2 sm:border-4 border-primary-orange flex flex-col items-center justify-center shadow-xl transition-all overflow-hidden"
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
