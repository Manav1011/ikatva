import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './InstagramGrid.module.css';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/images/trending_lifestyle.png',
  '/images/p5.png',
  '/images/p6.png',
  '/images/hero2.png',
  '/images/hero3.png',
  '/images/artisan2.png',
];

const InstagramGrid = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    gsap.to(grid, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: -100,
      ease: 'none',
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.title}>Seen in the World of IKATVA</h2>
      <p className={styles.subtitle}>Tag #CarryIKATVA to be featured in our heritage gallery.</p>
      <div className={styles.gridWrapper}>
        <div ref={gridRef} className={styles.grid}>
          {images.map((img, i) => (
            <div key={i} className={styles.item}>
              <img src={img} alt="Lifestyle" className={styles.img} />
              <div className={styles.overlay}>
                <span>View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
