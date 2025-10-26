import type { Block } from 'payload'

export const CaseStudySummaryBlock: Block = {
  slug: 'caseStudySummaryBlock',
  interfaceName: 'CaseStudySummaryBlock',
  labels: {
    singular: 'Case Study Summary',
    plural: 'Case Study Summaries',
  },
  fields: [
    {
      name: 'caseStudy',
      type: 'relationship',
      relationTo: 'case-studies',
      required: true,
    },
    {
      name: 'displayMetrics',
      type: 'array',
      admin: {
        description: 'Select which metrics to highlight',
      },
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

