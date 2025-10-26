import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { HeroBlock } from '../../blocks/HeroBlock/config'
import { StatsRowBlock } from '../../blocks/StatsRowBlock/config'
import { TestimonialBlock } from '../../blocks/TestimonialBlock/config'
import { StatementBlock } from '../../blocks/StatementBlock/config'
import { FeatureGridBlock } from '../../blocks/FeatureGridBlock/config'
import { ProcessBlock } from '../../blocks/ProcessBlock/config'
import { LogoStripBlock } from '../../blocks/LogoStripBlock/config'
import { CaseStudySummaryBlock } from '../../blocks/CaseStudySummaryBlock/config'
import { ServiceSummaryBlock } from '../../blocks/ServiceSummaryBlock/config'
import { CalendlyBlock } from '../../blocks/CalendlyBlock/config'
import { CaseStudyPreviewBlock } from '../../blocks/CaseStudyPreviewBlock/config'
import { CaseStudyCarouselBlock } from '../../blocks/CaseStudyCarouselBlock/config'
import { ServicesCollectionBlock } from '../../blocks/ServicesCollectionBlock/config'
import { GalleryBlock } from '../../blocks/GalleryBlock/config'
import { ImageBlock } from '../../blocks/ImageBlock/config'
import { SplitBlock } from '../../blocks/SplitBlock/config'
import { CarouselBlock } from '../../blocks/CarouselBlock/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                HeroBlock,
                StatsRowBlock,
                TestimonialBlock,
                StatementBlock,
                FeatureGridBlock,
                ProcessBlock,
                LogoStripBlock,
                CaseStudySummaryBlock,
                CaseStudyPreviewBlock,
                CaseStudyCarouselBlock,
                ServiceSummaryBlock,
                ServicesCollectionBlock,
                GalleryBlock,
                ImageBlock,
                SplitBlock,
                CarouselBlock,
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                CalendlyBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
