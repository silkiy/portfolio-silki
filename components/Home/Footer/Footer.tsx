"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NavLink } from "@/constant/constant";

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
              <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-border/60 bg-[#0A0A0A] flex-shrink-0">
                <Image
                  src="/logo/wildan-silki-logo.svg"
                  alt="Wildan Silki Official Logo - Software Engineer & Web3 Specialist"
                  fill
                  sizes="40px"
                  className="object-cover p-0.5"
                />
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
          <div className="flex items-center gap-4 text-xs text-foreground/50 font-mono tracking-wider uppercase">
            <a
              href="/llms.txt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              title="Structured Context for LLMs & AI Agents"
            >
              llms.txt
            </a>
            <span>/</span>
            <a
              href="/llms-full.txt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              title="Full Unabridged Knowledge Base"
            >
              llms-full.txt
            </a>
            <span>/</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
