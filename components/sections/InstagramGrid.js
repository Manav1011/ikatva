import styles from './InstagramGrid.module.css';

const images = [
  '/images/trending_lifestyle.png',
  '/images/p5.png',
  '/images/p6.png',
  '/images/hero2.png',
  '/images/hero3.png',
  '/images/artisan2.png',
];

const InstagramGrid = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Seen in the World of IKATVA</h2>
      <p className={styles.subtitle}>Tag #CarryIKATVA to be featured in our heritage gallery.</p>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.item}>
            <img src={img} alt="Lifestyle" className={styles.img} />
            <div className={styles.overlay}>
              <span>View Post</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;
