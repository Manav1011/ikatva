# Locomotive Scroll & Luxury Motion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate smooth scrolling and cinematic parallax effects to elevate IKATVA's brand experience to 9.5/10 luxury level.

**Architecture:** Initialize Locomotive Scroll in a client-side wrapper. Use `data-scroll` attributes for parallax and `GSAP` for sequenced waypoint animations (Artisan reveal, Map dots, Process flow).

**Tech Stack:** `locomotive-scroll` (v4/v5), `gsap`, `framer-motion` (for simple reveals).

---

### Task 1: Motion Dependencies & Initialization

**Files:**
- Modify: `package.json` (Add `locomotive-scroll`, `gsap`)
- Create: `/home/web-h-063/Documents/ikatva/components/SmoothScroll.js`

**Step 1: Install dependencies**
Run: `npm install locomotive-scroll gsap`

**Step 2: Create the SmoothScroll client component**
```javascript
'use client';
import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp: 0.08,
      });
    })();
  }, []);

  return <div data-scroll-container>{children}</div>;
}
```

---

### Task 2: Hero Section Parallax Depth

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/Hero.js`

**Step 1: Add data-scroll attributes for background parallax**
```javascript
<section className={styles.hero} data-scroll data-scroll-speed="-2">
  <div data-scroll data-scroll-speed="1">
    {/* Text content stays slower/fixed */}
  </div>
</section>
```

---

### Task 3: Editorial Collection "Floating" Grid

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/CategoryGrid.js`

**Step 1: Assign alternating speeds to grid cards**
- Large images: `data-scroll-speed="1.2"`
- Small images: `data-scroll-speed="0.8"`
- Creates the "floating magazine" effect.

---

### Task 4: Artisan Story Reveal Animation

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/ArtisanSection.js`
- Modify: `/home/web-h-063/Documents/ikatva/components/ArtisanSection.module.css`

**Step 1: Add viewport reveal triggers**
- Image slides in from left.
- Badge rotates slowly on scroll (`data-scroll-speed="2"` + `data-scroll-direction="horizontal"`).

---

### Task 5: Sequenced Craft Process (The Journey)

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/CraftProcess.js`

**Step 1: Use GSAP ScrollTrigger or Locomotive 'call' for sequencing**
- 01 -> 02 -> 03 -> 04 fade in sequentially as the section enters the viewport.

---

### Task 6: Heritage Map Sequential Points

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/HeritageMap.js`

**Step 1: Animate markers appearing one by one**
- Use `data-scroll data-scroll-repeat` to trigger the animation every time the map is viewed.

---

### Task 7: Performance & Mobile Optimization

**Files:**
- Modify: `/home/web-h-063/Documents/ikatva/components/SmoothScroll.js`

**Step 1: Disable on mobile (Luxury brands prefer native feel on touch)**
```javascript
tablet: { smooth: false },
smartphone: { smooth: false }
```

---

## Execution choice:
**Plan complete and saved to `docs/plans/2026-03-11-locomotive-motion.md`.**

1. **Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks.
2. **Parallel Session (separate)** - Open new session with executing-plans.

**Which approach?**
