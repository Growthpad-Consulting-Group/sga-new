'use client'

import AboutHero from '@/features/about/default/AboutHero'

interface ServicesTypeHeroProps {
    country: string
    countryName: string
    type: string
    isIndividual: boolean
    description: string
    heroImage?: string
}

// Same full-image hero as the About page, so the layout is consistent.
export default function ServicesTypeHero({
    countryName,
    isIndividual,
    heroImage
}: ServicesTypeHeroProps) {
    return (
        <AboutHero
            imageUrl={heroImage || '/images/group/guarding.png'}
            eyebrow={`${isIndividual ? 'Individual' : 'Corporate'} Service`}
            title={isIndividual ? 'Protecting You & Your Family' : 'Securing Your Business'}
        />
    )
}
