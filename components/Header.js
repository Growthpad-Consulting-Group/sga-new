'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { openModal } = useEnquiryModal()

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '#sustainability-esg', label: 'SUSTAINABILITY' },
    { href: '#news', label: 'NEWS & REPORTS' },
    { href: '#join-our-mission', label: 'CAREER' },
    { href: '#contact', label: 'CONTACT US' },
    { href: '#updates', label: 'UPDATES', icon: 'material-symbols:news-outline-rounded' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      {/* Top Bar with Social Icons and Flags */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Social Icons - Left */}
            <div className="flex items-center space-x-4">
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
                  <Icon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Country Flags - Right */}
            <div className="flex items-center space-x-3">
              {countries.map((country) => {
                const active = isActiveCountry(country.path)
                return (
                  <motion.button
                    key={country.code}
                    onClick={() => router.push(country.path)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-8 h-8 flex items-center justify-center rounded-full transition-all
                      ${active 
                        ? 'bg-primary-orange text-white' 
                        : 'text-black/80 hover:text-black hover:bg-light-grey'
                      }
                    `}
                    aria-label={`Switch to ${country.name}`}
                    title={country.name}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center ring-1 ring-white/20">
                      <Icon icon={country.flag} className="w-full h-full scale-125" />
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
        {/* Border Bottom - Thick border matching content padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-black pt-2"></div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isRoute = !item.href.startsWith('#')
              const isActive = isRoute ? pathname === item.href : false
              const NavComponent = isRoute ? motion(Link) : motion.a
              
              return (
                <NavComponent
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`transition-colors font-medium flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-primary-orange' 
                      : 'text-dark-charcoal hover:text-primary-orange'
                  }`}
                >
                  {item.icon && <Icon icon={item.icon} className="w-5 h-5 text-primary-orange" />}
                  {item.label}
                </NavComponent>
              )
            })}
            {/* Enquire Now Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-orange text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow ml-4"
            >
              Enquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
              className="md:hidden pb-4"
            >
              {navItems.map((item) => {
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
                    className={`block py-2 transition-colors flex items-center gap-2 ${
                      isActive 
                        ? 'text-primary-orange' 
                        : 'text-dark-charcoal hover:text-primary-orange'
                    }`}
                  >
                    {item.icon && <Icon icon={item.icon} className="w-5 h-5 text-primary-orange" />}
                    {item.label}
                  </NavComponent>
                )
              })}
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                whileTap={{ scale: 0.95 }}
                className="block mt-4 bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-center shadow-md w-full"
              >
                Enquire Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

