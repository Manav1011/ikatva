import styles from './CategoryNav.module.css';

const categories = [
  "Textile Bags",
  "Architectural Clutch",
  "Silk Bags",
  "The Embroidered Luxe"
];

const CategoryNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {categories.map((cat, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot}>✦</span>
            <span className={styles.name}>{cat}</span>
          </div>
        ))}
        <span className={styles.dot}>✦</span>
      </div>
    </nav>
  );
};

export default CategoryNav;
