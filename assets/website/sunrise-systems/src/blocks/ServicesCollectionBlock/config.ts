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



