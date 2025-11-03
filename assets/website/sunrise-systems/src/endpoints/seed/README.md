# Seed Scripts

This directory contains seed data templates for creating pages in the Payload CMS.

## Running Seed Scripts

### Via Command Line (Recommended)

Run seed scripts from the `assets/website/sunrise-systems` directory using npm scripts:

```bash
# Seed case studies
pnpm run seed:case-studies

# Seed DBIA 2025 presentation page
pnpm run seed:dbia-presentation
```

### Via Payload Admin Dashboard

Some seed operations can be triggered from the admin dashboard if a seed endpoint is configured.

## Available Seed Scripts

### Case Studies
**Script:** `scripts/seed-case-studies.mjs`  
**Command:** `pnpm run seed:case-studies`

Seeds the following case studies:
- Delta Family Companies
- Breakthrough Lighting
- Kings Drywall
- EFI Construction

### DBIA 2025 Presentation Page
**Script:** `scripts/seed-dbia-presentation.mjs`  
**Command:** `pnpm run seed:dbia-presentation`

**Page Details:**
- **Slug:** `design-build-expo-2025`
- **Title:** Design Build Expo 2025 - Sunrise Systems
- **Structure:** 10 sections/slides following the VSL narrative
- **Purpose:** Conference presentation introducing Sunrise Systems to design-build firms

**Sections:**
1. TL;DW Quick Overview (heroBlock)
2. Who We Are - Introduction (statementBlock)
3. Three Teams Working Together (statementBlock)
4. The Challenge - Uncertainty (statementBlock)
5. Delta Results - The Numbers (statsRowBlock)
6. Delta Story - The Context (statementBlock)
7. America 9 Results (statementBlock)
8. Growth Architecture - How We Do It (statementBlock)
9. The Three Teams (featureGridBlock)
10. USP + CTA - Meet Us (cta)

## Seed Data Templates

### `page-home-rewrite.ts`
Home page template with case study references.

### `page-dbia-2025-presentation.ts`
Design Build Expo 2025 presentation page - 10-slide presentation format.

### Other Templates
- `home-static.ts` - Static home page
- `home.ts` - Home page with images
- `post-1.ts`, `post-2.ts`, `post-3.ts` - Blog post examples
- `contact-page.ts` - Contact page template

## Creating Custom Seed Scripts

To create a new seed script:

1. **Create the seed data template** in `src/endpoints/seed/`:

```typescript
import type { Page } from '@/payload-types'

export const myPageTemplate = (): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => ({
  title: 'My Page',
  slug: 'my-page',
  hero: { type: 'none' },
  layout: [
    // ... your blocks
  ],
  publishedAt: new Date().toISOString(),
  _status: 'published',
  meta: {
    title: 'My Page Title',
    description: 'My page description',
  },
})
```

2. **Create the seed script** in `scripts/`:

```javascript
import { getPayload } from 'payload'
import config from '../dist/payload.config.js'

async function seedMyPage() {
  try {
    const payload = await getPayload({ config })
    const { myPageTemplate } = await import('../dist/endpoints/seed/my-page-template.js')
    
    await payload.create({
      collection: 'pages',
      data: myPageTemplate(),
    })
    
    console.log('✅ Page created!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

seedMyPage()
```

3. **Add npm script** to `package.json`:

```json
{
  "scripts": {
    "seed:my-page": "cross-env NODE_OPTIONS=--no-deprecation node scripts/seed-my-page.mjs"
  }
}
```

4. **Build and run**:

```bash
pnpm build  # Build the TypeScript files
pnpm run seed:my-page  # Run the seed script
```

## Important Notes

- **Build first:** Always run `pnpm build` before running seed scripts to ensure TypeScript files are compiled
- **Check for duplicates:** Seed scripts should check if content already exists to avoid duplicates
- **Unique slugs:** Each page must have a unique slug
- **Status:** Set `_status: 'published'` to make pages immediately visible
- **Publishing date:** Set `publishedAt` to control when the page is considered published

## Troubleshooting

### "Cannot find module" error
Run `pnpm build` to compile TypeScript files before seeding.

### "Duplicate key error"
A page with the same slug already exists. Either delete it first or update the seed script to check for existing pages.

### "Database connection error"
Ensure your `.env` file has the correct `DATABASE_URI` and the database is running.

### "Permission denied"
Make sure you're running the script from the `assets/website/sunrise-systems` directory.

