import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Media } from '@/components/Media'
import { Container, Grid, Column } from '@/components/layout'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const navItemsColumn2 = footerData?.navItemsColumn2 || []
  const logoResource = typeof footerData?.logo === 'object' ? footerData.logo : null
  const logoText = footerData?.logoText

  return (
    <footer className="mt-auto bg-white mb-16 py-8">
      <Container>
        <Grid cols={12} gap="standard">
          {/* Logo and Text Section */}
          <Column span={{ mobile: 4, desktop: 4 }}>
            <div className="flex flex-col gap-4">
              <Link href="/">
                {logoResource ? (
                  <Media 
                    resource={logoResource} 
                    imgClassName="w-auto h-[60px]"
                  />
                ) : (
                  <Logo />
                )}
              </Link>
              {logoText && (
                <p className="body-3 max-w-full">
                  {logoText}
                </p>
              )}
            </div>
          </Column>

          {/* Navigation Columns */}
          <Column span={{ mobile: 4, desktop: 8 }}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:justify-end">
              {/* Column 1 */}
              {navItems.length > 0 && (
                <nav className="flex flex-col gap-4">
                  {navItems.map(({ link }, i) => {
                    return <CMSLink key={i} {...link} />
                  })}
                </nav>
              )}
              
              {/* Column 2 */}
              {navItemsColumn2.length > 0 && (
                <nav className="flex flex-col gap-4">
                  {navItemsColumn2.map(({ link }, i) => {
                    return <CMSLink key={i} {...link} />
                  })}
                </nav>
              )}
            </div>
          </Column>
        </Grid>
      </Container>
    </footer>
  )
}
