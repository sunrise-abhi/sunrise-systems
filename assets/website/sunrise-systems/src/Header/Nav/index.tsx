'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Separate primary button from other nav items
  const primaryButton = navItems.find(item => item.link?.appearance === 'primary')
  const regularNavItems = navItems.filter(item => item.link?.appearance !== 'primary')

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleCloseMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} />
        })}
      </nav>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-4">
        {/* Hamburger Menu Button */}
        <button
          onClick={handleToggleMenu}
          className="p-2 hover:text-primary transition-colors relative z-[70]"
          style={{ color: '#111111' }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/20 z-[45]" 
            style={{ top: '80px' }}
            onClick={handleCloseMenu}
            aria-hidden="true"
          />
          
          {/* Menu content */}
          <div className="md:hidden fixed left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border/20 shadow-lg z-[46]" style={{ top: '80px' }}>
            <nav className="container py-6 flex flex-col gap-4">
              {/* Primary Button - Prominent at top */}
              {primaryButton && (
                <div onClick={handleCloseMenu}>
                  <CMSLink {...primaryButton.link} className="w-full" />
                </div>
              )}
              
              {regularNavItems.map(({ link }, i) => {
                return (
                  <div key={i} onClick={handleCloseMenu}>
                    <CMSLink {...link} />
                  </div>
                )
              })}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
