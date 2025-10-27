import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Media } from '@/components/Media'
import { Container } from '@/components/layout'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const logoResource = typeof footerData?.logo === 'object' ? footerData.logo : null

  return (
    <footer className="mt-auto bg-white">
      <Container>
        <div className="py-8 gap-8 flex flex-col md:flex-row md:justify-between">
          <Link className="flex items-center" href="/">
            {logoResource ? (
              <Media 
                resource={logoResource} 
                imgClassName="w-auto h-[60px]"
              />
            ) : (
              <Logo />
            )}
          </Link>

          <nav className="flex flex-col md:flex-row gap-4 md:items-center">
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
