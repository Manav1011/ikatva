import ProductCard from './ProductCard';
import ScrollReveal from '../ScrollReveal';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ title = "Collection", products = [] }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ScrollReveal stagger={0.1}>
        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.name || i} {...p} />
          ))}
        </div>
      </ScrollReveal>
      <div className={styles.viewAllWrapper}>
        <button className={styles.viewAll}>View All {title}</button>
      </div>
    </section>
  );
};

export default ProductGrid;
