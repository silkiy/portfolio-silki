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
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Menu Container */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[50%] bg-[#0d0d1f]/95 backdrop-blur-md border-l border-white/10 shadow-2xl flex flex-col justify-center space-y-6 z-[100060] transition-transform duration-300 ease-in-out transform ${navOpen}`}
      >
        <button
          onClick={closeNav}
          aria-label="Close navigation menu"
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <CgClose className="w-6 h-6" />
        </button>

        <nav className="flex flex-col space-y-4 px-10">
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
                className="text-lg py-2 border-b border-white/5 hover:text-cyan-300 text-slate-300 font-bold uppercase tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
