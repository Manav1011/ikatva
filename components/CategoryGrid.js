import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './CategoryGrid.module.css';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'Kutchi Craft', image: '/images/kutchi.png', link: '/category/kutchi' },
  { name: 'Sandook Bags', image: '/images/sandook.png', link: '/category/sandook' },
  { name: 'Everyday Luxury', image: '/images/hero2.png', link: '/category/everyday' },
  { name: 'Festive Edition', image: '/images/hero3.png', link: '/category/festive' },
];

const CategoryGrid = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    gsap.from(cards, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <h2 className={styles.sectionTitle}>Featured Collections</h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <Link 
            href={cat.link} 
            key={idx} 
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.card}
            data-scroll
            data-scroll-speed={idx % 2 === 0 ? "1.5" : "0.5"}
            data-scroll-direction={idx % 2 === 0 ? "vertical" : "horizontal"}
          >
            <div className={styles.imageWrapper} data-scroll data-scroll-speed="-0.5">
              <img src={cat.image} alt={cat.name} className={styles.image} />
              <div className={styles.overlay}>
                <h3 className={styles.gridName}>{cat.name}</h3>
                <span className={styles.explore}>Explore →</span>
              </div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{cat.name}</h3>
              <span className={styles.linkText}>Shop Now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
