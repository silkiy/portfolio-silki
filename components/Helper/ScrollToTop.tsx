"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`border border-border/50 bg-background/50 hover:bg-foreground hover:text-background backdrop-blur-md text-foreground w-12 h-12 flex items-center justify-center focus:outline-none transition-all duration-500 cursor-crosshair
          ${
            isVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <FaArrowUp className="w-5 h-5 transition-transform duration-300 hover:-translate-y-0.5" />
      </button>
    </div>
  );
};

export default ScrollToTop;
