#!/bin/bash

# Sunrise Systems CMS Backup Script
# This script creates a complete backup of your Payload CMS state including:
# - MongoDB database (all collections)
# - Media files (images and uploads)
# - Environment configuration template

set -e  # Exit on any error

# Configuration
BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🚀 Sunrise Systems CMS Backup"
echo "=============================="
echo "Backup location: $BACKUP_DIR"
echo ""

# Create backup directory
mkdir -p "$PROJECT_ROOT/$BACKUP_DIR"

# Step 1: Backup MongoDB Database
echo "📦 Step 1: Backing up MongoDB database..."

# Source environment variables
if [ -f "$PROJECT_ROOT/.env" ]; then
    export $(grep -v '^#' "$PROJECT_ROOT/.env" | xargs)
else
    echo "❌ Error: .env file not found"
    exit 1
fi

if [ -z "$DATABASE_URI" ]; then
    echo "❌ Error: DATABASE_URI not found in .env"
    exit 1
fi

# Export MongoDB using mongodump
# This works with Railway MongoDB and includes all collections
mongodump --uri="$DATABASE_URI" --out="$PROJECT_ROOT/$BACKUP_DIR/database" --gzip

if [ $? -eq 0 ]; then
    echo "✅ Database backup completed"
else
    echo "❌ Database backup failed"
    exit 1
fi

# Step 2: Backup Media Files
echo ""
echo "📸 Step 2: Backing up media files..."

if [ -d "$PROJECT_ROOT/public/media" ]; then
    # Use rsync for efficient copying with progress
    rsync -av --progress "$PROJECT_ROOT/public/media/" "$PROJECT_ROOT/$BACKUP_DIR/media/"
    echo "✅ Media files backup completed"
else
    echo "⚠️  Warning: public/media directory not found (no media to backup)"
fi

# Step 3: Create environment template (WITHOUT sensitive values)
echo ""
echo "🔧 Step 3: Creating environment configuration template..."

cat > "$PROJECT_ROOT/$BACKUP_DIR/env-template.txt" << 'EOF'
# Environment Configuration Template
# This backup was created on: $(date)
# 
# IMPORTANT: This file does NOT contain actual credentials for security.
# When restoring, you'll need to manually set these values.

DATABASE_URI=<your-mongodb-connection-string>
PAYLOAD_SECRET=<your-payload-secret>
NEXT_PUBLIC_SERVER_URL=<your-server-url>

# Add any other environment variables your project uses
EOF

echo "✅ Environment template created"

# Step 4: Create backup manifest
echo ""
echo "📋 Step 4: Creating backup manifest..."

cat > "$PROJECT_ROOT/$BACKUP_DIR/BACKUP_INFO.md" << EOF
# Sunrise Systems CMS Backup

**Created:** $(date)
**Backup ID:** $(basename $BACKUP_DIR)

## Contents

### 1. Database Backup
- **Location:** \`database/\`
- **Format:** MongoDB dump (gzipped)
- **Collections included:**
  - pages
  - posts
  - services
  - case-studies (CaseStudies)
  - media
  - categories
  - users
  - payload-preferences
  - payload-migrations
  - payload-locked-documents
  - payload-jobs
  - header (global)
  - footer (global)

### 2. Media Files
- **Location:** \`media/\`
- **Includes:** All uploaded images and their generated sizes

### 3. Environment Configuration
- **Location:** \`env-template.txt\`
- **Note:** Template only - you must manually add credentials when restoring

## How to Restore

See \`../RESTORE.md\` for complete restoration instructions.

## Backup Size

\`\`\`bash
$(du -sh "$PROJECT_ROOT/$BACKUP_DIR" 2>/dev/null || echo "Calculating...")
\`\`\`

EOF

echo "✅ Backup manifest created"

# Step 5: Create checksums for verification
echo ""
echo "🔐 Step 5: Creating checksums for verification..."

cd "$PROJECT_ROOT/$BACKUP_DIR"
find . -type f -exec shasum -a 256 {} \; > checksums.txt
cd "$PROJECT_ROOT"

echo "✅ Checksums created"

# Final summary
echo ""
echo "=============================="
echo "✅ BACKUP COMPLETE!"
echo "=============================="
echo ""
echo "Backup saved to: $BACKUP_DIR"
echo "Total size: $(du -sh "$PROJECT_ROOT/$BACKUP_DIR" | cut -f1)"
echo ""
echo "📦 What was backed up:"
echo "  ✓ MongoDB database (all collections)"
echo "  ✓ Media files (public/media)"
echo "  ✓ Configuration template"
echo "  ✓ Backup manifest"
echo "  ✓ Checksums for verification"
echo ""
echo "💡 Next steps:"
echo "  1. Store this backup in a safe location (external drive, cloud storage)"
echo "  2. Test restoration periodically to ensure backups work"
echo "  3. Keep multiple backup versions"
echo ""
echo "To restore this backup later, see: backup-restore/RESTORE.md"

