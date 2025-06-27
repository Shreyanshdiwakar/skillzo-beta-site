import Image from "next/image";
import { SplitEnd, SplitStart } from "../split";
import Link from "next/link";

const mentors = [
    {
        name: "Prof. Gaganjit Singh",
        role: "Director, JJ Foundation",
        img: "/images/mentors/gaganjit-singh.jpeg",
        linkedin: "https://www.linkedin.com/in/prof-gaganjit-singh/",
    },
    {
        name: "Rishi Khanna",
        role: "Chairman, TreeForest Capital",
        img: "/images/mentors/rishi-khanna.jpg",
        linkedin: "https://www.linkedin.com/in/rishi-khanna-ba237b7/",
    },
    {
        name: "Mohit Satynand",
        role: "Chairman, Teamwork Arts",
        img: "/images/mentors/mohit-satynand.jpg",
        linkedin: "https://www.linkedin.com/in/mohit-satyanand-baa2b820/",
    },
    {
        name: "Rahul Narvekar",
        role: "Founder, India Network",
        img: "/images/mentors/rahul-narvekar.jpg",
        linkedin: "https://www.linkedin.com/in/narvekarrahul/",
    },
    {
        name: "Shradha Sharma",
        role: "Founder, YourStory Media",
        img: "/images/mentors/shradha-sharma.jpg",
        linkedin: "https://www.linkedin.com/in/sharmashradha/",
    },
    {
        name: "Subhash Choudahry",
        role: "Co-founder Dukaan",
        img: "/images/mentors/subhash-chaudahry.png",
        linkedin: "https://www.linkedin.com/in/subhashchy/",
    },
    {
        name: "Arunabh Sinha",
        role: "Co-founder & CEO UClean",
        img: "/images/mentors/arunabh-sinha.png",
        linkedin: "https://www.linkedin.com/in/arunabhsinha/",
    },
    {
        name: "Gunjan Taneja",
        role: "Co-founder UClean",
        img: "/images/mentors/gaunjan-taneja.jpg",
        linkedin: "https://www.linkedin.com/in/gunjantaneja11/",
    },
    {
        name: "Arjun Vaidya",
        role: "Co-founder V3 Ventures",
        img: "/images/mentors/arjun-vaidya.jpg",
        linkedin: "https://www.linkedin.com/in/arjunvaidya/",
    },
];

export default function MentorsSection() {
    return (
        <>
            <section className="pt-16 pb-32 px-4 md:px-12 lg:px-24 bg-primary relative mt-32 -mb-16">
                <SplitStart />
                <div className="">
                    <div className="max-w-5xl mx-auto text-center mb-12 text-primary-foreground">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 font-cal-sans ">Mentors & Advisors</h2>
                        <p className="text-lg  max-w-2xl mx-auto">
                            Our mentors and advisors are passionate leaders, educators, and professionals who believe in the power of student-driven change. They guide, inspire, and open doors for Skillzo teens.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {mentors.map((mentor, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center bg-neutral-900 rounded-xl shadow-lg p-6 group hover:scale-105 transition-transform duration-300 relative overflow-hidden gap-y-2 text-center"
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
                                {/* LinkedIn icon top right */}
                                <Link
                                  href={mentor.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute top-4 right-4 z-10 text-blue-400 hover:text-blue-500"
                                  aria-label={`LinkedIn profile of ${mentor.name}`}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                                  </svg>
                                </Link>
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
                            </div>
                        ))}
                    </div>
                </div>
                <SplitEnd />

            </section>
        </>
    );
}
