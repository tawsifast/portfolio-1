'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Education', href: '/#education' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header ref={headerRef} className="w-full py-4 md:py-6 px-6 md:px-8 sticky top-0 z-50 glass-card !bg-background-custom/40 border-b border-white/5">
      <div className="flex items-center justify-between">
        {/* Left: Profile Avatar */}
        <div className="flex items-center">
          <Link href="/#hero" className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 profile-glow block">
            <img
              alt="Tawsif Profile"
              className="w-full h-full object-cover"
              src="/userImage.png"
            />
          </Link>
        </div>
        
        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-outline font-medium text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-primary hover:scale-105 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden md:block bg-secondary-container text-secondary-fixed font-bold px-6 py-2 rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all border border-secondary-fixed/20 active:scale-95 text-sm">
            Hire me
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium py-2 hover:text-primary transition-colors border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact"
            className="bg-primary text-on-primary font-bold px-6 py-3 rounded-xl text-center w-full mt-4 active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
