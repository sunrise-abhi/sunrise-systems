# Design Build Expo 2025 - Implementation Summary

## What Was Created

### 1. VSL Script
**Location:** `/assets/offers/design-build-expo-2025-vsl-script.md`

Complete 2-minute video script following the 6 Figure Promotions Flow of Logic structure:
- TL;DW section (15-20s)
- Opening/Lead (20-25s)
- Understanding their world (15s)
- Delta case study (20s)
- America 9 case study (15s)
- Growth Architecture explanation (20s)
- USP reinforcement (10s)
- CTA (15s)

**Total Runtime:** 2:00-2:20

**Key Features:**
- Casual, conversational tone
- Results-focused without being salesy
- Genuine and likeable approach
- Low-pressure CTA

---

### 2. Presentation Page Seed Script
**Location:** `/src/endpoints/seed/page-dbia-2025-presentation.ts`

A 10-section presentation page based on the VSL script, ready to be imported into Payload CMS.

**Page Slug:** `design-build-expo-2025`

**Structure:**

#### Slide 1: TL;DW Quick Overview
- **Block Type:** heroBlock
- **Content:** Full quick version with Delta and America 9 results
- **Purpose:** Respect viewer time, deliver all key info immediately

#### Slide 2: Who We Are
- **Block Type:** statementBlock
- **Headline:** "We're Sunrise Systems"
- **Content:** Introduction to who we are and why we're at the conference
- **Background:** Off-white
- **Padding:** XL top/bottom

#### Slide 3: Three Teams, One Mission
- **Block Type:** statementBlock
- **Headline:** "Three teams, one mission"
- **Content:** USP introduction - sales, marketing, software working together
- **Background:** White
- **Padding:** XL top/bottom

#### Slide 4: The Challenge
- **Block Type:** statementBlock
- **Headline:** "Growth in commercial construction is difficult"
- **Content:** Acknowledges uncertainty and scaling challenges
- **Background:** Off-white
- **Padding:** XL top/bottom

#### Slide 5: Delta Results - Numbers
- **Block Type:** statsRowBlock
- **Stats:**
  - $10,675 | Investment over 8 months
  - $550K | Closed revenue
  - $15M | Active pipeline
  - 1,457:1 | Pipeline ROI
- **Background:** White
- **Padding:** XL top, MD bottom

#### Slide 6: Delta Story - Context
- **Block Type:** statementBlock
- **Headline:** "Delta: 50-year-old design-build company"
- **Content:** Full story with context around the numbers
- **Background:** White
- **Padding:** MD top, XL bottom

#### Slide 7: America 9 Results
- **Block Type:** statementBlock
- **Headline:** "America 9: Another design-build firm"
- **Content:** $10,200 → $6.5M pipeline in 90 days, 637:1 multiple
- **Background:** Off-white
- **Padding:** XL top/bottom

#### Slide 8: Growth Architecture Introduction
- **Block Type:** statementBlock
- **Headline:** "How do we do it? Growth Architecture."
- **Content:** "It's the strategy we build for each client across three teams."
- **Background:** White
- **Padding:** XL top, LG bottom

#### Slide 9: The Three Teams
- **Block Type:** featureGridBlock
- **Headline:** "Sales, Marketing, and Software working as one"
- **Columns:** 3
- **Features:**
  - **Sales:** Systematic outreach to developers, architects, owners
  - **Marketing:** Upgrades digital presence and content systems
  - **Software:** Custom tools for operational edge
- **Subhead:** "It's not three separate services—it's one integrated strategy designed to make growth predictable."
- **Background:** White
- **Padding:** MD top, XL bottom

#### Slide 10: USP + CTA
- **Block Type:** cta (CallToActionBlock)
- **Headline:** "We're the only growth partner with all three teams"
- **Subhead:** Full invitation text with low-pressure approach
- **CTA Button:** "Book a Strategy Session" → `/contact`
- **Background:** Off-white
- **Padding:** XL top/bottom

---

## How to Use the Presentation Page

### Option 1: Import via Payload CMS API

```typescript
import payload from 'payload'
import { pageDBIA2025Presentation } from './src/endpoints/seed/page-dbia-2025-presentation'

const page = await payload.create({
  collection: 'pages',
  data: pageDBIA2025Presentation(),
})
```

### Option 2: Manual Import
1. Copy the page data structure from the seed script
2. Create a new page in the Payload CMS admin panel
3. Manually recreate each section/block

### Accessing the Page
Once created, the page will be available at:
- **URL:** `https://yourdomain.com/design-build-expo-2025`
- **Slug:** `design-build-expo-2025`

---

## Design Notes

