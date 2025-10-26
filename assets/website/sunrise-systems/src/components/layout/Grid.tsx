import React from 'react'

interface GridProps {
  children: React.ReactNode
  cols?: 2 | 3 | 4 | 12
  gap?: 'tight' | 'standard' | 'wide' | 'card'
  className?: string
}

export function Grid({ 
  children, 
  cols = 12, 
  gap = 'standard',
  className = '' 
}: GridProps) {
  const colClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    12: 'grid-cols-4 lg:grid-cols-12'
  }
  
  const gapClasses = {
    tight: 'gap-4',
    standard: 'gap-8',
    wide: 'gap-x-16 gap-y-8',
    card: 'gap-[10px]'
  }
  
  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

