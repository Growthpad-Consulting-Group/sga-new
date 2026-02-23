import Hero from '@/components/Hero'
import About from '@/components/About'
import IntegratedSolutions from '@/components/IntegratedSolutions'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import News from '@/components/News'
import SectionSeparator from '@/components/SectionSeparator'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import { ugandaIndustriesCarousel } from '@/data/industries-carousel'
import { ugandaAccordionItems } from '@/data/why-choose-us'
import { getAllNewsPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'SGA Security Uganda - Professional Security Services',
  description: 'Leading security solutions in Uganda. Trusted protection for businesses, residential complexes, and critical infrastructure.',
}

const ugandaContent = {
  title: 'About SGA Security Uganda',
  description: 'SGA Security Uganda provides world-class security services across Uganda. Our team combines local market knowledge with international best practices to deliver comprehensive security solutions that protect your assets, employees, and operations.',
  points: [
    'Fully licensed and compliant with Ugandan regulations',
    'Extensive network across Kampala and major regions',
    'Culturally aware and locally trained professionals',
    'Integrated security technology and monitoring',
  ],
}

export default async function UgandaPage(): Promise<React.JSX.Element> {
  const newsPosts = await getAllNewsPosts()
  return (
    <>
      <Hero
        countryName="Uganda"
        countryDescription="Leading security solutions in Uganda. Protecting your business with excellence."
        orangeBackground={true}
        twoCardLayout={true}
        imageUrl="/images/ug/ug-hero.png"
        customTitle={
          <>
            Protect what matters most - your home and family
          </>
        }
        customDescription="From Kampala neighborhoods to businesses across Uganda, SGA Security provides reliable, round-the-clock protection."
        customButtons={[
          { label: 'Explore Home Security', href: '#individuals', primary: true, separator: 'Explore ' },
          { label: 'Explore Business Security', href: '#corporate', primary: true, separator: 'Explore ' }
        ]}
      />
      <div id="about" className="relative">
        <About
          countryName="Uganda"
          countryContent={ugandaContent}
          customLayout={true}
          smallTitle="WHO WE ARE"
          h3Title="About SGA Uganda"
          h2Title={
            <>
              Decades of trusted security in Uganda.
            </>
          }
          customDescription="SGA Uganda delivers guarding, alarms, and 24/7 monitoring powered by a professional team dedicated to protecting homes, businesses, and communities nationwide."
          buttonText="Discover Our Story"
          buttonHref="#about"
          imageUrl="/images/ug/about.png"
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ug.svg" />
      </div>
      <div id="industries" className="relative">
        <Industries
          industries={ugandaIndustriesCarousel}
          countryName="Uganda"
          ctaLink="/ug/industries"
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ug.svg" />
      </div>
      <div id="services" className="relative">
        <IntegratedSolutions
          whiteBackground={true}
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ug.svg" />
      </div>
      <div id="why-us" className="relative">
        <WhyChooseUs
          countryName="Uganda"
          backgroundColor="bg-light-grey"
          accordionItems={ugandaAccordionItems}
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ug.svg" />
      </div>
      <div id="blog" className="relative">
        <News hideCountryDropdown={true} backgroundColor="bg-light-grey" country="Uganda" initialNewsItems={newsPosts} />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ug.svg" />
      </div>
      <FloatingWhatsApp
        singleCountry={true}
        country="Uganda"
        phone="+256772200048"
        url="https://wa.me/256772200048"
        flag="twemoji:flag-uganda"
      />
    </>
  )
}

