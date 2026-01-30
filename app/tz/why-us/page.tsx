import WhyUsHero from '../components/WhyUsHero'
import WhyChooseUs from '@/components/WhyChooseUs'
import WhyUsCards from '@/components/WhyUsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'

export const metadata = {
  title: 'Why Choose SGA Security Tanzania - Trusted Security Solutions',
  description: 'Discover why SGA Security Tanzania is the leading choice for security solutions. Extensive experience, local knowledge, and comprehensive security services protecting Tanzania.',
}

export default function TanzaniaWhyUsPage() {
  return (
    <>
      <div id="about" className="relative">
        <WhyUsHero
          countryCode="tz"
          imageUrl="/images/tz/about-sga.png"
        />
        <SectionSeparator />
      </div>
      <div id="services" className="relative">
        <WhyChooseUs
          countryName="Tanzania"
          backgroundColor="bg-light-grey"
        />
        <SectionSeparator />
      </div>
      <div id="industries" className="relative">
        <WhyUsCards />
        <SectionSeparator />
      </div>
      <FloatingWhatsApp
        singleCountry={true}
        country="Tanzania"
        phone="+255222123456"
        url="https://wa.me/255222123456"
        flag="twemoji:flag-tanzania"
      />
    </>
  )
}

