#!/bin/bash

# Automated Backup Script for Cron/Scheduled Tasks
# 
# This script automates backups with:
# - Automatic cleanup of old backups
# - Upload to cloud storage (optional)
# - Email notifications (optional)
# - Logging

set -e

# Configuration
PROJECT_DIR="/path/to/your/sunrise-systems"  # UPDATE THIS
BACKUP_RETENTION_DAYS=30  # Keep backups for 30 days
LOG_FILE="$PROJECT_DIR/backup-restore/logs/backup.log"

# Optional: Cloud storage (uncomment and configure)
# CLOUD_STORAGE="s3://your-bucket/sunrise-backups"
# CLOUD_STORAGE="gdrive:sunrise-backups"

# Optional: Email notifications (uncomment and configure)
# NOTIFICATION_EMAIL="admin@yourdomain.com"

# ===== DO NOT EDIT BELOW THIS LINE =====

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Create log directory
mkdir -p "$(dirname "$LOG_FILE")"

log "========================================="
log "Starting automated backup"
log "========================================="

# Change to project directory
cd "$PROJECT_DIR"

# Run backup
log "Creating backup..."
if bash backup-restore/backup.sh >> "$LOG_FILE" 2>&1; then
    log "✅ Backup created successfully"
    BACKUP_DIR=$(ls -t backups/ | head -1)
    BACKUP_SIZE=$(du -sh "backups/$BACKUP_DIR" | cut -f1)
    log "Backup location: backups/$BACKUP_DIR"
    log "Backup size: $BACKUP_SIZE"
else
    log "❌ Backup failed!"
    # Send error notification if configured
    if [ ! -z "$NOTIFICATION_EMAIL" ]; then
        echo "Backup failed on $(date)" | mail -s "Sunrise Systems Backup Failed" "$NOTIFICATION_EMAIL"
    fi
    exit 1
fi

# Upload to cloud storage if configured
if [ ! -z "$CLOUD_STORAGE" ]; then
    log "Uploading to cloud storage: $CLOUD_STORAGE"
    
    if [[ "$CLOUD_STORAGE" == s3://* ]]; then
        # AWS S3
        if aws s3 sync "backups/$BACKUP_DIR" "$CLOUD_STORAGE/$BACKUP_DIR" >> "$LOG_FILE" 2>&1; then
            log "✅ Uploaded to S3"
        else
            log "⚠️  S3 upload failed"
        fi
    elif [[ "$CLOUD_STORAGE" == gdrive:* ]]; then
        # Google Drive via rclone
        if rclone sync "backups/$BACKUP_DIR" "$CLOUD_STORAGE/$BACKUP_DIR" >> "$LOG_FILE" 2>&1; then
            log "✅ Uploaded to Google Drive"
        else
            log "⚠️  Google Drive upload failed"
        fi
    fi
fi

# Cleanup old backups
log "Cleaning up backups older than $BACKUP_RETENTION_DAYS days..."
find backups/ -maxdepth 1 -type d -mtime +$BACKUP_RETENTION_DAYS -exec rm -rf {} \;
log "✅ Cleanup complete"

# Count remaining backups
BACKUP_COUNT=$(ls -1d backups/*/ 2>/dev/null | wc -l)
log "Total backups: $BACKUP_COUNT"

# Send success notification if configured
if [ ! -z "$NOTIFICATION_EMAIL" ]; then
    echo "Backup completed successfully on $(date). Size: $BACKUP_SIZE" | \
        mail -s "Sunrise Systems Backup Success" "$NOTIFICATION_EMAIL"
fi

log "========================================="
log "Automated backup complete"
log "========================================="
log ""

