"use client";

import { useState, useEffect } from "react";
import { NavLink } from "@/constant/constant";
import { FaCode } from "react-icons/fa";

const Footer: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8 relative mt-auto">
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center">
                <FaCode className="w-5 h-5" />
              </div>
              <span className="text-xl text-foreground font-mono font-bold tracking-tighter uppercase">
                SILKI
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-md font-mono tracking-wide">
              Wildan Silki Sawabiqil Abroor. <br />
              System Architecture & Web3. <br />
              Indonesia (GMT+7).
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-foreground text-xs font-mono font-bold uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {NavLink.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.url}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(link.url)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-foreground md:text-foreground/50 hover:text-foreground transition-colors text-sm font-mono focus:outline-none uppercase tracking-wide flex items-center space-x-2 group"
                  >
                    <span className="opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-xs">
                      &gt;
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-foreground text-xs font-mono font-bold uppercase tracking-widest">
              MORE INFO
            </h4>
            <ul className="space-y-2.5">
              {NavLink.slice(4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.url}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(link.url)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-foreground md:text-foreground/50 hover:text-foreground transition-colors text-sm font-mono focus:outline-none uppercase tracking-wide flex items-center space-x-2 group"
                  >
                    <span className="opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-xs">
                      &gt;
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator & Bottom Info */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50 font-mono tracking-widest uppercase">
            &copy; {year} W.SILKI. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-foreground/50 font-mono tracking-widest uppercase"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
