# Luxury Heritage Rebrand Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate the IKATVA homepage to a "luxury-brand-level" experience through surgical refinements in typography, motion, spacing, and storytelling depth.

**Architecture:** Maintain the Next.js App Router structure with CSS Modules. Use CSS transitions and keyframes for micro-animations. Implement an SVG-based illustrated map for the Heritage section.

**Tech Stack:** Next.js, Vanilla CSS, Lucide-react (for icons).

---

### Task 1: Global Micro-Animations & Typography Polish

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/app/globals.css`

**Step 1: Add Scroll Reveal Keyframes and Smooth Scroll**
```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal {
  animation: reveal 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  opacity: 0;
}
```

**Step 2: Apply to body and update root variables if needed**

---

### Task 2: Header Refinement (Padding, Separator, Underline)

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/Navbar.module.css`

**Step 1: Increase padding and add subtle border**
```css
.nav {
  padding: 22px 5%;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
```

**Step 2: Add golden underline hover animation for nav links**
```css
.navLinks a {
  position: relative;
}
.navLinks a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--antique-gold);
  transition: width 0.3s ease;
}
.navLinks a:hover::after {
  width: 100%;
}
```

---

### Task 3: Hero Impact (Gradient & Parallax)

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/Hero.module.css`
- Modify: `/home/web-h-063/Documents/ikatva/components/Hero.js`

**Step 1: Update background gradient overlay**
```css
.hero {
  background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.05)), url('/images/hero.png');
}
```

**Step 2: Add Parallax logic or CSS attachment**
(Set `background-attachment: fixed` for simple parallax).

---

### Task 4: Category Navigation Under Hero

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/CategoryNav.module.css` (assuming created or modify existing inline)

**Step 1: Add ✦ separators and luxury spacing**
```javascript
const categories = ["Textile Bags", "Architectural Clutch", "Silk Bags", "The Embroidered Luxe"];
// Render as: ✦ {name} ✦
```

---

### Task 5: Featured Collections Hover Overlay

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/CategoryGrid.module.css`

**Step 1: Add absolute overlay to imageWrapper**
```css
.overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  opacity: 0;
  transition: 0.3s ease;
}
.card:hover .overlay { opacity: 1; }
```

---

### Task 6: Artisan Craft Badge

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/ArtisanSection.js`
- Modify: `/home/web-h-063/Documents/ikatva/components/ArtisanSection.module.css`

**Step 1: Add circular badge component**
```javascript
<div className={styles.craftBadge}>Handcrafted in Kutch<br/>Since 1982</div>
```

---

### Task 7: Product Card Polish (Secondary Image & Tags)

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/ProductCard.js`
- Modify: `/home/web-h-063/Documents/ikatva/components/ProductGrid.module.css`

**Step 1: Add craft tags under product name**
```javascript
<span className={styles.tagName}>Natural Dye</span>
```

---

### Task 8: Craft Process Timeline

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/CraftProcess.js`
- Modify: `/home/web-h-063/Documents/ikatva/components/CraftProcess.module.css`

**Step 1: Change to flat horizontal timeline with icons**
(Use Lucide-react: Pencil, Scissors, Hammer, Check)

---

### Task 9: Illustrated Heritage Map

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/HeritageMap.js`
- Modify: `/home/web-h-063/Documents/ikatva/components/HeritageMap.module.css`

**Step 1: Replace placeholder text with illustrated SVG path of India**
**Step 2: Add popup tooltips for markers**

---

### Task 10: Instagram Section Title

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/InstagramGrid.js`

**Step 1: Update title to "Seen in the World of IKATVA"**

---

### Task 11: Footer Heritage Divider & Icons

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/Footer.module.css`
- Modify: `/home/web-h-063/Documents/ikatva/components/Footer.js`

**Step 1: Add ornamental gold divider**
**Step 2: Add benefit icons (Ethical, Handmade, etc.)**

---

## Appendix: Image Generation Prompts

1. **Artisan Signature Badge Icon**: "A vintage-style circular woodblock seal icon, golden texture on maroon background, reads 'IKATVA Handcrafted Heritage Since 1982', high detail, luxury feel."
2. **Illustrated India Map**: "Simplified minimalist outline map of India, antique gold strokes on a light beige textured background, elegant, hand-drawn aesthetic, high resolution."
3. **Secondary Product Lifestyle Shots**: "Luxury lifestyle photography of an IKATVA clutch bag held by a woman in a traditional silk saree, soft natural palace lighting, focused on craft details, 4k."
4. **Craft Process Icons**: "Four minimal vector icons: a drafting pencil, a spool of thread with needle, a small hammer, and a finished luxury bag. Antique gold color on ivory background."
