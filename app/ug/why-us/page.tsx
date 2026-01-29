import WhyUsHero from '../components/WhyUsHero'
import WhyChooseUs from '@/components/WhyChooseUs'
import WhyUsCards from '@/components/WhyUsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Why Choose SGA Security Uganda - Trusted Security Solutions',
  description: 'Discover why SGA Security Uganda is the leading choice for security solutions. Local expertise, proven track record, and comprehensive security services across Uganda.',
}

export default function UgandaWhyUsPage() {
  return (
    <>
      <WhyUsHero
        countryCode="ug"
        imageUrl="/images/ug/about-sga.png"
      />
      <WhyChooseUs
        countryName="Uganda"
      />
      <WhyUsCards />
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

