import Image from "next/image";

const mentors = [
  {
    name: "Dr. Asha Singh",
    role: "Education Advisor",
    tagline: "Champion for equitable learning",
    img: "https://placehold.co/200x200?text=Mentor+1",
  },
  {
    name: "Rohan Mehta",
    role: "Startup Mentor",
    tagline: "Empowering young founders",
    img: "https://placehold.co/200x200?text=Mentor+2",
  },
  {
    name: "Priya Desai",
    role: "Career Coach",
    tagline: "Guiding next-gen leaders",
    img: "https://placehold.co/200x200?text=Mentor+3",
  },
  {
    name: "Anil Kapoor",
    role: "Tech Advisor",
    tagline: "Building for impact",
    img: "https://placehold.co/200x200?text=Mentor+4",
  },
];

export default function MentorsSection() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 font-cal-sans text-primary">Mentors & Advisors</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our mentors and advisors are passionate leaders, educators, and professionals who believe in the power of student-driven change. They guide, inspire, and open doors for Skillzo teens.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {mentors.map((mentor, i) => (
          <div
            key={i}
            className="flex flex-col items-center mx-16 sm:mx-0 bg-neutral-900 rounded-xl shadow-lg p-6 group hover:scale-105 transition-transform duration-300 relative overflow-hidden"
          >
            {/* Subtle gloss only on top left */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle at 18% 12%, #fff9c480 0%, #ffe06600 50%)",
                opacity: 0.35,
                width: '100%',
                height: '100%',
              }}
            />
            <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-yellow-400 shadow relative z-10">
              <Image
                src={mentor.img}
                alt={mentor.name}
                width={112}
                height={112}
                className="object-cover object-center w-full h-full"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 relative z-10">{mentor.name}</h3>
            <p className="text-yellow-400 font-semibold mb-1 relative z-10">{mentor.role}</p>
            <p className="text-yellow-100 text-sm italic text-center relative z-10">{mentor.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
