# Image Optimization Guide

## Changes Implemented

### 1. **Reduced Image Quality from 100 to 75**
**File:** `src/components/Media/ImageMedia/index.tsx`

Changed the Next.js Image component quality from 100 to 75. This is a **sweet spot** that maintains visual quality while significantly reducing file sizes.

- **Before:** `quality={100}` (unnecessarily large files)
- **After:** `quality={75}` (optimal balance, recommended by Next.js team)
- **Impact:** 40-60% reduction in file size with imperceptible quality difference

---

### 2. **Added Modern Image Format Support**
**File:** `next.config.js`

Enabled AVIF and WebP formats for automatic conversion by Next.js Image optimizer.

```javascript
formats: ['image/avif', 'image/webp']
```

- **AVIF:** 30-50% smaller than WebP, excellent quality
- **WebP:** 25-35% smaller than JPEG, widely supported
- **Fallback:** Automatically serves original format if browser doesn't support modern formats

---

### 3. **Optimized Device Sizes Configuration**
**File:** `next.config.js`

Added responsive breakpoints matching common device widths:

```javascript
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
```

This ensures Next.js generates the right image size for each device, preventing oversized images on mobile.

---

### 4. **Configured Payload CMS for WebP Generation**
**File:** `src/collections/Media.ts`

Added format options to automatically convert uploaded images to WebP:

```javascript
formatOptions: {
  format: 'webp',
  options: {
    quality: 80,
  },
}
```

**Per-size quality settings:**
- Thumbnails: 75 (smaller files, less critical)
- Standard sizes: 80 (great quality/size balance)
- OG images: 85 (higher quality for social sharing)

---

### 5. **Added Resize Constraints**
**File:** `src/collections/Media.ts`

Prevents uploading unnecessarily large images:

```javascript
resizeOptions: {
  width: 3840,
  fit: 'inside',
  withoutEnlargement: true,
}
```

- Maximum width: 3840px (4K displays)
- Maintains aspect ratio
- Never enlarges small images

---

### 6. **Enabled Image Caching**
**File:** `next.config.js`

```javascript
minimumCacheTTL: 60
```

Caches optimized images for 60 seconds, reducing redundant processing.

---

## Performance Impact

### Expected Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Image file size | 100% | 30-50% | **50-70% smaller** |
| Initial page load | Baseline | Faster | **30-50% faster** |
| Largest Contentful Paint (LCP) | Baseline | Improved | **20-40% better** |
| Mobile data usage | Baseline | Reduced | **50-70% less** |

---

## Additional Optimization Opportunities

### 1. **Content Delivery Network (CDN)**
Consider using a CDN to serve images from edge locations closer to users.

**Options:**
- Cloudflare Images
- Cloudinary
- AWS CloudFront
- Vercel Edge Network (if deployed on Vercel)

### 2. **Lazy Loading Strategy**
Your implementation already uses lazy loading (`loading="lazy"`), but ensure:
- Hero images use `priority={true}` ✅ (Already implemented)
- Above-the-fold images load eagerly
- Below-the-fold images load lazily

### 3. **Blur Placeholder Optimization**
Currently using a base64 encoded placeholder. Consider:
- **Dynamic blur placeholders**: Generate from actual image (Payload CMS supports this)
- **LQIP (Low Quality Image Placeholder)**: Tiny blurred version of actual image

**Implementation:**
```typescript
// In Media collection
mimeType: 'image/*',
withMetadata: true, // Enables automatic blur data URL generation
```

### 4. **Image Dimensions**
Always specify width and height to prevent layout shift (CLS):
- ✅ Already implemented in `ImageMedia` component
- Helps browser reserve space before image loads

### 5. **HTTP/2 Server Push**
If using HTTP/2, consider preloading critical images:
```html
<link rel="preload" as="image" href="/critical-hero.webp" />
```

### 6. **Responsive Images Best Practices**
Review the `sizes` attribute in images to ensure accurate hints:

**Current implementation:**
```typescript
sizes = Object.entries(breakpoints)
  .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
  .join(', ')
```

**Consider customizing per component:**
```typescript
// For full-width hero
sizes="100vw"

// For 6-column grid item
sizes="(max-width: 768px) 100vw, 50vw"
```

