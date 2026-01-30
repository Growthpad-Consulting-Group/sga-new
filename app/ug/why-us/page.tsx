import WhyUsHero from '../components/WhyUsHero'
import WhyChooseUs from '@/components/WhyChooseUs'
import WhyUsCards from '@/components/WhyUsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'

export const metadata = {
  title: 'Why Choose SGA Security Uganda - Trusted Security Solutions',
  description: 'Discover why SGA Security Uganda is the leading choice for security solutions. Local expertise, proven track record, and comprehensive security services across Uganda.',
}

export default function UgandaWhyUsPage() {
  return (
    <>
      <div id="about" className="relative">
        <WhyUsHero
          countryCode="ug"
          imageUrl="/images/ug/about-sga.png"
        />
        <SectionSeparator />
      </div>
      <div id="services" className="relative">
        <WhyChooseUs
          countryName="Uganda"
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
        country="Uganda"
        phone="+256772200048"
        url="https://wa.me/256772200048"
        flag="twemoji:flag-uganda"
      />
    </>
  )
}

