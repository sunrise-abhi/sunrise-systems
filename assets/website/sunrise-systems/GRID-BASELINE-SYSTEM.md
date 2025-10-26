# Grid and Baseline Layout System

## Overview
This document defines the responsive grid system and baseline rhythm for the Sunrise Systems marketing website. The system ensures consistent spacing, layout predictability, and visual harmony across all pages and components.

---

## Core Principles

1. **8px Baseline Rhythm**: All vertical spacing follows multiples of 8px
2. **12-Column Responsive Grid**: Adapts from 4 columns (mobile) → 8 columns (tablet) → 12 columns (desktop)
3. **Consistent Container Widths**: Max-width of 1376px (2xl breakpoint) with responsive gutters
4. **Component-Based Layout**: Reusable `<Section>`, `<Container>`, and `<Grid>` components enforce consistency

---

## Baseline Rhythm System

### Baseline Unit: 8px

All vertical spacing (padding, margins, gaps) uses multiples of 8px to create a consistent vertical rhythm that aligns with typography line heights.

### Spacing Scale

| Token | Pixels | Baseline Units | Usage |
|-------|--------|----------------|-------|
| `space-2` | 8px | 1 | Tight spacing (icon-to-text) |
| `space-4` | 16px | 2 | Small gaps, tight margins |
| `space-6` | 24px | 3 | Standard paragraph spacing |
| `space-8` | 32px | 4 | Medium section gaps |
| `space-12` | 48px | 6 | Large section gaps |
| `space-16` | 64px | 8 | Section padding (py-16) |
| `space-24` | 96px | 12 | Hero bottom padding |
| `space-32` | 128px | 16 | Hero top padding |
| `space-40` | 160px | 20 | Large hero top padding |

### Baseline Guidelines

**Section Vertical Padding:**
- Standard sections: `py-16` (64px)
- Large sections: `py-24` (96px)
- Hero sections: `pt-32 pb-24` → `lg:pt-40 lg:pb-32`

**Heading Margins:**
- After small headings: `mb-4` (16px)
- Standard: `mb-6` (24px)
- After large headings: `mb-8` (32px)
- Section titles: `mb-12` (48px)

**Paragraph Spacing:**
- Standard: `mb-6` (24px)
- Large paragraphs: `mb-8` (32px)

**Card/Feature Padding:**
- Compact: `p-6` (24px)
- Standard: `p-8` (32px)

---

## 12-Column Grid System

### Breakpoint Configuration

| Breakpoint | Columns | Container Max-Width | Container Padding |
|------------|---------|---------------------|-------------------|
| Mobile (default) | 4 | 100% | 1rem (16px) |
| sm (640px+) | 4 | 640px | 1rem (16px) |
| md (768px+) | 8 | 768px | 2rem (32px) |
| lg (1024px+) | 12 | 1024px | 2rem (32px) |
| xl (1280px+) | 12 | 1280px | 2rem (32px) |
| 2xl (1376px+) | 12 | 1376px | 2rem (32px) |

### Common Column Patterns

| Layout | Mobile | Tablet | Desktop | Tailwind Classes |
|--------|--------|--------|---------|------------------|
| Full width | 4 | 8 | 12 | `col-span-4 md:col-span-8 lg:col-span-12` |
| Two equal columns | 4 each | 4 each | 6 each | `col-span-4 lg:col-span-6` |
| Three equal columns | 4 each | 4 each | 4 each | `col-span-4 lg:col-span-4` |
| Asymmetric 2:1 | 4/4 | 5/3 | 8/4 | `col-span-4 md:col-span-5 lg:col-span-8` + `col-span-4 md:col-span-3 lg:col-span-4` |
| Centered narrow | 4 | 6 (centered) | 8 (centered) | `col-span-4 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3` |

### Grid Gap Standards

| Gap Type | Tailwind Class | Pixels | Usage |
|----------|----------------|--------|-------|
| Tight | `gap-4` | 16px | Compact layouts |
| Standard | `gap-8` | 32px | General purpose |
| Wide | `gap-x-16 gap-y-8` | 64px horizontal, 32px vertical | Content columns with text |
| Card | `gap-[10px]` | 10px | Feature cards (tight grid) |

---

## Layout Components

### `<Section>` Component

Enforces consistent section padding and background colors.

**Location:** `/src/components/layout/Section.tsx`

**Props:**
- `spacing?: 'standard' | 'large' | 'hero'` (default: `'standard'`)
- `backgroundColor?: 'white' | 'offwhite'` (default: `'white'`)
- `className?: string`
- `children: React.ReactNode`

**Usage:**
```tsx
import { Section } from '@/components/layout'

<Section spacing="hero" backgroundColor="offwhite">
  {/* Content */}
</Section>
```

