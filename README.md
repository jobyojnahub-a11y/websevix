# Websevix - AI-Powered Website Building Platform

A comprehensive Next.js 14 application for the main marketing website of Websevix, an AI-powered website building platform.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Proper metadata, structured data, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and efficient code splitting

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
websevix2/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx       # Sticky navigation header
│   ├── Footer.tsx            # Footer component
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── TrustBar.tsx      # Logo carousel
│       ├── Features.tsx      # Features overview
│       ├── HowItWorks.tsx    # Process timeline
│       ├── TemplateShowcase.tsx  # Template gallery
│       ├── Pricing.tsx       # Pricing plans
│       ├── Testimonials.tsx  # Customer testimonials
│       ├── FAQ.tsx           # FAQ accordion
│       └── FinalCTA.tsx      # Final call-to-action
├── tailwind.config.ts       # Tailwind configuration with custom design system
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

The project uses a comprehensive design system defined in `tailwind.config.ts`:

- **Colors**: Primary (blue), Secondary (cyan), Accent (orange), and neutral palette
- **Typography**: Custom font sizes and weights for headings and body text
- **Spacing**: 8px base unit system
- **Shadows**: Layered shadow system with brand-colored shadows
- **Animations**: Custom keyframes for mesh movement, floating, and transitions

## 🧩 Components

### Navigation
- Sticky header with glassmorphism effect
- Mega menu dropdowns for Features and Templates
- Mobile-responsive hamburger menu
- Smooth scroll navigation

### Hero Section
- Animated gradient background
- Floating geometric shapes
- Interactive website mockup
- Trust indicators and CTAs

### Features Section
- 6 feature cards with icons
- Hover animations
- Responsive grid layout

### How It Works
- 3-step process timeline
- Alternating layout (left/right)
- Feature lists with checkmarks

### Template Showcase
- Category filters
- Template grid with hover effects
- Badge system (New, Popular)
- Dark theme section

### Pricing
- 3 pricing tiers (Starter, Professional, Enterprise)
- Monthly/Annual billing toggle
- Feature comparison lists
- Featured plan highlighting

### Testimonials
- Auto-rotating carousel
- Stats display
- Navigation controls
- Star ratings

### FAQ
- Accordion-style questions
- Smooth expand/collapse animations
- 12 comprehensive Q&As

### Final CTA
- Gradient background
- Multiple CTAs
- Trust indicators
- Social proof

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Colors
Edit the color palette in `tailwind.config.ts` under the `theme.extend.colors` section.

### Content
Update content in each component file in `components/sections/`.

### Fonts
Add custom fonts in `app/layout.tsx` and update `tailwind.config.ts` font families.

## 🔧 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support, email support@websevix.com or visit our help center.

---

Built with ❤️ by the Websevix team
