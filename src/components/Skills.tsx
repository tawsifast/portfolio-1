'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { EASE_ENTRANCE, prefersReducedMotion } from '@/lib/motion';

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

const SkillBar = ({ level }: { level: string }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const target = parseFloat(level);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    const proxy = { v: 0 };
    const tween = gsap.to(proxy, {
      v: target,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: barRef.current,
        start: "top 95%",
      },
      onUpdate: () => setValue(proxy.v),
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target]);

  return (
    <div ref={barRef} className="w-full">
      <Progress value={value} className="bg-surface-container-highest h-1.5 rounded-full" />
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: EASE_ENTRANCE,
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
      <Card className="glass-card rounded-[2rem] p-10 md:p-16 flex flex-col items-center gap-12 relative overflow-hidden border-0 shadow-none bg-transparent">
        {/* Sapphire Background Glow */}
        <div className="orbital-glow"></div>
        
        <div className="text-center space-y-4 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface">My <span className="gradient-text">Skills</span></h2>
          <p className="text-outline text-base md:text-lg max-w-2xl mx-auto">
            A collection of tools and technologies I use to bring digital ideas to life.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 z-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
            >
              <Card className="skill-card glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-primary/40 transition-all duration-300 group border-0 shadow-none bg-transparent">
                <div className="w-13 h-13 flex items-center justify-center rounded-xl bg-white/5 p-3 group-hover:scale-110 transition-transform">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain filter brightness-110"
                  />
                </div>
                <h3 className="text-on-surface font-semibold text-sm">{skill.name}</h3>
                <SkillBar level={skill.level} />
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Skills;
