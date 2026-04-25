import Image from "next/image";
import React from "react";

const projects = () => {
  return (
    <div
      id="projects"
      className="pt-16 pb-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300"> projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Project 1 */}
        <div>
          <Image
            src="/images/p1.png"
            alt="Blayu Mobile - Academic Data and Attendance Tracking App"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Blayu Mobile
          </h2>
          <p className="pt-2 font-medium text-white/80">
            A mobile application for managing academic data, attendance, and
            location tracking using Flutter and Firebase.
          </p>
        </div>
        {/* Project 2 */}
        <div>
          <Image
            src="/images/p2.png"
            alt="Absensi RSD Mangusada - Facial Recognition Attendance App"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Absensi RSD Mangusada
          </h2>
          <p className="pt-2 font-medium text-white/80">
            A mobile application for attendance management using Flutter featuring facial recognition and location tracking.
          </p>
        </div>
        {/* Project 3 */}
        <div>
          <Image
            src="/images/p3.png"
            alt="Dashboard Profiling MIT - Backend API Development"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Dashboard Profiling MIT
          </h2>
          <p className="pt-2 font-medium text-white/80">
            Responsible for developing scalable backend services using Node.js and Express with TypeScript at PT Merkle Inovasi Teknologi (MIT). Designed and implemented RESTful APIs for multi-role authentication, resume management, and data verification using MongoDB and Mongoose.
          </p>
        </div>
        {/* Project 4 */}
        <div>
          <Image
            src="/images/p4.png"
            alt="Event Organizer - Motion Graphic Bumper SMK Telkom Malang"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Event Organizer – Motion Graphic Bumper
          </h2>
          <p className="pt-2 font-medium text-white/80">
            Created a motion graphic bumper for the 31st Anniversary (Dies
            Natalis) of SMK Telkom Malang, bringing the “Moklet Go Global” theme
            to life with dynamic visuals in Adobe After Effects.
          </p>
        </div>
        {/* Project 5 */}
        <div>
          <Image
            src="/images/p5.png"
            alt="Challenge Token Vendor Blockchain - Solidity Smart Contract"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Challenge Token Vendor Blockchain
          </h2>
          <p className="pt-2 font-medium text-white/80">
            Developed and deployed a smart contract-based token vendor on the
            Ethereum blockchain using Solidity and Hardhat, enabling secure
            token purchases and sales with real-time balance updates.
          </p>
        </div>
        {/* Project 6 */}
        <div>
          <Image
            src="/images/p6.png"
            alt="Challenge Simple NFT - Ethereum Blockchain Smart Contract"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Challenge Simple NFT
          </h2>
          <p className="pt-2 font-medium text-white/80">
            Created and deployed a simple NFT smart contract on the Ethereum
            blockchain using Solidity and Hardhat, allowing users to mint,
            transfer, and view unique digital assets securely.
          </p>
        </div>
        {/* Project 7 */}
        <div>
          <Image
            src="/images/p7.jpeg"
            alt="MaYPI - Meter Reading and Bill Management Platform"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            MaYPI
          </h2>
          <p className="pt-2 font-medium text-white/80">
            A professional platform to simplify meter reading operations, bill management, and accurate data analysis reporting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default projects;
