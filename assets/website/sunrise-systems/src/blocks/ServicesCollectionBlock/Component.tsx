import React from 'react'
import Link from 'next/link'
import type { ServicesCollectionBlock as ServicesCollectionBlockType } from '@/payload-types'
import type { Service } from '@/payload-types'
import { Section, Container, Grid, Column } from '@/components/layout'
import { Media } from '@/components/Media'

export const ServicesCollectionBlockComponent: React.FC<ServicesCollectionBlockType> = ({
  headline,
  subhead,
  services,
  columns,
  backgroundColor = 'white',
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
    <Section backgroundColor={backgroundColor}>
      <Container>
        {headline && <h2 className="mb-4 text-center">{headline}</h2>}
        {subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}

        <Grid cols={12} gap="standard">
          {services.map((item, index) => {
            const service = typeof item.service === 'object' ? (item.service as Service) : null
            const image = item.image
            if (!service) return null

            return (
              <Column key={index} span={columnSpan}>
                <div className="bg-[#F5F5F5] rounded-[5px] p-8 flex flex-col h-full">
                  <h3 className="mb-4">{service.title}</h3>

                  {image && typeof image === 'object' && (
                    <Media resource={image} className="mb-4 rounded-[5px] w-full" />
                  )}

                  {service.excerpt && <p className="mb-4">{service.excerpt}</p>}

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-mono uppercase transition-colors w-full mt-auto"
                  >
                    explore
                  </Link>
                </div>
              </Column>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}


