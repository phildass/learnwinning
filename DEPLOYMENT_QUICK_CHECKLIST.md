
# 🚀 DEPLOYMENT QUICK CHECKLIST
## Learnwinning.iiskills.in

**Use this as your deployment day checklist. Print it out and check boxes as you go.**

---

## ⏰ ESTIMATED TIME: 2-25 hours (mostly DNS waiting)

---

## 📋 PHASE 1: PRE-DEPLOYMENT (30 min)

### Local Build Test
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Build completes with NO errors
- [ ] Run `npm run start`
- [ ] Site works on localhost:3000

### File Verification
- [ ] `public/ebooks/sample-chapter-one.pdf` exists
- [ ] `public/ebooks/live-like-a-winner-full.pdf` exists
- [ ] `public/LLAWLOGO.png` exists
- [ ] `public/winner.png` exists
- [ ] `public/GooglePay_QR.png` exists
- [ ] `vercel.json` exists in root
- [ ] `next.config.mjs` exists in root

### Git & GitHub
- [ ] Code committed to git
- [ ] GitHub repository created
- [ ] Code pushed to GitHub main branch
- [ ] Repository is public (or Vercel has access)

---

## 🚀 PHASE 2: VERCEL DEPLOYMENT (15 min)

### Vercel Setup
- [ ] Signed in to vercel.com
- [ ] Clicked "Add New Project"
- [ ] Selected GitHub repository
- [ ] Imported project
- [ ] Framework detected as "Next.js"
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Clicked "Deploy"

### Watch Build
- [ ] Build started successfully
- [ ] No red error messages in logs
- [ ] Build completed (✓ Compiled successfully)
- [ ] Deployment succeeded
- [ ] Got deployment URL: `https://learnwinning-xxx.vercel.app`

### Test Default URL
- [ ] Visited Vercel deployment URL
- [ ] Homepage loads correctly
- [ ] Images display
- [ ] Navigation works
- [ ] Sample lesson loads

---

## 🌐 PHASE 3: DOMAIN SETUP (10 min + waiting)

### Add Domain in Vercel
- [ ] Went to Settings → Domains
- [ ] Clicked "Add Domain"
- [ ] Entered: `learnwinning.iiskills.in`
- [ ] Domain added successfully
- [ ] Noted DNS instructions

### Configure DNS Records
Go to your domain provider (GoDaddy, Namecheap, etc.):

- [ ] Added CNAME record:
  ```
  Type: CNAME
  Name: learnwinning
  Value: cname.vercel-dns.com
  TTL: 300 (5 minutes)
  ```

- [ ] Added A record (optional but recommended):
  ```
  Type: A
  Name: learnwinning
  Value: 76.76.21.21
  TTL: 300
  ```

- [ ] Saved DNS changes
- [ ] Noted time: _____________ (DNS takes 1-24 hours)

---

## ⏳ PHASE 4: WAIT FOR DNS (1-24 hours)

### Check DNS Propagation
Visit: https://www.whatsmydns.net

- [ ] Checked after 1 hour: DNS propagating? _______
- [ ] Checked after 3 hours: DNS propagating? _______
- [ ] Checked after 6 hours: DNS propagating? _______
- [ ] DNS fully propagated worldwide

### Verify Domain Works
- [ ] Visit: https://learnwinning.iiskills.in
- [ ] Domain resolves correctly
- [ ] Shows green padlock (SSL active)
- [ ] No "Not Secure" warning
- [ ] Homepage loads

---

## ✅ PHASE 5: POST-DEPLOYMENT TESTING (30 min)

### Critical Path Tests

#### Test 1: Homepage
- [ ] Visit: https://learnwinning.iiskills.in
- [ ] Logo displays correctly
- [ ] Winner certificate image shows
- [ ] "Choose Your Learning Path" section visible
- [ ] Both path cards display correctly
- [ ] Sample chapter link works

#### Test 2: Sample Lesson
- [ ] Click "Start the First Chapter/Lesson"
- [ ] URL is: /lessons/sample
- [ ] Chapter 1 content loads
- [ ] All 4 tabs work (Original, Summary, Lesson, Test)
- [ ] Images in chapter display
- [ ] Text is readable and formatted
- [ ] Download PDF button works

#### Test 3: Modules Page
- [ ] Visit: /modules
- [ ] All 11 chapters show
- [ ] 7 chapters marked "Complete" (green)
- [ ] 4 chapters marked "PDF Available" (blue)
- [ ] Chapter descriptions visible
- [ ] "View Chapter" buttons work
- [ ] Interludes tab shows all 9 interludes

