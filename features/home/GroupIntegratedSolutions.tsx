'use client'

import { motion } from 'framer-motion'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Button from '@/components/ui/Button'
import CircleCarousel, { type CircleCarouselItem } from '@/components/ui/CircleCarousel'
import { coreServices, type CoreService } from '@/data/services'
import { Link } from 'next-view-transitions'

type CountryCode = 'ke' | 'ug' | 'tz'

/** Detail page for a service in one country, e.g. /ke/services/corporate/courier */
const detailHref = (solution: Solution, cc: CountryCode): string | undefined => {
  const slugs = solution.detailSlugs
  if (!slugs) return undefined
  return slugs.corporate
    ? `/${cc}/services/corporate/${slugs.corporate}`
    : `/${cc}/services/individual/${slugs.individual}`
}

/** Group-level detail page for a service, e.g. /services/corporate/courier */
const groupDetailHref = (solution: Solution): string | undefined => {
  const slugs = solution.detailSlugs
  if (!slugs) return undefined
  return slugs.corporate
    ? `/services/corporate/${slugs.corporate}`
    : `/services/individual/${slugs.individual}`
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

  // Where a service's bubble and "Learn more" lead, in one click:
  // country page -> that country's service; group pages -> the group service page (no country selection)
  const serviceHref = (solution: Solution): string | undefined => {
    // Services without an internal page (e.g. Home Security Solutions) link to their external page
    if (!solution.detailSlugs) return solution.href
    if (countryCode) return detailHref(solution, countryCode)
    return groupDetailHref(solution)
  }

  const renderCta = (solution: Solution) => {
    const href = serviceHref(solution)
    if (!href) return undefined
    return (
      <Link href={href} className={ctaClass}>
        Learn more
      </Link>
    )
  }

  const items: CircleCarouselItem[] = solutions.map((solution) => ({
    key: solution.title,
    title: solution.title,
    description: solution.description,
    imageUrl: solution.imageUrl,
    href: serviceHref(solution) ?? solution.href,
    action: renderCta(solution),
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
