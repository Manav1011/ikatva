import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ArtisanSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const ArtisanSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const quoteRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      }
    });

    tl.from(imageRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: 'power2.out'
    })
    .from(quoteRef.current, {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: 'power2.out'
    }, '-=1')
    .from(badgeRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.8');
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.imageCol} data-scroll data-scroll-speed="-0.5">
        <img 
          ref={imageRef}
          src="/images/artisan.png" 
          alt="Artisan Ramesh Bhai" 
          className={styles.image} 
        />
        <div 
          ref={badgeRef}
          className={styles.signatureBadge} 
          data-scroll 
          data-scroll-speed="1.5"
        >
          <p className={styles.badgeText}>Handcrafted in Kutch<br/><span>Since 1982</span></p>
        </div>
      </div>
      <div className={styles.contentCol} data-scroll data-scroll-speed="0.5">
        <h3 className={styles.overhead}>Meet the Heart of IKATVA</h3>
        <blockquote ref={quoteRef} className={styles.quote}>
          “Craft is not just work for us, it is our legacy.”
        </blockquote>
        <div className={styles.artisanName}>
          <span className={styles.signature}>Ramesh Bhai</span>
          <p className={styles.designation}>3rd Generation Kutchi Artisan</p>
        </div>
        <p className={styles.text}>
          Every IKATVA piece tells a story of tradition, passed down through generations of skilled hands in the heart of Kutch.
        </p>
        <button className={styles.btn}>Read Our Full Story</button>
      </div>
    </section>
  );
};

export default ArtisanSection;
