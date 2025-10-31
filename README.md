# CyberSec Portfolio - Opiyo Don

A minimalistic, modern cybersecurity portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features smooth GSAP animations and a clean black & white aesthetic.

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Animations**: GSAP 3.x & Lottie Files
- **Icons**: Lucide React
- **Images**: Unsplash API

## 📁 Project Structure

```
cybersec-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Home page
│   │   ├── resume/
│   │   │   └── page.tsx            # Resume/CV page
│   │   ├── projects/
│   │   │   └── page.tsx            # Projects showcase
│   │   ├── lab-challenges/
│   │   │   └── page.tsx            # CTF & Lab challenges
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Footer.tsx              # Footer component
│   │   ├── Hero.tsx                # Hero section
│   │   ├── AnimatedSection.tsx     # GSAP animated wrapper
│   │   └── ProjectCard.tsx         # Reusable project card
│   ├── lib/
│   │   └── animations.ts           # GSAP animation utilities
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── public/
│   └── lottie/
│       └── cyber-animation.json    # Lottie animation file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

## 🎨 Design Philosophy

- **Minimalistic**: Clean black & white color scheme
- **Modern**: Smooth animations and transitions using GSAP
- **Responsive**: Mobile-first approach, fully responsive across all devices
- **Accessible**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and code splitting

## 🛠️ Installation

1. **Clone or create the project**:

```bash
npx create-next-app@latest cybersec-portfolio --typescript --tailwind --app
cd cybersec-portfolio
```

2. **Install dependencies**:

```bash
npm install gsap lucide-react lottie-react
```

3. **Copy all files** from the artifacts into their respective directories

4. **Run development server**:

```bash
npm run dev
```

5. **Open browser**: Navigate to `http://localhost:3000`

## 📦 Key Features

### 1. Home Page

- Professional hero section with animated greeting
- Prominent photo and tagline
- Smooth scroll animations
- Call-to-action buttons

### 2. Resume Section

- Clean timeline layout
- Education, work experience, and skills
- Certifications display
- Downloadable CV option

### 3. Projects Showcase

- Grid layout with hover effects
- Project cards with descriptions
- Tech stack tags
- Live demo and GitHub links

### 4. Lab Challenges

- CTF writeups and solutions
- Problem statement breakdown
- Tools and methodologies used
- Screenshots and code snippets
- Key learnings section

### 5. Contact Page

- Professional links (LinkedIn, GitHub, Email)
- Contact form (optional)
- Social media integration
- Location information

## 🎭 Animations

### GSAP Animations:

- Fade-in on scroll
- Stagger animations for lists
- Smooth page transitions
- Hover effects

### Lottie Animations:

- Cybersecurity-themed icons
- Loading states
- Interactive elements

## 🌐 Deployment

### Vercel (Recommended):

```bash
npm run build
vercel --prod
```

### Other Platforms:

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Tailwind CSS v4

Configured in `tailwind.config.ts` with custom colors and animations.

### TypeScript

Strict mode enabled with path aliases configured in `tsconfig.json`.

### Environment Variables

Create a `.env.local` file for any API keys:

```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_key_here
```

## 🎯 Performance Optimizations

- Next.js Image optimization
- Code splitting with dynamic imports
- Lazy loading for images
- Minified CSS and JavaScript
- SEO optimized with metadata

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Opiyo Don**

- Email: opiyodon9@gmail.com
- Phone: +254-714-230692
- GitHub: [github.com/opiyodon](https://github.com/opiyodon)
- Portfolio: [opiyodon.vercel.app](https://opiyodon.vercel.app)

## 🙏 Acknowledgments

- Inspired by Rendercon Kenya's minimalistic design
- Built for cybersecurity portfolio requirements
- Follows modern web development best practices

---

**Note**: Replace placeholder content with your actual cybersecurity projects, lab challenges, and certifications as you progress in your learning journey.
