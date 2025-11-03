import type { Page } from '@/payload-types'

export const pageDBIA2025Presentation = (): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'Design Build Expo 2025 - Sunrise Systems',
  slug: 'design-build-expo-2025',
  hero: {
    type: 'none',
  },
  layout: [
    // Slide 1: TL;DW / Quick Overview
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Quick version if you\'re short on time:',
      subheadline:
        'We\'re Sunrise Systems, and we help commercial contractors and design-build firms achieve predictable growth by building a consistent pipeline of projects. We do that with a combination of expert sales, marketing, and software teams, working together as one unit to implement our proven growth strategy for your business. For Delta, our teams turned a $10,675 investment into a $15M pipeline of ideal projects in just 8 months. For America 9, a design-build firm, $10,200 generated $6.5M in pipeline in just 90 days. We\'ll be at the conference with five team members, and we\'d love to meet you on the floor. Now, here\'s the longer version…',
    },

    // Slide 2: Who We Are - Introduction
    {
      blockType: 'statementBlock',
      headline: 'We\'re Sunrise Systems',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We\'re sponsoring the VDC Leadership Exchange this year because we work exclusively with commercial contractors and design-build firms. That\'s all we do. Our whole business is built around helping firms like yours grow in a way that\'s predictable and sustainable.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      alignment: 'center',
      backgroundColor: 'offwhite',
      paddingTop: 'xl',
      paddingBottom: 'xl',
    },

    // Slide 3: Three Teams Working Together
    {
      blockType: 'statementBlock',
      headline: 'Three teams, one mission',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We\'re not a traditional agency, because we have three teams—sales, marketing, and software—and they all work together on one thing: helping you fill your pipeline with the right projects.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      alignment: 'center',
      backgroundColor: 'white',
      paddingTop: 'xl',
      paddingBottom: 'xl',
    },

    // Slide 4: The Challenge - Uncertainty
    {
      blockType: 'statementBlock',
      headline: 'Growth in commercial construction is difficult',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'The reason we have three teams is because construction growth in commercial construction is difficult, and it\'s only getting harder by the day. Markets and relationships shift. Projects stall. The work you thought was coming doesn\'t. And meanwhile, you\'re trying to scale without knowing what next quarter looks like.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'That uncertainty makes it tough to plan, tough to hire, tough to invest in the business.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      alignment: 'center',
      backgroundColor: 'offwhite',
      paddingTop: 'xl',
      paddingBottom: 'xl',
    },

    // Slide 5: Delta Results - The Numbers
    {
      blockType: 'statsRowBlock',
      stats: [
        { value: '$10,675', label: 'Investment over 8 months' },
        { value: '$550K', label: 'Closed revenue' },
        { value: '$15M', label: 'Active pipeline' },
        { value: '1,457:1', label: 'Pipeline ROI' },
      ],
      backgroundColor: 'white',
      paddingTop: 'xl',
      paddingBottom: 'md',
    },

    // Slide 6: Delta Story - The Context
    {
      blockType: 'statementBlock',
      headline: 'Delta: 50-year-old design-build company',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Delta\'s a 50-year old design-build company that invested $10,675 over 8 months working with us. In that time, they closed $550K in revenue—already 10 times their investment—and built a $15M pipeline of active opportunities.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'That\'s a 1,457-to-1 return on investment. And these are qualified projects that they actually want and are suited for, not just anything that came by.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      alignment: 'center',
      backgroundColor: 'white',
      paddingTop: 'md',
      paddingBottom: 'xl',
    },

    // Slide 7: America 9 Results
    {
      blockType: 'statementBlock',
      headline: 'America 9: Another design-build firm',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'America 9 is another design-build firm, and they invested $10,200 over 90 days and generated $6.5M in pipeline. That\'s a 637-to-1 multiple in three months.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Same approach, generating consistent results for another design build firm.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      alignment: 'center',
      backgroundColor: 'offwhite',
      paddingTop: 'xl',
      paddingBottom: 'xl',
    },

    // Slide 8: Growth Architecture - How We Do It
    {
      blockType: 'statementBlock',
      headline: 'How do we do it? Growth Architecture.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'It\'s the strategy we build for each client across three teams.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      alignment: 'center',
      backgroundColor: 'white',
      paddingTop: 'xl',
      paddingBottom: 'lg',
    },

    // Slide 9: The Three Teams
    {
      blockType: 'featureGridBlock',
      headline: 'Sales, Marketing, and Software working as one',
      subhead:
        'It\'s not three separate services—it\'s one integrated strategy designed to make growth predictable.',
      columns: '3',
      features: [
        {
          title: 'Sales',
          description:
            'Our sales team does systematic outreach to developers, architects, and owners on active projects in your market.',
        },
        {
          title: 'Marketing',
          description:
            'Our marketing team upgrades your digital presence and builds content systems so the right people notice you.',
        },
        {
          title: 'Software',
          description:
            'Our software team builds custom tools that give you an operational edge.',
        },
      ],
      backgroundColor: 'white',
      paddingTop: 'md',
      paddingBottom: 'xl',
    },

    // Slide 10: USP + CTA - Meet Us
    {
      blockType: 'cta',
      headline: 'We\'re the only growth partner with all three teams',
      subhead:
        'Five of us will be at the conference. If you\'re curious, grab us on the floor or book a quick 15-minute strategy session. We\'ll walk you through what a custom Growth Architecture strategy would look like for your firm. If it makes sense, we can keep talking after the conference. If not, no worries. Either way, we\'d love to meet you.',
      links: [
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Book a Strategy Session',
            appearance: 'default',
          },
        },
      ],
      backgroundColor: 'offwhite',
    },
  ],
  publishedAt: new Date('2025-01-15').toISOString(),
  _status: 'published',
  meta: {
    title: 'Sunrise Systems at Design Build Expo 2025',
    description:
      'Learn how Sunrise Systems helps design-build firms achieve predictable growth through integrated sales, marketing, and software teams. Delta: $10,675 → $15M pipeline. America 9: $10,200 → $6.5M pipeline.',
  },
})
