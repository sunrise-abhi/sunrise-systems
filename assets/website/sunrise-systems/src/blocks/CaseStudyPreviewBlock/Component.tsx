import React from 'react'
import Link from 'next/link'
import type { CaseStudyPreviewBlock as CaseStudyPreviewBlockType } from '@/payload-types'
import type { CaseStudy } from '@/payload-types'
import { Media } from '@/components/Media'
import { Section, Container, Grid, Column } from '@/components/layout'

function formatMetricValue(metricKey: string, value: number | null | undefined): string {
  if (!value && value !== 0) return 'N/A'

  switch (metricKey) {
    case 'pipelineValue':
    case 'closedRevenue':
      // Format as currency (e.g., $2.135M)
      if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(2)}M`
      } else if (value >= 1000) {
        return `$${(value / 1000).toFixed(0)}K`
      }
      return `$${value.toLocaleString()}`

    case 'pipelineROI':
    case 'realizedROI':
      // Format as ratio (e.g., 2,135:1)
      return `${value.toLocaleString()}:1`

    case 'relationships':
    case 'bidRequests':
    case 'bidLists':
    case 'repeatClients':
      // Format as numbers
      return value.toLocaleString()

    default:
      return String(value)
  }
}

export const CaseStudyPreviewBlockComponent: React.FC<CaseStudyPreviewBlockType> = ({
  headline,
  subhead,
  caseStudies,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  if (!caseStudies || caseStudies.length === 0) return null

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        {headline && <h2 className="mb-4 text-center">{headline}</h2>}
        {subhead && <p className="mb-16 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}

        <Grid cols={12} gap="wide" className="!gap-y-16">
          {caseStudies.map((item, index) => {
            const caseStudy =
              typeof item?.caseStudy === 'object' ? (item.caseStudy as CaseStudy) : null
            if (!caseStudy) return null

            const layout = item.layout || 'metricsLeft'
            const metricsFirst = layout === 'metricsLeft'

            const metricsSection = (
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  {caseStudy.headline && <h3 className="mb-4">{caseStudy.headline}</h3>}
                  {caseStudy.subheadline && <p className="mb-8">{caseStudy.subheadline}</p>}

                  {item.displayMetrics && item.displayMetrics.length > 0 && caseStudy.keyMetrics && (
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      {item.displayMetrics.map((metric, metricIndex) => {
                        if (!metric?.metricKey) return null

                        const value = caseStudy.keyMetrics?.[metric.metricKey]
                        const formattedValue = formatMetricValue(metric.metricKey, value)

                        return (
                          <div key={metricIndex}>
                            <h4 className="mb-2">{formattedValue}</h4>
                            <p className="accent text-sm">{metric.label}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="mt-auto inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-mono uppercase transition-colors w-fit"
                >
                  Read the case study
                </Link>
              </div>
            )

            const testimonialSection = (
              <div className="w-full md:w-1/2 p-8 flex items-center">
                <div className="bg-white rounded-[5px] p-8 w-full h-full flex flex-col justify-center">
                  {caseStudy.testimonial?.logo && typeof caseStudy.testimonial.logo === 'object' && (
                    <div className="mb-8">
                      <Media resource={caseStudy.testimonial.logo} imgClassName="h-12 w-auto" />
                    </div>
                  )}
                  {caseStudy.testimonial?.quote && (
                    <blockquote className="body-2 mb-8">
                      &ldquo;{caseStudy.testimonial.quote}&rdquo;
                    </blockquote>
                  )}

                  {caseStudy.testimonial &&
                    (caseStudy.testimonial.authorName || caseStudy.testimonial.authorTitle) && (
                      <div className="flex items-center gap-4">
                        {caseStudy.testimonial.authorImage &&
                          typeof caseStudy.testimonial.authorImage === 'object' && (
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                              <Media
                                resource={caseStudy.testimonial.authorImage}
                                imgClassName="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        <div>
                          {caseStudy.testimonial.authorName && (
                            <p className="body-3 font-semibold">
                              {caseStudy.testimonial.authorName}
                            </p>
                          )}
                          {caseStudy.testimonial.authorTitle && (
                            <p className="accent text-[#999999]">{caseStudy.testimonial.authorTitle}</p>
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            )

            return (
              <Column key={index} span={{ mobile: 4, desktop: 12 }}>
                <div className="w-full bg-[#F5F5F5] rounded-[5px] flex flex-col md:flex-row overflow-hidden">
                  {metricsFirst ? (
                    <>
                      {metricsSection}
                      {testimonialSection}
                    </>
                  ) : (
                    <>
                      {testimonialSection}
                      {metricsSection}
                    </>
                  )}
                </div>
              </Column>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}
