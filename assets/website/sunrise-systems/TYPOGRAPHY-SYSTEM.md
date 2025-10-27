# Typography System Documentation

## Overview
This document outlines the complete typography system for the Sunrise Systems Payload site.

## Color System

### Page Background
- **Page Background**: `#FFFFFF` (white)
- **Section Backgrounds**: `#FFFFFF` (white) or `#FBFBFB` (off-white)

### Text Colors
- **Primary Text**: `#111111` (almost black)
- **Secondary Text**: `#999999` (gray)
- **Accent**: `#FF6000` (orange) - used for primary buttons

## Typography Styles

### Headings (H1-H4)
**Font**: DM Sans Semibold (600 weight)
**Color**: `#111111`

| Element | Size | Line Height | Usage |
|---------|------|-------------|-------|
| H1 | 4.5rem (72px) | 1.111 (80px = 10×8) | Page titles, hero headlines |
| H2 | 3.5rem (56px) | 1.143 (64px = 8×8) | Section titles |
| H3 | 2.5rem (40px) | 1.2 (48px = 6×8) | Sub-section titles, case study card headlines |
| H4 | 2rem (32px) | 1.5 (48px = 6×8) | Metric values, smaller headings |

**Usage in Code**:
```tsx
<h1>Main Headline</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Card Title</h4>
```

### Body Styles

**Simplified 2-Size System**: All body copy uses either 24px (primary content) or 16px (labels/accents only), aligned to 8px baseline grid.

#### Body 1
**Font**: Inter Medium (500 weight)
**Size**: 24px (1.5rem)
**Color**: `#111111`
**Line Height**: 1.5 (36px = 4.5×8 baseline)

**Usage**: All primary body content including subheadlines, card descriptions, paragraph copy, feature descriptions

**Common Pattern - Block Subheadlines**:
```tsx
{headline && <h2 className="mb-4 text-center">{headline}</h2>}
{subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}
```

**Standard Subheadline Classes**: `mb-12 text-center body-1 max-w-3xl mx-auto`
- Used in: ServicesCollectionBlock, FeatureGridBlock, ProcessBlock, CaseStudyCarouselBlock
- Creates consistent spacing and centering for introductory text below section headlines

**General Body Copy**:
```tsx
<p className="body-1">This is primary body text</p>
```

#### Body 2
**Font**: Inter Regular (400 weight)
**Size**: 24px (1.5rem)
**Color**: `#999999` (light gray)
**Line Height**: 1.5 (36px = 4.5×8 baseline)

**Usage**: Testimonial quotes only - larger size increases impact while gray color keeps them subtle and believable

```tsx
<blockquote className="body-2">"{testimonial.quote}"</blockquote>
```

#### Default Paragraph (No Class)
**Font**: Inter Medium (500 weight)
**Size**: 24px (1.5rem)
**Color**: `#111111` (dark)
**Line Height**: 1.5 (36px = 4.5×8 baseline)

**Usage**: All standard body copy - same as Body 1

**When to use plain `<p>` vs `body-1` vs `body-2`:**
- Plain `<p>` and `body-1` are identical (24px dark) - use interchangeably
- Use `body-2` only for testimonial quotes (24px gray)

```tsx
{/* Primary body copy - both are equivalent */}
<p className="mb-4">{description}</p>
<p className="body-1 mb-4">{description}</p>

{/* Testimonial quotes only */}
<blockquote className="body-2">"{quote}"</blockquote>
```

### Accent Text
**Font**: IBM Plex Mono (400 weight)
**Size**: 16px (1rem)
**Color**: `#111111`
**Line Height**: 1.5 (24px = 3×8 baseline)
**Letter Spacing**: 0.05em
**Text Transform**: Uppercase

**Usage**: Labels, tags, eyebrows, metric labels (e.g., "PIPELINE", "BID INVITES"), author titles

```tsx
<p className="accent">Pipeline</p>
<p className="accent text-sm">Author Title</p>
```

## Button Typography
**Font**: IBM Plex Mono
**Background**: `#FF6000`
**Text Color**: `#FFFFFF`
**Border Radius**: 5px

```tsx
<button className="bg-primary text-white font-mono rounded-[5px] px-6 py-3">
  Button Text
</button>
```

## Implementation

### Global Styles
All typography is defined in `src/app/(frontend)/globals.css`:
- Base HTML/body background and text colors
- Heading defaults (h1-h4)
- Component classes (.body-1, .body-2, .accent)
- Paragraph defaults

### Tailwind Configuration
Typography utilities in `tailwind.config.mjs`:
- Font families (heading, body, mono)
- Typography plugin configuration
- Safelisted classes

### Font Loading
Fonts loaded in `src/app/(frontend)/layout.tsx`:
```tsx
import { DM_Sans, Inter, IBM_Plex_Mono } from 'next/font/google'

const dmSans = DM_Sans({ weight: '600', ... })
const inter = Inter({ weight: '500', ... })
const ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], ... })
```

