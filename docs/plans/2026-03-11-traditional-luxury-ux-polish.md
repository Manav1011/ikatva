# Traditional & Luxurious UX Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate the IKATVA homepage to match a traditional and luxurious brand vibe by refining typography, buttons, footer, iconography, color accents, and interactive polish.

**Architecture:** Incremental CSS Module and component updates. No new dependencies. Use existing CSS variables and fonts. Add gold/bronze accents, refined typography hierarchy, and subtle hover states across all interactive elements.

**Tech Stack:** Next.js 14, React 18, CSS Modules, existing GSAP/Locomotive Scroll.

---

## Prerequisites

- Dev server: `npm run dev` (port 3000 or 3001)
- Manual verification: Open `http://localhost:3000` (or 3001) after each task
- Commit after each task

---

### Task 1: Typography Hierarchy — Product Names & Body Text

**Files:**
- Modify: `app/layout.js` (add Playfair Display for product/body refinement)
- Modify: `app/globals.css` (typography utility classes)
- Modify: `components/ProductGrid.module.css` (prodName, prodPrice)

**Step 1: Add Playfair Display font for product names**

In `app/layout.js`, add font import and pass variable:

```javascript
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600'],
  variable: '--font-playfair' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Update ProductGrid product name typography**

In `components/ProductGrid.module.css`, replace `.prodName` and `.prodPrice`:

```css
.prodName {
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-size: 1.15rem;
  margin-bottom: 8px;
  color: var(--charcoal-black);
  font-weight: 500;
  letter-spacing: 0.3px;
}

