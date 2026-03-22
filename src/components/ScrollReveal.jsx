'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollReveal = ({ children, stagger = 0.2, y = 30, duration = 1, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const childrenToAnimate = el.children;

    gsap.fromTo(
      childrenToAnimate,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [stagger, y, duration, delay]);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollReveal;
