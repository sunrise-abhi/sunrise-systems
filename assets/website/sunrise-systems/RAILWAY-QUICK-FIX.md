# Railway Deployment - Quick Fix Guide

## Immediate Action Required

### Update This Variable in Railway Dashboard

**Current (WRONG):**
```bash
NEXT_PUBLIC_SERVER_URL=sunrise-systems-production.up.railway.app
```

**Correct (UPDATE TO THIS):**
```bash
NEXT_PUBLIC_SERVER_URL=https://sunrise-systems-production.up.railway.app
```

## Complete Environment Variables

Copy these exactly into Railway dashboard:

```bash
# Database (use your Railway MongoDB connection string)
DATABASE_URI=mongodb://mongo:qMYMVCvFxuTtDPXfOClLWFAuuFqcPtpl@turntable.proxy.rlwy.net:54687

# Payload Secret (KEEP THIS)
PAYLOAD_SECRET=9abe09c37c199b41605c80dd

# Server URL (ADD https:// PREFIX)
NEXT_PUBLIC_SERVER_URL=https://sunrise-systems-production.up.railway.app

# Cron Secret (GENERATE A REAL SECRET)
CRON_SECRET=generate-a-secure-random-string-here
```

## What Changed in Your Codebase

### 1. Dockerfile
- Now accepts environment variables during build
- Variables are passed to Next.js build process
- Fixes "missing secret key" error

### 2. next.config.js  
- Added `output: 'standalone'` for Docker optimization
- Reduces image size and improves performance

### 3. New Files Created
- `.dockerignore` - Optimizes build context
- `railway.json` - Railway configuration
- `RAILWAY-DEPLOYMENT.md` - Full deployment guide
- `DEPLOYMENT-SUMMARY.md` - Complete system analysis

## Deploy Steps

1. **Push changes to Git:**
   ```bash
   git add .
   git commit -m "Configure Railway deployment"
   git push
   ```

2. **Update Railway environment variables:**
   - Go to Railway dashboard
   - Select your project
   - Go to Variables tab
   - Update `NEXT_PUBLIC_SERVER_URL` to include `https://`
   - Generate and add a secure `CRON_SECRET`

3. **Trigger deployment:**
   - Railway will auto-deploy on git push
   - Or manually trigger from dashboard
   - Monitor build logs

4. **Verify deployment:**
   - Visit: `https://sunrise-systems-production.up.railway.app`
   - Check admin: `https://sunrise-systems-production.up.railway.app/admin`

## Expected Build Output

✅ **Success indicators:**
- Dependencies installed (988 packages)
- Build completes in ~60 seconds
- No "missing secret key" errors
- Static pages generated successfully
- Server starts on port 3000

❌ **Failure indicators:**
- "missing secret key" = PAYLOAD_SECRET not available at build time
- Database connection errors = DATABASE_URI incorrect
- Image load failures = NEXT_PUBLIC_SERVER_URL format wrong

## Troubleshooting

### Build still fails?
1. Verify ALL environment variables are set in Railway
2. Check Railway logs for specific error
3. Ensure MongoDB service is running
4. Verify network connectivity between services

### Images not loading?
1. Must include `https://` in `NEXT_PUBLIC_SERVER_URL`
2. Check browser console for errors
3. Verify image paths in database

### Can't access admin?
1. Database connection issue - check `DATABASE_URI`
2. Secret key issue - verify `PAYLOAD_SECRET`
3. CORS issue - check server URL configuration

## Generate Secure Secrets

Use one of these methods:

**Method 1: Node.js**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Method 2: OpenSSL**
```bash
openssl rand -hex 32
```

**Method 3: Online**
- Visit: https://generate-secret.vercel.app/32
- Copy the generated secret

## Support

- Full guide: `RAILWAY-DEPLOYMENT.md`
- System analysis: `DEPLOYMENT-SUMMARY.md`
- Railway docs: https://docs.railway.app/

