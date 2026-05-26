'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orbital glow parallax
      gsap.to(".orbital-glow", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      title: "Ecommerce Platform",
      desc: "A clean, focused checkout UI for an ecommerce platform. Designed to reduce friction and maximize conversions through clear layout, validation, and trust building elements.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0F8lc7ivQP-1tJi4pVnKKkuBC0RQUDd_7SGHDkFvy8vjutVSrpFH5Hy-pWWQQFX16OyK9cKejsQH99l_1SRtQtluh3N7tPyoAJ4oSpsH-RuGlX990cVF5if6-f4WM4mJhldlhaR9MsarinvawQ7vv2Souph8_m4TYsjsXTKYs6vvJBSeiIRafItQ7yu1bAugqc40Grn7OVruy-viBqX-AetzzPKGgGIrLFkzyWJEd95UKEpblx8jnjbfo4UL5nVjGwtJSlTAzAW6-",
      repo: "https://github.com/tawsifast/Assignment-8",
      demo: "https://assignment-8-mu-rust.vercel.app/"
    },
    {
      title: "Clinic Management",
      desc: "Clinic management dashboard built for clarity and efficiency. Prioritizes quick access to patient data, appointment stats, and admin tools with a clear layout and visual hierarchy.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKOpS7SnU8cKdrhnf3OpKmfCFjW-4TjO7KyyMBr0sVmA0GzinLBuP0Q-ZgBvXB3yhcUhkWOeA0v_OhXkHq6JW4wMMMRxZ8wP3hSq1HS-RFmExvwLUZhg8yvHbOdupamQ2gImL6PIWKdYPlo2elOOUTLrMlJNRTUZ3LpENqUjWAqJIOQSDZSMwEop56Hf_E6PLsVsvJuLfma2h-YltAzqvj4J8qhxB-BkA4RgVltOiRc5xywRcXS-E_ao83WcOmqiUr3BmLTg2LUDj7",
      repo: "https://github.com/tawsifast/pisgen-server",
      demo: "https://pisgen-server.vercel.app/"
    },
    {
      title: "Corporate Website",
      desc: "Corporate website for an Alperton agri-level distributor, focused on establishing through clear structure, strong visuals, and intuitive navigation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAozGEExXhKvtna6ULS4rH58JPyIgTv17h1PZnV8ypB7XHe9SOhuUKkyZSKPmuQtyYCRLlIuIFUyKMOYizSKeZUi3KKjeNUlb9NGgHB4g0WbbvT2x54C1gXJaxlXa8Elsnp4Eo0EXEKwB8YyqAzqz8ZVF5q8bSbDG4j7DiJtWgsSIiC3Ye1e3OFMZWU1PCiJIGb4sTU6sOhcdyFn4MP3ZiSCBMJ34M5Yu5uvYtPQBWEMfxM8A1qJbOiQwvQnW9T7e9EQa5knW7zVn3S",
      repo: "github.com/tawsifast/Assignment-9-client",
      demo: "https://assignment-9-client-zeta.vercel.app"
    }

  ];

  return (
    <section ref={sectionRef} className="px-8 md:px-20 max-w-7xl mx-auto space-y-12" id="projects">
      <div className="text-center space-y-4 relative py-12">
        <div className="orbital-glow"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-on-surface">My <span className="gradient-text">Projects</span></h2>
        <div className="flex justify-center gap-4 mt-6">
          <button className="tag-pill px-6 py-2 rounded-full text-white text-sm font-medium hover:brightness-110 transition-all">Web Application</button>
          <button className="border border-white/10 px-6 py-2 rounded-full text-outline text-sm font-medium hover:bg-white/5 transition-colors">Mobile Application</button>
        </div>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            className="project-card rounded-2xl p-6 space-y-6 cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-high border border-white/10">
              <img
                alt={project.title}
                className="w-full h-full object-cover"
                src={project.img}
              />
            </div>
            <div className="space-y-3">
              <p className="text-base text-outline leading-snug">
                {project.desc}
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a
                  className="text-white hover:text-primary flex items-center gap-2 text-sm"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="p-1 rounded-full border border-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 12.3 24 12c0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </span>
                  Repository
                </a>
                <a
                  className="tag-pill px-4 py-1.5 rounded-full text-white text-xs flex items-center gap-2"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <span className="bg-white/20 rounded-full p-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
