import { NavLink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}
      >
        {NavLink.map((link) => {
          return (
            <button
              key={link.id}
              onClick={() => {
                document
                  .getElementById(link.url)
                  ?.scrollIntoView({ behavior: "smooth" });
                closeNav();
              }}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </button>
          );
        })}
        {/* cross icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
