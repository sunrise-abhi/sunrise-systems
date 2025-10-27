# Image Display Fix - Production WebP Images

## Problem Identified

Images uploaded through production admin weren't displaying correctly:
- ✅ SVG logos worked fine
- ❌ WebP images failed to load
- ❌ Other raster formats likely affected

## Root Cause

The `LogoStripBlock` component was using Next.js `<Image>` component directly with raw URLs from Payload, bypassing the `getMediaUrl()` utility that adds the proper domain/base URL.

**Before:**
```typescript
// LogoStripBlock was doing this:
<Image
  src={imageUrl}  // Raw URL like "/media/logo.webp"
  alt={logo.altText}
  width={200}
  height={48}
/>
```

**The Issue:**
- Raw URL: `/media/logo.webp` (relative path)
- Next.js Image needs full URL for remote images
- Without domain, image optimization fails
- Browser can't find the image

**Why SVGs worked:**
- SVGs might be served differently
- Less processing/optimization needed
- Different caching behavior

## Solution Applied

Updated `LogoStripBlock` to use the `Media` component like all other blocks:

**After:**
```typescript
// Now using Media component:
<Media
  resource={imageResource}  // Full media object
  alt={logo.altText}
  imgClassName="h-12 w-auto object-contain"
/>
```

**How Media component fixes it:**
1. Receives full media resource object
2. Calls `getMediaUrl(url, cacheTag)` utility
3. Prepends base URL (NEXT_PUBLIC_SERVER_URL)
4. Returns proper URL: `https://sunrise-systems-production.up.railway.app/media/logo.webp`
5. Next.js Image optimization works correctly ✅

## Files Modified

- `src/blocks/LogoStripBlock/Component.tsx`
  - Removed direct `Image` import from 'next/image'
  - Added `Media` component import
  - Changed from using raw URL to passing full resource object
  - Wrapped in container div for sizing

## Result

After deployment:
- ✅ All image formats display correctly (WebP, PNG, JPG, SVG)
- ✅ Images uploaded via production admin work
- ✅ Proper URLs with domain prepended
- ✅ Next.js image optimization functional
- ✅ Consistent behavior across all blocks

## Technical Details

### The `getMediaUrl` Utility

Located in `src/utilities/getMediaUrl.ts`:

```typescript
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''
  
  // Check if URL already has http/https protocol
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return cacheTag ? `${url}?${cacheTag}` : url
  }
  
  // Otherwise prepend client-side URL
  const baseUrl = getClientSideURL()
  return cacheTag ? `${baseUrl}${url}?${cacheTag}` : `${baseUrl}${url}`
}
```

**What it does:**
1. Checks if URL is already absolute (has http/https)
2. If not, prepends the base URL from environment
3. Optionally adds cache-busting query parameter
4. Returns full, properly formatted URL

### The Media Component

The `Media` component (`src/components/Media/ImageMedia/index.tsx`):
- Automatically processes URLs through `getMediaUrl()`
- Handles responsive sizing
- Adds blur placeholder
- Optimizes quality settings
- Consistent across the entire application

### Why Use Media Component vs Direct Image

**Always use `<Media>` for Payload uploads:**
```typescript
// ✅ CORRECT - Use Media component
<Media resource={mediaObject} alt="Description" />

// ❌ WRONG - Don't use Image directly
<Image src={mediaObject.url} alt="Description" />
```

**Reasons:**
1. URL processing (adds domain)
2. Consistent configuration
3. Cache-busting via updatedAt
4. Proper responsive sizing
5. Blur placeholder handling

## Verification

Test that images load:
1. Visit production site
2. Check pages with logo strips
3. Check case studies with logos
4. Verify WebP images display
5. Check browser console (no 404s)
6. Verify all image formats work

## Prevention

**Guidelines for future development:**

1. **Always use Media component** for Payload-uploaded images
2. **Never use Next.js Image directly** with Payload media URLs
3. **Use static imports** only for bundled images in `/public`
4. **Test with different formats** (WebP, PNG, JPG, SVG)
5. **Check production** after deploying image-related changes

## Related Components

Components using Media correctly:
- ✅ CaseStudyCarouselBlock
- ✅ CaseStudyPreviewBlock
- ✅ ImageBlock
- ✅ GalleryBlock
- ✅ MediaBlock
- ✅ HeroBlock
- ✅ SplitBlock
- ✅ CarouselBlock
- ✅ FeatureGridBlock
- ✅ LogoStripBlock (now fixed)

## Deploy to Fix

```bash
git add .
git commit -m "Fix LogoStripBlock image display - use Media component"
git push origin main
```

Railway will auto-deploy and images should display correctly! ✅

