import Image from "next/image";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const allSkillsList = [
  // Languages
  {
    name: "Solidity",
    icon: "images/logo/solidity.svg",
    category: "languages",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "languages",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "languages",
  },
  {
    name: "Golang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    category: "languages",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    category: "languages",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    category: "languages",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "languages",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "languages",
  },
  {
    name: "Julia",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
    category: "languages",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "languages",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "languages",
  },

  // Frameworks & Web/Mobile
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "frameworks",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frameworks",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "frameworks",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "frameworks",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: "frameworks",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    category: "frameworks",
  },

  // Databases & Cloud/Tools
  {
    name: "Hardhat",
    icon: "images/logo/hardhat-logo-dark.svg",
    category: "tools",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "tools",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "tools",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "tools",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    category: "tools",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "tools",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "tools",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "tools",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: "tools",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    category: "tools",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    category: "tools",
  },
  {
    name: "Odoo",
    icon: "images/logo/odoo.svg",
    category: "tools",
  },

  // Creative & Algorithmic Trading
  {
    name: "Trading View",
    icon: "images/logo/tradingview.svg",
    category: "creative",
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    category: "creative",
  },
  {
    name: "Unreal Engine",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
    category: "creative",
  },
  {
    name: "Blender",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    category: "creative",
  },
  {
    name: "After Effects",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
    category: "creative",
  },
  {
    name: "Twinmotion",
    icon: "images/logo/twinmotion.svg",
    category: "creative",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Web & Mobile" },
  { id: "tools", label: "Databases & Tools" },
  { id: "creative", label: "Creative & Trading" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = allSkillsList.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <section
      id="skills"
      className="text-white pt-24 pb-20 border-b border-white/5 relative"
      aria-label="My Technical Skills"
    >
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto max-w-7xl" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Skills</span>
        </h2>
        <p className="text-slate-400 text-center mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Here is a comprehensive overview of my technological proficiency and creative toolsets.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-12 mb-14" role="tablist" aria-label="Skills Categories">
          {categories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeTab === category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400
                ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-[#14134145] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="flex justify-center">
              <Tilt
                scale={1.08}
                transitionSpeed={400}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#22d3ee"
                glarePosition="all"
                className="w-full max-w-[170px]"
              >
                <div className="bg-[#14134145] border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] text-center h-44 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group">
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={skill.icon}
                      alt={`Icon for ${skill.name}`}
                      width={56}
                      height={56}
                      className="object-contain w-auto h-auto"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
