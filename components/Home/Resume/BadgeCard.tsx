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
    <article className="group border-b border-border/50 hover:bg-foreground hover:z-10 last:border-b-0 p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-500 cursor-crosshair">
      <div className="w-12 h-12 bg-background border border-border/50 flex items-center justify-center transition-colors duration-500 flex-shrink-0 group-hover:border-background">
        <Icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-500" />
      </div>
      <div className="flex flex-col justify-center flex-1 items-center sm:items-start">
        {date && (
          <span className="mb-2 px-2 py-1 text-[10px] font-mono border border-border/50 group-hover:border-background/50 text-foreground/50 group-hover:text-background/70 tracking-widest uppercase transition-colors duration-500">
            {date}
          </span>
        )}
        <h4 className="text-foreground text-sm font-mono font-bold uppercase tracking-widest group-hover:text-background transition-colors duration-500">
          {title}
        </h4>
        {subtitle && (
          <p className="text-foreground/50 text-xs font-mono mt-1 tracking-wider uppercase group-hover:text-background/70 transition-colors duration-500">
            {subtitle}
          </p>
        )}
      </div>
    </article>
  );
};

export default BadgeCard;
