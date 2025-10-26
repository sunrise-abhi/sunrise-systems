import React from 'react'
import type { SplitBlock as SplitBlockType } from '@/payload-types'
import { Section, Container, Grid, Column } from '@/components/layout'
import { Media } from '@/components/Media'

export const SplitBlockComponent: React.FC<SplitBlockType> = ({
  image,
  alt,
  label,
  labelAlignment = 'left',
  headline,
  subhead,
  imagePosition = 'left',
  backgroundColor = 'white',
}) => {
  const imageResource = typeof image === 'object' ? image : null

  if (!imageResource) return null

  const imageSection = (
    <Column span={{ mobile: 4, desktop: 6 }}>
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
  )

  const textSection = (
    <Column span={{ mobile: 4, desktop: 6 }}>
      <div className="flex flex-col justify-center h-full">
        <h2 className="mb-4">{headline}</h2>
        {subhead && <p className="body-1">{subhead}</p>}
      </div>
    </Column>
  )

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Grid cols={12} gap="standard">
          {imagePosition === 'left' ? (
            <>
              {imageSection}
              {textSection}
            </>
          ) : (
            <>
              {textSection}
              {imageSection}
            </>
          )}
        </Grid>
      </Container>
    </Section>
  )
}

