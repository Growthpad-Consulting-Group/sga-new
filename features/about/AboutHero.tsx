'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutHeroProps {
    countryName: string
    imageUrl?: string
}

// Years of operation per country
const yearsByCountry: Record<string, number> = {
    Kenya: 55,
    Uganda: 42,
    Tanzania: 40,
}

export default function AboutHero({
    countryName,
    imageUrl = '/images/group/about/hero.png'
}: AboutHeroProps) {
    return (
        <section id="hero" className="relative bg-gray-100 text-dark-charcoal pt-40 sm:pt-40 lg:pt-40 xl:pt-48 pb-0">
            <div className="container-fluid mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left space-y-2 pb-4"
                >
                    <h2 className="text-sm md:text-base font-normal text-gray-700 uppercase tracking-wide">
                        About SGA Security {countryName}
                    </h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                        <span className="text-primary-orange">Security That Matters</span>
                    </h1>
                    <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-700 ">
                        Over {yearsByCountry[countryName] ?? 55} years of trusted, integrated security for homes, businesses, and institutions across {countryName}.
                    </p>
                </motion.div>
            </div>

            <div className="w-full">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <Image
                        src={imageUrl}
                        alt={`SGA Security ${countryName} - Security Excellence Since 1969`}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    )
}
