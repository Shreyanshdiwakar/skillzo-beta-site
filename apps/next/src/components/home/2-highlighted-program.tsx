import Image from "next/image";
import Link from "next/link";

export default function HighlightedProgram() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 bg-neutral-900/80 border border-yellow-400 rounded-3xl px-6 py-12 md:px-16 md:py-16 shadow-lg max-w-5xl mx-4 sm:mx-auto my-16 overflow-hidden">
      {/* Decorative radiant gradient top left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[38rem] h-[38rem] z-0 blur-3xl"
        style={{
          background: "radial-gradient(circle at 40% 40%, #fffbe6cc 0%, #ffe06633 60%, transparent 100%)",
          opacity: 0.28,
          borderRadius: '50%',
        }}
      />
      {/* Program Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="https://v0.dev/placeholder.svg?width=400&height=260"
          width={400}
          height={260}
          alt="IgniteBharat Program"
          className="rounded-2xl shadow-xl object-cover w-full max-w-xs md:max-w-md"
        />
      </div>
      {/* Program Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 tracking-tight">IgniteBharat</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-2 max-w-lg">
        IgniteBharat is a nationwide initiative that brings entrepreneurship and innovation directly to schools across India — especially in Tier 2, Tier 3 cities and rural regions. It helps students understand real-world problem-solving and build community-driven projects that spark change from the ground up.
It’s not just about starting companies — it’s about igniting a mindset that transforms students into problem-solvers, innovators, and leaders in their own communities.


        </p>
        {/* Impact Stats */}
        <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:gap-4 md:justify-start md:items-stretch my-2">
          <div className="bg-yellow-400/10 border border-yellow-400 rounded-xl px-2 py-2 text-yellow-400 font-bold text-lg min-w-[110px] text-center">
            5000+<br />Students
          </div>
          {/* <div className="bg-yellow-400/10 border border-yellow-400 rounded-xl px-2 py-2 text-yellow-400 font-bold text-lg min-w-[110px] text-center">
            30+<br />Cities
          </div> */}
          <div className="bg-yellow-400/10 border border-yellow-400 rounded-xl px-2 py-2 text-yellow-400 font-bold text-lg min-w-[110px] text-center">
            200+<br />Projects Launched
          </div>
        </div>
        {/* Testimonial */}
        <blockquote className="italic text-gray-300 border-l-4 border-yellow-400 pl-4 my-4 max-w-md">
          “IgniteBharat gave me the courage to turn my idea into reality. I found mentors, friends, and a community that truly believes in me.”<br />
          <span className="not-italic font-semibold text-yellow-400">— Student Participant</span>
        </blockquote>
        {/* CTA Button */}
        <Link
          href="#apply"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-yellow-500 transition mt-2"
        >
          Register Now
        </Link>
      </div>
      {/* Decorative Accent */}
      <div className="pointer-events-none absolute -z-10 right-0 bottom-0 w-48 h-48 rounded-full bg-yellow-400 opacity-10 blur-3xl" />
    </section>
  );
}
