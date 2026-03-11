import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './HeritageMap.module.css';

gsap.registerPlugin(ScrollTrigger);

const origins = [
  { city: 'Kutch', craft: 'Mirror Work & Embroidery', x: '12%', y: '42%' },
  { city: 'Banaras', craft: 'Handloom Silk', x: '58%', y: '38%' },
  { city: 'Jaipur', craft: 'Block Printing', x: '28%', y: '32%' },
  { city: 'Hyderabad', craft: 'Ikat Weaving', x: '38%', y: '68%' },
  { city: 'Lucknow', craft: 'Chikan Craft', x: '45%', y: '32%' },
];

const HeritageMap = () => {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const map = mapRef.current;
    const markers = markersRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      }
    });

    tl.from(map, {
      opacity: 0,
      scale: 0.95,
      duration: 1.5,
      ease: 'power2.out'
    })
    .from(markers, {
      opacity: 0,
      scale: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=1');
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.content}>
        <h3 className={styles.overhead}>THE GEOGRAPHY OF CRAFT</h3>
        <h2 className={styles.title}>Heritage Map of India</h2>
        <p className={styles.text}>
          Explore the origins of our handmade collections, spanning the rich cultural landscapes of India.
        </p>
      </div>
      <div className={styles.mapWrapper} data-scroll data-scroll-speed="-0.5">
        <div className={styles.mapContainer}>
          <img 
            ref={mapRef}
            src="/images/india-map.png" 
            alt="Map of Indian Crafts" 
            className={styles.mapImage}
            data-scroll
            data-scroll-speed="-1"
          />
          {origins.map((o, i) => (
            <div 
              key={i} 
              ref={(el) => (markersRef.current[i] = el)}
              className={styles.marker} 
              style={{ left: o.x, top: o.y }}
            >
              <div className={styles.dot}></div>
              <div className={styles.tooltip}>
                <h4 className={styles.tooltipCity}>{o.city}</h4>
                <p className={styles.tooltipCraft}>{o.craft}</p>
                <button className={styles.expBtn}>Explore →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageMap;
