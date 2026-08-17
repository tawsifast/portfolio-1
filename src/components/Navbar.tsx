'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { MenuIcon } from '@/components/colorful-icons';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

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
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      }
    });
  }, []);

  return (
    <header ref={headerRef} className="w-full py-4 md:py-6 px-6 md:px-8 sticky top-0 z-50 glass-card !bg-background-custom/40 border-b border-white/5">
      <div className="flex items-center justify-between">
        {/* Left: Profile Avatar */}
        <div className="flex items-center">
          <Link href="/#hero" className="block">
            <Avatar className="w-12 h-12 border-2 border-primary/50 profile-glow">
              <AvatarImage src="/userImage.png" alt="Tawsif Profile" />
              <AvatarFallback className="bg-primary/10 text-primary">T</AvatarFallback>
            </Avatar>
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
          <Button
            asChild
            className="hidden md:inline-flex bg-secondary-container text-secondary-fixed font-bold px-6 rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all border border-secondary-fixed/20 active:scale-95 text-sm"
          >
            <Link href="/#contact">Hire me</Link>
          </Button>
          
          {/* Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10 hover:text-white"
                aria-label="Toggle mobile menu"
              >
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card !bg-background-custom/95 border-white/10 w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-2 pt-10">
                {navLinks.map((link) => (
                  <SheetClose key={link.name} asChild>
                    <Link
                      href={link.href}
                      className="text-white text-lg font-medium py-2 px-3 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <Separator className="bg-white/10 my-4" />
              <SheetClose asChild>
                <Button
                  asChild
                  className="bg-primary text-on-primary font-bold px-6 rounded-xl text-center w-full active:scale-95 hover:bg-primary/90"
                >
                  <Link href="/#contact">
                    Hire me
                  </Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
