import React from 'react'

interface SectionProps {
  children: React.ReactNode
  spacing?: 'standard' | 'large' | 'hero'
  backgroundColor?: 'white' | 'offwhite' | 'transparent' | null
  className?: string
}

export function Section({ 
  children, 
  spacing = 'standard', 
  backgroundColor = 'white',
  className = '' 
}: SectionProps) {
  const paddingClasses = {
    standard: 'py-16',
    large: 'py-24',
    hero: 'pt-32 pb-24 lg:pt-40 lg:pb-32'
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
      className={`${bgClass} ${paddingClasses[spacing]} ${className}`} 
      data-bg-color={bgColorHex}
      data-section-bg={sectionBg}
    >
      {children}
    </section>
  )
}

