'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const showAnim = gsap.from(header, {
      yPercent: -100,
      paused: true,
      duration: 0.4,
      ease: 'power3.out'
    }).progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });
  }, []);

  return (
    <header ref={headerRef} className="w-full py-6 px-8 flex items-center justify-between sticky top-0 z-50 glass-card !bg-background-custom/40">
      {/* Left: Profile Avatar */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 profile-glow">
          <img
            alt="Meriem Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88b2R1SIL4g826wTBY4QTYgRYkwJ1XHHfCdqY_DaBANtfg8CgrsfdoYlP5jusXnLMfo-rlJI-jgRoy8eKAHEWsUxwKRpGL2qBaBJ3x42x50HWg20nNC7Wjo8lab7BefcaSsp6qKnSQG4gRiWuBMdATe2PqwfJllUUAcueTKYXYiTmejndoWrkDvbWvjoiKruLfaGcFVOoythHj49q1txW8uCDN0dibrvHTmPEEshzaEX3ACYSpl6uAx4hMH2YTpg8-xYrDrAWMq4d"
          />
        </div>
      </div>
      {/* Center: Navigation Icons */}
      <nav className="hidden md:flex items-center space-x-10 text-outline">
        <a className="hover:text-primary transition-all hover:scale-110 active:scale-95" href="#hero" title="Portfolio">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h2a3 3 0 0 1 6 0h2a5 5 0 0 0-10 0z"></path>
          </svg>
        </a>
        <a className="hover:text-primary transition-all hover:scale-110 active:scale-95" href="#projects" title="Work">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4z"></path>
          </svg>
        </a>
        <a className="hover:text-primary transition-all hover:scale-110 active:scale-95" href="#contact" title="Contact">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
        </a>
      </nav>
      {/* Right: Hire Me Button */}
      <button className="bg-secondary-container text-secondary-fixed font-bold px-6 py-2 rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all border border-secondary-fixed/20 active:scale-95">
        Hire me
      </button>
    </header>
  );
};

export default Navbar;
