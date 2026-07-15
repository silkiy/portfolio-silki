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
    <article className="bg-[#14134145] backdrop-blur-sm hover:bg-[#1c1b545a] border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 p-6 sm:p-8 rounded-2xl h-full flex flex-col items-center text-center group transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-blue-900/40 group-hover:bg-cyan-900/50 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 flex-shrink-0">
        <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300" />
      </div>
      {date && (
        <span className="mb-4 px-4 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-semibold border border-cyan-800/40 w-max tracking-wider">
          {date}
        </span>
      )}
      <h4 className="text-white text-lg sm:text-xl font-bold mb-3 group-hover:text-cyan-200 transition-colors">
        {role}
      </h4>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
};

export default ResumeCard;
