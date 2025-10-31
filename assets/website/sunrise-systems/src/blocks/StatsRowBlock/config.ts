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
    {
      name: 'paddingTop',
      type: 'select',
      defaultValue: 'md',
      options: [
        { label: 'None (0px)', value: 'none' },
        { label: 'XS (32px)', value: 'xs' },
        { label: 'SM (48px)', value: 'sm' },
        { label: 'MD (64px)', value: 'md' },
        { label: 'LG (96px)', value: 'lg' },
        { label: 'XL (128px)', value: 'xl' },
        { label: 'XXL (160px)', value: 'xxl' },
      ],
      admin: {
        description: 'Top padding of the section',
      },
    },
    {
      name: 'paddingBottom',
      type: 'select',
      defaultValue: 'md',
      options: [
        { label: 'None (0px)', value: 'none' },
        { label: 'XS (32px)', value: 'xs' },
        { label: 'SM (48px)', value: 'sm' },
        { label: 'MD (64px)', value: 'md' },
        { label: 'LG (96px)', value: 'lg' },
        { label: 'XL (128px)', value: 'xl' },
        { label: 'XXL (160px)', value: 'xxl' },
      ],
      admin: {
        description: 'Bottom padding of the section',
      },
    },
    {
      name: 'hideOnMobile',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Hide this block on mobile devices',
      },
    },
  ],
}

