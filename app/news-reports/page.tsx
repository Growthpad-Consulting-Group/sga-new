import NewsHero from '@/components/NewsHero'
import NewsReportsCards from '@/components/NewsReportsCards'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Reports - SGA Security Group - Stay Informed',
  description: 'Stay informed with the latest news, reports, and security updates from SGA Security Group. Access annual reports, security advisories, and industry insights.',
}

export default function NewsReportsPage(): React.JSX.Element {
  return (
    <>
      <NewsHero
        imageUrl="/images/contact/hero.png"
      />
      <NewsReportsCards />
      <FloatingWhatsApp />
    </>
  )
}

