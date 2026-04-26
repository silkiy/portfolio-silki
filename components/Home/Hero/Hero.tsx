"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s8.jpg"
          alt="Wildan Silki Sawabiqil Abroor - Software Engineer"
          width={0}
          height={0}
          sizes="(min-width: 1024px) 250px, 200px"
          className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-full border-4 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 px-4 text-center font-bold tracking-wide"
        >
          Hi I&apos;m <span className="text-cyan-200">Wildan Silki</span>
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
          Software Engineer
        </h1>

        {/* Remote Work Indicator */}
        <div className="flex items-center space-x-2 mt-4 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10" data-aos="fade-up" data-aos-delay="400">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-sm md:text-base text-white/80 font-medium">
            Available for Remote Work
          </p>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          A Passionate
          <span className="text-cyan-200 font-bold inline-block">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Mobile Apps Developer",
                  "Game Developer",
                  "AI Enthusiast",
                  "Web3 Enthusiast",
                  "Motion Graphics Designer",
                  "Algo Trader",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <p className="sr-only">
          Wildan Silki Sawabiqil Abroor is a professional Software Engineer based in Indonesia, specializing in Full-Stack Development, Smart Contract Engineering, and Algorithmic Trading. With expertise in Next.js, React, Solidity, and Quantitative Trading, Wildan delivers high-performance digital solutions and decentralized applications.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
