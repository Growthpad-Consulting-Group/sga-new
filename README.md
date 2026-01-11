# SGA Security Group Website

A production-ready corporate website for SGA Security Group, built with Next.js, Tailwind CSS, Supabase, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **JavaScript** (No TypeScript)
- **Tailwind CSS** for styling
- **Supabase** for backend & database
- **Framer Motion** for animations
- **CSS Scroll Snap** for smooth scrolling

## 📁 Project Structure

```
/app
  /page.js          → Global SGA Group landing page
  /ke/page.js       → Kenya landing page
  /ug/page.js       → Uganda landing page
  /tz/page.js       → Tanzania landing page
  /layout.js        → Root layout
  /globals.css      → Global styles with scroll snap

/components
  Header.js
  Footer.js
  CountrySwitcher.js
  SectionWrapper.js
  Hero.js
  Services.js
  About.js
  WhyChooseUs.js
  Industries.js
  Certifications.js
  Testimonials.js
  CTA.js

/lib
  supabase.js       → Supabase client configuration
```

## 🎨 Brand Colors

- **Primary Orange**: `#F15522`
- **Dark Charcoal**: `#231F20`
- **Light Grey**: `#E6EDF1`
- **Navy Blue**: `#00043E`

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set Up Supabase Database**
   
   Create a table for contact form submissions:
   ```sql
   CREATE TABLE contact_submissions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Country Pages

The website includes separate pages for each country:
- **Global**: `/` - SGA Group overview
- **Kenya**: `/ke` - Kenya-specific content
- **Uganda**: `/ug` - Uganda-specific content
- **Tanzania**: `/tz` - Tanzania-specific content

Each page shares the same component structure but includes localized content.

## ✨ Features

- **CSS Scroll Snap**: Each section snaps cleanly on scroll (100vh sections)
- **Framer Motion Animations**: Smooth, professional animations throughout
- **Country Switcher**: Circular flag buttons in top-right for easy navigation
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Proper metadata for each page
- **Accessible**: ARIA labels and keyboard navigation support
- **Supabase Integration**: Contact form submissions stored in Supabase

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Page Sections

All pages include these full-screen sections:
1. Hero
2. About SGA / Country Overview
3. Services
4. Why Choose Us
5. Industries Served
6. Certifications / Compliance
7. Testimonials
8. Call To Action
9. Footer

## 📦 Production Build

```bash
npm run build
npm start
```

## 🔒 Security Notes

- Environment variables should never be committed to version control
- Supabase keys are public (anon key) but should still be kept secure
- Contact form includes basic validation

## 📄 License

Proprietary - SGA Security Group

