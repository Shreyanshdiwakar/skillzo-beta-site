import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    name: "Aarav S.",
    img: "https://placehold.co/96x96",
    quote: "Skillzo helped me launch my first social project and find a mentor who truly believed in me. I learned how to build a team, pitch my idea, and actually make a difference in my community. The support and encouragement I received here changed my life.",
    badge: "Launched Project"
  },
  {
    name: "Priya K.",
    img: "https://placehold.co/128x128",
    quote: "I never thought I could build a team and pitch my idea. Now, I feel unstoppable! My Skillzo mentor helped me turn my passion into a real project, and I even got to present at a national event. I made friends for life and discovered what I'm truly capable of. If you're on the fence, just go for it!",
    badge: "Team Builder"
  },
  {
    name: "Rahul T.",
    img: "https://placehold.co/96x96",
    quote: "The Skillzo community made me feel seen and supported. I made friends for life, learned from amazing mentors, and found the confidence to start my own initiative. I never imagined I could achieve so much in such a short time.",
    badge: "Community Star"
  }
];

export default function FeaturedStories() {
  return (
    <section className="relative max-w-6xl mx-4 sm:mx-auto my-16 py-12 px-4 bg-gradient-to-b from-yellow-400/5 via-transparent to-yellow-400/5 rounded-3xl flex flex-col items-center overflow-visible  mt-32">
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 tracking-tight text-center">Featured Student Stories</h2>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center">
        Real journeys. Real impact. Meet Skillzo students who are changing their lives—and their communities.
      </p>
      {/* Podium layout for desktop, stack for mobile */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-end md:items-end min-h-[420px]">
        {/* Left story (bottom left) */}
        <div className="flex flex-col items-center md:justify-end md:self-end">
          <Image unoptimized src={stories[0].img} width={96} height={96} alt={stories[0].name} className="rounded-full object-cover grayscale border-4 border-yellow-400/40 shadow-lg w-20 h-20 md:w-24 md:h-24" />
          <span className="mt-2 font-bold text-yellow-400 text-base md:text-lg">{stories[0].name}</span>
          <span className="inline-block bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-full mt-1 mb-2 md:mb-0">{stories[0].badge}</span>
          <div className="bg-yellow-400/10 text-gray-100 rounded-2xl px-6 py-6 shadow-md max-w-md text-base md:text-lg italic mt-2 border border-yellow-400/30">“{stories[0].quote}”</div>
        </div>
        {/* Center story (top center, highlighted) */}
        <div className="flex flex-col items-center md:justify-start md:self-start">
          <Image unoptimized src={stories[1].img} width={128} height={128} alt={stories[1].name} className="rounded-full object-cover grayscale border-4 border-yellow-400/60 shadow-xl w-28 h-28 md:w-32 md:h-32" />
          <span className="mt-3 font-bold text-yellow-400 text-lg md:text-2xl">{stories[1].name}</span>
          <span className="inline-block bg-yellow-400 text-black font-semibold text-xs px-4 py-2 rounded-full mt-1 mb-2 md:mb-0">{stories[1].badge}</span>
          <div className="bg-yellow-400/10 text-white rounded-2xl px-8 py-8 shadow-lg max-w-xl text-lg md:text-xl font-semibold italic mt-3 border-2 border-yellow-400">“{stories[1].quote}”</div>
        </div>
        {/* Right story (bottom right) */}
        <div className="flex flex-col items-center md:justify-end md:self-end">
          <Image unoptimized src={stories[2].img} width={96} height={96} alt={stories[2].name} className="rounded-full object-cover grayscale border-4 border-yellow-400/40 shadow-lg w-20 h-20 md:w-24 md:h-24" />
          <span className="mt-2 font-bold text-yellow-400 text-base md:text-lg">{stories[2].name}</span>
          <span className="inline-block bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-full mt-1 mb-2 md:mb-0">{stories[2].badge}</span>
          <div className="bg-yellow-400/10 text-gray-100 rounded-2xl px-6 py-6 shadow-md max-w-md text-base md:text-lg italic mt-2 border border-yellow-400/30">“{stories[2].quote}”</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="#stories" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-yellow-500 transition">
          Read More Stories
        </Link>
        <Link href="#share-story" className="bg-neutral-800 border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-yellow-400 hover:text-black transition">
          Share Your Story
        </Link>
      </div>
    </section>
  );
}