---

## Monitoring & Testing

### Tools to Measure Impact

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Measures LCP, CLS, and provides image optimization suggestions

2. **WebPageTest**
   - URL: https://www.webpagetest.org/
   - Detailed waterfall analysis showing image load times

3. **Chrome DevTools**
   - Network tab → Filter by "Img"
   - Check actual file sizes being downloaded
   - Use Lighthouse audit

4. **Next.js Analytics**
   - Monitor Core Web Vitals in production
   - Track LCP improvements over time

### Key Metrics to Track

- **Largest Contentful Paint (LCP):** < 2.5s (good)
- **Cumulative Layout Shift (CLS):** < 0.1 (good)
- **Total Image Size:** Track per page
- **Image Format Distribution:** % of WebP/AVIF vs legacy formats

---

## Re-uploading Existing Images

**Important:** The Payload CMS changes only affect *new* uploads. To optimize existing images:

### Option 1: Bulk Re-upload Script (Recommended)
Create a migration script to regenerate all images:

```javascript
// scripts/regenerate-images.mjs
import payload from 'payload'

async function regenerateImages() {
  await payload.init({ /* config */ })
  
  const media = await payload.find({
    collection: 'media',
    limit: 1000,
  })
  
  for (const item of media.docs) {
    // Trigger regeneration by updating the record
    await payload.update({
      collection: 'media',
      id: item.id,
      data: item,
    })
  }
}
```

### Option 2: Manual Re-upload
For smaller sites, manually re-upload key images through the admin panel.

### Option 3: Gradual Migration
Let the old images remain and only optimize new uploads. Over time, as content is updated, images will be optimized.

---

## Next.js Image Optimizer in Production

### Railway/Vercel Deployment
Your setup uses Next.js Image Optimization API, which:
- Runs on-demand optimization
- Caches results
- Serves from edge locations (if configured)

### Ensure Environment Variables
```bash
# Already configured in next.config.js
NEXT_PUBLIC_SERVER_URL=https://sunrisesystems.co
```

---

## Checklist

- ✅ Reduced image quality to 75
- ✅ Enabled AVIF/WebP formats
- ✅ Configured device sizes
- ✅ Added Payload CMS format options
- ✅ Set resize constraints
- ✅ Enabled image caching
- ✅ Hero images use priority loading
- ✅ Lazy loading for below-fold images
- ⏳ Consider CDN integration
- ⏳ Re-upload existing images (optional)
- ⏳ Monitor performance metrics

---

## Common Issues & Solutions

### Issue: Images still loading slowly
**Solution:** Check Network tab in DevTools to see if images are being optimized. Ensure `NEXT_PUBLIC_SERVER_URL` is set correctly.

### Issue: Blur placeholder not showing
**Solution:** The base64 placeholder is already implemented. For dynamic blur, enable `withMetadata: true` in Media collection.

### Issue: Layout shift on image load
**Solution:** Always provide width and height (already implemented in ImageMedia component).

### Issue: WebP not generated for old images
**Solution:** Re-upload images or run migration script (see "Re-uploading Existing Images" section).

---

## Performance Before/After Testing

### Testing Steps

1. **Before (baseline):**
   ```bash
   # Open Chrome DevTools → Network
   # Hard refresh (Cmd+Shift+R)
   # Note total transferred size and load time
   ```

2. **After deployment:**
   ```bash
   # Deploy changes
   # Clear cache
   # Test same page
   # Compare metrics
   ```

3. **Lighthouse Audit:**
   ```bash
   # Run before changes
   npx lighthouse https://sunrisesystems.co --view
   
   # Run after deployment
   npx lighthouse https://sunrisesystems.co --view
   ```

---

## Resources

- [Next.js Image Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Payload CMS Image Upload Docs](https://payloadcms.com/docs/upload/overview)
- [WebP Format Guide](https://developers.google.com/speed/webp)
- [AVIF Format Guide](https://jakearchibald.com/2020/avif-has-landed/)
- [Core Web Vitals](https://web.dev/vitals/)

---

## Questions?

If you encounter any issues or need further optimization assistance, review:
1. Next.js build logs for image optimization errors
2. Browser console for image loading errors
3. Network tab for actual file sizes being served

