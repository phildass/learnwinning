
# Supabase Setup Guide for Learnwinning.iiskills.in

## Prerequisites
- Supabase account (https://supabase.com)
- Project deployed on Vercel

## Step 1: Create Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in project details:
   - **Name**: learnwinning (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your users (e.g., ap-south-1 for India)
4. Click "Create new project"
5. Wait for project to be provisioned (2-3 minutes)

## Step 2: Run Database Migrations

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Click "Run"
5. Verify tables are created (check **Table Editor**)

## Step 3: (Optional) Add Seed Data

1. In SQL Editor, create a new query
2. Copy and paste the contents of `supabase/migrations/002_seed_data.sql`
3. Click "Run"
4. This adds sample users for testing (remove in production)

## Step 4: Configure Authentication

1. Go to **Authentication** > **Providers**
2. Enable **Phone** authentication:
   - Toggle "Phone" to enabled
   - Configure SMS provider (Twilio recommended)
   - Add Twilio credentials:
     * Account SID
     * Auth Token
     * Phone Number
3. Click "Save"

### Twilio Setup (for Phone Auth)

1. Create Twilio account: https://www.twilio.com
2. Get a phone number with SMS capability
3. Copy Account SID and Auth Token from dashboard
4. Add these to Supabase Phone auth settings

## Step 5: Get API Keys

1. Go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (e.g., https://xxxxx.supabase.co)
   - **anon public** key
   - **service_role** key (keep this secret!)

## Step 6: Add Environment Variables to Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** > **Environment Variables**
4. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

5. Redeploy your application

## Step 7: Configure Row Level Security (RLS)

The migration script already includes RLS policies, but verify:

1. Go to **Authentication** > **Policies**
2. Check that policies exist for all tables:
   - users
   - user_progress
   - test_results
   - certificates
3. Policies should allow users to read/write their own data only

## Step 8: Test the Integration

1. Visit your deployed site
2. Try to register a new user with phone number
3. Verify OTP is sent and works
4. Check that user data is saved in Supabase
5. Test course progress tracking
6. Verify test results are saved

## Step 9: Production Checklist

- [ ] Remove seed data (002_seed_data.sql)
- [ ] Verify RLS policies are active
- [ ] Test phone authentication flow
- [ ] Confirm all environment variables are set
- [ ] Enable database backups (Supabase dashboard)
- [ ] Set up monitoring and alerts
- [ ] Test certificate generation
- [ ] Verify payment webhook integration

## Database Schema Overview

### Tables Created

1. **users** - User profiles and account information
2. **user_progress** - Course completion tracking
3. **test_results** - Chapter test scores and answers
4. **certificates** - Issued course completion certificates

### Key Relationships

- user_progress → users (one-to-one)
- test_results → users (one-to-many)
- certificates → users (one-to-one)

## Troubleshooting

### Authentication Issues

**Problem**: OTP not sending
- **Solution**: Check Twilio credentials in Supabase dashboard
- Verify phone number format (+91XXXXXXXXXX for India)

**Problem**: User can't sign in
- **Solution**: Check RLS policies
- Verify user exists in users table

### Database Issues

**Problem**: Can't read/write data
- **Solution**: Check RLS policies are enabled
- Verify user is authenticated
- Check API key permissions

**Problem**: Migration fails
- **Solution**: Drop existing tables and re-run migrations
- Check for SQL syntax errors

### Environment Variable Issues

**Problem**: Supabase not connecting
- **Solution**: Verify environment variables are set correctly in Vercel
- Check that NEXT_PUBLIC_ prefix is used for client-side variables
- Redeploy after adding variables

## Support

- Supabase Documentation: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- Project Support: support@iiskills.in

## Security Best Practices

1. **Never commit** service role keys to git
2. **Always use** RLS policies
3. **Validate** all user inputs
4. **Monitor** authentication attempts
5. **Regular** database backups
6. **Review** access logs periodically

## Next Steps

After Supabase is configured:
1. Install Supabase client library: `npm install @supabase/supabase-js`
2. Update authentication flows to use Supabase
3. Replace localStorage with Supabase queries
4. Test all user flows thoroughly
5. Monitor usage and performance
