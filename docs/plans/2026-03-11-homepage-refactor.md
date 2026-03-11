# Homepage Refactoring & Architecture Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor the IKATVA homepage into a modular, high-quality architecture by separating page sections from generic components and extracting data constants.

**Architecture:** We will move section-specific components to a dedicated directory, extract static data into a `data/` constants file, and simplify the main `page.js` entry point to improve maintainability and performance.

**Tech Stack:** Next.js (App Router), Vanilla CSS Modules, JavaScript.

---

### Task 1: Initialize Data Architecture
**Files:**
- Create: `/home/manav1011/Documents/ikatva/app/data/homepage.js`

**Step 1: Extract bestSellers and newArrivals data**
Create `/home/manav1011/Documents/ikatva/app/data/homepage.js` and move the arrays from `/home/manav1011/Documents/ikatva/app/page.js`.

**Step 2: Commit**
```bash
git add app/data/homepage.js
git commit -m "refactor: extract homepage static data"
```

### Task 2: Reorganize Component Structure
**Files:**
- Create: `/home/manav1011/Documents/ikatva/components/sections/` (directory)
- Modify: Move existing section components into `components/sections/`

**Step 1: Move Section Components**
Move any component that represents a full page section into a `sections/` subfolder.
- `Hero.js` -> `components/sections/Hero.js`
- `CategoryNav.js` -> `components/sections/CategoryNav.js`
- `MediaLogos.js` -> `components/sections/MediaLogos.js`
- `CategoryGrid.js` -> `components/sections/CategoryGrid.js`
- `ArtisanSection.js` -> `components/sections/ArtisanSection.js`
- `CraftProcess.js` -> `components/sections/CraftProcess.js`
- `HeritageMap.js` -> `components/sections/HeritageMap.js`
- `Philosophy.js` -> `components/sections/Philosophy.js`
- `InstagramGrid.js` -> `components/sections/InstagramGrid.js`
- `ProductGrid.js` -> `components/sections/ProductGrid.js`

*Note: Update their .module.css imports accordingly.*

**Step 2: Update CSS Module paths**
Ensure the `styles` import in each moved component points to the correct relative path.

**Step 3: Commit**
```bash
git add components/sections/
git commit -m "refactor: move homepage sections to dedicated directory"
```

### Task 3: Refactor Main Homepage Entry Point
**Files:**
- Modify: `/home/manav1011/Documents/ikatva/app/page.js`

**Step 1: Update imports from new locations**
Update imports in `/home/manav1011/Documents/ikatva/app/page.js` to use the new `components/sections/` paths and `app/data/homepage.js`.

**Step 2: Simplify component assembly**
Ensure `Home()` component is clean and purely orchestrates the sections.

**Step 3: Test locally**
Run `npm run dev` and verify no broken imports.

**Step 4: Commit**
```bash
git add app/page.js
git commit -m "refactor: clean up app/page.js imports and structure"
```

### Task 4: Standardize Section Props & Interfaces
**Files:**
- Modify: `/home/manav1011/Documents/ikatva/components/sections/ProductGrid.js`
- Modify: `/home/manav1011/Documents/ikatva/components/sections/ArtisanSection.js` (and others)

**Step 1: Improve ProductGrid robustness**
Add default prop values or empty state checks for the `products` list.

**Step 2: Commit**
```bash
git add components/sections/ProductGrid.js
git commit -m "refactor: add prop safeguards to ProductGrid"
```
