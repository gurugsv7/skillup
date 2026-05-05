# s4skillup Vercel Deployment Guide

## Quick Start - Deploy to Vercel

### Step 1: Connect GitHub Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite + React project

### Step 2: Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables, add:

```
VITE_SUPABASE_URL=https://dcjiymdphqbxpwezrijd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_POSTHOG_API_KEY=phc_your_key (optional)
VITE_POSTHOG_API_HOST=https://us.posthog.com (optional)
VITE_SENTRY_DSN=https://your-key@sentry.io/project-id (optional)
VITE_ENVIRONMENT=production
```

### Step 3: Configure Domain
1. In Vercel Dashboard → Domains
2. Add domain: `www.s4skillup.com`
3. Configure DNS with your domain provider:
   - Add CNAME record: `www` → `cname.vercel.com`
   - Add A record for apex domain (if needed)

### Step 4: Deploy
- Push to main branch → Automatic deployment
- OR click "Deploy" in Vercel Dashboard

## Production Checklist

✅ **Security**
- [ ] No API keys committed to git
- [ ] All secrets in Vercel Environment Variables
- [ ] CORS configured properly in Supabase
- [ ] Sentry configured for error tracking

✅ **Performance**
- [ ] Build optimization enabled (code splitting by vendor)
- [ ] No source maps in production
- [ ] Image optimization enabled
- [ ] Caching headers configured

✅ **Testing**
- [ ] Test all Supabase queries work
- [ ] Test analytics integration
- [ ] Test error tracking with Sentry
- [ ] Test on mobile devices

## Build Configuration

The project uses:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (React)
- **Build Time**: ~2-3 minutes

## Monitoring

**Vercel Analytics**: Automatically enabled
- View at vercel.com/dashboard/[project]/analytics

**Sentry Errors**: (if configured)
- View at sentry.io

**PostHog Analytics**: (if configured)
- View at posthog.com

## Rollback

If deployment fails:
1. Go to Vercel Dashboard → Deployments
2. Click on previous successful deployment
3. Click "Redeploy"

## Custom Domain Setup

### Using Vercel Nameservers (Recommended)
1. Add domain in Vercel
2. Copy nameservers
3. Update domain registrar to use Vercel nameservers

### Using CNAME (Manual)
1. Add CNAME: `www` → `cname.vercel.com`
2. Vercel auto-renews SSL certificate

## Troubleshooting

**Build Fails**: 
- Check env vars in Vercel match .env.local
- Ensure all dependencies installed: `npm install`
- Check TypeScript errors: `npm run build` locally

**Routes Not Working**:
- Vercel SPA routing configured in vercel.json
- All routes redirect to index.html

**Environment Variables Not Loading**:
- Redeploy after adding env vars
- Use VITE_ prefix for frontend variables
- Use plain names for backend variables

## DNS Configuration Example

For domain registrar (e.g., GoDaddy, Namecheap):

```
Type: CNAME
Name: www
Value: cname.vercel.com
TTL: 3600

Type: A (for apex domain @)
Name: @
Value: 76.76.19.132 (or Vercel's IP)
TTL: 3600
```

## Files Generated for Deployment

- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from build
- Updated `vite.config.ts` - Production optimizations

All configuration is production-ready! ✅
