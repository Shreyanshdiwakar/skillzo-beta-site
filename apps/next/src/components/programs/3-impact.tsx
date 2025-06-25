import React from 'react';
export default function Impact({ outcomes }: { outcomes: string[] }) {
  return (
    <section className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-primary text-2xl font-bold mb-6">Impact & Outcomes</h2>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
        {outcomes.map((outcome, i) => (
          <li key={i} className="bg-card text-card-foreground rounded-xl px-6 py-4 shadow text-lg font-semibold flex-1">
            {outcome}
          </li>
        ))}
      </ul>
    </section>
  );
} 