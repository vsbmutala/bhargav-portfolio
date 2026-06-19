# Bhargav's Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Project Structure

```
bhargav-portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with Navigation and Footer
│   ├── page.tsx             # Home page with section components
│   └── globals.css          # Global styles and CSS variables
├── components/              # React components
│   ├── sections/           # Page section components
│   │   ├── Hero.tsx        # Hero section with introduction
│   │   ├── About.tsx       # About section with skills
│   │   ├── Projects.tsx    # Featured projects showcase
│   │   └── Contact.tsx     # Contact form and social links
│   └── ui/                 # Reusable UI components
│       ├── Navigation.tsx  # Fixed navigation bar
│       └── Footer.tsx      # Footer component
├── constants/              # Application constants
│   ├── projects.ts         # Project data
│   └── social.ts           # Social media links
├── types/                  # TypeScript type definitions
│   └── index.ts           # Shared types
├── utils/                  # Utility functions
│   └── cn.ts              # Class name utility (clsx + tailwind-merge)
├── hooks/                  # Custom React hooks (reserved for future use)
├── lib/                    # Third-party library configurations (reserved)
└── public/                 # Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (via next/font)
- **Utilities**: clsx, tailwind-merge

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

- Edit `components/sections/Hero.tsx` to change your name and intro
- Edit `components/sections/About.tsx` to update your bio and skills
- Edit `constants/projects.ts` to add your projects
- Edit `constants/social.ts` to update social media links
- Edit `app/layout.tsx` to change metadata (title, description)

### Styling

- Modify `app/globals.css` to customize the color scheme
- The project uses CSS variables for theming with dark mode support

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
vercel deploy
```

## License

MIT
