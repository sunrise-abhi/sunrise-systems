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
      type: 'textarea',
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
      name: 'blockId',
      type: 'text',
      admin: {
        description: 'Optional ID for anchor linking (e.g., "contact", "services"). Used for smooth scroll navigation.',
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

