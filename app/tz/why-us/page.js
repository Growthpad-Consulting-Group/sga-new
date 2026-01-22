import WhyUsHero from '../components/WhyUsHero'
import WhyChooseUs from '@/components/WhyChooseUs'
import WhyUsCards from '@/components/WhyUsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Why Choose SGA Security Tanzania - Trusted Security Solutions',
  description: 'Discover why SGA Security Tanzania is the leading choice for security solutions. Extensive experience, local knowledge, and comprehensive security services protecting Tanzania.',
}

export default function TanzaniaWhyUsPage() {
  return (
    <>
      <WhyUsHero 
        countryCode="tz"
        imageUrl="/images/tz/about-sga.png"
      />
      <WhyChooseUs 
        countryName="Tanzania" 
        decorativePatternColors={['bg-red-600', 'bg-green-600', 'bg-black']} 
        staticPattern={true} 
      />
      <WhyUsCards />
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

