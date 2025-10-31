'use client'

import React from 'react'
import type { GalleryBlock as GalleryBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'

export const GalleryBlockComponent: React.FC<GalleryBlockType> = ({
  images,
  height,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  // Validate: 4 images only with full height
  if (images && images.length === 4 && height !== 'full') return null
  if (!images || images.length === 0) return null

  const getColumnSpan = (count: number) => {
    switch (count) {
      case 1:
        return { mobile: 4, desktop: 12 }
      case 2:
        return { mobile: 4, desktop: 6 }
      case 3:
        return { mobile: 4, desktop: 4 }
      case 4:
        return { mobile: 4, desktop: 6 }
      default:
        return { mobile: 4, desktop: 12 }
    }
  }

  const aspectRatioClass = height === 'full' ? 'aspect-square' : 'aspect-[2/1]'
  const columnSpan = getColumnSpan(images.length)

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <AnimatedSection>
          <Grid cols={12} gap="standard">
            {images.map((item: any, index: number) => {
              const imageResource = typeof item.image === 'object' ? item.image : null
              if (!imageResource) return null

              return (
                <Column key={index} span={columnSpan}>
                  <div>
                    <div className={`${aspectRatioClass} relative overflow-hidden rounded-[5px] w-full`}>
                      <Media resource={imageResource} fill imgClassName="object-cover" />
                    </div>
                    {item.label && (
                      <p
                        className={`accent text-sm mt-2 ${item.labelAlignment === 'right' ? 'text-right' : 'text-left'}`}
                      >
                        {item.label}
                      </p>
                    )}
                  </div>
                </Column>
              )
            })}
          </Grid>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

