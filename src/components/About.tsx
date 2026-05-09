'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

      gsap.from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 md:px-20 max-w-7xl mx-auto" id="about">
      <div className="glass-card rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        {/* Left: Image Visual */}
        <div ref={leftRef} className="flex-1 flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-2 border-primary/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 mb-8">
            <img
              alt="Developer Bio Image"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWXoHzykHTTooJ51bH21ItbGZrvUzysCIulZxCQhYujqV4CO2vj2clx4DCnRN5Gr_vCDx7gZGSSZaefyhyZSey32OCO1vHI7lm-zWMS94CfB0feLnMJUAqHhL3RU9xNbRDd6gc5V7mpDXSOhJzsJ0jQBSPzOhxHeCKDVjzKFN8zpenEMxiyaRmMUCr243V1aRK7SCj2hQ8-6jDjBZkG28GUnWJzOQW8hXzxlsSGXiaz6u51Llkpxab17eW9xllXGCfkatkJulBpJW"
            />
          </div>
          {/* Tech Icon Tray */}
          <div className="glass-tray rounded-2xl px-6 py-3 flex items-center gap-6">
            <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">JS</span>
            <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">HTML5</span>
            <img
              alt="React"
              className="w-6 h-6 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv99JRzqE-0YJXdFyy-nOapezSpkKgtYIW7bM-frGPog5F481slrAn1swIJN4NbSbV-G0g1jKhZBdg30ixQgdGRXXoxBpkcbSQzY6YoS7t9uGB2UnSojED_mZDbpFv4KHbT7dXxowMoD0gJDvldGKQvnBo2XHKChsatGi7jPoDi33zh2r41F6p-cHl145U0BlNjQWJ7b1iO1ITPQqXpmxww8VhRCjQBZr39odOuo98nmmQ85W0KhhE2K666R2p0n9AfNOA7m_vze3E"
            />
            <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">CSS3</span>
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
           I’m a passionate Frontend Developer focused on building modern, responsive, and interactive web experiences using React, Next.js, and Tailwind CSS.

Currently pursuing a B.Sc (Honours) in Mathematics, I enjoy combining analytical thinking with creative UI development to build clean and user-friendly applications.

            </p>
            <ul>
                <li>✔ Frontend Developer (React / Next.js)</li>
                <li>✔ Focused on UI/UX & Animations</li>
                <li>✔ Learning Full Stack Development</li>
                <li>✔ Open for freelance & internships</li>
            </ul>
          
          </div>
          <button className="electric-blue-btn px-8 py-3 rounded-xl flex items-center space-x-2 font-semibold mt-4 active:scale-95">
            <span>View Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
