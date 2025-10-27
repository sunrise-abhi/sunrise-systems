import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroBlockComponent } from '@/blocks/HeroBlock/Component'
import { StatsRowBlockComponent } from '@/blocks/StatsRowBlock/Component'
import { TestimonialBlockComponent } from '@/blocks/TestimonialBlock/Component'
import { StatementBlockComponent } from '@/blocks/StatementBlock/Component'
import { FeatureGridBlockComponent } from '@/blocks/FeatureGridBlock/Component'
import { ProcessBlockComponent } from '@/blocks/ProcessBlock/Component'
import { LogoStripBlockComponent } from '@/blocks/LogoStripBlock/Component'
import { CaseStudySummaryBlockComponent } from '@/blocks/CaseStudySummaryBlock/Component'
import { ServiceSummaryBlockComponent } from '@/blocks/ServiceSummaryBlock/Component'
import { CalendlyBlockComponent } from '@/blocks/CalendlyBlock/Component'
import { CaseStudyPreviewBlockComponent } from '@/blocks/CaseStudyPreviewBlock/Component'
import { CaseStudyCarouselBlockComponent } from '@/blocks/CaseStudyCarouselBlock/Component'
import { ServicesCollectionBlockComponent } from '@/blocks/ServicesCollectionBlock/Component'
import { GalleryBlockComponent } from '@/blocks/GalleryBlock/Component'
import { ImageBlockComponent } from '@/blocks/ImageBlock/Component'
import { SplitBlockComponent } from '@/blocks/SplitBlock/Component'
import { CarouselBlockComponent } from '@/blocks/CarouselBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  heroBlock: HeroBlockComponent,
  statsRowBlock: StatsRowBlockComponent,
  testimonialBlock: TestimonialBlockComponent,
  statementBlock: StatementBlockComponent,
  featureGridBlock: FeatureGridBlockComponent,
  processBlock: ProcessBlockComponent,
  logoStripBlock: LogoStripBlockComponent,
  caseStudySummaryBlock: CaseStudySummaryBlockComponent,
  caseStudyPreviewBlock: CaseStudyPreviewBlockComponent,
  caseStudyCarouselBlock: CaseStudyCarouselBlockComponent,
  serviceSummaryBlock: ServiceSummaryBlockComponent,
  servicesCollectionBlock: ServicesCollectionBlockComponent,
  galleryBlock: GalleryBlockComponent,
  imageBlock: ImageBlockComponent,
  splitBlock: SplitBlockComponent,
  carouselBlock: CarouselBlockComponent,
  calendlyBlock: CalendlyBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
