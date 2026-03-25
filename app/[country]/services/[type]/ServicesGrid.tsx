'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface ServiceCard {
    slug: string
    serviceName: string
    serviceIcon: string
    heroImage: string
    heroDescription: string
}

interface ServicesGridProps {
    services: ServiceCard[]
    country: string
    type: string
    isIndividual: boolean
    countryName: string
}

export default function ServicesGrid({ services, country, type, isIndividual, countryName }: ServicesGridProps) {
    return (
        <section id="services-grid" className="bg-white py-24 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto">
                {/* Section Header */}
                {/* <div className="mb-10 md:mb-16 flex items-end justify-between border-b-2 border-gray-100 pb-4">
                    <h3 className="text-3xl md:text-5xl font-bold text-primary-orange">
                        {isIndividual ? 'Individual' : 'Corporate'} Security Services
                    </h3>
                </div> */}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group h-full"
                        >
                            <Link href={`/${country}/services/${type}/${service.slug}`} className="flex flex-col h-full">
                                {/* Image Section */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={service.heroImage}
                                        alt={service.serviceName}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy-blue/10 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                {/* Content Section (Matched to sub-page "Related Services" style) */}
                                <div className="bg-primary-orange p-8 lg:p-10 flex flex-col flex-1 relative">
                                    {/* Simple Decorative Circle from sub-page */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform"></div>

                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                                        {service.serviceName}
                                    </h3>
                                    <p className="text-white/90 text-lg leading-relaxed mb-8 flex-grow font-medium">
                                        {service.heroDescription}
                                    </p>

                                    <div className="self-start">
                                        <div className="inline-block bg-white text-primary-orange px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-50 transition-all shadow-lg">
                                            VIEW DETAILS
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Switch Division CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full mt-24 md:mt-32 p-8 md:p-16 rounded-[50px] bg-primary-orange flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary-orange/20"
                >
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                            Looking for {isIndividual ? 'Corporate' : 'Personal'} Security?
                        </h3>
                        <p className="text-white text-lg md:text-xl font-medium">
                            Explore our {isIndividual ? 'business-focused' : 'specialized home'} security solutions.
                        </p>
                    </div>
                    <Link
                        href={`/${country}/services/${isIndividual ? 'corporate' : 'individual'}`}
                        className="inline-block bg-white text-primary-orange px-10 py-5 rounded-full font-black text-sm hover:bg-navy-blue hover:text-white transition-all duration-300 shadow-xl"
                    >
                        EXPLORE {isIndividual ? 'CORPORATE' : 'INDIVIDUAL'}
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
