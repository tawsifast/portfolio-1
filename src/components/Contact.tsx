'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon, PhoneIcon, MapPinIcon, MailIcon, ChevronUpIcon } from '@/components/colorful-icons';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', projectType: '', message: '' });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section className="px-8 md:px-20 max-w-7xl mx-auto py-10" id="contact">
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col items-center text-center space-y-6 shadow-none">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-on-surface uppercase"
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
        <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-outline ml-2">Your name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                type="text"
                className="h-11 px-4 rounded-xl bg-white/5 border border-primary/10 text-on-surface placeholder:text-outline/60 focus:bg-white/[0.08]"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="projectType" className="text-[10px] uppercase tracking-widest text-outline ml-2">Project type</Label>
              <Input
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Interest"
                type="text"
                className="h-11 px-4 rounded-xl bg-white/5 border border-primary/10 text-on-surface placeholder:text-outline/60 focus:bg-white/[0.08]"
              />
            </div>
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-outline ml-2">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={3}
              className="min-h-20 px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-on-surface placeholder:text-outline/60 focus:bg-white/[0.08]"
            />
          </div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="tag-pill py-3 rounded-xl text-white font-bold tracking-widest text-sm hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed h-auto w-full md:w-auto md:self-end md:px-8 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? 'SENDING...' : "LET'S TALK"}
            {status !== 'loading' && <MessageCircleIcon className="w-4 h-4" />}
          </Button>
        </form>
        <Separator className="bg-white/5" />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-outline text-sm justify-center">
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <PhoneIcon className="w-4 h-4" />
            </span>
            +88 01403794140
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <MapPinIcon className="w-4 h-4" />
            </span>
            Chawkbazar, Chattagram, Bangladesh
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <MailIcon className="w-4 h-4" />
            </span>
            tawsifislam0070@gmail.com
          </div>
        </div>
        <a className="fixed right-8 bottom-8 md:bottom-20 rotate-90 text-outline text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors origin-right transform" href="#hero">
          Go Back To The Top <span className="bg-primary/20 p-1 rounded-full rotate-[-90deg]">
            <ChevronUpIcon className="w-4 h-4" />
          </span>
        </a>
      </Card>
    </section>
  );
};

export default Contact;
