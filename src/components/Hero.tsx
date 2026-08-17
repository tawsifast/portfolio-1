'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DownloadIcon } from '@/components/colorful-icons';
import { GithubIcon, LinkedinIcon } from '@/components/social-icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
      <Card className="glass-card rounded-[2rem] p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative overflow-hidden border-0 shadow-none bg-transparent">
        <motion.div 
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-on-surface">
            Hi, I&apos;m Tawsif
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold gradient-text mb-6">
            MERN Stack Developer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-outline text-lg max-w-md mb-10">
            I build modern, responsive, and interactive web applications using React and Next.js. I focus on clean UI, smooth animations, and great user experience.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button
              asChild
              className="electric-blue-btn px-8 py-3 rounded-xl flex items-center gap-2 font-semibold active:scale-95 h-auto"
            >
              <a
                href="https://drive.google.com/file/d/17I1BjNsV_zv22glnUboTMWqOCZ3Tnwtl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <DownloadIcon className="w-5 h-5" />
              </a>
            </Button>
            <div className="flex items-center space-x-4 text-outline-variant">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      className="hover:text-primary transition-all hover:scale-110 active:scale-95" 
                      href="https://github.com/tawsifast"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-6 h-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      className="hover:text-primary transition-all hover:scale-110 active:scale-95" 
                      href="https://www.linkedin.com/in/tawsif-islam"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
            <Image
              src="/userImage.png"
              alt="Tawsif - Frontend Developer Portrait"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
          {/* Tech Icon Tray */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="glass-tray rounded-2xl px-6 py-3 flex items-center gap-6"
          >
            <Image width={32} height={32} alt="React" className="w-8 h-8 opacity-60 brightness-75 hover:scale-110 transition-all hover:opacity-100 hover:brightness-100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <Image width={32} height={32} alt="Node.js" className="w-8 h-8 opacity-60 brightness-75 hover:scale-110 transition-all hover:opacity-100 hover:brightness-100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            <Image width={32} height={32} alt="TypeScript" className="w-8 h-8 opacity-60 brightness-75 hover:scale-110 transition-all hover:opacity-100 hover:brightness-100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          </motion.div>
        </div>
      </Card>
    </section>
  );
};

export default Hero;
