
# Deployment Guide for Learnwinning.iiskills.in

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure all required environment variables are set in Vercel:
- Firebase configuration (all NEXT_PUBLIC_FIREBASE_* variables)
- NEXT_PUBLIC_SITE_URL=https://learnwinning.iiskills.in
- NODE_ENV=production

### 2. Domain Configuration
1. Add custom domain in Vercel: `learnwinning.iiskills.in`
2. Configure DNS records:
   - Type: CNAME
   - Name: learnwinning
   - Value: cname.vercel-dns.com

### 3. PDF Files
Ensure these files are uploaded to `/public/ebooks/`:
- `sample-chapter-one.pdf` - Free sample chapter
- `live-like-a-winner-full.pdf` - Complete ebook

### 4. Firebase Setup
1. Create Firebase project
2. Enable Authentication (Phone auth)
3. Set up Firestore database with security rules
4. Configure storage for user uploads
5. Add Firebase config to environment variables

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

### Deploy to Vercel

1. **Connect Repository**
   ```bash
   vercel --prod
   ```

2. **Configure Project Settings**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Set Environment Variables**
   Add all variables from `.env.example` in Vercel dashboard

4. **Deploy**
   ```bash
   git push origin main
   ```
   Vercel will auto-deploy on push to main branch

5. **Verify Deployment**
   - Check https://learnwinning.iiskills.in
   - Test all critical paths
   - Verify SSL certificate
   - Check mobile view

## Post-Deployment

### 1. DNS Propagation
Wait 24-48 hours for full DNS propagation

### 2. SSL Certificate
Verify HTTPS is working:
- Green padlock in browser
- No mixed content warnings

### 3. Performance Testing
- Run Lighthouse audit
- Check Core Web Vitals
- Test page load times

### 4. Monitoring
- Set up error tracking
- Monitor analytics
- Check server logs

### 5. Backup
- Regular database backups
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
- Verify all variables are set in Vercel
- Check for typos in variable names
- Redeploy after adding variables

### PDF Downloads Not Working
- Check file paths in `/public/ebooks/`
- Verify file permissions
- Test download links

### Firebase Connection Issues
- Verify Firebase config in environment
- Check Firebase security rules
- Ensure Firebase project is active

## Support

For deployment issues:
- Email: support@iiskills.in
- Check Vercel deployment logs
- Review Next.js build errors

## Production URLs

- Main Site: https://learnwinning.iiskills.in
- Sample Lesson: https://learnwinning.iiskills.in/lessons/sample
- Admin Panel: https://learnwinning.iiskills.in/admin
- Resources: https://learnwinning.iiskills.in/resources
