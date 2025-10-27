# Railway Volume Permission Fix

## The Problem

Railway volumes are formatted with ext4 filesystem, which automatically creates a `lost+found` directory with root-only permissions. When your Next.js app tries to scan `/app/public/media/`, it encounters this directory and crashes with:

```
[Error: EACCES: permission denied, scandir '/app/public/media/lost+found']
```

This causes healthcheck failures and prevents the app from starting.

## The Solution

Updated the Dockerfile to include an entrypoint script that:

1. **Runs as root initially** - Has permission to handle volume directories
2. **Removes `lost+found`** - Deletes the problematic directory
3. **Fixes permissions** - Ensures `/app/public/media` is owned by `nextjs:nodejs`
4. **Drops to nextjs user** - Runs the app securely as non-root user
5. **Starts Next.js server** - App starts normally

## What Changed

### Dockerfile Updates

**Added:**
- Entrypoint script that handles volume permissions
- `su-exec` package for secure privilege dropping
- Proper permission handling before app startup

**Flow:**
```
Container starts (as root)
  ↓
Entrypoint script runs
  ↓
Remove lost+found directory
  ↓
Fix media directory permissions
  ↓
Drop to nextjs user
  ↓
Start Next.js app
  ↓
App runs successfully ✅
```

## Files Modified

1. **`/Dockerfile`** (repo root) - Added entrypoint script
2. **`/assets/website/sunrise-systems/Dockerfile`** (subdirectory) - Same fix for consistency

## Deploy the Fix

```bash
# Commit the changes
git add .
git commit -m "Fix Railway volume permissions for media directory"
git push origin main
```

Railway will automatically:
- Rebuild with the new Dockerfile
- Create the entrypoint script
- Handle volume permissions on startup
- Start the app successfully ✅

## Expected Result

After deployment:
- ✅ No more EACCES errors
- ✅ Healthchecks pass
- ✅ App starts successfully
- ✅ Media uploads work
- ✅ Images load correctly

## Technical Details

### The `lost+found` Directory

- Created automatically by ext4/ext3 filesystems
- Used for filesystem recovery
- Has permissions `drwx------ root root`
- Cannot be read by non-root users
- Safe to delete for application purposes

### Security

- App still runs as non-root (`nextjs` user)
- Only entrypoint runs as root (briefly)
- Privilege dropping via `su-exec` is secure
- Standard practice for containerized apps

### Alternative Solutions Considered

1. ❌ **Ignore directory in code** - Would require changing Payload/Next.js behavior
2. ❌ **Change mount point** - Would require reconfiguring everything
3. ✅ **Fix permissions on startup** - Clean, secure, standard approach

## Verification

After deployment, check Railway logs for:

```
✓ Starting...
▲ Next.js 15.4.4
- Local:        http://[container]:3000
- Network:      http://[container]:3000

No EACCES errors ✅
```

And healthchecks should pass:

```
===================
Starting Healthcheck
====================
Path: /
Retry window: 5m0s

Attempt #1 succeeded ✅
```

## Future Deployments

This fix is permanent. The entrypoint script will:
- Run on every container startup
- Handle any permission issues
- Ensure clean media directory
- Allow app to start successfully

No manual intervention needed! ✅

