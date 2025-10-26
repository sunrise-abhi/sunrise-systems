import type { Service } from '@/payload-types'

export const servicesSeedData = (caseStudyIds: { delta: string; breakthrough: string; kings: string }): Omit<Service, 'id' | 'createdAt' | 'updatedAt'>[] => [
  {
    title: 'Lead Generation & Sales Support',
    slug: 'sales',
    category: 'sales',
    excerpt:
      'Proactive outreach to GCs, developers, and owners on active projects that match your capabilities and local market.',
    icon: '📊',
    featuredMetrics: [
      { label: 'Average ROI', value: '865:1' },
      { label: 'Avg Conversion', value: '6.11%' },
    ],
    benefits: [
      { text: 'Qualified bid invites delivered weekly' },
      { text: 'Warm introductions to decision-makers' },
      { text: 'Pre-positioning on high-value projects' },
      { text: 'Account-based relationship building' },
    ],
    content: [
      {
        blockType: 'heroBlock',
        variant: 'default',
        headline: 'Get bid invites on your ideal projects every week',
        subheadline:
          "Unsteady project flow? Losing to inferior competitors? Stuck bidding on projects where the decision's already made?\n\nWe put your business in front of decision-makers on active projects that match your capabilities—before bid lists close.",
        ctaButton: {
          label: 'Schedule your pipeline audit',
          url: '/contact',
        },
      },
      {
        blockType: 'statementBlock',
        headline: 'Most contractors are playing the wrong game',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: "You're waiting for bid invites on projects where GCs have already chosen their team. You're losing opportunities because developers don't know you exist. You're bidding against 12 other contractors on projects where price is the only differentiator.",
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
                    text: "Meanwhile, the projects you actually want—the ones where your expertise matters, where margins are healthy, where you'd deliver your best work—are going to contractors who got there first.",
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
                    text: "Word of mouth and referrals built your business. But they won't scale it.",
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
        headline: 'Systematic outreach that generates qualified opportunities',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'We blend account-based marketing with project intelligence to position you as the preferred choice on high-value projects in your market.',
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
            title: 'Pre-positioning and market access',
            subtitle: 'We connect you with decision-makers before they choose their team',
            description:
              'We identify upcoming projects early using databases like ConstructConnect and Dodge, then position you as the preferred choice—whether it\'s at the conception stage or before the final bid list closes.\n\n• Early project identification for opportunities that fit your scope\n• Direct access to GCs, developers, and owners at every project stage\n• Long-term partnership development that turns one-time bids into repeat invitations',
            icon: '🎯',
          },
          {
            title: 'Account-based outreach',
            subtitle: 'Personalized relationship building',
            description:
              'We research each prospect thoroughly and craft messaging that opens doors instead of getting ignored.\n\n• Multi-channel engagement through LinkedIn, email, and strategic outreach\n• Decision-maker targeting so you connect with actual project owners and GCs\n• Trust-building messaging focused on long-term partnerships, not pushy sales',
            icon: '🤝',
          },
          {
            title: 'Pipeline management',
            subtitle: 'All leads and conversations in one place',
            description:
              "Your opportunities won't get lost in email threads or forgotten follow-ups. We integrate everything into your CRM system.\n\n• Automated lead tracking from first contact through bid invitation\n• Follow-up sequences that nurture relationships until projects are ready\n• Pipeline visibility so you can see exactly which opportunities are heating up",
            icon: '📊',
          },
        ],
      },
      {
        blockType: 'statementBlock',
        headline: 'This isn\'t cold calling',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Not spray and pray—targeted and strategic',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Not one-and-done—relationship-focused',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Not generic templates—customized messaging',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Not pushy sales—researched and personalized',
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
                    text: 'We\'re building relationships with people who have active projects that need what you do best.',
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
        headline: 'Results from commercial contractors just like you',
        content: null,
      },
      {
        blockType: 'caseStudySummaryBlock',
        caseStudy: caseStudyIds.delta,
        displayStyle: 'detailed',
      },
      {
        blockType: 'caseStudySummaryBlock',
        caseStudy: caseStudyIds.breakthrough,
        displayStyle: 'detailed',
      },
      {
        blockType: 'caseStudySummaryBlock',
        caseStudy: caseStudyIds.kings,
        displayStyle: 'detailed',
      },
      {
        blockType: 'processBlock',
        headline: 'Your sales process, systematized',
        steps: [
          {
            number: '1',
            title: 'We learn what you build',
            description:
              'Before anything else, we understand your trade, target market, and the type of projects that move your business forward.',
          },
          {
            number: '2',
            title: 'We identify active opportunities',
            description:
              'Using ConstructConnect, Dodge, and other project intelligence databases, we find projects in your area that match your scope and capabilities.',
          },
          {
            number: '3',
            title: 'We reach decision-makers',
            description:
              'Our team connects directly with GCs, developers, and owners tied to those active projects through personalized, researched outreach.',
          },
          {
            number: '4',
            title: 'You get bid invites',
            description:
              'Qualified opportunities flow into your pipeline. You stay focused on estimating and building—we handle the relationship development.',
          },
          {
            number: '5',
            title: 'We track everything',
            description:
              "Every conversation, follow-up, and result lives inside your CRM. You always know who's interested, what's next, and where new projects are coming from.",
          },
        ],
      },
      {
        blockType: 'cta',
        headline: 'Ready to fill your calendar with ideal projects?',
        subhead: 'We\'ll perform a full audit of your current sales process, show you exactly where bids are slipping through the cracks, and demonstrate how we can turn it into a predictable flow of high-fit projects.',
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
  },
  {
    title: 'Branding & Marketing',
    slug: 'marketing',
    category: 'marketing',
    excerpt:
      'Build a premium digital presence that reflects the quality of your work.',
    icon: '✨',
    featuredMetrics: [
      { label: 'Research Rate', value: '92%' },
      { label: 'More Opportunities', value: '2-3x' },
    ],
    benefits: [
      { text: 'Brand refresh and messaging that differentiates you' },
      { text: 'LinkedIn strategy and newsletter for relationship building' },
      { text: 'Website redesign that builds immediate credibility' },
      { text: 'Digital presence that attracts the right opportunities' },
    ],
    content: [
      {
        blockType: 'heroBlock',
        variant: 'default',
        headline: 'Position yourself as the contractor GCs want to work with',
        subheadline:
          "Your next project isn't won on price—it's won on reputation. We help you build the premium digital presence and brand positioning that attracts better projects and stronger relationships with the right decision-makers.",
        ctaButton: {
          label: 'Schedule a brand strategy call',
          url: '/contact',
        },
      },
      {
        blockType: 'statsRowBlock',
        stats: [
          { value: '92%', label: 'of GCs research contractors online before reaching out' },
          { value: '2-3x', label: 'more qualified opportunities for contractors with consistent digital presence' },
        ],
      },
      {
        blockType: 'statementBlock',
        headline: 'Most construction marketing is stuck in 2010',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: "Generic \"conversion-optimized\" websites that all look the same. Sporadic social posts that don't hit the mark. Hype videos that don't actually generate projects.",
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
                    text: 'Meanwhile, the contractors winning the best work have something different: premium positioning that makes them the obvious choice, not the cheapest option.',
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
                    text: 'When a developer or GC researches you online, what do they find? A website that builds confidence or raises questions? A LinkedIn presence that positions expertise or radio silence? Content that demonstrates capability or corporate fluff?',
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
                    text: "The bar is low. That's your opportunity.",
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
        headline: 'Your marketing team for commercial construction',
        columns: '2',
        features: [
          {
            title: 'Premium brand positioning',
            subtitle: 'Build a reputation that matches the quality of your work',
            description:
              'We develop your brand voice, messaging strategy, and positioning so you stand out as the contractor of choice—not just another bid option.\n\n• Brand voice that differentiates you from commodity bidders\n• Messaging strategy that speaks to GCs and developers (not homeowners)\n• Premium positioning that reflects your level of expertise',
            icon: '⭐',
          },
          {
            title: 'Professional design assets',
            subtitle: 'Visual identity that commands attention',
            description:
              'We redesign your website and create visual assets that build immediate credibility with GCs researching contractors online.\n\n• Website redesign that showcases your expertise and capabilities\n• Case studies and project portfolios that demonstrate quality\n• Marketing materials with a premium feel that matches your work',
            icon: '🎨',
          },
          {
            title: 'Targeted content strategy',
            subtitle: 'Stay top-of-mind with decision-makers in your market',
            description:
              'We develop newsletters and content that keep your relationships warm with GCs, developers, and past clients—so when a project opportunity comes up, you\'re the first call.\n\n• Email campaigns to target accounts in your region\n• Follow-up sequences that maintain relationships over time\n• Project updates and capability highlights that generate opportunities',
            icon: '📧',
          },
          {
            title: 'Strategic LinkedIn presence',
            subtitle: 'Build relationships with GCs and developers in your market',
            description:
              'We create and manage LinkedIn content that positions you as a thought leader and keeps you visible with the decision-makers who matter.\n\n• LinkedIn newsletter strategy and regular content creation\n• Relationship building with local GCs, developers, and project owners\n• Personal brand development for ownership and leadership team',
            icon: '💼',
          },
        ],
      },
      {
        blockType: 'statementBlock',
        headline: 'Premium positioning changes what you\'re competing on',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'When you\'re positioned as a premium choice, you\'re no longer competing on price. You\'re competing on expertise, reliability, and the confidence that you\'ll deliver exceptional work.',
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
                    text: 'GCs and developers will pay more to work with contractors they trust. But trust requires visibility, credibility, and consistent presence.',
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
                    text: 'That\'s what strategic marketing builds.',
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
        headline: 'Marketing that drives real opportunities',
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
                    text: 'Breakthrough Lighting: Complete rebrand positions distributor as strategic partner',
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
                    text: 'We launched a complete rebrand for Breakthrough Lighting, transforming how they present themselves to electrical contractors, designers, and architects.',
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
                    text: 'The positioning shift—from vendor to strategic partner—helped them access larger design-build firms and generate $10MM in qualified pipeline.',
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
                    text: 'Our clients report:',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Being invited to bid on larger, more profitable projects after brand refresh',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Developers and GCs specifically mentioning their website during initial conversations',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Higher close rates on proposals after establishing premium positioning',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Recruiting better talent because the brand attracts top-tier employees',
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
        headline: 'The combination that works',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Brand positioning + professional design + strategic content = consistent visibility with the right decision-makers',
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
                    text: "This isn't about looking pretty. It's about being remembered when projects arise, building confidence before the first conversation, and positioning yourself to win the work you actually want.",
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
                    text: 'Where others deliver generic marketing tactics, we build integrated systems:',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Your brand positions the value',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Your website proves the capability',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Your content maintains the relationships',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: '• Your LinkedIn keeps you visible',
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
                    text: 'Together, these create the premium presence that attracts better opportunities.',
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
        headline: 'Marketing that integrates with your sales system',
        steps: [
          {
            number: '1',
            title: 'We understand your market position',
            description:
              'Who are you actually competing against? What makes you different? What do GCs and developers value when choosing contractors like you?',
          },
          {
            number: '2',
            title: 'We develop your positioning',
            description:
              'We create brand messaging that differentiates you, a visual identity that builds credibility, and content strategy that keeps you visible.',
          },
          {
            number: '3',
            title: 'We build your digital presence',
            description:
              'Website redesign, case study development, proposal templates, and marketing collateral that matches the quality of your work.',
          },
          {
            number: '4',
            title: 'We maintain consistent visibility',
            description:
              'Ongoing content creation, LinkedIn management, and email campaigns that keep you top-of-mind with your target market.',
          },
          {
            number: '5',
            title: 'We track what works',
            description:
              'Which content drives engagement? Which case studies generate conversations? We measure everything and optimize based on what actually generates opportunities.',
          },
        ],
      },
      {
        blockType: 'cta',
        headline: 'Ready to position yourself as the premium choice?',
        subhead: 'Let\'s build a brand strategy that reflects the quality of your projects and attracts the opportunities you actually want.',
        links: [
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: 'Schedule a brand strategy call',
            },
          },
        ],
      },
    ],
    publishedAt: new Date('2025-01-01').toISOString(),
    _status: 'published',
  },
  {
    title: 'Custom Software Development',
    slug: 'software',
    category: 'software',
    excerpt:
      'Custom technology built for construction operations that solves your specific problems.',
    icon: '⚙️',
    featuredMetrics: [
      { label: 'Time Saved', value: '15+ hrs/week' },
      { label: 'Efficiency Gain', value: '40%' },
    ],
    benefits: [
      { text: 'Custom operational software tailored to your workflows' },
      { text: 'Data extraction and modernization from legacy systems' },
      { text: 'Centralized dashboards that connect your tech stack' },
      { text: 'Automated processes for sales, marketing, and project management' },
      { text: 'AI-powered tools that boost efficiency across operations' },
    ],
    content: [
      {
        blockType: 'heroBlock',
        variant: 'default',
        headline: 'Custom technology built for construction operations',
        subheadline:
          "Your business has unique operational challenges that off-the-shelf software can't solve.\n\nWe build custom technology that brings your vision to life—whether that's replacing bloated systems like Procore, modernizing decades-old databases, or creating centralized dashboards that show exactly what you need to see (and nothing you don't).",
        ctaButton: {
          label: 'Schedule a technology consultation',
          url: '/contact',
        },
      },
      {
        blockType: 'statementBlock',
        headline: 'Off-the-shelf software forces you to adapt to its workflow',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'You\'re managing millions in projects across tools that were never built for how you actually operate. Information gets buried, updates fall behind, and opportunities are missed because there\'s no clear view of what\'s happening.',
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
                    text: 'Procore is overkill for most contractors. Monday.com doesn\'t understand construction. Excel spreadsheets become unmaintainable. Email inboxes become project databases.',
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
                    text: 'You need technology that works the way you work—not the other way around.',
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
        headline: 'We build software around your operations',
        columns: '3',
        features: [
          {
            title: 'Central operations system',
            subtitle: 'One dashboard, tailored to your entire operation',
            description:
              'Every Sunrise client gets our proprietary Central Operations system—but we customize it to fit your specific needs. Whether you need visibility into marketing efforts or want to replace your entire tech stack with a custom portal, we build it around how you actually operate.\n\n• Real-time operational visibility into marketing campaigns, outreach activity, and project status\n• Role-based customization so employees, partners, and clients see exactly what they need (nothing more)\n• Unified pipeline management that combines estimating and project tracking in one place',
            icon: '🎛️',
          },
          {
            title: 'Legacy system modernization',
            subtitle: 'Unlock decades of valuable project history',
            description:
              'That old database from the 1990s? The contact list buried in dead email accounts? We extract it and modernize it.\n\n• Database recovery from outdated systems (1990s-2000s software, inaccessible formats)\n• Dormant contact reactivation by mining old inboxes and re-engaging past relationships\n• Cloud migration that turns legacy data into modern, searchable records\n\nCase study: We extracted a client\'s 1994-2007 project database, migrated it to the cloud, and recovered thousands of valuable contacts from past projects.',
            icon: '📦',
          },
          {
            title: 'AI and automation tools',
            subtitle: 'Technology built to handle your busy work',
            description:
              'We build artificial intelligence tools and automated systems that handle repetitive work, so your team focuses on relationships and revenue.\n\n• Automated re-engagement campaigns that revive dormant client relationships\n• Custom scripts for email mining, contact curation, and account-based outreach\n• Intelligent workflows that trigger follow-ups based on project milestones or client behavior',
            icon: '🤖',
          },
        ],
      },
      {
        blockType: 'statementBlock',
        headline: 'We use the same technology we build for clients',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Our proprietary tools power our own operations—and we give clients access to the same systems:',
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
                    text: 'OutreachSphere: Internal CRM and lead outreach platform for contact tracking, email campaigns, and conversion visibility',
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
                    text: 'ContentSphere: AI-assisted platform for drafting newsletters, LinkedIn posts, SEO content, and web copy',
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
                    text: 'C0 (Central Operations): Our dashboard for client onboarding, service delivery, tasking, invoicing, and reporting—including executive, team member, and client views',
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
                    text: 'These aren\'t off-the-shelf tools we configured. We built them from scratch because nothing else solved our specific operational needs.',
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
                    text: 'That\'s the same approach we take for your business.',
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
        headline: 'The right technology creates operational leverage',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'When software fits your exact workflow, your team stops fighting the system and starts using it naturally. Data flows where it needs to go. Reports show what actually matters. Manual processes become automatic.',
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
                    text: 'That\'s the difference between software that gets in the way and software that creates leverage.',
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
                    text: 'Most contractors can\'t afford a full-time development team. But you can afford us—and we bring the same level of technical expertise at a fraction of the cost.',
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
        headline: 'Technology that solves real problems',
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
                    text: 'Legacy database recovery and modernization',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Extracted 13 years of project history from a 1994-era database',
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
                    text: 'A client had decades of valuable project data trapped in an outdated system they could no longer access. We extracted the complete database, migrated it to modern cloud infrastructure, and recovered thousands of past client contacts.',
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
                    text: 'Result: Immediate access to 13 years of project history, re-engagement of dormant relationships, and a foundation for data-driven decision making.',
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
                type: 'heading',
                tag: 'h3',
                children: [
                  {
                    type: 'text',
                    text: 'Custom operations dashboard',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Replaced fragmented tools with unified system',
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
                    text: 'Client was managing sales pipeline in one tool, marketing in another, project tracking in spreadsheets, and reporting manually. We built a centralized operations system that unified everything.',
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
                    text: 'Result: Real-time visibility across all operations, automated reporting, role-based access for team members and clients, 15+ hours per week saved on manual reporting.',
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
                type: 'heading',
                tag: 'h3',
                children: [
                  {
                    type: 'text',
                    text: 'Automated outreach and follow-up system',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Built AI-powered relationship management',
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
                    text: 'Client needed systematic follow-up on hundreds of prospects but couldn\'t afford full-time SDRs. We built automated engagement sequences with AI-powered personalization.',
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
                    text: 'Result: 200+ prospects receiving systematic touchpoints, zero manual effort, 18% engagement rate on automated follow-ups.',
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
        headline: 'Built for contractors ready to modernize operations',
        columns: '2',
        features: [
          {
            title: 'Frustrated with bloated, expensive platforms like Procore',
            icon: '❌',
          },
          {
            title: 'Have valuable data trapped in legacy systems',
            icon: '📚',
          },
          {
            title: 'Want visibility across sales, marketing, and operations',
            icon: '👁️',
          },
          {
            title: 'Need automation to scale without hiring more administrative staff',
            icon: '⚡',
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
                    text: 'If you\'re managing multi-million dollar projects but still tracking opportunities in spreadsheets, we should talk.',
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
        headline: 'Custom development process',
        steps: [
          {
            number: '1',
            title: 'Discovery and requirements',
            description:
              'We spend time understanding your current systems, operational challenges, and what success looks like.',
          },
          {
            number: '2',
            title: 'Architecture and design',
            description:
              'We map out the technical architecture, design the user interface, and build a prototype for your review.',
          },
          {
            number: '3',
            title: 'Development and testing',
            description:
              'Our team builds the system, tests it with your actual workflows, and refines based on feedback.',
          },
          {
            number: '4',
            title: 'Deployment and training',
            description:
              'We deploy the system, train your team, and ensure everything integrates with your existing tools.',
          },
          {
            number: '5',
            title: 'Ongoing support and iteration',
            description:
              'Technology evolves. We provide ongoing support, updates, and new features as your business grows.',
          },
        ],
      },
      {
        blockType: 'cta',
        headline: 'What\'s your biggest operational headache?',
        subhead: 'From Procore replacements to custom dashboards to legacy system recovery—we build technology that matches your workflow instead of forcing you to change it. Let\'s talk about how custom software can solve it.',
        links: [
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: 'Schedule a technology consultation',
            },
          },
        ],
      },
    ],
    publishedAt: new Date('2025-01-01').toISOString(),
    _status: 'published',
  },
]
