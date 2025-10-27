import React from 'react'
import type { TestimonialBlock as TestimonialBlockType } from '@/payload-types'
import type { Media as MediaType } from '@/payload-types'
import { Section, Container, Grid, Column } from '@/components/layout'
import { Media } from '@/components/Media'

export const TestimonialBlockComponent: React.FC<TestimonialBlockType> = ({
  quote,
  authorName,
  authorTitle,
  companyName,
  authorImage,
  position = 'center',
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  const imageResource = typeof authorImage === 'object' && authorImage !== null 
    ? authorImage as MediaType
    : null

  // Position configurations
  const positionConfig: Record<string, { span: number; start: number }> = {
    center: { span: 6, start: 4 },
    left: { span: 5, start: 2 },
    right: { span: 5, start: 7 },
  }

  const { span, start } = positionConfig[position ?? 'center'] || positionConfig.center

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <Grid cols={12}>
          <Column span={{ mobile: 4, desktop: span }} start={{ desktop: start }}>
            <blockquote className="body-2 mb-8">
              &ldquo;{quote}&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-4">
              {imageResource && (
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Media
                    resource={imageResource}
                    alt={authorName}
                    fill
                    imgClassName="object-cover"
                  />
                </div>
              )}
              
              <div>
                <p className="body-3 font-semibold">{authorName}</p>
                <p className="accent text-[#999999]">
                  {authorTitle}
                  {companyName && `, ${companyName}`}
                </p>
              </div>
            </div>
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}

