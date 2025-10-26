import type { Block } from 'payload'

export const ProcessBlock: Block = {
  slug: 'processBlock',
  interfaceName: 'ProcessBlock',
  labels: {
    singular: 'Process Block',
    plural: 'Process Blocks',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'subhead',
      type: 'textarea',
      admin: {
        description: 'Optional subheadline below the headline',
      },
    },
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'text',
          admin: {
            description: 'e.g., "1" or "01"',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
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

