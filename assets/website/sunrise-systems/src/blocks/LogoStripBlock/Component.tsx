import React from 'react'
import type { LogoStripBlock as LogoStripBlockType } from '@/payload-types'
import { Section, Container } from '@/components/layout'
import { Media } from '@/components/Media'

export const LogoStripBlockComponent: React.FC<LogoStripBlockType> = ({
  headline,
  logos,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  if (!logos || logos.length === 0) return null

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        {headline && (
          <h3 className="mb-8 text-center accent">
            {headline}
          </h3>
        )}
        
        <div className="flex justify-evenly items-center">
          {logos.map((logo, index) => {
            const imageResource = typeof logo.image === 'object' && logo.image !== null
              ? logo.image
              : null

            return imageResource ? (
              <div key={index} className="h-12 flex-shrink-0">
                <Media
                  resource={imageResource}
                  alt={logo.altText}
                  imgClassName="h-12 w-auto object-contain"
                />
              </div>
            ) : null
          })}
        </div>
      </Container>
    </Section>
  )
}

