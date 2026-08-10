"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

const projectList = [
  {
    title: "Blayu Mobile",
    description: "Academic data & location tracking using Flutter.",
    image: "/images/p1.png",
    tags: ["Flutter", "Firebase"],
    github: "https://github.com/silkiy",
  },
  {
    title: "Absensi RSD",
    description: "Face recognition & location tracking.",
    image: "/images/p2.png",
    tags: ["Flutter", "Face Recognition"],
    github: "https://github.com/silkiy",
  },
  {
    title: "MIT Profiling",
    description: "Scalable backend & RESTful APIs.",
    image: "/images/p3.png",
    tags: ["Node.js", "Express", "TypeScript"],
    github: "https://github.com/silkiy",
  },
  {
    title: "Token Vendor",
    description: "Smart contract-based token vendor.",
    image: "/images/p5.png",
    tags: ["Solidity", "Hardhat", "Ethereum"],
    github: "https://github.com/silkiy",
  },
  {
    title: "Simple NFT",
    description: "NFT smart contract on Ethereum.",
    image: "/images/p6.png",
    tags: ["Solidity", "ERC-721"],
    github: "https://github.com/silkiy",
  },
  {
    title: "MaYPI Platform",
    description: "Platform for meter reading & analysis.",
    image: "/images/p7.jpeg",
    tags: ["React.js", "Node.js"],
    github: "https://github.com/silkiy",
  },
  {
    title: "Tani Cerdas",
    description: "Agricultural platform using Next.js and MongoDB.",
    image: "/images/p8.png",
    tags: ["Next.js", "MongoDB"],
    github: "https://github.com/silkiy",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50 relative bg-background"
      aria-label="Recent Projects Showcase"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 border-b border-border/50 pb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-foreground tracking-tighter uppercase">
            Projects
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-2 tracking-widest uppercase">
            SYS.LOG // PROJECTS & PROTOCOLS
          </p>
        </motion.div>

        <div className="flex flex-col relative" onMouseLeave={() => setHoveredIndex(null)}>
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="group border-b border-border/30 hover:border-foreground/50 py-12 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between relative cursor-crosshair"
            >
              {/* Text Area */}
              <div className="z-10 relative pointer-events-none md:pointer-events-auto">
                <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-mono font-black tracking-tighter uppercase text-foreground/50 group-hover:text-foreground transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <p className="text-sm font-mono text-foreground/70 hidden sm:block">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono border border-border/50 px-2 py-0.5 rounded-none text-foreground/70 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="z-10 mt-4 md:mt-0 flex gap-4 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Hover Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute right-[20%] top-1/2 -translate-y-1/2 z-0 hidden lg:block pointer-events-none mix-blend-luminosity"
                  >
                    <div className="w-[300px] h-[200px] relative border border-border/50 bg-background overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className="object-cover grayscale opacity-80"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
