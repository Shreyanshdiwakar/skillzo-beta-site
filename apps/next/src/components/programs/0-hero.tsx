import React from 'react';
import StatsStripe, { stat } from '../stats-strip';
import Image from 'next/image';

export default function Hero({ name, tagline, description, stats, logos }: { name: string, tagline: string, description?: string, stats?: stat[]; logos?: string[] }) {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-cal-sans mx-8">{name}</h1>
      <p className="text-xl text-primary font-semibold max-w-2xl mx-auto mb-4">{tagline}</p>
      {description && (
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">{description}</p>
      )}
      {logos && logos.map((logo) => (
        <Image
          key={logo}
          src={logo}
          alt="partner"
          width={240}
          height={160} // hardcoded and invalid will be fixed soon
          className="object-contain w-32 h-20 inline-block mx-2 mt-8"
          unoptimized 
        />
      ))}
      { stats && (
        <StatsStripe stats={stats} />
      )}
    </section>
  );
}
