'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckIcon, FileTextIcon } from '@/components/colorful-icons';
import { prefersReducedMotion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        }
      });

      gsap.from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 md:px-20 max-w-7xl mx-auto" id="about">
      <Card className="glass-card rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden border-0 shadow-none bg-transparent">
        {/* Left: Image Visual */}
        <div ref={leftRef} className="flex-1 flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-2 border-primary/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 mb-8">
            <Image
              alt="Developer Bio Image"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/ghibliImage.png"
              width={320}
              height={320}
            />
          </div>
          {/* Tech Icon Tray */}
          <div className="glass-tray rounded-2xl px-6 py-3 flex items-center gap-6">
            <Badge className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded hover:bg-primary/10">JS</Badge>
            <Badge className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded hover:bg-primary/10">HTML5</Badge>
            <Image
              alt="React"
              className="w-6 h-6 opacity-80"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              width={24}
              height={24}
            />
            <Badge className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded hover:bg-primary/10">CSS3</Badge>
          </div>
        </div>
        {/* Right: Text Content */}
        <div ref={rightRef} className="flex-1 space-y-6">
          <div className="space-y-2">
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">My Bio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface">About <span className="gradient-text">me.</span></h2>
          </div>
          <div className="space-y-4 text-outline-variant leading-relaxed text-white/50 md:text-lg">

           <p>
  I'm a MERN Stack Developer with experience building modern web applications using React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.

Through real-world projects, I've developed skills in responsive UI development, REST API integration, authentication, and scalable application architecture.

I enjoy solving problems, learning new technologies, and building applications that prioritize performance, usability, and clean code.
</p>

<ul>
  <li className="flex items-center gap-2">
    <CheckIcon className="w-4 h-4" />
    MERN Stack Developer
  </li>

  <li className="flex items-center gap-2">
    <CheckIcon className="w-4 h-4" />
    Responsive & User-Centered Development
  </li>

  <li className="flex items-center gap-2">
    <CheckIcon className="w-4 h-4" />
    REST API & Authentication Integration
  </li>

  <li className="flex items-center gap-2">
    <CheckIcon className="w-4 h-4" />
    Clean, Scalable & Maintainable Code
  </li>
</ul>

          </div>
          <Button
            asChild
            className="electric-blue-btn px-8 py-3 rounded-xl inline-flex items-center space-x-2 font-semibold mt-4 active:scale-[0.98] h-auto"
          >
            <a
              href="https://drive.google.com/file/d/17I1BjNsV_zv22glnUboTMWqOCZ3Tnwtl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Resume</span>
              <FileTextIcon className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default About;
