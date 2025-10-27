# Setting Up Automated Backups with Cron

Automate your CMS backups to run on a schedule.

## Option 1: Simple Daily Backup (Recommended)

### 1. Make script executable
```bash
chmod +x backup-restore/examples/automated-backup.sh
```

### 2. Edit configuration
```bash
nano backup-restore/examples/automated-backup.sh
```

Update these variables:
```bash
PROJECT_DIR="/Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems"
BACKUP_RETENTION_DAYS=30
```

Optional - add cloud storage:
```bash
# For AWS S3
CLOUD_STORAGE="s3://your-bucket/sunrise-backups"

# For Google Drive (requires rclone)
CLOUD_STORAGE="gdrive:sunrise-backups"
```

### 3. Test the script
```bash
cd /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems
./backup-restore/examples/automated-backup.sh
```

### 4. Setup cron job

```bash
# Edit crontab
crontab -e
```

Add one of these lines:

```bash
# Daily at 3 AM
0 3 * * * /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/examples/automated-backup.sh

# Every Sunday at 2 AM
0 2 * * 0 /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/examples/automated-backup.sh

# Every 6 hours
0 */6 * * * /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/examples/automated-backup.sh

# Twice daily (6 AM and 6 PM)
0 6,18 * * * /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/examples/automated-backup.sh
```

### 5. Verify cron job

```bash
# List current cron jobs
crontab -l
```

---

## Option 2: macOS LaunchAgent (Alternative to Cron)

macOS users can use LaunchAgents for more reliable scheduling.

### 1. Create LaunchAgent plist

```bash
nano ~/Library/LaunchAgents/com.sunrise-systems.backup.plist
```

Paste this configuration:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.sunrise-systems.backup</string>
    
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/examples/automated-backup.sh</string>
    </array>
    
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>3</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    
    <key>StandardOutPath</key>
    <string>/Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/logs/launchagent.log</string>
    
    <key>StandardErrorPath</key>
    <string>/Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems/backup-restore/logs/launchagent-error.log</string>
</dict>
</plist>
```

### 2. Load the LaunchAgent

```bash
# Load the agent
launchctl load ~/Library/LaunchAgents/com.sunrise-systems.backup.plist

# Verify it's loaded
launchctl list | grep sunrise-systems
```

### 3. Manage the LaunchAgent

```bash
# Stop the agent
launchctl unload ~/Library/LaunchAgents/com.sunrise-systems.backup.plist

# Restart the agent
launchctl unload ~/Library/LaunchAgents/com.sunrise-systems.backup.plist
launchctl load ~/Library/LaunchAgents/com.sunrise-systems.backup.plist

# Test run manually
launchctl start com.sunrise-systems.backup
```

---

## Option 3: Windows Task Scheduler

### 1. Create PowerShell script

Save as `automated-backup.ps1`:

```powershell
# Set project directory
$ProjectDir = "C:\Users\YourUser\sunrise-systems\assets\website\sunrise-systems"
cd $ProjectDir

# Run backup
bash backup-restore/backup.sh

# Optional: Upload to cloud
# aws s3 sync backups/ s3://your-bucket/sunrise-backups/

# Cleanup old backups (older than 30 days)
Get-ChildItem -Path backups -Directory | 
    Where-Object { $_.CreationTime -lt (Get-Date).AddDays(-30) } | 
    Remove-Item -Recurse -Force
```

### 2. Create Scheduled Task

1. Open Task Scheduler
2. Create Basic Task
3. Name: "Sunrise Systems Backup"
4. Trigger: Daily at 3:00 AM
5. Action: Start a program
   - Program: `powershell.exe`
   - Arguments: `-ExecutionPolicy Bypass -File "C:\path\to\automated-backup.ps1"`
6. Finish

---

## Cron Schedule Examples

```bash
# Cron format:
# * * * * * command
# │ │ │ │ │
# │ │ │ │ └─── Day of week (0-7, Sunday = 0 or 7)
# │ │ │ └───── Month (1-12)
# │ │ └─────── Day of month (1-31)
# │ └───────── Hour (0-23)
# └─────────── Minute (0-59)

# Every day at 2 AM
0 2 * * * /path/to/script.sh

# Every Sunday at midnight
0 0 * * 0 /path/to/script.sh

# Every 12 hours
0 */12 * * * /path/to/script.sh

# Monday to Friday at 1 AM
0 1 * * 1-5 /path/to/script.sh

# First day of every month at 3 AM
0 3 1 * * /path/to/script.sh
```

---

## Monitoring Your Backups

### Check logs

```bash
# View recent backup logs
tail -f backup-restore/logs/backup.log

# Check last 50 lines
tail -n 50 backup-restore/logs/backup.log

# Search for errors
grep "Error\|Failed" backup-restore/logs/backup.log
```

### Verify backups are running

```bash
# List backups with dates
ls -lt backups/

# Check backup sizes
du -sh backups/*

# Count backups
ls -1d backups/*/ | wc -l
```

### Set up alerts

Add to your automated script:

```bash
# Slack notification (requires webhook)
curl -X POST -H 'Content-type: application/json' \
    --data '{"text":"Backup completed: $BACKUP_SIZE"}' \
    https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Discord notification
curl -X POST -H 'Content-Type: application/json' \
    --data '{"content":"Backup completed: $BACKUP_SIZE"}' \
    https://discord.com/api/webhooks/YOUR/WEBHOOK
```

---

## Troubleshooting Cron

### Cron job not running?

1. **Check cron is running**
   ```bash
   # macOS
   sudo launchctl list | grep cron
   
   # Linux
   systemctl status cron
   ```

2. **Check cron logs**
   ```bash
   # macOS
   grep CRON /var/log/system.log
   
   # Linux
   grep CRON /var/log/syslog
   ```

3. **Use absolute paths**
   Cron runs with limited environment. Always use full paths:
   ```bash
   0 3 * * * /usr/local/bin/bash /full/path/to/script.sh
   ```

4. **Set environment variables in cron**
   ```bash
   0 3 * * * cd /path/to/project && /bin/bash backup.sh
   ```

5. **Redirect output to debug**
   ```bash
   0 3 * * * /path/to/script.sh >> /path/to/cron.log 2>&1
   ```

---

## Best Practices

✅ **DO:**
- Test your automated script manually first
- Check logs regularly
- Monitor disk space
- Set up cleanup of old backups
- Verify backups are actually created
- Store logs for troubleshooting

❌ **DON'T:**
- Run backups during peak usage hours
- Keep unlimited backups (set retention policy)
- Forget to test restore process
- Ignore failed backup notifications

---

**Recommended Production Schedule:**

```bash
# Daily backup at 3 AM (low traffic time)
0 3 * * * /path/to/automated-backup.sh

# Keep 30 days of daily backups
# Keep 12 months of monthly backups
```

