"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Hardhat",
    icon: "images/logo/hardhat-logo-dark.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Golang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Odoo",
    icon: "images/logo/odoo.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

const otherSkills = [
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Unreal Engine",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
  },
  {
    name: "Blender",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
  {
    name: "After Effects",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
  },
  {
    name: "Twinmotion",
    icon: "images/logo/twinmotion.svg",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16 pb-16">
      <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          My <span className="text-cyan-300">Skills</span>
        </h1>
        <div className="lg:w-[70%] mx-auto flex flex-wrap justify-center gap-6 mt-16">
          {skills.map((skil) => {
            return (
              <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                  <Image
                    src={skil.icon ?? "Skill icon not found"}
                    alt={skil.name ?? "Skill icon"}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <h1 className="text-lg font-semibold">{skil.name}</h1>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
      <div className="mt-20" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          My Other <span className="text-cyan-300">Skills</span>
        </h1>
        <div className="lg:w-[70%] mx-auto flex flex-wrap justify-center gap-6 mt-16">
          {otherSkills.map((skil) => {
            return (
              <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                  <Image
                    src={skil.icon ?? "Skill icon not found"}
                    alt={skil.name ?? "Skill icon"}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <h1 className="text-lg font-semibold">{skil.name}</h1>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
