import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './ProductGrid.module.css';

const ProductCard = ({ name, price, image, craftType = 'Hand Embroidered' }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    const info = infoRef.current;

    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' })
           .to(info, { y: -5, duration: 0.4, ease: 'power2.out' }, 0);

    const onMouseEnter = () => hoverTl.play();
    const onMouseLeave = () => hoverTl.reverse();

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={styles.imageBox}>
        <img ref={imageRef} src={image} alt={name} className={styles.img} />
        <img src={image} alt={`${name} detail`} className={styles.imgDetail} />
        <div className={styles.overlay}>
          <button className={styles.quickView}>Quick View</button>
          <button className={styles.addToCart}>+ Add to Cart</button>
        </div>
        <div className={styles.craftLabel}>{craftType}</div>
      </div>
      <div ref={infoRef} className={styles.productInfo}>
        <h3 className={styles.prodName}>{name}</h3>
        <p className={styles.prodPrice}>₹ {price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
