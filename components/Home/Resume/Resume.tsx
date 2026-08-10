"use client";

import Image from "next/image";
import React from "react";
import ResumeCard from "./ResumeCard";
import BadgeCard from "./BadgeCard";
import {
  FaCodepen,
  FaDatabase,
  FaMobile,
  FaReact,
  FaStream,
  FaChartBar,
} from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { HiAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section
      id="resume"
      className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50 relative bg-background"
      aria-label="Resume and Experience"
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
            Data Streams
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-2 tracking-widest uppercase">
            SYS.LOG // ARCHIVE
          </p>
        </motion.div>
        
        {/* Professional Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-20 border border-border/50 bg-background/50 p-6 md:p-8 border-l-4 border-l-foreground" 
        >
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed font-mono">
            &ldquo;A highly motivated <strong className="text-foreground font-semibold uppercase">Software Engineer</strong> with a strong foundation in <strong className="text-foreground font-semibold uppercase">Full-Stack Development</strong>, specializing in <strong className="text-foreground font-semibold uppercase">Next.js, React, and Node.js</strong>. With a proven track record of <strong className="text-foreground font-semibold uppercase">International Achievements</strong> in Game Development and a passion for <strong className="text-foreground font-semibold uppercase">Blockchain technology</strong>, I am dedicated to building high-performance, scalable, and innovative digital solutions that bridge the gap between complex technology and user-centric design.&rdquo;
          </p>
        </motion.div>

        {/* Work Part */}
        <div id="experience" className="mb-16 md:mb-24">
          <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground mb-8 md:mb-12 tracking-widest uppercase border-b border-border/50 pb-4">
            [01] Professional Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="As a Full-Stack Developer, I focus on delivering complete and scalable digital solutions from concept to deployment. I take ownership of both the client and server sides of development, ensuring seamless integration and consistent performance across all layers."
            />
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="As a Front-End Developer, I specialize in crafting intuitive, accessible, and visually engaging interfaces that enhance user interaction and experience. I work closely with designers and stakeholders to transform concepts into responsive, dynamic interfaces."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              description="In my role as a Backend Developer, I am responsible for building and maintaining the foundation that powers web and mobile applications. This includes architecting robust data structures, managing APIs, and ensuring security."
            />
            <ResumeCard
              Icon={FaDatabase}
              role="Blockchain Developer"
              description="As a Blockchain Developer, I specialize in designing and implementing decentralized applications (dApps) and smart contracts that leverage blockchain technology to enhance security, transparency, and efficiency."
            />
            <ResumeCard
              Icon={FaMobile}
              role="Mobile Apps Developer"
              description="As a Mobile Apps Developer, I focus on delivering seamless digital experiences across mobile platforms. My responsibilities include designing user-centered application flows and implementing consistent UI/UX principles."
            />
            <ResumeCard
              Icon={FaChartBar}
              role="Quant Trader"
              description="As a Quantitative Trader, I design and implement automated trading systems that execute trades based on mathematical models, statistical analysis, and risk management protocols using advanced scripting and algorithms."
            />
          </div>
        </div>

        {/* Education & Licenses Part */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:mb-24">
          <div id="education" className="space-y-8">
            <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground tracking-widest uppercase border-b border-border/50 pb-4">
              [02] Education
            </h3>
            <div className="flex flex-col gap-0 border border-border/50 bg-background/20">
              <BadgeCard Icon={HiAcademicCap} title="SMPN 3 Tulungagung" date="2019 - 2022" />
              <BadgeCard Icon={HiAcademicCap} title="SMK Telkom Malang" date="2022 - 2025" />
              <BadgeCard Icon={HiAcademicCap} title="UISI - Univ. Internasional Semen" date="2025 - Now" />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground tracking-widest uppercase border-b border-border/50 pb-4">
              [03] Licenses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-0 border border-border/50 bg-background/20">
              <BadgeCard Icon={HiOutlineBadgeCheck} title="Junior Mobile Programmer" subtitle="Telkom Indonesia" />
              <BadgeCard Icon={HiOutlineBadgeCheck} title="Rapid Developer" subtitle="Mendix" />
              <BadgeCard Icon={HiOutlineBadgeCheck} title="DOT Competency" subtitle="DOT Indonesia" />
              <BadgeCard Icon={HiOutlineBadgeCheck} title="AI on Jetson Nano" subtitle="NVIDIA" />
            </div>
          </div>
        </div>

        {/* Achievement Part */}
        <div id="achievements" className="mt-16 md:mt-24">
          <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground mb-8 md:mb-12 tracking-widest uppercase border-b border-border/50 pb-4">
            [04] Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border/50 bg-background/50 hover:bg-foreground hover:text-background transition-colors duration-500 group flex flex-col"
            >
              <div className="overflow-hidden w-full h-[220px] relative border-b border-border/50 group-hover:border-background/50">
                <Image
                  src="/images/a1.jpeg"
                  alt="2nd Place International Code Olympiad"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-mono font-bold uppercase tracking-widest mb-3">
                  Provincial Recognition
                </h4>
                <p className="font-mono text-xs opacity-70 leading-relaxed flex-1">
                  Honored by the Acting Governor of East Java, Adhi Karyono, for achieving 2nd Place International in Game Development (Group 1D) by Coding Bee Academy.
                </p>
              </div>
            </motion.article>
            
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-border/50 bg-background/50 hover:bg-foreground hover:text-background transition-colors duration-500 group flex flex-col"
            >
              <div className="overflow-hidden w-full h-[220px] relative border-b border-border/50 group-hover:border-background/50">
                <Image
                  src="/images/a2.jpg"
                  alt="SMK Telkom Malang Graduate"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-mono font-bold uppercase tracking-widest mb-3">
                  Outstanding Graduate
                </h4>
                <p className="font-mono text-xs opacity-70 leading-relaxed flex-1">
                  Received special recognition during graduation at SMK Telkom Malang for achieving 2nd Place International in the Code Olympiad 2023.
                </p>
              </div>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-border/50 bg-background/50 hover:bg-foreground hover:text-background transition-colors duration-500 group flex flex-col"
            >
              <div className="overflow-hidden w-full h-[220px] relative border-b border-border/50 group-hover:border-background/50">
                <Image
                  src="/images/r1.jpg"
                  alt="Executive Presentation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-mono font-bold uppercase tracking-widest mb-3">
                  Executive Presentation
                </h4>
                <p className="font-mono text-xs opacity-70 leading-relaxed flex-1">
                  Selected to present an original game development project directly to the Executives of the Telkom Education Foundation during my time at SMK Telkom Malang.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
