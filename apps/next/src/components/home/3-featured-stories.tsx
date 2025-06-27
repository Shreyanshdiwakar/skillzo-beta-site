import Image from "next/image";
import Link from "next/link";

const stories = [

  {
    name: "Nimit Grover",
    school: "Delhi Public School East, Banglore",
    quote: "Skillzo gave me a community which helped me keep my passion for events and exploration alive! It helped me keep in touch with wonderful, experienced people in an accelerating world. There is no liberation without discovery, and Skillzo provides that liberation!"
  },
  {
    name: "Aadya Mathur",
    school: "School of Specialized Excellence, Delhi",
    quote: "Skillzo has been a transformative force in my life, informing me about opportunities that have not only honed my skills but also connected me with a community of like-minded individuals. The platform has been instrumental in shaping me into a better individual, providing a space where growth and collaboration thrive. Grateful for the experiences and connections that Skillzo has facilitated on my journey."
  },
  {
    name: "Agamya Jain",
    school: "Modern School, Kota, Rajasthan",
    quote: "Through skillzo, I've discovered a lot of new avenues and opportunities for kids like me to get more experience for the world we're going to get into. An amazing community in all!!"
  }
];

export default function FeaturedStories() {
  return (
    <section className="relative max-w-6xl mx-4 sm:mx-auto my-8 py-12 px-4 bg-gradient-to-b from-yellow-400/5 via-transparent to-yellow-400/5 rounded-3xl flex flex-col items-center overflow-visible  mt-32">
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 tracking-tight text-center">Featured Student Stories</h2>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center">
        Real journeys. Real impact. Meet Skillzo students who are changing their lives—and their communities.
      </p>
      {/* Podium layout for desktop, stack for mobile */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-end md:items-end min-h-[420px]">

        {stories.map(story => (
        <div key={story.name} className="flex flex-col items-center md:justify-end md:self-end">
          {/* <Image unoptimized src={stories[0].img} width={96} height={96} alt={stories[0].name} className="rounded-full object-cover grayscale border-4 border-yellow-400/40 shadow-lg w-20 h-20 md:w-24 md:h-24" /> */}
          <span className="mt-2 font-bold text-yellow-400 text-base md:text-lg">{story.name}</span>
          <span className="text-xs text-gray-300 mb-1">{story.school}</span>
          {/* <span className="inline-block bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-full mt-1 mb-2 md:mb-0">{stories[0].badge}</span> */}
          <div className="bg-yellow-400/10 text-gray-100 rounded-2xl px-6 py-6 shadow-md max-w-md text-base md:text-lg italic mt-2 border border-yellow-400/30">“{story.quote}”</div>
        </div>
  ))}

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
