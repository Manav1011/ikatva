import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textureOverlay}></div>
      <div className={styles.ornamentTop} aria-hidden="true">✦</div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Handcrafted in India</span>
          <h2 className={styles.title}>Carry Heritage<br/><span className={styles.brand}>Carry IKATVA</span></h2>
          <div className={styles.divider}>
            <span></span><span className={styles.star}>✦</span><span></span>
          </div>
          <p className={styles.subtitle}>Each piece tells a story of tradition—passed down through generations of skilled hands in the heart of Kutch.</p>
          <div className={styles.ctaGroup}>
            <button className={styles.ctaPrimary}>Explore Collection</button>
            <button className={styles.ctaSecondary}>Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
