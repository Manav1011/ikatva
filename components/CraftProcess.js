import styles from './CraftProcess.module.css';

const steps = [
  { step: '01', title: 'Design', text: 'Concept & woodblock sketches.', icon: '✎' },
  { step: '02', title: 'Threadwork', text: 'Master artisan embroidery.', icon: '🧵' },
  { step: '03', title: 'Assembly', text: 'Hand-stitched structural craft.', icon: '🪡' },
  { step: '04', title: 'Legacy', text: 'A heritage story in your hands.', icon: '👜' },
];

const CraftProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.overhead}>THE JOURNEY</h3>
        <h2 className={styles.title}>Preserving the Craft</h2>
      </div>
      <div className={styles.timeline}>
        {steps.map((s, i) => (
          <div 
            key={i} 
            className={styles.stepCard} 
          >
            <div className={styles.iconBox}>{s.icon}</div>
            <div className={styles.dot}></div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.text}</p>
          </div>
        ))}
        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default CraftProcess;
