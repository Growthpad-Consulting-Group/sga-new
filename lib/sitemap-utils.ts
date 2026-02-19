import fs from 'fs'
import path from 'path'

interface Route {
  path: string
  priority: number
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

/**
 * Recursively scans the app directory to find all page routes
 */
export function getAllRoutes(): Route[] {
  const appDir = path.join(process.cwd(), 'app')
  const routes: Route[] = []

  function scanDirectory(dir: string, basePath: string = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      // Skip special Next.js files and directories
      if (
        entry.name.startsWith('_') ||
        entry.name.startsWith('.') ||
        entry.name === 'api' ||
        entry.name === 'layout.tsx' ||
        entry.name === 'layout.js' ||
        entry.name === 'loading.tsx' ||
        entry.name === 'loading.js' ||
        entry.name === 'error.tsx' ||
        entry.name === 'error.js' ||
        entry.name === 'not-found.tsx' ||
        entry.name === 'not-found.js' ||
        entry.name === 'sitemap.ts' ||
        entry.name === 'sitemap.js' ||
        entry.name === 'robots.txt'
      ) {
        continue
      }

      if (entry.isDirectory()) {
        // Handle route groups (folders with parentheses)
        const isRouteGroup = entry.name.startsWith('(') && entry.name.endsWith(')')
        const newBasePath = isRouteGroup 
          ? basePath 
          : `${basePath}/${entry.name}`
        
        scanDirectory(fullPath, newBasePath)
      } else if (entry.name === 'page.tsx' || entry.name === 'page.js') {
        // Found a page route
        const routePath = basePath || '/'
        
        // Determine priority and change frequency based on route
        let priority = 0.5
        let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly'
        
        if (routePath === '/') {
          priority = 1
          changeFrequency = 'daily'
        } else if (routePath.includes('/updates') || routePath.includes('/news-reports')) {
          changeFrequency = 'weekly'
          priority = 0.7
        } else if (routePath.match(/^\/(ke|tz|ug)$/)) {
          priority = 0.8
          changeFrequency = 'weekly'
        } else if (routePath.startsWith('/ke') || routePath.startsWith('/tz') || routePath.startsWith('/ug')) {
          priority = 0.7
        }
        
        routes.push({
          path: routePath,
          priority,
          changeFrequency,
        })
      }
    }
  }

  scanDirectory(appDir)
  return routes.sort((a, b) => a.path.localeCompare(b.path))
}

/**
 * Groups routes by category for the visual sitemap page
 */
export function groupRoutesByCategory(routes: Route[]) {
  const grouped: Record<string, Array<{ href: string; label: string }>> = {
    'Group Pages': [],
    'Kenya': [],
    'Tanzania': [],
    'Uganda': [],
    'Legal & Information': [],
  }

  routes.forEach((route) => {
    const { path: routePath } = route
    
    // Generate a readable label from the path
    const label = routePath === '/' 
      ? 'Home' 
      : routePath
          .split('/')
          .filter(Boolean)
          .map(segment => 
            segment
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
          )
          .join(' - ')

    // Categorize the route
    if (routePath === '/' || (routePath.match(/^\/[^/]+$/) && !routePath.match(/^\/(ke|tz|ug)/))) {
      // Group pages (root level pages)
      if (routePath.includes('privacy') || routePath.includes('terms') || routePath.includes('site-map')) {
        grouped['Legal & Information'].push({ href: routePath, label })
      } else {
        grouped['Group Pages'].push({ href: routePath, label })
      }
    } else if (routePath.startsWith('/ke')) {
      grouped['Kenya'].push({ href: routePath, label: label.replace('Ke - ', '') || 'Kenya Home' })
    } else if (routePath.startsWith('/tz')) {
      grouped['Tanzania'].push({ href: routePath, label: label.replace('Tz - ', '') || 'Tanzania Home' })
    } else if (routePath.startsWith('/ug')) {
      grouped['Uganda'].push({ href: routePath, label: label.replace('Ug - ', '') || 'Uganda Home' })
    }
  })

  return grouped
}
