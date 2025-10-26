import type { Page } from '@/payload-types'

export const dbiaPageSeed = (caseStudyIds: { delta: string }): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'DBIA 2025',
  slug: 'dbia-2025',
  hero: {
    type: 'none',
  },
  layout: [
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Visiting from DBIA 2025?',
      subheadline:
        'We help design-build firms and commercial contractors generate qualified bid invites on active projects in their market—without competing on price alone.',
    },
    {
      blockType: 'caseStudyPreviewBlock',
      headline: 'Results for design-build contractors just like you',
      subhead: null,
      caseStudies: [
        {
          caseStudy: caseStudyIds.delta,
          layout: 'metricsLeft',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Total Pipeline Generated',
            },
            {
              metricKey: 'relationships',
              label: 'Decision-Maker Relationships',
            },
          ],
        },
      ],
    },
    {
      blockType: 'statementBlock',
      headline: 'Multi-stakeholder targeting built for design-build',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Design-build firms don\'t just need to connect with GCs—you need access to the entire project ecosystem.',
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
                  text: 'Our systematic approach targets all the decision-makers who matter:',
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
      columns: '2',
      features: [
        {
          title: 'Developers',
          description:
            'Direct project owners with budget authority. Early access means positioning before teams are selected.',
          icon: '🏢',
        },
        {
          title: 'Architects',
          description:
            'Influencers who recommend design-build firms for their projects. Upstream influence over who gets invited.',
          icon: '📐',
        },
        {
          title: 'Property Managers',
          description:
            'Recurring revenue source for maintenance, renovation, and tenant improvement work.',
          icon: '🏗️',
        },
        {
          title: 'Business Owners',
          description:
            'Decision-makers on commercial renovation, fire rebuild, and build-out projects.',
          icon: '💼',
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
                  text: 'This multi-stakeholder approach creates multiple entry points into projects and turns one-time bids into repeat relationships.',
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
      blockType: 'processBlock',
      headline: 'Systematic business development for design-build firms',
      steps: [
        {
          number: '1',
          title: 'Project intelligence',
          description:
            'We use ConstructConnect and Dodge to identify active projects in your market that match your capabilities—before bid lists close.',
        },
        {
          number: '2',
          title: 'Multi-stakeholder outreach',
          description:
            'We reach developers, architects, property managers, and business owners with personalized, researched outreach. Not spray-and-pray cold email.',
        },
        {
          number: '3',
          title: 'Pre-positioning',
          description:
            'We position you as the preferred choice early in the project cycle—at conception stage or before final teams are selected.',
        },
        {
          number: '4',
          title: 'Relationship building',
          description:
            'Every conversation, follow-up, and result is tracked in your CRM. Systematic follow-up turns initial contacts into long-term partnerships.',
        },
        {
          number: '5',
          title: 'Qualified opportunities',
          description:
            'Bid invites flow into your pipeline. You stay focused on design and building—we handle the relationship development.',
        },
      ],
    },
    {
      blockType: 'featureGridBlock',
      headline: 'What design-build firms achieve with systematic BD',
      columns: '3',
      features: [
        {
          title: 'Immediate pipeline growth',
          description: 'Qualified bid opportunities start flowing within 30-60 days of campaign launch',
          icon: '📈',
        },
        {
          title: 'Access to bigger projects',
          description:
            'Bid list additions with developers and property managers open doors to recurring opportunities',
          icon: '🚪',
        },
        {
          title: 'Higher conversion rates',
          description:
            'Project-based targeting delivers 3-8X higher engagement than general cold outreach',
          icon: '🎯',
        },
        {
          title: 'Long-term relationships',
          description:
            '25-50% of conversations turn into repeat client relationships beyond the initial project',
          icon: '🤝',
        },
        {
          title: 'Measurable ROI',
          description:
            'Track every dollar invested and every opportunity generated. Growth should be systematic and measurable—not guesswork.',
          icon: '💰',
        },
      ],
    },
    {
      blockType: 'statementBlock',
      headline: 'Peak Performance: September surge',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '34 relationships and 11 bid requests in 30 days',
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
                  text: 'During September\'s coordinated outreach campaign for Delta, multi-stakeholder targeting produced exceptional results:',
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
                  text: 'Dodge Owners Campaign: 195 contacts → 25 relationships (12.82% conversion), 9 direct bid/quote requests',
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
                  text: 'ConstructConnect Architects Campaign: 15 contacts → 2 relationships (13.33% conversion)',
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
                  text: 'Combined September Performance: 34 total decision-maker relationships, 11 direct bid/quote requests in a single 30-day period',
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
                  text: 'This demonstrates the explosive potential when you target multiple stakeholders simultaneously during active project windows.',
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
      headline: 'Built for design-build firms ready to scale',
      columns: '2',
      features: [
        {
          title: 'Design-build general contractors',
          description: 'Looking for predictable project flow beyond referrals',
          icon: '🏗️',
        },
        {
          title: 'Commercial contractors',
          description: 'Expanding into new markets or project types',
          icon: '📍',
        },
        {
          title: 'Regional firms',
          description: 'Wanting to access larger developers and property management companies',
          icon: '🌎',
        },
        {
          title: 'Established contractors',
          description: '$2MM-$100MM revenue ready to systematize business development',
          icon: '💼',
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
                  text: 'If you\'re competing on expertise and delivery quality (not just price), and you want consistent access to decision-makers on active projects, this system is built for you.',
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
      blockType: 'banner',
      type: 'success',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Exclusive offer for DBIA 2025 attendees',
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
              type: 'heading',
              tag: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'Complimentary Pipeline Audit (Value: $2,500)',
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
                  text: 'We\'ll analyze your current business development process and show you:',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• Where qualified opportunities are being missed in your market',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• Which stakeholders you should be targeting for your project types',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• Exactly how much pipeline potential exists in your geographic area',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• Specific recommendations for generating bid invites on active projects',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '• Custom strategy for your trade, region, and growth goals',
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
                  text: 'Limited to 15 DBIA attendees.',
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
      blockType: 'processBlock',
      headline: 'How to claim your complimentary pipeline audit',
      steps: [
        {
          number: '1',
          title: 'Schedule your call',
          description:
            'Book a 45-minute pipeline audit session with our construction business development team.',
        },
        {
          number: '2',
          title: 'Pre-call questionnaire',
          description:
            'We\'ll send you a brief questionnaire about your current pipeline, target markets, and growth goals (5 minutes to complete).',
        },
        {
          number: '3',
          title: 'Market analysis',
          description:
            'Our team researches active projects in your market and identifies opportunity gaps before the call.',
        },
        {
          number: '4',
          title: 'Pipeline audit session',
          description:
            'We\'ll walk you through exactly where opportunities exist, who you should be targeting, and how to generate consistent bid invites.',
        },
        {
          number: '5',
          title: 'Custom strategy',
          description:
            'You\'ll receive a written summary with specific recommendations for your market—whether you work with us or not.',
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
                  text: 'No pressure. No sales pitch. Just valuable insights into your market opportunity.',
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
      headline: 'Common questions from DBIA attendees',
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
                  text: 'How is this different from traditional BD or marketing agencies?',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We don\'t do brand awareness campaigns or "exposure." We deliver qualified bid invites on active projects using project intelligence databases (ConstructConnect, Dodge). You get measurable opportunities, not vanity metrics.',
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
              type: 'heading',
              tag: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'Will this work in my specific market?',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'If projects are tracked in ConstructConnect or Dodge, we can generate opportunities. We\'ve delivered results for contractors in California, Texas, Arizona, and other markets. Your pipeline audit will show exactly what\'s available in your area.',
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
              type: 'heading',
              tag: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'How long before we see results?',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Most clients receive their first bid requests within 30-60 days. Pipeline starts building immediately, but conversion to closed work depends on your sales cycle.',
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
              type: 'heading',
              tag: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'What\'s the investment?',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Typical engagements range from $1,500-$3,000/month depending on scope and market size. ROI averages 865:1 pipeline multiple across all clients.',
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
              type: 'heading',
              tag: 'h3',
              children: [
                {
                  type: 'text',
                  text: 'How do you integrate with our existing sales process?',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We feed opportunities into your CRM and existing workflow. Think of us as an extension of your team—we generate the relationships, you handle the estimating and closing.',
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
      blockType: 'testimonialBlock',
      quote:
        "Sunrise have been crushing it. We're super excited about the work they're doing, and I think we'll continue to work together for a long time.",
      authorName: 'Aaron Baggaley',
      authorTitle: 'CEO',
      companyName: 'Delta Family Companies',
    },
    {
      blockType: 'testimonialBlock',
      quote:
        "Sunrise really gets the feeling of who we are and what we're doing. They're really going to have a long-term impact with getting us those bigger, more profitable commercial projects.",
      authorName: 'Ernesto Fuentes',
      authorTitle: 'CEO',
      companyName: 'Kings Drywall LLC',
    },
    {
      blockType: 'testimonialBlock',
      quote:
        "Sunrise are very thorough in their methods—they're not going to leave any stone unturned so that they can craft the best possible message for your target customers. I can't say enough good things about these guys.",
      authorName: 'Joe Pineda',
      authorTitle: 'Principal',
      companyName: 'Breakthrough Lighting',
    },
    {
      blockType: 'cta',
      headline: 'Ready to see what\'s possible in your market?',
      subhead: 'Claim your complimentary pipeline audit—exclusively for DBIA 2025 attendees. Limited to 15 spots.',
      links: [
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Schedule my pipeline audit',
          },
        },
      ],
    },
  ],
  publishedAt: new Date('2025-01-01').toISOString(),
  _status: 'published',
})

