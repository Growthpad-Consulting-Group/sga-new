'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'

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

interface MegaMenuDropdownProps {
  isOpen: boolean
  onClose: () => void
  isServices: boolean
  servicesViewType: 'Individual' | 'Corporate'
  setServicesViewType: (type: 'Individual' | 'Corporate') => void
  dropdownItems: ServiceItem[]
  countries: Country[]
  isActiveCountry: (path: string) => boolean
  shortcuts: ServiceItem[]
  countryPrefix: string
  countryPhone: string | null
  openModal: () => void
}

export default function MegaMenuDropdown({
  isOpen,
  onClose,
  isServices,
  servicesViewType,
  setServicesViewType,
  dropdownItems,
  countries,
  isActiveCountry,
  shortcuts,
  countryPrefix,
  countryPhone,
  openModal,
}: MegaMenuDropdownProps): React.JSX.Element | null {
  const router = useRouter()

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary-orange z-[60] overflow-y-auto"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top row: Logo, Toggle, Close */}
        <div className="flex items-center justify-between border-b border-white/20 pb-8 mb-16">
          <Link href="/" onClick={onClose}>
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
              onClick={onClose}
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
                        onClose()
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
                    onClick={onClose}
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
              {dropdownItems.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  onClick={onClose}
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
                    onClose()
                    openModal()
                  }}
                  className="w-full bg-white text-primary-orange py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:bg-white/90 transition-colors"
                >
                  <Icon icon="mdi:file-document-outline" className="w-5 h-5 outline-none" />
                  Request a Quote
                </button>
                <button
                  onClick={() => {
                    onClose()
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
                  onClick={onClose}
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
  )
}
