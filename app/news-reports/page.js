import NewsHero from '@/components/NewsHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import GroupFooter from '@/components/GroupFooter'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'News & Reports - SGA Security Group - Stay Informed',
  description: 'Stay informed with the latest news, reports, and security updates from SGA Security Group. Access annual reports, security advisories, and industry insights.',
}

export default function NewsReportsPage() {
  return (
    <>
      <NewsHero 
        imageUrl="/images/contact/hero.png"
      />
      <NewsReportsCards />
      <GroupFooter /> 
      <FloatingWhatsApp />
    </>
  )
}

