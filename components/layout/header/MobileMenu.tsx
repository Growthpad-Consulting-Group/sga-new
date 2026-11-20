'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'next-view-transitions'
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

// Same look as the group mobile menu in Header.tsx: floating panel, pill rows, Enquire button.
const tileBase = 'group flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors'
const tileIdle = 'bg-light-grey/70 text-dark-charcoal hover:bg-primary-orange/10 hover:text-primary-orange'
const tileActive = 'bg-primary-orange text-white shadow-md shadow-primary-orange/20'

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
  pathname,
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

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {navItems.map((item) => {
              if (item.isDropdown) {
                const isServices = item.dropdownType === 'services'
                const mobileOpen = isServices ? mobileServicesOpen : mobileIndustriesOpen
                const setMobileOpen = isServices ? setMobileServicesOpen : setMobileIndustriesOpen
                const dropdownItems = isServices ? servicesItems : industriesItems

                return (
                  <div key={item.href} className="sm:col-span-2">
                    <button
                      type="button"
                      onClick={() => setMobileOpen(!mobileOpen)}
                      aria-expanded={mobileOpen}
                      className={`${tileBase} ${mobileOpen ? tileActive : tileIdle}`}
                    >
                      <span>{item.label}</span>
                      <Icon
                        icon={mobileOpen ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                        className={`h-4 w-4 shrink-0 ${mobileOpen ? 'text-white/80' : 'text-dark-charcoal/35'}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 rounded-2xl border border-primary-orange/15 bg-white p-2">
                            {isServices && (
                              <div className="mb-2 flex items-center gap-1 rounded-full bg-primary-orange/10 p-1">
                                {(['Individual', 'Corporate'] as const).map((type) => (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() => setServicesViewType(type)}
                                    className={`flex-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${servicesViewType === type
                                      ? 'bg-primary-orange text-white'
                                      : 'text-primary-orange hover:bg-primary-orange/10'
                                      }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            )}
                            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                              {dropdownItems.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => {
                                    onClose()
                                    setMobileOpen(false)
                                  }}
                                  className="flex min-h-10 items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm text-dark-charcoal/80 transition-colors hover:bg-primary-orange/10 hover:text-primary-orange"
                                >
                                  <span className="truncate">{sub.label}</span>
                                  <Icon icon="solar:arrow-right-up-linear" className="h-4 w-4 shrink-0 text-dark-charcoal/35" />
                                </Link>
                              ))}
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
              const content = (
                <>
                  <span className="flex min-w-0 items-center gap-2.5">
                    {item.icon && (
                      <Icon icon={item.icon} className={`h-5 w-5 shrink-0 ${isActive ? 'text-white' : 'text-primary-orange'}`} />
                    )}
                    <span className="truncate">{item.label}</span>
                  </span>
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isActive ? 'text-white/80' : 'text-dark-charcoal/35 group-hover:text-primary-orange'}`}
                  />
                </>
              )
              const className = `${tileBase} ${isActive ? tileActive : tileIdle}`

              if (isRoute) {
                return (
                  <Link key={item.href} href={item.href} onClick={onClose} className={className}>
                    {content}
                  </Link>
                )
              }
              return (
                <a key={item.href} href={item.href} onClick={onClose} className={className}>
                  {content}
                </a>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              onClose()
              openModal()
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-orange px-6 py-3.5 text-center font-heading text-sm font-semibold text-white shadow-lg shadow-primary-orange/20 transition-transform duration-150 active:scale-[0.98] sm:text-base"
          >
            Enquire Now
            <Icon icon="solar:arrow-right-linear" className="h-5 w-5" />
          </button>
        </motion.div>
  )
}
