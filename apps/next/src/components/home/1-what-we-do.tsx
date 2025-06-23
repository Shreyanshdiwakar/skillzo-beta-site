"use client";
import React, { useState } from "react";

const features = [
  {
    title: "Programs",
    description:
      "Curated hands-on programs and workshops designed to turn ideas into real projects and startups.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#FFD600" /><path d="M12 18h12M18 12v12" stroke="#000" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Mentorship",
    description:
      "1:1 and group mentorship from industry leaders, founders, and experienced teenpreneurs.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#FFD600" /><path d="M18 24v-6M18 12h.01" stroke="#000" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Community",
    description:
      "India's largest network of ambitious high schoolers, collaborating and supporting each other.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#FFD600" /><path d="M12 24c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#000" strokeWidth="2.5" strokeLinecap="round" /><circle cx="18" cy="14" r="4" stroke="#000" strokeWidth="2.5" /></svg>
    ),
  },
];

function GlassyBlob({ show, x, y }: { show: boolean; x: number; y: number }) {
  return show ? (
    <svg
      className="pointer-events-none absolute z-10"
      style={{
        left: x - 110,
        top: y - 90,
        width: 220,
        height: 180,
        transition: 'left 0.1s, top 0.1s',
      }}
      viewBox="0 0 220 180"
      fill="none"
    >
      <defs>
        <radialGradient id="yellowBlob" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFD600" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
        </radialGradient>
        <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="32" />
        </filter>
      </defs>
      <path
        d="M80,90 Q100,20 180,60 Q210,100 160,150 Q120,180 80,150 Q40,120 80,90 Z"
        fill="url(#yellowBlob)"
        filter="url(#blur)"
      />
    </svg>
  ) : null;
}

export default function WhatWeDo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [spot, setSpot] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-s4xl font-extrabold text-center mb-12">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group bg-neutral-900/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-neutral-800 relative overflow-hidden hover:border-yellow-400"
            onMouseMove={e => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setHovered(i);
              setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Organic glassy yellow blob effect follows mouse */}
            <GlassyBlob show={hovered === i} x={spot.x} y={spot.y} />
            <div className="mb-4 transition-transform duration-300 group-hover:scale-125 z-20">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-400 transition-colors duration-300 z-20">{f.title}</h3>
            <p className="text-neutral-300 transition-colors duration-300 z-20">{f.description}</p>
            <span className="absolute -z-10 left-1/2 top-1/2 w-40 h-40 bg-yellow-400 opacity-0 group-hover:opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 transition-all duration-500"></span>
          </div>
        ))}
      </div>
    </section>
  );
}