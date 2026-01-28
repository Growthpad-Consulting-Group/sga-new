import Hero from '@/components/Hero'
import About from '@/components/About'
import IntegratedSolutions from '@/components/IntegratedSolutions'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import News from '@/components/News'
import ContactInfo from '@/components/ContactInfo'
import SectionSeparator from '@/components/SectionSeparator'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

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
            Your Trusted Corporate Security Partner in Tanzania
          </>
        }
        customDescription="Protecting your offices, warehouses, banks, and teams with integrated guarding and technology solutions tailored to Tanzania's business environment."
        customButtons={[
          { label: 'Explore for Individuals', href: '#individuals', primary: true },
          { label: 'Explore for Corporate Clients', href: '#corporate', primary: true }
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
              Trusted partner for Tanzania businesses.
            </>
          }
          customDescription="SGA Tanzania delivers manned guarding, remote CCTV monitoring, cash-in-transit, and fire & rescue—unified through a 24/7 control room and standardized reporting. Our vetted teams, modern systems, and regional oversight keep your people, assets, and operations secure across Tanzania."
          buttonText="Learn more about SGA Tanzania"
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
          backgroundColor="bg-light-grey"
        />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="why-us" className="relative">
        <WhyChooseUs countryName="Tanzania" />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="blog" className="relative">
        <News />
        <SectionSeparator imageUrl="/images/misc/section-pattern-tz.svg" />
      </div>
      <div id="contact">
        <ContactInfo />
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

