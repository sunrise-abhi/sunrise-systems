# Color Verification - Orange #FF6000

## Conversion Check

**HEX:** `#FF6000`

**RGB:** `rgb(255, 96, 0)`

**HSL:** `hsl(23, 100%, 50%)`

## Usage Across Codebase

### Tailwind CSS Variable
- **Location:** `src/app/(frontend)/globals.css`
- **Value:** `--primary: 23 100% 50%;` ✅

### Components Using Primary Color

1. **Primary Button** (`bg-primary`)
   - Orange background #FF6000
   - White text
   
2. **Outline Button** (`border-primary`, `text-primary`, `hover:bg-primary`)
   - Orange border and text
   - Hover: Orange background
   
3. **Arrow Buttons** (`bg-primary`, `text-primary`)
   - Various primary/white combinations

4. **Scarcity Banner**
   - `bg-[#FF6000]` - Direct hex value ✅
   
5. **Scarcity CTA Tag**
   - `text-[#FF6000]` - Direct hex value ✅

### Hardcoded vs CSS Variable

**CSS Variable Usage (Recommended):**
- Use `bg-primary`, `text-primary`, `border-primary` classes
- Pulls from `--primary` CSS variable
- Ensures consistency

**Direct Hex Usage:**
- `bg-[#FF6000]`, `text-[#FF6000]`
- Also correct but bypasses CSS variables
- Used in scarcity components for explicit control

Both approaches now use the same color value.

## Typography Matching

### Primary Button Typography:
- Font: IBM Plex Mono (`font-mono`)
- Size: 16px (`text-base`)
- Weight: 400 (`font-normal`)
- Transform: `uppercase`
- Letter spacing: Default (no tracking-wide)

### Scarcity Components Now Match:
✅ **Banner:** `font-mono text-base uppercase font-normal`
✅ **CTA Tag:** `font-mono text-base uppercase font-normal`

**Changes Made:**
- Removed `tracking-wide` (was making text look heavier)
- Changed padding to match button (`px-3 py-3`)
- Changed border radius to match button (`rounded-[5px]`)
- CTA Tag: Changed from `inline-flex` to `inline-block` (width fits text)

## Verification Complete ✅

All orange colors across the site now consistently use #FF6000:
- Buttons use `bg-primary` → HSL(23, 100%, 50%) → #FF6000
- Scarcity components use `#FF6000` directly
- All match primary button typography exactly






