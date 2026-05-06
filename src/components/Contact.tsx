'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Contact = () => {
  const inputVariants: Variants = {
    focus: {
      scale: 1.01,
      borderColor: "rgba(142, 213, 255, 0.5)",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="px-8 md:px-20 max-w-7xl mx-auto py-20" id="contact">
      <div className="glass-card rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-on-surface uppercase"
        >
          Let’s Work Together
          
        </motion.h2>
        <motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="text-outline max-w-xl text-center"
>
  I’m available for freelance work and open to new opportunities. 
  Let’s build something amazing together.
</motion.p>
        <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase tracking-widest text-outline ml-2">Your name</label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-on-surface focus:outline-none transition-colors"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase tracking-widest text-outline ml-2">Project type </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-on-surface focus:outline-none transition-colors"
              placeholder="Interest"
              type="text"
            />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase tracking-widest text-outline ml-2">Message</label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-on-surface focus:outline-none transition-colors"
              placeholder="Message"
              type="text"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="tag-pill py-3.5 rounded-xl text-white font-bold tracking-widest text-sm hover:brightness-110 transition-all" 
            type="submit"
          >
           LET'S TALK
          </motion.button>
        </form>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 text-outline text-base border-t border-white/5 w-full justify-center">
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            +92-456-470-13
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            Defense Phase 3, Lahore Pakistan
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            videoeditor@gmail.com
          </div>
        </div>
        <a className="fixed right-8 bottom-8 md:bottom-20 rotate-90 text-outline text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors origin-right transform" href="#hero">
          Go Back To The Top <span className="bg-primary/20 p-1 rounded-full rotate-[-90deg]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 10l7-7 7 7M12 3v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
