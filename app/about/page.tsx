import AboutHero from '@/components/AboutHero'
import AboutIntro from '@/components/AboutIntro'
import OurFoundation from '@/components/OurFoundation'
import OurJourney from '@/components/OurJourney'
import Membership from '@/components/Membership'
import Certifications from '@/components/Certifications'
import JoinOurMission from '@/components/JoinOurMission'
import GroupFooter from '@/components/GroupFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SGA Security Group - Leading Security Solutions in East Africa',
  description: 'Learn about SGA Security Group, our mission, values, and commitment to providing exceptional security services across Kenya, Uganda, and Tanzania.',
}

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <AboutHero 
        imageUrl="/images/group/about/hero.png"
      />
      <AboutIntro 
        imageUrl="/images/group/about/about-2.png"
      />
      <OurFoundation />
      <OurJourney />
      <Membership />
      <Certifications />
      <JoinOurMission />
      <GroupFooter /> 
    </>
  )
}