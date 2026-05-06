'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgContainerRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="px-8 md:px-20 max-w-7xl mx-auto" id="hero">
      <div className="glass-card rounded-[2rem] p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative overflow-hidden">
        <motion.div 
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-on-surface">
            Hi, I'm Tawsif
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold gradient-text mb-6">
            Frontend Developer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-outline text-lg max-w-md mb-10">
            I build modern, responsive, and interactive web applications using React and Next.js. I focus on clean UI, smooth animations, and great user experience.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="electric-blue-btn px-8 py-3 rounded-xl flex items-center space-x-2 font-semibold active:scale-95">
              <span>Download Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            <div className="flex items-center space-x-4 text-outline-variant">
              <a className="hover:text-primary transition-all hover:scale-110 active:scale-95" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 12.3 24 12c0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a className="hover:text-primary transition-all hover:scale-110 active:scale-95" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
        {/* Hero Image Visual */}
        <div ref={imgContainerRef} className="relative flex flex-col items-center justify-center z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 profile-glow mb-6"
          >
            <img
              alt="Meriem Developer Portrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugGXzDVD4NkpL1AEpjkINUOVT9hDyqrONPpcBScBvYP6sN2k24krIGkuQeZSUy0uf5AVHKRcQnDIqs0dJUAMBdTizQi95lFYRvgV7tYAPpN_GTBorXk7v-sJCB4nRVS_0KbcnVlrrkxRBp9YI62_WeG4f8EeCjOIhVxwxS820SNWGtWTWWYxIadT02UNOjM_X-0WrXJ4Z4J2bg-p9UJF86RkZ5sV-VLHRDTMMUY5D4i7Bdj564GdbdS4YhBm9fq0toKD-nzKC_1FQ"
            />
          </motion.div>
          {/* Tech Icon Tray */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="glass-tray rounded-2xl px-6 py-3 flex items-center gap-6"
          >
            <img alt="Node" className="w-8 h-8 opacity-80 hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJAYvo3arZb0LxyGFeJsnApUwx-X9QLlVjfP58M_h6Nu8GyskgSUnHIbUQiR28J49mNgWUWwDVDQBER0Biadk_7Tq-FLeiTgltop_9F4NCtLaah2tQps_nmGChy9qVJtjjDsg6h6TxfwMxwrs6JOCE8iHZTtz9lb0VPYGAJInlATaNUOzBVDw7StIXUmxQCpk5Ghw-JrhninFXTDqY_9SX9wlxOG0GZykYQp6lgqEkTYrSBTojFMUZe0E4GIsKskXBZjoZqoa2VCUJ" />
            <img alt="HTML5" className="w-8 h-8 opacity-80 hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB215YwfriP5BmZeH7pDAoYYrCoQbvsXRa-dHFvFq6oLmP99pCH-R3RmZaV1gtxQzppa1OYywDKAaNPtL6j2w-nzj8Y69OVz1I3QY36uColdrReawSQTDeT-wP6iIqUlbdMO2rlo9wYM_vrbhyTyLmlKyoRCdpHX2o5_Gxh7BV95do6PJk52jiGUKTuskiW1_R7hnDQI-iZQH3nLyXmvN2w_OZfUQcB8GfTJopj_iSKwHMExWyt14QayUChqIc_ksIb9Pc3uXkyobEp" />
            <img alt="React" className="w-8 h-8 opacity-80 hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjbVWTMEZXVb-jqHawS2f-zRCVlJttOBS0wJq2sWi7pyocsXCADKVnJEMxwP2I7s3bfxkr68tdlCWyyCUBsnudoVes00EX29gnIG-SgqTypiWpIDtaTyYXJ0hK13U3kUEBCDBeqzM7sL3vGQNc1IgdfyMOdIY5lE285txDVZJaCJ6nvxe_RoLNNNTuy-QAEbiK649eiFn5LC4ofHO0HFc6HcXGTCyuSAKATpGxt5vKiatDDAcU2QOjuqfc1y1QVoX4SvuniboBy92l" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
