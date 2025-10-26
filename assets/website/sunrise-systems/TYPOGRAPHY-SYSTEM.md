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
| H1 | 3rem (48px) | 1.2 | Page titles, hero headlines |
| H2 | 2.25rem (36px) | 1.3 | Section titles |
| H3 | 1.875rem (30px) | 1.3 | Sub-section titles |
| H4 | 1.5rem (24px) | 1.4 | Card titles, smaller headings |

**Usage in Code**:
```tsx
<h1>Main Headline</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Card Title</h4>
```

### Body Styles

#### Body 1
**Font**: Inter Medium (500 weight)
**Size**: 24px
**Color**: `#111111`
**Line Height**: 1.5

**Usage**: Primary body copy, large paragraphs, featured content, **block subheadlines**

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
**Size**: 16px
**Color**: `#999999` (light gray)
**Line Height**: 1.5

**Usage**: Secondary text, de-emphasized descriptions, subtle captions

```tsx
<p className="body-2">This is secondary/de-emphasized text</p>
```

#### Default Paragraph (No Class)
**Font**: Inter Medium (500 weight)
**Size**: 16px
**Color**: `#111111` (dark)
**Line Height**: 1.5

**Usage**: Standard body copy in cards, feature descriptions, process steps, service excerpts, benefits

**When to use plain `<p>` vs `body-2`:**
- Use plain `<p>` for primary readable content (darker, more prominent)
- Use `body-2` only when you want lighter, de-emphasized text

```tsx
{/* Darker, primary 16px copy */}
<p className="mb-4">{description}</p>

{/* Lighter, secondary 16px copy */}
<p className="body-2">{caption}</p>
```

**Used in**: ServicesCollectionBlock (excerpt & benefits), FeatureGridBlock (descriptions), ProcessBlock (step descriptions), CaseStudyPreviewBlock (subheadlines)

### Accent Text
**Font**: IBM Plex Mono (400 weight)
**Size**: 12px
**Color**: `#111111`
**Line Height**: 1.5
**Letter Spacing**: 0.05em
**Text Transform**: Uppercase

**Usage**: Labels, tags, eyebrows, small indicators

```tsx
<p className="accent">Featured Label</p>
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
1. Use H1 for page/hero headlines (1 per page)
2. Use H2 for major section titles
3. Use H3 for subsection titles
4. Use H4 for card titles and smaller headings
5. Use Body 1 for primary content
6. Use Body 2 for supporting/secondary content
7. Use Accent for labels and tags

### Color Usage
- **#111111**: Default for headings, primary body text, accent text
- **#999999**: Only for Body 2 (secondary content)
- **#FF6000**: Buttons, links, and interactive elements

### Consistency Rules
- Never use gray text colors except Body 2 (#999999)
- Never use white text on white backgrounds
- All headings must use DM Sans
- All body copy must use Inter
- All buttons and labels must use IBM Plex Mono
- Maintain consistent spacing (mb-4, mb-6, mb-8, mb-12)

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




