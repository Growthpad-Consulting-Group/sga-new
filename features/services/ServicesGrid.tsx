'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import type { ServiceDetail } from '@/data/services'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

interface ServiceCard {
    slug: string
    serviceName: string
    serviceIcon: string
    heroImage: string
    heroDescription: string
    href?: string
    /** Full service content, shown in the modal */
    detail?: ServiceDetail
}

interface ServicesGridProps {
    services: ServiceCard[]
    country: string
    type: string
    isIndividual: boolean
    countryName: string
}

export default function ServicesGrid({ services, country, type, isIndividual, countryName }: ServicesGridProps) {
    const { openModal } = useEnquiryModal()
    const [selected, setSelected] = useState<ServiceCard | null>(null)

    // Opened from a link with #services-grid: the browser jumps instantly on page load,
    // so glide to the grid once the page is ready.
    useEffect(() => {
        // Opened from a country page with ?scroll=services-grid: the page loads at the top,
        // then glides down to the grid.
        if (new URLSearchParams(window.location.search).get('scroll') !== 'services-grid') return
        const grid = document.getElementById('services-grid')
        if (!grid) return
        const timer = window.setTimeout(() => {
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
        return () => window.clearTimeout(timer)
    }, [])

    // Services on another site go straight to that site; ours open the modal
    const openService = (service: ServiceCard) => {
        if (service.href?.startsWith('http')) {
            window.location.href = service.href
            return
        }
        setSelected(service)
    }

    // Services that open in the modal, in grid order, so prev/next move through them and wrap around
    const navigable = services.filter((service) => Boolean(service.href) && !service.href?.startsWith('http'))
    const stepSelected = (step: number) => {
        if (!selected) return
        const index = navigable.findIndex((service) => service.slug === selected.slug)
        if (index === -1) return
        setSelected(navigable[(index + step + navigable.length) % navigable.length])
    }

    return (
        <section id="services-grid" className="bg-white pt-16 pb-24 sm:pt-20 sm:pb-16 container-fluid overflow-hidden">
            <div className="mx-auto">
                {/* Section Header */}
                {/* <div className="mb-10 md:mb-16 flex items-end justify-between border-b-2 border-gray-100 pb-4">
                    <h3 className="text-3xl md:text-5xl font-bold text-primary-orange">
                        {isIndividual ? 'Individual' : 'Corporate'} Security Services
                    </h3>
                </div> */}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        // Cards with a detail page open a modal with the service summary
                        const clickable = Boolean(service.href)
                        return (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={clickable ? () => openService(service) : undefined}
                            role={clickable ? 'button' : undefined}
                            tabIndex={clickable ? 0 : undefined}
                            onKeyDown={clickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') openService(service) } : undefined}
                            className={`bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-xl hover:-translate-y-1 transition-[translate,box-shadow] duration-300 flex flex-col group h-full ${clickable ? 'cursor-pointer' : ''}`}
                        >
                            <div className="flex flex-col h-full">
                                {/* Image Section */}
                                <div className="relative w-full aspect-16/10 overflow-hidden">
                                    <Image
                                        src={service.heroImage}
                                        alt={service.serviceName}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-navy-blue/10 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                {/* Content Section (Matched to sub-page "Related Services" style) */}
                                <div className="bg-primary-orange p-8 lg:p-6 xl:p-10 flex flex-col flex-1 relative">
                                    {/* Simple Decorative Circle from sub-page */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform"></div>

                                    <h3 className="text-2xl lg:text-xl xl:text-2xl font-bold text-white mb-4 tracking-tight">
                                        {service.serviceName}
                                    </h3>
                                    <p className="text-white/90 text-lg lg:text-sm xl:text-lg leading-relaxed mb-8 grow font-medium line-clamp-2">
                                        {service.heroDescription}
                                    </p>

                                    {service.href && (
                                        <div className="self-start">
                                            <div className="inline-block bg-white text-primary-orange px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.16em] hover:bg-gray-50 transition-all shadow-lg">
                                                {service.href?.startsWith("http") ? "LEARN MORE" : "VIEW DETAILS"}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                        )
                    })}
                </div>

                {/* Switch Division CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-primary-orange flex flex-col lg:flex-row items-center justify-between gap-5 shadow-xl shadow-primary-orange/20"
                >
                    <div className="text-center lg:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            Looking for {isIndividual ? 'Corporate' : 'Personal'} Security?
                        </h3>
                        <p className="text-white text-sm md:text-base font-medium">
                            Explore our {isIndividual ? 'business-focused' : 'specialized home'} security solutions.
                        </p>
                    </div>
                    <Button href={`${country ? `/${country}` : ''}/services/${isIndividual ? 'corporate' : 'individual'}`} variant="white" size="small">
                        Explore {isIndividual ? 'Corporate' : 'Individual'}
                    </Button>
                </motion.div>
            </div>

            {/* Service modal: opened from a card instead of navigating away */}
            <Modal
                isOpen={selected !== null}
                onClose={() => setSelected(null)}
                panelClassName="max-w-5xl"
                onPrev={navigable.length > 1 ? () => stepSelected(-1) : undefined}
                onNext={navigable.length > 1 ? () => stepSelected(1) : undefined}
            >
                {selected && (
                    <div className="md:flex md:min-h-full">
                        {/* Image column */}
                        <div className="relative h-56 w-full shrink-0 md:sticky md:top-0 md:h-[85vh] md:w-2/5 md:self-start">
                            <Image src={selected.heroImage} alt={selected.serviceName} fill className="object-cover" />
                        </div>

                        {/* Information column */}
                        <div className="min-w-0 flex-1 space-y-8 p-6 md:p-10">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-primary-orange mb-3">{selected.serviceName}</h3>
                                <p className="text-dark-charcoal leading-relaxed">{selected.heroDescription}</p>
                            </div>

                            {selected.detail?.overviewDescription && (
                                <div className="space-y-4 text-dark-charcoal leading-relaxed">
                                    {selected.detail.overviewTitle && (
                                        <h4 className="text-xl font-bold text-dark-charcoal">{selected.detail.overviewTitle}</h4>
                                    )}
                                    {selected.detail.overviewDescription.split('\n\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            )}

                            {selected.detail?.handlePoints && selected.detail.handlePoints.length > 0 && (
                                <div>
                                    <h4 className="text-xl font-bold text-dark-charcoal mb-3">
                                        {selected.detail.handlePointsTitle || selected.serviceName}
                                    </h4>
                                    {selected.detail.handlePointsIntro && (
                                        <p className="text-dark-charcoal mb-3">{selected.detail.handlePointsIntro}</p>
                                    )}
                                    <ul className="space-y-2">
                                        {selected.detail.handlePoints.map((point) => (
                                            <li key={point} className="flex items-start gap-2 text-dark-charcoal">
                                                <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selected.detail?.features && selected.detail.features.length > 0 && (
                                <div>
                                    {selected.detail.featuresTitle && (
                                        <h4 className="text-xl font-bold text-dark-charcoal mb-3">{selected.detail.featuresTitle}</h4>
                                    )}
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {selected.detail.features.map((feature) => (
                                            <div key={feature.title} className="rounded-2xl border border-gray-200 p-4">
                                                <p className="font-bold text-dark-charcoal mb-1">{feature.title}</p>
                                                <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selected.detail?.sections?.map((section) => (
                                <div key={section.title} className="space-y-3">
                                    <h4 className="text-xl font-bold text-dark-charcoal">{section.title}</h4>
                                    {section.paragraphs.map((paragraph, i) => (
                                        <p key={i} className="text-dark-charcoal leading-relaxed">{paragraph}</p>
                                    ))}
                                    {section.points && section.points.length > 0 && (
                                        <ul className="space-y-2">
                                            {section.pointsIntro && <p className="text-dark-charcoal">{section.pointsIntro}</p>}
                                            {section.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2 text-dark-charcoal">
                                                    <Icon icon="mdi:chevron-right" className="w-5 h-5 mt-0.5 text-primary-orange shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6">
                                <Button
                                    variant="solid"
                                    size="small"
                                    arrow={false}
                                    className="w-auto"
                                    onClick={() => {
                                        setSelected(null)
                                        openModal({ interest: selected.serviceName, enquiryType: isIndividual ? 'Individual' : 'Corporate' })
                                    }}
                                >
                                    Request a Quote
                                </Button>
                                {selected.href?.startsWith('http') && (
                                    <Button href={selected.href} variant="light" size="small" arrow={false} className="w-auto">
                                        Learn more
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    )
}
