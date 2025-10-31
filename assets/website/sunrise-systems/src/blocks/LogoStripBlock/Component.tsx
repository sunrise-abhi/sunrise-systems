'use client'

import React from 'react'
import type { LogoStripBlock as LogoStripBlockType } from '@/payload-types'
import { Section, Container, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'

export const LogoStripBlockComponent: React.FC<LogoStripBlockType> = ({
  headline,
  logos,
  direction = 'left',
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
  blockId,
}) => {
  if (!logos || logos.length === 0) return null

  const animationClass = direction === 'right' ? 'animate-scroll-reverse' : 'animate-scroll'
  const initialPosition = direction === 'right' ? '-translate-x-1/3' : ''

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId}>
      <Container>
        <AnimatedSection>
          {headline && (
            <h3 className="mb-8 text-center accent">
              {headline}
            </h3>
          )}
          
          <div className="overflow-hidden relative">
            <div className={`flex items-center ${animationClass} ${initialPosition}`}>
              {/* Render logos multiple times for seamless infinite loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => {
                const imageResource = typeof logo.image === 'object' && logo.image !== null
                  ? logo.image
                  : null

                return imageResource ? (
                  <div key={index} className="h-12 flex-shrink-0 px-12">
                    <Media
                      resource={imageResource}
                      alt={logo.altText}
                      imgClassName="h-12 w-auto object-contain max-w-[200px]"
                    />
                  </div>
                ) : null
              })}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

