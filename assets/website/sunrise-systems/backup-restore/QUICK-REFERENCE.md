# Backup & Restore - Quick Reference

## Common Commands

### Create Backup
```bash
pnpm backup
```

### List Backups
```bash
ls -lh backups/
```

### Restore Backup
```bash
./backup-restore/restore.sh backups/YYYYMMDD_HHMMSS
```

### Check Backup Size
```bash
du -sh backups/*
```

### Verify Backup Integrity
```bash
cd backups/YYYYMMDD_HHMMSS
shasum -a 256 -c checksums.txt
```

---

## Backup Before Important Operations

### Before Major Content Changes
```bash
# 1. Create backup with descriptive name
pnpm backup
mv backups/$(ls -t backups/ | head -1) backups/before_major_update_$(date +%Y%m%d)

# 2. Make your changes in CMS
# 3. Test thoroughly
```

### Before Deployment
```bash
# Always backup before pushing to production
pnpm backup
git add .
git commit -m "Deploy: [description]"
git push
```

### Before Database Migration
```bash
# Backup current state
pnpm backup

# Run migration
pnpm payload migrate

# If issues, restore
./backup-restore/restore.sh backups/[timestamp]
```

---

## Cloud Storage Examples

### AWS S3
```bash
# Upload backup
aws s3 sync backups/20250126_143022 \
  s3://your-bucket/sunrise-backups/20250126_143022/

# Download backup
aws s3 sync s3://your-bucket/sunrise-backups/20250126_143022/ \
  backups/20250126_143022
```

### Google Drive (rclone)
```bash
# One-time setup
rclone config

# Upload backup
rclone sync backups/20250126_143022 \
  gdrive:sunrise-backups/20250126_143022/

# Download backup
rclone sync gdrive:sunrise-backups/20250126_143022/ \
  backups/20250126_143022
```

### Dropbox (rclone)
```bash
# Upload
rclone sync backups/20250126_143022 \
  dropbox:sunrise-backups/20250126_143022/
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `mongodump not found` | Install MongoDB Database Tools: `brew install mongodb-database-tools` |
| `Connection failed` | Check DATABASE_URI in .env file |
| `Permission denied` | Make scripts executable: `chmod +x backup-restore/*.sh` |
| `Backup too large` | Normal for sites with many images; increase storage |
| `Checksums failed` | Backup may be corrupted; create fresh backup |

---

## Recommended Backup Schedule

| Environment | Frequency | When |
|------------|-----------|------|
| **Development** | Weekly | Every Friday |
| **Development** | Before changes | Major updates |
| **Production** | Daily | Automated (3 AM) |
| **Production** | Before deploy | Every deployment |
| **Production** | Monthly archive | Keep long-term |

---

## File Locations

```
📁 Project Root
├── 📁 backup-restore/          # Scripts & docs
│   ├── backup.sh               # Create backup
│   ├── restore.sh              # Restore backup
│   ├── BACKUP-GUIDE.md         # Full documentation
│   ├── QUICK-REFERENCE.md      # This file
│   └── README.md               # Overview
│
└── 📁 backups/                 # Created by script
    └── 📁 20250126_143022/     # Timestamped backup
        ├── 📁 database/        # MongoDB dump
        ├── 📁 media/           # Image files
        ├── BACKUP_INFO.md      # Backup details
        ├── checksums.txt       # Verification
        └── env-template.txt    # Config reference
```

---

## Emergency Restore

If you need to restore quickly:

```bash
# 1. Find latest backup
ls -t backups/ | head -1

# 2. Restore it
./backup-restore/restore.sh backups/$(ls -t backups/ | head -1)

# 3. Restart server
pnpm dev
```

---

## Backup Verification Checklist

After creating a backup, verify:

- [ ] Backup directory exists in `backups/`
- [ ] `database/` folder contains `.bson.gz` files
- [ ] `media/` folder contains image files
- [ ] `BACKUP_INFO.md` shows correct timestamp
- [ ] `checksums.txt` exists
- [ ] Total size seems reasonable

Test restore in development:
- [ ] Restore to dev environment
- [ ] Login to /admin
- [ ] Check pages load correctly
- [ ] Verify images display
- [ ] Confirm data is complete

---

## Environment Variables Required

Your `.env` must include:

```bash
DATABASE_URI=mongodb://...      # Required for backup/restore
PAYLOAD_SECRET=...              # Required for CMS
NEXT_PUBLIC_SERVER_URL=...      # Required for frontend
```

---

## Safety Tips

✅ **DO:**
- Create backup before major changes
- Test restores periodically
- Store backups externally (cloud/external drive)
- Keep multiple backup versions
- Document what's in each backup

❌ **DON'T:**
- Commit backups to git
- Store only one backup
- Forget to test restores
- Skip backups before deployments
- Share backups publicly

---

## Size Guidelines

**Database only:** Usually < 10 MB  
**Fresh install:** ~50-100 MB  
**Small site:** ~200-500 MB (10-20 pages)  
**Medium site:** ~1-2 GB (50+ pages)  
**Large site:** ~5-10 GB (100+ pages)

---

**Need more help?** See [BACKUP-GUIDE.md](./BACKUP-GUIDE.md)

