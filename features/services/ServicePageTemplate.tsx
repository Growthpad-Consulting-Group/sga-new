'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import SectionSeparator from '@/components/ui/SectionSeparator'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'
import Button from '@/components/ui/Button'
import { CarouselArrows } from '@/components/ui/Carousel'

interface ServicePageTemplateProps {
    serviceName?: string
    serviceIcon?: string
    heroImage?: string
    heroTitle?: string
    heroDescription?: string
    overviewTitle?: string
    overviewDescription?: string
    overviewImage?: string
    featuresTitle?: string
    featuresDescription?: string
    features?: any[]
    relatedServices?: any[]
    whyChooseTitle?: string
    whyChooseDescription?: string
    whyChoosePoints?: any[]
    ctaTitle?: string
    ctaDescription?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    countryCode?: 'ke' | 'ug' | 'tz' | string
    serviceType?: 'Individual' | 'Corporate' | string
    handlePointsTitle?: string
    handlePointsIntro?: string
    handlePoints?: string[]
    sections?: { title: string; paragraphs: string[]; image?: string; pointsIntro?: string; points?: string[] }[]
}

export default function ServicePageTemplate({
    serviceName = '',
    serviceIcon = '',
    heroImage = '',
    heroTitle = '',
    heroDescription = '',
    overviewTitle = '',
    overviewDescription = '',
    overviewImage = '',
    featuresTitle = '',
    featuresDescription = '',
    features = [],
    relatedServices = [],
    whyChooseTitle = '',
    whyChooseDescription = '',
    whyChoosePoints = [],
    ctaTitle = '',
    ctaDescription = '',
    ctaButtonText = '',
    ctaButtonLink = '',
    countryCode = 'ke',
    serviceType = 'Individual',
    handlePointsTitle = '',
    handlePointsIntro = '',
    handlePoints = [],
    sections = [],
}: ServicePageTemplateProps) {
    const countryNames: Record<string, string> = {
        ke: 'Kenya',
        ug: 'Uganda',
        tz: 'Tanzania',
    }
    const countryName = countryNames[countryCode] || 'Kenya'

    const emergencyPhones: Record<string, string> = {
        ke: '0733 700 500',
        ug: '0717 800 752',
        tz: '0784 700 299',
    }
    const emergencyPhone = emergencyPhones[countryCode] || (countryCode === 'ug' ? '0717 800 752' : countryCode === 'tz' ? '0784 700 299' : '0733 700 500')

    const { openModal } = useEnquiryModal()
    const [relatedServicesIndex, setRelatedServicesIndex] = useState(0)
    const [relatedPaused, setRelatedPaused] = useState(false)
    // Three cards on md and up, one card on mobile
    const [relatedPerView, setRelatedPerView] = useState(3)

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)')
        const update = () => setRelatedPerView(mq.matches ? 3 : 1)
        update()
        mq.addEventListener('change', update)
        return () => mq.removeEventListener('change', update)
    }, [])

    // Autoplay every 10s like the group page carousel; pauses while the mouse is over it
    useEffect(() => {
        if (relatedPaused || !relatedServices || relatedServices.length <= relatedPerView) return
        const timer = setInterval(() => {
            setRelatedServicesIndex((prev) => (prev >= relatedServices.length - relatedPerView ? 0 : prev + 1))
        }, 10000)
        return () => clearInterval(timer)
    }, [relatedPaused, relatedServices, relatedPerView])

    const handlePrevRelated = () => {
        if (!relatedServices) return
        setRelatedServicesIndex((prev) => (prev === 0 ? Math.max(0, relatedServices.length - relatedPerView) : prev - 1))
    }

    const handleNextRelated = () => {
        if (!relatedServices) return
        setRelatedServicesIndex((prev) => (prev >= relatedServices.length - relatedPerView ? 0 : prev + 1))
    }

    const responsePackages = [
        {
            title: 'Essential Home Response',
            features: [
                'Rapid panic & alarm response',
            ],
        },
        {
            title: 'Pro Home Response',
            features: [
                'Everything in Essential',
                'CCTV verification',
                'Monthly check-ins',
            ],
        },
        {
            title: 'Family+ Response',
            features: [
                'Priority SLA',
                'On-site standby when required',
                'Annual safety drill',
            ],
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="bg-white text-dark-charcoal pt-32 sm:pt-40 lg:pt-48 pb-12 relative overflow-hidden">
                <div className="container-fluid mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
                        >

                            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary-orange leading-tight">
                                {serviceName}
                            </h2>
                            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-xl">
                                {heroDescription}
                            </p>

                        </motion.div>

                        {/* Right Column - Image */}
                        <div className="relative w-full aspect-4/3 lg:aspect-square lg:max-w-[85%] xl:max-w-[440px] lg:ml-auto">
                            <Image
                                src={heroImage}
                                alt={`${serviceName} Service - ${heroTitle}`}
                                fill
                                className="object-cover rounded-3xl shadow-2xl"
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </div>
                    </div>

                </div>

            </section>

            <div className="relative h-0 z-30">
                <SectionSeparator className="-top-7" />
            </div>

            {/* Extra Sections (e.g. Fire Alarm Response) */}
            {sections.map((section, sectionIndex) => (
                <section key={sectionIndex} className="flex items-center justify-center bg-gray-200/90 text-dark-charcoal py-20 sm:py-28 relative">
                    <div className="container-fluid mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
                                {section.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            {section.points && section.points.length > 0 && (
                                <div className="space-y-4">
                                    {section.pointsIntro && (
                                        <p className="text-lg font-bold text-dark-charcoal">{section.pointsIntro}</p>
                                    )}
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {section.points.map((point, index) => (
                                            <li key={index} className="flex items-start gap-3 text-lg text-dark-charcoal font-medium">
                                                <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-primary-orange shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {section.image && (
                            <div className="relative w-full aspect-4/3 lg:aspect-square lg:max-w-[85%] lg:ml-auto">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-cover rounded-3xl shadow-2xl"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                />
                            </div>
                        )}
                    </div>
                </section>
            ))}

            {/* What We Handle Section */}
            {handlePoints.length > 0 && (
            <section className="flex items-center justify-center bg-primary-orange text-white py-20 sm:py-28 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="container-fluid mx-auto relative z-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10 lg:col-span-2"
                        >
                            <div className="section-title-container-white w-full">
                                <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                    {handlePointsTitle || serviceName}
                                </h2>
                            </div>
                            {handlePointsIntro && (
                                <p className="text-lg md:text-xl text-white font-medium -mt-4">{handlePointsIntro}</p>
                            )}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {handlePoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 text-lg md:text-xl text-white font-medium group"
                                    >
                                        <div className="mt-1 shrink-0 bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                                            <Icon
                                                icon="solar:check-circle-bold"
                                                className="w-5 h-5 text-white"
                                            />
                                        </div>
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </motion.div>
                <SectionSeparator />
            </section>
            )}


            {/* Why Choose Section (Optional, if points exist) */}
            {whyChoosePoints && whyChoosePoints.length > 0 && (
                <section className="flex items-center justify-center bg-white text-dark-charcoal py-20 sm:py-28 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="container-fluid mx-auto"
                    >
                        <div className="mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="section-title-container w-full">
                                    <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
                                        {whyChooseTitle}
                                    </h2>
                                </div>
                                {whyChooseDescription && (
                                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl font-medium">
                                        {whyChooseDescription}
                                    </p>
                                )}
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChoosePoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-light-grey rounded-[32px] p-10 shadow-xs hover:shadow-xl transition-all border border-gray-100 group"
                                >
                                    <div className="w-12 h-1 bg-primary-orange/30 mb-6 group-hover:w-20 transition-all"></div>
                                    <h3 className="text-xl font-bold text-navy-blue mb-4 tracking-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <SectionSeparator />
                </section>
            )}

            {/* Related Services Section */}
            {relatedServices && relatedServices.length > 0 && (
                <>
                <div className="relative h-0 z-30">
                    <SectionSeparator className="-top-7" />
                </div>
                <section className="flex items-center justify-center bg-white relative pb-8 pt-20 sm:pt-28 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="container-fluid mx-auto"
                    >
                        <div className="mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="section-title-container w-full">
                                  <div className="flex items-end justify-between">
                                    <h3 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
                                        Related Services
                                    </h3>
                                    <CarouselArrows
                                        onPrev={handlePrevRelated}
                                        onNext={handleNextRelated}
                                        canGoPrev
                                        canGoNext
                                    />
                                  </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative" onMouseEnter={() => setRelatedPaused(true)} onMouseLeave={() => setRelatedPaused(false)}>
                            <div className="grid md:grid-cols-3 gap-8 pb-12">
                                {relatedServices.slice(relatedServicesIndex, relatedServicesIndex + relatedPerView).map((service, index) => (
                                    <Link
                                        key={relatedServicesIndex + index}
                                        href={service.link}
                                        className="block h-full"
                                    >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-xl hover:-translate-y-1 transition-[translate,box-shadow] duration-300 flex flex-col group h-full"
                                    >
                                        <div className="relative w-full aspect-16/9 overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-navy-blue/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>

                                        <div className="bg-primary-orange p-6 lg:p-8 flex flex-col flex-1 relative">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform"></div>
                                            <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/90 text-base leading-relaxed grow font-medium mb-6">
                                                {service.summary}
                                            </p>
                                            <div className="self-start">
                                                <div className="inline-block bg-white text-primary-orange px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.16em] hover:bg-gray-50 transition-all shadow-lg">
                                                    {service.link.startsWith("http") ? "LEARN MORE" : "VIEW DETAILS"}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>
                </>
            )}

        </>
    )
}
