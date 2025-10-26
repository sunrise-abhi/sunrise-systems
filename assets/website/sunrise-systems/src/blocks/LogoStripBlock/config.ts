import type { Block } from 'payload'

export const LogoStripBlock: Block = {
  slug: 'logoStripBlock',
  interfaceName: 'LogoStripBlock',
  labels: {
    singular: 'Logo Strip',
    plural: 'Logo Strips',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'logos',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          required: true,
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

