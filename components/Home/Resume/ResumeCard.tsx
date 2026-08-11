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
    <article tabIndex={0} className="group border border-border/50 bg-background/20 backdrop-blur-sm hover:bg-foreground focus:bg-foreground focus:outline-none hover:z-10 focus:z-10 -ml-[1px] -mt-[1px] p-8 flex flex-col items-start text-left transition-all duration-500 relative cursor-crosshair">
      <div className="w-12 h-12 bg-background border border-border/50 flex items-center justify-center mb-6 transition-colors duration-500 flex-shrink-0 group-hover:border-background group-focus:border-background">
        <Icon className="w-5 h-5 text-foreground group-hover:text-background group-focus:text-background transition-colors duration-500" />
      </div>
      {date && (
        <span className="mb-4 px-2 py-1 bg-transparent text-foreground/50 border border-border/50 group-hover:border-background/50 group-focus:border-background/50 group-hover:text-background/70 group-focus:text-background/70 text-[10px] font-mono font-bold tracking-widest uppercase transition-colors duration-500">
          {date}
        </span>
      )}
      <h4 className="text-foreground text-lg font-mono font-bold uppercase tracking-widest mb-4 group-hover:text-background group-focus:text-background transition-colors duration-500">
        {role}
      </h4>
      <p className="text-foreground/70 text-xs font-mono leading-relaxed group-hover:text-background/80 group-focus:text-background/80 transition-colors duration-500">
        {description}
      </p>
    </article>
  );
};

export default ResumeCard;
