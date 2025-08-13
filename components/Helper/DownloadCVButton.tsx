"use client";
import { useState, useEffect, useRef } from "react";
import { BiDownload, BiChevronDown } from "react-icons/bi";

export default function DownloadCVButton() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cvLinks = {
    indo: "https://drive.google.com/uc?export=download&id=1wJgdxRQBD_SC7Azph4Op35P3vID7hp_A",
    english:
      "https://drive.google.com/uc?export=download&id=1UkeDXk5TEr8lv325LVXXmuDcbiMjWIq4",
  };

  const handleDownload = (lang: "indo" | "english") => {
    setLoading(true);
    setOpen(false);
    setTimeout(() => {
      setLoading(false);
      window.open(cvLinks[lang], "_blank");
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        disabled={loading}
        className={`px-8 py-3.5 text-sm cursor-pointer rounded-lg flex items-center space-x-2 transition-all duration-300
          ${loading ? "bg-gray-500" : "bg-blue-800 hover:bg-blue-900"} 
          text-white`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
            <BiChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Dropdown */}
      <div
        className={`absolute mt-2 w-48 bg-[#0f142e] border border-blue-700 rounded-lg shadow-lg overflow-hidden z-50 
          transition-all duration-200 ease-out transform origin-top
          ${
            open
              ? "opacity-100 translate-y-0 scale-y-100"
              : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
          }`}
      >
        <button
          onClick={() => handleDownload("indo")}
          className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-blue-800 transition-colors"
        >
          🇮🇩 Bahasa Indonesia
        </button>
        <button
          onClick={() => handleDownload("english")}
          className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-blue-800 transition-colors"
        >
          🇬🇧 English
        </button>
      </div>
    </div>
  );
}
