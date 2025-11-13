# Beancount Landing Page

Landing page for Starter Kit Pembukuan Kolektif - a Beancount starter kit designed for transparent accounting in grassroots collectives and cultural organizations.

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts & analytics
│   ├── page.tsx           # Home page
│   ├── install/           # Installation guide page
│   ├── tutorials/         # Tutorials listing & individual tutorials
│   └── about/             # About page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── tutorial/         # Tutorial-specific components
│   ├── tutorials/        # Tutorials list components
│   ├── header.tsx        # Site header/navigation
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features section
│   ├── installation.tsx  # Installation guide component
│   ├── cta.tsx           # Call-to-action section
│   └── footer.tsx        # Site footer
├── styles/               # Global styles
│   └── globals.css       # Tailwind imports & theme variables
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Design System

The site uses a **brutalist/neo-brutalist design** aesthetic with:

- Thick borders (2px and 4px)
- High contrast colors
- Bold, uppercase typography
- Space Grotesk (sans-serif) and Space Mono (monospace) fonts
- Minimal rounded corners
- Strong grid-based layouts

## Content Language

The site is primarily in **Indonesian (Bahasa Indonesia)**, targeting Indonesian grassroots collectives and cultural organizations.

## Key Features

- Responsive design with mobile menu
- Tab-based OS selector for installation instructions
- Step-by-step installation guide
- Tutorial system with breadcrumb navigation
- Vercel Analytics integration
- "Under Construction" banner in root layout

## Development Notes

- TypeScript build errors are currently ignored (`ignoreBuildErrors: true`)
- Images are unoptimized
- Uses `@/*` path alias for imports
- Tailwind CSS 4 with custom theme using oklch() color space

## License

[Add your license here]

## Contributing

[Add contribution guidelines here]
