# SkillBridge Academy — Online Teaching Platform MVP

A modern online education website built with React, Tailwind CSS, Supabase, and Vercel.

## Features

- Home, About, Courses, Course Detail, Resources, Blog, Contact
- Login/Register with Supabase Auth
- Student Dashboard
- Admin course creation page
- Video lesson page
- Downloadable PDF/resource links
- Supabase database tables and Row Level Security policies
- Ready for Vercel deployment

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

Add your Supabase URL and anon key to `.env`.

## Build

```bash
npm run build
```

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Copy your project URL and anon key into `.env`.
5. Create a Storage bucket named `course-files`.
6. Upload PDFs or course files and paste public/signed URLs into the `resources` table.

## Vercel setup

1. Push the project to GitHub.
2. Import the repo in Vercel.
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy.

## Important

This is an MVP. For production payments, add Stripe Checkout or Lemon Squeezy later.
