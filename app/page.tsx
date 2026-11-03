import Hero from '@/features/home/Hero'
import ParallaxSection from '@/components/ui/ParallaxSection'
import OurImpactInNumbers from '@/features/about/OurImpactInNumbers'
import WhereWeOperate from '@/features/home/WhereWeOperate'
import SustainabilityESG from '@/features/sustainability/SustainabilityESG'
import GroupIntegratedSolutions from '@/features/home/GroupIntegratedSolutions'
import News from '@/features/home/News'
import HappyClients from '@/features/home/HappyClients'
import JoinOurMission from '@/features/home/JoinOurMission'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import SectionSeparator from '@/components/ui/SectionSeparator'
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
          "/images/group/homepage/slide-1.jpg",
          "/images/group/homepage/slide-2.jpg",
          "/images/group/homepage/slide-3.jpg",
          "/images/group/homepage/slide-4.jpg",
          "/images/group/homepage/slide-5.jpg",
          "/images/group/homepage/slide-6.jpg",
          "/images/group/homepage/slide-7.jpg"
        ]}
        customH3="Welcome to SGA Security Official Group Website"
        customTitle={
          <>
            <span className="text-primary-orange">Protecting People, Businesses, & Communities in East Africa.</span>
          </>
        }
        customDescription="Your safety, our mission."
        showToggle={false}
        customButtons={[
          { label: 'Explore for Individual', href: '/services/individual', primary: true },
          { label: 'Explore for Corporate', href: '/services/corporate', primary: true }
        ]}
      />

      <ParallaxSection
        title="Who We Are"
        id="about"
      />

      <div className="relative ">
        <OurImpactInNumbers />
        <SectionSeparator />
      </div>

      <div className="relative ">
        <GroupIntegratedSolutions
          title="Our Core Services"
        />
        <SectionSeparator />
      </div>

      <div className="relative ">
        <WhereWeOperate />
        <SectionSeparator />
      </div>

      <div className="relative ">
        <SustainabilityESG />
        <SectionSeparator />
      </div>

      <div className="relative ">
        <News initialNewsItems={newsPosts} />
        <SectionSeparator />
      </div>

      <div className="relative ">
        <HappyClients />
        <SectionSeparator />
      </div>

      <div className="relative ">
        <JoinOurMission />
        <SectionSeparator />
      </div>

      <FloatingWhatsApp />
    </>
  )
}
