
import React from 'react';
import StatsStripe, { stat } from '../stats-strip';

export default function Hero({ name, tagline, description, stats }: { name: string, tagline: string, description?: string, stats?: stat[] }) {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-cal-sans">{name}</h1>
      <p className="text-xl text-primary font-semibold max-w-2xl mx-auto mb-4">{tagline}</p>
      {description && (
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">{description}</p>
      )}

      { stats && (
        <StatsStripe stats={stats} />
      )}
    </section>
  );
}