.prodPrice {
  font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  color: var(--deep-maroon);
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

**Step 3: Verify**

Run `npm run dev`, open homepage, scroll to product grids. Product names should use Playfair Display; prices should use Cormorant Garamond.

**Step 4: Commit**

```bash
git add app/layout.js app/globals.css components/ProductGrid.module.css
git commit -m "feat: add Playfair Display for product typography hierarchy"
```

---

### Task 2: Button Styling — Primary & Secondary CTAs

**Files:**
- Modify: `components/Hero.module.css` (ctaPrimary, ctaSecondary)
- Modify: `components/ProductGrid.module.css` (viewAll)
- Modify: `components/ArtisanSection.module.css` (btn)
- Modify: `components/Footer.module.css` (btn)

**Step 1: Refine Hero CTAs with gold border accent**

In `components/Hero.module.css`, update `.ctaPrimary` and `.ctaSecondary`:

```css
.ctaPrimary {
  background-color: var(--deep-maroon);
  color: var(--white);
  padding: 18px 45px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid var(--antique-gold);
  box-shadow: 0 10px 30px rgba(122, 31, 42, 0.25);
}

.ctaPrimary:hover {
  background-color: transparent;
  border-color: var(--antique-gold);
  color: var(--antique-gold);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(198, 167, 105, 0.2);
}

.ctaSecondary {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  color: var(--white);
  padding: 18px 45px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(198, 167, 105, 0.5);
}

.ctaSecondary:hover {
  border-color: var(--antique-gold);
  background-color: rgba(198, 167, 105, 0.15);
  color: var(--antique-gold);
  transform: translateY(-3px);
}
```

**Step 2: Refine View All button (ProductGrid)**

In `components/ProductGrid.module.css`, update `.viewAll`:

```css
.viewAll {
  padding: 15px 50px;
  background-color: var(--heritage-indigo);
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid var(--antique-gold);
}

.viewAll:hover {
  background-color: var(--deep-maroon);
  border-color: var(--antique-gold);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(122, 31, 42, 0.2);
}
```

**Step 3: Verify**

Check Hero buttons and View All button hover states. Buttons should have gold accents and smooth hover transitions.

**Step 4: Commit**

```bash
git add components/Hero.module.css components/ProductGrid.module.css
git commit -m "feat: refine CTA buttons with gold accents and hover polish"
```

---

### Task 3: Footer — Richer Background & Typography

**Files:**
- Modify: `app/globals.css` (add --footer-bg variable)
- Modify: `components/Footer.module.css`

**Step 1: Add footer background variable**

In `app/globals.css`, add to `:root`:

```css
--footer-bg: #1a1512; /* Rich dark brown, warmer than charcoal */
```

**Step 2: Update Footer styles**

In `components/Footer.module.css`, update:

```css
.footer {
  background-color: var(--footer-bg);
  color: var(--white);
  padding: 100px 5% 40px;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--antique-gold), transparent);
  opacity: 0.4;
}

.newsTitle {
  color: var(--white);
  font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
}

.title {
  color: var(--white);
  font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
}
```

**Step 3: Verify**

Footer should have warmer dark brown background and refined serif headings.

**Step 4: Commit**

```bash
git add app/globals.css components/Footer.module.css
git commit -m "feat: footer richer background and serif typography"
```

---

### Task 4: Navbar Iconography — Replace Text with SVG Icons

**Files:**
- Create: `components/icons/IconSearch.js`
- Create: `components/icons/IconUser.js`
- Create: `components/icons/IconCart.js`
- Modify: `components/Navbar.js`
- Modify: `components/Navbar.module.css`

**Step 1: Create minimal luxury SVG icons**

Create `components/icons/IconSearch.js`:

```javascript
export default function IconSearch({ className = '', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
```

Create `components/icons/IconUser.js`:

```javascript
export default function IconUser({ className = '', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}
```

Create `components/icons/IconCart.js`:

```javascript
export default function IconCart({ className = '', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
```

**Step 2: Update Navbar to use icons**

In `components/Navbar.js`:

```javascript
import Link from 'next/link';
import IconSearch from './icons/IconSearch';
import IconUser from './icons/IconUser';
import IconCart from './icons/IconCart';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.announcement}>
        Free Worldwide Shipping on Orders Above ₹5000
      </div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">IKATVA</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/collections">Collections</Link></li>
          <li><Link href="/heritage">Our Heritage</Link></li>
          <li><Link href="/stories">Artisan Stories</Link></li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search"><IconSearch /></button>
          <button className={styles.iconBtn} aria-label="Account"><IconUser /></button>
          <button className={styles.iconBtn} aria-label="Cart">
            <IconCart />
            <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
```

**Step 3: Add icon button styles**

In `components/Navbar.module.css`, update `.iconBtn` and add `.cartCount`:

```css
.iconBtn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.iconBtn:hover {
  color: var(--deep-maroon);
}

.iconBtn:hover svg {
  stroke: var(--antique-gold);
}

.cartCount {
  font-size: 0.75rem;
  opacity: 0.8;
}
```

**Step 4: Verify**

Navbar icons should render; hover should show gold accent on icons.

**Step 5: Commit**

```bash
git add components/icons/ components/Navbar.js components/Navbar.module.css
git commit -m "feat: replace text icons with SVG icons in navbar"
```

---

### Task 5: Gold Accents — Section Dividers & Borders

**Files:**
- Modify: `app/globals.css` (add --gold-soft)
- Modify: `components/ProductGrid.module.css` (section border)
- Modify: `components/HeritageMap.module.css` (mapWrapper)
- Modify: `components/CategoryGrid.module.css` (sectionTitle)

**Step 1: Add soft gold variable**

In `app/globals.css`, add to `:root`:

```css
--gold-soft: rgba(198, 167, 105, 0.15);
```

**Step 2: Add subtle gold top border to ProductGrid section**

In `components/ProductGrid.module.css`, update `.section`:

```css
.section {
  padding: 120px 5%;
  background-color: var(--white);
  border-top: 1px solid var(--gold-soft);
}
```

**Step 3: Refine Heritage Map wrapper**

In `components/HeritageMap.module.css`, update `.mapWrapper`:

```css
.mapWrapper {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  background-color: var(--heritage-ivory);
  padding: 50px;
  box-shadow: 0 40px 100px rgba(122, 31, 42, 0.06);
  border: 1px solid var(--gold-soft);
}
```

**Step 4: Add gold underline to CategoryGrid section title**

In `components/CategoryGrid.module.css`, update `.sectionTitle`:

```css
.sectionTitle {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background-color: var(--antique-gold);
  opacity: 0.6;
}
```

**Step 5: Verify**

Sections should have subtle gold accents and borders.

**Step 6: Commit**

```bash
git add app/globals.css components/ProductGrid.module.css components/HeritageMap.module.css components/CategoryGrid.module.css
git commit -m "feat: add gold accents to section dividers and borders"
```

---

### Task 6: Heritage Map Section — Visual Richness

**Files:**
- Modify: `components/HeritageMap.module.css`
- Modify: `components/HeritageMap.js` (optional: add subtle overlay)

**Step 1: Add texture overlay to map section**

In `components/HeritageMap.module.css`, add to `.section`:

```css
.section {
  padding: 120px 5%;
  background-color: var(--white);
  border-top: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  position: relative;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://www.transparenttextures.com/patterns/linen.png');
  opacity: 0.04;
  pointer-events: none;
}
```

**Step 2: Refine map image styling**

Update `.mapImage` in `components/HeritageMap.module.css`:

```css
.mapImage {
  width: 100%;
  height: auto;
  opacity: 0.85;
  filter: sepia(0.15) contrast(0.95);
}
```

**Step 3: Verify**

Heritage Map section should have subtle texture and refined map appearance.

**Step 4: Commit**

```bash
git add components/HeritageMap.module.css
git commit -m "feat: add texture overlay to Heritage Map section"
```

---

### Task 7: Product Card Hover — Subtle Polish

**Files:**
- Modify: `components/ProductGrid.module.css`

**Step 1: Add gold border on product card hover**

In `components/ProductGrid.module.css`, add to `.card`:

```css
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card:hover {
  transform: translateY(-5px);
}

.card:hover .imageBox {
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  outline: 1px solid var(--gold-soft);
  outline-offset: 4px;
}
```

**Step 2: Refine craft label**

Update `.craftLabel`:

```css
.craftLabel {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 8px 14px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--deep-maroon);
  z-index: 2;
  border-left: 2px solid var(--antique-gold);
}
```

**Step 3: Verify**

Product cards should show subtle gold outline on hover; craft label should have gold accent.

**Step 4: Commit**

```bash
git add components/ProductGrid.module.css
git commit -m "feat: product card hover gold outline and craft label accent"
```

---

### Task 8: Whitespace & Section Spacing

**Files:**
- Modify: `components/ProductGrid.module.css`
- Modify: `components/CategoryGrid.module.css`
- Modify: `components/CraftProcess.module.css`

**Step 1: Increase section padding**

In `components/ProductGrid.module.css`, update `.section` padding:

```css
.section {
  padding: 140px 5%;
  background-color: var(--white);
  border-top: 1px solid var(--gold-soft);
}
```

In `components/CategoryGrid.module.css`, update `.container`:

```css
.container {
  padding: 100px 5%;
  background-color: var(--white);
}
```

In `components/CraftProcess.module.css`, update `.section`:

```css
.section {
  padding: 140px 5%;
  background-color: var(--white);
  text-align: center;
}
```

**Step 2: Verify**

Sections should feel more spacious with reduced cognitive load.

**Step 3: Commit**

```bash
git add components/ProductGrid.module.css components/CategoryGrid.module.css components/CraftProcess.module.css
git commit -m "feat: increase section whitespace for luxury feel"
```

---

### Task 9: Quick View & Add to Cart Button Hover

**Files:**
- Modify: `components/ProductGrid.module.css`

**Step 1: Refine overlay buttons**

In `components/ProductGrid.module.css`, update `.quickView` and `.addToCart`:

```css
.quickView {
  padding: 12px 28px;
  background-color: var(--white);
  color: var(--charcoal-black);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  border: 1px solid var(--white);
  transition: all 0.3s ease;
}

.quickView:hover {
  background-color: transparent;
  color: var(--white);
  border-color: var(--antique-gold);
}

.addToCart {
  padding: 12px 28px;
  background-color: var(--deep-maroon);
  color: var(--white);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  border: 1px solid var(--deep-maroon);
  transition: all 0.3s ease;
}

.addToCart:hover {
  background-color: var(--antique-gold);
  border-color: var(--antique-gold);
}
```

**Step 2: Verify**

Overlay buttons should have smooth hover transitions with gold accent on Add to Cart.

**Step 3: Commit**

```bash
git add components/ProductGrid.module.css
git commit -m "feat: refine product overlay button hover states"
```

---

### Task 10: Announcement Bar — Typography

**Files:**
- Modify: `components/Navbar.module.css`

**Step 1: Refine announcement bar**

In `components/Navbar.module.css`, update `.announcement`:

```css
.announcement {
  background-color: var(--deep-maroon);
  color: var(--antique-gold);
  text-align: center;
  padding: 10px 0;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
}
```

**Step 2: Verify**

Announcement bar should use serif font for a more refined look.

**Step 3: Commit**

```bash
git add components/Navbar.module.css
git commit -m "feat: announcement bar serif typography"
```

---

## Summary Checklist

Before considering the plan complete, verify:

- [ ] Product names use Playfair Display; prices use Cormorant
- [ ] All buttons have gold accents and smooth hover transitions
- [ ] Footer has rich dark brown background and serif headings
- [ ] Navbar uses SVG icons instead of text
- [ ] Gold accents and borders appear in sections and product cards
- [ ] Heritage Map has subtle texture overlay
- [ ] Section spacing is generous
- [ ] All changes are responsive (test at 768px and 600px breakpoints)

---

## Execution Handoff

Plan complete and saved to `docs/plans/2026-03-11-traditional-luxury-ux-polish.md`.

**Two execution options:**

**1. Subagent-Driven (this session)** — I dispatch fresh subagent per task, review between tasks, fast iteration.

**2. Parallel Session (separate)** — Open new session with executing-plans, batch execution with checkpoints.

**Which approach?**
