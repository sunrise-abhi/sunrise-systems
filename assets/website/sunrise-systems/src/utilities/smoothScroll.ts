/**
 * Checks if a URL is an anchor link (starts with # or is same-page with anchor)
 */
export function isAnchorLink(href: string): boolean {
  // Direct anchor link
  if (href.startsWith('#')) {
    return true
  }
  
  // Check if it's same-page anchor (e.g., /current-page#anchor)
  if (href.includes('#')) {
    const [path] = href.split('#')
    const currentPath = window.location.pathname
    
    // If path matches current page or is just an anchor
    return path === currentPath || path === ''
  }
  
  return false
}

/**
 * Smoothly scrolls to an element on the page
 * @param targetId - The ID of the element to scroll to (without the #)
 * @param offset - Optional offset from the top (useful for fixed headers)
 */
export function smoothScrollToElement(targetId: string, offset: number = 80): void {
  const element = document.getElementById(targetId)
  
  if (!element) {
    console.warn(`Element with id "${targetId}" not found`)
    return
  }
  
  // Check if Lenis is active
  const lenis = (window as typeof window & { lenis?: { scrollTo: (target: HTMLElement, options: { offset: number; duration: number; easing: (t: number) => number }) => void } }).lenis
  
  if (lenis && typeof lenis.scrollTo === 'function') {
    // Use Lenis for smooth scrolling with ease-in-out
    lenis.scrollTo(element, {
      offset: -offset,
      duration: 2.5,
      easing: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2, // Smooth ease-in-out
    })
  } else {
    // Fallback to native smooth scroll
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Extracts the anchor ID from a URL
 * @param href - The href value (e.g., "#anchor" or "/path#anchor")
 * @returns The anchor ID without the # symbol
 */
function getAnchorId(href: string): string {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return ''
  return href.substring(hashIndex + 1)
}

/**
 * Handles click events for anchor links with smooth scrolling
 * @param e - The click event
 * @param href - The href value of the link
 */
export function handleAnchorClick(e: React.MouseEvent, href: string | null | undefined): void {
  if (href && isAnchorLink(href)) {
    e.preventDefault()
    const targetId = getAnchorId(href)
    if (targetId) {
      smoothScrollToElement(targetId)
      // Update URL without navigation
      window.history.pushState(null, '', href)
    }
  }
}

