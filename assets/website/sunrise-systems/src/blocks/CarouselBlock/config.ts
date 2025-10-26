import type { Block } from 'payload'

export const CarouselBlock: Block = {
  slug: 'carouselBlock',
  interfaceName: 'CarouselBlock',
  labels: {
    singular: 'Carousel Block',
    plural: 'Carousel Blocks',
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      minRows: 2,
      required: true,
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
            condition: (data, siblingData) => !!siblingData?.label,
          },
        },
      ],
    },
    {
      name: 'height',
      type: 'select',
      defaultValue: 'full',
      required: true,
      options: [
        { label: 'Full Height (Square)', value: 'full' },
        { label: 'Half Height', value: 'half' },
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

