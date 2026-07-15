"use client";

import { useState, useEffect } from "react";

import { NavLink } from "@/constant/constant";
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0b0b18]/90 backdrop-blur-md border-t border-white/5 pt-16 pb-8 relative">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                SILKI
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
              Wildan Silki Sawabiqil Abroor is a Professional Software Engineer based in Indonesia, specializing in Full-Stack development, Web3 systems, and high-performance digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {NavLink.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.url}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.url)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-sm font-semibold focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">More Info</h4>
            <ul className="space-y-2.5">
              {NavLink.slice(4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.url}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.url)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-sm font-semibold focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator & Bottom Info */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {year} Wildan Silki Sawabiqil Abroor. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600 font-semibold tracking-wider uppercase">
            Handcrafted with React &amp; Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;