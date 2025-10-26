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
  overlayOpacity = 50,
  objectPosition = 'center',
  backgroundColor = 'white',
}) => {
  // Background Image Variant
  if (variant === 'backgroundImage') {
    const bgImageResource = typeof backgroundImage === 'object' ? backgroundImage : null
    const objectPosClass = `object-${objectPosition}`
    
    return (
      <Section spacing="hero" backgroundColor="transparent" className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
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
      <Section spacing="hero" backgroundColor={backgroundColor} className="relative">
        <Container>
          <Grid cols={12}>
            <Column span={{ mobile: 4, desktop: 6 }}>
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
              <Column span={{ mobile: 4, desktop: 6 }}>
                <div className="aspect-square relative overflow-hidden rounded-[5px] w-full min-h-[400px] lg:min-h-[500px]">
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

  // Default Variant
  return (
    <Section spacing="hero" backgroundColor={backgroundColor} className="relative">
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

