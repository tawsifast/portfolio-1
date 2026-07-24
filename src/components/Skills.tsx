'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", level: "85%" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", level: "90%" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", level: "90%" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", level: "85%" },
  { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", level: "85%" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", level: "80%" },
  { name: "JavaScript(ES6)", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", level: "92%" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", level: "95%" },
  { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", level: "98%" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", level: "95%" },
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", level: "88%" },
  { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", level: "80%" },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bars using GSAP ScrollTrigger
      const bars = gridRef.current?.querySelectorAll('.skill-progress');
      bars?.forEach((bar) => {
        const targetWidth = (bar as HTMLElement).dataset.width;
        gsap.to(bar, {
          width: targetWidth,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 95%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      borderColor: "rgba(142, 213, 255, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section ref={sectionRef} className="px-8 md:px-20 max-w-7xl mx-auto" id="skills">
      <div className="glass-card rounded-[2rem] p-10 md:p-16 flex flex-col items-center gap-12 relative overflow-hidden">
        {/* Sapphire Background Glow */}
        <div className="orbital-glow"></div>
        
        <div className="text-center space-y-4 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface">My <span className="gradient-text">Skills</span></h2>
          <p className="text-outline text-base md:text-lg max-w-2xl mx-auto">
            A collection of tools and technologies I use to bring digital ideas to life.
          </p>
        </div>

        <div ref={gridRef} className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 z-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              className="skill-card glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-13 h-13 flex items-center justify-center rounded-xl bg-white/5 p-3 group-hover:scale-110 transition-transform">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <h3 className="text-on-surface font-semibold text-sm">{skill.name}</h3>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                <div 
                  className="skill-progress bg-primary h-1.5 rounded-full" 
                  style={{ width: "0%" }}
                  data-width={skill.level}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
