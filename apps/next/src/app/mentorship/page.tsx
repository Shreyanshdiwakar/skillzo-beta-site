import ProgramImages from "@/components/programs/8-images";
import { applicationLinks } from "@/consts";
// import Image from "next/image";
import Link from "next/link";

export default function MentorshipPage() {
  const testimonials = [
    {
      quote: `"As a mentoring organisation, Skillzo offers mentorship that is unparalleled. The impact that they bring upon the mentee can be visible holistically. They don't solely hand you the opportunities, they make you able enough to grab them yourself."`,
      author: "Dev Gupta",
      className: "border border-primary bg-background"
    },
    {
      quote: '"My mentor provided me with practical advice and motivation that helped me launch my first project. Highly recommend!"',
      author: "Skillzo Student",
      className: "border border-primary bg-[var(--success-bg,rgba(0,0,0,0.5))]"
    }
  ];

  return (
    <div className="relative font-cal-sans">

      {/* Hero Section - Purpose */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden">
        <h2 className="text-base md:text-lg font-bold text-primary mb-1">Skillzo Mentorship</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide font-cal-sans w-full sm:w-2/3 md:w-1/2">
          Unlock Your Potential with 1:1 Mentorship
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl mx-auto">
        What is it?
 Skillzo's personalised mentorship program connects high school students with university mentors, professionals, and startup founders for individual guidance and long-term growth.
 The first mentorship call is always scheduled with the Skillzo team — typically the founder — and then students are connected with other mentors as per their goals.
        </p>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
          Why Mentorship Matters at Skillzo
        </h2>
        <div className="flex flex-col md:flex-row mt-12 gap-8">
          <div className="text-center md:text-left space-y-4">
            <p className="text-base text-gray-200">
              At Skillzo, we believe in the power of connection and shared knowledge. Our mentorship program connects ambitious students with mentors who have real-world experience, offering invaluable advice and support.
            </p>
            <p className="text-base text-gray-200">
              Whether you need guidance on developing your business idea, honing your skills, or navigating challenges, a Skillzo mentor is here to help you succeed.
            </p>
          </div>
          {/* <div className="md:w-1/2 grid grid-cols-2 gap-4 place-items-center">
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentor visual" className="rounded shadow-md" />
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentee visual" className="rounded shadow-md" />
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentorship session visual 1" className="rounded shadow-md" />
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentorship session visual 2" className="rounded shadow-md" />
          </div> */}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Apply</h3>
            <p className="text-base text-gray-300">
              Fill out our mentorship application form to tell us about your goals.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Match</h3>
            <p className="text-base text-gray-300">
              We carefully match you with a mentor based on your interests and needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Connect & Grow</h3>
            <p className="text-base text-gray-300">
              Begin your mentorship sessions and start working towards your goals.
            </p>
          </div>
        </div>
      </section>

      <ProgramImages images={[
        // "/images/mentorship/1.jpg",
        "/images/mentorship/2.png",
        "/images/mentorship/3.png",
        "/images/mentorship/4.png",
        "/images/mentorship/5.png",
        "/images/mentorship/6.png",
        "/images/mentorship/7.png",


      ]}
        gridCols={3}
      />

      {/* Mentor Highlights & Student Success Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Success Stories</h2>
        <p className="text-base text-gray-200 mb-8">
          Hear from our mentors and mentees about the transformative impact of the Skillzo mentorship program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className={`p-6 rounded-lg shadow-md text-left ${t.className}`}>
              <p className="italic text-gray-300 mb-4">{t.quote}</p>
              <p className="font-semibold text-primary">- {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Ready to Get Started?</h2>
        <div className="flex flex-col md:flex-row gap-4">
        <Link href={applicationLinks.mentorship.find} className="bg-primary text-black px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Find a Mentor
          </Link>
          <Link href={applicationLinks.mentorship.join} className="border border-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Become a Mentor
          </Link>

        </div>
        <p className="text-sm text-gray-400 mt-4">Links redirect to application forms.</p>
      </section>
    </div>
  );
}
