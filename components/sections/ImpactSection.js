'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ImpactSection.module.css';

const ImpactSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            }
        });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
            .fromTo(cardsRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
                '-=0.4'
            );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const impacts = [
        {
            title: '500+ Years of Legacy',
            description: 'An ancient craft from the heart of Kutch, preserved for centuries.'
        },
        {
            title: '100% Hand-Stitched',
            description: "No mass production. Every 'phool' and 'stitch' is made by hand."
        },
        {
            title: 'Slow Fashion',
            description: 'One artisan spends an entire day to create your unique masterpiece.'
        }
    ];

    return (
        <section ref={sectionRef} className={styles.impactWrapper}>
            <div className={styles.container}>
                <div ref={titleRef} className={styles.titleContainer}>
                    <div className={styles.eyebrowLine}></div>
                    <h2 className={styles.headline}>Hand Crafted in India</h2>
                    <div className={styles.eyebrowLine}></div>
                </div>

                <div className={styles.grid}>
                    {impacts.map((impact, idx) => (
                        <div
                            key={idx}
                            className={styles.card}
                            ref={el => cardsRef.current[idx] = el}
                        >
                            <div className={styles.cardIcon}>✦</div>
                            <h3 className={styles.cardTitle}>{impact.title}</h3>
                            <p className={styles.cardDescription}>{impact.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
