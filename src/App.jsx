<<<<<<< HEAD:src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import CategoryNav from './components/sections/CategoryNav';
import MediaLogos from './components/sections/MediaLogos';
import CategoryGrid from './components/sections/CategoryGrid';
import ArtisanSection from './components/sections/ArtisanSection';
import ProductGrid from './components/sections/ProductGrid';
import CraftProcess from './components/sections/CraftProcess';
import HeritageMap from './components/sections/HeritageMap';
import Philosophy from './components/sections/Philosophy';
=======
'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import ImpactSection from '../components/sections/ImpactSection';
import CategoryNav from '../components/sections/CategoryNav';
import MediaLogos from '../components/sections/MediaLogos';
import CategoryGrid from '../components/sections/CategoryGrid';
import ArtisanSection from '../components/sections/ArtisanSection';
import ProductGrid from '../components/sections/ProductGrid';
import CraftProcess from '../components/sections/CraftProcess';
import HeritageMap from '../components/sections/HeritageMap';
import Philosophy from '../components/sections/Philosophy';
>>>>>>> befc2ce12d36000697c8e799bb69070ca9e116f0:app/page.js
import styles from './page.module.css';

// Data extraction
import { bestSellers, newArrivals } from './data/homepage';
import ArtisanCarousel from './components/sections/ArtisanCarousel';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div><Hero /></div>
        <div><ImpactSection /></div>
        <div><CategoryNav /></div>
        <div><CategoryGrid /></div>
        <div><ArtisanSection /></div>
        <div><ProductGrid title="Heritage Best Sellers" products={bestSellers} /></div>

        <div><CraftProcess /></div>
        <div><ProductGrid title="New Arrivals" products={newArrivals} /></div>
        <div><HeritageMap /></div>
        <div><Philosophy /></div>
        <div><ArtisanCarousel /></div>


      </main>
      <Footer />
    </>
  );
}
