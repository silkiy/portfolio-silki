import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/constant/constant";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div className={`fixed inset-0 z-[100050] transition-all duration-300 ${showNav ? "visible pointer-events-auto" : "invisible pointer-events-none"}`}>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Menu Container */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] bg-background/95 backdrop-blur-md border-l border-border/50 flex flex-col justify-center space-y-8 z-[100060] transition-transform duration-500 ease-out transform ${navOpen}`}
      >
        <button
          onClick={closeNav}
          aria-label="Close navigation menu"
          className="absolute top-6 right-6 p-4 border border-transparent hover:border-foreground/50 text-foreground transition-all focus:outline-none cursor-crosshair group"
        >
          <CgClose className="w-6 h-6 group-hover:scale-90 transition-transform" />
        </button>

        <div className="px-6 sm:px-10 mb-8 border-b border-border/50 pb-8 flex items-center space-x-3.5">
          <div className="relative w-9 h-9 overflow-hidden rounded-lg border border-border/60 bg-[#0A0A0A] flex-shrink-0">
            <Image
              src="/logo/wildan-silki-logo.svg"
              alt="Wildan Silki Logo - Software Engineer"
              fill
              sizes="36px"
              className="object-cover p-0.5"
            />
          </div>
          <div>
            <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest block">SYS.LOG</span>
            <span className="font-mono text-lg font-black text-foreground uppercase tracking-tighter">SILKI // NAV</span>
          </div>
        </div>

        <nav className="flex flex-col space-y-0 px-6 sm:px-10">
          {NavLink.map((link) => {
            const href = link.path || `/#${link.url}`;
            return (
              <Link
                key={link.id}
                href={href}
                onClick={(e) => {
                  if (!link.path && typeof window !== "undefined" && window.location.pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById(link.url)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                  closeNav();
                }}
                className="group py-4 border-b border-foreground/50 text-foreground font-mono font-bold uppercase tracking-widest transition-colors duration-300 flex items-center space-x-4"
              >
                <span className="opacity-100 translate-x-0 text-xs text-foreground/50">
                  &gt;
                </span>
                <span className="translate-x-2">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-10 left-6 sm:left-10">
          <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">
            TERMINAL // ACTIVE
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
