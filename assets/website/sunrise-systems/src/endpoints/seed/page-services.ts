import type { Page } from '@/payload-types'

export const servicesPageSeed = (serviceIds: { sales: string; marketing: string; software: string }): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'Services',
  slug: 'services',
  hero: {
    type: 'none',
  },
  layout: [
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Build a pipeline you control',
      subheadline:
        'We deliver the three systems commercial contractors need to scale: sales that generates opportunities, marketing that positions you for them, and software that makes it all systematic.',
    },
    {
      blockType: 'statementBlock',
      headline: 'Growth requires all three working together',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Most contractors have one, maybe two of these. But sustainable growth requires all three as a unified system.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Sales without positioning gets you bid invites on projects you\'ll lose to better-branded competitors.',
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Marketing without sales builds your reputation but doesn\'t fill your pipeline with opportunities right now.',
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Systems without strategy just automates the wrong process faster.',
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We build all three as an integrated engine—each component amplifying the others.',
                },
              ],
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    {
      blockType: 'servicesCollectionBlock',
      headline: 'The three systems you need to scale',
      subhead: 'Sales that generates opportunities, marketing that positions you for them, and software that makes it all systematic.',
      services: [
        { service: serviceIds.sales },
        { service: serviceIds.marketing },
        { service: serviceIds.software },
      ],
      columns: '3',
    },
    {
      blockType: 'statementBlock',
      headline: 'Here\'s how it works together',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'Example Scenario:',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Our sales team identifies an active $5MM commercial project in your market and reaches out to the developer. Your brand positioning—professional website, active LinkedIn presence, clear differentiation—makes you stand out from the 47 other contractors they could choose.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'The developer adds you to their bid list. Our CRM automatically logs this, triggers follow-up sequences, and alerts your estimating team. The opportunity moves through your pipeline with full visibility.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'You win the bid. The system captures the relationship, tracks project milestones, and schedules long-term follow-ups to turn this into repeat business.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Six months later, the same developer has another project. You\'re already in their network, already proven, already top-of-mind. You get the call before it goes to public bid.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'That\'s engineered growth.',
                  bold: true,
                },
              ],
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    {
      blockType: 'featureGridBlock',
      headline: 'Who This Is For',
      columns: '2',
      features: [
        {
          title: 'Commercial contractors and design-build firms',
          description: 'Who want predictable project flow beyond referrals',
          icon: '🏗️',
        },
        {
          title: 'Specialty trades and subcontractors',
          description: 'Who need access to GCs and developers on active projects',
          icon: '⚡',
        },
        {
          title: 'Construction suppliers and distributors',
          description: 'Looking to generate consistent bid opportunities with electrical contractors, GCs, and design firms',
          icon: '📦',
        },
      ],
    },
    {
      blockType: 'content',
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'If you\'re doing $2MM–$100MM in revenue and want to scale without destroying your margins or taking every project that comes along, this system is built for you.',
                },
              ],
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    {
      blockType: 'cta',
      headline: 'Ready to build your growth system?',
      subhead: "Book a discovery call. We'll assess your current pipeline, show you exactly where opportunities are being missed, and build a custom plan for your market.",
      links: [
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Schedule a call',
          },
        },
      ],
    },
  ],
  publishedAt: new Date('2025-01-01').toISOString(),
  _status: 'published',
})

