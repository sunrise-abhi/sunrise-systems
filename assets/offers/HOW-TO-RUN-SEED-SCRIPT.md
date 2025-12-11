# How to Run the DBIA 2025 Presentation Seed Script

## Quick Start

To create the Design Build Expo 2025 presentation page in your Payload CMS:

### Step 1: Navigate to the website directory

```bash
cd assets/website/sunrise-systems
```

### Step 2: Build the project (if you haven't recently)

```bash
pnpm build
```

This compiles the TypeScript seed files so they can be imported.

### Step 3: Run the seed script

```bash
pnpm run seed:dbia-presentation
```

### Step 4: View the page

The page will be created at:
- **Development:** `http://localhost:3000/design-build-expo-2025`
- **Production:** `https://yourdomain.com/design-build-expo-2025`

---

## What the Seed Script Does

The script will:

1. ✅ Check if a page with slug `design-build-expo-2025` already exists
2. ✅ If it exists, delete it and create a fresh version
3. ✅ Create a new page with 10 presentation sections/slides
4. ✅ Set the page status to "published"
5. ✅ Display confirmation with page details

---

## Expected Output

When the script runs successfully, you'll see:

```
🌱 Starting DBIA 2025 presentation page seed...

Creating Design Build Expo 2025 presentation page...

✅ Presentation page created successfully!

Page details:
  - Title: Design Build Expo 2025 - Sunrise Systems
  - Slug: design-build-expo-2025
  - URL: /design-build-expo-2025
  - Sections: 10 slides
  - Status: published

You can now view the presentation at:
  https://yourdomain.com/design-build-expo-2025
  or http://localhost:3000/design-build-expo-2025 (in development)
```

---

## The 10 Presentation Sections

Once created, the page will have these sections:

1. **TL;DW Quick Overview** - Hero block with key results upfront
2. **Who We Are** - Introduction to Sunrise Systems
3. **Three Teams, One Mission** - USP introduction
4. **The Challenge** - Acknowledging uncertainty in construction
5. **Delta Results** - Stats row with impressive numbers
6. **Delta Story** - Context around the results
7. **America 9 Results** - Design-build proof point
8. **Growth Architecture** - Unique mechanism introduction
9. **The Three Teams** - Feature grid explaining the approach
10. **USP + CTA** - Final invitation to connect

---

## Troubleshooting

### Error: "Cannot find module"

**Solution:** Run `pnpm build` first to compile TypeScript files.

```bash
cd assets/website/sunrise-systems
pnpm build
pnpm run seed:dbia-presentation
```

### Error: "Database connection failed"

**Solution:** Make sure your database is running and the `.env` file has the correct `DATABASE_URI`.

```bash
# Check your .env file has:
DATABASE_URI=mongodb://...
```

### Error: "Permission denied"

**Solution:** Ensure you're in the correct directory and have the necessary permissions.

```bash
cd /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems
pnpm run seed:dbia-presentation
```

### Page already exists

**Solution:** The script automatically handles this. It will delete the existing page and create a new one.

---

## Manual Alternative: Create via Admin Dashboard

If you prefer not to use the seed script, you can manually create the page:

1. Log into Payload CMS admin at `/admin`
2. Go to Pages collection
3. Click "Create New"
4. Manually add each section using the blocks

**Note:** This is much more time-consuming. The seed script is recommended.

---

## Editing After Creation

Once the page is created, you can edit it in the Payload admin:

1. Go to `/admin`
2. Navigate to Collections → Pages
3. Find "Design Build Expo 2025 - Sunrise Systems"
4. Click to edit
5. Modify any section as needed
6. Click "Save"

---

## Deleting the Page

If you need to remove the page:

### Via Admin Dashboard:
1. Go to `/admin`
2. Navigate to Collections → Pages
3. Find "Design Build Expo 2025 - Sunrise Systems"
4. Click the delete icon
5. Confirm deletion

### Via Script:
Run the seed script again - it will automatically delete the old version and create a new one.

---

## Related Files

- **Seed Script:** `/assets/website/sunrise-systems/scripts/seed-dbia-presentation.mjs`
- **Seed Data:** `/assets/website/sunrise-systems/src/endpoints/seed/page-dbia-2025-presentation.ts`
- **VSL Script:** `/assets/offers/design-build-expo-2025-vsl-script.md`
- **Implementation Summary:** `/assets/offers/design-build-expo-2025-implementation-summary.md`

---

## Need Help?

Check the detailed README in the seed directory:
- `/assets/website/sunrise-systems/src/endpoints/seed/README.md`

