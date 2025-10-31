'use client'

import React, { useState } from 'react'
import type { CarouselBlock as CarouselBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const CarouselBlockComponent: React.FC<CarouselBlockType> = ({
  images,
  height,
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) return null

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const currentImage = images[currentIndex]
  const imageResource = typeof currentImage.image === 'object' ? currentImage.image : null
  const aspectRatioClass = height === 'full' ? 'aspect-square' : 'aspect-[2/1]'

  if (!imageResource) return null

  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
      <Container>
        <AnimatedSection>
          <div className="relative">
            {/* Carousel Image */}
            <Grid cols={12}>
              <Column span={{ mobile: 4, desktop: 12 }}>
                <div>
                  <div className={`${aspectRatioClass} relative overflow-hidden rounded-[5px] w-full`}>
                    <Media resource={imageResource} fill imgClassName="object-cover" />
                  </div>
                  {currentImage.label && (
                    <p
                      className={`accent text-sm mt-2 ${currentImage.labelAlignment === 'right' ? 'text-right' : 'text-left'}`}
                    >
                      {currentImage.label}
                    </p>
                  )}
                </div>
              </Column>
            </Grid>

            {/* Navigation Chevrons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-primary hover:bg-primary hover:text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-primary hover:bg-primary hover:text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </AnimatedSection>
      </Container>
    </Section>
  )
}