#### Test 4: Checkout Flow
- [ ] Click "Purchase Full Course"
- [ ] Checkout form loads
- [ ] Can enter name, phone, email
- [ ] Form validation works
- [ ] "Proceed to Payment" button works
- [ ] Goes to /payment page

#### Test 5: Payment Page
- [ ] Payment page loads
- [ ] QR code displays correctly
- [ ] Registration details show
- [ ] Instructions are clear
- [ ] Link to Sign In page works

#### Test 6: Resources Page
- [ ] Visit: /resources
- [ ] Sample chapter download works
- [ ] PDF downloads successfully
- [ ] Can open PDF and read it

#### Test 7: Admin Panel
- [ ] Visit: /admin
- [ ] Login page displays
- [ ] Can login with password "admin"
- [ ] Dashboard loads with sample data
- [ ] All tabs work (Overview, Users, etc.)

### Mobile Testing
- [ ] Open on phone browser
- [ ] Responsive design works
- [ ] Text is readable
- [ ] Images scale correctly
- [ ] Navigation menu works
- [ ] Can navigate all pages
- [ ] Checkout form usable on mobile

### Browser Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari (if Mac/iPhone)
- [ ] Tested on Edge

### Performance Check
- [ ] Open browser DevTools (F12)
- [ ] Go to Console tab
- [ ] No red errors showing
- [ ] Site loads in <3 seconds
- [ ] Images load properly

---

## 🎯 PHASE 6: FINAL VERIFICATION

### Functionality Checklist
- [ ] All 11 modules accessible
- [ ] 7 interactive lessons work
- [ ] 4 chapters show PDF available
- [ ] PDF downloads work
- [ ] Checkout → Payment flow complete
- [ ] QR code payment method clear
- [ ] Admin panel accessible
- [ ] No broken links
- [ ] All images display
- [ ] Forms work correctly

### SEO & Meta Tags
- [ ] Right-click page → "View Page Source"
- [ ] `<title>` tag shows for homepage
- [ ] Meta description present
- [ ] Favicon loads (check browser tab)

### Security
- [ ] URL starts with `https://`
- [ ] Green padlock in browser
- [ ] SSL certificate valid
- [ ] No mixed content warnings

---

## 🎉 DEPLOYMENT COMPLETE!

### If All Boxes Are Checked:
✅ **CONGRATULATIONS! Your site is live and working perfectly!**

### Share the Good News:
- [ ] Test with 2-3 friends
- [ ] Monitor for any user-reported issues
- [ ] Celebrate! 🎉

---

## ❌ IF SOMETHING DIDN'T WORK

### First, Don't Panic! Check:

1. **Build Failed?**
   - Check Vercel deployment logs
   - Run `npm run build` locally
   - Look for specific error messages
   - See DEPLOYMENT_COMPLETE_GUIDE.md Section "Troubleshooting"

2. **Domain Not Working?**
   - Check DNS records are correct
   - Use whatsmydns.net to verify propagation
   - Wait 24 hours (DNS can be slow)
   - Use Vercel's default URL in meantime

3. **Pages Show 404?**
   - Clear browser cache (Ctrl+Shift+R)
   - Check files exist in GitHub repo
   - Redeploy from Vercel dashboard

4. **Images Not Loading?**
   - Verify files in `public/` folder
   - Check file names match exactly (case-sensitive)
   - Commit and push images to GitHub
   - Redeploy

5. **Still Stuck?**
   - Read DEPLOYMENT_COMPLETE_GUIDE.md
   - Contact Vercel Support (very helpful!)
   - Email: support@iiskills.in

---

## 📞 EMERGENCY CONTACTS

- **Vercel Support:** https://vercel.com/support
- **Next.js Docs:** https://nextjs.org/docs/deployment
- **Project Support:** support@iiskills.in

---

## 📝 DEPLOYMENT NOTES

**Date Started:** _______________
**Date DNS Configured:** _______________
**Date DNS Propagated:** _______________
**Date Fully Live:** _______________

**Issues Encountered:**
_____________________________________
_____________________________________
_____________________________________

**Solutions Applied:**
_____________________________________
_____________________________________
_____________________________________

**Final Deployment URL:** https://learnwinning.iiskills.in

**Vercel Project URL:** https://vercel.com/dashboard (save this!)

---

## ✅ SUCCESS! 

**You did it! Your site is now live.** 🚀

All 11 modules are ready and accessible:
- ✅ 7 chapters with full interactive lessons
- ✅ 4 chapters available in PDF
- ✅ Complete checkout and payment flow
- ✅ Admin panel for management
- ✅ Mobile responsive
- ✅ Fast and secure

**Now you can focus on getting users and growing your course!**

---

*Print this checklist and keep it for reference. Good luck with your launch!* 🎯
