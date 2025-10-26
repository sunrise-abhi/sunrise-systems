import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      required: true,
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Image Right', value: 'imageRight' },
        { label: 'Background Image', value: 'backgroundImage' },
      ],
    },
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Small text above headline (optional)',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'textarea',
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'proofBadge',
      type: 'text',
      admin: {
        description: 'e.g., "0% commission on projects you win"',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, blockData) => blockData?.variant === 'imageRight',
        description: 'Image displayed on the right side',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, blockData) => blockData?.variant === 'backgroundImage',
        description: 'Full-width background image',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100,
      admin: {
        condition: (_, blockData) => blockData?.variant === 'backgroundImage',
        description: 'Dark overlay opacity (0-100)',
      },
    },
    {
      name: 'objectPosition',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        condition: (_, blockData) => blockData?.variant === 'backgroundImage',
        description: 'Background image position',
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
      admin: {
        condition: (_, blockData) => blockData?.variant !== 'backgroundImage',
      },
    },
  ],
}

