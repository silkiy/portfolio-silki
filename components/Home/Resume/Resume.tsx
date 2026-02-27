import React from "react";
import ResumeCard from "./ResumeCard";
import BadgeCard from "./BadgeCard";
import {
  FaCodepen,
  FaDatabase,
  FaMobile,
  FaReact,
  FaStream,
  FaChartBar,
  FaChartLine,
} from "react-icons/fa";
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
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto max-w-7xl">
        {/* Work Part */}
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
            My Work <span className="text-cyan-200"> Experience</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-stretch">
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="As a Full-Stack Developer, I focus on delivering complete and scalable digital solutions from concept to deployment. I take ownership of both the client and server sides of development, ensuring seamless integration and consistent performance across all layers. My role involves collaborating with cross-functional teams to translate business needs into functional features, optimizing workflows, and maintaining code quality through structured architecture and efficient development practices."
            />
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="As a Front-End Developer, I specialize in crafting intuitive, accessible, and visually engaging interfaces that enhance user interaction and experience. I work closely with designers and stakeholders to transform concepts into responsive, dynamic, and polished interfaces. My approach emphasizes usability, maintainability, and pixel-perfect precision, ensuring that every interaction feels natural and aligns with modern design standards."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              description="In my role as a Backend Developer, I am responsible for building and maintaining the foundation that powers web and mobile applications. This includes architecting robust data structures, managing APIs, and ensuring security, scalability, and efficiency of server-side processes. I focus on creating well-organized systems that can handle high volumes of data and transactions while maintaining optimal performance and reliability for end-users."
            />
            <ResumeCard
              Icon={FaDatabase}
              role="Blockchain Developer"
              description="As a Blockchain Developer, I specialize in designing and implementing decentralized applications (dApps) and smart contracts that leverage blockchain technology to enhance security, transparency, and efficiency. My role involves developing solutions that facilitate peer-to-peer transactions, data integrity, and trustless interactions across various industries. I focus on creating scalable and robust blockchain architectures that align with business objectives while adhering to best practices in cryptography and distributed ledger technology."
            />
            <ResumeCard
              Icon={FaMobile}
              role="Mobile Apps Developer"
              description="As a Mobile Apps Developer, I focus on delivering seamless digital experiences across mobile platforms. My responsibilities include designing user-centered application flows, implementing consistent UI/UX principles, and ensuring smooth performance across different devices. I strive to create applications that not only meet functional requirements but also provide a delightful and efficient experience for users on the go."
            />
            <ResumeCard
              Icon={FaStream}
              role="Motion Graphics Designer"
              description="As a Motion Graphics Designer, I combine creativity, storytelling, and technical skill to produce captivating visual experiences. I conceptualize and design animations, visual effects, and motion content for promotional, educational, and branding purposes. My work focuses on visual rhythm, balance, and clarity—transforming complex ideas into visually appealing narratives that enhance audience engagement and elevate brand identity."
            />
            <ResumeCard
              Icon={FaChartBar}
              role="Algo Trader"
              description="As an Algorithmic Trader, I design and implement automated trading systems that execute trades based on pre-defined technical criteria and risk management protocols. I specialize in developing custom strategies using Pine Script and integrating them with automated execution platforms to ensure disciplined and consistent trading. My approach focuses on market microstructure, statistical analysis, and continuous optimization to adapt to changing market conditions."
            />
            <ResumeCard
              Icon={FaChartLine}
              role="Quantitative Developer"
              description="As a Quantitative Developer, I specialize in the implementation of high-performance algorithmic trading systems and mathematical models. I bridge the gap between quantitative research and software engineering, ensuring that complex strategies are executed with precision and reliability. My work involves designing robust trading infrastructure, conducting extensive backtesting using historical data, and optimizing execution algorithms to minimize latency and maximize efficiency."
            />
          </div>
        </div>

        {/* Education & Licenses Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
              My<span className="text-cyan-200"> Education</span>
            </h1>
            <div className="flex flex-col gap-6">
              <BadgeCard
                Icon={HiAcademicCap}
                title="SMPN 3 Tulungagung"
                date="2019 - 2022"
              />
              <BadgeCard
                Icon={HiAcademicCap}
                title="SMK Telkom Malang"
                date="2022 - 2025"
              />
              <BadgeCard
                Icon={HiAcademicCap}
                title="UISI - Universitas Internasional Semen Indonesia"
                date="2025 - Now"
              />
            </div>
          </div>

          {/* Licenses */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
              My<span className="text-cyan-200"> Licenses</span>
            </h1>
            <div className="flex flex-col gap-6">
              <BadgeCard
                Icon={HiOutlineBadgeCheck}
                title="Junior Mobile Programmer"
                subtitle="Telkom Indonesia"
              />
              <BadgeCard
                Icon={HiOutlineBadgeCheck}
                title="Rapid Developer Certification"
                subtitle="Mendix"
              />
              <BadgeCard
                Icon={HiOutlineBadgeCheck}
                title="DOT Certificate of Competency"
                subtitle="DOT Indonesia"
              />
              <BadgeCard
                Icon={HiOutlineBadgeCheck}
                title="Getting Started with AI on Jetson Nano"
                subtitle="NVIDIA"
              />
              <BadgeCard
                Icon={HiOutlineBadgeCheck}
                title="Learn OpenUSD: Understanding Model Kinds"
                subtitle="NVIDIA"
              />
              <BadgeCard
                Icon={HiOutlineBadgeCheck}
                title="Certification: Blockchain Basics"
                subtitle="Cyfrin Updraft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
