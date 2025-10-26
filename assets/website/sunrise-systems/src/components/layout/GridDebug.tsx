'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/utilities/ui'

/**
 * GridDebug - Visual Grid Overlay for Design Alignment
 * 
 * Toggle: Ctrl+Shift+G
 * 
 * Visual Guide:
 * ─────────────────────────────────────────────────────────
 * ├─[Column]─┤ gap ├─[Column]─┤ gap ├─[Column]─┤
 * 
 * COLUMN AREAS (subtle orange tint, ~5% opacity)
 *   - Where content should be placed
 *   - Aligned to grid column boundaries
 * 
 * VERTICAL DIVIDERS (thin orange lines, ~10% opacity)
 *   - Right edge of each column
 *   - First column has stronger left edge (~20% opacity) for alignment
 * 
 * GUTTERS (white space, 32px)
 *   - Transparent gaps between columns
 *   - Matches Tailwind's gap-8 spacing
 *   - Content should NOT extend into gutters
 * 
 * Responsive:
 *   - Mobile: 4 columns
 *   - Desktop (lg+): 12 columns
 * 
 * Implementation:
 *   - gap-8 creates 32px gutters
 *   - bg-primary/5 tints column areas
 *   - 1px dividers mark column edges
 *   - First column has stronger left border for alignment reference
 */
export function GridDebug() {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'G') {
        setVisible(v => !v)
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  
  if (!visible || process.env.NODE_ENV !== 'development') return null
  
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div className="container mx-auto h-full">
        {/* 12-column grid with gap-8 (32px gutters) */}
        <div className="grid h-full grid-cols-4 lg:grid-cols-12 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "relative",
                // Show only 4 columns on mobile, all 12 on lg+
                i >= 4 && "hidden lg:block"
              )}
            >
              {/* Column fill - subtle orange tint */}
              <div className="absolute inset-0 bg-primary/5" />
              
              {/* Right edge divider - thin line between columns */}
              <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-primary/10" />
              
              {/* Left edge marker on first column - alignment reference */}
              {i === 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced info panel with visual guide */}
      <div className="absolute bottom-4 right-4 bg-black/90 text-white px-4 py-3 rounded-md text-sm font-mono shadow-lg">
        <div className="font-semibold mb-1">Grid Overlay</div>
        <div className="text-xs opacity-80">Ctrl+Shift+G to toggle</div>
        <div className="text-xs opacity-60 mt-2 space-y-1">
          <div>Columns: <span className="lg:hidden">4</span><span className="hidden lg:inline">12</span></div>
          <div>Gap: 32px (gap-8)</div>
          <div className="mt-2 pt-2 border-t border-white/20">
            <div>• Tinted = Column</div>
            <div>• White = Gutter</div>
            <div>• Lines = Edges</div>
          </div>
        </div>
      </div>
    </div>
  )
}

