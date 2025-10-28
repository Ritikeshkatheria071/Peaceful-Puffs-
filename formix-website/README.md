# Formix Website

A modern, dark-themed website inspired by the Formix design, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dark Theme**: Sleek black background with white text for a modern, professional look
- **Responsive Design**: Fully responsive across all device sizes
- **12 Sections**:
  1. Header - Sticky navigation with smooth scroll
  2. Hero - Bold headline with dual CTAs
  3. Social Proof - Client trust indicators
  4. Services - 3 service offerings with detailed features
  5. Why Us - Founder profile and statistics
  6. Benefits - 6 key benefits in grid layout
  7. Work - Portfolio of 4 projects
  8. Pricing - 2 pricing tiers with features
  9. Testimonials - 6 client reviews with ratings
  10. FAQ - Accordion with common questions
  11. Contact - Form and contact methods
  12. Footer - Navigation, social links, newsletter

## Interactive Features

- Smooth scroll navigation
- FAQ accordion (expand/collapse)
- Hover effects on cards and buttons
- Mobile-responsive hamburger menu
- Working contact form (console log)

## Getting Started

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)

## Project Structure

```
formix-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Benefits.tsx
│   │   ├── Work.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── package.json
```

## Design Highlights

- **Typography**: Bold, uppercase headings with increased letter-spacing
- **Color Scheme**: Pure black (#000000) background with white (#FFFFFF) text
- **Cards**: Subtle borders with rounded corners and hover effects
- **Spacing**: Generous whitespace for clean, modern aesthetic
- **Section Dividers**: "// SECTION //" style branding elements

## Customization

To customize the content, edit the component files in `app/components/`. Each section is self-contained and easy to modify.

## License

This is a demonstration project inspired by the Formix website design.
