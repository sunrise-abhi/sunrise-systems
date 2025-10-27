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
        { label: 'Case Study Hero', value: 'caseStudyHero' },
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
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, blockData) => blockData?.variant === 'caseStudyHero',
        description: 'Large full-width image displayed below headline and subhead',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: {
        condition: (_, blockData) => blockData?.variant === 'caseStudyHero',
        description: 'Services to display as tags in the hero',
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
    {
      name: 'paddingTop',
      type: 'select',
      defaultValue: 'none',
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
      defaultValue: 'lg',
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
  ],
}

