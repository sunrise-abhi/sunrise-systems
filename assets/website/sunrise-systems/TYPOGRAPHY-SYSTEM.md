# Typography System - Complete Reference

**Last Updated:** October 28, 2025  
**Status:** Production-ready  

## Overview
This is the complete typography, color, and styling system for the Sunrise Systems website. This single document consolidates all typography-related specifications, button styles, header/footer configuration, and implementation guidelines.

## Color System

### Page Background
- **Page Background**: `#FFFFFF` (white)
- **Section Backgrounds**: `#FFFFFF` (white) or `#FBFBFB` (off-white)

### Text Colors
- **Primary Text**: `#111111` (almost black)
- **Medium Gray**: `#666666` (testimonial quotes)
- **Light Gray**: `#999999` (author titles, subtle labels)
- **Accent**: `#FF6000` (orange) - used for primary buttons

## Typography Styles

### Headings (H1-H4)
**Font**: DM Sans Semibold (600 weight)
**Color**: `#111111`

| Element | Size | Line Height | Letter Spacing | Usage |
|---------|------|-------------|----------------|-------|
| H1 | 4.5rem (72px) | 1.111 (80px = 10×8) | -2px | Page titles, hero headlines |
| H2 | 3.5rem (56px) | 1.143 (64px = 8×8) | -2px | Section titles |
| H3 | 2.5rem (40px) | 1.2 (48px = 6×8) | -1px | Sub-section titles, case study card headlines |
| H4 | 2rem (32px) | 1.5 (48px = 6×8) | -0.5px | Metric values, smaller headings |

**Usage in Code**:
```tsx
<h1>Main Headline</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Card Title</h4>
```

### Body Styles

**3-Tier Body System**: Body copy uses 24px (primary), 20px (supporting), or 16px (labels only), all aligned to 8px baseline grid.

**Standardized Colors (3 shades):**
- **#111111** (Almost Black) - Primary content, descriptions, subheads
- **#666666** (Medium Gray) - Testimonial quotes only
- **#999999** (Light Gray) - Labels, subtle metadata

#### Body 1
**Font**: Inter Regular (400 weight)
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
**Color**: `#666666` (medium gray)
**Line Height**: 1.5 (36px = 4.5×8 baseline)

**Usage**: Testimonial quotes only - softer, more natural look while remaining readable

```tsx
<blockquote className="body-2">"{testimonial.quote}"</blockquote>
```

#### Body 3
**Font**: Inter Regular (400 weight)
**Size**: 20px (1.25rem)
**Color**: `#111111`
**Line Height**: 1.6 (32px = 4×8 baseline)

**Usage**: Supporting copy including author names, bullet points, benefit lists - less prominent than primary 24px content

```tsx
<p className="body-3">{authorName}</p>
<ul>
  <li className="body-3">{benefitText}</li>
</ul>
```

#### Default Paragraph (No Class)
**Font**: Inter Regular (400 weight)
**Size**: 24px (1.5rem)
**Color**: `#111111` (dark)
**Line Height**: 1.5 (36px = 4.5×8 baseline)

**Usage**: All standard body copy - same as Body 1

