"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Resume from "./Resume/Resume";
import Projects from "./Projects/projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
