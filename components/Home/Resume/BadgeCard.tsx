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
    <article
      tabIndex={0}
      className="group border border-border/50 bg-background/20 hover:bg-foreground focus:bg-foreground focus:outline-none hover:z-10 focus:z-10 -ml-[1px] -mt-[1px] p-6 flex flex-col justify-between transition-all duration-500 relative cursor-crosshair min-h-[140px]"
    >
      <div className="flex items-start justify-between w-full mb-4">
        <div className="w-10 h-10 bg-background border border-border/50 flex items-center justify-center transition-colors duration-500 flex-shrink-0 group-hover:border-background group-focus:border-background">
          <Icon className="w-4 h-4 text-foreground group-hover:text-background group-focus:text-background transition-colors duration-500" />
        </div>
        {date && (
          <span className="px-2 py-0.5 text-[10px] font-mono border border-border/50 group-hover:border-background/50 group-focus:border-background/50 text-foreground/60 group-hover:text-background/70 group-focus:text-background/70 tracking-widest uppercase transition-colors duration-500">
            {date}
          </span>
        )}
      </div>
      <div>
        <h4 className="text-foreground text-xs sm:text-sm font-mono font-bold uppercase tracking-wider group-hover:text-background group-focus:text-background transition-colors duration-500 line-clamp-2">
          {title}
        </h4>
        {subtitle && (
          <p className="text-foreground/50 text-[11px] font-mono mt-1 tracking-wider uppercase group-hover:text-background/70 group-focus:text-background/70 transition-colors duration-500">
            {subtitle}
          </p>
        )}
      </div>
    </article>
  );
};

export default BadgeCard;
