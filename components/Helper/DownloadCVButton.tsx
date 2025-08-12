"use client";
import { useState } from "react";
import { BiDownload } from "react-icons/bi";

export default function DownloadCVButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    // Link Google Drive direct download
    const driveLink =
      "https://drive.google.com/uc?export=download&id=1wJgdxRQBD_SC7Azph4Op35P3vID7hp_A";

    setTimeout(() => {
      setLoading(false);
      window.open(driveLink, "_blank");
    }, 2000); // Simulasi 2 detik loading
  };

  return (
    <button
      onClick={handleDownload}
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
        </>
      )}
    </button>
  );
}
