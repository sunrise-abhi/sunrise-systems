import type { Page } from '@/payload-types'

export const caseStudiesPageSeed = (caseStudyIds: { delta: string; breakthrough: string; kings: string }): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'Case Studies',
  slug: 'case-studies',
  hero: {
    type: 'none',
  },
  layout: [
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Results from commercial contractors just like you',
      subheadline:
        'Qualified bid invites, measurable pipeline growth, and real revenue—delivered for design-build GCs, specialty contractors, and construction suppliers.',
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
      blockType: 'caseStudyPreviewBlock',
      headline: 'Proven results across the construction industry',
      subhead: 'Design-build GCs, specialty contractors, and construction suppliers—see how systematic BD delivers measurable pipeline growth.',
      caseStudies: [
        {
          caseStudy: caseStudyIds.delta,
          layout: 'metricsLeft',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Pipeline Generated',
            },
            {
              metricKey: 'closedRevenue',
              label: 'Closed Revenue',
            },
          ],
        },
        {
          caseStudy: caseStudyIds.kings,
          layout: 'metricsRight',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Pipeline Generated',
            },
            {
              metricKey: 'pipelineROI',
              label: 'Pipeline ROI',
            },
          ],
        },
        {
          caseStudy: caseStudyIds.breakthrough,
          layout: 'metricsLeft',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Pipeline Generated',
            },
            {
              metricKey: 'pipelineROI',
              label: 'Pipeline ROI',
            },
          ],
        },
      ],
    },
    {
      blockType: 'statementBlock',
      headline: 'What you should notice about these numbers',
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
                  text: 'The ROI is measurable',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Every case study shows exact investment amount, pipeline generated, and ROI multiple. We track everything because growth should be measurable—not guesswork.',
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
                  text: 'The timeline is fast',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Delta generated $15.55MM in 8 months. Kings generated $3MM in 4 months. Breakthrough generated $10MM in 9 months. These aren\'t 2-year "brand building" campaigns—these are immediate results.',
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
                  text: 'The conversion rates are high',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Kings: 23.40% peak conversion. Delta: 12.82% on Dodge campaigns. EFI: 9.83% in peak month. Industry average for cold outreach is 1-3%. We\'re delivering 3-8X higher engagement because we target decision-makers on active projects.',
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
                  text: 'The relationships are real',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'These aren\'t email clicks or "leads." These are confirmed conversations with GCs, developers, and owners who have active projects. Direct bid requests. Bid list additions. Discovery calls scheduled. Repeat client relationships secured.',
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
                  text: 'The clients are diverse',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Design-build GCs, drywall subcontractors, lighting distributors. Different trades, different markets, different company sizes. The systematic approach works across the commercial construction industry.',
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
      headline: 'Who we\'ve delivered results for',
      columns: '2',
      features: [
        {
          title: 'Design-Build General Contractors',
          description:
            'Multi-stakeholder targeting (developers, architects, property managers, business owners) that generates pipeline across project types',
          icon: '🏗️',
        },
        {
          title: 'Specialty Trade Contractors',
          description:
            'Project-based outreach to GCs and developers on active projects with your specific scope (electrical, drywall, HVAC, plumbing, etc.)',
          icon: '⚡',
        },
        {
          title: 'Construction Suppliers & Distributors',
          description:
            'Targeted campaigns to electrical contractors, designers, architects, and GCs who specify or purchase your products',
          icon: '📦',
        },
        {
          title: 'Commercial Contractors Expanding Markets',
          description:
            'Systematic entry into new geographic markets or project types through relationship-based business development',
          icon: '🌎',
        },
      ],
    },
    {
      blockType: 'featureGridBlock',
      headline: 'What our clients consistently achieve',
      columns: '3',
      features: [
        {
          title: 'Immediate pipeline growth',
          description: 'Qualified bid opportunities start flowing within 30-60 days of campaign launch',
          icon: '📈',
        },
        {
          title: 'Higher conversion rates',
          description: 'Project-based targeting delivers 3-8X higher engagement than general cold outreach',
          icon: '🎯',
        },
        {
          title: 'Access to bigger players',
          description:
            'Bid list additions with larger GCs and design-build firms open doors to recurring opportunities',
          icon: '🚪',
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
            'Average pipeline multiple of 865:1 means every $1 invested generates $865 in qualified opportunities',
          icon: '💰',
        },
      ],
    },
    {
      blockType: 'cta',
      headline: 'Ready to see these results for your business?',
      subhead: "Book a discovery call. We'll assess your current pipeline, identify opportunities in your market, and show you exactly how we can help you grow.",
      links: [
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Schedule your pipeline audit',
          },
        },
      ],
    },
  ],
  publishedAt: new Date('2025-01-01').toISOString(),
  _status: 'published',
})

