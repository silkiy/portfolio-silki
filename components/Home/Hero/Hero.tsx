"use client";

import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden flex-col pt-16 md:pt-20"
      aria-label="Introduction Section"
    >
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" 
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 mt-16 w-full">
        {/* Anti-slop Profile Container: No pulsing borders or colored shadows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          tabIndex={0}
          className="relative p-1 border border-border/50 bg-background/50 backdrop-blur-sm group focus:outline-none"
        >
          <Image
            src="/images/wildan-silki-profile.jpeg"
            alt="Wildan Silki Sawabiqil Abroor - Software Engineer Profile Picture"
            width={160}
            height={160}
            priority
            className="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] object-cover border border-border/50 grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* SEO Heading: Strict Monospace Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl mt-8 md:mt-12 px-2 text-center font-mono font-black tracking-tighter uppercase leading-none text-foreground"
        >
          WILDAN SILKI
        </motion.h1>

        {/* Role subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-mono mt-4 md:mt-6 text-foreground/70 tracking-widest uppercase text-center"
        >
          Backend & Smart Contract Developer
        </motion.h2>

        {/* Info Grid - Monochromatic, glassmorphic, sharp edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl font-mono text-xs md:text-sm uppercase tracking-tight text-center"
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

        {/* Semantic Context for Search Engines, Screen Readers, and AI Agents */}
        <section className="sr-only" aria-label="Profile and Professional Overview">
          <p>
            Wildan Silki Sawabiqil Abroor (known as Wildan Silki or silkiy) is a professional Software Engineer based in Malang, East Java, Indonesia.
          </p>
          <p>
            Status: Open to Work and Available for Remote Work globally in Full-Stack Development, Web3 Architecture, and Smart Contract Engineering.
          </p>
          <p>
            Key Skills: Solidity, Rust, TypeScript, JavaScript, Python, Next.js, React, Node.js, Express, Flutter, Hardhat, PostgreSQL, MongoDB, Quantitative Trading, Algorithmic Trading Systems.
          </p>
          <p>
            Prestasi & Penghargaan: Juara 2 Internasional Game Development (Coding Bee Academy Code Olympiad 2023), Apresiasi dari Pj Gubernur Jawa Timur Adhi Karyono atas pencapaian internasional, Lulusan Berprestasi SMK Telkom Malang, Presentasi Proyek Eksekutif Yayasan Pendidikan Telkom.
          </p>
          <p>
            Pendidikan & Sertifikasi: Mahasiswa Universitas Internasional Semen Indonesia (UISI), Alumni SMK Telkom Malang, Alumni SMPN 3 Tulungagung. Tersertifikasi Junior Mobile Programmer oleh Telkom Indonesia, Rapid Developer oleh Mendix, DOT Competency oleh PT DOT Indonesia, AI on Jetson Nano oleh NVIDIA.
          </p>
        </section>

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
          className="mt-12 md:mt-16 px-6 py-3 md:px-8 md:py-4 border border-border/50 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-500 cursor-pointer text-xs md:text-sm font-mono tracking-widest uppercase flex items-center space-x-3 group"
        >
          <span>Explore Matrix</span>
          <BsArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
