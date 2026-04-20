# Wasture Solutions Website

A modern, responsive, and professional landing page for **Wasture Solutions** — an environmental startup based in Lagos, Nigeria dedicated to transforming waste into sustainable value.

## Brand Identity

| Color | Hex | Usage |
|---|---|---|
| Primary Green | `#146B34` | Headings, nav links, primary buttons, icons |
| Light Green | `#DDEB9C` | Section backgrounds (Services, Gallery) |
| Secondary Green | `#9CCB6D` | Cards, hover states, Newsletter section |
| Dark Blue | `#153D60` | Footer background |
| Accent Orange | `#EB5C00` | CTAs, highlights, hover effects |

## Features

- **Navbar** — Logo top-left, green nav links, orange hover, social icons, dark mode toggle
- **Hero** — Bold headline with forest background image and CTA buttons
- **About Us** — Mission, vision, and company introduction
- **Services** — Smart waste collection, recycling initiatives, environmental campaigns (light green bg)
- **Activities / Projects** — Grid of activity cards with admin upload feature (add new activities via modal form)
- **Impact Stats** — Animated counters (500+ tons, 120 communities, 2,000+ volunteers) on primary green background
- **Gallery** — Photo grid with lightbox viewer (light green bg)
- **Newsletter Signup** — Email subscription on secondary green background
- **Contact Form** — Contact form with email, phone, and location
- **Footer** — Dark blue (#153D60) with white logo, social icons, quick links
- **Dark Mode** — Full dark/light mode toggle with localStorage persistence
- **Responsive** — Mobile-first, fully responsive layout

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- Lucide React + React Icons (icons)
- Wouter (routing)
- next-themes (dark mode)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/                  # shadcn/ui base components
│   ├── About.tsx            # About Us section
│   ├── Activities.tsx       # Activities/Projects + admin upload modal
│   ├── Contact.tsx          # Contact form + info
│   ├── Footer.tsx           # Footer (dark blue, white logo)
│   ├── Gallery.tsx          # Photo gallery with lightbox
│   ├── Hero.tsx             # Hero section with background image
│   ├── Impact.tsx           # Animated stats counters
│   ├── Navbar.tsx           # Fixed nav with logo
│   ├── Newsletter.tsx       # Email newsletter signup
│   ├── Services.tsx         # Service cards
│   └── theme-provider.tsx   # Dark mode context
├── hooks/
├── lib/
├── pages/
├── App.tsx
├── index.css                # Global styles + CSS theme variables
└── main.tsx
public/
├── images/
│   ├── wasture-logo.png     # Logo with background removed
│   ├── hero-bg.png
│   ├── activity-*.png       # Activity card images
│   └── gallery-*.png        # Gallery images
└── favicon.svg
```

## Customization

- **Colors** — Edit CSS variables in `src/index.css` under `:root` and `.dark`
- **Logo** — Replace `public/images/wasture-logo.png` with your logo file
- **Content** — Edit text directly in each component file
- **Contact Info** — Update email, phone, location in `src/components/Contact.tsx`
- **Social Links** — Replace `href="#"` in `Navbar.tsx`, `Footer.tsx`, `Contact.tsx`
- **Images** — Replace files in `public/images/` with real photos

## Contact

Wasture Solutions  
Email: info@wasturesolutions.com  
Phone: +234 801 234 5678  
Location: Lagos, Nigeria
# WastureSolutionsWebsite
