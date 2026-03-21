import ScrollReveal from '../ScrollReveal';
import styles from './HeritageMap.module.css';

const origins = [
  { city: 'Kutch', craft: 'Leather Craft & Embroidery', x: '28%', y: '28%' },
  { city: 'Banaskantha', craft: 'Intricate Tribal Embroidery & Wool Crafts', x: '50%', y: '17%' },
  { city: 'Patan', craft: 'Exquisite Patola Weaving', x: '50%', y: '29%' },
  { city: 'Ahmedabad', craft: 'Block Printing & Textiles', x: '59%', y: '40%' },
  { city: 'Surat', craft: 'Rich Zari & Silk Weaving', x: '65%', y: '70%' },
  { city: 'Rajkot', craft: 'Bandhani Tie-Dye & Traditional Jewelry Craft', x: '40%', y: '55%' },
  { city: 'Jetpur', craft: 'Vibrant Textile Dyeing & Screen Printing Hub', x: '35.5%', y: '58%' },
];

const HeritageMap = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal y={20}>
            <h3 className={styles.overhead}>THE SOURCE OF STRENGTH</h3>
            <h2 className={styles.title}>The Indian<br />Heritage</h2>
            <p className={styles.text}>
              Rooted in the vibrant heritage of Gujarat, this region is the genesis of IKATVA. From this heartland, our mission expands to celebrate the finest traditional handcrafted arts across India.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.mapWrapper}>
          <ScrollReveal y={0} duration={1.5}>
            <div className={styles.mapContainer}>
              <img
                src="/images/gujarat_map.jpeg"
                alt="Map of Gujarat Crafts"
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
