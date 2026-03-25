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

                            {/* Breadcrumbs */}
                            <nav className="flex items-center space-x-2 text-xs md:text-sm font-bold text-navy-blue tracking-wide uppercase">
                                <span>{countryName}</span>
                                <span className="text-gray-400">|</span>
                                <span>{serviceType} Service</span>
                            </nav>

                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary-orange leading-none">
                                {serviceName}
                            </h2>
                            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-xl">
                                {heroDescription}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Link
                                        href="/contact"
                                        className="w-full inline-block bg-primary-orange text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-primary-orange/90 transition-colors text-center shadow-lg shadow-primary-orange/20"
                                    >
                                        Request a Quote
                                    </Link>
                                </motion.div>
                                <motion.a
                                    href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-primary-orange hover:text-white transition-colors flex items-center justify-center gap-2 text-center"
                                >
                                    <Icon icon="streamline-sharp:emergency-call-remix" className="w-5 h-5" />
                                    <span>View Emergency Numbers</span>
                                </motion.a>
                            </div>

                            {/* Explore More Animated Arrow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="pt-8"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, 8, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex items-center gap-3 cursor-pointer group"
                                    onClick={() => {
                                        const nextSection = document.querySelector('#overview') || document.querySelector('section:nth-of-type(2)')
                                        if (nextSection) {
                                            nextSection.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-navy-blue group-hover:bg-navy-blue transition-colors">
                                        <Icon
                                            icon="lucide:arrow-down"
                                            className="w-3.5 h-3.5 text-navy-blue group-hover:text-white transition-colors"
                                        />
                                    </div>
                                    <span className="text-xs text-navy-blue uppercase font-bold tracking-widest">Explore more</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative w-full aspect-[4/3] lg:aspect-square"
                        >
                            <Image
                                src={heroImage}
                                alt={`${serviceName} Service - ${heroTitle}`}
                                fill
                                className="object-cover rounded-3xl shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Integrated Control Room Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-4 mb-8"
                    >
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-[40px] border border-gray-100 bg-white shadow-xl shadow-gray-100/50 relative z-10">
                            <div className="text-center lg:text-left flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <Icon icon="solar:phone-calling-bold-duotone" className="w-8 h-8 text-primary-orange" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Talk to us now</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-navy-blue">
                                        Talk to our {countryName} Control Room
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                                <motion.a
                                    href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-primary-orange text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary-orange/20 transition-all uppercase text-sm tracking-widest"
                                >
                                    CALL FOR FREE
                                </motion.a>
                                <motion.button
                                    onClick={openModal}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-[#E8F0F7] text-navy-blue px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#D1E1EF] transition-all uppercase tracking-widest text-sm"
                                >
                                    BOOK SERVICE
                                    <Icon icon="lucide:chevron-right" className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section Separator at Bottom */}
                <SectionSeparator />
            </section>

            {/* Overview Section - SGA Response Advantage */}
            <section id="overview" className="flex items-center justify-center bg-light-grey text-dark-charcoal py-16 sm:py-24 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-3xl md:text-5xl font-bold text-primary-orange capitalize">
                                    SGA Response Advantage
                                </h2>
                                <div className="section-title-bar w-32 h-1.5 bg-navy-blue mt-4"></div>
                            </div>
                            <ul className="space-y-5">
                                {advantagePoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 text-base md:text-lg text-gray-700 leading-relaxed font-medium"
                                    >
                                        <div className="mt-1 flex-shrink-0">
                                            <Icon
                                                icon="si:check-circle-fill"
                                                className="w-6 h-6 text-primary-orange"
                                            />
                                        </div>
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.button
                                onClick={openModal}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-primary-orange text-white px-10 py-4 rounded-full font-bold text-sm md:text-base shadow-lg shadow-primary-orange/30 hover:shadow-xl transition-all uppercase tracking-widest"
                            >
                                Get Started Now
                            </motion.button>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6 md:gap-8 w-full max-w-lg mx-auto lg:mx-0"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                                    className="bg-primary-orange rounded-full aspect-square flex flex-col items-center justify-center p-6 shadow-xl shadow-primary-orange/20 transition-all border-4 border-white/10"
                                >
                                    <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-none">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-white font-bold text-center uppercase tracking-[0.15em] max-w-[120px] leading-tight opacity-90">
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
            <section className="flex items-center justify-center bg-primary-orange text-white py-20 sm:py-28 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="section-title-container-white w-full">
                                <h2 className="section-title text-3xl md:text-5xl font-bold text-white capitalize leading-tight">
                                    What We Handle
                                </h2>
                                <div className="section-title-bar w-24 h-1.5 bg-white mt-4 opacity-30"></div>
                            </div>
                            <ul className="grid grid-cols-1 gap-6">
                                {handlePoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 text-lg md:text-xl text-white font-medium group"
                                    >
                                        <div className="mt-1 flex-shrink-0 bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
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

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[4/3] lg:aspect-square"
                        >
                            <div className="absolute inset-0 border-2 border-white/20 rounded-[40px] translate-x-4 translate-y-4"></div>
                            <Image
                                src={overviewImage}
                                alt={`${serviceName} - What We Handle`}
                                fill
                                className="object-cover rounded-[40px] shadow-2xl relative z-10"
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* How It Works Section */}
            <section className="flex items-center justify-center bg-white text-dark-charcoal py-20 sm:py-28 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="mb-16 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-3xl md:text-5xl font-extrabold text-primary-orange capitalize tracking-tight">
                                    How It Works
                                </h2>
                                <div className="section-title-bar w-24 h-1.5 bg-navy-blue mt-4 mx-auto lg:mx-0"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -12 }}
                                className="bg-primary-orange rounded-3xl p-8 shadow-xl shadow-primary-orange/20 hover:shadow-2xl hover:shadow-primary-orange/30 transition-all relative group h-full flex flex-col"
                            >
                                {/* Step Badge */}
                                <div className="absolute -top-4 left-8 bg-navy-blue text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-lg z-10 uppercase tracking-[0.2em]">
                                    Step {step.step}
                                </div>

                                {/* Icon */}
                                <div className="mb-8 mt-4 flex items-center justify-center lg:justify-start">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        {step.icon.startsWith('/') ? (
                                            <div className="relative w-8 h-8">
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
                                                className="w-10 h-10 text-white"
                                            />
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl lg:text-3xl font-bold text-white mb-4 tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                                    {step.title}
                                </h3>
                                <p className="text-sm lg:text-base text-white/90 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* Response Packages Section */}
            <section className="flex items-center justify-center bg-light-grey text-dark-charcoal py-20 sm:py-28 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="mb-16 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="section-title-container w-full">
                                <h2 className="section-title text-3xl md:text-5xl font-extrabold text-primary-orange capitalize tracking-tight">
                                    {serviceType === 'Corporate' ? 'Corporate Response Packages' : 'Response Packages'}
                                </h2>
                                <div className="section-title-bar w-24 h-1.5 bg-navy-blue mt-4 mx-auto lg:mx-0"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
                        {responsePackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-primary-orange rounded-[40px] p-10 shadow-2xl shadow-primary-orange/20 hover:shadow-primary-orange/30 transition-all flex flex-col relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 tracking-tight leading-tight">
                                    {pkg.title}
                                </h3>
                                <ul className="space-y-4 flex-grow mb-10">
                                    {pkg.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start gap-4 text-white font-medium group/item"
                                        >
                                            <div className="mt-1 flex-shrink-0 bg-white/20 p-1 rounded-full group-hover/item:bg-white/40 transition-colors">
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className="w-4 h-4 text-white"
                                                />
                                            </div>
                                            <span className="text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <motion.button
                                        onClick={openModal}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-white text-primary-orange py-4 px-8 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-lg hover:bg-gray-50 transition-colors"
                                    >
                                        CONTACT US
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <SectionSeparator />
            </section>

            {/* Why Choose Section (Optional, if points exist) */}
            {whyChoosePoints && whyChoosePoints.length > 0 && (
                <section className="flex items-center justify-center bg-white text-dark-charcoal py-20 sm:py-28 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <div className="mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="section-title-container w-full">
                                    <h2 className="section-title text-3xl md:text-5xl font-extrabold text-primary-orange capitalize tracking-tight">
                                        {whyChooseTitle}
                                    </h2>
                                    <div className="section-title-bar w-24 h-1.5 bg-navy-blue mt-4"></div>
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
                                    className="bg-light-grey rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
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
                <section className="flex items-center justify-center bg-white relative pb-20 pt-20 sm:pt-28 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <div className="mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="section-title-container w-full flex items-end justify-between border-b-2 border-gray-100 pb-8">
                                    <h3 className="section-title text-3xl md:text-5xl font-extrabold text-primary-orange tracking-tight uppercase">
                                        Related Services
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={handlePrevRelated}
                                            className="w-12 h-12 rounded-full border-2 border-navy-blue flex items-center justify-center text-navy-blue hover:bg-navy-blue hover:text-white transition-all duration-300 shadow-lg"
                                        >
                                            <Icon icon="solar:arrow-left-linear" className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={handleNextRelated}
                                            className="w-12 h-12 rounded-full border-2 border-navy-blue flex items-center justify-center text-navy-blue hover:bg-navy-blue hover:text-white transition-all duration-300 shadow-lg"
                                        >
                                            <Icon icon="solar:arrow-right-linear" className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="grid md:grid-cols-3 gap-8 pb-12">
                                {relatedServices.slice(relatedServicesIndex, relatedServicesIndex + 3).map((service, index) => (
                                    <motion.div
                                        key={relatedServicesIndex + index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ y: -12 }}
                                        className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group h-full"
                                    >
                                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-navy-blue/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>

                                        <div className="bg-primary-orange p-8 lg:p-10 flex flex-col flex-1 relative">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform"></div>
                                            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/90 text-lg leading-relaxed mb-8 flex-grow font-medium">
                                                {service.summary}
                                            </p>
                                            <div className="self-start">
                                                <Link
                                                    href={service.link || "/contact"}
                                                    className="inline-block bg-white text-primary-orange px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-50 transition-all shadow-lg"
                                                >
                                                    REQUEST A QUOTE
                                                </Link>
                                            </div>
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
