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
