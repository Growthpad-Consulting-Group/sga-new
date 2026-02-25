'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'

interface Country {
  code: string
  name: string
  path: string
  flag: string
}

interface CountryModalProps {
  isOpen: boolean
  onClose: () => void
  countries: Country[]
}

export default function CountryModal({ isOpen, onClose, countries }: CountryModalProps): React.JSX.Element | null {
  const router = useRouter()

  if (!isOpen) return null

  return (
    <>
      {/* Blurry Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4"
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
                  onClose()
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white border-2 sm:border-4 border-white flex flex-col items-center justify-center shadow-xl transition-all overflow-hidden"
                aria-label={`Enter ${country.name}`}
              >
                {/* Country Flag - Smaller, always visible */}
                <Icon
                  icon={country.flag}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 z-10"
                />

                {/* Right Arrow at bottom - visible on hover */}
                <div className="absolute bottom-2 sm:bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-orange"
                  />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}
