'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const eyebrowRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(eyebrowRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    )
    .fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2 }, 
      '-=0.7'
    )
    .fromTo(starRef.current, 
      { scale: 0, rotation: -180 }, 
      { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' }, 
      '-=0.8'
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      '-=0.6'
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      '-=0.8'
    );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.textureOverlay}></div>
      <div className={styles.ornamentTop} aria-hidden="true">✦</div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span ref={eyebrowRef} className={styles.eyebrow}>Handcrafted in India</span>
          <h2 ref={titleRef} className={styles.title}>
            Carry Heritage<br/>
            <span className={styles.brand}>Carry IKATVA</span>
          </h2>
          <div className={styles.divider}>
            <span></span>
            <span ref={starRef} className={styles.star}>✦</span>
            <span></span>
          </div>
          <p ref={subtitleRef} className={styles.subtitle}>
            Each piece tells a story of tradition—passed down through generations of skilled hands in the heart of Kutch.
          </p>
          <div ref={ctaRef} className={styles.ctaGroup}>
            <button className={styles.ctaPrimary}>Explore Collection</button>
            <button className={styles.ctaSecondary}>Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
