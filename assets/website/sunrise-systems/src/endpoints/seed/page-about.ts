import type { Page } from '@/payload-types'

export const aboutPageSeed: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'About',
  slug: 'about',
  hero: {
    type: 'none',
  },
  layout: [
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Business development built for commercial construction',
      subheadline:
        "We're the growth partner for contractors, design-build firms, and specialty trades who refuse to compete on price alone.",
    },
    {
      blockType: 'statementBlock',
      headline: 'Building for 2030',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "Most construction marketing agencies are stuck in 2010. Generic websites, sporadic social posts, hype videos that don't generate projects.",
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "We started Sunrise Systems in 2024 to build something different: a growth partner that combines world-class sales, strategic marketing, and custom software into one integrated system—built specifically for commercial construction.",
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "Founded by three partners with backgrounds in software development, agency operations, and enterprise systems, we bootstrapped from $3K to $29K in monthly revenue in eight months. We did it by proving results first, then scaling what works.",
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We don\'t do retainer contracts where you pay for "exposure" and "brand awareness." We deliver qualified bid invites, measurable pipeline growth, and technology that gives you operational visibility.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "Every tool we use, we built ourselves. Every process we implement for clients, we've tested internally. Every metric we track, we can prove.",
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "That's the difference between a marketing vendor and a growth partner.",
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
      blockType: 'statementBlock',
      headline: 'Growth, engineered',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We treat business development the way contractors treat construction: systematically, measurably, professionally.',
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
      headline: null,
      columns: '3',
      features: [
        {
          title: 'Clarity',
          description:
            'We simplify complexity so our clients can make smart decisions and move forward with confidence.',
          icon: '💡',
        },
        {
          title: 'Ownership',
          description:
            'We treat our clients\' businesses like our own, bringing care, honesty, and accountability to everything we do.',
          icon: '🤝',
        },
        {
          title: 'Results',
          description:
            'We build systems and strategies that don\'t just look good—they drive measurable, lasting growth.',
          icon: '📈',
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
                  text: 'Word of mouth and referrals built your business. But they won\'t scale it. Sustainable growth requires systematic sales, strategic positioning, and operational technology working together.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'That\'s what we engineer.',
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
      blockType: 'statsRowBlock',
      stats: [
        { value: '$29MM+', label: 'total pipeline generated' },
        { value: '$650K+', label: 'in closed revenue' },
        { value: '191+', label: 'decision-maker relationships' },
        { value: '865:1', label: 'average ROI' },
      ],
    },
    {
      blockType: 'statementBlock',
      headline: 'The people behind Sunrise Systems',
      content: null,
    },
    {
      blockType: 'featureGridBlock',
      headline: null,
      columns: '3',
      features: [
        {
          title: 'Abhi Das',
          subtitle: 'Managing Partner & Creative Director',
          description:
            "The strategist behind Sunrise's brand and creative direction. Abhi turns complex contractor stories into clean, conversion-driven messaging that wins attention and trust.\n\nWith a background in computer science, design, and campaign architecture, he bridges the gap between strategy and execution—shaping how modern construction companies market, sell, and scale.",
          icon: '👤',
        },
        {
          title: 'Jason Trehan',
          subtitle: 'Managing Partner & Client Success',
          description:
            "Jason lives at the intersection of sales and relationships. He built Sunrise's client success engine, including the outreach systems and sales frameworks that turn cold prospects into predictable revenue.\n\nPreviously at Paycom, Jason brings enterprise sales experience combined with relentless drive for deal-making. He ensures every client partnership translates into measurable wins.",
          icon: '👤',
        },
        {
          title: 'Naram Alhasani',
          subtitle: 'Partner – Software Development & Technical Operations',
          description:
            "The architect behind Sunrise's tech infrastructure. Naram leads technical operations, integrating CRMs, databases, and automation tools that make outreach and reporting seamless.\n\nWith enterprise systems experience at CGI Federal, his code and data fluency transform messy manual processes into streamlined systems contractors can actually use—simple, smart, and scalable.",
          icon: '👤',
        },
      ],
    },
    {
      blockType: 'statementBlock',
      headline: 'How we work with clients',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "We don't believe in long sales cycles, complicated proposals, or contracts that lock you in for a year before proving value.",
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We start with a discovery call. Understand your current pipeline, identify opportunities in your market, and show you exactly how we can help you grow.',
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We build a custom strategy. Combining sales outreach, marketing positioning, and technology solutions specific to your trade, region, and growth goals.',
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We deliver results immediately. Our team gets to work building relationships with local GCs and developers, positioning your brand, and setting up systems that deliver consistent opportunities.',
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "We track everything. Every bid invite, every relationship, every dollar of pipeline value. You'll always know exactly what's working and what ROI you're getting.",
                  bold: true,
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "We scale what works. When something's generating results, we do more of it. When something's not, we adjust. Growth should be systematic and measurable—not guesswork.",
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
      blockType: 'statementBlock',
      headline: 'We only work with commercial construction companies',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Commercial construction is different from residential. The sales cycles are longer. The relationships matter more. The decision-makers are sophisticated.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "You can't use the same marketing tactics that work for home improvement contractors. GCs and developers don't respond to Facebook ads and Google Local Services. They respond to credibility, relationships, and demonstrated expertise.",
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "That's why we specialize exclusively in commercial construction. We understand your market, we speak your language, and we know what actually generates opportunities in this industry.",
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
      headline: 'Our clients include:',
      columns: '2',
      features: [
        {
          title: 'Design-build general contractors',
          icon: '🏗️',
        },
        {
          title: 'Specialty trade contractors (electrical, drywall, HVAC, plumbing)',
          icon: '⚡',
        },
        {
          title: 'Construction suppliers and distributors',
          icon: '📦',
        },
        {
          title: 'Commercial contractors expanding into new markets',
          icon: '🌎',
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
                  text: "If you're in commercial construction and you're serious about growth, we're built for you.",
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
      blockType: 'statementBlock',
      headline: 'What we\'ve delivered for clients',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• $29MM+ in total pipeline generated across all clients',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• $650K+ in closed revenue attributed to our work',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• 191+ decision-maker relationships established',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• 28+ direct bid requests delivered',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• 50+ repeat client relationships secured',
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
                  text: 'Average pipeline ROI: 865:1',
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
                  text: "These aren't projections. These are results from actual commercial contractors, subcontractors, and suppliers who invested in systematic growth.",
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
      headline: 'Ready to scale your business?',
      subhead: "We're here to help you grow. One quick meeting is all it takes to get started.",
      links: [
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Schedule a discovery call',
          },
        },
      ],
    },
  ],
  publishedAt: new Date('2025-01-01').toISOString(),
  _status: 'published',
}

