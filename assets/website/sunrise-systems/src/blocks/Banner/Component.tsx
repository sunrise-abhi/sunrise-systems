import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { Section, Container } from '@/components/layout'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style, backgroundColor = 'white' }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <div className={cn('', className)}>
          <div
            className={cn('border py-4 px-8 flex items-center rounded', {
              'border-border bg-card': style === 'info',
              'border-error bg-error/30': style === 'error',
              'border-success bg-success/30': style === 'success',
              'border-warning bg-warning/30': style === 'warning',
            })}
          >
            <RichText data={content} enableGutter={false} enableProse={false} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
