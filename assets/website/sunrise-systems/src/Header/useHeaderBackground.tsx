'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function useHeaderBackground() {
  const [bgColor, setBgColor] = useState('#FBFBFB')
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)
  
  useEffect(() => {
    // Detect navigation
    if (prevPathnameRef.current !== pathname) {
      setIsNavigating(true)
      prevPathnameRef.current = pathname
      
      // Re-enable transition after navigation completes
      const transitionTimer = setTimeout(() => {
        setIsNavigating(false)
      }, 50)
      
      return () => clearTimeout(transitionTimer)
    }
  }, [pathname])
  
  useEffect(() => {
    const updateHeaderColor = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[data-bg-color]')
      
      let currentColor: string | null = null
      
      // Find the section currently behind the header
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom > 0) {
          const sectionBg = section.getAttribute('data-section-bg')
          if (sectionBg === 'transparent') {
            currentColor = 'transparent'
          } else {
            const color = section.getAttribute('data-bg-color')
            if (color) currentColor = color
          }
        }
      })
      
      // If no section found behind header, use first section
      if (!currentColor && sections.length > 0) {
        const firstSectionBg = sections[0].getAttribute('data-section-bg')
        if (firstSectionBg === 'transparent') {
          currentColor = 'transparent'
        } else {
          currentColor = sections[0].getAttribute('data-bg-color')
        }
      }
      
      if (currentColor) {
        setBgColor(currentColor)
      }
    }
    
    // Update immediately on mount and route change
    updateHeaderColor()
    
    // Small delay to ensure DOM is ready after navigation
    const timer = setTimeout(updateHeaderColor, 100)
    
    // Update on scroll with throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeaderColor()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [pathname])
  
  return { bgColor, isNavigating }
}
