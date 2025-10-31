# Body Copy Color System - Standardized

## Three Color Hierarchy

All body copy in the system uses one of three standardized colors:

### 1. Primary Text - #111111 (Almost Black)
**Usage:** Main content, descriptions, subheads, paragraphs

**Classes that use this color:**
- `.body-1` (24px, Inter Regular)
- `.body-3` (20px, Inter Regular)  
- Default `<p>` tags (24px, Inter Regular)
- `.body-subhead-light` (24px, Inter Regular)

**Where it appears:**
- Hero subheadlines
- Block subheads (all blocks)
- Case study descriptions
- Service descriptions
- Feature descriptions
- Process step descriptions
- Bullet point text
- Author names (with font-semibold)
- All general body content

### 2. Quote Text - #666666 (Medium Gray)
**Usage:** Testimonial quotes only - softer, more natural tone

**Classes that use this color:**
- `.body-2` (24px, Inter Regular)

**Where it appears:**
- Testimonial quotes
- Case study testimonial quotes

### 3. Label Text - #999999 (Light Gray)
**Usage:** Supporting labels, tags, metadata

**Classes that use this color:**
- `.accent` with `text-[#999999]` modifier

**Where it appears:**
- Author titles
- Metric labels (when styled as such)
- Subtle secondary information

## Color Usage Guidelines

### Do Use:
- **#111111** for all primary content that needs to be read
- **#666666** ONLY for testimonial quotes
- **#999999** ONLY for subtle labels and metadata

### Don't Use:
- ❌ Other gray shades
- ❌ Medium gray (#666) for anything except testimonial quotes
- ❌ Light gray (#999) for body content

## Implementation

All body copy colors are defined in `src/app/(frontend)/globals.css`:

```css
/* Primary Text - #111111 */
.body-1 { color: #111111; }
.body-3 { color: #111111; }
p { color: #111111; }

/* Quote Text - #666666 */
.body-2 { color: #666666; }

/* Label Text - #999999 */
.accent { color: #111111; }  /* or text-[#999999] when needed */
```

## Quick Reference

| Style | Size | Color | Weight | Usage |
|-------|------|-------|--------|-------|
| body-1 | 24px | #111111 | 400 | Primary content, subheads |
| body-2 | 24px | #666666 | 400 | Testimonial quotes only |
| body-3 | 20px | #111111 | 400 | Supporting content, smaller text |
| accent | 16px | #111111 or #999999 | 400 | Labels, uppercase tags |

## Visual Hierarchy

The system creates hierarchy through:
1. **Size** - 24px primary, 20px supporting, 16px labels
2. **Color** - Dark for content, medium for quotes, light for labels
3. **Position** - Layout and spacing, not weight variations

All body text uses regular (400) weight for a clean, modern, readable appearance.

