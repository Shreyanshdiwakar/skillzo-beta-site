import { cn } from '@/lib/utils';
import React from 'react';

interface Step {
  title: string;
  description: string;
}

export default function Timeline({ steps, title }: { steps: Step[]; title: string; }) {

  const cols = {
    [2]: "md:grid-cols-2",
    [3]: "md:grid-cols-3",
    [4]: "md:grid-cols-4"
  }
  return (
    <section className="px-4 py-12">
      <h2 className={cn("text-2xl font-bold text-primary mb-6 text-center")}>
        {title}
      </h2>
      <div className={cn("grid grid-cols-1 mt-8v gap-8 max-w-5xl mx-auto text-center", cols[steps.length as 2 | 3 | 4])}>
        {steps.map((step, i) => (
          <div className="flex flex-col items-center" key={i}>
            <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">{i + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-base text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 