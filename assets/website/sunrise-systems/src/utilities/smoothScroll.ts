/**
 * Checks if a URL is an anchor link (starts with #)
 */
export function isAnchorLink(href: string): boolean {
  return href.startsWith('#')
}

/**
 * Smoothly scrolls to an element on the page
 * @param targetId - The ID of the element to scroll to (without the #)
 * @param offset - Optional offset from the top (useful for fixed headers)
 */
export function smoothScrollToElement(targetId: string, offset: number = 80): void {
  const element = document.getElementById(targetId)
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Handles click events for anchor links with smooth scrolling
 * @param e - The click event
 * @param href - The href value of the link
 */
export function handleAnchorClick(e: React.MouseEvent, href: string): void {
  if (isAnchorLink(href)) {
    e.preventDefault()
    const targetId = href.substring(1) // Remove the # symbol
    smoothScrollToElement(targetId)
  }
}

