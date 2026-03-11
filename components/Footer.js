import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2 className={styles.newsTitle}>Join the IKATVA Community</h2>
        <p className={styles.newsSub}>Get early access to new collections and artisan stories.</p>
        <form className={styles.newsForm}>
          <input type="email" placeholder="Your Email Address" className={styles.input} />
          <button type="submit" className={styles.btn}>Subscribe</button>
        </form>
      </div>

      <div className={styles.benefits}>
        <div className={styles.benefitItem}>
          <span className={styles.benefIcon}>✦</span>
          <p>Handmade Craft</p>
        </div>
        <div className={styles.benefitItem}>
          <span className={styles.benefIcon}>✦</span>
          <p>Ethical Production</p>
        </div>
        <div className={styles.benefitItem}>
          <span className={styles.benefIcon}>✦</span>
          <p>Artisan Empowerment</p>
        </div>
        <div className={styles.benefitItem}>
          <span className={styles.benefIcon}>✦</span>
          <p>Small Batch</p>
        </div>
      </div>

      <div className={styles.ornamentDivider}></div>

      <div className={styles.mainFooter}>
        <div className={styles.colLarge}>
          <h1 className={styles.logo}>IKATVA</h1>
          <p className={styles.mission}>
            IKATVA celebrates India's timeless heritage by bringing handcrafted pieces to the modern world. 
            Rooted in unity through tradition and strength through culture, we empower artisans and preserve 
            vanishing crafts.
          </p>
          <div className={styles.pillars}>
            <span>✦ Handmade</span>
            <span>✦ Artisan Crafted</span>
            <span>✦ Ethical production</span>
          </div>
        </div>
        <div className={styles.col}>
          <h3 className={styles.title}>Shop</h3>
          <ul className={styles.links}>
            <li>Purses</li>
            <li>Collections</li>
            <li>Limited Editions</li>
            <li>New Arrivals</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3 className={styles.title}>About</h3>
          <ul className={styles.links}>
            <li>Our Heritage</li>
            <li>Artisan Stories</li>
            <li>Journal</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3 className={styles.title}>Customer Care</h3>
          <ul className={styles.links}>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2026 IKATVA. All Heritage Reserved.</p>
        <div className={styles.social}>
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>Facebook</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
