"use client"

import React from 'react';

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(() => import("react-social-media-embed").then(a => a.InstagramEmbed), { ssr: false})

export default function Testimonials({ links, text="Community in action" }: { links: string[]; text?: string; }) {
  return (
    <section className=" mx-auto px-4 sm:px-6 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">{text}</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {links.map(link => (
      <InstagramEmbed  key={link} url={link} width={328}   />

      ))}
      {/* <InstagramEmbed url="https://www.instagram.com/p/DEiGq_kzV1a/?img_index=1" width={328}  />
      <InstagramEmbed url="https://www.instagram.com/p/DDcalS1o1Jl/?img_index=1" width={328}  />
      <InstagramEmbed url="https://www.instagram.com/p/DDhDTKhI0TF/?img_index=1" width={328}  />
      <InstagramEmbed url="https://www.instagram.com/p/DJzb36rID74/?img_index=1" width={328}  /> */}

    </div>
  </section>
  );
} 