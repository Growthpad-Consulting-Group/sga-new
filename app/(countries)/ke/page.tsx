import Hero from '@/components/Hero'
import About from '@/components/About'
import IntegratedSolutions from '@/components/IntegratedSolutions'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import News from '@/components/News'
import ContactInfo from '@/components/ContactInfo'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

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
            Protect what matters most - your <span className="">home</span> and <span className="">family</span>.
          </>
        }
        customDescription="From Nairobi estates to Mombasa homes, SGA Kenya provides round-the-clock security you can trust."
        customButtons={[
          { label: 'Explore for Individuals', href: '#individuals', primary: true },
          { label: 'Explore for Corporate Clients', href: '#corporate', primary: true }
        ]}
      />
      <div id="about">
        <About
          countryName="Kenya"
          countryContent={kenyaContent}
          customLayout={true}
          smallTitle="WHO WE ARE"
          h3Title="About SGA Kenya"
          h2Title="50+ Years of Security Excellence in East Africa."
          customDescription="SGA Kenya is the headquarters of the SGA Security Group, serving clients across Kenya with reliable guarding, alarm & response, cash-in-transit, fire & rescue, and integrated technology solutions—backed by a 24/7 control room in Nairobi and a strong team of vetted, trained professionals."
          buttonText="Learn more about SGA Kenya"
          buttonHref="#about"
          imageUrl="/images/ke/about-sga.png"
          hideCountriesStat={true}
          decorativePatternColors={['bg-red-600', 'bg-green-600', 'bg-black']}
          staticPattern={true}
        />
      </div>
      <div id="services">
        <IntegratedSolutions
          decorativePatternColors={['bg-red-600', 'bg-green-600', 'bg-black']}
          whiteBackground={true}
          staticPattern={true}
        />
      </div>
      <div id="industries">
        <Industries
          backgroundColor="bg-light-grey"
          decorativePatternColors={['bg-red-600', 'bg-green-600', 'bg-black']}
          staticPattern={true}
        />
      </div>
      <div id="why-us">
        <WhyChooseUs countryName="Kenya" decorativePatternColors={['bg-red-600', 'bg-green-600', 'bg-black']} staticPattern={true} />
      </div>
      <div id="blog">
        <News decorativePatternColors={['bg-red-600', 'bg-green-600', 'bg-black']} staticPattern={true} />
      </div>
      <div id="contact">
        <ContactInfo />
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

