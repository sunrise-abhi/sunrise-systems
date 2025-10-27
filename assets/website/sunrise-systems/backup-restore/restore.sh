#!/bin/bash

# Sunrise Systems CMS Restore Script
# This script restores a complete Payload CMS backup

set -e  # Exit on any error

# Check if backup directory is provided
if [ -z "$1" ]; then
    echo "❌ Error: No backup directory specified"
    echo ""
    echo "Usage: ./restore.sh <backup-directory>"
    echo "Example: ./restore.sh backups/20250126_143022"
    echo ""
    echo "Available backups:"
    ls -1d backups/*/ 2>/dev/null || echo "  No backups found"
    exit 1
fi

BACKUP_DIR="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🔄 Sunrise Systems CMS Restore"
echo "=============================="
echo "Restoring from: $BACKUP_DIR"
echo ""

# Verify backup exists
if [ ! -d "$PROJECT_ROOT/$BACKUP_DIR" ]; then
    echo "❌ Error: Backup directory not found: $BACKUP_DIR"
    exit 1
fi

# Verify checksums
echo "🔐 Verifying backup integrity..."
cd "$PROJECT_ROOT/$BACKUP_DIR"
if [ -f "checksums.txt" ]; then
    if shasum -a 256 -c checksums.txt --quiet 2>/dev/null; then
        echo "✅ Backup integrity verified"
    else
        echo "⚠️  Warning: Some checksums don't match. Backup may be corrupted."
        read -p "Continue anyway? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
else
    echo "⚠️  Warning: No checksums file found"
fi
cd "$PROJECT_ROOT"

# Safety check
echo ""
echo "⚠️  WARNING: This will replace your current CMS data!"
echo ""
read -p "Are you sure you want to continue? Type 'YES' to confirm: " CONFIRM

if [ "$CONFIRM" != "YES" ]; then
    echo "❌ Restore cancelled"
    exit 1
fi

# Step 1: Restore environment variables
echo ""
echo "🔧 Step 1: Environment configuration..."
if [ -f "$PROJECT_ROOT/$BACKUP_DIR/env-template.txt" ]; then
    echo "📄 Environment template found at: $BACKUP_DIR/env-template.txt"
    echo ""
    echo "⚠️  IMPORTANT: Make sure your .env file has the correct credentials:"
    echo "  - DATABASE_URI (your MongoDB connection string)"
    echo "  - PAYLOAD_SECRET"
    echo "  - NEXT_PUBLIC_SERVER_URL"
    echo ""
    read -p "Press Enter when you've verified your .env file..."
fi

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

# Step 2: Restore MongoDB Database
echo ""
echo "📦 Step 2: Restoring MongoDB database..."
echo "⚠️  This will DROP existing collections and replace them!"
read -p "Continue with database restore? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [ -d "$PROJECT_ROOT/$BACKUP_DIR/database" ]; then
        # Use mongorestore with --drop to replace existing data
        mongorestore --uri="$DATABASE_URI" --dir="$PROJECT_ROOT/$BACKUP_DIR/database" --gzip --drop
        
        if [ $? -eq 0 ]; then
            echo "✅ Database restore completed"
        else
            echo "❌ Database restore failed"
            exit 1
        fi
    else
        echo "❌ Error: Database backup not found in $BACKUP_DIR"
        exit 1
    fi
else
    echo "⏭️  Skipping database restore"
fi

# Step 3: Restore Media Files
echo ""
echo "📸 Step 3: Restoring media files..."
read -p "Continue with media restore? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [ -d "$PROJECT_ROOT/$BACKUP_DIR/media" ]; then
        # Create backup of existing media
        if [ -d "$PROJECT_ROOT/public/media" ]; then
            echo "📦 Creating backup of existing media..."
            mv "$PROJECT_ROOT/public/media" "$PROJECT_ROOT/public/media.backup.$(date +%Y%m%d_%H%M%S)"
        fi
        
        # Restore media files
        mkdir -p "$PROJECT_ROOT/public/media"
        rsync -av --progress "$PROJECT_ROOT/$BACKUP_DIR/media/" "$PROJECT_ROOT/public/media/"
        
        echo "✅ Media files restored"
    else
        echo "⚠️  No media files found in backup"
    fi
else
    echo "⏭️  Skipping media restore"
fi

# Step 4: Verify restoration
echo ""
echo "🔍 Step 4: Verification..."

# Check if database collections exist
echo "Checking database connection..."
if mongosh "$DATABASE_URI" --quiet --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
    echo "✅ Database connection successful"
else
    echo "⚠️  Could not verify database connection"
fi

# Check media files
if [ -d "$PROJECT_ROOT/public/media" ]; then
    MEDIA_COUNT=$(find "$PROJECT_ROOT/public/media" -type f | wc -l)
    echo "✅ Media directory exists ($MEDIA_COUNT files)"
else
    echo "⚠️  Media directory not found"
fi

# Final summary
echo ""
echo "=============================="
echo "✅ RESTORE COMPLETE!"
echo "=============================="
echo ""
echo "📋 What was restored:"
echo "  ✓ MongoDB database (all collections)"
echo "  ✓ Media files"
echo ""
echo "💡 Next steps:"
echo "  1. Restart your development server:"
echo "     cd $PROJECT_ROOT && pnpm dev"
echo ""
echo "  2. Verify the restore:"
echo "     - Login to admin panel: http://localhost:3002/admin"
echo "     - Check pages, services, case studies"
echo "     - Verify images are displaying correctly"
echo ""
echo "  3. If anything is wrong, your old media is backed up at:"
echo "     public/media.backup.*"
echo ""

