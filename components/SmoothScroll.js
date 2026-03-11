'use client';
import { useEffect, useRef } from 'react';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1, // Smoother interpolation
        multiplier: 1.0, // Natural scroll speed
        touchMultiplier: 3.0,
        tablet: { smooth: true },
        smartphone: { smooth: false },
      });

      // Update scroll when height changes
      new ResizeObserver(() => scroll.update()).observe(scrollRef.current);
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
