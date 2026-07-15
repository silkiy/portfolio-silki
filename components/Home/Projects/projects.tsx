import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

const projectList = [
  {
    title: "Blayu Mobile",
    description: "A mobile application for managing academic data, attendance, and location tracking using Flutter and Firebase.",
    image: "/images/p1.png",
    tags: ["Flutter", "Firebase", "Dart", "Geolocation"],
    github: "https://github.com/silkiy",
    demo: null,
  },
  {
    title: "Absensi RSD Mangusada",
    description: "A mobile application for attendance management using Flutter featuring facial recognition and location tracking.",
    image: "/images/p2.png",
    tags: ["Flutter", "Face Recognition", "Dart", "Firebase"],
    github: "https://github.com/silkiy",
    demo: null,
  },
  {
    title: "Dashboard Profiling MIT",
    description: "Responsible for developing scalable backend services using Node.js and Express with TypeScript at PT Merkle Inovasi Teknologi (MIT). Designed and implemented RESTful APIs for multi-role authentication, resume management, and data verification using MongoDB and Mongoose.",
    image: "/images/p3.png",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose"],
    github: "https://github.com/silkiy",
    demo: null,
  },
  {
    title: "Event Organizer Bumper",
    description: "Created a motion graphic bumper for the 31st Anniversary (Dies Natalis) of SMK Telkom Malang, bringing the “Moklet Go Global” theme to life with dynamic visuals in Adobe After Effects.",
    image: "/images/p4.png",
    tags: ["After Effects", "Motion Graphics", "Video Design"],
    github: null,
    demo: "https://instagram.com/project_silki",
    video: true,
  },
  {
    title: "Challenge Token Vendor",
    description: "Developed and deployed a smart contract-based token vendor on the Ethereum blockchain using Solidity and Hardhat, enabling secure token purchases and sales with real-time balance updates.",
    image: "/images/p5.png",
    tags: ["Solidity", "Hardhat", "Ethereum", "Smart Contract", "Ethers.js"],
    github: "https://github.com/silkiy",
    demo: null,
  },
  {
    title: "Challenge Simple NFT",
    description: "Created and deployed a simple NFT smart contract on the Ethereum blockchain using Solidity and Hardhat, allowing users to mint, transfer, and view unique digital assets securely.",
    image: "/images/p6.png",
    tags: ["Solidity", "Hardhat", "ERC-721", "NFT", "Ethereum"],
    github: "https://github.com/silkiy",
    demo: null,
  },
  {
    title: "MaYPI Platform",
    description: "A professional platform to simplify meter reading operations, bill management, and accurate data analysis reporting.",
    image: "/images/p7.jpeg",
    tags: ["React.js", "Tailwind CSS", "Data Analysis", "Node.js"],
    github: "https://github.com/silkiy",
    demo: null,
  },
];

const projects = () => {
  return (
    <section
      id="projects"
      className="pt-24 pb-20 border-b border-white/5 relative"
      data-aos="fade-up"
      data-aos-delay="100"
      aria-label="Recent Projects Showcase"
    >
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          A Selection of Recent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Here is a collection of full-stack web applications, mobile apps, decentralized Web3 protocols, and creative animations that I have worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectList.map((project, idx) => (
            <article
              key={idx}
              className="bg-[#14134145] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(34,211,238,0.15)] flex flex-col h-full group"
            >
              {/* Project Image Container */}
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.description.slice(0, 50)}...`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies used">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors text-sm font-semibold focus:outline-none focus:underline"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold focus:outline-none focus:underline"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.video && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold focus:outline-none focus:underline"
                      aria-label={`Watch presentation video of ${project.title}`}
                    >
                      <FaVideo className="w-3.5 h-3.5" />
                      <span>Watch</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default projects;
