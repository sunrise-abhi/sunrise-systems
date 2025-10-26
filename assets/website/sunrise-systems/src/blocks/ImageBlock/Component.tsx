import React from 'react'
import type { ImageBlock as ImageBlockType } from '@/payload-types'
import { Section, Container, Grid, Column } from '@/components/layout'
import { Media } from '@/components/Media'

export const ImageBlockComponent: React.FC<ImageBlockType> = ({
  image,
  alt,
  label,
  labelAlignment = 'left',
  position,
  backgroundColor = 'white',
}) => {
  const getPositionConfig = (pos: string) => {
    const configs: Record<string, { span: number; start: number }> = {
      '4-left': { span: 4, start: 1 },
      '5-left': { span: 5, start: 1 },
      '6-left': { span: 6, start: 1 },
      '6-right': { span: 6, start: 7 },
      '5-right': { span: 5, start: 8 },
      '4-right': { span: 4, start: 9 },
    }
    return configs[pos] || configs['6-left']
  }

  const { span, start } = getPositionConfig(position)
  const imageResource = typeof image === 'object' ? image : null

  if (!imageResource) return null

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Grid cols={12}>
          <Column span={{ mobile: 4, desktop: span }} start={{ desktop: start }}>
            <div>
              <div className="aspect-square relative overflow-hidden rounded-[5px] w-full">
                <Media resource={imageResource} alt={alt || ''} fill imgClassName="object-cover" />
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
        </Grid>
      </Container>
    </Section>
  )
}

