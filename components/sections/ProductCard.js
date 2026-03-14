import styles from './ProductGrid.module.css';

const ProductCard = ({ name, price, originalPrice, image, craftType = 'Hand Embroidered' }) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        {discount > 0 && (
          <div className={styles.saleBadge}>
            SAVE {discount}%
          </div>
        )}
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
        <div className={styles.priceContainer}>
          {originalPrice && (
            <span className={styles.originalPrice}>₹ {originalPrice.toLocaleString('en-IN')}</span>
          )}
          <span className={styles.prodPrice}>₹ {price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
