# 🖼️ Railway Media - Quick Start

Your Railway volume is configured correctly! Here's how to get images working:

---

## ✅ Volume Status

- **Volume Mount:** `/app/public/media` ✅
- **Payload Config:** Configured correctly ✅
- **Issue:** Volume is empty (no images uploaded yet)

---

## 🚀 Quick Solution (2 Steps)

### Step 1: Upload Images via Admin Panel

**Simplest approach - no code needed:**

1. Go to: `https://sunrise-systems-production.up.railway.app/admin`
2. Click **Collections → Media**
3. Click **Create New**
4. Upload your images
5. Done! Images now stored in Railway volume ✅

**This is the recommended approach for most use cases.**

---

### Step 2: Verify Images Persist

1. Upload an image (as above)
2. Note the image URL
3. Trigger a new Railway deploy
4. Visit the image URL again
5. If it loads, volume is working! ✅

---

## 🔄 Bulk Upload (If You Have Many Local Images)

If you have existing images in `public/media/` locally:

### 1. Install dependency:
```bash
cd assets/website/sunrise-systems
pnpm add -D form-data
```

### 2. Run upload script:
```bash
# Set your production admin credentials
export PROD_EMAIL=your-admin-email@example.com
export PROD_PASSWORD=your-admin-password

# Upload all local images to production
pnpm run upload:media
```

### 3. Script will:
- ✅ Read all images from local `public/media/`
- ✅ Login to production admin
- ✅ Upload each image via API
- ✅ Skip images that already exist
- ✅ Show progress and summary

---

## 📋 Local Development Workflow

### How It Works:

**Local Development:**
- Images stored in: `assets/website/sunrise-systems/public/media/`
- Upload via: `http://localhost:3000/admin`
- Stored locally on your machine

**Production (Railway):**
- Images stored in: Railway volume at `/app/public/media`
- Upload via: `https://your-app.up.railway.app/admin`
- Persists across deploys ✅

### Best Practice:

1. **Develop locally** with local images
2. **Upload to production** via admin panel or script
3. **Don't** try to sync automatically (causes issues)
4. **Keep them separate** - it's cleaner and safer

---

## ⚠️ Important Notes

### Images Won't Deploy Automatically
- Local images in `public/media/` are **excluded** from Docker build (via .dockerignore)
- This is **correct behavior** - prevents conflicts with volume
- You **must** upload images separately to production

### Database References
- MongoDB stores image metadata and file paths
- Railway volume stores actual image files
- Both needed for images to work

### After Each Deploy
- Volume persists (images stay)
- Database persists (references stay)
- Container resets (but reads from volume) ✅

---

## 🎯 Recommended Approach

**For your use case (already have local images):**

1. **Option A - Manual Upload (Safest):**
   - Upload each image via production admin panel
   - Tedious but guaranteed to work
   - Best for small number of images

2. **Option B - Bulk Script (Faster):**
   - Install form-data: `pnpm add -D form-data`
   - Run upload script with credentials
   - Best for many images

3. **Going Forward:**
   - Upload new images via production admin panel
   - Or add to local, then run script periodically
   - Volume handles persistence ✅

---

## 🐛 Troubleshooting

### "File is missing on disk" errors
**Solution:** Upload the specific image via admin panel

### Images uploaded but don't load
**Check:**
- Is `NEXT_PUBLIC_SERVER_URL` set correctly? (with https://)
- Is volume mounted at `/app/public/media`?
- Are there errors in Railway logs?

### Upload script fails
**Common fixes:**
- Install form-data: `pnpm add -D form-data`
- Check credentials are correct
- Ensure local `public/media/` directory exists

---

## 📚 Documentation

**Full guide:** See `MEDIA-SYNC-GUIDE.md`  
**Upload script:** See `scripts/upload-media-to-production.mjs`  
**Railway volume:** Check Railway Dashboard → Volumes

---

## ✨ Summary

**The Fix:**
1. Your volume is configured correctly ✅
2. Just upload images via admin panel
3. Or use the bulk upload script
4. Images will persist across deploys ✅

**Quick win:**
```bash
# Go to admin panel and upload one image to test
https://sunrise-systems-production.up.railway.app/admin
```

That's it! The technical setup is done. Just add your images. 🎉

