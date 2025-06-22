import Hero from "@/components/home/0-hero";
import WhatWeDo from "@/components/home/1-what-we-do";
import HighlightedProgram from "@/components/home/2-highlighted-program";
import FeaturedStories from "@/components/home/3-featured-stories";
import Photos from "@/components/home/4-photos";
import MentorsSection from "@/components/home/6-mentors";

export default function Home() {
  return (
    <main className="space-y-4">
      <Hero />
      <WhatWeDo />
      <HighlightedProgram />
      <FeaturedStories />
      <Photos />
      <MentorsSection />
    </main>
  );
}
