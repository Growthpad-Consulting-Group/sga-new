import Hero from '@/components/Hero'
import About from '@/components/About'
import IntegratedSolutions from '@/components/IntegratedSolutions'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import News from '@/components/News'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SGA Security Uganda - Professional Security Services',
  description: 'Leading security solutions in Uganda. Trusted protection for businesses, residential complexes, and critical infrastructure.',
}

const ugandaContent = {
  title: 'About SGA Security Uganda',
  description: 'SGA Security Uganda provides world-class security services across Uganda. Our team combines local market knowledge with international best practices to deliver comprehensive security solutions that protect your assets, employees, and operations.',
  points: [
    'Fully licensed and compliant with Ugandan regulations',
    'Extensive network across Kampala and major regions',
    'Culturally aware and locally trained professionals',
    'Integrated security technology and monitoring',
  ],
}

export default function UgandaPage(): React.JSX.Element {
  return (
    <>
      <Hero 
        countryName="Uganda"
        countryDescription="Leading security solutions in Uganda. Protecting your business with excellence."
        orangeBackground={true}
        twoCardLayout={true}
        imageUrl="/images/ug/ug-hero.png"
        customTitle={
          <>
            Your Trusted Corporate Security Partner in Uganda
          </>
        }
        customDescription="Protecting your offices, warehouses, banks, and teams with integrated guarding and technology solutions tailored to Uganda’s business environment."
        customButtons={[
          { 
            label: 'Explore for Individuals', 
            href: '#individuals', 
            primary: true,
            simple: false,
            className: 'group relative bg-navy-blue border-2 border-navy-blue text-white px-8 py-4 rounded-lg font-semibold transition-all text-left flex flex-col hover:bg-navy-blue w-full sm:flex-1'
          },
          { 
            label: 'Explore for Corporate Clients', 
            href: '#corporate', 
            primary: false,
            simple: false,
            className: 'group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all text-left flex flex-col hover:bg-white hover:text-navy-blue w-full sm:flex-1'
          }
        ]}
      />
      <About 
        countryName="Uganda" 
        countryContent={ugandaContent}
        customLayout={true}
        smallTitle="WHO WE ARE"
        h3Title="About SGA Group"
        h2Title={
          <>
            <span className="text-primary-orange">Trusted partner for Ugandan businesses.</span>
          </>
        }
        customDescription="SGA Uganda delivers comprehensive corporate security—manned guarding, remote CCTV monitoring, cash-in-transit, and fire & rescue—integrated through our 24/7 Kampala control room. Our vetted teams and modern systems provide consistent protection, reporting, and escalation."
        buttonText="Learn More About SGA uganda"
        buttonHref="#about"
        imageUrl="/images/ug/about.png"
        decorativePatternColors={['bg-red-600', 'bg-black', 'bg-yellow-500']}
      />
      <Industries decorativePatternColors={['bg-red-600', 'bg-black', 'bg-yellow-500']} />
      <IntegratedSolutions 
        decorativePatternColors={['bg-red-600', 'bg-black', 'bg-yellow-500']}
        whiteBackground={true}
      />
      <WhyChooseUs countryName="Uganda" decorativePatternColors={['bg-red-600', 'bg-black', 'bg-yellow-500']} />
      <News decorativePatternColors={['bg-red-600', 'bg-black', 'bg-yellow-500']} />
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

