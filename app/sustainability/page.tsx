import SustainabilityHero from '@/components/SustainabilityHero'
import SustainabilityIntro from '@/components/SustainabilityIntro'
import SustainabilityESGPage from '@/components/SustainabilityESGPage'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import OurImpactInNumbers from '@/components/OurImpactInNumbers'
import { Metadata } from 'next'
import SectionSeparator from '@/components/SectionSeparator'

export const metadata: Metadata = {
  title: 'Sustainability - SGA Security Group - Environmental Responsibility & Social Impact',
  description: 'Learn about SGA Security Group\'s commitment to sustainability, environmental responsibility, and social impact across East Africa.',
}

export default function SustainabilityPage(): React.JSX.Element {
  return (
    <>
      <SustainabilityHero
        imageUrl="/images/sustainability/sustainable.png"
      />
      <div className="relative">
        <SustainabilityIntro />
        {/* <SectionSeparator /> */}
      </div>

      <div className="relative">
        <SustainabilityESGPage />
        <SectionSeparator />
      </div>

      <OurImpactInNumbers showPattern={false} />
      <FloatingWhatsApp />
    </>
  )
}

