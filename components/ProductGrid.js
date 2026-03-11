import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const products = [
  { name: 'Kutchi Dream Clutch', price: 4500, image: '/images/p1.png' },
  { name: 'Heritage Sandook Bag', price: 8200, image: '/images/p2.png' },
  { name: 'Vintage Mirror Purse', price: 3800, image: '/images/p3.png' },
  { name: 'Indigo Artisan Tote', price: 5400, image: '/images/p4.png' },
];

const ProductGrid = ({ title, products = [] }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      <div className={styles.viewAllWrapper}>
        <button className={styles.viewAll}>View All {title}</button>
      </div>
    </section>
  );
};

export default ProductGrid;
