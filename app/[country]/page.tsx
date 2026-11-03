import Hero from '@/features/home/Hero'
import About from '@/features/home/About'
import GroupIntegratedSolutions from '@/features/home/GroupIntegratedSolutions'
import WhyChooseUs from '@/features/home/WhyChooseUs'
import Industries from '@/features/home/Industries'
import News from '@/features/home/News'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import SectionSeparator from '@/components/ui/SectionSeparator'
import { getAllNewsPosts } from '@/lib/sanity'
import { homeData } from '@/features/home/data'
import { countries } from '@/data/countries-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ country: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params
    const c = countries[country]
    if (!c) return {}
    return {
        title: `SGA Security ${c.name} - Professional Security Services`,
        description: `Leading security solutions in ${c.name}. Trusted protection for businesses, homes, and critical infrastructure.`,
    }
}

export async function generateStaticParams() {
    return [
        { country: 'ke' },
        { country: 'ug' },
        { country: 'tz' },
    ]
}

export default async function CountryHomePage({ params }: Props) {
    const { country } = await params
    const data = homeData[country]
    const c = countries[country]

    if (!data || !c) {
        notFound()
    }

    const newsPosts = await getAllNewsPosts()

    return (
        <>
            <Hero
                countryName={c.name}
                countryDescription={`Leading security solutions in ${c.name}. Protecting your business with excellence.`}
                orangeBackground={true}
                twoCardLayout={true}
                imageUrl={data.hero.imageUrl}
                customTitle={data.hero.title}
                customDescription={data.hero.description}
                customButtons={data.hero.buttons}
            />

            <div id="about" className="relative">
                <About
                    countryName={c.name}
                    countryContent={{
                        title: `About SGA Security ${c.name}`,
                        description: `SGA Security ${c.name} provides world-class security services across ${c.name}. Our team combines local market knowledge with international best practices to deliver comprehensive security solutions.`,
                        points: data.about.points
                    }}
                    customLayout={true}
                    smallTitle={data.about.title}
                    h3Title={`About SGA ${c.name}`}
                    h2Title={data.about.largeTitle}
                    customDescription={data.about.description}
                    buttonText="Discover Our Story"
                    buttonHref={`/${country}/why-us`}
                    imageUrl={data.about.imageUrl}
                />
            </div>

            <div id="services" className="relative">
                <GroupIntegratedSolutions title="Our Products and Services" />
                <SectionSeparator imageUrl={`/images/misc/section-pattern-${country}.svg`} />
            </div>

            <div id="industries" className="relative">
                <Industries
                    industries={data.industries.items}
                    countryName={c.name}
                    ctaLink={`/${country}/industries`}
                    backgroundColor="bg-light-grey"
                    subtext={data.industries.subtext}
                />
                <SectionSeparator imageUrl={`/images/misc/section-pattern-${country}.svg`} />
            </div>

            <div id="why-us" className="relative">
                <WhyChooseUs
                    countryName={c.name}
                    backgroundColor="bg-light-grey"
                    accordionItems={data.whyUs.accordion}
                    image={data.whyUs.imageUrl}
                />
                <SectionSeparator imageUrl={`/images/misc/section-pattern-${country}.svg`} />
            </div>

            <div id="blog" className="relative">
                <News
                    hideCountryDropdown={true}
                    backgroundColor="bg-light-grey"
                    country={c.name}
                    initialNewsItems={newsPosts}
                />
                <SectionSeparator imageUrl={`/images/misc/section-pattern-${country}.svg`} />
            </div>

            <FloatingWhatsApp
                singleCountry={true}
                country={c.name}
                phone={c.whatsapp}
                url={c.whatsappUrl}
                flag={c.flag}
            />
        </>
    )
}
