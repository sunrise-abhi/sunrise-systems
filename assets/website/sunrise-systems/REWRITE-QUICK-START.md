# Website Copy Rewrite - Quick Start Guide

## What Was Done

Complete strategic rewrite of all Sunrise Systems website content:
- ✅ 4 core pages (Home, About, Services, Case Studies)
- ✅ 4 case studies (Delta, Breakthrough, Kings, EFI)
- ✅ 3 services (Sales, Marketing, Software)
- ✅ All written fresh from source materials (not existing copy)
- ✅ "Growth, engineered" positioning throughout

---

## To Deploy Rewritten Content

### Step 1: Activate New Seed File

**Option A - SAFE: Preserve existing images (RECOMMENDED)**
```bash
cd assets/website/sunrise-systems/src/endpoints/seed
cp index.ts index-backup.ts
cp index-rewrite-preserve-media.ts index.ts
```

**Option B - Fresh start (WILL DELETE ALL IMAGES):**
```bash
cd assets/website/sunrise-systems/src/endpoints/seed
cp index.ts index-backup.ts
cp index-rewrite.ts index.ts
```

**Option C - Manual merge:**
Update imports in existing `index.ts` to use `-rewrite` files

### Step 2: Seed Database

```bash
cd assets/website/sunrise-systems
npm run seed
```

Or via admin UI: Navigate to `/admin` → click seed database button

### ⚠️ Important Notes

- **Option A (`index-rewrite-preserve-media.ts`)** keeps all your uploaded images safe
- **Option B (`index-rewrite.ts`)** will delete all media and create placeholder images
- **If you have custom images in the CMS, use Option A**

### Step 3: Review Frontend

Visit these pages to verify:
- `/` - Home
- `/about` - About
- `/services` - Services overview
- `/case-studies` - Case studies overview
- `/case-studies/delta` - Delta case study
- `/case-studies/breakthrough-lighting` - Breakthrough
- `/case-studies/kings-drywall` - Kings
- `/case-studies/efi` - EFI
- `/services/sales` - Sales service
- `/services/marketing` - Marketing service
- `/services/software` - Software service

---

## Key Files

### Seed Files (Use These)
- `src/endpoints/seed/index-rewrite.ts` - Main seed file
- `src/endpoints/seed/page-*.ts` - 4 page files
- `src/endpoints/seed/case-study-*.ts` - 4 case study files
- `src/endpoints/seed/service-*.ts` - 3 service files

### Documentation
- `docs/rewrite-overview.md` - Complete strategy and structure guide
- `WEBSITE-COPY-REWRITE-COMPLETE.md` - Completion summary
- `src/endpoints/seed/phase-*-validation-report.md` - Quality validation
- `src/endpoints/seed/rewrite-strategy-brief.md` - Positioning guide

---

## What You'll See

### Home Page
- Hero: "Bid invites on projects you actually want"
- Stats: $29MM+, $650K+, 191+, 865:1
- 3 case study previews with metrics
- Services integration grid
- Simple 3-step process
- Clear CTA

### Case Studies
- Outcome-first headlines (e.g., "$3M pipeline in 4 months")
- Visible metrics immediately
- Challenge → Approach → Results structure
- Real client testimonials
- Proof-driven, not story-driven

### Services
- Not "marketing agency" messaging
- Integration as advantage
- Tangible deliverables
- Service-specific proof
- Dynamic case study links

---

## Copy Highlights

**Delta:** "Bid list already working—$35K opportunity in 30 days"  
**Breakthrough:** "Strategic partnership, not vendor relationship"  
**Kings:** "Project-based 4X better than general outreach"  
**EFI:** "$4,461 one-time vs $60K-$120K in SaaS over 5 years"

---

## Positioning Achieved

✅ "Growth, engineered" clear throughout  
✅ Sales + Marketing + Software integration emphasized  
✅ Differentiated from typical agencies  
✅ Proof hierarchy (aggregate → specific → testimonial)  
✅ Honest attribution (client-confirmed metrics)  
✅ Minimalist (45-55% word count reduction)

---

## Questions?

**See comprehensive docs:**
- `docs/rewrite-overview.md` - Full strategy breakdown
- `WEBSITE-COPY-REWRITE-COMPLETE.md` - Completion summary

**Test before deploying:**
Create `/api/seed-rewrite` endpoint to test without affecting live data.

**Ready when you are.** ✅

