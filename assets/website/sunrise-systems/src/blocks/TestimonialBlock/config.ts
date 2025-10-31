import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonialBlock',
  interfaceName: 'TestimonialBlock',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'authorTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'companyName',
      type: 'text',
    },
    {
      name: 'authorImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'position',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
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

