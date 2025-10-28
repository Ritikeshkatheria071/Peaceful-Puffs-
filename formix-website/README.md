# Formix Website

A modern, responsive website replica of the Formix design agency website. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Dark Theme** - Sleek black background with cyan accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js 16 and optimized for speed
- 🎭 **Smooth Animations** - Counter animations, marquee effects, and smooth transitions
- 📋 **Complete Sections**:
  - Hero with CTAs and social proof
  - Services showcase
  - Why Us with animated stats
  - Benefits grid
  - Project portfolio
  - Pricing plans
  - Client testimonials
  - FAQ accordion
  - Contact form
  - Footer with newsletter signup

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd formix-website
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
formix-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Fixed navigation bar
│   │   ├── Hero.tsx          # Hero section with CTAs
│   │   ├── Services.tsx      # Services showcase
│   │   ├── WhyUs.tsx         # Stats and founder profile
│   │   ├── Benefits.tsx      # Benefits grid
│   │   ├── Projects.tsx      # Project portfolio
│   │   ├── Pricing.tsx       # Pricing plans
│   │   ├── Clients.tsx       # Testimonials
│   │   ├── FAQs.tsx          # FAQ accordion
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── public/                   # Static assets
└── package.json              # Dependencies

```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Customization

### Colors

The main brand color (cyan) can be customized in the Tailwind classes throughout the components. Look for classes like:
- `bg-cyan-500` - Background color
- `text-cyan-400` - Text color
- `border-cyan-500` - Border color

### Content

All content is hardcoded in the component files. To update:
- **Navigation**: Edit `app/components/Navigation.tsx`
- **Hero text**: Edit `app/components/Hero.tsx`
- **Services**: Edit the `services` array in `app/components/Services.tsx`
- **Testimonials**: Edit the `testimonials` array in `app/components/Clients.tsx`
- **Pricing**: Edit the `plans` array in `app/components/Pricing.tsx`

### Animations

Custom animations are defined in `app/globals.css`:
- Marquee animation for logo carousel
- Smooth scrolling for anchor links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a replica project for educational purposes.

## Credits

Original design: Formix (https://formix.framer.website)
Replica built with Next.js and Tailwind CSS
