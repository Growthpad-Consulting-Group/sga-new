import Hero from '@/components/Hero'
import About from '@/components/About'
import IntegratedSolutions from '@/components/IntegratedSolutions'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import News from '@/components/News'
import SectionSeparator from '@/components/SectionSeparator'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import { tanzaniaIndustriesCarousel } from '@/data/industries-carousel'
import { tanzaniaAccordionItems } from '@/data/why-choose-us'

export const metadata: Metadata = {
  title: 'SGA Security Tanzania - Professional Security Services',
  description: 'Leading security solutions in Tanzania. Trusted protection for businesses, residential complexes, and critical infrastructure.',
}

const tanzaniaContent = {
  title: 'About SGA Security Tanzania',
  description: 'SGA Security Tanzania provides world-class security services across Tanzania. Our team combines local market knowledge with international best practices to deliver comprehensive security solutions that protect your assets, employees, and operations.',
  points: [
    'Fully licensed and compliant with Tanzanian regulations',
    'Extensive network across Dar es Salaam and major regions',
    'Culturally aware and locally trained professionals',
    'Integrated security technology and monitoring',
  ],
}

export default function TanzaniaPage(): React.JSX.Element {
  return (
    <>
      <Hero
        countryName="Tanzania"
        countryDescription="Leading security solutions in Tanzania. Protecting your business with excellence."
        orangeBackground={true}
        twoCardLayout={true}
        imageUrl="/images/tz/hero.png"
        customTitle={
          <>
            Protect what matters most - your home and family
          </>
        }
        customDescription="From Dar es Salaam to towns across Tanzania, SGA Security keeps families and businesses safe with dependable 24/7 protection."
        customButtons={[
          { label: 'Explore Home Security', href: '#individuals', primary: true, separator: 'Explore ' },
          { label: 'Explore Business Security', href: '#corporate', primary: true, separator: 'Explore ' }
        ]}
      />
      <div id="about" className="relative">
        <About
          countryName="Tanzania"
          countryContent={tanzaniaContent}
          customLayout={true}
          smallTitle="WHO WE ARE"
          h3Title="About SGA Tanzania"
          h2Title={
            <>
              Protecting Tanzania with trusted experience.
            </>
          }
          customDescription="For more than 40 years, SGA Tanzania has provided reliable guarding, alarms, and monitoring backed by dedicated professionals and modern security technology."
          buttonText="Discover Our Story"
          buttonHref="#about"
          imageUrl="/images/tz/about.png"
          hideCountriesStat={true}
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="services" className="relative">
        <IntegratedSolutions
          whiteBackground={true}
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="industries" className="relative">
        <Industries
          industries={tanzaniaIndustriesCarousel}
          countryName="Tanzania"
          ctaLink="/tz/industries"
          backgroundColor="bg-light-grey"
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="why-us" className="relative">
        <WhyChooseUs 
          countryName="Tanzania" 
          backgroundColor="bg-light-grey"
          accordionItems={tanzaniaAccordionItems}
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="blog" className="relative">
        <News 
          hideCountryDropdown={true} 
          backgroundColor="bg-light-grey" 
          country="Tanzania"
          customSubtext="Discover the latest safety tips, company updates, and insights from SGA Tanzania."
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <FloatingWhatsApp
        singleCountry={true}
        country="Tanzania"
        phone="+255754303076"
        url="https://wa.me/255754303076"
        flag="twemoji:flag-tanzania"
      />
    </>
  )
}

