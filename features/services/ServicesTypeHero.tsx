'use client'

interface ServicesTypeHeroProps {
    country: string
    countryName: string
    type: string
    isIndividual: boolean
    description: string
    heroImage?: string
}

// Compact heading only: visitors come to see the services, so the photo is left out.
export default function ServicesTypeHero({
    isIndividual,
}: ServicesTypeHeroProps) {
    return (
        <section className="bg-gray-100 pt-40 pb-6 xl:pt-48 md:pb-8">
            <div className="container-fluid mx-auto">
                <p className="text-sm md:text-base font-normal uppercase tracking-wide text-dark-charcoal">
                    {isIndividual ? 'Individual' : 'Corporate'} Service
                </p>
                <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange">
                    {isIndividual ? 'Protecting You & Your Family' : 'Securing Your Business'}
                </h1>
            </div>
        </section>
    )
}
