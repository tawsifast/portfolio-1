import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
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
            <p className="flex gap-3"><span>📞</span> +88 01403794140</p>
            <p className="flex gap-3"><span>📧</span> 0070tawsif@gmail.com</p>
            <p className="flex gap-3"><span>📍</span> Ctg college, chawkbazar, Chattagram, Bangladesh </p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-700 transition-colors">
              <span>📩</span> SEND A MESSAGE
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Our Services</h4>
          <ul className="space-y-3 text-outline text-base">
            <li><a className="hover:text-primary transition-colors" href="#">Website Development</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Creative Designing</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Animation</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">3D Product</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Social Media Marketing</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">SEO</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Popular Tags</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Mobile</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Development</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Technology</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">App</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Education</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Business</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Health</span>
            <span className="px-3 py-1 border border-white/10 rounded-md text-outline text-xs cursor-default hover:border-primary/50 hover:text-primary transition-all">Industry</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/5 text-center text-outline text-[10px] uppercase tracking-widest">
        <p>© 2026 Tawsif Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
