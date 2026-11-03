'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface FeatureCircleProps {
    label: string
    delay?: number
}

// Icon shown above each value
const featureIcons: Record<string, string> = {
    Discipline: 'mdi:shield-check-outline',
    Loyalty: 'mdi:handshake-outline',
    Integrity: 'mdi:scale-balance',
    Excellence: 'mdi:star-circle-outline',
    Innovation: 'mdi:lightbulb-on-outline',
    Experience: 'mdi:medal-outline',
}

const FeatureCircle = ({ label, delay = 0 }: FeatureCircleProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-1 cursor-default"
    >
        {featureIcons[label] && (
            <Icon icon={featureIcons[label]} className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-primary-orange" />
        )}
        <span className="text-dark-charcoal font-medium text-base md:text-lg lg:text-base xl:text-lg transition-colors duration-300 group-hover:text-primary-orange">
            {label}
        </span>
    </motion.div>
)

interface FeatureCirclesProps {
    features?: string[]
}

const defaultFeatures = [
    'Discipline',
    'Loyalty',
    'Integrity',
    'Excellence',
    'Innovation',
    'Experience',
]

export default function FeatureCircles({ features = defaultFeatures }: FeatureCirclesProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10 pt-8">
            {features.map((feature, index) => (
                <FeatureCircle key={feature} label={feature} delay={index * 0.1} />
            ))}
        </div>
    )
}
