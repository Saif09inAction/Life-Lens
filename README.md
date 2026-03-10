# LifeLens – AI Smart Assistive Goggles

A modern startup-style website for **LifeLens**, AI-powered smart goggles that help blind users navigate safely and deaf users understand conversations in real time.

**Team: Code Paglu's** — Sufyan Khan, Arsheel Patel, Saif Salmani

## Tech Stack

- **Next.js 16** – React framework
- **Tailwind CSS 4** – Styling
- **Framer Motion** – Animations
- **React Three Fiber** – 3D (ready for product mockup)
- **TypeScript** – Type safety

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Prototype Images

To display your prototype diagrams and workflow images:

1. Add images to `/public/images/`
2. Recommended filenames:
   - `goggles-mockup.png` or `goggles-mockup.svg` – Hero product mockup
   - `prototype-blind.png` – Blind navigation prototype
   - `prototype-deaf.png` – Deaf communication prototype
   - `architecture.png` or `architecture.svg` – System architecture diagram
   - `workflow.png` – Workflow diagram

3. Update the components to use your images:
   - `HeroSection.tsx` – Product mockup
   - `PrototypeSection.tsx` – Blind & deaf prototypes
   - `ArchitectureSection.tsx` – Architecture/workflow diagram

Example:
```tsx
<Image
  src="/images/your-prototype.png"
  alt="Your prototype"
  width={600}
  height={400}
  className="..."
/>
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles, dark mode
├── components/
│   ├── ThemeProvider.tsx   # Dark/light mode
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── AnimatedCounter.tsx # Stats counters
│   ├── GlassCard.tsx       # Glassmorphism cards
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── ResearchSection.tsx
│       ├── SolutionSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── PrototypeSection.tsx
│       ├── ArchitectureSection.tsx
│       ├── TechStackSection.tsx
│       ├── ImpactSection.tsx
│       ├── MarketSection.tsx
│       ├── TeamSection.tsx
│       └── ContactSection.tsx
public/
└── images/             # Add your prototype images here
    ├── goggles-mockup.svg
    └── placeholder.svg
```

## Features

- ✅ Dark / Light mode toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Glassmorphism cards
- ✅ Inter & Space Grotesk typography
- ✅ Animated statistics counters
- ✅ Contact form for demo requests
- ✅ SEO-optimized metadata

## Build

```bash
npm run build
npm start
```

## License

Private – Code Paglu's
