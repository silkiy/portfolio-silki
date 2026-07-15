"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col pt-20"
      aria-label="Introduction Section"
    >
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
        {/* Pulsing Gradient Profile Container */}
        <div 
          className="relative p-1 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
        >
          <Image
            src="/images/s8.jpg"
            alt="Wildan Silki Sawabiqil Abroor - Software Engineer Profile Picture"
            width={240}
            height={240}
            priority
            className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] rounded-full object-cover border-2 border-[#0d0d1f]"
          />
          <span className="absolute bottom-3 right-3 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-[#0d0d1f]"></span>
          </span>
        </div>

        {/* SEO Heading: Single H1 */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-8 px-4 text-center font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-black">Wildan Silki</span>
        </h1>
        
        {/* Role subtitle as H2 */}
        <h2 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 text-cyan-200 tracking-wide"
        >
          Software Engineer
        </h2>

        {/* Remote Work Indicator */}
        <div 
          className="flex items-center space-x-2 mt-4 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <p className="text-xs md:text-sm text-cyan-300 font-semibold tracking-wider uppercase">
            Available for Remote Work
          </p>
        </div>

        {/* Typewriter details */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-6 text-base px-2 text-center sm:text-xl md:text-2xl font-medium text-slate-300 flex flex-wrap justify-center items-center gap-1.5"
        >
          <span>A Passionate</span>
          <span className="text-cyan-300 font-bold inline-block border-b border-cyan-500/30">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Mobile Apps Developer",
                  "Web3 Specialist",
                  "AI Enthusiast",
                  "Algorithmic Trader",
                  "Motion Graphics Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-1",
              }}
            />
          </span>
        </div>

        {/* Hidden SEO text for search engine optimization and AI scrapers */}
        <p className="sr-only">
          Wildan Silki Sawabiqil Abroor is a professional Software Engineer based in Indonesia, specializing in Full-Stack Development, Smart Contract Engineering, and Algorithmic Trading. With expertise in Next.js, React, Solidity, and Quantitative Trading, Wildan delivers high-performance digital solutions and decentralized applications.
        </p>

        {/* Premium CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          data-aos="fade-up"
          data-aos-delay="600"
          aria-label="Scroll down to view my projects"
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0d0d1f] text-white transition-all duration-300 cursor-pointer rounded-full text-lg font-bold flex items-center space-x-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:-translate-y-1 active:translate-y-0"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
