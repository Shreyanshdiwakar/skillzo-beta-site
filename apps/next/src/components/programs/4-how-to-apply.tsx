import React from 'react';

interface Step {
  title: string;
  description: string;
}

export default function HowToApply({ steps }: { steps: Step[] }) {
  return (
    <section className="px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
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