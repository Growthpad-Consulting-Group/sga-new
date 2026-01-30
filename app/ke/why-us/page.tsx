import WhyUsHero from '../components/WhyUsHero'
import WhyChooseUs from '@/components/WhyChooseUs'
import WhyUsCards from '@/components/WhyUsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'

export const metadata = {
  title: 'Why Choose SGA Security Kenya - Trusted Security Solutions',
  description: 'Discover why SGA Security Kenya is the leading choice for security solutions. Over 55 years of excellence, local expertise, and innovative technology protecting Kenya.',
}

export default function KenyaWhyUsPage() {
  return (
    <>
      <div id="about" className="relative">
        <WhyUsHero
          countryCode="ke"
          imageUrl="/images/ke/placeholder.png"
        />
        <SectionSeparator />
      </div>
      <div id="services" className="relative">
        <WhyChooseUs
          countryName="Kenya"
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
        country="Kenya"
        phone="+254111024000"
        url="https://wa.me/254111024000"
        flag="twemoji:flag-kenya"
      />
    </>
  )
}

