import React from 'react'
import type { FeatureGridBlock as FeatureGridBlockType } from '@/payload-types'
import { Section, Container, Grid, Column } from '@/components/layout'

export const FeatureGridBlockComponent: React.FC<FeatureGridBlockType> = ({
  headline,
  subhead,
  features,
  columns,
  backgroundColor = 'white',
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
    <Section backgroundColor={backgroundColor}>
      <Container>
        {headline && (
          <h2 className="mb-4 text-center">
            {headline}
          </h2>
        )}
        {subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}
        
        <Grid cols={12} gap="standard">
          {features.map((feature, index) => (
            <Column key={index} span={columnSpan}>
              <div className="bg-[#F5F5F5] rounded-[5px] p-8">
                {feature.icon && (
                  <div className="mb-4 text-4xl" aria-hidden="true">{feature.icon}</div>
                )}
                <h4 className="mb-2">{feature.title}</h4>
                {feature.description && (
                  <p>{feature.description}</p>
                )}
              </div>
            </Column>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

