import IndustriesHero from '@/components/IndustriesHero'
import IndustriesDetail from '@/components/IndustriesDetail'
import { tanzaniaIndustries } from '@/data/industries-tanzania'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Industries We Serve - SGA Security Tanzania',
  description: 'Comprehensive security solutions for residential estates, education, healthcare, hospitality, banking, retail, manufacturing, and logistics in Tanzania.',
}

export default function TanzaniaIndustriesPage() {
  return (
    <>
      <IndustriesHero 
        countryCode="tz"
        imageUrl="/images/tz/about-sga.png"
      />
      <IndustriesDetail 
        countryCode="tz"
        industries={tanzaniaIndustries}
      />
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

