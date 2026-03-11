import styles from './MediaLogos.module.css';

const MediaLogos = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>AS SEEN IN</h3>
      <div className={styles.grid}>
        <div className={styles.logo}>VOGUE INDIA</div>
        <div className={styles.logo}>ARCHITECTURAL DIGEST</div>
        <div className={styles.logo}>ELLE INDIA</div>
        <div className={styles.logo}>THE RECOGNIZED LUXE</div>
      </div>
    </section>
  );
};

export default MediaLogos;
