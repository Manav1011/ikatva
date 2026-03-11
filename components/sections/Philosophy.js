import styles from './Philosophy.module.css';

const points = [
  { title: 'Handmade', text: 'Every IKATVA piece is 100% manually crafted.' },
  { title: 'Artisan Crafted', text: 'Crafted by master weavers with generations of legacy.' },
  { title: 'Limited Production', text: 'Exclusive collections, never mass-produced.' },
  { title: 'Ethical Craft', text: 'Directly supporting artisan livelihoods in Kutch.' },
];

const Philosophy = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {points.map((p, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.icon}>✦</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.text}>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
