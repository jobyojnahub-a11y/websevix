# Quick Start Guide

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Step 2: Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 📁 Key Files to Customize

### Content Updates

1. **Hero Section**: `components/sections/Hero.tsx`
   - Update headline, subheadline, and CTA text
   - Modify trust indicators

2. **Features**: `components/sections/Features.tsx`
   - Edit feature cards in the `features` array
   - Update icons, titles, and descriptions

3. **Pricing**: `components/sections/Pricing.tsx`
   - Modify pricing plans in the `plans` array
   - Update prices, features, and badges

4. **Testimonials**: `components/sections/Testimonials.tsx`
   - Add/edit testimonials in the `testimonials` array
   - Update stats in the `stats` array

5. **FAQ**: `components/sections/FAQ.tsx`
   - Edit questions and answers in the `faqs` array

6. **Templates**: `components/sections/TemplateShowcase.tsx`
   - Update template data in the `templates` array
   - Modify categories in the `categories` array

### Design Customization

1. **Colors**: Edit `tailwind.config.ts`
   - Modify color palette in `theme.extend.colors`
   - Update primary, secondary, accent colors

2. **Typography**: Edit `tailwind.config.ts`
   - Adjust font sizes in `theme.extend.fontSize`
   - Update font families

3. **Global Styles**: Edit `app/globals.css`
   - Custom CSS utilities
   - Global styles and animations

### Navigation

- **Menu Items**: `components/Navigation.tsx`
  - Update `navItems` array
  - Modify mega menu content

### Footer

- **Links**: `components/Footer.tsx`
  - Update `footerLinks` object
  - Modify social media links

## 🎨 Design System

The design system is fully configured in `tailwind.config.ts`:

- **Primary Colors**: Blue palette (#0A2463 to #1E61D7)
- **Secondary Colors**: Cyan palette (#006B7D to #00D9FF)
- **Accent Colors**: Orange palette (#B84416 to #FF6B35)
- **Spacing**: 8px base unit system
- **Shadows**: Layered shadow system with brand colors

## 🔧 Common Tasks

### Add a New Section

1. Create component in `components/sections/YourSection.tsx`
2. Import and add to `app/page.tsx`
3. Follow existing section patterns for consistency

### Update Images

1. Place images in `public/` directory
2. Reference as `/your-image.jpg`
3. For external images, add domain to `next.config.js` images.domains

### Add Animations

Use Framer Motion (already installed):
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check TypeScript config
npx tsc --noEmit
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## ✅ Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Customize content
4. ✅ Update branding/colors
5. ✅ Add real images
6. ✅ Configure domain
7. ✅ Deploy to production

---

Happy coding! 🎉
