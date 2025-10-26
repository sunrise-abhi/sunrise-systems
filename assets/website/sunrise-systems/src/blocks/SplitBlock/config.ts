import type { Block } from 'payload'

export const SplitBlock: Block = {
  slug: 'splitBlock',
  interfaceName: 'SplitBlock',
  labels: {
    singular: 'Split Block',
    plural: 'Split Blocks',
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
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subhead',
      type: 'textarea',
    },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'left',
      required: true,
      options: [
        { label: 'Image Left', value: 'left' },
        { label: 'Image Right', value: 'right' },
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

