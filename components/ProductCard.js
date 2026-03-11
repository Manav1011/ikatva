import styles from './ProductGrid.module.css';

const ProductCard = ({ name, price, image, craftType = 'Hand Embroidered' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} className={styles.img} />
        <img src={image} alt={`${name} detail`} className={styles.imgDetail} />
        <div className={styles.overlay}>
          <button className={styles.quickView}>Quick View</button>
          <button className={styles.addToCart}>+ Add to Cart</button>
        </div>
        <div className={styles.craftLabel}>{craftType}</div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.prodName}>{name}</h3>
        <p className={styles.prodPrice}>₹ {price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
