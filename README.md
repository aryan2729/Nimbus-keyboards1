# Nimbus Keyboard - 3D Interactive Website

A cutting-edge 3D interactive website showcasing the Nimbus mechanical keyboard with immersive 3D experiences, customizable keycap themes, and interactive switch demonstrations.

## 🚀 Live Demo

**Live Website:** [https://nimbus-keyboard.vercel.app](https://nimbus-keyboard.vercel.app)

## ✨ Features

### 🎮 Interactive 3D Experience
- **Immersive 3D Keyboard Model**: Fully interactive 3D keyboard with realistic materials and lighting
- **Customizable Keycap Themes**: 6 different keycap color schemes (Goodwell, Dreamboard, Cherry Navy, Kick, Old School, Candy Keys)
- **Switch Playground**: Interactive mechanical switch demonstrations with authentic sound effects
- **Smooth Animations**: GSAP-powered animations for seamless user experience

### 🎨 Visual Design
- **Modern UI/UX**: Clean, modern interface with responsive design
- **Dynamic Backgrounds**: Gradient backgrounds that change based on scroll position
- **Typography**: Custom font styling with Roboto Flex variable font
- **3D Rendering**: High-quality 3D models with realistic materials and lighting

### 🛒 E-commerce Integration
- **Stripe Payment Integration**: Secure checkout process
- **Product Management**: Dynamic product information via Prismic CMS
- **Success/Cancel Pages**: Complete purchase flow handling

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Touch Interactions**: Mobile-friendly 3D interactions
- **Performance Optimized**: Efficient loading and rendering

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.0** - Utility-first CSS framework

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **@gsap/react** - GSAP animations for React

### Content Management
- **Prismic CMS** - Headless content management
- **Slice Machine** - Visual page builder

### E-commerce
- **Stripe** - Payment processing
- **Next.js API Routes** - Server-side API endpoints

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Turbopack** - Fast bundling

## 📁 Project Structure

```
nimbus-keyboard1/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API routes
│   │   │   ├── checkout/       # Stripe checkout endpoints
│   │   │   ├── exit-preview/   # Prismic preview exit
│   │   │   ├── preview/       # Prismic preview
│   │   │   └── revalidate/    # ISR revalidation
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── success/           # Payment success page
│   │   └── slice-simulator/   # Prismic slice simulator
│   ├── components/            # Reusable components
│   │   ├── Bounded.tsx       # Layout wrapper
│   │   ├── FadeIn.tsx        # Animation component
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Keyboard.tsx      # 3D keyboard model
│   │   ├── Keycap.tsx        # Individual keycap component
│   │   ├── Loader.tsx        # Loading component
│   │   ├── Logo.tsx          # Logo component
│   │   ├── LogoMark.tsx      # Logo mark
│   │   ├── Navbar.tsx        # Navigation
│   │   └── Switch.tsx        # 3D switch component
│   ├── slices/               # Prismic slices (page sections)
│   │   ├── BentoBoxx/        # Bento box layout slice
│   │   ├── ColourChanger/     # Keycap color picker
│   │   ├── Hero/             # Hero section with 3D scene
│   │   ├── Marque/           # Scrolling text marquee
│   │   ├── PurchaseButton/   # Buy button component
│   │   └── SwitchPlayground/ # Interactive switch demo
│   ├── prismicio.ts          # Prismic client configuration
│   └── checkout.ts           # Checkout utility functions
├── public/                    # Static assets
│   ├── hdr/                   # HDR environment maps
│   ├── sounds/               # Audio files for switches
│   ├── *.gltf, *.bin         # 3D model files
│   └── *.png                 # Texture images
├── customtypes/              # Prismic content types
└── package.json
```

## 🎯 Key Components

### 3D Components
- **Keyboard.tsx**: Main 3D keyboard model with detailed keycap and switch geometry
- **Switch.tsx**: Individual mechanical switch with realistic materials
- **Keycap.tsx**: Customizable keycap with texture mapping

### Interactive Slices
- **Hero**: Landing section with 3D keyboard showcase
- **ColourChanger**: Interactive keycap theme selector
- **SwitchPlayground**: Mechanical switch demonstration with sound
- **BentoBoxx**: Grid layout for content sections
- **PurchaseButton**: E-commerce integration

### Animation System
- **GSAP Integration**: Smooth scroll-triggered animations
- **SplitText**: Text animation effects
- **ScrollTrigger**: Scroll-based animations
- **3D Animations**: Keyboard and switch interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Prismic account (for CMS)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nimbus-keyboard1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-prismic-repo
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Keycap Themes
1. Add texture images to `/public/`
2. Update `KEYCAP_TEXTURES` array in `ColourChanger/index.tsx`
3. Configure knob colors and texture paths

### Adding New Switch Types
1. Add sound files to `/public/sounds/`
2. Update `SOUND_MAP` in `Switch.tsx`
3. Create new switch content in Prismic

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes
- 3D materials: Three.js material properties

## 🔧 API Endpoints

### Checkout API
- **POST** `/api/checkout/[uid]` - Create Stripe checkout session
- **GET** `/api/revalidate` - Revalidate ISR cache
- **GET** `/api/preview` - Prismic preview mode
- **GET** `/api/exit-preview` - Exit preview mode

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider
3. Configure environment variables

## 🎵 Audio Assets

The project includes authentic mechanical keyboard switch sounds:
- **Black switches**: Deep, linear sound
- **Blue switches**: Clicky, tactile sound  
- **Brown switches**: Tactile, non-clicky sound
- **Red switches**: Linear, smooth sound

## 🎮 3D Assets

### Models
- `keyboard.gltf` - Main keyboard model
- `keycap.gltf` - Individual keycap model
- `switch.gltf` - Mechanical switch model

### Textures
- Keycap UV maps for different themes
- HDR environment maps for realistic lighting
- Material textures for realistic rendering

### Environment Maps
- `blue-studio.hdr` - Blue studio lighting
- `studio-small.hdr` - Compact studio setup

## 🔍 Performance Optimization

- **3D Model Optimization**: Compressed GLTF models
- **Texture Optimization**: Compressed image formats
- **Lazy Loading**: Components loaded on demand
- **Code Splitting**: Dynamic imports for slices
- **ISR**: Incremental Static Regeneration

## 🐛 Troubleshooting

### Common Issues
1. **3D models not loading**: Check file paths in `/public/`
2. **Prismic content not showing**: Verify environment variables
3. **Stripe checkout failing**: Check API keys and webhook configuration
4. **Performance issues**: Enable hardware acceleration in browser

### Debug Mode
Set `NODE_ENV=development` for detailed error messages and debugging tools.


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ using Next.js, Three.js, and modern web technologies**