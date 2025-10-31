'use client'

import React from 'react'
import type { CalendlyBlock as CalendlyBlockType } from '@/payload-types'

export const CalendlyBlockComponent: React.FC<CalendlyBlockType> = ({
  calendlyUrl,
  backgroundColor = 'white',
  minHeight = 700,
  paddingTop,
  paddingBottom,
}) => {
  // Map spacing to Tailwind classes
  const spacingMap = {
    none: '0',
    xs: '8',
    sm: '12',
    md: '16',
    lg: '24',
    xl: '32',
    xxl: '40',
  }
  
  const ptClass = paddingTop ? `pt-${spacingMap[paddingTop]}` : 'pt-16'
  const pbClass = paddingBottom ? `pb-${spacingMap[paddingBottom]}` : 'pb-16'
  const bgClass = backgroundColor === 'offwhite' ? 'bg-offwhite' : 'bg-white'

  return (
    <section className={`${ptClass} ${pbClass} ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div 
          className="calendly-inline-widget w-full rounded-[5px] overflow-hidden" 
          data-url={calendlyUrl}
          style={{ minHeight: `${minHeight}px` }}
        >
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Scheduling"
            style={{ minHeight: `${minHeight}px` }}
          />
        </div>
      </div>
    </section>
  )
}




