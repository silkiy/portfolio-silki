"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const allSkillsList = [
  { name: "Solidity", icon: "/images/logo/solidity.svg", category: "languages" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", category: "languages" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "languages" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "languages" },
  { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", category: "languages" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", category: "languages" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", category: "languages" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "languages" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "languages" },
  { name: "Julia", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg", category: "languages" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "languages" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "languages" },

  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frameworks" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frameworks" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "frameworks" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "frameworks" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "frameworks" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "frameworks" },

  { name: "Hardhat", icon: "/images/logo/hardhat-logo-dark.svg", category: "tools" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "tools" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "tools" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "tools" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", category: "tools" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "tools" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "tools" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "tools" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "tools" },
  { name: "Odoo", icon: "/images/logo/odoo.svg", category: "tools" },
  { name: "Open Claw", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/openclaw.svg", category: "tools" },

  { name: "Trading View", icon: "/images/logo/tradingview.svg", category: "creative" },
  { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", category: "creative" },
  { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", category: "creative" },
  { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", category: "creative" },
  { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", category: "creative" },
  { name: "Twinmotion", icon: "/images/logo/twinmotion.svg", category: "creative" },
];

const categories = [
  { id: "all", label: "INDEX" },
  { id: "languages", label: "LANG" },
  { id: "frameworks", label: "FRAMEWORKS" },
  { id: "tools", label: "SYS_TOOLS" },
  { id: "creative", label: "CREATIVE" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, ease: "easeOut" }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = allSkillsList.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <section
      id="skills"
      className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50 relative overflow-hidden"
      aria-label="My Technical Skills"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border/50 pb-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-foreground tracking-tighter uppercase">
              Tech Matrix
            </h2>
            <p className="font-mono text-sm text-foreground/50 mt-2 tracking-widest uppercase">
              SYS.LOG // CAPABILITIES
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4 mt-8 md:mt-0" role="tablist">
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeTab === category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] sm:text-xs font-mono tracking-widest transition-colors duration-300 border focus:outline-none uppercase ${
                  activeTab === category.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground/70 border-border hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                [{category.label}]
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          key={activeTab} // re-trigger animation on tab change
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div 
              variants={itemVariants}
              key={`${skill.name}-${i}`} 
              tabIndex={0}
              className="group border border-border/50 bg-background/20 backdrop-blur-sm -ml-[1px] -mt-[1px] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-500 hover:bg-foreground/5 focus:bg-foreground/5 focus:outline-none hover:border-foreground focus:border-foreground hover:z-10 focus:z-10 relative cursor-crosshair"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 md:mb-6 grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-focus:grayscale-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:scale-110 group-focus:scale-110">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <h3 className="text-[10px] sm:text-xs font-mono font-bold text-foreground/50 tracking-widest uppercase text-center group-hover:text-foreground group-focus:text-foreground transition-colors duration-500">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
