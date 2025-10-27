# CMS Backup & Restore

Complete backup solution for your Payload CMS including database, media files, and configuration.

## Quick Start

### Create a Backup

```bash
# Using npm script (recommended)
pnpm backup

# Or directly
./backup-restore/backup.sh
```

### Restore a Backup

```bash
# List available backups
ls -lh backups/

# Restore specific backup
./backup-restore/restore.sh backups/20250126_143022
```

## What Gets Backed Up

✅ **MongoDB Database** - All collections (pages, services, case studies, media metadata, users, globals)  
✅ **Media Files** - All uploaded images and generated variants  
✅ **Configuration Template** - Environment setup reference (credentials excluded)  
✅ **Verification** - Checksums for integrity checking  

## Prerequisites

Install MongoDB Database Tools:

```bash
# macOS
brew install mongodb-database-tools

# Linux
sudo apt-get install mongodb-database-tools

# Windows
# Download from: https://www.mongodb.com/try/download/database-tools
```

## Documentation

See **[BACKUP-GUIDE.md](./BACKUP-GUIDE.md)** for:
- Detailed instructions
- Security best practices
- Troubleshooting
- Automated scheduling
- Cloud storage options

## File Structure

```
backup-restore/
├── README.md           # This file
├── BACKUP-GUIDE.md     # Complete documentation
├── backup.sh           # Backup script
├── restore.sh          # Restore script
└── .gitignore          # Prevents committing backups

backups/                # Created when you run backups
└── 20250126_143022/    # Timestamped backup
    ├── database/       # MongoDB dump
    ├── media/          # All media files
    ├── BACKUP_INFO.md  # Backup details
    ├── checksums.txt   # Integrity verification
    └── env-template.txt # Config reference
```

## NPM Scripts

```bash
# Create backup
pnpm backup

# Restore (requires backup path as argument)
pnpm backup:restore backups/20250126_143022
```

## Important Notes

⚠️ **Security:**
- Backups are excluded from git (via .gitignore)
- Never commit `.env` files or backups to git
- Store backups securely (external drive, encrypted cloud storage)

⚠️ **Restore Warning:**
- Restore REPLACES all current CMS data
- Always create a backup before restoring
- Test restores in development first

## Support

For issues or questions:
1. Check [BACKUP-GUIDE.md](./BACKUP-GUIDE.md) troubleshooting section
2. Verify MongoDB Database Tools are installed
3. Check `.env` has correct DATABASE_URI
4. Ensure sufficient disk space

---

**Last Updated:** January 2025

