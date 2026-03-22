<<<<<<< HEAD:src/components/Navbar.jsx
import { Link } from 'react-router-dom';
=======
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
>>>>>>> befc2ce12d36000697c8e799bb69070ca9e116f0:components/Navbar.js
import IconSearch from './icons/IconSearch';
import IconUser from './icons/IconUser';
import IconCart from './icons/IconCart';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
<<<<<<< HEAD:src/components/Navbar.jsx
    <header className={styles.header}>
      <div className={styles.announcement}>
        Free Worldwide Shipping on Orders Above ₹5000
      </div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">IKATVA</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/heritage">Our Heritage</Link></li>
          <li><Link to="/stories">Artisan Stories</Link></li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search"><IconSearch /></button>
          <button className={styles.iconBtn} aria-label="Account"><IconUser /></button>
          <button className={styles.iconBtn} aria-label="Cart">
            <IconCart />
            <span className={styles.cartCount}>0</span>
=======
    <>
      <div className={styles.navbarSpacer} aria-hidden="true"></div>
      <header className={styles.header}>
        <div className={styles.announcement}>
          Free Worldwide Shipping on Orders Above ₹5000
        </div>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/images/Logo.png" alt="Ikatva Logo" width={60} height={60} className={styles.logoImage} priority />
              <span className={styles.logoText}>IKATVA</span>
            </Link>
          </div>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span className={isMenuOpen ? `${styles.hamburgerLine} ${styles.lineTopOpen}` : styles.hamburgerLine}></span>
            <span className={isMenuOpen ? `${styles.hamburgerLine} ${styles.lineMiddleOpen}` : styles.hamburgerLine}></span>
            <span className={isMenuOpen ? `${styles.hamburgerLine} ${styles.lineBottomOpen}` : styles.hamburgerLine}></span>
>>>>>>> befc2ce12d36000697c8e799bb69070ca9e116f0:components/Navbar.js
          </button>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <li><Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link href="/collections" onClick={() => setIsMenuOpen(false)}>Collections</Link></li>
            <li><Link href="/heritage" onClick={() => setIsMenuOpen(false)}>Our Heritage</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
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
    </>
  );
};

export default Navbar;
