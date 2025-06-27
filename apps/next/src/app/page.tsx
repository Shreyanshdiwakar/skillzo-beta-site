import Hero from "@/components/home/0-hero";
import WhatWeDo from "@/components/home/1-what-we-do";
import HighlightedProgram from "@/components/home/2-highlighted-program";
import FeaturedStories from "@/components/home/3-featured-stories";
import Photos from "@/components/home/4-photos";
import MentorsSection from "@/components/home/6-mentors";
import Partners from "@/components/home/7-partners";
import CTA from "@/components/home/8-cta";
import FAQs from "@/components/home/9-faqs";
import ProgramImages from "@/components/programs/8-images";

export default function Home() {
  return (
    <main className="space-y-8 ">
      <Hero />
      <WhatWeDo />
      <HighlightedProgram />
      {/* <Photos /> */}
      <ProgramImages images={[
        "/images/home/1.JPG",
        "/images/home/2.jpg",
        "/images/home/3.jpg",
        "/images/home/4.jpg",
      ]} />
      <MentorsSection />
      <FeaturedStories />
      <Partners />
      <CTA />
      <FAQs/>
    </main>
  );
}
