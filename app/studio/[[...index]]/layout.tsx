export const metadata = {
  title: 'SGA Security CMS Studio',
  description: 'Content management for SGA Security',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
