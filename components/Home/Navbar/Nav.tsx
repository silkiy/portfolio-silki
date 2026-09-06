"use client";
import Link from "next/link";
import Image from "next/image";
import DownloadCVButton from "@/components/Helper/DownloadCVButton";
import { NavLink } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { ModeToggle } from "@/components/ui/mode-toggle";

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
      className={`fixed top-0 left-0 w-full h-16 md:h-20 z-[10000] transition-colors duration-300 ${
        navBg
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto max-w-7xl">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
          aria-label="Wildan Silki - Official Portfolio Homepage"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg border border-border/60 bg-[#0A0A0A] flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/40">
            <Image
              src="/logo/wildan-silki-logo.svg"
              alt="Wildan Silki - Software Engineer & Web3 Specialist Logo"
              fill
              sizes="(max-width: 768px) 32px, 40px"
              className="object-cover p-0.5"
              priority
            />
          </div>
          <span className="text-lg hidden sm:block md:text-2xl text-foreground font-mono font-bold tracking-tighter uppercase group-hover:text-foreground/90 transition-colors">
            SILKI
          </span>
        </Link>
        {/* Navigation Links */}
        <div className="hidden xl:flex items-center space-x-8">
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
                }}
                className="text-sm text-foreground/70 hover:text-foreground font-mono tracking-tighter uppercase transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <ModeToggle />
          <DownloadCVButton />
          {/* Burger Button */}
          <button
            onClick={openNav}
            aria-label="Open navigation menu"
            className="p-2 hover:bg-foreground/5 transition-colors xl:hidden focus:outline-none"
          >
            <HiBars3BottomRight className="w-8 h-8 text-foreground cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
