'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FeatureCircles from '@/components/FeatureCircles'

interface AboutIntroProps {
    countryName: string
    imageUrl?: string
}

export default function AboutIntro({
    countryName,
    imageUrl = '/images/group/about/about-2.png'
}: AboutIntroProps) {
    return (
        <section id="about-intro" className="py-16 sm:py-20 bg-white">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="section-title-container">
                            <h2 className="section-title text-2xl md:text-5xl font-bold capitalize">
                                <span className="text-primary-orange">Who we are</span>
                            </h2>
                            <div className="section-title-bar"></div>
                        </div>
                        <p className="text-sm md:text-xl text-gray-700 leading-relaxed">
                            SGA {countryName} delivers integrated security solutions for individuals, businesses, and institutions. We combine trained personnel, proven processes, and modern technology to keep people and assets safe—24/7.
                        </p>
                        <FeatureCircles />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[800px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={imageUrl}
                            alt={`SGA Security ${countryName} Operations`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
