import Hero from '@/components/Hero'
import ParallaxSection from '@/components/ParallaxSection'
import OurImpactInNumbers from '@/components/OurImpactInNumbers'
import WhereWeOperate from '@/components/WhereWeOperate'
import SustainabilityESG from '@/components/SustainabilityESG'
import GroupIntegratedSolutions from '@/components/GroupIntegratedSolutions'
import News from '@/components/News'
import HappyClients from '@/components/HappyClients'
import JoinOurMission from '@/components/JoinOurMission'
import GroupFooter from '@/components/GroupFooter'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Professional security services across Kenya, Uganda, and Tanzania. Trusted protection for businesses and communities.',
}

export default function HomePage() {
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
          { label: 'Explore for Corporate clients', href: '#corporate', primary: true }
        ]}
      />
      <ParallaxSection 
        title="Who We Are"
        h2Title="About SGA Group"
        description="We are dedicated to supporting sustainable safety and security for our customers and communities, through exceptional personnel, innovative systems and uncompromising integrity."
      />
      <OurImpactInNumbers />
      <GroupIntegratedSolutions 
        title="What we Offer"
      />
      <WhereWeOperate />
      <SustainabilityESG />
      <News staticPattern={true} />
      <HappyClients />
      <JoinOurMission />
      <GroupFooter />
      <FloatingWhatsApp />
    </>
  )
}

