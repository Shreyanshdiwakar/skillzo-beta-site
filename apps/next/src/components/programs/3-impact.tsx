import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Impact({ outcomes, title = "Impact & Outcomes" }: { outcomes: string[]; title?: string; }) {
  return (
    <section className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-primary text-2xl font-bold mb-6">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {outcomes.map((outcome, i) => (
          <li
            key={i}
            className="bg-card text-card-foreground rounded-xl px-6 py-4 shadow text-lg font-semibold flex items-start gap-3"
          >
            <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 