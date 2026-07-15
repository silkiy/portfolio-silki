"use client";
import DownloadCVButton from "@/components/Helper/DownloadCVButton";
import { NavLink } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 50) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[10vh] z-[10000] transition-all duration-300 ${
        navBg
          ? "bg-[#0d0d1f]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/25"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <FaCode className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl hidden sm:block md:text-2xl text-white font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            SILKI
          </span>
        </div>
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLink.map((link) => {
            return (
              <a
                key={link.id}
                href={`#${link.url}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.url)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm hover:text-cyan-300 text-slate-300 font-semibold tracking-wide uppercase transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Buttons */}
          <DownloadCVButton />
          {/* Burger Button */}
          <button
            onClick={openNav}
            aria-label="Open navigation menu"
            className="p-2 hover:bg-white/5 rounded-lg transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <HiBars3BottomRight className="w-8 h-8 text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
