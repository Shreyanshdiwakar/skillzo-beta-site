"use client";
import React from "react";

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

export default function WhatWeDo() {
  // const [hovered, setHovered] = useState<number | null>(null);
  // const [spot, setSpot] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Gradient backgrounds for each card
  const gradients = [
    // Programs: subtle yellow
    "radial-gradient(circle at 60% 40%, #fffde780 0%, #ffe06633 70%, transparent 100%)",
    // Mentorship: subtle purple
    "radial-gradient(circle at 60% 40%, #ede9fe55 0%, #a78bfa22 70%, transparent 100%)",
    // Community: subtle blue-green
    "radial-gradient(circle at 60% 40%, #d1fae555 0%, #38bdf822 70%, transparent 100%)",
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-s4xl font-extrabold text-center mb-12">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group bg-neutral-900/80 rounded-2xl p-8 flex flex-col items-center text-center border border-neutral-800 relative overflow-hidden hover:border-yellow-400 transition hover:scale-105"
            style={{ zIndex: 1 }}
          >
            {/* Decorative gradient background */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: gradients[i],
              }}
              aria-hidden="true"
            />
            {/* Creative GlassyBlob effect */}
            {/* <GlassyBlob show={hovered === i} x={spot.x} y={spot.y} color={['#ffe066', '#a78bfa', '#38bdf8'][i]} /> */}
            {/* Icon */}
            <div className="mb-4 z-20">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-400 transition-colors duration-300 z-20">{f.title}</h3>
            <p className="text-neutral-300 transition-colors duration-300 z-20">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}