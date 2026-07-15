import React from "react";
import { IconType } from "react-icons";

type Props = {
    title: string;
    Icon: IconType;
    subtitle?: string;
    date?: string;
};

const BadgeCard = ({ title, Icon, subtitle, date }: Props) => {
  return (
    <article className="bg-[#14134145] backdrop-blur-sm hover:bg-[#1c1b545a] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 p-5 sm:p-6 rounded-2xl h-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 group transform hover:translate-x-1">
      <div className="w-14 h-14 bg-blue-900/40 group-hover:bg-cyan-900/50 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
        <Icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300" />
      </div>
      <div className="flex flex-col justify-center flex-1 items-center sm:items-start">
        {date && (
          <span className="mb-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-semibold border border-cyan-800/40 w-max tracking-wider">
            {date}
          </span>
        )}
        <h4 className="text-white text-base sm:text-lg font-bold group-hover:text-cyan-200 transition-colors">
          {title}
        </h4>
        {subtitle && (
          <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </article>
  );
};

export default BadgeCard;
