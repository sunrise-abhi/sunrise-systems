'use client'

import React from 'react'
import type { ProcessBlock as ProcessBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'

export const ProcessBlockComponent: React.FC<ProcessBlockType> = ({
  headline,
  subhead,
  steps,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  if (!steps || steps.length === 0) return null

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <AnimatedSection>
          <Grid cols={12} gap="standard">
            {/* Left column: Headline & Subhead */}
            <Column span={{ mobile: 4, desktop: 5 }}>
              {headline && (
                <h2 className="mb-4">
                  {headline}
                </h2>
              )}
              {subhead && <p className="body-1 mb-8 whitespace-pre-line">{subhead}</p>}
            </Column>
            
            {/* Right column: Process steps */}
            <Column span={{ mobile: 4, desktop: 6 }} start={{ desktop: 7 }}>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-8">
                    {step.number && (
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-[5px] flex items-center justify-center font-mono text-2xl leading-none">
                        {step.number}
                      </div>
                    )}
                    <div className="flex-grow">
                      <h4 className="mb-2">{step.title}</h4>
                      {step.description && (
                        <p className="body-3">{step.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Column>
          </Grid>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

