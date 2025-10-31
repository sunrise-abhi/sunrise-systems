import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
