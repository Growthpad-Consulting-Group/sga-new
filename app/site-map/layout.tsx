import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Map - SGA Security Group',
  description: 'Complete site map of SGA Security Group website. Find all pages and navigate easily across our security services in Kenya, Tanzania, and Uganda.',
}

export default function SiteMapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
