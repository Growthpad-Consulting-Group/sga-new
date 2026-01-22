import IndustriesHero from '../components/IndustriesHero'
import IndustriesDetail from '../components/IndustriesDetail'
import CountryFooter from '../components/CountryFooter'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Industries We Serve - SGA Security Uganda',
  description: 'Comprehensive security solutions for residential estates, education, healthcare, hospitality, banking, retail, manufacturing, and logistics in Uganda.',
}

export default function UgandaIndustriesPage() {
  return (
    <>
      <IndustriesHero 
        countryCode="ug"
        imageUrl="/images/ug/about-sga.png"
      />
      <IndustriesDetail countryCode="ug" />
      <CountryFooter /> 
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

