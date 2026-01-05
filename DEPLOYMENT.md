
# Deployment Guide for learn-winning.iiskills.cloud

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure all required environment variables are set on the server:
- Supabase configuration (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- NEXT_PUBLIC_SITE_URL=https://learn-winning.iiskills.cloud
- NODE_ENV=production

### 2. Domain Configuration
Domain is managed as a subdomain of iiskills.cloud:
- Subdomain: learn-winning.iiskills.cloud
- Nginx configuration for reverse proxy
- SSL certificate via Let's Encrypt

### 3. PDF Files
Ensure these files are uploaded to `/public/ebooks/`:
- `sample-chapter-one.pdf` - Free sample chapter
- `live-like-a-winner-full.pdf` - Complete ebook

### 4. Supabase Setup
1. Create Supabase project
2. Enable Authentication (Email/Password)
3. Set up database tables per SUPABASE_SETUP.md
4. Configure row-level security policies
5. Add Supabase config to environment variables

### 5. Build Verification
Run these commands locally before deploying:
```bash
npm run build
npm run start
```

### 6. Pre-deployment Tests
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] PDF downloads work
- [ ] Forms submit correctly
- [ ] Mobile responsiveness
- [ ] Dark mode works
- [ ] SEO meta tags present
- [ ] Error pages (404, 500) work

## Deployment Steps

### Deploy to iiskills.cloud Subdomain

1. **Clone Repository on Server**
   ```bash
   cd /var/www
   git clone https://github.com/phildass/learn-winning.git
   cd learn-winning
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create `.env.local` with all variables from `.env.example`

4. **Build Application**
   ```bash
   npm run build
   ```

5. **Start with PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

6. **Verify Deployment**
   - Check https://learn-winning.iiskills.cloud
   - Test all critical paths
   - Verify SSL certificate
   - Check mobile view

## Post-Deployment

### 1. SSL Certificate
Verify HTTPS is working:
- Green padlock in browser
- No mixed content warnings

### 2. Performance Testing
- Run Lighthouse audit
- Check Core Web Vitals
- Test page load times

### 3. Monitoring
- Monitor PM2 process status: `pm2 status`
- Check server logs: `pm2 logs`
- Set up error tracking

### 4. Backup
- Regular database backups (Supabase handles this)
- PDF file backups
- Environment variable backup

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables Not Working
- Verify all variables are set in .env.local
- Check for typos in variable names
- Restart PM2 process after adding variables

### PDF Downloads Not Working
- Check file paths in `/public/ebooks/`
- Verify file permissions
- Test download links

### Supabase Connection Issues
- Verify Supabase config in environment
- Check Supabase project status
- Ensure row-level security policies are correct

### PM2 Process Issues
```bash
# Restart the process
pm2 restart learn-winning

# View logs
pm2 logs learn-winning

# Check status
pm2 status
```

## Support

For deployment issues:
- Email: support@iiskills.in
- Check PM2 logs: `pm2 logs`
- Review Next.js build errors

## Production URLs

- Main Site: https://learn-winning.iiskills.cloud
- Sample Lesson: https://learn-winning.iiskills.cloud/lessons/sample
- Admin Panel: https://learn-winning.iiskills.cloud/admin
- Resources: https://learn-winning.iiskills.cloud/resources
