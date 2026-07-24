"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orbital glow parallax
      gsap.to(".orbital-glow", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="px-8 md:px-20 max-w-7xl mx-auto space-y-12"
      id="projects"
    >
      <div className="text-center space-y-4 relative py-12">
        <div className="orbital-glow"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-on-surface">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="flex justify-center gap-4 mt-6">
          <button className="tag-pill px-6 py-2 rounded-full text-white text-sm font-medium hover:brightness-110 transition-all">
            Web Application
          </button>
          <button className="border border-white/10 px-6 py-2 rounded-full text-outline text-sm font-medium hover:bg-white/5 transition-colors">
            Mobile Application
          </button>
        </div>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            className="project-card rounded-2xl p-6 shrink-0 flex flex-col h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
