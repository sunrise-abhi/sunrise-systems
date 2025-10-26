import React from 'react'
import type { CalendlyBlock as CalendlyBlockType } from '@/payload-types'

export const CalendlyBlockComponent: React.FC<CalendlyBlockType> = ({
  calendlyUrl,
  backgroundColor = 'white',
  minHeight = 700,
}) => {
  const bgClass = backgroundColor === 'offwhite' ? 'bg-offwhite' : 'bg-white'

  return (
    <section className={`py-16 ${bgClass}`}>
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




