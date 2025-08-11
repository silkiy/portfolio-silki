import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Colleborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-stretch">
        <div className="xl:col-start-2">
          <ServiceCard
            className="p-8 bg-white/5 rounded-2xl shadow-lg h-full"
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
          />
        </div>
        <div className="xl:col-start-3">
          <ServiceCard
            className="p-8 bg-white/5 rounded-2xl shadow-lg h-full"
            icon="/images/s4.png"
            name="Development"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
