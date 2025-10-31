'use client'

import React from 'react'
import Link from 'next/link'
import type { ServiceSummaryBlock as ServiceSummaryBlockType } from '@/payload-types'
import type { Service } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'

export const ServiceSummaryBlockComponent: React.FC<ServiceSummaryBlockType> = ({
  service,
  displayStyle,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  if (!service || typeof service === 'string') return null

  const serviceData = service as Service

  if (displayStyle === 'detailed') {
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
        <Container>
          <AnimatedSection>
            <Grid cols={12}>
              <Column span={{ mobile: 4, desktop: 8 }}>
                <h2 className="mb-4">{serviceData.title}</h2>
                <p className="body-1 mb-8">{serviceData.excerpt}</p>
                
                {serviceData.featuredMetrics && serviceData.featuredMetrics.length > 0 && (
                  <Grid cols={2} gap="standard">
                    {serviceData.featuredMetrics.map((metric, idx) => (
                      <Column key={idx} span={{ mobile: 1, desktop: 1 }}>
                        <h4>{metric.value}</h4>
                        <p className="accent">{metric.label}</p>
                      </Column>
                    ))}
                  </Grid>
                )}
                
                <Link 
                  href={`/services/${serviceData.slug}`}
                  className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-mono uppercase transition-colors mt-8"
                >
                  Learn more about {serviceData.category}
                </Link>
              </Column>
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>
    )
  }
  
  // Card style
  return (
    <div className="border border-border p-8 hover:border-primary transition rounded-[5px]">
      {serviceData.icon && (
        <div className="mb-4" style={{ fontSize: '2.5rem' }}>{serviceData.icon}</div>
      )}
      <h3 className="mb-2">{serviceData.title}</h3>
      <p className="body-2 mb-4">{serviceData.excerpt}</p>
      <Link 
        href={`/services/${serviceData.slug}`}
        className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-mono uppercase transition-colors"
      >
        Learn more
      </Link>
    </div>
  )
}

