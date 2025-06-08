# Mentron Project

A Next.js website with Supabase integration for form submissions.

## Features

- ✅ Static site generation (`output: 'export'`)
- ✅ Supabase database integration for forms
- ✅ Responsive design with Tailwind CSS
- ✅ Institutional demo and individual inquiry forms
- ✅ Client-side form submissions
- ✅ Compatible with Vercel free tier

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Visit:** http://localhost:3000

## Database Setup

Required Supabase tables:
- `institutional_demo_forms`
- `individual_inquiry_forms`

See `SUPABASE_SETUP.md` for complete setup instructions.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Static Export
```bash
npm run build
```

The `out/` folder contains the static site.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Deployment:** Vercel
- **Icons:** Heroicons 