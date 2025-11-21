# Next.js to Astro Migration Plan
## Portfolio Website Migration Guide

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Architecture Decisions](#architecture-decisions)
3. [Pre-Migration Checklist](#pre-migration-checklist)
4. [Migration Phases](#migration-phases)
5. [Detailed Ticket Breakdown](#detailed-ticket-breakdown)
6. [Testing Checklist](#testing-checklist)
7. [Deployment Guide](#deployment-guide)
8. [Rollback Strategy](#rollback-strategy)
9. [Reference Links](#reference-links)

---

## Executive Summary

### Current State
- **Framework**: Next.js 15 (App Router)
- **Deployment**: Netlify (auto-deploy on merge to main)
- **Content**: 8 blog posts, 5 talks, 1 project (all markdown)
- **Pages**: Home, Blog, Talks, Projects
- **Client Interactivity**: 3 components (PageHeader, TechStack, Home wrapper)
- **Styling**: Tailwind CSS v4 (CSS-first config)

### Target State
- **Framework**: Astro 5.x (HTML-first, zero JS by default)
- **Deployment**: New Netlify site connected to new repository
- **Content**: Same markdown content using Astro Content Collections
- **Pages**: Same structure with improved performance
- **Client Interactivity**: Vanilla JS for mobile menu, Swiper as client island
- **Styling**: Tailwind CSS v4 (preserve existing config)

### Benefits of Migration
- **Performance**: Zero JS shipped by default (vs React hydration overhead)
- **Bundle Size**: ~95% reduction in JavaScript (only Swiper carousel needs JS)
- **Build Speed**: Faster builds with Astro's optimized static generation
- **Simplicity**: Less framework-specific code, easier maintenance
- **Core Web Vitals**: Improved scores across the board
- **Developer Experience**: Simpler component model, better TypeScript support

### Estimated Timeline
- **Total Effort**: 20-30 hours (2-3 full days or 1 week part-time)
- **Ticket Count**: 21 granular tickets (1-2 hours each)
- **Phases**: 6 phases from setup to deployment

---

## Architecture Decisions

### 1. Repository Strategy: New Repository ✅
**Decision**: Create a completely new repository for the Astro version.

**Rationale**:
- Clean git history starting fresh
- Simplified Netlify deployment (new site, no config conflicts)
- Can keep old Next.js site live during migration
- Easy rollback (just switch DNS/deployment back)
- No merge conflicts or build configuration clashes
- Cleaner for future maintainers

**Implementation**:
```bash
# Create new repo
mkdir portfolio-astro
cd portfolio-astro
git init
git remote add origin <your-new-repo-url>
```

### 2. Mobile Menu Implementation: Vanilla JavaScript ✅
**Decision**: Replace Headless UI Dialog with vanilla JavaScript.

**Rationale**:
- Zero dependencies for menu functionality
- Smallest possible bundle size
- Full control over behavior and accessibility
- No React hydration needed for navigation
- Simpler debugging and maintenance
- Better performance (no framework overhead)

**Implementation Pattern**:
```javascript
// Simple toggle with accessibility
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', !isOpen);
  document.body.classList.toggle('overflow-hidden', !isOpen);
});
```

### 3. Tailwind CSS Version: Keep v4 ✅
**Decision**: Maintain Tailwind CSS v4 with CSS-first configuration.

**Rationale**:
- Already familiar with the config
- Preserve custom color palette and utilities
- Take advantage of latest Tailwind features
- No need to refactor existing styles
- CSS-first config works well with Astro
- Future-proof choice

**Implementation**:
- Copy existing `app/globals.css` to Astro project
- Install `@tailwindcss/postcss` and `@tailwindcss/typography`
- Minimal changes needed to existing styles

### 4. Content Management: Astro Content Collections ✅
**Decision**: Use Astro's Content Collections for all markdown content.

**Rationale**:
- Type-safe content with Zod schemas
- Better developer experience than manual file reading
- Built-in frontmatter parsing
- Automatic TypeScript types for content
- Optimized queries and sorting
- Future-proof for content management

**Implementation**:
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    imageUrl: z.string().url(),
  }),
});
```

---

## Pre-Migration Checklist

### Before Starting Migration
- [ ] **Backup current site** - Ensure git is clean, all changes committed
- [ ] **Document current functionality** - Take screenshots of all pages
- [ ] **Run performance audit** - Lighthouse scores for comparison
- [ ] **Export environment variables** - Any secrets needed for build
- [ ] **Create new GitHub repository** - For the Astro version
- [ ] **Prepare Netlify account** - Ready to create new site
- [ ] **Install Astro CLI** - `npm create astro@latest`
- [ ] **Read Astro docs** - Familiarize with Content Collections and Islands

### Content Audit
- [ ] **8 blog posts** in `/posts/` - Ready to migrate
- [ ] **5 talks** in `/talks/` - Ready to migrate
- [ ] **1 project** in `/projects/` - Ready to migrate
- [ ] **All images** in `/public/images/` - Catalog for optimization

### Dependency Audit
**Keep These**:
- `gray-matter` - ❌ Not needed (Astro handles frontmatter)
- `swiper` - ✅ Keep for TechStack carousel
- `@tailwindcss/postcss` - ✅ Keep for Tailwind v4
- `@tailwindcss/typography` - ✅ Keep for prose styling

**Replace These**:
- `next` → `astro`
- `react` / `react-dom` → `@astrojs/react` (only for islands)
- `@headlessui/react` → Vanilla JS
- `markdown-to-jsx` → Astro built-in
- `next/image` → `astro:assets`
- `next/font` → `@fontsource` packages

---

## Migration Phases

### Phase 1: Project Setup & Configuration (4 tickets)
Set up new Astro project with Tailwind v4, TypeScript, and basic configuration.
- **Duration**: 3-4 hours
- **Tickets**: #1-4

### Phase 2: Content Collections Setup (2 tickets)
Create content collections for blog, talks, and projects with type-safe schemas.
- **Duration**: 2-3 hours
- **Tickets**: #5-6

### Phase 3: Component Migration (6 tickets)
Convert Next.js components to Astro components, starting with static then interactive.
- **Duration**: 6-8 hours
- **Tickets**: #7-12

### Phase 4: Page Migration (4 tickets)
Migrate all pages from Next.js to Astro, utilizing content collections.
- **Duration**: 4-5 hours
- **Tickets**: #13-16

### Phase 5: Assets & Optimization (3 tickets)
Optimize images, set up fonts, and configure build settings.
- **Duration**: 3-4 hours
- **Tickets**: #17-19

### Phase 6: Testing & Deployment (2 tickets)
Comprehensive testing and deployment to Netlify.
- **Duration**: 2-3 hours
- **Tickets**: #20-21

---

## Detailed Ticket Breakdown

---

### 🏗️ PHASE 1: Project Setup & Configuration

---

#### Ticket #1: Initialize Astro Project
**Priority**: Critical
**Estimated Time**: 45-60 minutes
**Dependencies**: None

**Description**:
Create a new Astro project with TypeScript and React integration for interactive components.

**Acceptance Criteria**:
- [ ] New Astro project initialized with TypeScript
- [ ] `@astrojs/react` integration installed
- [ ] Project builds successfully with `npm run build`
- [ ] Dev server runs without errors with `npm run dev`
- [ ] Git repository initialized with proper `.gitignore`

**Implementation Steps**:
1. Create new repository on GitHub
2. Clone repository locally
3. Run `npm create astro@latest .` (in repo directory)
   - Choose: "Empty" template
   - Enable TypeScript: "Strict"
   - Install dependencies: Yes
4. Add React integration: `npx astro add react`
5. Verify project structure:
   ```
   src/
   ├── pages/
   │   └── index.astro
   └── env.d.ts
   public/
   astro.config.mjs
   package.json
   tsconfig.json
   ```
6. Test dev server: `npm run dev`
7. Test build: `npm run build`
8. Commit initial setup: `git add . && git commit -m "Initial Astro project setup"`

**Reference**:
- [Astro Installation Docs](https://docs.astro.build/en/install/auto/)
- [React Integration](https://docs.astro.build/en/guides/integrations-guide/react/)

---

#### Ticket #2: Configure Tailwind CSS v4
**Priority**: Critical
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #1

**Description**:
Set up Tailwind CSS v4 with custom color palette and utilities from existing Next.js site.

**Acceptance Criteria**:
- [ ] Tailwind CSS v4 installed and configured
- [ ] Custom color palette migrated (pink, lime, blue, orange, purple, cream)
- [ ] Custom utilities migrated (text-outline variants)
- [ ] `@tailwindcss/typography` plugin configured
- [ ] Styles apply correctly in dev server

**Implementation Steps**:
1. Install Tailwind v4 dependencies:
   ```bash
   npm install @tailwindcss/postcss@latest @tailwindcss/typography
   ```

2. Create `postcss.config.mjs`:
   ```javascript
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
     },
   };
   ```

3. Create `src/styles/globals.css` and copy from old project:
   ```css
   @import "tailwindcss";

   @theme {
     --color-pink: oklch(69.25% 0.233 351.99);
     --color-lime: oklch(92.49% 0.2223 122.42);
     --color-blue: oklch(83.54% 0.1235 218.63);
     --color-orange: oklch(71.49% 0.1724 42.22);
     --color-purple: oklch(67.64% 0.1779 284.23);
     --color-cream: oklch(94.25% 0.0165 79.35);

     --font-kanit: "Kanit", sans-serif;
     --font-climate-crisis: "Climate Crisis", sans-serif;
   }

   /* Copy custom utilities and Swiper styles */
   ```

4. Import in base layout (will create in later ticket)

5. Test by adding Tailwind classes to `index.astro`:
   ```astro
   <div class="bg-pink text-2xl font-bold">Test</div>
   ```

6. Verify colors and utilities work in browser

**Files to Reference** (from old project):
- `src/app/globals.css` - Copy entire file

---

#### Ticket #3: Configure TypeScript and Project Structure
**Priority**: High
**Estimated Time**: 30-45 minutes
**Dependencies**: Ticket #1

**Description**:
Set up TypeScript configuration and create folder structure matching Astro best practices.

**Acceptance Criteria**:
- [ ] TypeScript `tsconfig.json` configured with strict mode
- [ ] Folder structure created (components, layouts, content, etc.)
- [ ] Path aliases configured (`@/` for src directory)
- [ ] No TypeScript errors on build

**Implementation Steps**:
1. Update `tsconfig.json`:
   ```json
   {
     "extends": "astro/tsconfigs/strict",
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["src/*"],
         "@components/*": ["src/components/*"],
         "@layouts/*": ["src/layouts/*"]
       }
     }
   }
   ```

2. Create folder structure:
   ```bash
   mkdir -p src/{components,layouts,content,styles,types}
   mkdir -p src/content/{blog,talks,projects}
   ```

3. Create `.gitkeep` files in empty directories:
   ```bash
   touch src/components/.gitkeep
   touch src/layouts/.gitkeep
   ```

4. Update `astro.config.mjs` with path aliases if needed

5. Test that imports work with new aliases

**Final Structure**:
```
src/
├── components/       # Reusable components
├── layouts/          # Page layouts
├── content/          # Content collections
│   ├── blog/
│   ├── talks/
│   └── projects/
├── pages/            # Routes
├── styles/           # Global styles
└── types/            # TypeScript types
```

---

#### Ticket #4: Install and Configure Fonts
**Priority**: Medium
**Estimated Time**: 30-45 minutes
**Dependencies**: Ticket #2

**Description**:
Set up Google Fonts (Kanit, Climate Crisis) using Fontsource for optimal performance.

**Acceptance Criteria**:
- [ ] Kanit font installed (weights: 400, 500, 600, 700)
- [ ] Climate Crisis font installed
- [ ] Fonts load correctly across all pages
- [ ] Font preloading configured for performance
- [ ] Fallback fonts defined

**Implementation Steps**:
1. Install Fontsource packages:
   ```bash
   npm install @fontsource/kanit
   ```

2. For Climate Crisis (not on Fontsource), download from Google Fonts and add to `public/fonts/`:
   ```
   public/
   └── fonts/
       └── climate-crisis/
           └── climate-crisis-400.woff2
   ```

3. Update `src/styles/globals.css` with font-face declarations:
   ```css
   /* Import Kanit from Fontsource */
   @import "@fontsource/kanit/400.css";
   @import "@fontsource/kanit/500.css";
   @import "@fontsource/kanit/600.css";
   @import "@fontsource/kanit/700.css";

   /* Custom font-face for Climate Crisis */
   @font-face {
     font-family: "Climate Crisis";
     src: url("/fonts/climate-crisis/climate-crisis-400.woff2") format("woff2");
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```

4. Verify Tailwind theme uses these fonts (from Ticket #2)

5. Test fonts render on a test page

**Reference**:
- [Fontsource Documentation](https://fontsource.org/)
- [Google Fonts - Climate Crisis](https://fonts.google.com/specimen/Climate+Crisis)

---

### 📚 PHASE 2: Content Collections Setup

---

#### Ticket #5: Create Content Collection Schemas
**Priority**: Critical
**Estimated Time**: 45-60 minutes
**Dependencies**: Ticket #3

**Description**:
Define Zod schemas for blog posts, talks, and projects to enable type-safe content queries.

**Acceptance Criteria**:
- [ ] `src/content/config.ts` created with all schemas
- [ ] Blog schema matches existing frontmatter structure
- [ ] Talks schema includes videoUrl field
- [ ] Projects schema includes all metadata fields
- [ ] TypeScript types auto-generated correctly
- [ ] No build errors related to content collections

**Implementation Steps**:
1. Create `src/content/config.ts`:
   ```typescript
   import { defineCollection, z } from 'astro:content';

   const blog = defineCollection({
     type: 'content',
     schema: z.object({
       title: z.string(),
       description: z.string(),
       date: z.string(), // Format: "YYYY/MM/DD"
       imageUrl: z.string().url(),
     }),
   });

   const talks = defineCollection({
     type: 'content',
     schema: z.object({
       title: z.string(),
       description: z.string(),
       date: z.string(),
       videoUrl: z.string().url(),
     }),
   });

   const projects = defineCollection({
     type: 'content',
     schema: z.object({
       name: z.string(),
       description: z.string(),
       githubUrl: z.string().url(),
       liveUrl: z.string().url().optional(),
       imageSrc: z.string(),
       slug: z.string(),
     }),
   });

   export const collections = { blog, talks, projects };
   ```

2. Run `npm run dev` to generate types

3. Verify types created in `.astro/types.d.ts`

4. Test importing collection types:
   ```typescript
   import { getCollection } from 'astro:content';
   const posts = await getCollection('blog');
   ```

**Reference**:
- [Content Collections Docs](https://docs.astro.build/en/guides/content-collections/)

---

#### Ticket #6: Migrate Markdown Content to Collections
**Priority**: Critical
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #5

**Description**:
Copy all markdown files from Next.js project to Astro content collections.

**Acceptance Criteria**:
- [ ] All 8 blog posts migrated to `src/content/blog/`
- [ ] All 5 talks migrated to `src/content/talks/`
- [ ] 1 project migrated to `src/content/projects/`
- [ ] Frontmatter validated against schemas (no errors)
- [ ] Content queries work in Astro pages
- [ ] Files renamed to use slug-based naming

**Implementation Steps**:
1. Copy blog posts from old project:
   ```bash
   # From old project
   cp posts/*.md <new-project>/src/content/blog/
   ```

2. Rename files to slug format (lowercase, hyphens):
   - Example: `Component_Testing.md` → `component-testing.md`

3. Copy talks:
   ```bash
   cp talks/*.md <new-project>/src/content/talks/
   ```

4. Copy projects:
   ```bash
   cp projects/*.md <new-project>/src/content/projects/
   ```

5. Verify frontmatter matches schemas (run `npm run dev` and check for errors)

6. Create test page to verify content queries:
   ```astro
   ---
   // src/pages/test-content.astro
   import { getCollection } from 'astro:content';
   const posts = await getCollection('blog');
   const talks = await getCollection('talks');
   const projects = await getCollection('projects');
   ---
   <html>
     <body>
       <h1>Blog Posts: {posts.length}</h1>
       <h1>Talks: {talks.length}</h1>
       <h1>Projects: {projects.length}</h1>
     </body>
   </html>
   ```

7. Visit `/test-content` and verify counts (8, 5, 1)

8. Delete test page after verification

**Files to Migrate** (from old project):
- `/posts/*.md` → `src/content/blog/`
- `/talks/*.md` → `src/content/talks/`
- `/projects/*.md` → `src/content/projects/`

---

### 🧩 PHASE 3: Component Migration

---

#### Ticket #7: Create Base Layout Component
**Priority**: Critical
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #2, #4

**Description**:
Create root layout component that wraps all pages with fonts, styles, and metadata.

**Acceptance Criteria**:
- [ ] `src/layouts/BaseLayout.astro` created
- [ ] Fonts and global styles imported
- [ ] HTML structure includes proper meta tags
- [ ] Props for page title and description
- [ ] Background color applied (cream)
- [ ] Test page renders with layout

**Implementation Steps**:
1. Create `src/layouts/BaseLayout.astro`:
   ```astro
   ---
   import '@/styles/globals.css';

   interface Props {
     title: string;
     description?: string;
   }

   const { title, description } = Astro.props;
   const pageTitle = `${title} | Theo Harris`;
   const defaultDescription = "Full stack developer and technical consultant based in Sydney, NSW";
   ---

   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta name="description" content={description || defaultDescription} />
       <meta name="generator" content={Astro.generator} />
       <title>{pageTitle}</title>

       <!-- Favicon -->
       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
     </head>
     <body class="bg-cream min-h-screen">
       <slot />
     </body>
   </html>
   ```

2. Test layout by updating `src/pages/index.astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   ---

   <BaseLayout title="Home">
     <h1 class="text-4xl font-bold text-pink">Test Layout</h1>
   </BaseLayout>
   ```

3. Verify in browser:
   - Background is cream color
   - Fonts load correctly
   - Page title appears in tab

**Reference**:
- [Astro Layouts](https://docs.astro.build/en/basics/layouts/)

---

#### Ticket #8: Migrate Static Components (Pill, Footer)
**Priority**: High
**Estimated Time**: 45-60 minutes
**Dependencies**: Ticket #7

**Description**:
Convert simple, static React components to Astro components (no client-side JS needed).

**Acceptance Criteria**:
- [ ] `Pill.astro` created and working
- [ ] `PageFooter.astro` created and working
- [ ] Components render correctly with Tailwind styles
- [ ] TypeScript interfaces defined for props
- [ ] No JavaScript shipped for these components

**Implementation Steps**:
1. Create `src/components/Pill.astro`:
   ```astro
   ---
   interface Props {
     text: string;
   }

   const { text } = Astro.props;
   ---

   <span class="bg-cream px-3 py-1 rounded-full text-sm font-medium border-2 border-black">
     {text}
   </span>
   ```

2. Create `src/components/PageFooter.astro`:
   ```astro
   ---
   // Copy JSX structure from old PageFooter.tsx
   // Replace react-social-icons with simple SVG icons or link elements
   ---

   <footer class="w-full bg-black text-white p-6 mt-auto">
     <div class="flex justify-center gap-6">
       <!-- Social links -->
       <a href="https://github.com/yourusername"
          class="hover:text-pink transition-colors"
          aria-label="GitHub">
         <!-- SVG icon or text -->
       </a>
       <!-- Add other social links -->
     </div>
   </footer>
   ```

3. Test by importing into a test page:
   ```astro
   ---
   import Pill from '@/components/Pill.astro';
   import PageFooter from '@/components/PageFooter.astro';
   ---

   <div>
     <Pill text="TypeScript" />
     <Pill text="React" />
   </div>
   <PageFooter />
   ```

4. Verify styles match original components

**Files to Reference** (from old project):
- `src/components/Pill.tsx`
- `src/components/PageFooter.tsx`

**Note**: For social icons, consider using simple SVG icons instead of react-social-icons library to keep bundle size small.

---

#### Ticket #9: Migrate Preview Components (Post, Talk, Project)
**Priority**: High
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #8

**Description**:
Convert preview card components to Astro components with proper TypeScript types.

**Acceptance Criteria**:
- [ ] `PostPreview.astro` created
- [ ] `TalkPreview.astro` created
- [ ] `ProjectPreview.astro` created
- [ ] All use Pill component for tags
- [ ] Links work correctly with Astro routing
- [ ] Styles preserved from Next.js version

**Implementation Steps**:
1. Create `src/components/PostPreview.astro`:
   ```astro
   ---
   import type { CollectionEntry } from 'astro:content';
   import Pill from './Pill.astro';

   interface Props {
     post: CollectionEntry<'blog'>;
   }

   const { post } = Astro.props;
   const { title, description, date } = post.data;
   ---

   <article class="bg-white border-4 border-black rounded-md p-6 hover:shadow-lg transition-shadow">
     <a href={`/blog/${post.slug}`}>
       <h3 class="text-2xl font-bold mb-2">{title}</h3>
       <p class="text-gray-600 text-sm mb-3">{date}</p>
       <p class="mb-4">{description}</p>
     </a>
   </article>
   ```

2. Create `src/components/TalkPreview.astro` (similar structure)

3. Create `src/components/ProjectPreview.astro` (similar structure)

4. Test with sample data from content collections

**Files to Reference** (from old project):
- `src/components/PostPreview.tsx`
- `src/components/TalkPreview.tsx`
- `src/components/ProjectPreview.tsx`

---

#### Ticket #10: Create Mobile Menu with Vanilla JavaScript
**Priority**: High
**Estimated Time**: 90-120 minutes
**Dependencies**: Ticket #7

**Description**:
Build mobile navigation menu from scratch using vanilla JavaScript for interactivity.

**Acceptance Criteria**:
- [ ] Hamburger button toggles menu open/close
- [ ] Menu slides in from right on mobile
- [ ] Body scroll locked when menu open
- [ ] Clicking outside menu closes it
- [ ] Escape key closes menu
- [ ] Focus trapped within menu when open
- [ ] ARIA attributes for accessibility
- [ ] Smooth animations
- [ ] Works on all mobile devices

**Implementation Steps**:
1. Create `src/components/MobileMenu.astro`:
   ```astro
   ---
   // No props needed for navigation
   ---

   <!-- Hamburger Button -->
   <button
     id="menu-toggle"
     class="lg:hidden fixed top-4 right-4 z-50 p-2"
     aria-label="Toggle menu"
     aria-expanded="false"
     aria-controls="mobile-menu"
   >
     <div class="w-6 h-0.5 bg-black mb-1.5 transition-transform" id="line1"></div>
     <div class="w-6 h-0.5 bg-black mb-1.5 transition-opacity" id="line2"></div>
     <div class="w-6 h-0.5 bg-black transition-transform" id="line3"></div>
   </button>

   <!-- Menu Overlay -->
   <div
     id="mobile-menu"
     class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"
     aria-hidden="true"
   >
     <!-- Menu Panel -->
     <nav
       class="fixed right-0 top-0 h-full w-64 bg-cream border-l-4 border-black p-6 transform translate-x-full transition-transform duration-300"
       id="menu-panel"
     >
       <ul class="space-y-4 mt-16">
         <li><a href="/" class="text-2xl font-bold hover:text-pink">Home</a></li>
         <li><a href="/blog" class="text-2xl font-bold hover:text-blue">Blog</a></li>
         <li><a href="/talks" class="text-2xl font-bold hover:text-orange">Talks</a></li>
         <li><a href="/projects" class="text-2xl font-bold hover:text-purple">Projects</a></li>
       </ul>
     </nav>
   </div>

   <script>
     const toggle = document.getElementById('menu-toggle');
     const menu = document.getElementById('mobile-menu');
     const panel = document.getElementById('menu-panel');
     const line1 = document.getElementById('line1');
     const line2 = document.getElementById('line2');
     const line3 = document.getElementById('line3');

     let isOpen = false;

     function openMenu() {
       isOpen = true;
       menu.classList.remove('hidden');
       panel.classList.remove('translate-x-full');
       toggle.setAttribute('aria-expanded', 'true');
       menu.setAttribute('aria-hidden', 'false');
       document.body.style.overflow = 'hidden';

       // Animate hamburger to X
       line1.style.transform = 'rotate(45deg) translateY(8px)';
       line2.style.opacity = '0';
       line3.style.transform = 'rotate(-45deg) translateY(-8px)';
     }

     function closeMenu() {
       isOpen = false;
       panel.classList.add('translate-x-full');
       toggle.setAttribute('aria-expanded', 'false');
       menu.setAttribute('aria-hidden', 'true');
       document.body.style.overflow = '';

       // Reset hamburger
       line1.style.transform = '';
       line2.style.opacity = '';
       line3.style.transform = '';

       // Remove overlay after animation
       setTimeout(() => {
         if (!isOpen) menu.classList.add('hidden');
       }, 300);
     }

     // Toggle on button click
     toggle.addEventListener('click', () => {
       isOpen ? closeMenu() : openMenu();
     });

     // Close on overlay click
     menu.addEventListener('click', (e) => {
       if (e.target === menu) closeMenu();
     });

     // Close on escape key
     document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape' && isOpen) closeMenu();
     });

     // Close menu on navigation
     document.querySelectorAll('#menu-panel a').forEach(link => {
       link.addEventListener('click', closeMenu);
     });
   </script>
   ```

2. Test on mobile viewport (Chrome DevTools)
   - Menu opens/closes smoothly
   - Hamburger animates to X
   - Body scroll locks
   - All interactions work

3. Test accessibility:
   - Tab navigation works
   - Screen reader announces menu state
   - ARIA attributes update correctly

**Testing Checklist**:
- [ ] Desktop: Menu hidden, no button visible
- [ ] Mobile: Hamburger button visible
- [ ] Click to open: Menu slides in
- [ ] Click outside: Menu closes
- [ ] Press Escape: Menu closes
- [ ] Click link: Menu closes and navigates
- [ ] Body scroll locked when open

---

#### Ticket #11: Create Desktop Navigation Header
**Priority**: High
**Estimated Time**: 45-60 minutes
**Dependencies**: Ticket #10

**Description**:
Create desktop navigation header (visible on lg+ screens) as static component.

**Acceptance Criteria**:
- [ ] `PageHeader.astro` created
- [ ] Desktop navigation visible on large screens
- [ ] Mobile menu visible on small screens
- [ ] Links styled consistently with brand colors
- [ ] Active page indicator (optional enhancement)
- [ ] Responsive breakpoints match Tailwind

**Implementation Steps**:
1. Create `src/components/PageHeader.astro`:
   ```astro
   ---
   import MobileMenu from './MobileMenu.astro';

   const currentPath = Astro.url.pathname;
   ---

   <header class="w-full py-6 px-4 lg:px-24">
     <!-- Desktop Navigation -->
     <nav class="hidden lg:flex justify-between items-center">
       <a href="/" class="text-3xl font-bold font-climate-crisis text-pink">
         Theo Harris
       </a>
       <ul class="flex gap-8">
         <li>
           <a
             href="/"
             class:list={[
               "text-xl font-bold hover:text-pink transition-colors",
               { "text-pink": currentPath === "/" }
             ]}
           >
             Home
           </a>
         </li>
         <li>
           <a
             href="/blog"
             class:list={[
               "text-xl font-bold hover:text-blue transition-colors",
               { "text-blue": currentPath.startsWith("/blog") }
             ]}
           >
             Blog
           </a>
         </li>
         <li>
           <a
             href="/talks"
             class:list={[
               "text-xl font-bold hover:text-orange transition-colors",
               { "text-orange": currentPath.startsWith("/talks") }
             ]}
           >
             Talks
           </a>
         </li>
         <li>
           <a
             href="/projects"
             class:list={[
               "text-xl font-bold hover:text-purple transition-colors",
               { "text-purple": currentPath.startsWith("/projects") }
             ]}
           >
             Projects
           </a>
         </li>
       </ul>
     </nav>

     <!-- Mobile Navigation -->
     <div class="lg:hidden">
       <MobileMenu />
     </div>
   </header>
   ```

2. Update `BaseLayout.astro` to include header:
   ```astro
   <body class="bg-cream min-h-screen">
     <PageHeader />
     <slot />
     <PageFooter />
   </body>
   ```

3. Test at different breakpoints (mobile, tablet, desktop)

4. Verify active page highlighting works

---

#### Ticket #12: Migrate TechStack Carousel Component
**Priority**: High
**Estimated Time**: 90-120 minutes
**Dependencies**: Ticket #8

**Description**:
Convert TechStack Swiper carousel to Astro component with client-side hydration.

**Acceptance Criteria**:
- [ ] `TechStack.astro` created
- [ ] Swiper JS loaded client-side only
- [ ] Carousel auto-plays and loops
- [ ] All 10 tech icons display correctly
- [ ] Responsive breakpoints for slides per view
- [ ] No hydration issues or console errors
- [ ] CSS styles preserved

**Implementation Steps**:
1. Install Swiper (if not already done):
   ```bash
   npm install swiper
   ```

2. Create `src/components/TechStack.astro`:
   ```astro
   ---
   // No server-side logic needed
   ---

   <section class="py-8">
     <div class="swiper tech-stack-swiper">
       <div class="swiper-wrapper">
         <!-- Slide 1 -->
         <div class="swiper-slide flex justify-center items-center">
           <img
             src="/images/tech_icons/javascript.svg"
             alt="JavaScript"
             width="80"
             height="80"
             loading="lazy"
           />
         </div>
         <!-- Slide 2 -->
         <div class="swiper-slide flex justify-center items-center">
           <img
             src="/images/tech_icons/typescript.svg"
             alt="TypeScript"
             width="80"
             height="80"
             loading="lazy"
           />
         </div>
         <!-- Add remaining 8 slides: react, nextjs, html, css, tailwind, elixir, phoenix, postgresql -->
       </div>
     </div>
   </section>

   <script>
     import Swiper from 'swiper';
     import { Autoplay } from 'swiper/modules';
     import 'swiper/css';

     // Wait for DOM to be ready
     document.addEventListener('DOMContentLoaded', () => {
       new Swiper('.tech-stack-swiper', {
         modules: [Autoplay],
         slidesPerView: 3,
         spaceBetween: 20,
         loop: true,
         autoplay: {
           delay: 2000,
           disableOnInteraction: false,
         },
         breakpoints: {
           640: { slidesPerView: 4 },
           768: { slidesPerView: 5 },
           1024: { slidesPerView: 7 },
           1280: { slidesPerView: 10 },
         },
       });
     });
   </script>

   <style>
     .swiper {
       width: 100%;
       height: 150px;
     }

     .swiper-slide {
       display: flex;
       justify-content: center;
       align-items: center;
     }
   </style>
   ```

3. Copy Swiper-related styles from `globals.css` (if any custom styles exist)

4. Test carousel:
   - Auto-plays on page load
   - Loops infinitely
   - Responsive breakpoints work
   - No console errors

**Files to Reference** (from old project):
- `src/components/TechStack.tsx`
- `src/app/globals.css` (Swiper styles)

**Note**: The `<script>` tag in Astro will be bundled and sent to the client. No need for `client:load` directive since it's already in a `.astro` file.

---

### 📄 PHASE 4: Page Migration

---

#### Ticket #13: Migrate Home Page
**Priority**: Critical
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #7, #11, #12

**Description**:
Convert Next.js home page to Astro, including hero images, bio sections, work history, and tech stack.

**Acceptance Criteria**:
- [ ] `src/pages/index.astro` recreated
- [ ] Hero images display (mobile + desktop variants)
- [ ] Bio sections with colored backgrounds
- [ ] Work experience cards
- [ ] TechStack carousel integrated
- [ ] All styles match original
- [ ] Images optimized with Astro Image component

**Implementation Steps**:
1. Create `src/pages/index.astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import { Image } from 'astro:assets';
   import TechStack from '@/components/TechStack.astro';
   import Pill from '@/components/Pill.astro';

   // Import hero images
   import headerMobile from '@/assets/images/Header.png';
   import headerDesktop from '@/assets/images/HeaderDesktop.png';
   ---

   <BaseLayout title="Home">
     <main class="flex flex-col pt-4 bg-cream min-h-screen lg:px-24">
       <!-- Hero Section -->
       <section>
         <h1 class="sr-only">
           'Sup, I'm Theo, a web developer based out of Sydney, NSW.
         </h1>

         <!-- Mobile Image -->
         <div class="lg:hidden">
           <Image
             src={headerMobile}
             alt="'Sup, I'm Theo, a web developer based out of Sydney, NSW."
             loading="eager"
             class="w-full"
           />
         </div>

         <!-- Desktop Image -->
         <div class="hidden lg:block">
           <Image
             src={headerDesktop}
             alt="'Sup, I'm Theo, and I work as a web developer based in Sydney"
             loading="eager"
             class="w-full"
           />
         </div>
       </section>

       <!-- Bio Sections -->
       <section class="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-x-4 lg:space-y-0 p-4 lg:items-stretch">
         <div class="bg-blue p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
           <p class="font-kanit font-bold lg:font-semibold md:text-xl lg:text-2xl xl:text-4xl">
             I've been a full stack developer and technical consultant for 3+
             years, and I have a passion for the web as a storytelling medium.
           </p>
         </div>
         <div class="bg-pink p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
           <p class="font-kanit font-bold lg:font-semibold md:text-xl lg:text-2xl xl:text-4xl">
             I care deeply about equal access to the web for everyone, and work
             hard to create digital experiences that are both accessible and
             enjoyable.
           </p>
         </div>
       </section>

       <!-- Tech Stack Section -->
       <section>
         <div class="flex items-center w-full">
           <h2 class="font-climate-crisis text-orange uppercase font-bold text-4xl md:text-6xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet tracking-wider">
             Stack
           </h2>
           <hr class="border md:border-2 border-black w-full" />
         </div>
         <TechStack />
       </section>

       <!-- Work Experience Section -->
       <section>
         <div class="flex items-center w-full">
           <h2 class="font-climate-crisis text-blue uppercase font-bold text-4xl md:text-6xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet tracking-wider">
             Work
           </h2>
           <hr class="border md:border-2 border-black w-full" />
         </div>
         <div class="m-4 mt-0 flex flex-col xl:flex-row gap-4">
           <!-- Job 1: Alembic -->
           <div class="bg-purple p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
             <h3 class="text-2xl font-bold uppercase italic">
               Full Stack Developer
             </h3>
             <p class="font-bold italic">@ Alembic, 2022 - Present</p>
             <p class="font-medium">
               Developed several rapid prototypes in small, agile teams for
               greenfield projects across several different business domains,
               including education, natural resources, and automotive services.
             </p>
             <div class="flex flex-wrap gap-1.5 mt-2">
               <Pill text="JavaScript" />
               <Pill text="React" />
               <Pill text="Elixir" />
               <Pill text="Phoenix" />
               <Pill text="LiveView" />
               <Pill text="Tailwind" />
               <Pill text="Ash" />
             </div>
           </div>

           <!-- Job 2: Engage Squared -->
           <div class="bg-pink p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
             <h3 class="text-2xl font-bold uppercase italic">
               M365 Developer
             </h3>
             <p class="font-bold italic">@ Engage Squared, 2021 - 2022</p>
             <p class="font-medium">
               Worked in project teams alongside consultants to deliver solutions
               across various Microsoft ecosystem platforms, including
               SharePoint, MS Teams and Power Automate Flow.
             </p>
             <div class="flex flex-wrap gap-1.5 mt-2">
               <Pill text="JavaScript" />
               <Pill text="React" />
               <Pill text="SPFx" />
               <Pill text="Power Automate" />
             </div>
           </div>

           <!-- Job 3: RedHill Education -->
           <div class="bg-orange p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
             <h3 class="text-2xl font-bold uppercase italic">
               Web Developer
             </h3>
             <p class="font-bold italic">
               @ RedHill Education, JUL - AUG 2021
             </p>
             <p class="font-medium">
               Over the course of 3 weeks, rebuilt the existing staff intranet
               using Google Pages. Delivered technical documentation to ensure
               smooth handover of the implemented solution to the internal staff
               at RedHill after my contract was completed.
             </p>
             <div class="flex flex-wrap gap-1.5 mt-2">
               <Pill text="HTML" />
               <Pill text="CSS" />
               <Pill text="Google Pages" />
             </div>
           </div>
         </div>
       </section>
     </main>
   </BaseLayout>
   ```

2. Move images from `public/images/` to `src/assets/images/` for Astro optimization

3. Test page at all breakpoints

4. Run Lighthouse audit and compare to Next.js version

**Files to Reference** (from old project):
- `src/app/page.tsx`

---

#### Ticket #14: Migrate Blog Pages
**Priority**: Critical
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #6, #9

**Description**:
Create blog index page and dynamic blog post pages using Content Collections.

**Acceptance Criteria**:
- [ ] `src/pages/blog/index.astro` shows all posts
- [ ] Posts sorted by date (newest first)
- [ ] `src/pages/blog/[slug].astro` renders individual posts
- [ ] Post content renders as HTML from markdown
- [ ] Hero images display on post pages
- [ ] Typography styles applied (prose classes)
- [ ] All 8 blog posts accessible

**Implementation Steps**:
1. Create `src/pages/blog/index.astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import PostPreview from '@/components/PostPreview.astro';
   import { getCollection } from 'astro:content';

   const posts = (await getCollection('blog')).sort((a, b) => {
     return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
   });
   ---

   <BaseLayout title="Blog" description="Articles about web development and technology">
     <main class="min-h-screen px-4 lg:px-24 py-8">
       <h1 class="font-climate-crisis text-pink text-6xl md:text-8xl uppercase mb-8 text-outline-mobile md:text-outline-tablet">
         Blog
       </h1>

       <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {posts.map(post => (
           <PostPreview post={post} />
         ))}
       </div>
     </main>
   </BaseLayout>
   ```

2. Create `src/pages/blog/[slug].astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import { getCollection } from 'astro:content';
   import type { GetStaticPaths } from 'astro';

   export const getStaticPaths = (async () => {
     const posts = await getCollection('blog');
     return posts.map(post => ({
       params: { slug: post.slug },
       props: { post },
     }));
   }) satisfies GetStaticPaths;

   const { post } = Astro.props;
   const { Content } = await post.render();
   const { title, description, date, imageUrl } = post.data;
   ---

   <BaseLayout title={title} description={description}>
     <main class="min-h-screen">
       <!-- Hero Image -->
       <div class="w-full h-64 md:h-96 overflow-hidden">
         <img
           src={imageUrl}
           alt={title}
           class="w-full h-full object-cover"
         />
       </div>

       <!-- Post Content -->
       <article class="max-w-4xl mx-auto px-4 lg:px-8 py-12">
         <header class="mb-8">
           <h1 class="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
           <time class="text-gray-600">{date}</time>
         </header>

         <div class="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue hover:prose-a:text-pink">
           <Content />
         </div>

         <!-- Back to blog link -->
         <div class="mt-12">
           <a href="/blog" class="text-pink hover:text-blue font-bold">
             ← Back to Blog
           </a>
         </div>
       </article>
     </main>
   </BaseLayout>
   ```

3. Test all blog pages load correctly

4. Verify markdown rendering (headings, links, lists, code blocks)

5. Test external image loading (Unsplash URLs)

**Files to Reference** (from old project):
- `src/app/blog/page.tsx`
- `src/app/blog/posts/[slug]/page.tsx`

---

#### Ticket #15: Migrate Talks Pages
**Priority**: High
**Estimated Time**: 45-60 minutes
**Dependencies**: Ticket #6, #9

**Description**:
Create talks index page and dynamic talk detail pages, similar to blog structure.

**Acceptance Criteria**:
- [ ] `src/pages/talks/index.astro` shows all talks
- [ ] Talks sorted by date (newest first)
- [ ] `src/pages/talks/[slug].astro` renders individual talks
- [ ] YouTube videos embedded correctly
- [ ] All 5 talks accessible

**Implementation Steps**:
1. Create `src/pages/talks/index.astro` (similar to blog index):
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import TalkPreview from '@/components/TalkPreview.astro';
   import { getCollection } from 'astro:content';

   const talks = (await getCollection('talks')).sort((a, b) => {
     return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
   });
   ---

   <BaseLayout title="Talks" description="Conference talks and presentations">
     <main class="min-h-screen px-4 lg:px-24 py-8">
       <h1 class="font-climate-crisis text-orange text-6xl md:text-8xl uppercase mb-8 text-outline-mobile md:text-outline-tablet">
         Talks
       </h1>

       <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {talks.map(talk => (
           <TalkPreview talk={talk} />
         ))}
       </div>
     </main>
   </BaseLayout>
   ```

2. Create `src/pages/talks/[slug].astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import { getCollection } from 'astro:content';
   import type { GetStaticPaths } from 'astro';

   export const getStaticPaths = (async () => {
     const talks = await getCollection('talks');
     return talks.map(talk => ({
       params: { slug: talk.slug },
       props: { talk },
     }));
   }) satisfies GetStaticPaths;

   const { talk } = Astro.props;
   const { Content } = await talk.render();
   const { title, description, date, videoUrl } = talk.data;
   ---

   <BaseLayout title={title} description={description}>
     <main class="min-h-screen px-4 lg:px-24 py-12">
       <article class="max-w-4xl mx-auto">
         <header class="mb-8">
           <h1 class="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
           <time class="text-gray-600">{date}</time>
         </header>

         <!-- Video Embed -->
         <div class="aspect-video mb-8">
           <iframe
             src={videoUrl}
             title={title}
             class="w-full h-full border-4 border-black rounded"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
           ></iframe>
         </div>

         <div class="prose prose-lg max-w-none">
           <Content />
         </div>

         <div class="mt-12">
           <a href="/talks" class="text-orange hover:text-blue font-bold">
             ← Back to Talks
           </a>
         </div>
       </article>
     </main>
   </BaseLayout>
   ```

3. Test all talk pages and video embeds

**Files to Reference** (from old project):
- `src/app/talks/page.tsx`
- `src/app/talks/talks/[slug]/page.tsx`

---

#### Ticket #16: Migrate Projects Page
**Priority**: Medium
**Estimated Time**: 30-45 minutes
**Dependencies**: Ticket #6, #9

**Description**:
Create projects page to display portfolio projects (currently only 1 project).

**Acceptance Criteria**:
- [ ] `src/pages/projects/index.astro` created
- [ ] Project cards display with images
- [ ] Links to GitHub and live demo work
- [ ] Expandable to add more projects in future

**Implementation Steps**:
1. Create `src/pages/projects/index.astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import ProjectPreview from '@/components/ProjectPreview.astro';
   import { getCollection } from 'astro:content';

   const projects = await getCollection('projects');
   ---

   <BaseLayout title="Projects" description="Portfolio of web development projects">
     <main class="min-h-screen px-4 lg:px-24 py-8">
       <h1 class="font-climate-crisis text-purple text-6xl md:text-8xl uppercase mb-8 text-outline-mobile md:text-outline-tablet">
         Projects
       </h1>

       <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {projects.map(project => (
           <ProjectPreview project={project} />
         ))}
       </div>

       <!-- Note about adding more projects -->
       {projects.length === 0 && (
         <p class="text-center text-gray-600 mt-12">
           More projects coming soon!
         </p>
       )}
     </main>
   </BaseLayout>
   ```

2. Verify project image loads from `/public/images/`

3. Test GitHub and live demo links

**Files to Reference** (from old project):
- `src/app/projects/page.tsx`

---

### 🎨 PHASE 5: Assets & Optimization

---

#### Ticket #17: Optimize and Migrate Images
**Priority**: High
**Estimated Time**: 60-90 minutes
**Dependencies**: Ticket #13

**Description**:
Move images to appropriate directories and optimize with Astro's Image component.

**Acceptance Criteria**:
- [ ] Hero images moved to `src/assets/images/`
- [ ] Tech icons remain in `public/images/tech_icons/`
- [ ] Project images optimized
- [ ] Image formats converted (WebP/AVIF support)
- [ ] Responsive image sizes generated
- [ ] Lazy loading configured correctly
- [ ] All images display without errors

**Implementation Steps**:
1. Create directory structure:
   ```bash
   mkdir -p src/assets/images
   ```

2. Move hero images for optimization:
   ```bash
   mv public/images/Header.png src/assets/images/
   mv public/images/HeaderDesktop.png src/assets/images/
   mv public/images/taskly.png src/assets/images/
   ```

3. Keep tech icons in `public/` (SVGs don't need optimization)

4. Update image imports in components:
   ```astro
   ---
   import { Image } from 'astro:assets';
   import heroMobile from '@/assets/images/Header.png';
   ---

   <Image
     src={heroMobile}
     alt="Hero image"
     widths={[640, 750, 828, 1080, 1200]}
     formats={['avif', 'webp', 'png']}
     loading="eager"
   />
   ```

5. Configure image optimization in `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     image: {
       domains: ['images.unsplash.com'], // Allow external blog post images
     },
   });
   ```

6. Test all images on different devices and network speeds

7. Run Lighthouse to verify image optimization scores

**Files to Move**:
- `public/images/Header.png` → `src/assets/images/`
- `public/images/HeaderDesktop.png` → `src/assets/images/`
- `public/images/taskly.png` → `src/assets/images/`

**Keep in Public**:
- `public/images/tech_icons/*.svg` (no optimization needed for SVGs)

---

#### Ticket #18: Configure Build Settings and Performance
**Priority**: Medium
**Estimated Time**: 45-60 minutes
**Dependencies**: All previous tickets

**Description**:
Optimize Astro build configuration for best performance and SEO.

**Acceptance Criteria**:
- [ ] Build completes successfully with no errors
- [ ] Sitemap generated automatically
- [ ] RSS feed for blog (optional)
- [ ] Compression enabled
- [ ] Prefetch enabled for internal links
- [ ] Build output analyzed for size

**Implementation Steps**:
1. Install integrations:
   ```bash
   npx astro add sitemap
   ```

2. Update `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import react from '@astrojs/react';
   import sitemap from '@astrojs/sitemap';

   export default defineConfig({
     site: 'https://yourdomain.com', // Update with actual domain
     integrations: [
       react(),
       sitemap(),
     ],
     image: {
       domains: ['images.unsplash.com'],
     },
     compressHTML: true,
     build: {
       inlineStylesheets: 'auto',
     },
     prefetch: {
       defaultStrategy: 'hover',
       prefetchAll: true,
     },
   });
   ```

3. Create `public/robots.txt`:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://yourdomain.com/sitemap-index.xml
   ```

4. Run production build:
   ```bash
   npm run build
   ```

5. Analyze build output:
   ```bash
   npm run preview
   ```

6. Check build size in `dist/` folder

7. Optional: Add RSS feed for blog
   ```bash
   npx astro add rss
   ```

**Performance Checklist**:
- [ ] Build completes in under 30 seconds
- [ ] Total bundle size < 500KB
- [ ] JavaScript bundles < 100KB (only Swiper)
- [ ] CSS optimized and purged
- [ ] Sitemap accessible at `/sitemap-index.xml`

---

#### Ticket #19: Add Favicon and Meta Tags
**Priority**: Low
**Estimated Time**: 30 minutes
**Dependencies**: Ticket #7

**Description**:
Add favicon and improve meta tags for social sharing (Open Graph, Twitter Cards).

**Acceptance Criteria**:
- [ ] Favicon displays in browser tab
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card meta tags
- [ ] Apple touch icon for iOS
- [ ] Theme color for mobile browsers

**Implementation Steps**:
1. Generate favicons (use existing or create new):
   - Use [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Place in `public/` directory

2. Update `src/layouts/BaseLayout.astro`:
   ```astro
   ---
   interface Props {
     title: string;
     description?: string;
     image?: string;
   }

   const { title, description, image } = Astro.props;
   const pageTitle = `${title} | Theo Harris`;
   const defaultDescription = "Full stack developer and technical consultant based in Sydney, NSW";
   const ogImage = image || '/og-image.png';
   const canonicalURL = new URL(Astro.url.pathname, Astro.site);
   ---

   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta name="description" content={description || defaultDescription} />
     <meta name="generator" content={Astro.generator} />

     <!-- Canonical URL -->
     <link rel="canonical" href={canonicalURL} />

     <!-- Favicons -->
     <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

     <!-- Theme Color -->
     <meta name="theme-color" content="#F0EAD6" />

     <!-- Open Graph -->
     <meta property="og:type" content="website" />
     <meta property="og:url" content={canonicalURL} />
     <meta property="og:title" content={pageTitle} />
     <meta property="og:description" content={description || defaultDescription} />
     <meta property="og:image" content={new URL(ogImage, Astro.site)} />

     <!-- Twitter Card -->
     <meta name="twitter:card" content="summary_large_image" />
     <meta name="twitter:url" content={canonicalURL} />
     <meta name="twitter:title" content={pageTitle} />
     <meta name="twitter:description" content={description || defaultDescription} />
     <meta name="twitter:image" content={new URL(ogImage, Astro.site)} />

     <title>{pageTitle}</title>
   </head>
   ```

3. Create Open Graph image (`public/og-image.png`):
   - 1200x630px recommended size
   - Feature your name and role

4. Test meta tags with:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

### 🚀 PHASE 6: Testing & Deployment

---

#### Ticket #20: Comprehensive Testing
**Priority**: Critical
**Estimated Time**: 90-120 minutes
**Dependencies**: All previous tickets

**Description**:
Thoroughly test all pages, features, and interactions across devices and browsers.

**Acceptance Criteria**:
- [ ] All pages load without errors
- [ ] Mobile menu works on all mobile devices
- [ ] Swiper carousel functions correctly
- [ ] All links work (internal and external)
- [ ] Images load and are optimized
- [ ] Typography renders correctly
- [ ] Responsive design works at all breakpoints
- [ ] Accessibility requirements met (WCAG 2.1 AA)
- [ ] Performance scores acceptable (Lighthouse)

**Testing Checklist**:

**Functionality Testing**:
- [ ] **Home Page**
  - [ ] Hero images display (mobile/desktop)
  - [ ] Bio sections render correctly
  - [ ] Tech stack carousel auto-plays
  - [ ] Work experience cards display
- [ ] **Blog**
  - [ ] Blog index shows all 8 posts
  - [ ] Posts sorted by date (newest first)
  - [ ] Individual post pages load
  - [ ] Markdown renders correctly
  - [ ] External images (Unsplash) load
  - [ ] "Back to Blog" link works
- [ ] **Talks**
  - [ ] Talks index shows all 5 talks
  - [ ] Individual talk pages load
  - [ ] YouTube videos embed correctly
  - [ ] "Back to Talks" link works
- [ ] **Projects**
  - [ ] Projects page displays
  - [ ] Project cards render
  - [ ] GitHub/live links work
- [ ] **Navigation**
  - [ ] Desktop nav visible on lg+ screens
  - [ ] Mobile menu button visible on mobile
  - [ ] Mobile menu opens/closes smoothly
  - [ ] Menu closes on link click
  - [ ] Menu closes on escape key
  - [ ] Menu closes on outside click
  - [ ] Active page highlighted
- [ ] **Footer**
  - [ ] Social icons display
  - [ ] Social links work

**Responsive Testing** (Chrome DevTools):
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1440px)
- [ ] Large Desktop (1920px)

**Browser Testing**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Accessibility Testing**:
- [ ] Tab navigation works throughout site
- [ ] Focus indicators visible
- [ ] ARIA labels present and correct
- [ ] Images have alt text
- [ ] Headings hierarchy correct (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- [ ] Screen reader testing (VoiceOver/NVDA)

**Performance Testing** (Lighthouse):
- [ ] Run audit on Home page
- [ ] Run audit on Blog index
- [ ] Run audit on individual blog post
- [ ] Performance score > 90
- [ ] Accessibility score = 100
- [ ] Best Practices score > 90
- [ ] SEO score = 100

**Performance Benchmarks**:
```
Expected Lighthouse Scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

Expected Metrics:
- First Contentful Paint: < 1.0s
- Largest Contentful Paint: < 2.0s
- Total Blocking Time: < 100ms
- Cumulative Layout Shift: < 0.1
- Speed Index: < 2.0s
```

**Tools**:
- Chrome DevTools (Lighthouse, Network, Performance)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebAIM WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

**Bug Tracking**:
Create GitHub issues for any bugs found during testing with:
- Description of issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots
- Device/browser information

---

#### Ticket #21: Deploy to Netlify
**Priority**: Critical
**Estimated Time**: 45-60 minutes
**Dependencies**: Ticket #20

**Description**:
Deploy new Astro site to Netlify and configure automatic deployments from main branch.

**Acceptance Criteria**:
- [ ] New Netlify site created
- [ ] GitHub repository connected
- [ ] Build settings configured correctly
- [ ] Automatic deployments enabled
- [ ] Custom domain connected (if applicable)
- [ ] HTTPS enabled
- [ ] Redirects configured (if needed)
- [ ] Environment variables set (if any)

**Implementation Steps**:
1. **Prepare Repository**:
   - Ensure all code committed and pushed to GitHub
   - Verify `package.json` has correct build script:
     ```json
     {
       "scripts": {
         "build": "astro build",
         "preview": "astro preview"
       }
     }
     ```

2. **Create New Netlify Site**:
   - Log into [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your new repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: 18 or higher (set in `netlify.toml`)

3. **Create `netlify.toml`** in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/*"
     to = "/404"
     status = 404

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
   ```

4. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete (should take 1-3 minutes)
   - Check deploy log for errors

5. **Verify Deployment**:
   - Visit the generated Netlify URL
   - Test all pages and features
   - Run Lighthouse audit on live site
   - Check sitemap: `https://your-site.netlify.app/sitemap-index.xml`
   - Verify robots.txt: `https://your-site.netlify.app/robots.txt`

6. **Configure Custom Domain** (if applicable):
   - Netlify Dashboard → Domain settings → Add custom domain
   - Follow DNS configuration instructions
   - Wait for DNS propagation (can take up to 48 hours)
   - Netlify will automatically provision SSL certificate

7. **Set Up Automatic Deployments**:
   - By default, Netlify deploys on every push to main branch
   - Verify in Netlify Dashboard → Site settings → Build & deploy
   - Consider setting up deploy previews for PRs

8. **Clean Up Old Site** (after confirming new site works):
   - Update DNS to point to new Netlify site
   - Archive or delete old Next.js Netlify site (don't delete until DNS propagated!)

**Post-Deployment Checklist**:
- [ ] All pages accessible at new URL
- [ ] Forms work (if any)
- [ ] Analytics working (if configured)
- [ ] Monitoring set up (Netlify Analytics or Google Analytics)
- [ ] Custom domain DNS propagated
- [ ] HTTPS certificate active
- [ ] Old site redirects to new site (if same domain)

**Rollback Plan** (if issues arise):
- Keep old Next.js site running until 100% confident
- Can instantly rollback DNS to old site if critical issues
- Netlify allows instant rollback to previous deploys

---

## Testing Checklist

### Pre-Deployment Testing

#### Visual Regression Testing
- [ ] Compare screenshots of old vs new site (all pages)
- [ ] Verify color palette matches exactly
- [ ] Check font rendering (weights, sizes, line-heights)
- [ ] Ensure spacing/layout identical

#### Content Validation
- [ ] All 8 blog posts present and readable
- [ ] All 5 talks present with working videos
- [ ] 1 project displays correctly
- [ ] No broken internal links
- [ ] No broken external links
- [ ] All images load (including external Unsplash)

#### Functional Testing
- [ ] Mobile menu: Open, close, escape, outside click
- [ ] Tech stack carousel: Auto-play, loop, responsive
- [ ] Navigation: All links work, active states
- [ ] Forms: N/A (no forms in current site)
- [ ] Search: N/A (no search functionality)

#### Performance Testing
- [ ] Lighthouse Performance > 95
- [ ] JavaScript bundle < 100KB (only Swiper)
- [ ] First Contentful Paint < 1.0s
- [ ] Largest Contentful Paint < 2.0s
- [ ] Cumulative Layout Shift < 0.1

#### SEO Testing
- [ ] Meta titles present on all pages
- [ ] Meta descriptions present
- [ ] Open Graph tags correct
- [ ] Sitemap generates successfully
- [ ] Robots.txt accessible
- [ ] Canonical URLs correct

---

## Deployment Guide

### Initial Deployment Process

1. **Final Code Review**
   ```bash
   # Ensure clean git state
   git status

   # Run final build
   npm run build

   # Preview production build
   npm run preview
   ```

2. **Create Production Branch** (optional)
   ```bash
   git checkout -b production
   git push origin production
   ```

3. **Netlify Setup**
   - Log into Netlify
   - Import GitHub repository
   - Configure build settings (see Ticket #21)
   - Deploy

4. **DNS Configuration** (if using custom domain)
   - Update A record or CNAME at DNS provider
   - Point to Netlify's servers
   - Wait for propagation

5. **Post-Deployment Verification**
   - Visit live URL
   - Run Lighthouse audit
   - Check all critical user paths
   - Monitor for errors in Netlify logs

### Continuous Deployment

**Automatic Deployments**:
- Enabled by default on Netlify
- Every push to `main` triggers new build
- Deploy previews for pull requests
- Rollback available from Netlify dashboard

**Build Status Monitoring**:
- GitHub commit status checks
- Email notifications on build failures
- Netlify build logs available in dashboard

---

## Rollback Strategy

### Immediate Rollback (DNS-level)

**If Critical Issues Arise**:
1. Keep old Next.js Netlify site active during migration
2. If new Astro site has critical bugs, revert DNS to old site
3. Fix issues in Astro version
4. Redeploy and switch DNS back

**DNS Rollback Steps**:
```
1. Log into DNS provider (Cloudflare, etc.)
2. Change A/CNAME record back to old Netlify site
3. Wait for propagation (5-60 minutes)
4. Old site is live again
```

### Netlify Rollback

**If Minor Issues After Deployment**:
1. Netlify Dashboard → Deploys
2. Find last working deploy
3. Click "Publish deploy"
4. Previous version instantly live

### Git Rollback

**If Need to Revert Code**:
```bash
# Find commit hash of last working version
git log

# Revert to specific commit
git revert <commit-hash>

# Or reset hard (destructive)
git reset --hard <commit-hash>
git push -f origin main
```

---

## Reference Links

### Astro Documentation
- [Astro Official Docs](https://docs.astro.build/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Images](https://docs.astro.build/en/guides/images/)
- [Integrations](https://docs.astro.build/en/guides/integrations-guide/)
- [Deployment - Netlify](https://docs.astro.build/en/guides/deploy/netlify/)

### Tailwind CSS
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- [Typography Plugin](https://tailwindcss.com/docs/typography-plugin)

### Libraries & Tools
- [Swiper.js Documentation](https://swiperjs.com/)
- [Fontsource](https://fontsource.org/)
- [Zod (Schema Validation)](https://zod.dev/)

### Performance & Optimization
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

### SEO
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### Deployment
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)

---

## Appendix: Quick Command Reference

### Development Commands
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run astro check
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/ticket-number

# Commit changes
git add .
git commit -m "feat: description of changes"

# Push to remote
git push origin feature/ticket-number

# Merge to main
git checkout main
git merge feature/ticket-number
git push origin main
```

### Debugging
```bash
# Clear Astro cache
rm -rf .astro

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# View detailed build errors
npm run build -- --verbose
```

---

## Success Metrics

### Performance Comparison (Before/After)

**Expected Improvements**:
| Metric | Next.js (Before) | Astro (After) | Improvement |
|--------|-----------------|---------------|-------------|
| JavaScript Bundle | ~250KB | ~50KB | 80% reduction |
| First Contentful Paint | ~1.5s | ~0.5s | 66% faster |
| Lighthouse Performance | ~75 | ~95+ | +20 points |
| Build Time | ~60s | ~30s | 50% faster |

### Post-Migration Review

After completing migration, assess:
- [ ] **Performance**: Lighthouse scores improved
- [ ] **Developer Experience**: Easier to maintain and update
- [ ] **Build Times**: Faster builds
- [ ] **User Experience**: Faster page loads
- [ ] **Stability**: Fewer framework-related issues
- [ ] **Maintainability**: Simpler codebase

---

## Notes

- **Estimated Total Time**: 20-30 hours (2-3 full days or 1 week part-time)
- **Complexity**: Low-Medium (straightforward migration, minimal client-side JS)
- **Risk Level**: Low (no server-side features, no database, pure static site)
- **Recommended Approach**: Complete phases sequentially, test thoroughly at each stage
- **Team Size**: 1 developer can complete solo

**Good luck with your migration!** 🚀

---

*Document Version: 1.0*
*Last Updated: 2025-11-21*
*Created for: Theo Harris Portfolio Migration*
