'use client'

import React from 'react'
import Link from 'next/link'
import type { ServicesCollectionBlock as ServicesCollectionBlockType } from '@/payload-types'
import type { Service } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'

export const ServicesCollectionBlockComponent: React.FC<ServicesCollectionBlockType> = ({
  headline,
  subhead,
  services,
  columns,
  backgroundColor = 'white',
  paddingTop,
  blockId,
  paddingBottom,
}) => {
  if (!services || services.length === 0) return null

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
          {headline && <h2 className="mb-4 text-center">{headline}</h2>}
          {subhead && <p className="mb-24 text-center body-1 max-w-3xl mx-auto whitespace-pre-line">{subhead}</p>}
        </AnimatedSection>

        <Grid cols={12} gap="standard">
          {services.map((item, index) => {
            const service = typeof item.service === 'object' ? (item.service as Service) : null
            const image = item.image
            if (!service) return null

            return (
              <Column key={index} span={columnSpan}>
                <AnimatedSection className="h-full">
                  <div className="bg-[#F5F5F5] rounded-[5px] p-8 flex flex-col h-full hover-shine">
                    <h4 className="mb-4">{service.title}</h4>

                    {image && typeof image === 'object' && (
                      <div className="aspect-square relative overflow-hidden rounded-[5px] w-full mb-4">
                        <Media resource={image} fill imgClassName="object-cover" />
                      </div>
                    )}

                    {service.excerpt && <p className="mb-4 body-3">{service.excerpt}</p>}

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="body-3">{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                    <Button
                      asChild
                      variant="primary"
                      className="w-full mt-auto z-10 relative"
                    >
                      <Link href={`/services/${service.slug}`}>
                        explore
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </Column>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}


