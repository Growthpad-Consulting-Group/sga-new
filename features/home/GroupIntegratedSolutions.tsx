'use client'

import { motion } from 'framer-motion'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Button from '@/components/ui/Button'
import CircleCarousel, { type CircleCarouselItem } from '@/components/ui/CircleCarousel'
import { useState } from 'react'
import { coreServices, type CoreService } from '@/data/coreServices'
import { Link } from 'next-view-transitions'

type CountryCode = 'ke' | 'ug' | 'tz'
const countryLabels: Record<CountryCode, string> = { ke: 'Kenya', ug: 'Uganda', tz: 'Tanzania' }
const countryCodes: CountryCode[] = ['ke', 'ug', 'tz']

/** Detail page for a service in one country, e.g. /ke/services/corporate/courier */
const detailHref = (solution: Solution, cc: CountryCode): string | undefined => {
  const slugs = solution.detailSlugs
  if (!slugs) return undefined
  return slugs.corporate
    ? `/${cc}/services/corporate/${slugs.corporate}`
    : `/${cc}/services/individual/${slugs.individual}`
}

const ctaClass = 'inline-block px-5 py-2 rounded-full bg-primary-orange text-white font-semibold text-sm lg:text-xs hover:opacity-90 transition-opacity duration-300 ease-in-out'

type Solution = CoreService

interface GroupIntegratedSolutionsProps {
  title?: string
  description?: string
  /** Set on country pages so "Learn more" goes straight to that country */
  countryCode?: CountryCode
}

export default function GroupIntegratedSolutions({
  title = "What We Offer",
  countryCode,
  solutions = coreServices
}: GroupIntegratedSolutionsProps & { solutions?: Solution[] }) {
  const { openModal } = useEnquiryModal()
  const [openPickerIndex, setOpenPickerIndex] = useState<number | null>(null)

  // "Learn more": a link on country pages, or a country picker on the group page
  const renderCta = (solution: Solution, index: number) => {
    if (!solution.detailSlugs) return undefined

    if (countryCode) {
      return (
        <Link href={detailHref(solution, countryCode) ?? '#'} className={ctaClass}>
          Learn more
        </Link>
      )
    }

    return (
      <>
        {openPickerIndex === index && (
          <div className="flex flex-wrap justify-center gap-2">
            {countryCodes.map((cc) => (
              <Link
                key={cc}
                href={detailHref(solution, cc) ?? '#'}
                className="px-3 py-1 rounded-full bg-white text-dark-charcoal text-xs font-semibold transition-colors duration-300 ease-in-out hover:bg-primary-orange hover:text-white"
              >
                {countryLabels[cc]}
              </Link>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpenPickerIndex(openPickerIndex === index ? null : index)}
          className={ctaClass}
          aria-expanded={openPickerIndex === index}
        >
          Learn more
        </button>
      </>
    )
  }

  const items: CircleCarouselItem[] = solutions.map((solution, index) => ({
    key: solution.title,
    title: solution.title,
    description: solution.description,
    imageUrl: solution.imageUrl,
    href: solution.href,
    action: renderCta(solution, index),
  }))

  return (
    <section id="integrated-solutions" className="flex items-center justify-center bg-gray-200/90 relative min-h-[85vh] py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-fluid mx-auto"
      >
        <CircleCarousel title={title} items={items} />

        {/* Request a Quote Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Button variant="solid" size="small" onClick={openModal} className="w-auto">
            Request a Quote
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
