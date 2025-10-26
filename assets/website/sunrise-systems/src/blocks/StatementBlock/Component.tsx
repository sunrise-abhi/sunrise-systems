import React from 'react'
import type { StatementBlock as StatementBlockType } from '@/payload-types'
import RichText from '@/components/RichText'
import { Section, Container, Grid, Column } from '@/components/layout'

export const StatementBlockComponent: React.FC<StatementBlockType> = ({
  headline,
  content,
  alignment = 'left',
  ctaButton,
  backgroundColor = 'white',
}) => {
  // Alignment configurations
  const alignmentConfig: Record<string, { span: number; start: number; textAlign: string }> = {
    left: { span: 6, start: 1, textAlign: 'text-left' },
    center: { span: 8, start: 3, textAlign: 'text-center' },
    right: { span: 6, start: 7, textAlign: 'text-right' },
  }

  const config = alignmentConfig[alignment ?? 'left'] || alignmentConfig.left
  const { span, start, textAlign } = config

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Grid cols={12}>
          <Column span={{ mobile: 4, desktop: span }} start={{ desktop: start }}>
            <div className={textAlign}>
              <h2 className="mb-8">
                {headline}
              </h2>
              
              {content && (
                <div className="mb-8">
                  <RichText className="[&_p]:text-[1.5rem] [&_p]:leading-[1.5] [&_p]:font-medium" data={content} enableGutter={false} />
                </div>
              )}
              
              {ctaButton?.label && ctaButton?.url && (
                <a
                  href={ctaButton.url}
                  className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base bg-primary text-white hover:bg-primary/90 font-mono uppercase transition-colors"
                >
                  {ctaButton.label}
                </a>
              )}
            </div>
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}

