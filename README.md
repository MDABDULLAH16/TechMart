# TechMart - Modern E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 16, featuring a comprehensive tech product catalog with advanced filtering, dark/light mode support, and an intuitive user experience.

![TechMart Banner](https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1200&h=400)

##  Project Description

TechMart is a full-featured e-commerce web application designed for technology enthusiasts. It provides a seamless shopping experience with modern UI/UX design, comprehensive product management, and responsive layouts that work perfectly across all devices. The platform showcases the latest tech products including smartphones, laptops, gaming gear, audio equipment, and more.

##  Table of Contents

- [Setup & Installation](#setup--installation)
- [Route Summary](#route-summary)
- [Implemented Features](#implemented-features)
- [Feature Explanations](#feature-explanations)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

##  Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/techmart.git
   cd techmart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file in root directory
   NEXT_PUBLIC_API_URL=https://techmart-server-gamma.vercel.app
   ```

4. **Configure Next.js for external images**
   - The project is already configured to work with Unsplash images
   - External image domains are set in `next.config.mjs`

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The application should be running successfully

### Build for Production

```bash
npm run build
npm start
```

## Route Summary

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Homepage | Hero banner, featured products, categories, testimonials |
| `/products` | Products listing | Search, filters, pagination, grid/list view |
| `/products/[id]` | Product details | Image gallery, specifications, related products |
| `/about` | About page | Company information and mission |
| `/contact` | Contact page | Contact form and company details |
| `/deals` | Special deals | Promotional offers and discounts |
| `/support` | Support page | Help center and customer support |

### API Integration

- **Products API**: `https://techmart-server-gamma.vercel.app/products`
- **Data Format**: JSON with product details, images, categories, and specifications

##  Implemented Features

###  **UI/UX Features**
- ✅ Responsive design (mobile-first approach)
- ✅ Dark/Light mode toggle with system preference detection
- ✅ Modern glassmorphism and gradient effects
- ✅ Smooth animations and transitions
- ✅ Interactive hover effects
- ✅ Loading states and error handling

###  **Homepage Sections**
- ✅ Hero banner with Swiper.js carousel
- ✅ Welcome section with call-to-action buttons
- ✅ Product categories with interactive icons
- ✅ Featured products showcase
- ✅ Why choose us / Features section
- ✅ Statistics and trust indicators
- ✅ Customer testimonials

###  **Product Management**
- ✅ Product listing with grid/list view modes
- ✅ Advanced search functionality
- ✅ Category-based filtering
- ✅ Price range filtering with slider
- ✅ Sorting options (name, price low-to-high, price high-to-low)
- ✅ Pagination with navigation controls
- ✅ Product favorites/wishlist
- ✅ Add to cart functionality

###  **Product Details**
- ✅ Image gallery with thumbnail navigation
- ✅ Detailed product specifications
- ✅ Quantity selector
- ✅ Related products from same category
- ✅ Customer reviews and ratings
- ✅ Social sharing buttons
- ✅ Stock status indicators

###  **Navigation & Layout**
- ✅ Responsive navbar with mobile menu
- ✅ Active link highlighting
- ✅ Search functionality in header
- ✅ Shopping cart and wishlist icons
- ✅ User account access
- ✅ Breadcrumb navigation

###  **Footer**
- ✅ Company information and logo
- ✅ Newsletter subscription
- ✅ Quick links and categories
- ✅ Customer service links
- ✅ Social media integration
- ✅ Contact information
- ✅ Legal links (Privacy, Terms, etc.)

###  **Technical Features**
- ✅ Next.js 16 with App Router
- ✅ Server-side rendering (SSR)
- ✅ Image optimization with Next.js Image
- ✅ Tailwind CSS v4 for styling
- ✅ TypeScript support
- ✅ SEO optimization
- ✅ Performance optimization

##  Feature Explanations

### **Dark/Light Mode System**
The theme system uses `next-themes` library with automatic system preference detection. Users can toggle between light and dark modes using the theme toggle button in the navbar. The system persists user preferences and provides smooth transitions without flash.

### **Product Filtering & Search**
Advanced filtering system allows users to:
- **Search**: Real-time text search across product titles and descriptions
- **Category Filter**: Filter products by technology categories
- **Price Range**: Interactive slider for price-based filtering
- **Sorting**: Multiple sorting options for better product discovery
- **View Modes**: Switch between grid and list layouts

### **Responsive Design**
Mobile-first approach ensures optimal experience across all devices:
- **Breakpoints**: Tailored layouts for mobile, tablet, and desktop
- **Touch-friendly**: Optimized button sizes and spacing for mobile
- **Flexible Grid**: Adaptive product grids based on screen size
- **Mobile Menu**: Collapsible navigation for smaller screens

### **Image Optimization**
Next.js Image component provides:
- **Automatic optimization**: WebP format when supported
- **Lazy loading**: Images load as they enter viewport
- **Responsive images**: Multiple sizes for different screen densities
- **External image support**: Configured for Unsplash and other CDNs

### **Performance Features**
- **Code splitting**: Automatic route-based code splitting
- **Prefetching**: Link prefetching for faster navigation
- **Caching**: Optimized caching strategies
- **Bundle optimization**: Tree shaking and minification

### **SEO Optimization**
- **Meta tags**: Dynamic meta descriptions and titles
- **Structured data**: Product schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt texts**: Comprehensive image descriptions

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Swiper.js** - Touch slider component
- **next-themes** - Theme management

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

### **External Services**
- **Unsplash** - High-quality product images
- **Custom API** - Product data management

##  Project Structure

```
techmart/
├── public/                 # Static assets
│   ├── logo.png           # Brand logo
│   └── ...                # Other static files
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/        # Authentication routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── deals/         # Deals page
│   │   ├── products/      # Products pages
│   │   │   ├── [id]/      # Dynamic product details
│   │   │   └── page.jsx   # Products listing
│   │   ├── support/       # Support page
│   │   ├── globals.css    # Global styles
│   │   ├── layout.jsx     # Root layout
│   │   └── page.jsx       # Homepage
│   └── components/        # Reusable components
│       ├── Banner/        # Hero banner component
│       ├── Footer/        # Footer component
│       ├── Navbar/        # Navigation component
│       ├── ThemeProvider.jsx
│       └── ThemeToggle.jsx
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs        # Next.js configuration
├── package.json
├── postcss.config.mjs     # PostCSS configuration
├── README.md
└── tailwind.config.js     # Tailwind configuration
```

##  Deployment

The project is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Environment Variables for Production
```bash
NEXT_PUBLIC_API_URL=https://techmart-server-gamma.vercel.app
```

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨 Author

**TechMart Team**
- Website: [techmart.com](https://techmart.com)
- Email: support@techmart.com

---

**Made with ❤️ for tech enthusiasts**