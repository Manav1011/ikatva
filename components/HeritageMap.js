import styles from './HeritageMap.module.css';

const origins = [
  { city: 'Kutch', craft: 'Mirror Work & Embroidery', x: '12%', y: '42%' },
  { city: 'Banaras', craft: 'Handloom Silk', x: '58%', y: '38%' },
  { city: 'Jaipur', craft: 'Block Printing', x: '28%', y: '32%' },
  { city: 'Hyderabad', craft: 'Ikat Weaving', x: '38%', y: '68%' },
  { city: 'Lucknow', craft: 'Chikan Craft', x: '45%', y: '32%' },
];

const HeritageMap = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.overhead}>THE GEOGRAPHY OF CRAFT</h3>
          <h2 className={styles.title}>Heritage Map<br/>of India</h2>
          <p className={styles.text}>
            Explore the origins of our handmade collections, spanning the rich cultural landscapes of India.
          </p>
        </div>
        <div className={styles.mapWrapper}>
          <div className={styles.mapContainer}>
            <img 
              src="/images/india-map.png" 
              alt="Map of Indian Crafts" 
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
                  <button className={styles.expBtn}>Discover the Craft →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageMap;
