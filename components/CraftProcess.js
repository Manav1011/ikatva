import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './CraftProcess.module.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { step: '01', title: 'Design', text: 'Concept & woodblock sketches.', icon: '✎' },
  { step: '02', title: 'Threadwork', text: 'Master artisan embroidery.', icon: '🧵' },
  { step: '03', title: 'Assembly', text: 'Hand-stitched structural craft.', icon: '🪡' },
  { step: '04', title: 'Legacy', text: 'A heritage story in your hands.', icon: '👜' },
];

const CraftProcess = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const stepsElements = stepsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      }
    });

    tl.fromTo(line, 
      { scaleX: 0, transformOrigin: 'left center' }, 
      { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }
    )
    .from(stepsElements, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power2.out'
    }, '-=1');
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.overhead}>THE JOURNEY</h3>
        <h2 className={styles.title}>Preserving the Craft</h2>
      </div>
      <div className={styles.timeline}>
        {steps.map((s, i) => (
          <div 
            key={i} 
            ref={(el) => (stepsRef.current[i] = el)}
            className={styles.stepCard}
          >
            <div className={styles.iconBox}>{s.icon}</div>
            <div className={styles.dot}></div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.text}</p>
          </div>
        ))}
        <div ref={lineRef} className={styles.line}></div>
      </div>
    </section>
  );
};

export default CraftProcess;
