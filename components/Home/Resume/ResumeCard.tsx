import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description?: string;
};

const ResumeCard = ({ role, Icon, date, description }: Props) => {
  return (
    <div className="bg-blue-950/20 hover:bg-blue-900/40 border border-blue-900/30 hover:border-cyan-400/50 transition-all duration-300 p-6 sm:p-8 rounded-2xl h-full flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-blue-900/40 group-hover:bg-cyan-900/50 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 flex-shrink-0">
        <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300" />
      </div>
      {date && (
        <h1 className="mb-4 px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 text-sm font-semibold border border-cyan-800/50 w-max">
          {date}
        </h1>
      )}
      <h1 className="text-white text-lg sm:text-xl font-bold mb-3">
        {role}
      </h1>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
};

export default ResumeCard;
