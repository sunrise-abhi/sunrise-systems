import type { Block } from 'payload'

export const CaseStudyPreviewBlock: Block = {
  slug: 'caseStudyPreviewBlock',
  interfaceName: 'CaseStudyPreviewBlock',
  labels: {
    singular: 'Case Study Preview',
    plural: 'Case Study Previews',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      admin: {
        description: 'Section headline',
      },
    },
    {
      name: 'subhead',
      type: 'textarea',
      admin: {
        description: 'Section subhead',
      },
    },
    {
      name: 'caseStudies',
      type: 'array',
      label: 'Case Studies',
      fields: [
        {
          name: 'caseStudy',
          type: 'relationship',
          relationTo: 'case-studies',
          required: true,
        },
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'metricsLeft',
          options: [
            { label: 'Metrics Left, Testimonial Right', value: 'metricsLeft' },
            { label: 'Testimonial Left, Metrics Right', value: 'metricsRight' },
          ],
          admin: {
            description: 'Choose which side to display the metrics vs testimonial',
          },
        },
        {
          name: 'displayMetrics',
          type: 'array',
          label: 'Display Metrics',
          maxRows: 4,
          admin: {
            description: 'Select up to 4 metrics to display for this case study',
          },
          fields: [
            {
              name: 'metricKey',
              type: 'select',
              required: true,
              options: [
                { label: 'Pipeline Value', value: 'pipelineValue' },
                { label: 'Closed Revenue', value: 'closedRevenue' },
                { label: 'Pipeline ROI', value: 'pipelineROI' },
                { label: 'Realized ROI', value: 'realizedROI' },
                { label: 'Relationships', value: 'relationships' },
                { label: 'Bid Requests', value: 'bidRequests' },
                { label: 'Bid Lists', value: 'bidLists' },
                { label: 'Repeat Clients', value: 'repeatClients' },
              ],
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: {
                description: 'Custom label for this metric (e.g., "Pipeline Generated")',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Off-white', value: 'offwhite' },
      ],
    },
    {
      name: 'paddingTop',
      type: 'select',
      defaultValue: 'md',
      options: [
        { label: 'None (0px)', value: 'none' },
        { label: 'XS (32px)', value: 'xs' },
        { label: 'SM (48px)', value: 'sm' },
        { label: 'MD (64px)', value: 'md' },
        { label: 'LG (96px)', value: 'lg' },
        { label: 'XL (128px)', value: 'xl' },
        { label: 'XXL (160px)', value: 'xxl' },
      ],
      admin: {
        description: 'Top padding of the section',
      },
    },
    {
      name: 'paddingBottom',
      type: 'select',
      defaultValue: 'md',
      options: [
        { label: 'None (0px)', value: 'none' },
        { label: 'XS (32px)', value: 'xs' },
        { label: 'SM (48px)', value: 'sm' },
        { label: 'MD (64px)', value: 'md' },
        { label: 'LG (96px)', value: 'lg' },
        { label: 'XL (128px)', value: 'xl' },
        { label: 'XXL (160px)', value: 'xxl' },
      ],
      admin: {
        description: 'Bottom padding of the section',
      },
    },
    {
      name: 'blockId',
      type: 'text',
      admin: {
        description: 'Optional ID for anchor linking (e.g., "contact", "services"). Used for smooth scroll navigation.',
      },
    },
    {
      name: 'hideOnMobile',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Hide this block on mobile devices',
      },
    },
  ],
}

