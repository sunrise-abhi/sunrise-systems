'use client'

import React from 'react'
import type { SplitBlock as SplitBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'

export const SplitBlockComponent: React.FC<SplitBlockType> = ({
  image,
  label,
  labelAlignment = 'left',
  headline,
  subhead,
  imagePosition = 'left',
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  const imageResource = typeof image === 'object' ? image : null

  if (!imageResource) return null

  const imageSection = (
    <Column
      span={{ mobile: 4, desktop: 6 }}
      start={{ desktop: imagePosition === 'left' ? 1 : 7 }}
    >
      <div>
        <div className="aspect-square relative overflow-hidden rounded-[5px] w-full">
          <Media resource={imageResource} fill imgClassName="object-cover" />
        </div>
        {label && (
          <p
            className={`accent text-sm mt-2 ${labelAlignment === 'right' ? 'text-right' : 'text-left'}`}
          >
            {label}
          </p>
        )}
      </div>
    </Column>
  )

  const textSection = (
    <Column
      span={{ mobile: 4, desktop: 5 }}
      start={{ desktop: imagePosition === 'left' ? 8 : 1 }}
    >
      <div className="flex flex-col justify-center h-full">
        <h2 className="mb-4 whitespace-pre-line">{headline}</h2>
        {subhead && <p className="body-1 whitespace-pre-line">{subhead}</p>}
      </div>
    </Column>
  )

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <AnimatedSection>
          <Grid cols={12} gap="standard">
            {imagePosition === 'left' ? (
              <>
                {imageSection}
                {textSection}
              </>
            ) : (
              <>
                {textSection}
                {imageSection}
              </>
            )}
          </Grid>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

