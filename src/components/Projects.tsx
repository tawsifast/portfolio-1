"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Card } from "./ui/card";
import { EASE_ENTRANCE, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

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
        ease: EASE_ENTRANCE,
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

  const filteredProjects = projects;

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
      </div>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            className="h-full"
          >
            <Card className="project-card rounded-2xl p-6 shrink-0 flex flex-col h-full border-0 shadow-none bg-transparent group">
              <ProjectCard project={project} />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
