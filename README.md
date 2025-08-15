# Agricultural Export Website

A modern, responsive website for an agricultural export company built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations and interactive components showcasing premium agricultural products and export services.

## Features

- **Hero Section**: Eye-catching image slider with call-to-action
- **Interactive Navbar**: Animated dropdown menus with product previews
- **Products Carousel**: 3D carousel showcasing different agricultural products
- **Testimonials**: Infinite scrolling cards with customer feedback
- **Process Timeline**: Step-by-step visualization of the export process
- **Responsive Design**: Mobile-first approach with dark mode support
- **Modern Animations**: Smooth transitions using Framer Motion

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (motion)
- **Icons**: Tabler Icons
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agri-export-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
agri-export-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── hero.tsx
│   │   ├── products.tsx
│   │   ├── testimonials.tsx
│   │   └── process.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── navbar-menu.tsx
│   │   ├── images-slider.tsx
│   │   ├── carousel.tsx
│   │   ├── infinite-moving-cards.tsx
│   │   └── timeline.tsx
│   └── navbar.tsx         # Main navigation
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Components Overview

### Hero Section
- Image slider with agricultural imagery
- Animated text with gradient effects
- Call-to-action button

### Products Section
- Interactive 3D carousel
- Product categories: Rice, Fruits & Vegetables, Spices, Grains
- Hover effects and smooth transitions

### Testimonials Section
- Infinite scrolling testimonial cards
- Customer feedback from global partners
- Pause on hover functionality

### Process Timeline
- Step-by-step export process visualization
- Scroll-triggered animations
- Detailed process descriptions with images

## Customization

### Adding New Products
Edit the `slides` array in `components/sections/products.tsx`:

```typescript
const slides = [
  {
    title: "Your Product Name",
    button: "Button Text",
    src: "image-url",
  },
  // Add more products...
];
```

### Modifying Testimonials
Update the `testimonials` array in `components/sections/testimonials.tsx`:

```typescript
const testimonials = [
  {
    quote: "Customer testimonial...",
    name: "Customer Name",
    title: "Customer Title",
  },
  // Add more testimonials...
];
```

### Customizing Process Steps
Modify the `data` array in `components/sections/process.tsx` to reflect your business process.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact [your-email@domain.com]
