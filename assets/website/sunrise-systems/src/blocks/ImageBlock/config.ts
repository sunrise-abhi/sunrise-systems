import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  interfaceName: 'ImageBlock',
  labels: {
    singular: 'Image Block',
    plural: 'Image Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      admin: {
        description: 'Optional label displayed below image in monospace style',
      },
    },
    {
      name: 'labelAlignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        condition: (data) => !!data?.label,
      },
    },
    {
      name: 'position',
      type: 'select',
      defaultValue: '6-left',
      required: true,
      options: [
        { label: '4 Columns - Left', value: '4-left' },
        { label: '5 Columns - Left', value: '5-left' },
        { label: '6 Columns - Left', value: '6-left' },
        { label: '6 Columns - Right', value: '6-right' },
        { label: '5 Columns - Right', value: '5-right' },
        { label: '4 Columns - Right', value: '4-right' },
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

