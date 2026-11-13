'use client'

import { useEffect } from 'react'

export default function SmoothAnchorScroll(): null {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return

      const clickedElement = event.target
      if (!(clickedElement instanceof Element)) return

      const link = clickedElement.closest<HTMLAnchorElement>('a[href*="#"]')
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return

      const targetUrl = new URL(link.href, window.location.href)
      const isSamePage =
        targetUrl.origin === window.location.origin &&
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search

      if (!isSamePage || !targetUrl.hash) return

      const targetId = decodeURIComponent(targetUrl.hash.slice(1))
      const target = document.getElementById(targetId)
      if (!target) return

      event.preventDefault()

      const oldUrl = window.location.href
      window.history.pushState(null, '', targetUrl)
      window.dispatchEvent(new HashChangeEvent('hashchange', {
        oldURL: oldUrl,
        newURL: targetUrl.href,
      }))

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
      })
    }

    // Capture before transition-aware Link components intercept the click.
    document.addEventListener('click', handleAnchorClick, true)
    return () => document.removeEventListener('click', handleAnchorClick, true)
  }, [])

  return null
}
