'use client';

import styles from './page.module.css';

const sections = [
  { id: '01', title: 'The Heritage', subtitle: 'Timeless designs inspired by ancient cultures.', colorClass: styles.s1 },
  { id: '02', title: 'The Craft', subtitle: 'Handcrafted with love by our master artisans.', colorClass: styles.s2 },
  { id: '03', title: 'The Indigo', subtitle: 'Natural dyes that tell a story of sustainability.', colorClass: styles.s3 },
  { id: '04', title: 'The Story', subtitle: 'Every piece is a unique legacy in your hands.', colorClass: styles.s4 },
];

export default function StackingEffectPrototype() {
  return (
    <div className={styles.container}>
      <div style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
        <h1 style={{ fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#7A1F2A' }}>Scroll Down to See the Stacking Effect</h1>
      </div>

      {sections.map((section, index) => (
        <section 
          key={section.id} 
          className={`${styles.section} ${section.colorClass}`}
          style={{ 
            marginTop: index === 0 ? '0' : '0',
            zIndex: index + 1
          }}
        >
          <div className={styles.number}>{section.id}</div>
          <div className={styles.content}>
            <h2 className={styles.title}>{section.title}</h2>
            <p className={styles.subtitle}>{section.subtitle}</p>
          </div>
        </section>
      ))}

      <div className={styles.footer}>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', color: '#1a1512' }}>THE END</h2>
      </div>
    </div>
  );
}
