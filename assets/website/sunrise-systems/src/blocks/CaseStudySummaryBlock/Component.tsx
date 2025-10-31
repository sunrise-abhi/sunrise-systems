'use client'

import React from 'react'
import Link from 'next/link'
import type { CaseStudySummaryBlock as CaseStudySummaryBlockType } from '@/payload-types'
import type { CaseStudy } from '@/payload-types'
import { Section, Container, Grid, Column , AnimatedSection } from '@/components/layout'

export const CaseStudySummaryBlockComponent: React.FC<CaseStudySummaryBlockType> = ({
  caseStudy,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  if (!caseStudy || typeof caseStudy === 'string') return null

  const caseStudyData = caseStudy as CaseStudy

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <Grid cols={12}>
          <Column span={{ mobile: 4, desktop: 8 }}>
            <h3 className="mb-4">{caseStudyData.clientName}</h3>
            
            {caseStudyData.keyMetrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {caseStudyData.keyMetrics.pipelineValue && (
                  <div>
                    <h4>
                      ${(caseStudyData.keyMetrics.pipelineValue / 1000000).toFixed(2)}MM
                    </h4>
                    <p className="accent">Pipeline Generated</p>
                  </div>
                )}
                {caseStudyData.keyMetrics.pipelineROI && (
                  <div>
                    <h4>
                      {caseStudyData.keyMetrics.pipelineROI}:1
                    </h4>
                    <p className="accent">Pipeline ROI</p>
                  </div>
                )}
              </div>
            )}

            {caseStudyData.testimonial && (
              <blockquote className="body-1 mb-8">
                &ldquo;{caseStudyData.testimonial.quote}&rdquo;
              </blockquote>
            )}

            <Link
              href={`/case-studies/${caseStudyData.slug}`}
              className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-mono uppercase transition-colors"
            >
              Read full case study
            </Link>
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}

