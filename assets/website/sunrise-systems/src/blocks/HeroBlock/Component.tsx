'use client'

import React, { useState, useEffect } from 'react'
import type { HeroBlock as HeroBlockType } from '@/payload-types'
import { Section, Container, Grid, Column, AnimatedSection } from '@/components/layout'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { handleAnchorClick } from '@/utilities/smoothScroll'

export const HeroBlockComponent: React.FC<HeroBlockType> = ({
  variant = 'default',
  eyebrow,
  eyebrowOrange = false,
  headline,
  subheadline,
  ctaButton,
  proofBadge,
  image,
  carouselImages,
  backgroundImage,
  heroImage,
  services,
  overlayOpacity = 50,
  objectPosition = 'center',
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
  blockId,
}) => {
  // Hooks must be at the top level - carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = Array.isArray(carouselImages) 
    ? carouselImages.map(item => typeof item.image === 'object' ? item.image : null).filter(Boolean)
    : []
  
  useEffect(() => {
    if (variant !== 'imageRightCarousel' || images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [variant, images.length])

  // Background Image Variant
  if (variant === 'backgroundImage') {
    const bgImageResource = typeof backgroundImage === 'object' ? backgroundImage : null
    const objectPosClass = `object-${objectPosition}`
    const eyebrowClass = eyebrowOrange ? 'accent mb-4 text-primary' : 'accent mb-4 text-white'
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor="transparent" blockId={blockId} className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {bgImageResource && (
          <>
            <div className="absolute inset-0 z-0">
              <Media 
                resource={bgImageResource} 
                fill 
                imgClassName={`object-cover ${objectPosClass}`}
                priority
              />
            </div>
            <div 
              className="absolute inset-0 z-10 bg-black" 
              style={{ opacity: (overlayOpacity ?? 50) / 100 }}
            />
          </>
        )}
        <Container className="relative z-20">
          <AnimatedSection>
            <Grid cols={12}>
              <Column span={{ mobile: 4, desktop: 8 }} start={{ desktop: 3 }}>
                <div className="text-white text-center">
                  {eyebrow && (
                    <p className={eyebrowClass}>
                      {eyebrow}
                    </p>
                  )}
                  
                  <h1 className="mb-8 text-white">
                    {headline}
                  </h1>
                  
                {subheadline && (
                  <p className="body-subhead-light mb-8 whitespace-pre-line text-white">
                    {subheadline}
                  </p>
                )}
                
                {ctaButton?.label && ctaButton?.url && (
                  <Button variant="primary" asChild>
                    <a 
                      href={ctaButton.url}
                      onClick={(e) => handleAnchorClick(e, ctaButton.url)}
                    >
                      {ctaButton.label}
                    </a>
                  </Button>
                )}
                
                {proofBadge && (
                  <p className="mt-8 body-2 text-white">
                    {proofBadge}
                  </p>
                )}
                </div>
              </Column>
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>
    )
  }

  // Image Right Variant
  if (variant === 'imageRight') {
    const imageResource = typeof image === 'object' ? image : null
    const eyebrowClass = eyebrowOrange ? 'accent mb-4 text-primary' : 'accent mb-4'
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId} className="relative">
        <Container>
          <AnimatedSection>
            <Grid cols={12}>
              <Column span={{ mobile: 4, desktop: 5 }}>
                {eyebrow && (
                  <p className={eyebrowClass}>
                    {eyebrow}
                  </p>
                )}
                
              <h1 className="mb-8">
                {headline}
              </h1>
              
              {subheadline && (
                <p className="body-1 mb-8 whitespace-pre-line">
                  {subheadline}
                </p>
              )}
              
              {ctaButton?.label && ctaButton?.url && (
                <Button variant="primary" asChild>
                  <a 
                    href={ctaButton.url}
                    onClick={(e) => handleAnchorClick(e, ctaButton.url)}
                  >
                    {ctaButton.label}
                  </a>
                </Button>
              )}
              
              {proofBadge && (
                <p className="mt-8 body-2">
                  {proofBadge}
                </p>
              )}
            </Column>
            
            {imageResource && (
              <Column span={{ mobile: 4, desktop: 6 }} start={{ desktop: 7 }}>
                  <div className="relative overflow-hidden rounded-[5px] w-full h-full">
                    <Media 
                      resource={imageResource} 
                      fill 
                      imgClassName="object-cover"
                      priority
                    />
                  </div>
                </Column>
              )}
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>
    )
  }

  // Image Right Carousel Variant
  if (variant === 'imageRightCarousel') {
    const eyebrowClass = eyebrowOrange ? 'accent mb-4 text-primary' : 'accent mb-4'
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId} className="relative">
        <Container>
          <AnimatedSection>
            <Grid cols={12}>
              <Column span={{ mobile: 4, desktop: 5 }}>
                {eyebrow && (
                  <p className={eyebrowClass}>
                    {eyebrow}
                  </p>
                )}
                
              <h1 className="mb-8">
                {headline}
              </h1>
              
              {subheadline && (
                <p className="body-1 mb-8 whitespace-pre-line">
                  {subheadline}
                </p>
              )}
              
              {ctaButton?.label && ctaButton?.url && (
                <Button variant="primary" asChild>
                  <a 
                    href={ctaButton.url}
                    onClick={(e) => handleAnchorClick(e, ctaButton.url)}
                  >
                    {ctaButton.label}
                  </a>
                </Button>
              )}
              
              {proofBadge && (
                <p className="mt-8 body-2">
                  {proofBadge}
                </p>
              )}
            </Column>
            
            {images.length > 0 && (
                <Column span={{ mobile: 4, desktop: 6 }} start={{ desktop: 7 }}>
                  <div className="relative overflow-hidden rounded-[5px] w-full h-full">
                    {images.map((imageResource, index) => (
                      <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{
                          opacity: currentImageIndex === index ? 1 : 0,
                          pointerEvents: currentImageIndex === index ? 'auto' : 'none',
                        }}
                      >
                        <Media 
                          resource={imageResource} 
                          fill 
                          imgClassName="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </Column>
              )}
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>
    )
  }

  // Case Study Hero Variant
  if (variant === 'caseStudyHero') {
    const heroImageResource = typeof heroImage === 'object' ? heroImage : null
    const servicesList = Array.isArray(services) ? services : []
    const eyebrowClass = eyebrowOrange ? 'accent mb-4 text-primary' : 'accent mb-4'
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId} className="relative">
        <Container>
          <AnimatedSection>
            <Grid cols={12}>
              <Column span={{ mobile: 4, desktop: 5 }}>
                {eyebrow && (
                  <p className={eyebrowClass}>
                    {eyebrow}
                  </p>
                )}
                
                <h1 className="mb-0">
                  {headline}
                </h1>
              </Column>
              
              <Column span={{ mobile: 4, desktop: 5 }} start={{ desktop: 8 }}>
                {subheadline && (
                  <p className={`body-1 whitespace-pre-line ${eyebrow ? 'mt-[calc(1em+1rem)]' : ''}`}>
                    {subheadline}
                  </p>
                )}
                
                {servicesList.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {servicesList.map((service) => {
                      const serviceData = typeof service === 'object' ? service : null
                      if (!serviceData) return null
                      
                      return (
                        <span
                          key={serviceData.id}
                          className="accent inline-block px-3 py-1 rounded-[5px] bg-primary/10"
                        >
                          {serviceData.title}
                        </span>
                      )
                    })}
                  </div>
                )}
              </Column>
            </Grid>

            {heroImageResource && (
              <Grid cols={12} className="mt-12">
                <Column span={{ mobile: 4, desktop: 12 }}>
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[5px]">
                    <Media 
                      resource={heroImageResource} 
                      fill 
                      imgClassName="object-cover"
                      priority
                    />
                  </div>
                </Column>
              </Grid>
            )}
          </AnimatedSection>
        </Container>
      </Section>
    )
  }

  // Default Variant
  const eyebrowClass = eyebrowOrange ? 'accent mb-4 text-primary' : 'accent mb-4'
  
  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} blockId={blockId} className="relative">
      <Container>
        <AnimatedSection>
          <Grid cols={12}>
            <Column span={{ mobile: 4, desktop: 8 }}>
              {eyebrow && (
                <p className={eyebrowClass}>
                  {eyebrow}
                </p>
              )}
              
              <h1 className="mb-8">
                {headline}
              </h1>
              
              {subheadline && (
                <p className="body-1 mb-8 whitespace-pre-line">
                  {subheadline}
                </p>
              )}
              
              {ctaButton?.label && ctaButton?.url && (
                <Button variant="primary" asChild>
                  <a 
                    href={ctaButton.url}
                    onClick={(e) => handleAnchorClick(e, ctaButton.url)}
                  >
                    {ctaButton.label}
                  </a>
                </Button>
              )}
              
              {proofBadge && (
                <p className="mt-8 body-2">
                  {proofBadge}
                </p>
              )}
            </Column>
          </Grid>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

