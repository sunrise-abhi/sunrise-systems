import React from 'react'
import type { HeroBlock as HeroBlockType } from '@/payload-types'
import { Section, Container, Grid, Column } from '@/components/layout'
import { Media } from '@/components/Media'

export const HeroBlockComponent: React.FC<HeroBlockType> = ({
  variant = 'default',
  eyebrow,
  headline,
  subheadline,
  ctaButton,
  proofBadge,
  image,
  backgroundImage,
  heroImage,
  services,
  overlayOpacity = 50,
  objectPosition = 'center',
  backgroundColor = 'white',
  paddingTop,
  paddingBottom,
}) => {
  // Background Image Variant
  if (variant === 'backgroundImage') {
    const bgImageResource = typeof backgroundImage === 'object' ? backgroundImage : null
    const objectPosClass = `object-${objectPosition}`
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor="transparent" className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
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
          <Grid cols={12}>
            <Column span={{ mobile: 4, desktop: 8 }} start={{ desktop: 3 }}>
              <div className="text-white text-center">
                {eyebrow && (
                  <p className="accent mb-4 text-white">
                    {eyebrow}
                  </p>
                )}
                
                <h1 className="mb-8 text-white">
                  {headline}
                </h1>
                
                {subheadline && (
                  <p className="body-1 mb-8 whitespace-pre-line text-white">
                    {subheadline}
                  </p>
                )}
                
                {ctaButton?.label && ctaButton?.url && (
                  <a
                    href={ctaButton.url}
                    className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base bg-white text-primary hover:bg-white/90 font-mono uppercase transition-colors"
                  >
                    {ctaButton.label}
                  </a>
                )}
                
                {proofBadge && (
                  <p className="mt-8 body-2 text-white">
                    {proofBadge}
                  </p>
                )}
              </div>
            </Column>
          </Grid>
        </Container>
      </Section>
    )
  }

  // Image Right Variant
  if (variant === 'imageRight') {
    const imageResource = typeof image === 'object' ? image : null
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} className="relative">
        <Container>
          <Grid cols={12}>
            <Column span={{ mobile: 4, desktop: 5 }}>
              {eyebrow && (
                <p className="accent mb-4">
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
                <a
                  href={ctaButton.url}
                  className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base bg-primary text-white hover:bg-primary/90 font-mono uppercase transition-colors"
                >
                  {ctaButton.label}
                </a>
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
        </Container>
      </Section>
    )
  }

  // Case Study Hero Variant
  if (variant === 'caseStudyHero') {
    const heroImageResource = typeof heroImage === 'object' ? heroImage : null
    const servicesList = Array.isArray(services) ? services : []
    
    return (
      <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} className="relative">
        <Container>
          <Grid cols={12}>
            <Column span={{ mobile: 4, desktop: 5 }}>
              {eyebrow && (
                <p className="accent mb-4">
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
        </Container>
      </Section>
    )
  }

  // Default Variant
  return (
    <Section paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor} className="relative">
      <Container>
        <Grid cols={12}>
          <Column span={{ mobile: 4, desktop: 8 }}>
            {eyebrow && (
              <p className="accent mb-4">
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
              <a
                href={ctaButton.url}
                className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base bg-primary text-white hover:bg-primary/90 font-mono uppercase transition-colors"
              >
                {ctaButton.label}
              </a>
            )}
            
            {proofBadge && (
              <p className="mt-8 body-2">
                {proofBadge}
              </p>
            )}
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}

