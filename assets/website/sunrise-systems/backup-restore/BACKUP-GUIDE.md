# Sunrise Systems CMS - Backup & Restore Guide

Complete guide for backing up and restoring your Payload CMS content, including all pages, services, case studies, media files, and configuration.

---

## 📦 What Gets Backed Up

### 1. MongoDB Database
All CMS content stored in MongoDB:
- **Pages** - All page content and layouts
- **Posts** - Blog posts
- **Services** - Sales, Marketing, Software services
- **Case Studies** - Client case studies with metrics
- **Media** - Image metadata and references
- **Categories** - Content categorization
- **Users** - Admin users and permissions
- **Globals** - Header and Footer navigation
- **System Collections** - Preferences, migrations, jobs

### 2. Media Files
All uploaded images and their generated variants:
- Original uploads
- Thumbnails (300px)
- Square (500x500px)
- Small (600px)
- Medium (900px)
- Large (1400px)
- XLarge (1920px)
- OG images (1200x630px)

### 3. Configuration
Environment configuration template (credentials excluded for security)

---

## 🚀 Quick Start

### Create a Backup

```bash
cd assets/website/sunrise-systems
chmod +x backup-restore/backup.sh
./backup-restore/backup.sh
```

This creates a timestamped backup in `backups/YYYYMMDD_HHMMSS/`

### Restore a Backup

```bash
cd assets/website/sunrise-systems
chmod +x backup-restore/restore.sh
./backup-restore/restore.sh backups/20250126_143022
```

Replace `20250126_143022` with your backup's timestamp.

---

## 📋 Prerequisites

### Required Tools

1. **MongoDB Database Tools** (for mongodump/mongorestore)

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-database-tools
```

**Linux:**
```bash
sudo apt-get install mongodb-database-tools
```

**Windows:**
Download from: https://www.mongodb.com/try/download/database-tools

2. **rsync** (usually pre-installed on macOS/Linux)

**Windows:** Use WSL or Git Bash

3. **Environment Variables**
Ensure your `.env` file exists with:
```env
DATABASE_URI=mongodb://...your-railway-connection-string
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3002
```

---

## 🔧 Detailed Backup Process

### Automated Backup

The backup script performs these steps automatically:

```bash
./backup-restore/backup.sh
```

**What it does:**
1. ✅ Creates timestamped backup directory
2. ✅ Exports MongoDB database (gzipped)
3. ✅ Copies all media files with progress
4. ✅ Creates environment template
5. ✅ Generates backup manifest
6. ✅ Creates checksums for verification

**Output:**
```
backups/20250126_143022/
├── database/           # MongoDB dump (gzipped)
│   └── sunrise-systems/
│       ├── pages.bson.gz
│       ├── services.bson.gz
│       ├── case-studies.bson.gz
│       ├── media.bson.gz
│       └── ...
├── media/             # All media files
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
├── env-template.txt   # Configuration template
├── BACKUP_INFO.md     # Backup details
└── checksums.txt      # Integrity verification
```

### Manual Backup

If you prefer to backup manually:

#### 1. Export Database

```bash
# Set your database URI
export DATABASE_URI="mongodb://your-connection-string"

# Create backup directory
mkdir -p backups/manual_$(date +%Y%m%d)

# Export database
mongodump --uri="$DATABASE_URI" \
  --out="backups/manual_$(date +%Y%m%d)/database" \
  --gzip
```

#### 2. Copy Media Files

```bash
# Copy all media
cp -r public/media backups/manual_$(date +%Y%m%d)/media
```

#### 3. Document Environment

```bash
# Create env template (DO NOT copy actual .env for security)
cat > backups/manual_$(date +%Y%m%d)/env-template.txt << EOF
DATABASE_URI=<your-mongodb-uri>
PAYLOAD_SECRET=<your-secret>
NEXT_PUBLIC_SERVER_URL=<your-url>
EOF
```

---

## 🔄 Detailed Restore Process

### Automated Restore

```bash
./backup-restore/restore.sh backups/20250126_143022
```

**Safety features:**
- ✅ Verifies backup integrity via checksums
- ✅ Confirms before overwriting data
- ✅ Creates backup of existing media before restore
- ✅ Allows selective restore (database or media)

**Restore flow:**
1. Verifies backup exists and is valid
2. Checks environment configuration
3. Confirms you want to proceed (type "YES")
4. Restores database (drops existing collections)
5. Restores media files (backs up existing)
6. Verifies restoration success

### Manual Restore

#### 1. Restore Database

```bash
# Set your database URI
export DATABASE_URI="mongodb://your-connection-string"

# Restore database (WARNING: drops existing data)
mongorestore --uri="$DATABASE_URI" \
  --dir="backups/20250126_143022/database" \
  --gzip \
  --drop
```

#### 2. Restore Media Files

```bash
# Backup existing media first (optional)
mv public/media public/media.backup.$(date +%Y%m%d)

