import ScrollReveal from '../ScrollReveal';
import styles from './HeritageMap.module.css';

const origins = [
  { city: 'Rann of Kutch', craft: 'Vibrant Suf & Rogan Art', x: '50%', y: '15%' },
  { city: 'Bhuj', craft: 'Leather Craft & Embroidery', x: '45%', y: '48%' },
  { city: 'Dholavira', craft: 'Ancient Harappan Inspirations', x: '41%', y: '56%' },
  { city: 'Mandvi', craft: 'Coastal Tie-Dye (Bandhani)', x: '32%', y: '45%' },
];

const HeritageMap = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal y={20}>
            <h3 className={styles.overhead}>THE SOURCE OF STRENGTH</h3>
            <h2 className={styles.title}>The Kutch<br/>Heritage</h2>
            <p className={styles.text}>
              Rooted in the rugged landscapes of Gujarat, Kutch is the heart of IKATVA. Every craft is a witness to the resilience and artistry of its people.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.mapWrapper}>
          <ScrollReveal y={0} duration={1.5}>
            <div className={styles.mapContainer}>
              <img 
                src="/images/kutch_map.png" 
                alt="Map of Kutch Crafts" 
                className={styles.mapImage}
              />
              {origins.map((o, i) => (
                <div 
                  key={i} 
                  className={styles.marker} 
                  style={{ left: o.x, top: o.y }}
                >
                  <div className={styles.dot}></div>
                  <div className={styles.tooltip}>
                    <h4 className={styles.tooltipCity}>{o.city}</h4>
                    <p className={styles.tooltipCraft}>{o.craft}</p>
                    <button className={styles.expBtn}>Explore Region →</button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeritageMap;