**Spacing Values:**
- `standard`: `py-16` (64px)
- `large`: `py-24` (96px)
- `hero`: `pt-32 pb-24 lg:pt-40 lg:pb-32`

---

### `<Container>` Component

Centralizes container logic with responsive max-widths and gutters.

**Location:** `/src/components/layout/Container.tsx`

**Props:**
- `className?: string`
- `children: React.ReactNode`

**Usage:**
```tsx
import { Container } from '@/components/layout'

<Container>
  {/* Content constrained to container width */}
</Container>
```

**Output:** Applies `container mx-auto` classes (Tailwind container utility)

---

### `<Grid>` Component

Sets up responsive grid with configurable columns and gaps.

**Location:** `/src/components/layout/Grid.tsx`

**Props:**
- `cols?: 2 | 3 | 4 | 12` (default: `12`)
- `gap?: 'tight' | 'standard' | 'wide' | 'card'` (default: `'standard'`)
- `className?: string`
- `children: React.ReactNode`

**Usage:**
```tsx
import { Grid } from '@/components/layout'

// 12-column layout
<Grid cols={12} gap="wide">
  <div className="col-span-4 lg:col-span-8">Main content</div>
  <div className="col-span-4 lg:col-span-4">Sidebar</div>
</Grid>

// 3-column feature grid
<Grid cols={3} gap="card">
  <div>Feature 1</div>
  <div>Feature 2</div>
  <div>Feature 3</div>
</Grid>
```

**Column Mappings:**
- `cols={2}`: `grid-cols-1 md:grid-cols-2`
- `cols={3}`: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `cols={4}`: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- `cols={12}`: `grid-cols-4 lg:grid-cols-12`

---

### `<Column>` Component (Optional)

Helper for responsive column spans (use when dynamic spans are needed).

**Location:** `/src/components/layout/Column.tsx`

**Props:**
- `span?: { mobile?: number; tablet?: number; desktop?: number }`
- `start?: { tablet?: number; desktop?: number }`
- `className?: string`
- `children: React.ReactNode`

**Usage:**
```tsx
import { Column } from '@/components/layout'

<Grid cols={12}>
  <Column span={{ mobile: 4, desktop: 8 }}>
    Wide column on desktop
  </Column>
  <Column span={{ mobile: 4, desktop: 4 }}>
    Narrow column on desktop
  </Column>
</Grid>
```

---

## Block Component Patterns

### Hero Block Pattern
```tsx
import { Section, Container } from '@/components/layout'

<Section spacing="hero" backgroundColor={backgroundColor} className="relative">
  <Container>
    <div className="max-w-4xl">
      <p className="accent mb-4">{eyebrow}</p>
      <h1 className="mb-6">{headline}</h1>
      <p className="body-1 mb-8">{subheadline}</p>
      {/* CTA button */}
    </div>
  </Container>
</Section>
```

### Content Block Pattern (12-column grid)
```tsx
import { Section, Container, Grid } from '@/components/layout'

<Section backgroundColor={backgroundColor}>
  <Container>
    <Grid cols={12} gap="wide">
      <div className="col-span-4 lg:col-span-6">
        Column 1
      </div>
      <div className="col-span-4 lg:col-span-6">
        Column 2
      </div>
    </Grid>
  </Container>
</Section>
```

### Feature Grid Pattern
```tsx
import { Section, Container } from '@/components/layout'

<Section backgroundColor={backgroundColor}>
  <Container>
    <h2 className="mb-12 text-center">{headline}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
      {features.map((feature) => (
        <div className="bg-card-bg rounded-[5px] p-6">
          {/* Feature content */}
        </div>
      ))}
    </div>
  </Container>
</Section>
```

### Stats Row Pattern
```tsx
import { Section, Container } from '@/components/layout'

<Section backgroundColor={backgroundColor}>
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div className="text-center">
          <h2 className="mb-2">{stat.value}</h2>
          <p className="accent">{stat.label}</p>
        </div>
      ))}
    </div>
  </Container>
</Section>
```

---

## Debug Tools

### Grid Overlay

**Keyboard Shortcut:** `Ctrl + Shift + G`

Displays a visual overlay of the 12-column grid to verify alignment during development.

**Component:** `/src/components/layout/GridDebug.tsx`

**Features:**
- Shows 12 columns on desktop, 4 on mobile
- Semi-transparent orange overlay
- Only visible in development mode
- Toggle on/off with keyboard shortcut

### Baseline Overlay

**Keyboard Shortcut:** `Ctrl + Shift + B`

Displays horizontal lines every 8px to verify baseline rhythm alignment.

**Component:** `/src/components/layout/BaselineDebug.tsx`

