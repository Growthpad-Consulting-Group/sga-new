import IndustriesHero from '@/components/IndustriesHero'
import IndustriesDetail from '@/components/IndustriesDetail'
import { kenyaIndustries } from '@/data/industries-kenya'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Industries We Serve - SGA Security Kenya',
  description: 'Comprehensive security solutions for residential estates, education, healthcare, hospitality, banking, retail, manufacturing, and logistics in Kenya.',
}

export default function KenyaIndustriesPage() {
  return (
    <>
      <IndustriesHero 
        countryCode="ke"
        imageUrl="/images/ke/about-sga.png"
      />
      <IndustriesDetail 
        countryCode="ke"
        industries={kenyaIndustries}
      />
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
