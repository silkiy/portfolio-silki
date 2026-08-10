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

        <div className="px-6 sm:px-10 mb-8 border-b border-border/50 pb-8">
          <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest block mb-2">SYS.LOG</span>
          <span className="font-mono text-lg font-black text-foreground uppercase tracking-tighter">NAVIGATION</span>
        </div>

        <nav className="flex flex-col space-y-0 px-6 sm:px-10">
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
                  closeNav();
                }}
                className="group py-4 border-b border-border/30 hover:border-foreground/50 text-foreground/70 hover:text-foreground font-mono font-bold uppercase tracking-widest transition-colors duration-300 flex items-center space-x-4"
              >
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-xs text-foreground/50">
                  &gt;
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  {link.label}
                </span>
              </a>
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