**When to use plain `<p>` vs `body-1` vs `body-2` vs `body-3`:**
- Plain `<p>` and `body-1` are identical (24px dark) - use interchangeably for primary content
- Use `body-2` only for testimonial quotes (24px #666)
- Use `body-3` for supporting copy that needs less visual weight (20px dark)

```tsx
{/* Primary body copy - both are equivalent */}
<p className="mb-4">{description}</p>
<p className="body-1 mb-4">{description}</p>

{/* Testimonial quotes */}
<blockquote className="body-2">"{quote}"</blockquote>

{/* Supporting copy - author names, bullets, etc. */}
<p className="body-3">{authorName}</p>
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

**Complete Type Scale (7 Styles):**

1. **H1 (72px)**: Page/hero headlines (1 per page)
2. **H2 (56px)**: Major section titles
3. **H3 (40px)**: Subsection titles, case study card headlines
4. **H4 (32px)**: Metric values, smaller headings
5. **Body 1 (24px)**: Primary content - subheadlines, descriptions, paragraphs (dark #111, regular weight)
6. **Body 2 (24px)**: Testimonial quotes only (medium gray #666, regular weight)
7. **Body 3 (20px)**: Supporting copy - author names, bullets, benefits (dark #111, regular weight)
8. **Accent (16px)**: Labels, tags, eyebrows (dark #111 or gray #999, uppercase, monospace)

**Visual Differentiation:** Size, color (dark vs medium gray vs light gray), and position create hierarchy. All body text uses regular (400) weight for a clean, readable appearance.

**Note:** All type sizes and line-heights align to the 8px baseline grid for consistent vertical rhythm.

### Color Usage
- **#111111**: Default for headings, primary body text (Body 1, Body 3), labels
- **#666666**: Testimonial quotes (Body 2) - softer, more believable
- **#999999**: Author titles, subtle labels (use with accent class)
- **#FF6000**: Buttons, links, and interactive elements

### Consistency Rules
- **Primary body copy is 24px** (Body 1), **supporting copy is 20px** (Body 3)
- Use medium gray (#666666) only for testimonial quotes (body-2)
- Use light gray (#999999) only for author titles and subtle labels
- All headings must use DM Sans (72px, 56px, 40px, 32px)
- All body copy must use Inter (24px or 20px)
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
      <p>{featureDescription}</p>
    </div>
  </div>
</section>
```

### Example: Testimonial Component
```tsx
<div className="testimonial">
  {/* Logo */}
  {logo && <Media resource={logo} className="mb-6 h-12" />}
  
  {/* Quote - 24px medium gray, regular weight */}
  <blockquote className="body-2 mb-8">
    &ldquo;{quote}&rdquo;
  </blockquote>
  
  {/* Author info */}
  <div className="flex items-center gap-4">
    {authorImage && <Media resource={authorImage} className="w-12 h-12 rounded-full" />}
    <div>
      {/* Author name - 20px dark, medium weight */}
      <p className="body-3 font-semibold">{authorName}</p>
      
      {/* Author title - 16px light gray, mono, uppercase */}
      <p className="accent text-[#999999]">{authorTitle}</p>
    </div>
  </div>
</div>
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

---

## Button System

### Primary Button (Call-to-Action)
**Visual Specs:**
- **Font**: IBM Plex Mono
- **Size**: 16pt (1rem / text-base)
- **Background**: #FF6000
- **Text**: White (#FFFFFF)
- **Border Radius**: 5px
- **Style**: UPPERCASE
- **Hover**: Background lightens (90% opacity)

**Usage:**
- Direct CTAs: "TRY IT RISK-FREE", "SCHEDULE A CALL"
- Form submit buttons
- Important primary actions

**Code:**
```tsx
<Button variant="default">TRY IT RISK-FREE</Button>
// or
className="inline-flex items-center justify-center h-10 px-6 py-3 rounded-[5px] text-base bg-primary text-white hover:bg-primary/90 font-mono uppercase transition-colors"
```

### Secondary Button (Outline/Navigation)
**Visual Specs:**
- **Font**: IBM Plex Mono
- **Size**: 16pt (1rem / text-base)
- **Border**: 1px solid #FF6000
- **Background**: Transparent
- **Text**: #FF6000
- **Border Radius**: 5px
- **Style**: UPPERCASE
- **Hover**: Fill with #FF6000, text becomes white

**Usage:**
- Navigation actions: "READ FULL CASE STUDY", "LEARN MORE"
- Supporting/secondary actions
- Less prominent CTAs

**Code:**
```tsx
<Button variant="outline">LEARN MORE</Button>
// or
className="inline-flex items-center justify-center h-10 px-6 py-3 rounded-[5px] text-base border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-mono uppercase transition-colors"
```

### Block Button Usage Patterns

**Primary Buttons (CTAs):**
- HeroBlock - Hero CTA button
- StatementBlock - Statement CTA button
- FormBlock - Submit buttons

**Secondary Buttons (Navigation):**
- CaseStudySummaryBlock - "Read full case study"
- ServiceSummaryBlock - "Learn more about..." (both detailed and card styles)

---

## Header & Footer Configuration

### Header Structure

**Layout:**
- **Position**: Sticky (stays visible while scrolling)
- **Background**: Semi-transparent white with blur (`bg-white/80 backdrop-blur-md`)
- **Border**: Subtle bottom border (`border-b border-border/20`)
- **Z-index**: 50 (stays above page content)

**Navigation Items:**
1. Services - Regular link (hover: text changes to orange)
2. Case Studies - Regular link (hover: text changes to orange)
3. About - Regular link (hover: text changes to orange)
4. **TRY IT RISK-FREE** - Primary button

**Spacing:** `gap-6` between nav items

**CSS Classes:**
```tsx
// Header
className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/20"

// Nav container
className="flex gap-6 items-center"

// Regular links
className="hover:text-primary transition-colors"
```

### Footer Structure

**Layout:**
- **Background**: White (`bg-white`)
- **Border**: Top border (`border-t border-border`)
- **Padding**: `py-8`

**Navigation Links:**
1. Services - Regular link
2. Case Studies - Regular link
3. About - Regular link
4. Try it risk-free - Regular link (lowercase in footer)

**Spacing:** `gap-4` between items

**Removed Features:**
- ❌ Theme selector component
- ❌ Dark mode toggle
- ❌ Admin/Source Code/Payload links

**Responsive Behavior:**
- Mobile: Logo and nav stacked vertically (`flex-col`)
- Desktop: Logo left, nav right (`md:flex-row md:justify-between`)

---

## Logo Configuration

### Sunrise Systems Logo
- **File**: `sunrisesystemsstackedlogo.svg`
- **Location**: `/public/media/`
- **Alt text**: "Sunrise Systems"
- **Dimensions**: 150x60
- **Usage**: Both header and footer
- **Note**: No dark mode invert classes applied

**Component:**
```tsx
<Logo />
// Located at: src/components/Logo/Logo.tsx
```

---

## Calendly Integration

### Contact Page Implementation
- **Block Used**: CalendlyBlock
- **URL**: `https://calendly.com/jason-sunrisesystems/meet-and-greet`
- **Min Height**: 700px
- **Background**: Selectable (white/off-white)
- **Purpose**: Replaces traditional contact form

**Files:**
- `src/blocks/CalendlyBlock/config.ts` - Block configuration
- `src/blocks/CalendlyBlock/Component.tsx` - Embed component
- Registered in `RenderBlocks.tsx` and `Pages/index.ts`

---

## Implementation Files Reference

### Core Configuration (3 files)
1. `src/app/(frontend)/layout.tsx` - Font imports (DM Sans, Inter, IBM Plex Mono)
2. `src/app/(frontend)/globals.css` - Typography system, colors, page background
3. `tailwind.config.mjs` - Font families, colors, typography plugin

### Components (5 files)
4. `src/components/ui/button.tsx` - Primary/secondary button styles
5. `src/components/Link/index.tsx` - Link rendering logic
6. `src/components/Logo/Logo.tsx` - Sunrise Systems logo
7. `src/Header/Component.client.tsx` - Sticky header with transparency
8. `src/Header/Nav/index.tsx` - Navigation gap spacing
9. `src/Footer/Component.tsx` - Footer without theme selector

### Block Configs (17 files)
All block config files have `backgroundColor` field supporting white/off-white selection

### Block Components (17 files)
All block component files apply typography system and background colors consistently

---

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
- ✅ CalendlyBlock
- ✅ All other blocks (16 total with background color support)

---

## Testing Checklist

### Typography Tests
- [ ] Verify white page background (#FFFFFF)
- [ ] Check all headings are #111111 (72px, 56px, 40px, 32px)
- [ ] Confirm Body 1 (24px, #111) for primary content
- [ ] Confirm Body 2 (24px, #666) for testimonial quotes
- [ ] Confirm Body 3 (20px, #111) for supporting copy
- [ ] Verify Accent text (16px, uppercase, mono) for labels
- [ ] Test author titles use accent with #999 gray
- [ ] Verify font loading (DM Sans, Inter, IBM Plex Mono)
- [ ] Verify all line-heights align to 8px baseline grid

### Button Tests
- [ ] Primary buttons: Orange background, white uppercase text, 16pt
- [ ] Secondary buttons: Orange border, orange uppercase text, 16pt
- [ ] Hover states work correctly for both variants
- [ ] Border radius is 5px on all buttons
- [ ] CTAs use primary style, navigation uses secondary style

### Header Tests
- [ ] Sticky behavior on scroll
- [ ] Transparent background with blur effect
- [ ] 3 regular links + 1 primary button
- [ ] Button says "TRY IT RISK-FREE"
- [ ] Links hover to orange color
- [ ] Logo displays correctly (150x60)
- [ ] Gap spacing is consistent (gap-6)

### Footer Tests
- [ ] 4 navigation links present
- [ ] No theme selector visible
- [ ] Links match header structure
- [ ] Logo displays correctly
- [ ] Responsive layout works (stacked mobile, horizontal desktop)

### Block Tests
- [ ] All blocks use standard typography classes only
- [ ] Background colors selectable (white/off-white)
- [ ] No custom text sizes outside typography system
- [ ] Consistent spacing throughout (8px multiples)
- [ ] Calendly embed loads correctly on contact page

### Browser Tests
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

## Quick Reference Summary

### Typography Classes
```tsx
<h1>Main Headline</h1>                    // 4rem, DM Sans, #111111
<h2>Section Title</h2>                    // 3rem, DM Sans, #111111
<h3>Subsection</h3>                       // 2.5rem, DM Sans, #111111
<h4>Card Title</h4>                       // 2rem, DM Sans, #111111
<p className="body-1">Primary text</p>    // 1.5rem, Inter, #111111
<p className="body-2">Testimonial</p>     // 1.5rem, Inter, #666666
<p className="body-3">Supporting</p>      // 1.25rem, Inter, #111111
<p className="accent">LABEL</p>           // 1rem, IBM Plex Mono, UPPERCASE
```

### Button Usage
```tsx
// Primary CTA
<Button variant="default">TRY IT RISK-FREE</Button>

// Secondary Navigation
<Button variant="outline">LEARN MORE</Button>
```

### Background Classes
```tsx
<Section backgroundColor="white">...</Section>
<Section backgroundColor="offwhite">...</Section>
```

---

## Design System Compliance

✅ **Typography**: DM Sans (headings), Inter (body), IBM Plex Mono (buttons/accent)  
✅ **Colors**: #FF6000 (primary), #111111 (text), #999999/#666666 (secondary)  
✅ **Backgrounds**: White pages, white/off-white sections  
✅ **Buttons**: Primary (orange fill) and Secondary (orange outline) with uppercase labels  
✅ **Header**: Sticky, transparent, 3 links + 1 button  
✅ **Footer**: Matches header, no theme selector  
✅ **Logo**: Sunrise Systems stacked logo (150x60)  
✅ **Contact**: Calendly embed  
✅ **Border Radius**: 5px throughout  
✅ **Spacing**: 8px baseline grid throughout  
✅ **Dark Mode**: Removed (light theme only)

---

**Last Updated:** October 28, 2025  
**Maintained By:** Sunrise Systems Development Team  
**Status:** Production-ready - All components fully implemented




