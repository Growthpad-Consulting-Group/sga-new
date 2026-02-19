import { NextResponse } from 'next/server'
import { getAllRoutes, groupRoutesByCategory } from '@/lib/sitemap-utils'

export async function GET() {
  try {
    const routes = getAllRoutes()
    const groupedRoutes = groupRoutesByCategory(routes)
    
    const sitemapSections = Object.entries(groupedRoutes)
      .filter(([_, links]) => links.length > 0)
      .map(([title, links]) => ({ title, links }))

    return NextResponse.json(sitemapSections)
  } catch (error) {
    console.error('Error generating sitemap data:', error)
    return NextResponse.json({ error: 'Failed to generate sitemap' }, { status: 500 })
  }
}
