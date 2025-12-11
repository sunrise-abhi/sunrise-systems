import type { GlobalConfig } from 'payload'

import { revalidateScarcity } from './hooks/revalidateScarcity'

export const Scarcity: GlobalConfig = {
  slug: 'scarcity',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enable Scarcity Display',
      defaultValue: false,
      admin: {
        description: 'Toggle to show/hide scarcity tags across the site',
      },
    },
    {
      name: 'totalSlots',
      type: 'number',
      label: 'Total Slots',
      required: true,
      defaultValue: 10,
      admin: {
        description: 'Total number of available slots',
      },
    },
    {
      name: 'remainingSlots',
      type: 'number',
      label: 'Remaining Slots',
      required: true,
      defaultValue: 3,
      admin: {
        description: 'Current number of slots remaining',
      },
    },
    {
      name: 'bannerText',
      type: 'text',
      label: 'Banner Text',
      required: false,
      admin: {
        description: 'Text for the banner above header. Use {remaining} and {total} as placeholders. Leave empty for default.',
        placeholder: '{remaining} of {total} slots remaining',
      },
    },
    {
      name: 'ctaTagText',
      type: 'text',
      label: 'CTA Tag Text',
      required: false,
      admin: {
        description: 'Text for CTA section tags. Use {remaining} and {total} as placeholders. Leave empty for default.',
        placeholder: '{remaining} of {total} slots remaining',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateScarcity],
  },
}

