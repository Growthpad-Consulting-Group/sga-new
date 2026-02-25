'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@iconify/react'

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

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  pathname: string
  isAboutPage: boolean
  mobileServicesOpen: boolean
  setMobileServicesOpen: (open: boolean) => void
  mobileIndustriesOpen: boolean
  setMobileIndustriesOpen: (open: boolean) => void
  servicesViewType: 'Individual' | 'Corporate'
  setServicesViewType: (type: 'Individual' | 'Corporate') => void
  servicesItems: ServiceItem[]
  industriesItems: ServiceItem[]
  openModal: () => void
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
  pathname,
  isAboutPage,
  mobileServicesOpen,
  setMobileServicesOpen,
  mobileIndustriesOpen,
  setMobileIndustriesOpen,
  servicesViewType,
  setServicesViewType,
  servicesItems,
  industriesItems,
  openModal,
}: MobileMenuProps): React.JSX.Element | null {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden pb-4 px-4 overflow-hidden bg-white shadow-2xl rounded-b-2xl absolute left-0 right-0 top-full z-50 border-t border-gray-100"
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
                className={`w-full py-3 sm:py-3.5 transition-colors flex items-center justify-between text-sm sm:text-base text-dark-charcoal hover:text-primary-orange font-semibold`}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  <Icon icon="mdi:plus" className={`w-5 h-5 text-primary-orange flex-shrink-0`} />
                </span>
                <Icon
                  icon={mobileOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className={`w-5 h-5 text-dark-charcoal flex-shrink-0`}
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
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${servicesViewType === 'Individual'
                                ? 'bg-primary-orange text-white'
                                : 'text-primary-orange hover:text-primary-orange/80'
                              }`}
                          >
                            Individual
                          </button>
                          <button
                            onClick={() => setServicesViewType('Corporate')}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${servicesViewType === 'Corporate'
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
                      {dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={() => {
                            onClose()
                            setMobileOpen(false)
                          }}
                          className={`block py-2 text-sm transition-colors text-dark-charcoal/80 hover:text-primary-orange`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
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

        return (
          <NavComponent
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`block py-3 sm:py-3.5 transition-colors flex items-center gap-2 text-sm sm:text-base font-semibold ${isActive ? 'text-primary-orange' : 'text-dark-charcoal hover:text-primary-orange'
              }`}
          >
            {item.icon && <Icon icon={item.icon} className={`w-5 h-5 text-primary-orange flex-shrink-0`} />}
            <span>{item.label}</span>
          </NavComponent>
        )
      })}
      <motion.button
        onClick={() => {
          onClose()
          openModal()
        }}
        whileTap={{ scale: 0.95 }}
        className="block mt-4 sm:mt-5 bg-primary-orange text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-center text-sm sm:text-base shadow-md w-full"
      >
        Enquire Now
      </motion.button>
    </motion.div>
  )
}
