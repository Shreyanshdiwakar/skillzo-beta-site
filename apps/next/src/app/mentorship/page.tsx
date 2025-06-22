import Image from "next/image";
import Link from "next/link";

export default function MentorshipPage() {
  return (
    <div className="relative font-cal-sans">

      {/* Hero Section - Purpose */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden">
        <h2 className="text-base md:text-lg font-bold text-primary mb-1">Skillzo Mentorship</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide font-cal-sans w-full sm:w-2/3 md:w-1/2">
          Unlock Your Potential with 1:1 Mentorship
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl mx-auto">
          Mentorship at Skillzo is a game-changer for aspiring teenpreneurs. Get personalized guidance, insights, and support from experienced individuals to navigate your entrepreneurial journey.
        </p>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
          Why Mentorship Matters at Skillzo
        </h2>
        <div className="flex flex-col md:flex-row mt-12 gap-8">
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <p className="text-base text-gray-200">
              At Skillzo, we believe in the power of connection and shared knowledge. Our mentorship program connects ambitious students with mentors who have real-world experience, offering invaluable advice and support.
            </p>
            <p className="text-base text-gray-200">
              Whether you need guidance on developing your business idea, honing your skills, or navigating challenges, a Skillzo mentor is here to help you succeed.
            </p>
            <p className="text-base text-gray-200">
              Whether you need guidance on developing your business idea, honing your skills, or navigating challenges, a Skillzo mentor is here to help you succeed.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4 place-items-center">
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentor visual" className="rounded shadow-md" />
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentee visual" className="rounded shadow-md" />
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentorship session visual 1" className="rounded shadow-md" />
            <Image src="https://v0.dev/placeholder.svg?width=200&height=150" width={200} height={150} alt="Mentorship session visual 2" className="rounded shadow-md" />
          </div>
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
              Begin your 1:1 mentorship sessions and start working towards your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mentor Highlights & Student Success Section */}
      <section className="px-4 py-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Success Stories</h2>
        <p className="text-base text-gray-200 mb-8">
          Hear from our mentors and mentees about the transformative impact of the Skillzo mentorship program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-md text-left border-2 border-primary bg-background">
            <p className="italic text-gray-300 mb-4">
              "Mentoring at Skillzo has been incredibly rewarding. Seeing my mentee develop their skills and confidence is a fantastic feeling."
            </p>
            <p className="font-semibold text-primary">- Experienced Mentor</p>
          </div>
          <div className="p-6 rounded-lg shadow-md text-left border-2 border-primary bg-[var(--success-bg,rgba(0,0,0,0.5))]">
            <p className="italic text-gray-300 mb-4">
              "My mentor provided me with practical advice and motivation that helped me launch my first project. Highly recommend!"
            </p>
            <p className="font-semibold text-primary">- Skillzo Student</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Ready to Get Started?</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="#become-mentor" className="bg-primary text-black px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Become a Mentor
          </Link>
          <Link href="#find-mentor" className="bg-primary text-black px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Find a Mentor
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-4">Links redirect to application forms.</p>
      </section>
    </div>
  );
}
