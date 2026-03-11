'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryNav from '../components/CategoryNav';
import MediaLogos from '../components/MediaLogos';
import CategoryGrid from '../components/CategoryGrid';
import ArtisanSection from '../components/ArtisanSection';
import ProductGrid from '../components/ProductGrid';
import CraftProcess from '../components/CraftProcess';
import HeritageMap from '../components/HeritageMap';
import Philosophy from '../components/Philosophy';
import InstagramGrid from '../components/InstagramGrid';
import Footer from '../components/Footer';
import styles from './page.module.css'

const bestSellers = [
  { name: 'Kutchi Dream Clutch', price: 4500, image: '/images/p1.png', craftType: 'Hand Embroidered' },
  { name: 'Heritage Sandook Bag', price: 8200, image: '/images/p3.png', craftType: 'Block Print' },
  { name: 'Vintage Mirror Purse', price: 3800, image: '/images/p2.png', craftType: 'Mirror Work' },
  { name: 'Indigo Artisan Tote', price: 5400, image: '/images/p4.png', craftType: 'Handloomed' },
];

const newArrivals = [
  { name: 'Emerald Potli', price: 4200, image: '/images/p5.png', craftType: 'Natural Dye' },
  { name: 'Golden Silk Clutch', price: 3500, image: '/images/p6.png', craftType: 'Banarasi Weave' },
  { name: 'Heritage Leather Wrap', price: 9500, image: '/images/p2.png', craftType: 'Leather Craft' },
  { name: 'Artisan Glass Clutch', price: 4800, image: '/images/p1.png', craftType: 'Handmade' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div><Hero /></div>
        <div><CategoryNav /></div>
        <div><MediaLogos /></div>
        <div><CategoryGrid /></div>
        <div><ArtisanSection /></div>
        <div><ProductGrid title="Heritage Best Sellers" products={bestSellers} /></div>
        <div><CraftProcess /></div>
        <div><ProductGrid title="New Arrivals" products={newArrivals} /></div>
        <div><HeritageMap /></div>
        <div><Philosophy /></div>
        <div><InstagramGrid /></div>
      </main>
      <Footer />
    </>
  );
}
