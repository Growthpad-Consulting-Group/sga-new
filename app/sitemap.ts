import { MetadataRoute } from 'next'
import { getAllRoutes } from '@/lib/sitemap-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sgasecurity.com' // Replace with your actual domain
  
  // Automatically scan all routes from the app directory
  const routes = getAllRoutes()

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
