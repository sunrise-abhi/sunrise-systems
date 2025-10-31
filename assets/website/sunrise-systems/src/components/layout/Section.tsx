import React from 'react'

type SpacingValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

interface SectionProps {
  children: React.ReactNode
  paddingTop?: SpacingValue | null
  paddingBottom?: SpacingValue | null
  // Legacy prop for backward compatibility
  spacing?: 'standard' | 'large' | 'hero'
  backgroundColor?: 'white' | 'offwhite' | 'transparent' | null
  className?: string
  blockId?: string
}

export function Section({ 
  children, 
  paddingTop,
  paddingBottom,
  spacing,
  backgroundColor = 'white',
  className = '',
  blockId
}: SectionProps) {
  // Map spacing values to Tailwind classes (8px baseline rhythm)
  const spacingMap: Record<SpacingValue, string> = {
    none: '0',
    xs: '8',   // 32px
    sm: '12',  // 48px
    md: '16',  // 64px
    lg: '24',  // 96px
    xl: '32',  // 128px
    xxl: '40', // 160px
  }
  
  // Legacy spacing support (backward compatibility)
  const legacyPaddingClasses = {
    standard: 'py-16',
    large: 'py-24',
    hero: 'pt-32 pb-24 lg:pt-40 lg:pb-32'
  }
  
  // Determine padding classes
  let paddingClass = ''
  
  if (paddingTop !== undefined || paddingBottom !== undefined) {
    // Use new granular spacing
    const topValue = paddingTop || 'none'
    const bottomValue = paddingBottom || 'none'
    paddingClass = `pt-${spacingMap[topValue]} pb-${spacingMap[bottomValue]}`
  } else if (spacing) {
    // Fall back to legacy spacing
    paddingClass = legacyPaddingClasses[spacing]
  } else {
    // Default to medium spacing
    paddingClass = 'pt-16 pb-16'
  }
  
  const bgClass = backgroundColor === 'transparent' 
    ? 'bg-transparent' 
    : backgroundColor === 'offwhite' 
      ? 'bg-offwhite' 
      : 'bg-white'
  
  const bgColorHex = backgroundColor === 'transparent' 
    ? 'transparent' 
    : backgroundColor === 'offwhite' 
      ? '#FBFBFB' 
      : '#FFFFFF'
  
  const sectionBg = backgroundColor === 'transparent' ? 'transparent' : 'solid'
  
  return (
    <section 
      id={blockId}
      className={`${bgClass} ${paddingClass} ${className}`} 
      data-bg-color={bgColorHex}
      data-section-bg={sectionBg}
    >
      {children}
    </section>
  )
}

