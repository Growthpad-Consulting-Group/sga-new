'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import SectionSeparator from '@/components/SectionSeparator'
import { useEnquiryModal } from '@/contexts/EnquiryModalContext'

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

    const handlePrevRelated = () => {
        if (!relatedServices) return
        setRelatedServicesIndex((prev) => (prev === 0 ? Math.max(0, relatedServices.length - 3) : prev - 1))
    }

    const handleNextRelated = () => {
        if (!relatedServices) return
        setRelatedServicesIndex((prev) => (prev >= relatedServices.length - 3 ? 0 : prev + 1))
    }

    const advantagePoints = [
        'Instant alarm and panic signal relay to our 24/7 Control Room.',
        'GPS-tracked units dispatched based on your location and alert type.',
        'First responders trained in first aid, fire safety, and conflict control.',
        'Seamless coordination with Police, Fire, and Ambulance services.',
        'Verified alerts via CCTV or mobile panic app to avoid false alarms.',
        'Digital reporting with photos, timestamps, and follow-up actions.',
    ]

    const stats = [
        { value: '24/7', label: 'Emergency Dispatch' },
        { value: '<5min', label: 'Average Response Time' },
        { value: 'GPS', label: 'Live Tracking & Updates' },
        { value: '100%', label: 'Verified Response' },
    ]

    const handlePoints = [
        'Panic & intrusion alarms at home',
        'Perimeter breaches or suspicious activity',
        'Fire or smoke emergencies',
        'Medical first-aid & ambulance coordination',
        'Break-ins, theft, or vandalism',
        'Home power/UPS system alerts',
    ]

    const howItWorksSteps = [
        {
            step: 1,
            title: 'Alert Received',
            description: `Panic, alarm or CCTV signal triggers dispatch from our 24/7 ${countryName} Control Room.`,
            icon: 'si:alert-line',
        },
        {
            step: 2,
            title: 'Unit Deployed',
            description: 'Nearest GPS-tracked team mobilizes; you get a live ETA via call/SMS.',
            icon: '/images/misc/icons/security-guard.svg',
        },
        {
            step: 3,
            title: 'Stabilize',
            description: 'Responders secure the scene, provide first-aid and de-escalate threats.',
            icon: 'hugeicons:security-lock',
        },
        {
            step: 4,
            title: 'Report',
            description: 'Digital report with photos and recommendations is shared with you.',
            icon: '/images/misc/icons/report-file.svg',
        },
    ]

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
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center py-8">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4 sm:space-y-6 flex flex-col justify-center relative"
                        >
                            {/* Service Type Badge */}
                            <div className="mb-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-orange text-white`}>
                                    For {serviceType}
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-navy-blue tracking-wide uppercase">
                                {countryName} · {serviceType} Service
                            </h3>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange">
                                {serviceName}
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                {heroDescription}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-block bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-primary-orange/90 transition-colors uppercase tracking-wide"
                                    >
                                        Request a quote
                                    </Link>
                                </motion.div>
                                <motion.a
                                    href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-2 border-navy-blue text-navy-blue px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-navy-blue hover:text-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
                                >
                                    <Icon icon="streamline-sharp:emergency-call-remix" className="w-4 h-4" />
                                    <span>Emergency: {emergencyPhone}</span>
                                </motion.a>
                            </div>

                            {/* Explore More Animated Arrow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="pt-4"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => {
                                        const nextSection = document.querySelector('#overview') || document.querySelector('section:nth-of-type(2)')
                                        if (nextSection) {
                                            nextSection.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    <span className="text-sm text-gray-700 uppercase font-medium">Explore more</span>
                                    <Icon
                                        icon="material-symbols-light:arrow-circle-down-outline-rounded"
                                        className="w-6 h-6 text-navy-blue"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px]"
                        >
                            <Image
                                src={heroImage}
                                alt={`${serviceName} Service - ${heroTitle}`}
                                fill
                                className="object-cover rounded-2xl shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Control Room CTA Bar - Integrated into Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-2 mb-8"
                    >
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-4 rounded-3xl border border-gray-100 bg-white relative z-10">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-bold">
                                    Talk to our 24/7 {countryName} Control Room
                                </h3>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                                <motion.a
                                    href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-primary-orange text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary-orange/20 transition-all uppercase text-sm"
                                >
                                    <Icon icon="mdi:phone-plus" className="w-5 h-5" />
                                    <span className="text-sm font-bold">{emergencyPhone}</span>
                                </motion.a>
                                <motion.button
                                    onClick={openModal}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-[#E8F0F7] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition-all uppercase tracking-wider text-sm"
                                >
                                    BOOK ASSESSMENT
                                    <Icon icon="lucide:chevron-right" className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section Separator at Bottom */}
                <SectionSeparator />
            </section>

            {/* Overview Section */}
            <section id="overview" className="flex items-center justify-center bg-light-grey text-dark-charcoal py-16 sm:py-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-xl md:text-4xl font-bold text-primary-orange capitalize">
                                    SGA Response Advantage
                                </h2>
                                <div className="section-title-bar"></div>
                            </div>
                            <ul className="space-y-4">
                                {advantagePoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-sm md:text-xl text-gray-700 leading-relaxed"
                                    >
                                        <Icon
                                            icon="si:check-circle-fill"
                                            className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5"
                                        />
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.button
                                onClick={openModal}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 bg-primary-orange text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow uppercase tracking-wide"
                            >
                                Request a Quote
                            </motion.button>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-md mx-auto lg:mx-0"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-primary-orange rounded-full aspect-square flex flex-col items-center justify-center p-4 shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-white/90 text-center font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* What We Handle Section */}
            <section className="flex items-center justify-center bg-primary-orange text-white py-16 sm:py-20 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="section-title-container-white w-full">
                                <h2 className="section-title text-xl md:text-4xl font-bold text-white capitalize">
                                    What We Handle
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                {handlePoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-xl text-white/90 leading-relaxed"
                                    >
                                        <Icon
                                            icon="icon-park-outline:check-one"
                                            className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                                        />
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full h-full min-h-[350px] lg:min-h-[450px]"
                        >
                            <Image
                                src={overviewImage}
                                alt={`${serviceName} - What We Handle`}
                                fill
                                className="object-cover rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* How It Works Section */}
            <section className="flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-xl md:text-4xl font-bold text-primary-orange capitalize">
                                    How It Works
                                </h2>
                                <div className="section-title-bar"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-primary-orange rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all relative min-h-[280px] flex flex-col"
                            >
                                {/* Step Badge */}
                                <div className="absolute -top-3 left-3 bg-navy-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 uppercase tracking-wider">
                                    Step {step.step}
                                </div>
                                {/* Icon */}
                                <div className="mb-5 mt-6 flex items-center justify-center lg:justify-start">
                                    {step.icon.startsWith('/') ? (
                                        <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    ) : (
                                        <Icon
                                            icon={step.icon}
                                            className="w-10 h-10 lg:w-12 lg:h-12 text-white"
                                        />
                                    )}
                                </div>
                                <h3 className="text-lg lg:text-2xl font-bold text-white mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm lg:text-xl text-white/95 leading-relaxed flex-grow">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* Response Packages Section */}
            <section className="flex items-center justify-center bg-white text-dark-charcoal py-16 sm:py-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-xl md:text-4xl font-bold text-primary-orange capitalize">
                                    {serviceType === 'Corporate' ? 'Corporate Response Packages' : 'Response Packages'}
                                </h2>
                                <div className="section-title-bar"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                        {responsePackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-primary-orange rounded-2xl pt-16 pb-8 px-6 shadow-md hover:shadow-2xl transition-all flex flex-col"
                            >
                                <h3 className="text-lg lg:text-2xl font-bold text-white mb-5 tracking-tight capitalize">
                                    {pkg.title}
                                </h3>
                                <ul className="space-y-3 flex-grow mb-6">
                                    {pkg.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start gap-3 text-sm lg:text-xl text-white/95 leading-relaxed"
                                        >
                                            <Icon
                                                icon="icon-park-outline:check-one"
                                                className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-8">
                                    <motion.button
                                        onClick={openModal}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className=" bg-white text-primary-orange py-2 px-4 rounded-full font-bold text-sm lg:text-base shadow-lg hover:shadow-xl transition-all capitalize tracking-wider"
                                    >
                                        Request Quote
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* Why Choose Section */}
            {whyChoosePoints && whyChoosePoints.length > 0 && (
                <section className="flex items-center justify-center bg-light-grey text-dark-charcoal py-16 sm:py-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <div className="mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <div className="section-title-container w-full">
                                    <h2 className="section-title text-xl md:text-4xl font-bold text-primary-orange capitalize">
                                        {whyChooseTitle}
                                    </h2>
                                    <div className="section-title-bar"></div>
                                </div>
                                {whyChooseDescription && (
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl">
                                        {whyChooseDescription}
                                    </p>
                                )}
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {whyChoosePoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-50"
                                >
                                    <h3 className="text-lg font-bold text-navy-blue mb-2 tracking-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <SectionSeparator />
                </section>
            )}

            {/* Related Services Section — always last */}
            {relatedServices && relatedServices.length > 0 && (
                <section className="flex items-center justify-center bg-white relative pb-0 pt-16 sm:pt-20 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <div className="mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <div className="section-title-container w-full flex items-end justify-between">
                                    <h3 className="section-title text-xl md:text-4xl font-bold text-primary-orange">
                                        Related Services
                                    </h3>
                                    <div className="flex items-center gap-3 mb-1">
                                        <button
                                            onClick={handlePrevRelated}
                                            className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                                        >
                                            <Icon icon="mingcute:arrow-left-line" className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={handleNextRelated}
                                            className="w-10 h-10 rounded-full border-2 border-dark-charcoal flex items-center justify-center text-dark-charcoal hover:border-primary-orange hover:text-primary-orange transition-all duration-300"
                                        >
                                            <Icon icon="mingcute:arrow-right-line" className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pb-12">
                                {relatedServices.slice(relatedServicesIndex, relatedServicesIndex + 3).map((service, index) => (
                                    <motion.div
                                        key={relatedServicesIndex + index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ y: -10 }}
                                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all flex flex-col group h-full"
                                    >
                                        <motion.a
                                            href={service.link || '#'}
                                            whileHover={{ opacity: 0.9 }}
                                            className="relative w-full h-56 block cursor-pointer overflow-hidden"
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </motion.a>

                                        <div className="bg-primary-orange p-6 lg:p-8 flex flex-col flex-1">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white text-lg md:text-2xl leading-relaxed mb-6 flex-grow">
                                                {service.summary}
                                            </p>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="self-start mt-auto"
                                            >
                                                <Link
                                                    href={service.link || "/contact"}
                                                    className="inline-block bg-white text-primary-orange px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg shadow-black/10"
                                                >
                                                    Request a Quote
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <SectionSeparator />
                </section>
            )}

        </>
    )
}
