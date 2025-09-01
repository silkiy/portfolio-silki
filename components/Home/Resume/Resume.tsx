import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaMobile, FaReact, FaStream } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { HiAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";

const Resume = () => {
  return (
    <div
      id="resume"
      className="pt-20 pb-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200"> Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="Built end-to-end web applications using Node.js, Express, TypeScript, and MongoDB. Developed RESTful APIs, implemented multi-role authentication, and integrated systems."
            />
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="Implemented responsive and interactive user interfaces with React, Next.js, and Flutter, focusing on intuitive UX and high performance across devices."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              description="Designed and developed scalable backend services using Node.js & Express with TypeScript. Managed MongoDB databases, created well-structured schemas with Mongoose, and optimized queries for high performance."
            />
            <ResumeCard
              Icon={FaMobile}
              role="Mobile Apps Developer"
              description="Developed cross-platform mobile applications such as Absensi RSD Mangusada and Blayu Mobile using Flutter & Firebase. Integrated Google ML Kit for facial recognition, location tracking, and academic data management."
            />
            <ResumeCard
              Icon={FaStream}
              role="Motion Graphics Designer"
              description="Created engaging motion graphics and animations using Adobe After Effects and Twinmotion. Developed promotional videos and visual content for various projects."
            />
          </div>
        </div>
        {/* Education Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My<span className="text-cyan-200"> Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={HiAcademicCap}
              role="SMPN 3 Tulungagung"
              date="2019 - 2022"
            />
            <ResumeCard
              Icon={HiAcademicCap}
              role="SMK Telkom Malang"
              date="2022 - 2025"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              My<span className="text-cyan-200"> Licenses</span>
              <div className="mt-10">
                <ResumeCard
                  Icon={HiOutlineBadgeCheck}
                  role="Junior Mobile Programmer"
                  description="Telkom Indonesia"
                />
                <ResumeCard
                  Icon={HiOutlineBadgeCheck}
                  role="Rapid Developer Certification"
                  description="Mendix"
                />
                <ResumeCard
                  Icon={HiOutlineBadgeCheck}
                  role="DOT Certificate of Competency"
                  description="DOT Indonesia"
                />
                <ResumeCard
                  Icon={HiOutlineBadgeCheck}
                  role="Getting Started with AI on Jetson Nano"
                  description="NVIDIA"
                />
                <ResumeCard
                  Icon={HiOutlineBadgeCheck}
                  role="Learn OpenUSD: Understanding Model Kinds"
                  description="NVIDIA"
                />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