# Restore media from backup
cp -r backups/20250126_143022/media public/media
```

#### 3. Update Environment

```bash
# Ensure your .env has correct values
# Reference: backups/20250126_143022/env-template.txt
```

#### 4. Restart Server

```bash
pnpm dev
```

---

## 🔐 Security Best Practices

### What NOT to Backup in Git

The `.gitignore` should already exclude:
```
backups/
.env
.env.local
public/media/
```

### Secure Storage

**DO:**
- ✅ Store backups on external drives
- ✅ Use cloud storage with encryption (AWS S3, Google Drive, Dropbox)
- ✅ Keep multiple backup versions
- ✅ Test restores regularly
- ✅ Document where backups are stored

**DON'T:**
- ❌ Commit backups to git repository
- ❌ Store `.env` files in backups (use templates only)
- ❌ Share backups publicly
- ❌ Keep only one backup

### Cloud Storage Options

#### AWS S3

```bash
# Upload backup to S3
aws s3 sync backups/20250126_143022 \
  s3://your-bucket/sunrise-backups/20250126_143022/
```

#### Google Drive (via rclone)

```bash
# Configure rclone first: rclone config
rclone sync backups/20250126_143022 \
  gdrive:sunrise-backups/20250126_143022/
```

---

## 📅 Backup Schedule Recommendations

### Production Site

- **Daily:** Automated backups before major content updates
- **Weekly:** Full backup stored off-site
- **Before deployments:** Always backup before pushing to production
- **Before major changes:** Manual backup with descriptive name

### Development

- **Before major changes:** Backup current state
- **After seeding:** Backup the seeded content as a baseline
- **Monthly:** Archive backup for long-term reference

---

## 🛠️ Troubleshooting

### "mongodump command not found"

**Solution:** Install MongoDB Database Tools
```bash
# macOS
brew install mongodb-database-tools

# Linux
sudo apt-get install mongodb-database-tools
```

### "Database connection failed"

**Check:**
1. Is DATABASE_URI correct in `.env`?
2. Is Railway MongoDB running?
3. Are you connected to the internet?
4. Is the IP whitelist configured? (Railway usually doesn't need this)

**Test connection:**
```bash
mongosh "$DATABASE_URI" --eval "db.adminCommand('ping')"
```

### "Media files not found"

**Check:**
1. Does `public/media` directory exist?
2. Were media files uploaded via CMS?
3. Run the seed script to populate test data

### "Checksums don't match"

**Possible causes:**
- Backup was corrupted during transfer
- Files were modified after backup
- Incomplete backup

**Solution:** Create a fresh backup

### "Insufficient permissions"

**macOS/Linux:**
```bash
chmod +x backup-restore/backup.sh
chmod +x backup-restore/restore.sh
```

### "Restore seems incomplete"

**Verify:**
```bash
# Check database collections
mongosh "$DATABASE_URI" --eval "db.getCollectionNames()"

# Check media files
ls -la public/media/

# Login to admin panel
# http://localhost:3002/admin
```

---

## 🧪 Testing Your Backups

**Always test your backups!** Here's how:

### 1. Create Test Backup

```bash
./backup-restore/backup.sh
```

### 2. Make a Change in CMS

- Login to `/admin`
- Edit a page
- Upload a test image
- Save changes

### 3. Restore Backup

```bash
./backup-restore/restore.sh backups/[timestamp]
```

### 4. Verify

- Changes should be reverted
- Test image should be gone
- Everything back to backup state

---

## 📞 Support

### Common Issues

1. **Database tools not installed** → Install MongoDB Database Tools
2. **Connection errors** → Check DATABASE_URI in .env
3. **Permission errors** → Make scripts executable with chmod +x
4. **Large backups slow** → Normal for sites with many images

### Where to Get Help

- Review `BACKUP_INFO.md` in each backup
- Check Railway MongoDB status
- Verify .env configuration
- Test with manual backup first

---

## 📊 Backup Size Estimates

**Typical backup sizes:**

| Content | Size |
|---------|------|
| Fresh install (seeded) | ~50-100 MB |
| Small site (10-20 pages, few images) | ~200-500 MB |
| Medium site (50+ pages, many images) | ~1-2 GB |
| Large site (100+ pages, extensive media) | ~5-10 GB |

**Database only:** Usually < 10 MB  
**Media files:** Varies widely based on image count/size

---

## ✅ Backup Checklist

Before creating a backup:
- [ ] Server is running and accessible
- [ ] .env file exists with DATABASE_URI
- [ ] MongoDB Database Tools installed
- [ ] Enough disk space for backup
- [ ] No active uploads/changes in CMS

After creating a backup:
- [ ] Backup directory exists
- [ ] BACKUP_INFO.md shows correct date
- [ ] Database folder contains .bson.gz files
- [ ] Media folder contains image files
- [ ] Checksums.txt created
- [ ] Backup copied to secure storage

Before restoring a backup:
- [ ] Created fresh backup of current state (just in case!)
- [ ] Verified backup integrity (checksums)
- [ ] Confirmed .env has correct DATABASE_URI
- [ ] No users currently using CMS
- [ ] Understand all data will be replaced

---

## 🎯 Quick Reference

```bash
# Create backup
./backup-restore/backup.sh

# List backups
ls -lh backups/

# Restore specific backup
./backup-restore/restore.sh backups/20250126_143022

# Verify backup integrity
cd backups/20250126_143022 && shasum -a 256 -c checksums.txt

# Check backup size
du -sh backups/20250126_143022

# Upload to cloud (example)
aws s3 sync backups/20250126_143022 s3://your-bucket/backups/
```

---

**Last Updated:** January 2025  
**For:** Sunrise Systems Payload CMS v3.61.0

