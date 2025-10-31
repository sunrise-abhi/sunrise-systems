'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import type { CaseStudyCarouselBlock as CaseStudyCarouselBlockType } from '@/payload-types'
import type { CaseStudy } from '@/payload-types'
import { Media } from '@/components/Media'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Section, Container, AnimatedSection } from '@/components/layout'
import { Button } from '@/components/ui/button'

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

export const CaseStudyCarouselBlockComponent: React.FC<CaseStudyCarouselBlockType> = ({
  headline,
  subhead,
  caseStudies,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!caseStudies || caseStudies.length === 0) return null

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (caseStudies.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [caseStudies.length])

  const currentItem = caseStudies[currentIndex]
  const caseStudy =
    typeof currentItem?.caseStudy === 'object' ? (currentItem.caseStudy as CaseStudy) : null

  if (!caseStudy) return null

  const layout = currentItem.layout || 'metricsLeft'
  const metricsFirst = layout === 'metricsLeft'

  const metricsSection = (
    <div className="w-full md:w-1/2 p-8 bg-[#F5F5F5] rounded-[5px] md:rounded-none flex flex-col">
      {caseStudy.headline && <h3 className="mb-4">{caseStudy.headline}</h3>}
      {caseStudy.subheadline && <p className="mb-8 body-3">{caseStudy.subheadline}</p>}

      {currentItem.displayMetrics && currentItem.displayMetrics.length > 0 && (
        <div className="grid grid-cols-2 gap-8 flex-grow mb-8">
          {currentItem.displayMetrics.map((metric, metricIndex) => {
            if (!metric.metricKey || !caseStudy.keyMetrics) return null

            const value = caseStudy.keyMetrics[metric.metricKey]
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

      <Button
        asChild
        variant="primary"
        className="mt-auto w-full"
      >
        <Link href={`/case-studies/${caseStudy.slug}`}>
          View full case study
        </Link>
      </Button>
    </div>
  )

  const testimonialSection = (
    <div className="w-full md:w-1/2 p-8 flex items-center">
      <div className="bg-white rounded-[5px] p-8 w-full">
        {caseStudy.testimonial?.logo && typeof caseStudy.testimonial.logo === 'object' && (
          <div className="mb-8">
            <Media resource={caseStudy.testimonial.logo} imgClassName="h-12 w-auto" />
          </div>
        )}
        {caseStudy.testimonial && caseStudy.testimonial.quote && (
          <blockquote className="body-3 mb-8">
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
                  <p className="body-3 font-semibold">{caseStudy.testimonial.authorName}</p>
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
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <AnimatedSection>
          {headline && <h2 className="mb-4 text-center">{headline}</h2>}
          {subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto whitespace-pre-line">{subhead}</p>}
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative">
            {/* Carousel Content */}
            <div className="w-full bg-[#F5F5F5] rounded-[5px] flex flex-col md:flex-row hover-shine">
              <div className="flex flex-col md:flex-row w-full h-full overflow-hidden rounded-[5px]">
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
            </div>

            {/* Navigation Chevrons */}
            {caseStudies.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-12 h-12 flex items-center justify-center transition-all text-primary hover:text-primary/70"
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-12 h-12 flex items-center justify-center transition-all text-primary hover:text-primary/70"
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {caseStudies.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          )}
        </AnimatedSection>
      </Container>
    </Section>
  )
}

