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
import { getAllNewsPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Professional security services across Kenya, Uganda, and Tanzania. Trusted protection for businesses and communities.',
}

export default async function HomePage(): Promise<React.JSX.Element> {
  const newsPosts = await getAllNewsPosts()
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
            <span className="text-primary-orange">Protecting People, Businesses, & Communities in East Africa.</span>
          </>
        }
        customDescription="Your safety, our mission. Explore the Group or visit your country for tailored services."
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
          title="Our Core Services"
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
        <News initialNewsItems={newsPosts} />
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