# Hero Block Media Upload Fix

## Problem
The hero block variants with images (Image Right and Background Image) were not allowing users to link media in the admin panel.

## Root Cause
The `admin.condition` functions in the HeroBlock config were incorrectly accessing block data. In Payload CMS blocks, the condition function receives two parameters:
1. Parent document data (first parameter)
2. Current block data (second parameter)

The original code was trying to access `variant` from the first parameter (`data?.variant`), but for block-level fields, the variant is in the second parameter (the block data).

## Solution
Updated all conditional fields in `/src/blocks/HeroBlock/config.ts` to correctly access block data from the second parameter:

### Changed from:
```typescript
admin: {
  condition: (data) => data?.variant === 'imageRight',
}
```

### Changed to:
```typescript
admin: {
  condition: (_, blockData) => blockData?.variant === 'imageRight',
}
```

## Fields Updated
1. `image` - Shows when variant is 'imageRight'
2. `backgroundImage` - Shows when variant is 'backgroundImage'
3. `overlayOpacity` - Shows when variant is 'backgroundImage'
4. `objectPosition` - Shows when variant is 'backgroundImage'
5. `backgroundColor` - Shows when variant is NOT 'backgroundImage'

## Testing
After this fix, users can now:
- Select the "Image Right" variant and upload/link an image
- Select the "Background Image" variant and upload/link a background image
- Configure overlay opacity and object position for background images

## Date Fixed
October 26, 2025

