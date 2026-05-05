# DNS Configuration for s4skillup.com

## Quick Reference

### Domain Registrar Setup

**For Domain: s4skillup.com**

#### Option 1: Using Vercel Nameservers (Easiest)

1. Get Vercel Nameservers from Vercel Dashboard
2. Update domain registrar to use these nameservers:
   - ns1.vercel.com
   - ns2.vercel.com

**Registrars**: GoDaddy, Namecheap, Bluehost, etc.

---

#### Option 2: Using CNAME Records (Manual)

```
For www subdomain:
Type:     CNAME
Name:     www
Value:    cname.vercel.com
TTL:      3600

For root domain (optional):
Type:     A
Name:     @
Value:    76.76.19.132
TTL:      3600
```

---

## Step-by-Step DNS Setup

### GoDaddy Example

1. Log in to godaddy.com
2. Go to "My Products" → "Domains"
3. Find s4skillup.com → Click "Manage DNS"
4. Edit CNAME record for www:
   ```
   www → cname.vercel.com
   ```
5. Save changes
6. Wait 24-48 hours for DNS propagation

### Namecheap Example

1. Log in to namecheap.com
2. Go to "My Products" → "Domain List"
3. Find s4skillup.com → Click "Manage"
4. Go to "Advanced DNS" tab
5. Add CNAME Record:
   ```
   Record Type: CNAME Record
   Host: www
   Value: cname.vercel.com
   TTL: 3600
   ```
6. Save all changes

### Bluehost Example

1. Log in to bluehost.com
2. Go to "My Sites" → Domains
3. Find s4skillup.com → Click "Manage"
4. Go to "DNS" tab
5. Add new CNAME:
   ```
   Name: www
   Points To: cname.vercel.com
   TTL: 3600
   ```

---

## Vercel Dashboard Setup

1. Go to https://vercel.com/dashboard
2. Select s4skillup project
3. Go to "Settings" → "Domains"
4. Click "Add" → Enter "www.s4skillup.com"
5. Select DNS provider (or use Vercel nameservers)
6. Vercel will guide through rest

---

## Testing DNS Configuration

### Check DNS Propagation

```bash
# Mac/Linux
nslookup www.s4skillup.com
dig www.s4skillup.com CNAME

# Windows (PowerShell)
nslookup www.s4skillup.com
Resolve-DnsName www.s4skillup.com -Type CNAME
```

### Expected Output
```
www.s4skillup.com CNAME cname.vercel.com
```

### Online DNS Checker
- https://dnschecker.org
- https://mxtoolbox.com
- https://whatsmydns.net

---

## SSL Certificate

✅ Automatic - Vercel provides free SSL certificate
- Certificate auto-renews
- HTTPS enabled automatically
- Redirects HTTP to HTTPS

---

## Troubleshooting

**Domain not resolving?**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify CNAME points to cname.vercel.com

**Showing "parked" page?**
- DNS propagation still in progress
- Try in incognito/private mode
- Clear browser cache

**Getting SSL certificate error?**
- Certificate takes up to 24 hours to issue
- Check Vercel dashboard for status
- Try again after 24 hours

**Not connecting to app?**
- Verify Vercel project is deployed
- Check environment variables are set
- Review Vercel deployment logs

---

## Production Checklist

- [ ] Domain registered (s4skillup.com)
- [ ] DNS records configured in registrar
- [ ] CNAME points to cname.vercel.com
- [ ] Vercel dashboard shows domain as active
- [ ] SSL certificate issued (takes up to 24h)
- [ ] Access www.s4skillup.com in browser
- [ ] Redirects to app without errors
- [ ] All features working (database, auth, etc.)

---

## Support

- **Vercel Domain Setup**: https://vercel.com/docs/concepts/projects/domains
- **DNS Propagation Time**: Usually 24-48 hours
- **TTL**: Time To Live (3600 = 1 hour)

---

*Keep this file for reference during DNS setup*
