# AI Coding Agent Instructions for my-app

## Project Overview
This is a **Next.js 16** application styled with **Tailwind CSS v4** and **React 19**. It's a Suitmedia test project bootstrapped with `create-next-app`. The app uses the App Router pattern (not Pages Router) with server-side rendering capabilities.

## Architecture & Key Files

### Directory Structure
- `src/app/` - Next.js App Router entry point
  - `layout.js` - Root layout wraps all pages with Navbar component
  - `page.js` - Home page (currently minimal)
  - `globals.css` - Global styles with Tailwind directives
- `src/components/` - Reusable React components
  - `navbar/` - Top navigation bar with Logo
  - `logo/` - Branded logo component linking to home
- `next.config.mjs` - Configures remote image optimization for `suitmedia.com`

### Important Patterns

**Component Structure:**
- Components are `.jsx` files in `src/components/` organized by feature folder
- Each component folder has an `index.jsx` file as the entry point
- Components are imported into layouts and pages (see `layout.js` importing Navbar)

**Image Handling:**
- Uses Next.js `Image` component with `next/image`
- Remote images from `suitmedia.com` are pre-configured in `next.config.mjs`
- Logo component uses remote image URL directly

**Styling:**
- Tailwind CSS v4 with `@import "tailwindcss"` in `globals.css`
- CSS variables defined in `:root` theme for dark mode support
- Use Tailwind utility classes for styling (e.g., `flex`, `bg-orange-500`, `p-4`)
- Google Fonts (Geist, Geist Mono) are loaded via `next/font/google` in layout

## Development Workflow

### Essential Commands
```bash
npm run dev      # Start dev server at http://localhost:3000 (hot reload enabled)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint (uses Next.js core-web-vitals config)
```

### Dev Server Behavior
- Auto-refreshes on file changes
- Pages edited in `app/` directory automatically update
- Accessible at `http://localhost:3000`

## Code Quality

**ESLint Configuration:**
- Uses `eslint-config-next/core-web-vitals` for Next.js best practices
- Configured via `eslint.config.mjs` (flat config format)
- Ignores build artifacts (`.next/`, `out/`, `build/`)

## When Adding Features

1. **New Pages:** Add `.js` files in `src/app/` following App Router conventions
2. **New Components:** Create folders in `src/components/` with `index.jsx` inside
3. **Styling:** Use Tailwind utilities directly in JSX (`className="flex ..."`), not separate CSS files
4. **Images:** Use `next/image` Image component (not `<img>`) for optimization
5. **Linking:** Use `next/link` Link component for internal navigation

## External Dependencies
- Remote images configured to load from `suitmedia.com` only (security via `remotePatterns`)
