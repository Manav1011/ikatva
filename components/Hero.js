import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero.png';
    img.onload = () => {
      setIsLoaded(true);
      
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.to(heroRef.current, { opacity: 1, duration: 1.5 })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1.2 }, '-=0.8')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.6')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.6');
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`} 
      style={{ opacity: 0 }}
      data-scroll 
      data-scroll-speed="-1.5"
    >
      <div className={styles.textureOverlay}></div>
      <div className={styles.container} data-scroll data-scroll-speed="0.8">
        <div className={styles.content}>
          <h2 ref={titleRef} className={styles.title} data-scroll data-scroll-speed="1.2">Carry Heritage<br/>Carry IKATVA</h2>
          <p ref={subtitleRef} className={styles.subtitle} data-scroll data-scroll-speed="0.5">Handcrafted pieces inspired by India's timeless artistry.</p>
          <div ref={ctaRef} className={styles.ctaGroup} data-scroll data-scroll-speed="0.3">
            <button className={styles.ctaPrimary}>Shop Collection</button>
            <button className={styles.ctaSecondary}>Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
