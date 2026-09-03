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
            SYS.LOG // ARCHIVE & CREDENTIALS
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
            &ldquo;A highly motivated <strong className="text-foreground font-semibold uppercase">Software Engineer</strong> with a strong foundation in <strong className="text-foreground font-semibold uppercase">Full-Stack Development</strong>, specializing in <strong className="text-foreground font-semibold uppercase">Next.js, React, and Node.js</strong>. With proven industry experience as an <strong className="text-foreground font-semibold uppercase">Internship Backend Engineer at PT Merkle Inovasi Teknologi</strong>, a track record of <strong className="text-foreground font-semibold uppercase">International Achievements</strong> in Game Development, and a passion for <strong className="text-foreground font-semibold uppercase">Blockchain technology</strong>, I am dedicated to building high-performance, scalable digital solutions.&rdquo;
          </p>
        </motion.div>

        {/* Work Part */}
        <div id="experience" className="mb-16 md:mb-24">
          <div className="border-b border-border/50 pb-4 mb-8 md:mb-12">
            <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground tracking-widest uppercase">
              [01] Professional Experience
            </h3>
            <p className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">
              Industry Experience & Core Engineering Disciplines
            </p>
          </div>

          {/* Official Internship Highlight Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 border border-border/50 bg-background/50 p-6 md:p-8 border-l-4 border-l-foreground group transition-colors hover:border-foreground/50"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-border/50 bg-foreground text-background uppercase tracking-widest font-semibold">
                    Work Experience // Internship
                  </span>
                  <span className="text-xs font-mono text-foreground/50 border border-border/30 px-2 py-0.5">
                    May 2025
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-mono font-black tracking-tight text-foreground uppercase">
                  Backend Engineer (Internship)
                </h4>
                <p className="text-sm font-mono text-foreground/80 font-bold uppercase mt-1">
                  PT. Merkle Inovasi Teknologi — Jakarta Office (SOHO Capital Podomoro City)
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono border border-border/50 px-3 py-1.5 uppercase tracking-wider text-foreground/70 bg-background/30 self-start md:self-auto shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Verified Experience</span>
              </div>
            </div>

            <p className="text-xs md:text-sm font-mono text-foreground/70 leading-relaxed max-w-5xl">
              Served as an active Backend Engineer at PT Merkle Inovasi Teknologi, architecting robust data models, designing secure and scalable RESTful API endpoints, and implementing server-side optimization for enterprise applications including the MIT Profiling system.
            </p>
          </motion.article>

          {/* Competency Roles Grid */}
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

        {/* Education Part */}
        <div id="education" className="mb-16 md:mb-24">
          <div className="border-b border-border/50 pb-4 mb-8 md:mb-12">
            <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground tracking-widest uppercase">
              [02] Education
            </h3>
            <p className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">
              Academic Background & Foundation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50 bg-background/20">
            <BadgeCard
              Icon={HiAcademicCap}
              title="SMPN 3 Tulungagung"
              subtitle="Junior High Education"
              date="2019 - 2022"
            />
            <BadgeCard
              Icon={HiAcademicCap}
              title="SMK Telkom Malang"
              subtitle="Software Engineering (RPL)"
              date="2022 - 2025"
            />
            <BadgeCard
              Icon={HiAcademicCap}
              title="UISI - Univ. Internasional Semen"
              subtitle="Information Technology"
              date="2025 - Present"
            />
          </div>
        </div>

        {/* Licenses & Certifications Part */}
        <div id="licenses" className="mb-16 md:mb-24">
          <div className="border-b border-border/50 pb-4 mb-8 md:mb-12">
            <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground tracking-widest uppercase">
              [03] Licenses & Certifications
            </h3>
            <p className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">
              Accredited Professional Credentials & Certifications
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border/50 bg-background/20">
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Blockchain Basics"
              subtitle="Cyfrin Updraft"
              date="Sep 2025"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Learn OpenUSD: Model Kinds"
              subtitle="NVIDIA"
              date="Aug 2025"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="AI on Jetson Nano"
              subtitle="NVIDIA"
              date="Aug 2025"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="SKD – Sekolah Kedinasan"
              subtitle="Badan Kepegawaian Negara"
              date="Aug 2025"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="DOT Competency"
              subtitle="DOT Indonesia"
              date="May 2025"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="UKK – Fullstack Developer"
              subtitle="SMK Telkom Malang"
              date="Mar 2025"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Rapid Developer"
              subtitle="Mendix"
              date="Dec 2024"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Code Olympiad (2nd Place)"
              subtitle="Coding Bee Academy"
              date="Jan 2023"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Junior Mobile Programmer"
              subtitle="Telkom Indonesia"
              date="Certified"
            />
          </div>
        </div>

        {/* Training, Workshops & Competitions Part */}
        <div id="activities" className="mb-16 md:mb-24">
          <div className="border-b border-border/50 pb-4 mb-8 md:mb-12">
            <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground tracking-widest uppercase">
              [04] Training, Workshops & Competitions
            </h3>
            <p className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">
              Specialized Camps, Hackathons & Tech Seminars
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border/50 bg-background/20">
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Cyber Security Awareness"
              subtitle="Telkom Indonesia & Telkom Schools"
              date="Jun 2024"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Indie Game Ignite - COMPFEST 15"
              subtitle="Universitas Indonesia & Agate"
              date="Oct 2023"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="MANIAC XII Competition"
              subtitle="Universitas Surabaya (UBAYA)"
              date="Aug 2023"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Game Concept & Asset Design"
              subtitle="Workshop MANIAC XII UBAYA"
              date="Aug 2023"
            />
            <BadgeCard
              Icon={HiOutlineBadgeCheck}
              title="Modular Low-Code Design"
              subtitle="Merkle Academy & Mendix"
              date="Oct 2025"
            />
          </div>
        </div>

        {/* Achievement Part */}
        <div id="achievements" className="mt-16 md:mt-24">
          <h3 className="font-mono text-xl sm:text-2xl font-black text-foreground mb-8 md:mb-12 tracking-widest uppercase border-b border-border/50 pb-4">
            [05] Achievements & Honors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              tabIndex={0}
              className="border border-border/50 bg-background/50 hover:bg-foreground focus:bg-foreground focus:outline-none hover:text-background focus:text-background transition-colors duration-500 group flex flex-col cursor-crosshair"
            >
              <div className="overflow-hidden w-full h-[220px] relative border-b border-border/50 group-hover:border-background/50 group-focus:border-background/50">
                <Image
                  src="/images/wildan-silki-provincial-award-east-java.jpeg"
                  alt="Wildan Silki - 2nd Place International Game Development Code Olympiad Award from East Java Governor"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal group-focus:mix-blend-normal opacity-70 group-hover:opacity-100 group-focus:opacity-100"
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
              tabIndex={0}
              className="border border-border/50 bg-background/50 hover:bg-foreground focus:bg-foreground focus:outline-none hover:text-background focus:text-background transition-colors duration-500 group flex flex-col cursor-crosshair"
            >
              <div className="overflow-hidden w-full h-[220px] relative border-b border-border/50 group-hover:border-background/50 group-focus:border-background/50">
                <Image
                  src="/images/wildan-silki-smk-telkom-malang-graduate.jpg"
                  alt="Wildan Silki Sawabiqil Abroor - Outstanding Graduate Recognition at SMK Telkom Malang"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal group-focus:mix-blend-normal opacity-70 group-hover:opacity-100 group-focus:opacity-100"
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
              tabIndex={0}
              className="border border-border/50 bg-background/50 hover:bg-foreground focus:bg-foreground focus:outline-none hover:text-background focus:text-background transition-colors duration-500 group flex flex-col cursor-crosshair"
            >
              <div className="overflow-hidden w-full h-[220px] relative border-b border-border/50 group-hover:border-background/50 group-focus:border-background/50">
                <Image
                  src="/images/wildan-silki-executive-presentation-telkom.jpg"
                  alt="Wildan Silki - Executive Presentation to Telkom Education Foundation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal group-focus:mix-blend-normal opacity-70 group-hover:opacity-100 group-focus:opacity-100"
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
