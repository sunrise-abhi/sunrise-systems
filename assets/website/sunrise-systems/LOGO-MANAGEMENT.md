# Logo Management via CMS

## Feature Added

You can now manage the Header and Footer logos through the Payload admin panel!

## How to Update Your Logo

### Step 1: Upload Logo to Media (Already Done ✅)
You've already uploaded the Sunrise Systems logo to the Media collection.

### Step 2: Set Logo in Header
1. Go to `/admin`
2. Click **Globals → Header** in the sidebar
3. You'll now see a **Logo** field at the top
4. Click the dropdown and select your uploaded Sunrise Systems logo
5. Click **Save**

### Step 3: Set Logo in Footer
1. Go to `/admin`
2. Click **Globals → Footer** in the sidebar
3. You'll now see a **Logo** field at the top
4. Click the dropdown and select your uploaded Sunrise Systems logo
5. Click **Save**

### Step 4: Refresh Your Site
The header and footer will now display your uploaded logo!

## How It Works

### Header
- If you set a logo in Header global → Uses your uploaded logo
- If no logo is set → Falls back to the default hardcoded logo

### Footer
- If you set a logo in Footer global → Uses your uploaded logo
- If no logo is set → Falls back to the default hardcoded logo

This means the site will never break if you haven't set a logo yet.

## Logo Recommendations

### Format
- **Best:** SVG (scalable, crisp at any size)
- **Good:** PNG with transparency
- **Okay:** WebP with transparency

### Dimensions
- **Width:** 150-300px recommended
- **Height:** Will auto-scale to 60px on the site
- **Aspect ratio:** Maintain original ratio

### File Size
- **SVG:** < 50KB ideal
- **PNG/WebP:** < 200KB recommended

## Features

### Independent Logos
- Header and Footer can use different logos if needed
- Or use the same logo for consistency

### Automatic Sizing
- Logos automatically sized to 60px height
- Width scales proportionally
- Maintains aspect ratio

### Optimized Loading
- Header logo: Priority loading (loads immediately)
- Footer logo: Standard loading (lazy)
- Next.js Image optimization applied

## Files Modified

1. **`src/Header/config.ts`** - Added logo field
2. **`src/Footer/config.ts`** - Added logo field
3. **`src/Header/Component.client.tsx`** - Uses logo from global data
4. **`src/Footer/Component.tsx`** - Uses logo from global data
5. **`src/payload-types.ts`** - TypeScript types updated

## Benefits

✅ **No code changes needed** to update logo  
✅ **CMS-managed** for easy updates  
✅ **Client can change** logo themselves  
✅ **Version control** via Payload's revision system  
✅ **Fallback protection** if logo not set  
✅ **Separate control** for header and footer  

## Next Steps

1. Go to admin panel
2. Navigate to Globals → Header
3. Select your logo from the dropdown
4. Save
5. Repeat for Footer
6. Your logo is now live! 🎉

## Testing

After setting the logo:
- Check the header on all pages
- Check the footer on all pages
- Verify it looks correct on mobile
- Test dark/light themes if applicable
- Ensure it links to homepage when clicked

The logo will automatically work with:
- Sticky header
- Theme changes
- Responsive design
- Image optimization

