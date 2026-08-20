'use client'

import { Icon } from '@iconify/react'
import { useTransitionRouter } from 'next-view-transitions'
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
  const router = useTransitionRouter()

  return (
    <div className={`transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : ''}`}>
      <div className={isAboutPage ? 'bg-white text-dark-charcoal' : 'bg-primary-orange text-white'}>
        <div className="mx-auto container-fluid">
          <div className="flex items-center justify-between h-10 sm:h-12 text-xs sm:text-sm">
            {/* Social Icons - Left */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-transform duration-200 hover:scale-[1.2] active:scale-90 ${isAboutPage ? 'text-dark-charcoal hover:text-primary-orange' : 'text-white hover:text-white/80'}`}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-6 h-6 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>

            {/* Country Flags and Phone - Right */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {/* Country Phone Number - Before Flags */}
              {countryPhone && (
                <a
                  href={`tel:${countryPhone.replace(/\s/g, '')}`}
                  className={`flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 ${isAboutPage ? "text-dark-charcoal hover:text-primary-orange" : "text-white hover:text-white/80"}`}
                  aria-label={`Call ${countryPhone}`}
                >
                  <span className="font-bold text-[10px] sm:text-sm tracking-wider uppercase">CALL: {countryPhone}</span>
                </a>
              )}

              {/* Country Flags */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-1">
                {countries.map((country) => {
                  const active = isActiveCountry(country.path)
                  return (
                    <button
                      key={country.code}
                      onClick={() => router.push(country.path)}
                      className={`
                        w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95
                        ${active
                          ? isAboutPage ? 'bg-primary-orange text-white' : 'bg-white text-primary-orange'
                          : isAboutPage ? 'text-dark-charcoal/80 hover:text-primary-orange hover:bg-primary-orange/10' : 'text-white/80 hover:text-white hover:bg-white/20'
                        }
                      `}
                      aria-label={`Switch to ${country.name}`}
                      title={country.name}
                    >
                      <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex items-center justify-center ring-1 ring-white/20">
                        <Icon icon={country.flag} className="w-full h-full scale-125" />
                      </div>
                    </button>
                  )
                })}

                {/* Down Arrow Button */}
                <button
                  onClick={onCountryModalOpen}
                  className={`transition-all duration-200 hover:scale-110 active:scale-95 ${isAboutPage ? 'text-dark-charcoal/80 hover:text-primary-orange' : 'text-white/80 hover:text-white'}`}
                  aria-label="Open country selector"
                >
                  <Icon icon="mdi:chevron-down" className="w-6 h-6 sm:w-5 sm:h-5" />
                </button>
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
        <div className="mx-auto container-fluid">
          <div className={`border-b ${isAboutPage ? 'border-dark-charcoal/20' : 'border-white/30'} pt-2`}></div>
        </div>
      </div>
    </div>
  )
}
