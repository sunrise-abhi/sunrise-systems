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
        {/* Primary Button - Always Visible */}
        {primaryButton && (
          <CMSLink {...primaryButton.link} />
        )}

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:text-primary transition-colors"
          style={{ color: '#111111' }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border/20 shadow-lg">
          <nav className="container py-6 flex flex-col gap-4">
            {regularNavItems.map(({ link }, i) => {
              return (
                <div key={i} onClick={() => setMobileMenuOpen(false)}>
                  <CMSLink {...link} />
                </div>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}
