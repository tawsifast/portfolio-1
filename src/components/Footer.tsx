import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from '@/components/colorful-icons';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const services = [
  "Website Development",
  "Creative Designing",
  "Animation",
  "3D Product",
  "Social Media Marketing",
  "SEO",
];

const popularTags = [
  "Mobile",
  "Development",
  "Technology",
  "App",
  "Education",
  "Business",
  "Health",
  "Industry",
];

const Footer = () => {
  return (
    <footer className="px-8 md:px-20 max-w-7xl mx-auto mb-10">
      <Card className="glass-card rounded-[2rem] p-10 md:p-16 border-0 shadow-none bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-on-primary font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">HB<span className="text-primary">G</span></span>
            </div>
            <p className="text-outline text-base">Creating digital excellence through modern engineering and creative design solutions.</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Get in Touch</h4>
            <div className="space-y-4 text-outline text-base">
              <p className="flex gap-3 items-center"><PhoneIcon className="w-4 h-4" /> +88 01403794140</p>
              <p className="flex gap-3 items-center"><MailIcon className="w-4 h-4" /> tawsifislam0070@gmail.com</p>
              <p className="flex gap-3 items-center"><MapPinIcon className="w-4 h-4" />  Chattagram, Bangladesh</p>
              <Button
                asChild
                className="electric-blue-btn px-8 py-3 rounded-xl inline-flex items-center space-x-2 font-semibold mt-4 active:scale-[0.98] h-auto"
              >
                <Link href="/#contact">
                  <SendIcon className="w-4 h-4" />
                  SEND A MESSAGE
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Our Services</h4>
            <ul className="space-y-3 text-outline text-base">
              {services.map((service) => (
                <li key={service}>
                  <a className="hover:text-primary transition-colors" href="#contact">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <Separator className="bg-white/10 mt-16 mb-8" />
        <div className="text-center text-outline text-[10px] uppercase tracking-widest">
          <p>© 2026 Tawsif Portfolio. All rights reserved.</p>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
