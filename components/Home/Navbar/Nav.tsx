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
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md " : " fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            SILKI
          </h1>
        </div>
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLink.map((link) => {
            return (
              <button
                key={link.id}
                onClick={() => {
                  document
                    .getElementById(link.url)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                {link.label}
              </button>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Buttons */}
          <DownloadCVButton/>
          {/* Burger Button */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
