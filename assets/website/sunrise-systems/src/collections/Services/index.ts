import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { HeroBlock } from '../../blocks/HeroBlock/config'
import { StatementBlock } from '../../blocks/StatementBlock/config'
import { StatsRowBlock } from '../../blocks/StatsRowBlock/config'
import { TestimonialBlock } from '../../blocks/TestimonialBlock/config'
import { FeatureGridBlock } from '../../blocks/FeatureGridBlock/config'
import { ProcessBlock } from '../../blocks/ProcessBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { CaseStudySummaryBlock } from '../../blocks/CaseStudySummaryBlock/config'
import { CaseStudyPreviewBlock } from '../../blocks/CaseStudyPreviewBlock/config'
import { CaseStudyCarouselBlock } from '../../blocks/CaseStudyCarouselBlock/config'
import { ServicesCollectionBlock } from '../../blocks/ServicesCollectionBlock/config'
import { ServiceSummaryBlock } from '../../blocks/ServiceSummaryBlock/config'
import { LogoStripBlock } from '../../blocks/LogoStripBlock/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { FormBlock } from '../../blocks/Form/config'
import { CalendlyBlock } from '../../blocks/CalendlyBlock/config'
import { GalleryBlock } from '../../blocks/GalleryBlock/config'
import { ImageBlock } from '../../blocks/ImageBlock/config'
import { SplitBlock } from '../../blocks/SplitBlock/config'
import { CarouselBlock } from '../../blocks/CarouselBlock/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from '../Pages/hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Services: CollectionConfig<'services'> = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    excerpt: true,
    icon: true,
    benefits: true,
    featuredMetrics: true,
    category: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'category', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug as string,
          collection: 'services',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'services',
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
      name: 'category',
      type: 'select',
      options: [
        { label: 'Sales', value: 'sales' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Software', value: 'software' },
      ],
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description for service cards/listings',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Icon identifier or emoji',
      },
    },
    {
      name: 'featuredMetrics',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      admin: {
        description: 'Optional benefit bullet points for service cards',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'content',
              type: 'blocks',
              blocks: [
                HeroBlock,
                StatementBlock,
                StatsRowBlock,
                TestimonialBlock,
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
              hasGenerateFn: true,
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
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

