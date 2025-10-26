import type { Block } from 'payload'

export const ServiceSummaryBlock: Block = {
  slug: 'serviceSummaryBlock',
  interfaceName: 'ServiceSummaryBlock',
  labels: {
    singular: 'Service Summary',
    plural: 'Service Summaries',
  },
  fields: [
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      required: true,
    },
    {
      name: 'displayStyle',
      type: 'select',
      options: [
        { label: 'Card', value: 'card' },
        { label: 'Inline', value: 'inline' },
        { label: 'Detailed', value: 'detailed' },
      ],
      defaultValue: 'card',
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
  ],
}

