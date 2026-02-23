import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - SGA Security Group',
  description: 'Read the terms and conditions for using SGA Security Group services and website.',
}

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
