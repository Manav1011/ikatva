import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ArtisanCarousel.module.css';

const artisans = [
  { id: 1, name: 'Ramesh Bhai', craft: 'Master Embroiderer', image: '/images/artisans/image.png' },
  { id: 2, name: 'Savitaben', craft: 'Mirror Work Artist', image: '/images/artisans/image copy.png' },
  { id: 3, name: 'Karan Singh', craft: 'Block Printing Expert', image: '/images/artisans/image copy 2.png' },
  { id: 4, name: 'Meera Bai', craft: 'Master Weaver', image: '/images/artisans/artisan-weaving.png' },
  { id: 5, name: 'Lakshmi Devi', craft: 'Natural Dye Specialist', image: '/images/artisans/image copy 3.png' },
  { id: 6, name: 'Abdul Gafur', craft: 'Rogan Art Master', image: '/images/artisans/image copy 4.png' },
  { id: 7, name: 'Gopal Lal', craft: 'Heritage Potter', image: '/images/artisans/artisan-pottery.png' },
  { id: 8, name: 'Heena Ben', craft: 'Handloom Weaver', image: '/images/artisans/image copy 5.png' },
  { id: 9, name: 'Vikram Dev', craft: 'Block Print Carver', image: '/images/artisans/artisan-woodcarving.png' },
  { id: 10, name: 'Jatin Prajapati', craft: 'Blue Pottery Artisan', image: '/images/artisans/image copy 6.png' },
  { id: 11, name: 'Anjali Devi', craft: 'Silver Filigree Artist', image: '/images/artisans/artisan-jewelry.png' },
];

const ArtisanCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % artisans.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); // Slightly slower tick for better breathing
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP Animation Logic
    artisans.forEach((_, index) => {
      const card = cardsRef.current[index];
      if (!card) return;

      const position = index - activeIndex;
      let adjustedPosition = position;
      const total = artisans.length;
      if (position > total / 2) adjustedPosition -= total;
      if (position < -total / 2) adjustedPosition += total;

      const absPosition = Math.abs(adjustedPosition);
      
      const translateX = adjustedPosition * 340; 
      const rotateY = adjustedPosition * -12;
      const translateZ = absPosition * -60;
      const scale = 1 - absPosition * 0.05;
      const opacity = 1 - absPosition * 0.25;
      const zIndex = 100 - Math.round(absPosition * 10);

      gsap.to(card, {
        duration: 2,
        x: translateX,
        z: translateZ,
        rotateY: rotateY,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        ease: "power2.inOut", // Smoother than linear for state changes
        overwrite: "auto",
      });
    });
  }, [activeIndex]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.decorativeElements}>
        <div className={styles.patternLeft}></div>
        <div className={styles.patternRight}></div>
        <div className={styles.quoteLeft}>"Preserving the thread of the past..."</div>
        <div className={styles.quoteRight}>"...weaving the fabric of the future."</div>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>The Hands Behind the Heritage</h2>
        <div className={styles.divider}>✦ ✦ ✦</div>
        <p className={styles.subtitle}>Meet the master artisans who breathe life into every IKATVA creation, preserving centuries of tradition.</p>
      </div>

      <div className={styles.carouselWrapper} ref={containerRef}>
        <div className={styles.carouselInner}>
          {artisans.map((artisan, index) => (
            <div
              key={artisan.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.imageBox}>
                <img src={artisan.image} alt={artisan.name} className={styles.image} />
                <div className={styles.ornamentalOverlay}></div>
                <div className={styles.floatingLabel}>
                  <h3 className={styles.artisanName}>{artisan.name}</h3>
                  <div className={styles.labelDivider}></div>
                  <p className={styles.artisanCraft}>{artisan.craft}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisanCarousel;
