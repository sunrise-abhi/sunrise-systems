import type { Block } from 'payload'

export const StatsRowBlock: Block = {
  slug: 'statsRowBlock',
  interfaceName: 'StatsRowBlock',
  labels: {
    singular: 'Stats Row',
    plural: 'Stats Rows',
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "$29MM+" or "865:1"',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "total pipeline generated"',
          },
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

