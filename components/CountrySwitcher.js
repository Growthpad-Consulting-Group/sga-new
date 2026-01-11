'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const countries = [
  { code: '', name: 'Global', flag: '🌍', path: '/' },
  { code: 'ke', name: 'Kenya', flag: '🇰🇪', path: '/ke' },
  { code: 'ug', name: 'Uganda', flag: '🇺🇬', path: '/ug' },
  { code: 'tz', name: 'Tanzania', flag: '🇹🇿', path: '/tz' },
]

export default function CountrySwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
      {countries.map((country) => {
        const active = isActive(country.path)
        return (
          <motion.button
            key={country.code}
            onClick={() => router.push(country.path)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-2xl
              transition-all duration-300 shadow-lg
              ${active 
                ? 'bg-primary-orange ring-4 ring-primary-orange/30' 
                : 'bg-white hover:bg-light-grey'
              }
            `}
            aria-label={`Switch to ${country.name}`}
            title={country.name}
          >
            {country.flag}
          </motion.button>
        )
      })}
    </div>
  )
}

