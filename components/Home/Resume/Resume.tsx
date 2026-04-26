import Image from "next/image";
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
        <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-8">
          My <span className="text-cyan-300">Resume</span>
        </h2>
        
        {/* Professional Summary for AI & SEO */}
        <div className="mb-16 bg-[#14134145] p-8 rounded-2xl border border-white/10" data-aos="fade-right">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
            "A highly motivated <strong>Software Engineer</strong> with a strong foundation in <strong>Full-Stack Development</strong>, specializing in <strong>Next.js, React, and Node.js</strong>. With a proven track record of <strong>International Achievements</strong> in Game Development and a passion for <strong>Blockchain technology</strong>, I am dedicated to building high-performance, scalable, and innovative digital solutions that bridge the gap between complex technology and user-centric design."
          </p>
        </div>
        {/* Work Part */}
        <div id="experience" className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Professional <span className="text-cyan-200"> Experience</span>
          </h3>
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
          </div>
        </div>

        {/* Education & Licenses Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div id="education">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
              My<span className="text-cyan-200"> Education</span>
            </h3>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
              My<span className="text-cyan-200"> Licenses</span>
            </h3>
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

        {/* Achievement Part */}
        <div id="achievements" className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Awards & <span className="text-cyan-200"> Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Achievement 1 */}
            <div data-aos="zoom-in" data-aos-delay="200">
              <Image
                src="/images/a1.jpeg"
                alt="Wildan Silki Achievement - 2nd Place International Code Olympiad 2023"
                width={800}
                height={500}
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">
                Provincial Recognition for International Achievement
              </h4>
              <p className="pt-2 font-medium text-white/80 leading-relaxed">
                Honored to receive this international recognition for <strong>Game Development (Group 1D)</strong> by Coding Bee Academy. The award was presented directly by the <strong>Acting Governor of East Java, Adhi Karyono</strong>, during the 2024 National Education Day Ceremony. A testament to perseverance and the incredible support from my teachers, family, and friends.
              </p>
            </div>
            {/* Achievement 2 */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <Image
                src="/images/a2.jpg"
                alt="Wildan Silki Achievement - SMK Telkom Malang Graduate"
                width={800}
                height={500}
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">
                SMK Telkom Malang Outstanding Graduate
              </h4>
              <p className="pt-2 font-medium text-white/80 leading-relaxed">
                Received special recognition during graduation at <strong>SMK Telkom Malang (Moklet)</strong> for achieving <strong>2nd Place International</strong> in the Code Olympiad 2023.
              </p>
            </div>
            {/* Achievement 3 */}
            <div data-aos="zoom-in" data-aos-delay="600">
              <Image
                src="/images/r1.jpg"
                alt="Wildan Silki Achievement - Presentation to Telkom Foundation"
                width={800}
                height={500}
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">
                Executive Game Presentation
              </h4>
              <p className="pt-2 font-medium text-white/80 leading-relaxed">
                Selected to present an original game development project directly to the <strong>Executives of the Telkom Education Foundation</strong> during my time at SMK Telkom Malang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
