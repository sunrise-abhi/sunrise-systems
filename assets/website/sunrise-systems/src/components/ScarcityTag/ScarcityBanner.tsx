'use client'

import React from 'react'
import type { Scarcity } from '@/payload-types'

interface ScarcityBannerProps {
  scarcityData: Scarcity | null
}

export const ScarcityBanner: React.FC<ScarcityBannerProps> = ({ scarcityData }) => {
  if (!scarcityData || !scarcityData?.enabled) {
    return null
  }

  const { remainingSlots, totalSlots, bannerText } = scarcityData
  
  // Replace placeholders with actual values
  const text = (bannerText || '{remaining} of {total} slots remaining')
    .replace('{remaining}', String(remainingSlots))
    .replace('{total}', String(totalSlots))

  return (
    <div className="w-full bg-[#FF6000] py-2">
      <div className="container mx-auto">
        <div className="text-center text-white font-mono text-base uppercase font-normal">
          {text}
        </div>
      </div>
    </div>
  )
}

