import Image from "next/image";
import React from "react";

const projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300"> projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Project 1 */}
        <div>
          <Image
            src="/images/p1.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Blayu Mobile
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            A mobile application for managing academic data, attendance, and
            location tracking using Flutter and Firebase.
          </h1>
        </div>
        {/* Project 2 */}
        <div>
          <Image
            src="/images/p2.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Absensi RSD Mangusada
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            A mobile application for attendance management using Flutter.
            featuring facial recognition and location tracking.
          </h1>
        </div>
        {/* Project 3 */}
        <div>
          <Image
            src="/images/p3.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Dashboard Profiling MIT
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            I designed and implemented RESTful APIs tosupport features such as
            multi-role user authentication, profile, resume management, job
            listings, job applications and institutional data verification.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default projects;
