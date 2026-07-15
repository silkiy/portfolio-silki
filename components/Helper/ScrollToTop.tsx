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

    window.addEventListener("scroll", toggleVisibility);
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
        className={`bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transform transition-all duration-500 cursor-pointer focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0d0d1f]
          ${
            isVisible
              ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
              : "opacity-0 translate-y-4 pointer-events-none scale-75"
          }`}
      >
        <FaArrowUp className="w-5 h-5 transition-transform duration-300 hover:-translate-y-0.5" />
      </button>
    </div>
  );
};

export default ScrollToTop;
