import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'
import { Section, Container } from '@/components/layout'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer: _disableInnerContainer,
    backgroundColor = 'white',
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <Section backgroundColor={backgroundColor}>
      {enableGutter ? (
        <Container>
          <div className={cn('', className)}>
            {(media || staticImage) && (
              <Media
                imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                resource={media}
                src={staticImage}
              />
            )}
            {caption && (
              <div className={cn('mt-8', captionClassName)}>
                <RichText data={caption} enableGutter={false} />
              </div>
            )}
          </div>
        </Container>
      ) : (
        <div className={cn('', className)}>
          {(media || staticImage) && (
            <Media
              imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
              resource={media}
              src={staticImage}
            />
          )}
          {caption && (
            <div className={cn('mt-8', captionClassName)}>
              <RichText data={caption} enableGutter={false} />
            </div>
          )}
        </div>
      )}
    </Section>
  )
}
