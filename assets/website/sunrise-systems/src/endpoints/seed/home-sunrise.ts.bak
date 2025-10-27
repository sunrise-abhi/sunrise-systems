import type { Page } from '@/payload-types'

export const homeSunriseSeed = (caseStudyIds: { delta: string; breakthrough: string; kings: string }): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'Home',
  slug: '',
  hero: {
    type: 'none',
  },
  layout: [
    {
      blockType: 'heroBlock',
      variant: 'default',
      headline: 'Real bid invites delivered to your estimating team',
      subheadline:
        'We help contractors find and win more projects they actually want.\nGet bid invites on active ideal projects in your area every day.\n0% commission on projects you win.',
      ctaButton: {
        label: 'Send me projects',
        url: '/contact',
      },
    },
    {
      blockType: 'logoStripBlock',
      headline: 'Trusted By',
      logos: [],
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
      headline: 'Real results from contractors just like you',
      subhead: 'Qualified bid invites, measurable pipeline growth, and real revenue—delivered for design-build GCs, specialty contractors, and construction suppliers.',
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
              metricKey: 'pipelineROI',
              label: 'Pipeline ROI',
            },
          ],
        },
        {
          caseStudy: caseStudyIds.breakthrough,
          layout: 'metricsRight',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Qualified Pipeline',
            },
            {
              metricKey: 'pipelineROI',
              label: 'Pipeline ROI',
            },
          ],
        },
        {
          caseStudy: caseStudyIds.kings,
          layout: 'metricsLeft',
          displayMetrics: [
            {
              metricKey: 'pipelineValue',
              label: 'Qualified Pipeline',
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
      headline: 'Business development built for commercial construction',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: "Word of mouth isn't scalable. We help commercial contractors, design-build firms, and specialty trades build predictable pipelines alongside their existing relationships—so you choose the projects you want, not just what comes along.",
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
          title: 'Sales',
          subtitle: 'Your outbound business development team',
          description:
            'Proactive outreach to GCs, developers, and owners on active projects that match your capabilities and local market.\n\n• Qualified bid invites delivered weekly\n• Warm introductions to decision-makers\n• Pre-positioning on high-value projects\n• Account-based relationship building',
          icon: '📊',
        },
        {
          title: 'Marketing',
          subtitle: 'Brand positioning that gets you noticed',
          description:
            'Build a premium digital presence that reflects the quality of your work. We develop your brand voice, create compelling content, and position you as the contractor GCs and developers want to work with.\n\n• Brand refresh and messaging that differentiates you\n• LinkedIn strategy and newsletter for relationship building\n• Website redesign that builds immediate credibility\n• Digital presence that attracts the right opportunities',
          icon: '✨',
        },
        {
          title: 'Software',
          subtitle: 'Custom technology built for construction operations',
          description:
            "We don't just set up off-the-shelf CRM systems. We build custom software that solves your specific operational problems—from modernizing legacy databases to creating centralized portals that replace your entire tech stack.\n\n• Custom operational software tailored to your workflows\n• Data extraction and modernization from legacy systems\n• Centralized dashboards that connect your tech stack\n• Automated processes for sales, marketing, and project management\n• AI-powered tools that boost efficiency across operations",
          icon: '⚙️',
        },
      ],
    },
    {
      blockType: 'processBlock',
      headline: 'Get started with Sunrise Systems',
      steps: [
        {
          number: '1',
          title: 'Discovery Call',
          description:
            "Book a call with our construction business development team. We'll assess your current pipeline, identify opportunities in your market, and show you exactly how we can help you grow.",
        },
        {
          number: '2',
          title: 'Custom Strategy',
          description:
            'We build a tailored plan combining sales outreach, marketing positioning, and technology solutions specific to your trade, region, and growth goals.',
        },
        {
          number: '3',
          title: 'Launch & Results',
          description:
            'Our team gets to work immediately—building relationships with local GCs and developers, positioning your brand, and setting up systems that deliver consistent opportunities.',
        },
      ],
    },
    {
      blockType: 'cta',
      headline: 'Get bid invites delivered to your inbox',
      subhead: "We're here to help you grow. One quick meeting is all it takes to get started.",
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

