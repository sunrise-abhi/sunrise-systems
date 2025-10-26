import type { Block } from 'payload'

export const ServicesCollectionBlock: Block = {
  slug: 'servicesCollectionBlock',
  interfaceName: 'ServicesCollectionBlock',
  labels: {
    singular: 'Services Collection',
    plural: 'Services Collections',
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
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'service',
          type: 'relationship',
          relationTo: 'services',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Optional image for this service card',
          },
        },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
      defaultValue: '3',
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



