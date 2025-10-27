# 🔐 CMS Backup System

Your Payload CMS now has a complete backup & restore system for all content, images, and configuration.

## ⚡ Quick Start

### Create a Backup
```bash
pnpm backup
```

### Restore a Backup
```bash
./backup-restore/restore.sh backups/YYYYMMDD_HHMMSS
```

## 📦 What Gets Backed Up

✅ **Complete MongoDB Database**
- All pages, services, case studies
- Media metadata and references
- Users and permissions
- Navigation (header/footer)
- System collections

✅ **All Media Files**
- Original uploads
- All generated image sizes (thumbnail, small, medium, large, xlarge, og)
- Preserves directory structure

✅ **Configuration Template**
- Environment setup reference
- Excludes credentials for security

✅ **Verification Data**
- Checksums for integrity checking
- Backup manifest with details

## 📚 Documentation

| File | Purpose |
|------|---------|
| **[backup-restore/README.md](./backup-restore/README.md)** | Overview & quick start |
| **[backup-restore/BACKUP-GUIDE.md](./backup-restore/BACKUP-GUIDE.md)** | Complete documentation |
| **[backup-restore/QUICK-REFERENCE.md](./backup-restore/QUICK-REFERENCE.md)** | Command cheatsheet |
| **[backup-restore/examples/setup-cron.md](./backup-restore/examples/setup-cron.md)** | Automated scheduling |

## 🎯 Common Use Cases

### Before Major Content Updates
```bash
pnpm backup
# Backup created: backups/20250126_143022/
# Now safe to make changes in CMS
```

### Before Deployment
```bash
pnpm backup
git add .
git commit -m "Deploy updates"
git push
```

### Before Database Migrations
```bash
pnpm backup
pnpm payload migrate
```

### Restore to Previous State
```bash
# List available backups
ls -lt backups/

# Restore specific backup
./backup-restore/restore.sh backups/20250126_143022

# Restart server
pnpm dev
```

## ⚙️ Setup Requirements

### Install MongoDB Database Tools (One-time)

**macOS:**
```bash
brew install mongodb-database-tools
```

**Linux:**
```bash
sudo apt-get install mongodb-database-tools
```

**Windows:**
Download from https://www.mongodb.com/try/download/database-tools

### Verify Installation
```bash
mongodump --version
mongorestore --version
```

## 🔐 Security

- ✅ Backups are **excluded from git** (via .gitignore)
- ✅ Environment credentials **not stored** in backups
- ✅ Checksums verify backup integrity
- ⚠️ **Store backups externally** (cloud/external drive)
- ⚠️ **Never commit** backups to repository

## 📊 Backup Structure

```
backups/
└── 20250126_143022/              # Timestamped backup
    ├── database/                 # MongoDB dump (gzipped)
    │   └── sunrise-systems/
    │       ├── pages.bson.gz
    │       ├── services.bson.gz
    │       ├── case-studies.bson.gz
    │       └── media.bson.gz
    │
    ├── media/                    # All uploaded files
    │   ├── image1.jpg
    │   ├── image2.png
    │   └── ...
    │
    ├── BACKUP_INFO.md            # Backup details & manifest
    ├── checksums.txt             # Integrity verification
    └── env-template.txt          # Config reference
```

## 🚀 Advanced Features

### Automated Backups
Set up daily/weekly automated backups with cron or LaunchAgent.

See: [backup-restore/examples/setup-cron.md](./backup-restore/examples/setup-cron.md)

### Cloud Storage Integration
Upload backups to AWS S3, Google Drive, or Dropbox.

See: [backup-restore/QUICK-REFERENCE.md](./backup-restore/QUICK-REFERENCE.md#cloud-storage-examples)

### Verification & Testing
Always verify your backups work by testing restoration.

```bash
# Verify backup integrity
cd backups/20250126_143022
shasum -a 256 -c checksums.txt
```

## ⚠️ Important Notes

**Before Restoring:**
1. ✅ Create a backup of current state
2. ✅ Verify backup integrity (checksums)
3. ✅ Confirm you have correct DATABASE_URI in .env
4. ⚠️ **Restore REPLACES all current data**

**Backup Best Practices:**
- 📅 Backup before major changes
- 📅 Backup before deployments
- 📅 Keep multiple versions (30 days recommended)
- 📅 Test restore process periodically
- 📅 Store off-site (cloud storage)

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| `mongodump not found` | Install MongoDB Database Tools |
| `Connection failed` | Check DATABASE_URI in .env |
| `Permission denied` | `chmod +x backup-restore/*.sh` |
| `Backup too large` | Normal for sites with many images |

**Full troubleshooting guide:** [backup-restore/BACKUP-GUIDE.md](./backup-restore/BACKUP-GUIDE.md#troubleshooting)

## 💡 Tips

- **Quick backup before changes:** `pnpm backup`
- **Name important backups:** Move and rename for clarity
  ```bash
  mv backups/20250126_143022 backups/before_homepage_redesign
  ```
- **Check backup size:** `du -sh backups/*`
- **Clean old backups:** Delete backups older than 30 days
- **Test restores:** Periodically verify backups work

## 📞 Need Help?

1. Check [BACKUP-GUIDE.md](./backup-restore/BACKUP-GUIDE.md) for detailed instructions
2. See [QUICK-REFERENCE.md](./backup-restore/QUICK-REFERENCE.md) for command examples
3. Review [setup-cron.md](./backup-restore/examples/setup-cron.md) for automation

---

**Status:** ✅ Backup system fully configured and ready to use  
**Last Updated:** January 2025

