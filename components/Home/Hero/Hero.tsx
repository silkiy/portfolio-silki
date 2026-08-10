"use client";

import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SplineBackground = dynamic(() => import("../../3d/SplineBackground"), { ssr: false });

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col pt-20"
      aria-label="Introduction Section"
    >
      <SplineBackground />
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 mt-16 w-full">
        {/* Anti-slop Profile Container: No pulsing borders or colored shadows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-1 border border-border/50 bg-background/50 backdrop-blur-sm"
        >
          <Image
            src="/images/profile.jpeg"
            alt="Wildan Silki Sawabiqil Abroor - Software Engineer Profile Picture"
            width={160}
            height={160}
            priority
            className="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] object-cover border border-border/50 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* SEO Heading: Strict Monospace Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-8xl mt-12 px-4 text-center font-mono font-black tracking-tighter uppercase leading-none text-foreground"
        >
          WILDAN SILKI
        </motion.h1>

        {/* Role subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl lg:text-3xl font-mono mt-6 text-foreground/70 tracking-widest uppercase text-center"
        >
          Backend & Smart Contract Developer
        </motion.h2>

        {/* Info Grid - Monochromatic, glassmorphic, sharp edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl font-mono text-xs md:text-sm uppercase tracking-tight text-center"
        >
          <div className="border border-border/50 bg-background/30 backdrop-blur-md p-4 flex flex-col justify-center">
            <span className="text-foreground/50 mb-1">Status</span>
            <span className="text-foreground font-semibold">Available for Remote</span>
          </div>
          <div className="border border-border/50 bg-background/30 backdrop-blur-md p-4 flex flex-col justify-center">
            <span className="text-foreground/50 mb-1">Focus</span>
            <span className="text-foreground font-semibold">Web3 & Architecture</span>
          </div>
          <div className="border border-border/50 bg-background/30 backdrop-blur-md p-4 flex flex-col justify-center">
            <span className="text-foreground/50 mb-1">Location</span>
            <span className="text-foreground font-semibold">Indonesia (GMT+7)</span>
          </div>
        </motion.div>

        {/* Hidden SEO text for search engine optimization */}
        <p className="sr-only">
          Wildan Silki Sawabiqil Abroor is a professional Software Engineer based in Indonesia, specializing in Full-Stack Development, Smart Contract Engineering, and Algorithmic Trading. With expertise in Next.js, React, Solidity, and Quantitative Trading, Wildan delivers high-performance digital solutions and decentralized applications.
        </p>

        {/* Minimalist CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll down to view my projects"
          className="mt-16 px-8 py-4 border border-border/50 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-500 cursor-pointer text-sm font-mono tracking-widest uppercase flex items-center space-x-3 group"
        >
          <span>Explore Matrix</span>
          <BsArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