### Visual Hierarchy
- Alternating white/off-white backgrounds for visual separation
- Extra-large padding (XL) between most sections to create distinct "slides"
- Centered alignment on all statement blocks for presentation feel

### Responsive Considerations
- All blocks are responsive by default
- Stats row adapts to mobile layouts
- Feature grid stacks on smaller screens
- No content is hidden on mobile (hideOnMobile: false for all blocks)

### Typography
- Headlines use the site's standard heading styles
- Statement blocks provide visual emphasis
- Stats row creates high-impact number displays

---

## VSL to Presentation Mapping

| VSL Section | Presentation Slide | Block Type | Duration |
|-------------|-------------------|------------|----------|
| TL;DW | Slide 1 | heroBlock | 15-20s |
| Opening/Lead | Slides 2-3 | statementBlock | 20-25s |
| Selling Point 1 (Challenge) | Slide 4 | statementBlock | 15s |
| Selling Point 2 (Delta) | Slides 5-6 | statsRowBlock + statementBlock | 20s |
| Selling Point 3 (America 9) | Slide 7 | statementBlock | 15s |
| Selling Point 4 (Growth Architecture) | Slides 8-9 | statementBlock + featureGridBlock | 20s |
| Selling Point 5 (USP) + CTA | Slide 10 | cta | 25s |

**Total:** 10 slides covering ~2:15 minutes of content

---

## Marketing Elements Used

All core marketing elements from the VSL strategy are incorporated:

✅ **BIG IDEA:** Growth engineered (implicit throughout)  
✅ **BIG PROBLEM:** Uncertainty (Slide 4)  
✅ **BIG PROMISE:** Predictable, sustainable growth (Slides 1, 3, 9, 10)  
✅ **USP:** Three teams, one mission (Slides 3, 9, 10)  
✅ **UNIQUE MECHANISM:** Growth Architecture (Slides 8-9)  
✅ **PROOF:** Delta & America 9 case studies (Slides 5-7)  
✅ **IRRESISTIBLE OFFER:** 15-minute strategy session (Slide 10)

---

## Next Steps

### For Video Production
1. Use the VSL script (`design-build-expo-2025-vsl-script.md`) for narration
2. Create visual slides based on the presentation page structure
3. Follow the delivery notes in the VSL script for tone and pacing

### For Web Deployment
1. Import the seed script into your Payload CMS
2. Review the generated page
3. Add any custom styling or adjustments needed
4. Publish the page before the conference

### For Conference Use
1. The presentation page can be displayed during the VSL recording
2. Share the URL with conference attendees afterward
3. Use as a standalone presentation if needed
4. Link from conference materials and email follow-ups

---

## Files Created

1. `/assets/offers/design-build-expo-2025-vsl-script.md` - Complete 2-minute VSL script
2. `/src/endpoints/seed/page-dbia-2025-presentation.ts` - Payload CMS page seed script
3. `/src/endpoints/seed/README.md` - Documentation for seed scripts
4. `/assets/offers/design-build-expo-2025-implementation-summary.md` - This file

---

## Technical Details

### Page Settings
- **Title:** Design Build Expo 2025 - Sunrise Systems
- **Slug:** design-build-expo-2025
- **Hero Type:** none (starts directly with content)
- **Status:** published
- **Publish Date:** 2025-01-15
- **Meta Title:** Sunrise Systems at Design Build Expo 2025
- **Meta Description:** Learn how Sunrise Systems helps design-build firms achieve predictable growth through integrated sales, marketing, and software teams. Delta: $10,675 → $15M pipeline. America 9: $10,200 → $6.5M pipeline.

### Block Breakdown
- **1 heroBlock** (TL;DW opener)
- **5 statementBlocks** (narrative sections)
- **1 statsRowBlock** (Delta numbers)
- **1 featureGridBlock** (three teams)
- **1 cta block** (final conversion)

**Total:** 9 content blocks forming 10 distinct presentation sections

---

## Customization Options

If you want to modify the presentation:

### Add Speaker Notes
Add a `blockId` to each section and use it for navigation:
```typescript
blockId: 'slide-1-tldr'
```

### Adjust Timing/Pacing
Modify padding values:
- `xs` (32px) - Tight spacing
- `sm` (48px) - Compact
- `md` (64px) - Standard
- `lg` (96px) - Generous
- `xl` (128px) - Extra generous (current)
- `xxl` (160px) - Maximum spacing

### Change Visual Flow
Swap background colors between sections for different rhythm:
```typescript
backgroundColor: 'white' // or 'offwhite'
```

### Add Images
The featureGridBlock supports images:
```typescript
features: [
  {
    image: 'media-id-here', // Add media ID
    title: 'Sales',
    description: '...'
  }
]
```

