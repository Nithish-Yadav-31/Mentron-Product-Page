# Supabase Integration Setup Guide

## ⚠️ IMPORTANT: Database Setup Required!

**If you're getting a 404 error**, it means the database tables don't exist yet or RLS policies are missing. Follow these steps:

## 🔧 Step 1: Environment Setup

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Step 2: Create Database Tables

**⚠️ CRITICAL:** Go to your Supabase project dashboard → SQL Editor and run this:

```sql
-- Create institutional_demo_forms table
CREATE TABLE institutional_demo_forms (
  id BIGSERIAL PRIMARY KEY,
  institution_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  institution_type TEXT,
  number_of_students TEXT,
  current_lms TEXT,
  primary_interest TEXT,
  timeline TEXT,
  additional_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create individual_inquiry_forms table
CREATE TABLE individual_inquiry_forms (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  education_level TEXT,
  field_of_study TEXT,
  current_status TEXT,
  primary_interest TEXT,
  experience_level TEXT,
  timeline TEXT,
  additional_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔒 Step 3: Set Up Row Level Security (RLS)

**⚠️ CRITICAL:** Run this in SQL Editor to allow form submissions:

```sql
-- Enable RLS on both tables
ALTER TABLE institutional_demo_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE individual_inquiry_forms ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public form submissions)
CREATE POLICY "Allow public inserts" ON institutional_demo_forms
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON individual_inquiry_forms
  FOR INSERT WITH CHECK (true);

-- Optional: Allow authenticated users to read data (for admin access)
CREATE POLICY "Allow authenticated reads" ON institutional_demo_forms
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated reads" ON individual_inquiry_forms
  FOR SELECT USING (auth.role() = 'authenticated');
```

## 🔍 Step 4: Verify Setup

1. Go to Supabase Dashboard → Table Editor
2. You should see both tables: `institutional_demo_forms` and `individual_inquiry_forms`
3. Check that RLS is enabled (shield icon should be visible)

## 🚨 Troubleshooting 404 Errors

**If you get 404 errors:**

1. **Check table names**: Ensure tables are named exactly:
   - `institutional_demo_forms`
   - `individual_inquiry_forms`

2. **Verify RLS policies**: Go to Authentication → Policies in Supabase dashboard

3. **Check environment variables**: Make sure `.env.local` has correct values

4. **Test connection**: Go to Supabase → API docs → JavaScript to test your connection

## ✅ What's Already Done

I've successfully created:
1. **Client-Side Supabase Integration**: 
   - Forms now connect directly to Supabase from the browser
   - Compatible with static export (`output: 'export'`)
   - No server-side API routes needed

2. **Updated Forms**:
   - Institutional demo form connects directly to Supabase
   - Individual inquiry form connects directly to Supabase
   - Both forms show success/error messages

3. **Thank You Page**: Users are redirected here after successful submissions

## 🚀 Deployment Instructions

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Custom Domain Setup
1. Go to Vercel Project Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS instructions
4. Your site will be available on your custom domain

## ✅ Final Verification Checklist

- [ ] Environment variables are set in `.env.local`
- [ ] Both database tables are created in Supabase
- [ ] RLS policies are enabled and configured
- [ ] Tables visible in Supabase Table Editor
- [ ] Forms submit successfully without 404 errors
- [ ] Data appears in Supabase dashboard
- [ ] Success/error messages work
- [ ] Thank you page redirects work

## 🔍 Testing Steps

1. **Test Institutional Form**: Go to `/institutional-demo`
2. **Test Individual Form**: Go to `/individual-inquiry`
3. **Check Browser Console**: Should see no 404 errors
4. **Check Supabase**: Verify data appears in your tables
5. **Test Error Handling**: Try submitting incomplete forms

## 📱 Perfect for Static Hosting!

- ✅ Works with static export (`output: 'export'`)
- ✅ Compatible with any static hosting service
- ✅ Vercel free tier with custom domains
- ✅ No server required - pure client-side integration
- ✅ Fast loading and great SEO

## 🔧 Why Client-Side Integration?

This approach:
- ✅ Works with static export for maximum compatibility
- ✅ Deploys anywhere (Vercel, Netlify, GitHub Pages, etc.)
- ✅ Faster builds and deployments
- ✅ Better caching and CDN performance
- ✅ No server costs or complexity

You're all set once you complete the database setup! 🎉 