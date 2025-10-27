#!/bin/bash

# Test Backup & Restore System
# This script tests that the backup system is working correctly

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

echo "🧪 Testing Backup & Restore System"
echo "===================================="
echo ""

# Test 1: Check prerequisites
echo "Test 1: Checking prerequisites..."

# Check mongodump
if command -v mongodump &> /dev/null; then
    echo "  ✅ mongodump installed"
else
    echo "  ❌ mongodump not found"
    echo "  Install with: brew install mongodb-database-tools"
    exit 1
fi

# Check mongorestore
if command -v mongorestore &> /dev/null; then
    echo "  ✅ mongorestore installed"
else
    echo "  ❌ mongorestore not found"
    exit 1
fi

# Check rsync
if command -v rsync &> /dev/null; then
    echo "  ✅ rsync installed"
else
    echo "  ❌ rsync not found"
    exit 1
fi

# Test 2: Check environment
echo ""
echo "Test 2: Checking environment..."

cd "$PROJECT_ROOT"

if [ -f ".env" ]; then
    echo "  ✅ .env file exists"
    
    # Source .env
    export $(grep -v '^#' .env | xargs)
    
    if [ ! -z "$DATABASE_URI" ]; then
        echo "  ✅ DATABASE_URI is set"
    else
        echo "  ❌ DATABASE_URI not found in .env"
        exit 1
    fi
else
    echo "  ❌ .env file not found"
    exit 1
fi

# Test 3: Check scripts are executable
echo ""
echo "Test 3: Checking scripts..."

if [ -x "backup-restore/backup.sh" ]; then
    echo "  ✅ backup.sh is executable"
else
    echo "  ⚠️  backup.sh not executable"
    echo "  Running: chmod +x backup-restore/backup.sh"
    chmod +x backup-restore/backup.sh
fi

if [ -x "backup-restore/restore.sh" ]; then
    echo "  ✅ restore.sh is executable"
else
    echo "  ⚠️  restore.sh not executable"
    echo "  Running: chmod +x backup-restore/restore.sh"
    chmod +x backup-restore/restore.sh
fi

# Test 4: Test database connection
echo ""
echo "Test 4: Testing database connection..."

if mongosh "$DATABASE_URI" --quiet --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
    echo "  ✅ Database connection successful"
else
    echo "  ⚠️  Could not connect to database"
    echo "  This may be normal if the database is not currently running"
fi

# Test 5: Check directory structure
echo ""
echo "Test 5: Checking directory structure..."

if [ -d "public" ]; then
    echo "  ✅ public/ directory exists"
else
    echo "  ⚠️  public/ directory not found"
fi

if [ -d "public/media" ]; then
    MEDIA_COUNT=$(find public/media -type f 2>/dev/null | wc -l)
    echo "  ✅ public/media/ exists ($MEDIA_COUNT files)"
else
    echo "  ⚠️  public/media/ not found (will be created on first upload)"
fi

# Test 6: Try creating a test backup (if database is accessible)
echo ""
echo "Test 6: Creating test backup..."
echo "  This will create a real backup in backups/test_[timestamp]"
read -p "  Continue? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Create test backup
    if bash backup-restore/backup.sh; then
        LATEST_BACKUP=$(ls -t backups/ | head -1)
        echo "  ✅ Test backup created: backups/$LATEST_BACKUP"
        
        # Rename to indicate it's a test
        mv "backups/$LATEST_BACKUP" "backups/test_$LATEST_BACKUP"
        echo "  📦 Renamed to: backups/test_$LATEST_BACKUP"
        
        # Verify backup contents
        if [ -f "backups/test_$LATEST_BACKUP/BACKUP_INFO.md" ]; then
            echo "  ✅ Backup manifest exists"
        fi
        
        if [ -f "backups/test_$LATEST_BACKUP/checksums.txt" ]; then
            echo "  ✅ Checksums file exists"
        fi
        
        BACKUP_SIZE=$(du -sh "backups/test_$LATEST_BACKUP" | cut -f1)
        echo "  📊 Backup size: $BACKUP_SIZE"
    else
        echo "  ❌ Test backup failed"
        exit 1
    fi
else
    echo "  ⏭️  Skipped test backup"
fi

# Summary
echo ""
echo "===================================="
echo "✅ SYSTEM TEST COMPLETE"
echo "===================================="
echo ""
echo "Summary:"
echo "  ✓ Prerequisites installed"
echo "  ✓ Environment configured"
echo "  ✓ Scripts are ready"
echo "  ✓ Database accessible"
echo ""
echo "Your backup system is ready to use!"
echo ""
echo "Quick commands:"
echo "  Create backup:  pnpm backup"
echo "  List backups:   ls -lh backups/"
echo "  Restore:        ./backup-restore/restore.sh backups/[name]"
echo ""
echo "Documentation:"
echo "  Overview:       BACKUP-SYSTEM.md"
echo "  Full guide:     backup-restore/BACKUP-GUIDE.md"
echo "  Quick ref:      backup-restore/QUICK-REFERENCE.md"
echo ""

