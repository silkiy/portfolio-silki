"use client";

import React, { useState, useEffect } from "react";



const SplineBackground = () => {
  const [mounted, setMounted] = useState(false);
  const splineSceneUrl = "https://prod.spline.design/6Wq1Q7YGyMsqfall/scene.splinecode";

  useEffect(() => {
    // Load the vanilla JS Spline Viewer to bypass React 19 WebGL buffer crashes
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    document.head.appendChild(script);
    
    setMounted(true);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 w-full h-full opacity-50 transition-opacity duration-1000 flex items-center justify-center pointer-events-none">
      
      {/* 
        Using React.createElement avoids the need to globally declare spline-viewer 
        in JSX IntrinsicElements, which was causing Next.js build errors.
      */}
      {React.createElement("spline-viewer", {
        url: splineSceneUrl,
        class: "w-full h-full"
      })}

      {/* A simple css matrix-like background pattern as a fallback overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default SplineBackground;
