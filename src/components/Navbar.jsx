import { Link } from 'react-router-dom';
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
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
