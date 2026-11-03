import SustainabilityHero from '@/features/sustainability/SustainabilityHero'
import SustainabilityIntro from '@/features/sustainability/SustainabilityIntro'
import SustainabilityESG from '@/features/sustainability/SustainabilityESG'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import OurImpactInNumbers from '@/features/about/OurImpactInNumbers'
import { Metadata } from 'next'
import SectionSeparator from '@/components/ui/SectionSeparator'

export const metadata: Metadata = {
  title: 'Sustainability - SGA Security Group - Environmental Responsibility & Social Impact',
  description: 'Learn about SGA Security Group\'s commitment to sustainability, environmental responsibility, and social impact across East Africa.',
}

export default function SustainabilityPage(): React.JSX.Element {
  return (
    <>
      <SustainabilityHero
        imageUrl="/images/sustainability/group/spa-0503-edit.jpg"
      />
      <div className="relative">
        <SustainabilityIntro />
        {/* <SectionSeparator /> */}
      </div>

      <div className="relative">
        <SustainabilityESG />
        <SectionSeparator />
      </div>

      <OurImpactInNumbers
        showPattern={false}
        backgroundImage="/images/sustainability/group/impact.jpg"
      />
      <FloatingWhatsApp />
    </>
  )
}

