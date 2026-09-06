"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

const projectList = [
  {
    slug: "blayu-mobile",
    title: "Blayu Mobile",
    description: "Football academy management & young athlete curriculum tracking application.",
    image: "/images/project-blayu-mobile-flutter-tracking.png",
    tags: ["Flutter", "Football Academy", "Firebase"],
    github: "https://github.com/silkiy",
  },
  {
    slug: "absensi-rsd",
    title: "Absensi RSUD Mangusada Bali",
    description: "High-reliability mobile attendance system with on-device face recognition & geofencing for RSUD Mangusada Bali.",
    image: "/images/project-absensi-rsd-face-recognition.png",
    tags: ["Flutter", "Face Recognition", "Geofencing"],
    github: "https://github.com/silkiy",
  },
  {
    slug: "mit-profiling",
    title: "MIT Profiling",
    description: "LinkedIn-style professional talent profiling platform for corporate talent directory & capability portfolio.",
    image: "/images/project-mit-profiling-backend-api.png",
    tags: ["Node.js", "Express", "TypeScript", "Talent Platform"],
    github: "https://github.com/silkiy",
  },
  {
    slug: "token-vendor",
    title: "Token Vendor",
    description: "Smart contract-based automated token vending machine suite on the Ethereum blockchain.",
    image: "/images/project-token-vendor-smart-contract.png",
    tags: ["Solidity", "Hardhat", "Ethereum"],
    github: "https://github.com/silkiy",
  },
  {
    slug: "simple-nft",
    title: "Simple NFT",
    description: "Gas-optimized ERC-721 smart contract on Ethereum with decentralized IPFS metadata storage.",
    image: "/images/project-simple-nft-ethereum-erc721.png",
    tags: ["Solidity", "ERC-721", "Ethereum"],
    github: "https://github.com/silkiy",
  },
  {
    slug: "maypi-platform",
    title: "MaYPI Platform",
    description: "Web platform for digital water meter reading, telemetry tracking, and consumption analytics.",
    image: "/images/project-maypi-platform-meter-analysis.jpeg",
    tags: ["React.js", "Node.js", "Water Metering"],
    github: "https://github.com/silkiy",
  },
  {
    slug: "tani-cerdas",
    title: "Tani Cerdas",
    description: "Empowering farmers and agricultural cooperatives to manage agricultural data digitally to improve productivity and welfare.",
    image: "/images/project-tani-cerdas-agricultural-nextjs.png",
    tags: ["Next.js", "MongoDB", "AgriTech"],
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
            SYS.LOG // PROJECTS &amp; PROTOCOLS
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
              onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
              tabIndex={0}
              className="group border-b border-border/30 hover:border-foreground/50 focus:border-foreground/50 focus:outline-none py-10 sm:py-12 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 relative cursor-crosshair"
            >
              {/* Text Area */}
              <div className="z-10 relative flex-1 min-w-0 pointer-events-none md:pointer-events-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-black tracking-tighter uppercase text-foreground/60 group-hover:text-foreground group-focus:text-foreground transition-colors duration-500 break-words">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-foreground/75 mt-2 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono border border-border/50 bg-background/50 px-2 py-0.5 text-foreground/70 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="z-10 flex items-center gap-3 shrink-0 self-start md:self-center opacity-100 md:opacity-0 md:-translate-x-3 md:group-hover:opacity-100 md:group-focus:opacity-100 md:group-hover:translate-x-0 md:group-focus:translate-x-0 transition-all duration-300">
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 border border-border/80 bg-background/90 hover:bg-foreground hover:text-background text-xs font-mono font-bold uppercase tracking-wider text-foreground transition-colors inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-foreground focus:outline-none"
                >
                  Case Study <FaExternalLinkAlt className="w-3 h-3" />
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 border border-border/80 bg-background/90 hover:bg-foreground hover:text-background transition-colors inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-foreground focus:outline-none"
                  >
                    <FaGithub className="w-4 h-4" />
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
                    className="absolute right-[5%] md:right-[20%] top-1/2 -translate-y-1/2 z-0 pointer-events-none"
                  >
                    <div className="w-[150px] h-[100px] md:w-[300px] md:h-[200px] relative border border-border/50 bg-background overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`Wildan Silki Project - ${project.title} (${project.description})`}
                        fill
                        sizes="(max-width: 1024px) 150px, 300px"
                        className="object-cover"
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
