'use client'

import { useState, useEffect } from 'react'

export function BaselineDebug() {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'B') {
        setVisible(v => !v)
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  
  if (!visible || process.env.NODE_ENV !== 'development') return null
  
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998]">
      <div 
        className="h-full w-full" 
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255, 96, 0, 0.1) 0px, rgba(255, 96, 0, 0.1) 1px, transparent 1px, transparent 8px)',
          backgroundSize: '100% 8px'
        }}
      />
      <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded text-sm font-mono">
        8px Baseline (Ctrl+Shift+B to toggle)
      </div>
    </div>
  )
}

