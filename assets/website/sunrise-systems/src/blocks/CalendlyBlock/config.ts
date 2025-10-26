import type { Block } from 'payload'

export const CalendlyBlock: Block = {
  slug: 'calendlyBlock',
  interfaceName: 'CalendlyBlock',
  labels: {
    singular: 'Calendly Block',
    plural: 'Calendly Blocks',
  },
  fields: [
    {
      name: 'calendlyUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Full Calendly URL (e.g., https://calendly.com/username/meeting)',
      },
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
      name: 'minHeight',
      type: 'number',
      defaultValue: 700,
      admin: {
        description: 'Minimum height in pixels',
      },
    },
  ],
}




