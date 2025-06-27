import React from "react";


export interface stat {
    label: string;
    value: string;
}

export default function StatsStrip({stats} : { stats: stat[]}){
    return (
        <div className="w-full flex justify-center mt-12">
        <div className="grid grid-cols-2 md:flex md:flex-row items-center gap-4 md:gap-3 bg-neutral-900/80 border border-yellow-400 rounded-4xl md:rounded-full px-6 py-6 md:px-8 md:py-3 shadow-lg text-xl md:text-xl font-semibold text-yellow-400 backdrop-blur-md max-w-full">
            {stats.map((stat, idx) => (
                <React.Fragment key={stat.label}>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl md:text-2xl font-extrabold text-white">{stat.value}</span>
                        <span className="text-lg md:text-lg text-yellow-400">{stat.label}</span>
                    </div>
                    {idx < stats.length - 1 && (
                        <span className="hidden md:inline mx-2 text-yellow-400">•</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
    )
}