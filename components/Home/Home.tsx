"use client";
import React from "react";
import Hero from "./Hero/Hero";
import Resume from "./Resume/Resume";
import Projects from "./Projects/projects";
import Skills from "./Skills/Skills";
import GithubTelemetry from "./GithubTelemetry/GithubTelemetry";
import Contact from "./Contact/Contact";

const Home = () => {

  return (
    <div className="overflow-x-hidden w-full">
      <Hero />
      <Resume />
      <Projects />
      <Skills />
      <GithubTelemetry />
      <Contact />
    </div>
  );
};

export default Home;
