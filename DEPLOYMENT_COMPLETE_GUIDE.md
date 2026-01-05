# Complete Deployment Guide for learn-winning.iiskills.cloud
## Step-by-Step Instructions for iiskills.cloud Subdomain Deployment

---

## 🎯 OVERVIEW

This guide will walk you through deploying learn-winning.iiskills.cloud as a subdomain following the same pattern as other iiskills.cloud services.

**Current Status:** ✅ All modules ready and accessible
- 100-lesson curriculum organized into 10 modules
- Interactive lessons and case studies
- Payment integration via https://aienter.in/payments
- Supabase authentication for admin and users

---

## 📋 PRE-DEPLOYMENT CHECKLIST (CRITICAL)

### ✅ Step 1: Verify Local Build Works

```bash
# In your project directory, run:
npm install
npm run build
npm run start
```

**Expected Result:** Build completes with no errors, site runs on localhost:3000

**If build fails:**
- Check error messages carefully
- Most common issue: Missing dependencies → Run `npm install` again
- TypeScript errors → Run `npx tsc --noEmit` to see all type errors

---

### ✅ Step 2: Verify Required Files Exist

Check these files are in your project:

```bash
# PDFs (CRITICAL - users download these)
public/ebooks/sample-chapter-one.pdf
public/ebooks/live-like-a-winner-full.pdf

# Configuration files
next.config.mjs
package.json
ecosystem.config.js
.env.example
```

**All files present?** ✅ Proceed to next step

---

### ✅ Step 3: Environment Variables Setup

Create `.env.local` file with these variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://learn-winning.iiskills.cloud
NODE_ENV=production

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Payment Integration
NEXT_PUBLIC_PAYMENT_URL=https://aienter.in/payments

# Email Configuration (if applicable)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=no-reply@iiskill.in
SMTP_PASSWORD=your_smtp_password
```

**Important:** Keep `.env.local` secure and never commit it to version control!

---

## 🚀 SERVER DEPLOYMENT STEPS

### Step 1: Server Prerequisites

Ensure the server has:
- Node.js v18.x or higher
- PM2 process manager
- Nginx for reverse proxy
- Git installed
- SSL certificate (Let's Encrypt)

### Step 2: Clone Repository

```bash
# SSH into your server
ssh user@iiskills.cloud

# Navigate to web directory
cd /var/www

# Clone the repository
git clone https://github.com/phildass/learn-winning.git
cd learn-winning
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment

```bash
# Copy example environment file
cp .env.example .env.local

# Edit with production values
nano .env.local
```

Add all required environment variables from Step 3 of the checklist.

### Step 5: Build Application

```bash
npm run build
```

**Expected Output:** Build completes successfully with `.next` directory created.

### Step 6: Start with PM2

```bash
# Start the application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Enable PM2 startup on boot
pm2 startup
```

### Step 7: Configure Nginx

Create Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/learn-winning.iiskills.cloud
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name learn-winning.iiskills.cloud;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name learn-winning.iiskills.cloud;

    ssl_certificate /etc/letsencrypt/live/learn-winning.iiskills.cloud/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/learn-winning.iiskills.cloud/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/learn-winning.iiskills.cloud /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 8: SSL Certificate

If not already configured, obtain SSL certificate:

```bash
sudo certbot --nginx -d learn-winning.iiskills.cloud
```

### Step 9: Verify Deployment

1. Visit https://learn-winning.iiskills.cloud
2. Test all critical paths:
   - Landing page loads
   - Login/authentication works
   - Course modules accessible
   - Payment redirect works
   - Admin panel accessible
   - PDFs downloadable

---

## 🔧 POST-DEPLOYMENT

### Monitoring

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs learn-winning

# Monitor resources
pm2 monit
```

### Updates and Maintenance

When deploying updates:

```bash
# Pull latest changes
cd /var/www/learn-winning
git pull origin main

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart PM2
pm2 restart learn-winning
```

### Backup Strategy

1. **Database:** Supabase handles automatic backups
2. **Environment Variables:** Keep secure backup of `.env.local`
3. **PDFs:** Regular backup of `/public/ebooks/`
4. **Code:** Version controlled via Git

---

## 🐛 TROUBLESHOOTING

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Application Not Starting

```bash
# Check PM2 logs
pm2 logs learn-winning --lines 100

# Restart process
pm2 restart learn-winning

# Check port availability
sudo lsof -i :3000
```

### Nginx Issues

```bash
# Check configuration
sudo nginx -t

# View error logs
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### Database Connection Issues

- Verify Supabase URL and keys in `.env.local`
- Check Supabase project status
- Verify network connectivity to Supabase

### PDF Downloads Not Working

```bash
# Check file permissions
ls -la /var/www/learn-winning/public/ebooks/

# Set correct permissions if needed
chmod 644 /var/www/learn-winning/public/ebooks/*.pdf
```

---

## 📞 SUPPORT

For deployment issues:
- Email: support@iiskills.in
- Check PM2 logs: `pm2 logs learn-winning`
- Review Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Check Next.js build errors in terminal output

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] Server prerequisites installed (Node.js, PM2, Nginx)
- [ ] Repository cloned to `/var/www/learn-winning`
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured in `.env.local`
- [ ] Application built successfully (`npm run build`)
- [ ] PM2 process started and saved
- [ ] Nginx configured and SSL certificate obtained
- [ ] Site accessible at https://learn-winning.iiskills.cloud
- [ ] All features tested (auth, payments, modules, admin)
- [ ] Monitoring configured (PM2 logs, server monitoring)
- [ ] Backup strategy in place

---

**Last Updated:** January 2026
**Deployment Pattern:** iiskills.cloud subdomain (PM2 + Nginx)
