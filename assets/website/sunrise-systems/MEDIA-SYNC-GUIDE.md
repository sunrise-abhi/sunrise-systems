# Media Files & Railway Volume - Complete Guide

## Current Setup ✅

- **Railway Volume:** Mounted at `/app/public/media`
- **Payload Config:** Stores media at `public/media`
- **Status:** Configuration correct, volume ready to use

## The Issue

Your Docker container is **ephemeral** - files inside the container get wiped on each deploy. The Railway volume persists data across deploys, but it's currently empty.

## Solutions

### Option 1: Upload via Admin Panel (Recommended) ⭐

**Best for:** Production images, ongoing content management

**Steps:**
1. Go to: `https://sunrise-systems-production.up.railway.app/admin`
2. Login with your admin credentials
3. Navigate to **Collections → Media**
4. Click **Create New**
5. Upload images
6. Images are automatically stored in Railway volume ✅

**Pros:**
- ✅ Simple and straightforward
- ✅ No technical setup needed
- ✅ Images persist across deploys
- ✅ Works immediately

**Cons:**
- ⚠️ Manual upload needed for each image
- ⚠️ No bulk upload UI

---

### Option 2: Programmatic Upload Script

**Best for:** Bulk uploading existing local images to production

**Setup:**

1. **Install required dependency:**
   ```bash
   cd assets/website/sunrise-systems
   pnpm add -D form-data
   ```

2. **Set environment variables:**
   ```bash
   export PROD_URL=https://sunrise-systems-production.up.railway.app
   export PROD_EMAIL=your-admin-email@example.com
   export PROD_PASSWORD=your-admin-password
   ```

3. **Run the upload script:**
   ```bash
   pnpm run upload:media
   ```

**What it does:**
- Reads all images from your local `public/media` folder
- Logs into production admin panel
- Uploads each image via Payload API
- Skips images that already exist
- Shows progress and summary

**Script location:** `scripts/upload-media-to-production.mjs`

---

### Option 3: Database-Only Approach (Advanced)

If your images are already in your MongoDB database (as file paths), you can:

1. Upload images to Railway volume via script
2. Database will reference them automatically

**This requires custom implementation** based on your specific needs.

---

## Local Development Workflow

### Current Setup:
- **Local:** Images stored in `assets/website/sunrise-systems/public/media/`
- **Production:** Images stored in Railway volume at `/app/public/media`

### Recommended Workflow:

#### For Local Development:
1. Run local dev server: `pnpm dev`
2. Upload images through local admin: `http://localhost:3000/admin`
3. Images saved to local `public/media/` folder
4. Test locally

#### For Production:
1. Upload images through production admin panel
2. OR use the upload script to sync local images
3. Images stored in Railway volume
4. Persist across deploys ✅

### Keep in Sync:

**Option A: Upload to Production (One Direction)**
```bash
# Upload local images to production
PROD_EMAIL=admin@example.com PROD_PASSWORD=yourpass pnpm run upload:media
```

**Option B: Manual Sync (Both Directions)**
- Download production images via admin panel
- Upload local images via admin panel or script
- Use version control for seed images if needed

---

## Important Notes

### ✅ What's Working:
- Railway volume mounted correctly
- Payload configured to use volume
- Images uploaded via admin panel persist
- Volume survives deploys

### ⚠️ Common Issues:

#### Images not loading after deploy
**Cause:** Volume is empty  
**Fix:** Upload images via admin panel or script

#### "File is missing on disk" errors
**Cause:** Database references image, but file not in volume  
**Fix:** Upload the specific image via admin panel

#### Local images don't appear in production
**Cause:** Local files aren't deployed (correctly excluded via .dockerignore)  
**Fix:** Upload via admin panel or use upload script

---

## File Structure

```
Local Development:
assets/website/sunrise-systems/
  └── public/
      └── media/          ← Local images here
          ├── logo.png
          ├── hero.jpg
          └── ...

Production (Railway):
/app/
  └── public/
      └── media/          ← Railway volume mounted here
          ├── logo.png    ← Images uploaded via admin
          ├── hero.jpg
          └── ...
```

---

## Best Practices

### 1. Environment Separation ✅
- **Local:** Use local files for development
- **Production:** Use Railway volume for production
- **Don't:** Try to sync automatically (causes issues)

### 2. Version Control ❌
- **Don't commit** `public/media/*` to git
- **Do commit** seed scripts or initial assets separately if needed
- Add to `.gitignore`: `public/media/*`

### 3. Backups 💾
- Railway provides automatic volume backups
- Consider periodic manual backups of important images
- Download via admin panel or API

### 4. Image Optimization 🖼️
- Payload automatically creates multiple sizes (thumbnail, small, medium, large, xlarge, og)
- Upload high-quality originals
- Payload handles optimization

---

## Migration Scenarios

### Scenario 1: New Project (No Existing Images)
1. Deploy to Railway
2. Upload images via production admin panel
3. Done! ✅

### Scenario 2: Existing Local Images
1. Deploy to Railway
2. Install form-data: `pnpm add -D form-data`
3. Run upload script with credentials
4. Images sync to production
5. Done! ✅

### Scenario 3: Moving from Another Host
1. Export images from old host
2. Upload via production admin panel
3. Or use upload script for bulk upload
4. Verify all images load correctly
5. Done! ✅

---

## Troubleshooting

### Script fails with "Cannot find module 'form-data'"
```bash
cd assets/website/sunrise-systems
pnpm add -D form-data
```

### Authentication fails
- Verify PROD_EMAIL and PROD_PASSWORD are correct
- Ensure admin user exists in production
- Check Railway logs for errors

### Images upload but don't appear
- Check Railway volume is mounted: `/app/public/media`
- Verify NEXT_PUBLIC_SERVER_URL is correct
- Check browser console for image loading errors

### "ENOENT" errors
- Ensure local `public/media/` directory exists
- Check file permissions
- Verify image files exist at specified paths

---

## Quick Reference

### Upload single image via admin:
1. Go to `https://your-app.up.railway.app/admin`
2. Media → Create New → Upload

### Bulk upload from local:
```bash
pnpm add -D form-data
PROD_EMAIL=admin@example.com PROD_PASSWORD=pass pnpm run upload:media
```

### Check Railway volume:
- Railway Dashboard → Service → Volumes
- Should show `/app/public/media` mounted
- Can see usage and size

### Verify images are persisting:
1. Upload an image via admin
2. Trigger a new deploy
3. Check if image still loads
4. If yes, volume is working ✅

---

## Summary

**For day-to-day use:** Upload images via admin panel  
**For bulk migration:** Use the upload script  
**For local development:** Use local files, don't worry about sync  
**For production:** Railway volume handles persistence ✅

The configuration is already correct. Just upload your images via the admin panel and they'll be stored in the Railway volume permanently!

