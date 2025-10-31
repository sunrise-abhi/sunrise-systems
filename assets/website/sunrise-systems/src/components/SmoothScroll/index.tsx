'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Check if device is mobile (disable smooth scroll on mobile for better performance)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    // Don't initialize if user prefers reduced motion or is on mobile
    if (prefersReducedMotion || isMobile) {
      return
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Request animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}

