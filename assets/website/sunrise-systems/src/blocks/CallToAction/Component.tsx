'use client'

import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { handleAnchorClick, isAnchorLink } from '@/utilities/smoothScroll'
import { CTAScarcityTag } from '@/components/ScarcityTag/CTAScarcityTag'

export const CallToActionBlock: React.FC<CTABlockProps & { scarcityData?: any }> = (props) => {
  const { links, headline, subhead, backgroundColor = 'white', blockId, showScarcity, scarcityData } = props
  const shouldShowScarcity = showScarcity && scarcityData?.enabled
  
  // Debug logging - Log ALL props to see what's being passed
  if (typeof window === 'undefined') {
    console.log('CTA Block - Server Side Full Props:', {
      showScarcity,
      showScarcityType: typeof showScarcity,
      hasScarcityData: !!scarcityData,
      scarcityEnabled: scarcityData?.enabled,
      shouldShowScarcity,
      allProps: Object.keys(props),
      blockId,
      headline: headline?.substring(0, 30) + '...',
      rawShowScarcity: props.showScarcity,
    })
  }
  
  // Force show for testing - TEMPORARY
  const forceShow = true // Set to true to test if tag renders
  const actualShouldShow = forceShow || (showScarcity && scarcityData?.enabled)
  
  return (
    <Section backgroundColor={backgroundColor} blockId={blockId || undefined}>
      <Container>
        <AnimatedSection className="h-full">
          <div className="rounded bg-[#FF6000] pt-64 pb-8 lg:pb-12 px-8 lg:px-12 hover-shine">
            <Grid cols={12} gap="standard" className="items-end">
            <Column span={{ mobile: 4, desktop: 6 }}>
              <div className="flex flex-col gap-4">
                {actualShouldShow && scarcityData && (
                  <CTAScarcityTag scarcityData={scarcityData} />
                )}
                {headline && (
                  <h2 className="text-[3rem] leading-[1.333] text-white font-normal">
                    {headline}
                  </h2>
                )}
                {subhead && (
                  <p className="text-[1.5rem] leading-[1.5] text-white whitespace-pre-line">
                    {subhead}
                  </p>
                )}
              </div>
            </Column>
            <Column span={{ mobile: 4, desktop: 2 }} start={{ desktop: 11 }}>
              <div className="flex flex-col gap-8">
                {(links || []).map(({ link }, i) => {
                  const href = link?.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value.slug
                    ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${link.reference.value.slug}`
                    : link?.url
                  
                  if (!href) return null
                  
                  const newTabProps = link?.newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}
                  const isAnchor = isAnchorLink(href)
                  
                  return (
                    <Button 
                      key={i} 
                      asChild 
                      variant="arrow-button-cta"
                      className="h-20 md:h-32 w-full text-[4rem]"
                    >
                      {isAnchor ? (
                        <a 
                          href={href} 
                          onClick={(e) => handleAnchorClick(e, href)}
                        >
                          →
                        </a>
                      ) : (
                        <Link href={href} {...newTabProps}>
                          →
                        </Link>
                      )}
                    </Button>
                  )
                })}
              </div>
            </Column>
          </Grid>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  )
}
