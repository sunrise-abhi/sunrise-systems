import type { Page } from '@/payload-types'

export const pageHomeRewrite = (caseStudyIds: {
  delta: string
  breakthrough: string
  kings: string
  efi: string
}): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'Home',
  slug: '',
  hero: {
    type: 'none',
  },
  layout: [
    // HeroBlock - Lead with concrete outcome
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Bid invites on projects you actually want',
      subheadline:
        'We build scalable systems that deliver qualified opportunities, position you as the contractor GCs choose, and track every result. Growth, engineered.',
      ctaButton: {
        label: 'Get your first bid invites',
        url: '/contact',
      },
    },

    // LogoStripBlock - Social proof
    {
      blockType: 'logoStripBlock',
      headline: 'Trusted by',
      logos: [],
    },

    // StatsRowBlock - Aggregate proof immediately
    {
      blockType: 'statsRowBlock',
      stats: [
        { value: '$29MM+', label: 'pipeline generated' },
        { value: '$650K+', label: 'closed revenue' },
        { value: '191+', label: 'decision-maker relationships' },
        { value: '865:1', label: 'average ROI' },
      ],
    },

    // CaseStudyPreviewBlock - Specific proof with metrics
    {
      blockType: 'caseStudyPreviewBlock',
      headline: 'Real results from contractors like you',
      subhead:
        'Qualified bid invites, measurable pipeline, real revenue—for design-build GCs, specialty contractors, and construction suppliers.',
      caseStudies: [
        {
          caseStudy: caseStudyIds.delta,
          layout: 'metricsLeft',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Pipeline',
            },
            {
              metricKey: 'pipelineROI',
              label: 'ROI',
            },
          ],
        },
        {
          caseStudy: caseStudyIds.breakthrough,
          layout: 'metricsRight',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Pipeline',
            },
            {
              metricKey: 'closedRevenue',
              label: 'Closed',
            },
          ],
        },
        {
          caseStudy: caseStudyIds.kings,
          layout: 'metricsLeft',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Pipeline',
            },
            {
              metricKey: 'pipelineROI',
              label: 'ROI',
            },
          ],
        },
      ],
    },

    // StatementBlock - Positioning transition
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
                  text: 'Word of mouth built your business. It won't scale it. We build systematic sales, strategic marketing, and custom software that work together to grow your pipeline—so you choose the projects you want.',
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

    // FeatureGridBlock - Services as integrated system
    {
      blockType: 'featureGridBlock',
      headline: null,
      columns: '3',
      features: [
        {
          title: 'Sales',
          subtitle: 'Get bid invites on active projects',
          description:
            'Proactive outreach to GCs and developers on projects that match your capabilities and market.',
          icon: null,
          list: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'list',
                  children: [
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Pre-positioning before contractor selection',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Account-based outreach (not spray-and-pray)',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Pipeline tracking and CRM integration',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Qualified bid invites delivered weekly',
                        },
                      ],
                    },
                  ],
                  listType: 'bullet',
                  tag: 'ul',
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
          title: 'Marketing',
          subtitle: 'Position yourself as the GC choice',
          description:
            'Premium brand presence that reflects the quality of your work and attracts the right opportunities.',
          icon: null,
          list: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'list',
                  children: [
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Brand positioning that differentiates you',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Professional website and design assets',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'LinkedIn strategy and email campaigns',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Content that builds credibility with GCs',
                        },
                      ],
                    },
                  ],
                  listType: 'bullet',
                  tag: 'ul',
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
          title: 'Software',
          subtitle: 'Technology built for your operations',
          description:
            'Custom software that solves your specific problems—from legacy data rescue to operational dashboards.',
          icon: null,
          list: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'list',
                  children: [
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Central operations system (real-time visibility)',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Legacy database modernization and rescue',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'Custom dashboards you own (not SaaS rental)',
                        },
                      ],
                    },
                    {
                      type: 'listitem',
                      children: [
                        {
                          type: 'text',
                          text: 'AI-powered automation for busy work',
                        },
                      ],
                    },
                  ],
                  listType: 'bullet',
                  tag: 'ul',
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
        },
      ],
    },

    // ProcessBlock - Show simplicity
    {
      blockType: 'processBlock',
      headline: 'Start growing in three steps',
      steps: [
        {
          number: '1',
          title: 'Discovery call',
          description:
            'We assess your current pipeline, identify market opportunities, and show you exactly how we can help you grow.',
        },
        {
          number: '2',
          title: 'Custom strategy',
          description:
            'We build a plan combining sales outreach, marketing positioning, and technology—specific to your trade, region, and goals.',
        },
        {
          number: '3',
          title: 'Launch and results',
          description:
            'We get to work building GC relationships, positioning your brand, and delivering consistent bid invites you can track.',
        },
      ],
    },

    // CallToActionBlock - Final conversion
    {
      blockType: 'cta',
      headline: 'Ready to scale your pipeline?',
      subhead: 'One call is all it takes to get started.',
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
  meta: {
    title: 'Sunrise Systems | Business Development for Commercial Construction',
    description:
      'Get qualified bid invites on projects you actually want. We build systematic sales, strategic marketing, and custom software for commercial contractors. $29MM+ pipeline generated, 865:1 average ROI.',
  },
})

