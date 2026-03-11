# Design Plan: IKATVA Hybrid E-commerce Site

**Date:** 2026-03-11
**Topic:** IKATVA Hybrid E-commerce
**Status:** Approved

## 1. Overview
The goal is to build a high-conversion e-commerce homepage for IKATVA, inspired by the structure of Miraggio but infused with the heritage, luxury, and storytelling of the IKATVA brand.

## 2. Architecture
- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS (for flexibility and performance)
- **Image Strategy:** Use existing assets in `/public/images`.
- **SEO:** Metadata integration, semantic HTML, and optimized image loading.

## 3. Visual Identity (IKATVA Style Guide)
- **Palette (80-15-5 Rule):**
  - **Neutrals (80%):** Heritage Ivory (`#F5EFE6`) / Sandstone Beige (`#E6D5B8`)
  - **Brand (15%):** Deep Maroon (`#6B1F2B`)
  - **Accent (5%):** Antique Gold (`#C8A96A`)
- **Typography:** 
  - **Headers:** High-contrast Serif (e.g., Playfair Display)
  - **Body:** Clean Sans-Serif (e.g., Inter/Outfit)

## 4. Structural Flow ("Story-Grid Interweave")
1.  **Announcement Bar:** Deep Maroon background with Gold text.
2.  **Sticky Header:** Ivory background, Serif logo, and clean functional icons.
3.  **Hero Section:** Using `hero.png` with "Carry Heritage. Carry IKATVA."
4.  **Featured Categories:** 4-column layout (`kutchi.png`, `sandook.png`, `edit_everyday.png`, `edit_festive.png`).
5.  **Artisan Break:** Full-width story section with `artisan.png`.
6.  **Best Sellers Grid:** Miraggio-style 4-column grid (`p1.png` to `p4.png`).
7.  **Brand Philosophy:** Highlighting handmade value and artisan impact.
8.  **New Arrivals:** Secondary conversion grid (`p5.png`, `p6.png` + others).
9.  **Social Proof:** Instagram grid using `trending_lifestyle.png`.
10. **Rich Footer:** Multi-column navigation and heritage mission statement.

## 5. Success Criteria
- Responsive "Clone" of Miraggio functional efficiency.
- Distinct "Heritage Luxury" aesthetic via custom palette and storytelling.
- Fast page load and SEO compliance.
