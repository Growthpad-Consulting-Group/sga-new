'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface Advantage {
    title: string
    icon: string
    points: string[]
}

const advantages: Advantage[] = [
    {
        title: 'International Quality Certifications',
        icon: 'mdi:certificate-outline',
        points: [
            'ISO 18788:2015',
            'ISO 9001:2015',
            'ISO 22301:2019',
            'ISO 27001:2013',
            'ISO 19001:2007',
            'ISO 14001',
            'ISO 45001',
            'ICoCA',
        ],
    },
    {
        title: 'Technological & Innovative Advancements',
        icon: 'mdi:lightbulb-on-outline',
        points: [
            'Integration of advanced security technology.',
            'Ongoing research and development for innovative security solutions.',
            'In-house capabilities for vehicle body armouring and modifications.',
        ],
    },
    {
        title: 'Capacity and Resource Mobilization',
        icon: 'mdi:account-group-outline',
        points: [
            'Large and adaptable organization.',
            'Capable of managing large-scale and unique projects.',
            'Swift in providing urgent solutions on short notice.',
        ],
    },
    {
        title: 'Training Certification',
        icon: 'mdi:school-outline',
        points: [
            'Operates fully licensed training schools.',
            'Equips a dynamic workforce to meet evolving security requirements.',
        ],
    },
    {
        title: 'Unrivalled Experience',
        icon: 'mdi:trophy-outline',
        points: [
            'Over 55 years of industry experience.',
            'Extensive knowledge and expertise tailored to your security needs.',
        ],
    },
    {
        title: 'Wide Array of Products & Services',
        icon: 'mdi:shield-check-outline',
        points: [
            'Comprehensive one-stop shop for diverse security solutions.',
        ],
    },
    {
        title: 'Regional Coverage',
        icon: 'mdi:map-marker-radius-outline',
        points: [
            'Comprehensive local and cross-border security services.',
            'Presence in three countries with an extensive branch network (30+ office locations).',
        ],
    },
    {
        title: 'Wide Sector Focus',
        icon: 'mdi:office-building-outline',
        points: [
            'Specialization in niche markets such as multinationals, banking, mining, embassies, and diplomatic missions.',
        ],
    },
    {
        title: 'Regulatory Compliance',
        icon: 'mdi:gavel',
        points: [
            'Adherence to operations, labour and tax laws, ensuring a competitive edge.',
        ],
    },
]

export default function WhyUsCards() {
    return (
        <section className="bg-white py-12 md:py-24 relative overflow-hidden">
            <div className="container-fluid">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* Section Header */}
                    <div className="section-title-container mb-16 md:mb-24">
                        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
                            What sets SGA apart
                        </h2>
                        <div className="section-title-bar"></div>
                    </div>

                    {/* Advantages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="bg-primary-orange rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow flex flex-col h-full"
                            >
                                <Icon icon={advantage.icon} className="w-10 h-10 md:w-12 md:h-12 text-white mb-4" />
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                    {advantage.title}
                                </h3>
                                <ul className={`space-y-2 ${advantage.points.length > 5 ? 'columns-2 gap-4 space-y-0 [&>li]:mb-2 [&>li]:break-inside-avoid' : ''}`}>
                                    {advantage.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-2 text-white/95 text-sm md:text-base leading-relaxed">
                                            <Icon icon="mdi:circle-small" className="w-5 h-5 mt-0.5 shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
