import Link from 'next/link';
import styles from './CategoryGrid.module.css';

const categories = [
  { name: 'Kutchi Craft', image: '/images/kutchi.png', link: '/category/kutchi' },
  { name: 'Sandook Bags', image: '/images/sandook.png', link: '/category/sandook' },
  { name: 'Everyday Luxury', image: '/images/hero2.png', link: '/category/everyday' },
  { name: 'Festive Edition', image: '/images/hero3.png', link: '/category/festive' },
];

const CategoryGrid = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Featured Collections</h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <Link 
            href={cat.link} 
            key={idx} 
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={cat.image} alt={cat.name} className={styles.image} />
              <div className={styles.overlay}>
                <h3 className={styles.gridName}>{cat.name}</h3>
                <span className={styles.explore}>Explore →</span>
              </div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{cat.name}</h3>
              <span className={styles.linkText}>Shop Now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
