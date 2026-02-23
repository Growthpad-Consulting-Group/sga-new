import Hero from '@/components/Hero'
import About from '@/components/About'
import IntegratedSolutions from '@/components/IntegratedSolutions'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import News from '@/components/News'
import ContactInfo from '@/components/ContactInfo'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'
import SectionSeparator from '@/components/SectionSeparator'
import { kenyaIndustriesCarousel } from '@/data/industries-carousel'

export const metadata: Metadata = {
  title: 'SGA Security Kenya - Professional Security Services',
  description: 'Leading security solutions in Kenya. Trusted protection for businesses, residential complexes, and critical infrastructure.',
}

const kenyaContent = {
  title: 'About SGA Security Kenya',
  description: 'SGA Security Kenya provides world-class security services across Kenya. Our team combines local market knowledge with international best practices to deliver comprehensive security solutions that protect your assets, employees, and operations.',
  points: [
    'Fully licensed and compliant with Kenyan regulations',
    'Extensive network across Nairobi and major regions',
    'Culturally aware and locally trained professionals',
    'Integrated security technology and monitoring',
  ],
}

export default function KenyaPage(): React.JSX.Element {
  return (
    <>
      <Hero
        countryName="Kenya"
        countryDescription="Leading security solutions in Kenya. Protecting your business with excellence."
        orangeBackground={true}
        twoCardLayout={true}
        imageUrl="/images/ke/hero.png"
        customTitle={
          <>
            Protect what matters most <br />- your <span className="">home</span> and <span className="">family</span>.
          </>
        }
        customDescription="SGA Kenya protects families, homes, and businesses nationwide with reliable 24/7 security solutions."
        customButtons={[
          { label: 'Explore Home Security', href: '#individuals', primary: true, separator: 'Explore ' },
          { label: 'Explore Business Security', href: '#corporate', primary: true, separator: 'Explore ' }
        ]}
      />
      <div id="about" className="relative">
        <About
          countryName="Kenya"
          countryContent={kenyaContent}
          customLayout={true}
          smallTitle="WHO WE ARE"
          h3Title="About SGA Kenya"
          h2Title="55+ years of trusted security in Kenya"
          customDescription="SGA Kenya combines experience, innovation, and a dedicated 24/7 team to deliver reliable guarding, alarms, monitoring, and integrated security solutions across the country."
          buttonText="Discover Our Story"
          buttonHref="#about"
          imageUrl="/images/ke/about-sga.png"
          hideCountriesStat={true}
        />
      </div>
      <div id="services" className="relative">
        <IntegratedSolutions
          whiteBackground={true}
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ke.svg" />
      </div>
      <div id="industries" className="relative">
        <Industries
          industries={kenyaIndustriesCarousel}
          countryName="Kenya"
          ctaLink="/ke/industries"
          backgroundColor="bg-light-grey"
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ke.svg" />
      </div>
      <div id="why-us" className="relative">
        <WhyChooseUs countryName="Kenya" backgroundColor="bg-light-grey" />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ke.svg" />
      </div>
      <div id="blog" className="relative">
        <News hideCountryDropdown={true} backgroundColor="bg-light-grey" country="Kenya" />
        <SectionSeparator imageUrl="/images/misc/section-pattern-ke.svg" />
      </div>
      <FloatingWhatsApp
        singleCountry={true}
        country="Kenya"
        phone="+254111024000"
        url="https://wa.me/254111024000"
        flag="twemoji:flag-kenya"
      />
    </>
  )
}

