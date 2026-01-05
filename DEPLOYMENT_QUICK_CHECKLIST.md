# Quick Deployment Checklist
## learn-winning.iiskills.cloud

---

## 🚀 QUICK START (For Experienced Deployers)

### Prerequisites
- [ ] Node.js 18.x installed on server
- [ ] PM2 installed globally
- [ ] Nginx configured
- [ ] SSL certificate ready
- [ ] Supabase project created

---

## 📋 DEPLOYMENT STEPS

### 1. Clone and Install
```bash
cd /var/www
git clone https://github.com/phildass/learn-winning.git
cd learn-winning
npm install
```

### 2. Environment Configuration
```bash
cp .env.example .env.local
# Edit .env.local with production values
```

**Required Variables:**
- `NEXT_PUBLIC_SITE_URL=https://learn-winning.iiskills.cloud`
- `NEXT_PUBLIC_SUPABASE_URL=...`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`
- `NEXT_PUBLIC_PAYMENT_URL=https://aienter.in/payments`
- `NODE_ENV=production`

### 3. Build and Start
```bash
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. Nginx Configuration
Create `/etc/nginx/sites-available/learn-winning.iiskills.cloud`:

```nginx
server {
    listen 80;
    server_name learn-winning.iiskills.cloud;
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
    }
}
```

Enable and reload:
```bash
sudo ln -s /etc/nginx/sites-available/learn-winning.iiskills.cloud /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. SSL Certificate
```bash
sudo certbot --nginx -d learn-winning.iiskills.cloud
```

---

## ✅ VERIFICATION

- [ ] Build completed without errors
- [ ] PM2 process running: `pm2 status`
- [ ] Site accessible: https://learn-winning.iiskills.cloud
- [ ] Landing page loads
- [ ] Authentication works (admin + user)
- [ ] Payment redirect to aienter.in/payments works
- [ ] Course modules accessible
- [ ] Admin panel at /admin works
- [ ] PDFs downloadable from /public/ebooks/
- [ ] SSL certificate valid
- [ ] Mobile responsive
- [ ] All 10 modules (100 lessons) accessible

---

## 🔧 QUICK COMMANDS

### Monitoring
```bash
pm2 status                    # Check status
pm2 logs learn-winning       # View logs
pm2 monit                    # Monitor resources
```

### Updates
```bash
cd /var/www/learn-winning
git pull origin main
npm install
npm run build
pm2 restart learn-winning
```

### Troubleshooting
```bash
# Rebuild from scratch
rm -rf .next node_modules
npm install
npm run build
pm2 restart learn-winning

# Check logs
pm2 logs learn-winning --lines 100
sudo tail -f /var/log/nginx/error.log

# Restart services
pm2 restart learn-winning
sudo systemctl restart nginx
```

---

## 🗂️ FILE STRUCTURE CHECK

Ensure these critical files exist:
```
/var/www/learn-winning/
├── src/                          # Source code
├── public/
│   └── ebooks/
│       ├── sample-chapter-one.pdf
│       └── live-like-a-winner-full.pdf
├── .env.local                    # Environment variables (create this)
├── package.json
├── next.config.mjs
├── ecosystem.config.js           # PM2 configuration
└── .next/                        # Build output (after npm run build)
```

---

## 🔐 SECURITY CHECKLIST

- [ ] `.env.local` has correct permissions (600)
- [ ] SSL certificate installed and valid
- [ ] Supabase RLS policies configured
- [ ] Admin dashboard protected by Supabase auth
- [ ] No sensitive data in Git repository
- [ ] Firewall configured correctly
- [ ] PM2 logs rotation configured

---

## 📊 PRODUCTION URLS

| Resource | URL |
|----------|-----|
| Main Site | https://learn-winning.iiskills.cloud |
| Admin Panel | https://learn-winning.iiskills.cloud/admin |
| Sample Lesson | https://learn-winning.iiskills.cloud/lessons/sample |
| Resources | https://learn-winning.iiskills.cloud/resources |
| Payment Gateway | https://aienter.in/payments |

---

## 🆘 QUICK TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| Build fails | `rm -rf .next node_modules && npm install && npm run build` |
| Process won't start | Check `pm2 logs learn-winning` for errors |
| Site not accessible | Check Nginx config: `sudo nginx -t` |
| 502 Bad Gateway | Check PM2 process is running: `pm2 status` |
| SSL issues | Renew certificate: `sudo certbot renew` |
| Database connection | Verify Supabase credentials in `.env.local` |

---

## 📞 SUPPORT

- Email: support@iiskills.in
- Logs: `pm2 logs learn-winning`
- Nginx logs: `sudo tail -f /var/log/nginx/error.log`

---

**Deployment Pattern:** iiskills.cloud subdomain (PM2 + Nginx)
**Last Updated:** January 2026
