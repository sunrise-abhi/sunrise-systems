import React from 'react'
import type { Scarcity } from '@/payload-types'

interface CTAScarcityTagProps {
  scarcityData: Scarcity | null
}

export const CTAScarcityTag: React.FC<CTAScarcityTagProps> = ({ scarcityData }) => {
  if (!scarcityData) return null
  
  const { remainingSlots, totalSlots, ctaTagText } = scarcityData
  
  // Replace placeholders with actual values
  const text = (ctaTagText || '{remaining} of {total} slots remaining')
    .replace('{remaining}', String(remainingSlots))
    .replace('{total}', String(totalSlots))

  return (
    <p className="font-mono text-base text-white mb-4 uppercase font-normal">
      {text}
    </p>
  )
}