## Design Guidelines

### Hierarchy

**Simplified Type Scale (6 Styles Total):**

1. **H1 (72px)**: Page/hero headlines (1 per page)
2. **H2 (56px)**: Major section titles
3. **H3 (40px)**: Subsection titles, case study card headlines
4. **H4 (32px)**: Metric values, smaller headings
5. **Body (24px)**: All body copy - subheadlines, descriptions, paragraphs
   - Body 1: Dark (#111) for primary content
   - Body 2: Gray (#999) for testimonial quotes only
6. **Accent (16px)**: Labels, tags, eyebrows (uppercase, monospace)

**Visual Differentiation:** Color (dark vs gray), weight (medium vs regular), and position create hierarchy - not size alone.

**Note:** All type sizes and line-heights align to the 8px baseline grid for consistent vertical rhythm.

### Color Usage
- **#111111**: Default for headings, primary body text, accent text
- **#999999**: Only for Body 2 (secondary content)
- **#FF6000**: Buttons, links, and interactive elements

### Consistency Rules
- **Body copy is always 24px** - no 16px or 20px body text (except accent labels)
- Use gray (#999999) only for testimonial quotes (body-2)
- All headings must use DM Sans (72px, 56px, 40px, 32px)
- All body copy must use Inter (24px)
- All labels and accents must use IBM Plex Mono (16px, uppercase)
- Maintain 8px baseline spacing (mb-4, mb-8, mb-12, py-16, etc.)
- Never use arbitrary spacing values that break the 8px grid

## Block Component Usage

### Example: Hero Block
```tsx
<section className="relative bg-white">
  <p className="accent mb-4">{eyebrow}</p>
  <h1 className="mb-6">{headline}</h1>
  <p className="body-1 mb-8">{subheadline}</p>
  <button className="bg-primary text-white font-mono rounded-[5px]">
    {ctaLabel}
  </button>
</section>
```

### Example: Feature Grid with Subheadline
```tsx
<section className="py-16 bg-white">
  <h2 className="mb-4 text-center">{headline}</h2>
  {subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}
  <div className="grid">
    <div className="text-center">
      <h3 className="mb-2">{featureTitle}</h3>
      <p className="body-2">{featureDescription}</p>
    </div>
  </div>
</section>
```

### Example: Services/Case Study Collection Blocks
```tsx
<section className="py-16 bg-white">
  <h2 className="mb-4 text-center">{headline}</h2>
  {subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}
  <Grid cols={12}>
    {/* Card content */}
  </Grid>
</section>
```

### Example: Case Study Preview & Carousel Blocks
```tsx
<section className="py-16 bg-white">
  {/* Section-level headline */}
  <h2 className="mb-4 text-center">{headline}</h2>
  {subhead && <p className="mb-12 text-center body-1 max-w-3xl mx-auto">{subhead}</p>}
  
  {/* Individual case study card */}
  <div className="case-study-card">
    {/* Case study headline */}
    <h3 className="mb-4">{caseStudy.headline}</h3>
    <p className="mb-8">{caseStudy.subheadline}</p>
    
    {/* Key metrics */}
    <div className="metrics">
      <h4 className="mb-2">{metricValue}</h4>
      <p className="accent text-sm">{metricLabel}</p>
    </div>
  </div>
</section>
```

**Heading Hierarchy for Case Study Blocks:**
- **H2 (56px)**: Section-level headline (e.g., "Our Work", "Case Studies")
- **H3 (40px)**: Individual case study headline within each card
- **H4 (32px)**: Key metric values (pipeline generated, ROI, relationships, etc.)

This maintains proper semantic hierarchy (56px → 40px → 32px) where the block's main headline is H2, each case study card uses H3, and metrics within cards use H4. All sizes align to the 8px baseline grid.

## Migration Notes

All blocks have been updated to use this typography system:
- ✅ HeroBlock
- ✅ StatementBlock
- ✅ FeatureGridBlock
- ✅ ProcessBlock
- ✅ StatsRowBlock
- ✅ TestimonialBlock
- ✅ LogoStripBlock
- ✅ CaseStudySummaryBlock
- ✅ ServiceSummaryBlock
- ✅ All other blocks

## Testing Checklist

- [ ] Verify white page background
- [ ] Check all headings are #111111
- [ ] Confirm Body 1 (24px) for primary content
- [ ] Confirm Body 2 (16px, #999999) for secondary content
- [ ] Verify Accent text (12px, uppercase) for labels
- [ ] Test button styling (orange bg, white text, IBM Plex Mono)
- [ ] Check responsive behavior
- [ ] Verify font loading
- [ ] Test dark mode (if applicable)




