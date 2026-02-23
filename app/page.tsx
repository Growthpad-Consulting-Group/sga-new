import Hero from '@/components/Hero'
import ParallaxSection from '@/components/ParallaxSection'
import OurImpactInNumbers from '@/components/OurImpactInNumbers'
import WhereWeOperate from '@/components/WhereWeOperate'
import SustainabilityESG from '@/components/SustainabilityESG'
import GroupIntegratedSolutions from '@/components/GroupIntegratedSolutions'
import News from '@/components/News'
import HappyClients from '@/components/HappyClients'
import JoinOurMission from '@/components/JoinOurMission'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionSeparator from '@/components/SectionSeparator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Professional security services across Kenya, Uganda, and Tanzania. Trusted protection for businesses and communities.',
}

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero
        countryName="SGA Group"
        countryDescription="Leading security solutions across East Africa. Protecting your business with excellence."
        whiteBackground={true}
        twoCardLayout={true}
        images={[
          "/images/group/1.png",
          "/images/group/2.png",
          "/images/group/3.png",
          "/images/group/4.png",
          "/images/group/5.png",
          "/images/group/6.png",
          "/images/group/7.png"
        ]}
        customH3="Welcome to SGA official group website"
        customTitle={
          <>
            <span className="text-primary-orange">Trusted security solutions across East Africa.</span>
          </>
        }
        customDescription="Your safety, our mission. Explore the Group or go straight to your country for tailored services."
        showToggle={false}
        customButtons={[
          { label: 'Explore for Individual', href: '#individual', primary: true },
          { label: 'Explore for Corporate', href: '#corporate', primary: true }
        ]}
      />

      <ParallaxSection
        title="Who We Are"
        id="about"
      />

      <div className="relative section-snap">
        <OurImpactInNumbers />
        <SectionSeparator />
      </div>

      <div className="relative section-snap">
        <GroupIntegratedSolutions
          title="What We Offer"
        />
        <SectionSeparator />
      </div>

      <div className="relative section-snap">
        <WhereWeOperate />
        <SectionSeparator />
      </div>

      <div className="relative section-snap">
        <SustainabilityESG />
        <SectionSeparator />
      </div>

      <div className="relative section-snap">
        <News />
        <SectionSeparator />
      </div>

      <div className="relative section-snap">
        <HappyClients />
        <SectionSeparator />
      </div>

      <div className="relative section-snap">
        <JoinOurMission />
        <SectionSeparator />
      </div>

      <FloatingWhatsApp />
    </>
  )
}