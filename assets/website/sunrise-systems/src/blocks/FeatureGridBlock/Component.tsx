'use client'

import React from 'react'
import type { FeatureGridBlock as FeatureGridBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'

export const FeatureGridBlockComponent: React.FC<FeatureGridBlockType> = ({
  headline,
  subhead,
  features,
  columns,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
  blockId,
}) => {
  if (!features || features.length === 0) return null

  // Map column count to grid spans
  const getColumnSpan = (cols: string) => {
    switch (cols) {
      case '2':
        return { mobile: 4, tablet: 2, desktop: 6 }
      case '3':
        return { mobile: 4, tablet: 2, desktop: 4 }
      case '4':
        return { mobile: 4, tablet: 2, desktop: 3 }
      default:
        return { mobile: 4, tablet: 2, desktop: 4 }
    }
  }

  const columnSpan = getColumnSpan(columns || '3')

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId}>
      <Container>
        <AnimatedSection>
          {headline && (
            <h2 className="mb-4 text-center">
              {headline}
            </h2>
          )}
          {subhead && <p className="mb-24 text-center body-1 max-w-3xl mx-auto whitespace-pre-line">{subhead}</p>}
        </AnimatedSection>
        
        <Grid cols={12} gap="standard">
          {features.map((feature, index) => {
            const imageResource = typeof feature.image === 'object' ? feature.image : null
            
            return (
              <Column key={index} span={columnSpan}>
                <div className="bg-[#F5F5F5] rounded-[5px] p-8 h-full flex flex-col">
                  {imageResource && (
                    <div className="mb-4 relative w-full aspect-square overflow-hidden rounded-[5px]">
                      <Media 
                        resource={imageResource} 
                        fill 
                        imgClassName="object-cover"
                      />
                    </div>
                  )}
                  <h4 className="mb-2">{feature.title}</h4>
                  {feature.description && (
                    <p className="body-3">{feature.description}</p>
                  )}
                </div>
              </Column>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}

