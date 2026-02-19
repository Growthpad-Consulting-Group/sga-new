'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import { socialLinks } from '@/data/nav'

interface Country {
  code: string
  name: string
  path: string
  flag: string
}

interface TopBarProps {
  isScrolled: boolean
  isAboutPage: boolean
  countries: Country[]
  isActiveCountry: (path: string) => boolean
  countryPhone: string | null
  currentCountryName: string
  onCountryModalOpen: () => void
}

export default function TopBar({
  isScrolled,
  isAboutPage,
  countries,
  isActiveCountry,
  countryPhone,
  currentCountryName,
  onCountryModalOpen,
}: TopBarProps): React.JSX.Element {
  const router = useRouter()

  return (
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
                  onClick={onCountryModalOpen}
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
        {/* Border Bottom */}
        <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className={`border-b ${isAboutPage ? 'border-dark-charcoal/20' : 'border-white/30'} pt-2`}></div>
        </div>
      </div>
    </div>
  )
}
