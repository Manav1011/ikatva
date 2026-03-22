import styles from './ArtisanSection.module.css';

const ArtisanSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageCol}>
        <img src="/images/artisan2.png" alt="Artisan Ramesh Bhai" className={styles.image} />
        <div className={styles.signatureBadge}>
          <p className={styles.badgeText}>Handcrafted in Kutch<br/><span>Since 1982</span></p>
        </div>
      </div>
      <div className={styles.contentCol}>
        <h3 className={styles.overhead}>Meet the Heart of IKATVA</h3>
        <blockquote className={styles.quote}>
          “Craft is not just work for us, it is our legacy.”
        </blockquote>
        <div className={styles.artisanName}>
          <span className={styles.signature}>Ramesh Bhai</span>
          <p className={styles.designation}>3rd Generation Kutchi Artisan</p>
        </div>
        <p className={styles.text}>
          Every IKATVA piece tells a story of tradition, passed down through generations of skilled hands in the heart of Kutch.
        </p>
        <button className={styles.btn}>Read Our Full Story</button>
      </div>
    </section>
  );
};

export default ArtisanSection;
