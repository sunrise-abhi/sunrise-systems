import React from 'react'
import Image from 'next/image'
import type { LogoStripBlock as LogoStripBlockType } from '@/payload-types'
import type { Media } from '@/payload-types'
import { Section, Container } from '@/components/layout'

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
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => {
            const imageUrl = typeof logo.image === 'object' && logo.image !== null
              ? (logo.image as Media).url
              : null

            return imageUrl ? (
              <Image
                key={index}
                src={imageUrl}
                alt={logo.altText}
                width={200}
                height={48}
                className="h-12 object-contain"
              />
            ) : null
          })}
        </div>
      </Container>
    </Section>
  )
}

