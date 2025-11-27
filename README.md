# Learnwinning – Deployment & Usage Guide

## Overview

This repository contains the full source code for [learnwinning.iiskills.in](https://learnwinning.iiskills.in), an e-learning platform built using **Next.js** and **Node.js**. Deployment is best done via **Vercel** for automated build and hosting.

---

## 🏗️ Technology Stack

- **Frontend & Backend:** [Next.js](https://nextjs.org/) (React based)
- **Runtime:** Node.js v18.x (Recommended)
- **Package Manager:** npm
- **Hosting:** Vercel (recommended)
- **Optional integrations:** Supabase, Firebase (not included by default, only use if explicitly configured)

---

## 🚀 Deployment Guide (Vercel)

### Step 1: Prerequisites

- You need a [Vercel account](https://vercel.com/signup)
- Ensure your code is in the `main` branch (or set correct branch in Vercel)
- Install Vercel CLI (optional): 
  ```bash
  npm i -g vercel
  ```

### Step 2: Connect to Vercel

- Import your `phildass/learnwinning` repo via Vercel dashboard, or run from CLI:
  ```bash
  vercel --prod
  ```
- Set **Framework Preset** to **Next.js** (should auto detect)
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node.js Version:** `18.x` (in Vercel project → Settings → Environment)

### Step 3: Add Environment Variables

Go to **Settings > Environment Variables** in your Vercel project.

- `NEXT_PUBLIC_SITE_URL=https://learnwinning.iiskills.in`
- `NODE_ENV=production`
- *(Add Supabase/Firebase keys only if you use those features)*

Copy additional variables from `.env.example` if present.

### Step 4: Deploy

Push code to main:
```bash
git push origin main
```
Vercel will build and deploy automatically.

### Step 5: Post Deployment Checks

- Visit: https://learnwinning.iiskills.in
- Test all user flows (courses, payments, login, resources)
- Check mobile responsiveness
- Verify SSL certificate (Vercel provides by default)

---

## 💻 Local Development

```bash
npm install         # Install dependencies
npm run dev         # Start local server for development
npm run build       # Create production build
npm start           # Start production server (optional; Vercel auto handles this)
```

---

## 📦 Directory Structure & File Uploads

- `/public/ebooks/` – Contains sample and full-course PDFs  
  - `sample-chapter-one.pdf` (free for all users)  
  - `live-like-a-winner-full.pdf` (for paid users)

Upload via Softgen sidebar → `/public/ebooks/`.

---

## ⚠️ Troubleshooting

- **Build fails:**  
  - Check Node.js version (should be 18.x)  
  - Remove unused environment variables  
  - Remove Supabase/Firebase configs unless using them

- **PDFs not showing:**  
  - Ensure files are present in `/public/ebooks/`  
  - Filenames must exactly match required names

---

## 👤 Credits

Developed by [Phil Dass](https://github.com/phildass) & contributors.

---

## 📝 Additional Notes

- For custom domain, add via Vercel dashboard and update DNS.
- This guide is optimized for Vercel. For other platforms, adapt build/start steps as needed.
