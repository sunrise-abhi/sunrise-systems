# Cache Revalidation Fix for Railway Deployment

## Problem
When publishing content changes in the Payload CMS admin dashboard, the changes only appeared in preview mode but not on the live site. This was because Next.js 15's `revalidatePath()` and `revalidateTag()` functions can only be called in Route Handlers or Server Actions, not directly in Payload hooks when running in production.

## Solution
Created a dedicated Next.js API route (`/api/revalidate`) that properly handles cache revalidation, and updated all Payload collection hooks to call this route instead of directly calling Next.js revalidation functions.

## Files Changed

### New Files Created:
1. **`src/app/(frontend)/api/revalidate/route.ts`** - API route handler for revalidation
2. **`src/collections/Services/hooks/revalidateService.ts`** - Service-specific revalidation hook
3. **`src/collections/CaseStudies/hooks/revalidateCaseStudy.ts`** - Case study-specific revalidation hook

### Modified Files:
1. **`src/collections/Pages/hooks/revalidatePage.ts`** - Updated to use API route
2. **`src/collections/Posts/hooks/revalidatePost.ts`** - Updated to use API route
3. **`src/Header/hooks/revalidateHeader.ts`** - Updated to use API route
4. **`src/Footer/hooks/revalidateFooter.ts`** - Updated to use API route
5. **`src/hooks/revalidateRedirects.ts`** - Updated to use API route
6. **`src/collections/Services/index.ts`** - Updated to use new service hook
7. **`src/collections/CaseStudies/index.ts`** - Updated to use new case study hook

## Required Environment Variable

You **MUST** add this environment variable to your Railway deployment:

```bash
REVALIDATION_SECRET=your-secret-key-here
```

### How to Add Environment Variable in Railway:

1. Go to your Railway project dashboard
2. Click on your service
3. Go to the "Variables" tab
4. Click "New Variable"
5. Add:
   - Name: `REVALIDATION_SECRET`
   - Value: Generate a secure random string (e.g., use `openssl rand -base64 32` or any password generator)
6. Click "Add"
7. Railway will automatically redeploy with the new variable

## How It Works

### Before (Broken in Production):
```typescript
// Direct call in Payload hook - doesn't work in production
revalidatePath('/page-slug')
revalidateTag('pages-sitemap')
```

### After (Working in Production):
```typescript
// Payload hook calls API route
await fetch(`${serverUrl}/api/revalidate`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-revalidate-secret': secret,
  },
  body: JSON.stringify({ path: '/page-slug', tag: 'pages-sitemap' }),
})

// API route handler properly calls Next.js functions
// This runs in the correct context for production
revalidatePath(path)
revalidateTag(tag)
```

## What Gets Revalidated

### Pages Collection
- Revalidates: `/{slug}` or `/` (for home page)
- Also revalidates: `pages-sitemap` tag

### Posts Collection
- Revalidates: `/posts/{slug}`
- Also revalidates: `posts-sitemap` tag

### Services Collection
- Revalidates: `/services/{slug}`
- Also revalidates: `/services` (index page)

### Case Studies Collection
- Revalidates: `/case-studies/{slug}`
- Also revalidates: `/case-studies` (index page)

### Header & Footer Globals
- Revalidates their respective tags: `global_header`, `global_footer`

### Redirects
- Revalidates: `redirects` tag

## Testing After Deployment

1. Make sure you've added the `REVALIDATION_SECRET` environment variable to Railway
2. Wait for the automatic redeploy to complete
3. Log into your Payload admin dashboard
4. Make a change to any published page/post/service/case study
5. Click "Publish"
6. Open the page in an incognito window (not logged in to admin)
7. You should now see the changes immediately!

## Security Note

The revalidation API route is protected by a secret token (`REVALIDATION_SECRET`). Only requests with the correct secret in the `x-revalidate-secret` header will be processed. This prevents unauthorized cache invalidation.

## Troubleshooting

If changes still don't appear after publishing:

1. **Check Railway logs** for revalidation errors:
   - Look for `[Revalidate API]` log messages
   - Look for `[revalidatePage]`, `[revalidatePost]`, etc. log messages

2. **Verify environment variable** is set correctly:
   - Go to Railway > Your Service > Variables
   - Confirm `REVALIDATION_SECRET` exists and has a value

3. **Check browser cache**:
   - Try hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
   - Try in incognito/private browsing mode

4. **Check the Payload logs** after publishing:
   - You should see "Revalidating [type] at path: [path]" messages
   - Followed by "Revalidation successful" messages

## Additional Notes

- The revalidation is **asynchronous** - the hook doesn't wait for completion, so publishing is fast
- Each collection has its own revalidation hook with the correct URL structure
- The API route supports both path-based and tag-based revalidation
- All error cases are logged for debugging

