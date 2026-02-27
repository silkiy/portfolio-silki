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
        <div className="bg-blue-950/20 hover:bg-blue-900/40 border border-blue-900/30 hover:border-cyan-400/50 transition-all duration-300 p-5 sm:p-6 rounded-2xl h-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 group">
            <div className="w-16 h-16 bg-blue-900/40 group-hover:bg-cyan-900/50 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300" />
            </div>
            <div className="flex flex-col justify-center flex-1 items-center sm:items-start">
                {date && (
                    <span className="mb-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800/50 w-max">
                        {date}
                    </span>
                )}
                <h1 className="text-white text-lg font-bold">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BadgeCard;