**Features:**
- Horizontal lines every 8px
- Semi-transparent orange lines
- Only visible in development mode
- Toggle on/off with keyboard shortcut

---

## Migration Checklist

When creating or updating block components:

- [ ] Import `Section`, `Container`, and/or `Grid` from `@/components/layout`
- [ ] Replace manual `<section>` tags with `<Section>` component
- [ ] Remove manual `py-16`, `bg-white`, `bg-offwhite` classes (handled by `<Section>`)
- [ ] Replace `container mx-auto px-6` with `<Container>` component
- [ ] Use `<Grid>` for responsive column layouts
- [ ] Ensure all vertical spacing uses 8px multiples (mb-4, mb-6, mb-8, mb-12, etc.)
- [ ] Verify layout at all breakpoints (375px, 768px, 1024px, 1280px, 1440px)

---

## Updated Blocks

The following blocks have been refactored to use the new layout system:

- ✅ **HeroBlock**: `<Section spacing="hero">` + `<Container>`
- ✅ **ContentBlock**: `<Section>` + `<Container>` + `<Grid cols={12}>`
- ✅ **FeatureGridBlock**: `<Section>` + `<Container>` + responsive grid
- ✅ **StatsRowBlock**: `<Section>` + `<Container>` + stats grid
- ✅ **ProcessBlock**: `<Section>` + `<Container>` + vertical steps
- ✅ **TestimonialBlock**: `<Section>` + `<Container>` + centered content
- ✅ **CallToAction**: `<Section>` + `<Container>` + custom inner card
- ✅ **StatementBlock**: `<Section>` + `<Container>` + centered/left-aligned content

---

## Best Practices

### DO:
- Use `<Section>`, `<Container>`, `<Grid>` components for consistency
- Follow 8px baseline rhythm for all vertical spacing
- Use established spacing tokens (mb-4, mb-6, mb-8, mb-12, py-16)
- Test layouts at all breakpoints
- Use debug overlays during development

### DON'T:
- Manually add section padding (`py-16`) when using `<Section>`
- Mix `px-6` with `<Container>` (container handles padding)
- Use arbitrary spacing values (e.g., `mb-5`, `py-13`)
- Create custom grid systems outside the established patterns
- Skip visual testing with debug overlays

---

## Typography Alignment with Baseline

The typography system is designed to work harmoniously with the 8px baseline:

| Element | Font Size | Line Height | Baseline Alignment |
|---------|-----------|-------------|-------------------|
| H1 | 64px | 1.2 (~77px) | ≈10 baseline units |
| H2 | 48px | 1.3 (~62px) | ≈8 baseline units |
| H3 | 28px | 1.3 (~36px) | 4.5 baseline units |
| H4 | 32px | 1.4 (~45px) | ≈6 baseline units |
| Body 1 | 24px | 1.5 (36px) | 4.5 baseline units |
| Body 2 | 16px | 1.5 (24px) | 3 baseline units |
| Accent | 16px | 1.5 (24px) | 3 baseline units |

For more details, see `TYPOGRAPHY-SYSTEM.md`.

---

## Testing Checklist

### Visual Validation
- [ ] Grid overlay shows correct columns at all breakpoints
- [ ] Baseline overlay aligns with text baselines
- [ ] All sections use consistent vertical padding
- [ ] Container max-width is 1376px on 2xl screens
- [ ] Container gutters are correct (1rem mobile, 2rem desktop)
- [ ] No visual jumps or inconsistent spacing between sections

### Component Validation
- [ ] All block components render correctly
- [ ] Grid layouts adapt properly at breakpoints
- [ ] Cards and features align to grid columns
- [ ] Stats and features distribute evenly
- [ ] Vertical rhythm maintained throughout page

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari
- [ ] Chrome Android

---

## Future Considerations

### Extending the System

**Adding New Spacing Values:**
1. Ensure new values are multiples of 8px
2. Document in this file
3. Add to Tailwind safelist if using dynamic classes

**Creating New Layout Components:**
1. Follow existing component patterns
2. Use Tailwind utilities (avoid custom CSS)
3. Support responsive behavior
4. Add to `/src/components/layout/index.ts`

**Adding New Grid Patterns:**
1. Define mobile → tablet → desktop column spans
2. Use existing gap standards
3. Document pattern in this file
4. Add example to relevant block components

---

## Support & Questions

For questions or issues with the grid and baseline system:
1. Review this documentation
2. Use debug overlays (Ctrl+Shift+G, Ctrl+Shift+B) to diagnose layout issues
3. Check `TYPOGRAPHY-SYSTEM.md` for typography-related questions
4. Refer to existing block components for implementation examples

---

**Last Updated:** Implementation complete
**Maintained By:** Sunrise Systems Development Team

