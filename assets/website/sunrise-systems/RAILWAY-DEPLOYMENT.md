# Railway Deployment Guide

## Environment Variables Setup

Configure these environment variables in your Railway project settings:

### Required Variables

```bash
# Database Connection
DATABASE_URI=mongodb://mongo:PASSWORD@HOST:PORT/DATABASE_NAME

# Payload CMS Secret (generate a secure random string)
PAYLOAD_SECRET=your-secure-secret-key

# Public Server URL (your Railway domain with https://)
NEXT_PUBLIC_SERVER_URL=https://your-app.up.railway.app

# Cron Job Secret (generate a secure random string)
CRON_SECRET=your-cron-secret
```

## Important Configuration Notes

### 1. NEXT_PUBLIC_SERVER_URL
- **MUST** include the `https://` protocol
- **NO** trailing slash
- Example: `https://sunrise-systems-production.up.railway.app`

### 2. DATABASE_URI
- Use the MongoDB connection string provided by Railway
- Format: `mongodb://username:password@host:port/database`
- Railway MongoDB format: `mongodb://mongo:PASSWORD@HOST.proxy.rlwy.net:PORT`

### 3. PAYLOAD_SECRET
- Generate a secure random string (min 32 characters recommended)
- Used to encrypt/decrypt JWT tokens and secure admin sessions
- **Required during build time** for static page generation

### 4. CRON_SECRET
- Generate a secure random string
- Used to authenticate scheduled job endpoints
- Prevents unauthorized execution of cron jobs

## Build Configuration

The Dockerfile automatically:
1. Passes environment variables to the build process
2. Builds Next.js in standalone mode for optimized container size
3. Uses pnpm for fast, efficient installs
4. Creates optimized production build

## Deploy from Railway

### Option 1: Railway CLI
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Link to your project
railway link

# Deploy
railway up
```

### Option 2: GitHub Integration
1. Connect your GitHub repository to Railway
2. Railway will auto-deploy on push to main branch
3. Set environment variables in Railway dashboard
4. Trigger manual deployment if needed

## Troubleshooting

### Build fails with "missing secret key"
- Ensure `PAYLOAD_SECRET` is set in Railway environment variables
- The secret is required at **build time**, not just runtime
- Railway should automatically pass env vars to Docker build

### Database connection fails
- Verify `DATABASE_URI` format matches Railway MongoDB connection string
- Check that MongoDB service is running in Railway
- Ensure network access between services is configured

### Images not loading
- Verify `NEXT_PUBLIC_SERVER_URL` matches your actual Railway URL
- Check that it includes `https://` protocol
- Ensure no trailing slash

### 404 errors on routes
- Check that the build completed successfully
- Verify all environment variables are set correctly
- Review build logs for any errors during static page generation

## Production Checklist

- [ ] All environment variables configured in Railway
- [ ] `NEXT_PUBLIC_SERVER_URL` uses `https://` and Railway domain
- [ ] `PAYLOAD_SECRET` is a secure random string (32+ characters)
- [ ] `CRON_SECRET` is configured for job authentication
- [ ] MongoDB service is connected and accessible
- [ ] Build completes without errors
- [ ] Test admin panel access at `/admin`
- [ ] Verify frontend pages load correctly
- [ ] Check that images and media load properly

## Post-Deployment

After successful deployment:

1. **Access Admin Panel**: Visit `https://your-app.up.railway.app/admin`
2. **Create First User**: Follow prompts to create admin account
3. **Test Features**: Verify all CMS features work correctly
4. **Monitor Logs**: Check Railway logs for any runtime errors
5. **Set Up Monitoring**: Configure uptime monitoring if needed

## Updating Environment Variables

When you change environment variables:
1. Update in Railway dashboard
2. Trigger a new deployment (Railway will rebuild)
3. Wait for build and deployment to complete
4. Verify changes took effect

## Security Best Practices

- **Never commit** `.env` files to version control
- Use **strong, random secrets** for `PAYLOAD_SECRET` and `CRON_SECRET`
- Regularly **rotate secrets** for security
- Enable **Railway's automatic SSL/TLS**
- Use Railway's **private networking** for database connections
- Set up **proper CORS** configuration in production

