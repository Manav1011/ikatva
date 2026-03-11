'use client';
import Image from 'next/image';
import styles from './CraftProcess.module.css';
import ScrollReveal from '../ScrollReveal';

const steps = [
  { 
    step: '01', 
    title: 'THE ART OF SKETCH', 
    text: 'Every IKATVA piece begins on textured ivory paper, where ancient woodblock motifs are reimagined for the modern connoisseur.', 
    image: '/craft_design_sketch_1773254305682.png' 
  },
  { 
    step: '02', 
    title: 'SACRED THREADS', 
    text: 'Intricate silk and gold Zardosi embroidery, passed through generations, creating a tactile landscape of heritage.', 
    image: '/craft_threadwork_close_up_1773254323106.png' 
  },
  { 
    step: '03', 
    title: 'MASTER ASSEMBLY', 
    text: 'Guided by hands that have practiced the craft for decades, each bag is structured with precision and structural integrity.', 
    image: '/craft_assembly_stitching_1773254339412.png' 
  },
  { 
    step: '04', 
    title: 'VINTAGE LEGACY', 
    text: 'The final creation—a synthesis of Indian history and contemporary luxury, ready to carry your story forward.', 
    image: '/craft_heritage_bag_portrait_1773254357128.png' 
  },
];

const CraftProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textureOverlay}></div>
      
      <div className={styles.header}>
        <ScrollReveal y={20} duration={1.2}>
          <h3 className={styles.overhead}>THE ARTISAN JOURNEY</h3>
          <h2 className={styles.title}>Preserving the Craft</h2>
          <div className={styles.headerDivider}>
            <span></span>
            <span className={styles.headerStar}>✦</span>
            <span></span>
          </div>
        </ScrollReveal>
      </div>

      <div className={styles.grid}>
        {steps.map((s, i) => (
          <div key={i} className={`${styles.stepCard} ${styles[`card${i + 1}`]}`}>
            <ScrollReveal y={40} stagger={0} delay={i * 0.2}>
              <div className={styles.imageWrapper}>
                <Image src={s.image} alt={s.title} width={400} height={500} className={styles.image} />
                <div className={styles.numberBadge}>{s.step}</div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardText}>{s.text}</p>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
      
      <div className={styles.backgroundOrnament}>✦</div>
    </section>
  );
};

export default CraftProcess;
