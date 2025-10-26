import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'galleryBlock',
  interfaceName: 'GalleryBlock',
  labels: {
    singular: 'Gallery Block',
    plural: 'Gallery Blocks',
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      maxRows: 4,
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
        { label: 'Full Height', value: 'full' },
        { label: 'Half Height', value: 'half' },
      ],
      admin: {
        description: '4 images only works with full height (creates 2x2 grid)',
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
  ],
}

