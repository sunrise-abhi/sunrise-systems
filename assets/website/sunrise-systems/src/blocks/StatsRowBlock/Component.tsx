'use client'

import React from 'react'
import type { StatsRowBlock as StatsRowBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'

export const StatsRowBlockComponent: React.FC<StatsRowBlockType> = ({ stats, backgroundColor = 'white', paddingTop, paddingBottom, blockId }) => {
  if (!stats || stats.length === 0) return null

  // Map stat count to column spans
  const getColumnSpan = (count: number) => {
    switch (count) {
      case 2:
        return { mobile: 4, desktop: 6 }
      case 3:
        return { mobile: 4, desktop: 4 }
      case 4:
        return { mobile: 4, tablet: 2, desktop: 3 }
      default:
        return { mobile: 4, desktop: 4 }
    }
  }

  const columnSpan = getColumnSpan(stats.length)

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId || undefined}>
      <Container>
        <AnimatedSection>
          <Grid cols={12} gap="standard">
            {stats.map((stat, index) => (
              <Column key={index} span={columnSpan}>
                <div className="text-center">
                  <h2 className="mb-2">
                    {stat.value}
                  </h2>
                  <p className="accent">
                    {stat.label}
                  </p>
                </div>
              </Column>
            ))}
          </Grid>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

