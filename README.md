# Learn Winning – Deployment & Usage Guide

## Overview

This repository contains the full source code for [learn-winning.iiskills.cloud](https://learn-winning.iiskills.cloud), an e-learning platform built using **Next.js** and **Node.js**. Deployment is done as a subdomain of iiskills.cloud, managed similarly to other subdomains.

---

## 🏗️ Technology Stack

- **Frontend & Backend:** [Next.js](https://nextjs.org/) (React based)
- **Runtime:** Node.js v18.x (Recommended)
- **Package Manager:** npm
- **Hosting:** iiskills.cloud subdomain deployment with PM2
- **Authentication:** Supabase
- **Database:** Supabase (PostgreSQL)

---

## 🚀 Deployment Guide (iiskills.cloud Subdomain)

### Step 1: Prerequisites

- Server access to iiskills.cloud infrastructure
- PM2 installed for process management
- Node.js v18.x installed on the server
- Nginx configured for the subdomain

### Step 2: Server Setup

- Clone the repository to the server:
  ```bash
  git clone https://github.com/phildass/learn-winning.git
  cd learn-winning
  ```
- Install dependencies:
  ```bash
  npm install
  ```

### Step 3: Add Environment Variables

Create a `.env.local` file with required environment variables:

- `NEXT_PUBLIC_SITE_URL=https://learn-winning.iiskills.cloud`
- `NODE_ENV=production`
- Add Supabase configuration variables from `.env.example`

### Step 4: Build and Deploy

Build the application:
```bash
npm run build
```

Start with PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
```

### Step 5: Post Deployment Checks

- Visit: https://learn-winning.iiskills.cloud
- Test all user flows (courses, payments, login, resources)
- Check mobile responsiveness
- Verify SSL certificate

---

## 💻 Local Development

```bash
npm install         # Install dependencies
npm run dev         # Start local server for development
npm run build       # Create production build
npm start           # Start production server
```

---

## 📦 Directory Structure & File Uploads

- `/public/ebooks/` – Contains sample and full-course PDFs  
  - `sample-chapter-one.pdf` (free for all users)  
  - `live-like-a-winner-full.pdf` (for paid users)

---

## ⚠️ Troubleshooting

- **Build fails:**  
  - Check Node.js version (should be 18.x)  
  - Remove unused environment variables  
  - Ensure Supabase configuration is correct

- **PDFs not showing:**  
  - Ensure files are present in `/public/ebooks/`  
  - Filenames must exactly match required names

---

## 👤 Credits

Developed by [Phil Dass](https://github.com/phildass) & contributors.

---

## 📝 Additional Notes

- For custom domain updates, configure DNS and Nginx accordingly.
- This deployment follows the same pattern as other iiskills.cloud subdomains.
