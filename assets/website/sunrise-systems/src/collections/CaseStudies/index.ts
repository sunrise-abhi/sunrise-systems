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
import { CaseStudyPreviewBlock } from '../../blocks/CaseStudyPreviewBlock/config'
import { CaseStudyCarouselBlock } from '../../blocks/CaseStudyCarouselBlock/config'
import { CaseStudySummaryBlock } from '../../blocks/CaseStudySummaryBlock/config'
import { LogoStripBlock } from '../../blocks/LogoStripBlock/config'
import { ServiceSummaryBlock } from '../../blocks/ServiceSummaryBlock/config'
import { ServicesCollectionBlock } from '../../blocks/ServicesCollectionBlock/config'
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

export const CaseStudies: CollectionConfig<'case-studies'> = {
  slug: 'case-studies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    clientName: true,
    headline: true,
    subheadline: true,
    slug: true,
    keyMetrics: true,
    testimonial: true,
    services: true,
  },
  admin: {
    defaultColumns: ['clientName', 'industry', 'campaignDuration', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug as string,
          collection: 'case-studies',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'case-studies',
        req,
      }),
    useAsTitle: 'clientName',
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      admin: {
        description: 'Primary headline for case study previews',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      admin: {
        description: 'Subheadline displayed under the headline in case study previews',
      },
    },
    {
      name: 'industry',
      type: 'select',
      options: [
        { label: 'Design-Build GC', value: 'design-build-gc' },
        { label: 'Specialty Contractor', value: 'specialty-contractor' },
        { label: 'Distributor', value: 'distributor' },
      ],
      required: true,
    },
    {
      name: 'campaignDuration',
      type: 'text',
      required: true,
    },
    {
      name: 'investment',
      type: 'number',
      required: true,
    },
    {
      name: 'keyMetrics',
      type: 'group',
      fields: [
        { name: 'pipelineValue', type: 'number', required: true },
        { name: 'closedRevenue', type: 'number' },
        { name: 'pipelineROI', type: 'number' },
        { name: 'realizedROI', type: 'number' },
        { name: 'relationships', type: 'number' },
        { name: 'bidRequests', type: 'number' },
        { name: 'bidLists', type: 'number' },
        { name: 'repeatClients', type: 'number' },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'authorName', type: 'text', required: true },
        { name: 'authorTitle', type: 'text', required: true },
        { name: 'authorImage', type: 'upload', relationTo: 'media' },
        { name: 'logo', type: 'upload', relationTo: 'media', admin: { description: 'Client logo' } },
      ],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: {
        description: 'Services associated with this case study',
      },
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

