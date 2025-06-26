"use client";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="text-foreground min-h-screen relative overflow-x-hidden">
      {/* Community Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden">
        <h2 className="text-base md:text-lg font-bold text-primary mb-1">Welcome to the</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide font-cal-sans">
          Skillzo Community
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl mx-auto">
          Connect, collaborate, and grow with India&apos;s most vibrant community of teenpreneurs. Share your journey, learn from others, and unlock new opportunities together.
        </p>
        <Link href="#join"
          className="bg-yellow-400 text-black px-10 py-3 rounded-full font-bold text-xl shadow hover:bg-yellow-500 transition">Join the Community</Link>
      </section>

      {/* Section 2: What Happens Inside */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">What Happens Inside?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Daily Updates */}
          <div className="relative rounded-2xl bg-neutral-900 p-6 flex flex-col items-center text-center shadow-lg h-full overflow-hidden">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background: "radial-gradient(circle at 60% 40%, #40DDC280 0%, #2AC9B033 70%, transparent 100%)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <svg className="mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FFD600"/><path d="M8 10V14M16 10V14M12 8V16" stroke="#18181B" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Daily Updates</h3>
              <p className="text-gray-200 text-base">Get one actionable update every day — from scholarships to competitions and more. Stay ahead with the latest opportunities, handpicked for you.</p>
            </div>
          </div>
          {/* Webinars & Events */}
          <div className="relative rounded-2xl bg-neutral-900 p-6 flex flex-col items-center text-center shadow-lg h-full overflow-hidden">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background: "radial-gradient(circle at 60% 40%, #FF52A280 0%, #B4298E33 70%, transparent 100%)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <svg className="mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FFD600"/><path d="M8 17V7M16 17V7M12 17V7" stroke="#18181B" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Webinars & Events</h3>
              <p className="text-gray-200 text-base">Be the first to know about Skillzo workshops, student panels, and expert webinars. Learn, interact, and grow with the best in the field.</p>
            </div>
          </div>
          {/* Exclusive Opportunities */}
          <div className="relative rounded-2xl bg-neutral-900 p-6 flex flex-col items-center text-center shadow-lg h-full overflow-hidden">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background: "radial-gradient(circle at 60% 40%, #FF7B4A80 0%, #FF5B3733 70%, transparent 100%)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <svg className="mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FFD600"/><path d="M12 8V12M12 16H12.01" stroke="#18181B" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Exclusive Opportunities</h3>
              <p className="text-gray-200 text-base">Access programs, internships, and resources only available to our community members. Unlock doors to your future.</p>
            </div>
          </div>
          {/* 1:1 Mentorship Access */}
          <div className="relative rounded-2xl bg-neutral-900 p-6 flex flex-col items-center text-center shadow-lg h-full overflow-hidden">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background: "radial-gradient(circle at 60% 40%, #6C63FF80 0%, #3A86FF33 70%, transparent 100%)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <svg className="mb-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FFD600"/><path d="M8 12H16M12 8V16" stroke="#18181B" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="font-bold text-lg mb-2 text-yellow-400">1:1 Mentorship Access</h3>
              <p className="text-gray-200 text-base">Book one-on-one calls with Skillzo mentors and team members directly through the group. Get personalized guidance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Join? */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-yellow-400">Why Join?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-full">
          <div className="relative bg-neutral-900 border border-yellow-400/20 rounded-xl shadow-lg shadow-yellow-400/10 p-6 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none" style={{background: "radial-gradient(circle at 35% 35%, rgba(255, 214, 0, 0.10) 0%, rgba(255, 214, 0, 0.04) 60%, rgba(0,0,0,0.01) 100%)", filter: "blur(8px)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Stay Ahead</h3>
              <p className="text-gray-200 text-base">Never miss out on real-time global and national opportunities—scholarships, competitions, and more, delivered right to you.</p>
            </div>
          </div>
          <div className="relative bg-neutral-900 border border-yellow-400/20 rounded-xl shadow-lg shadow-yellow-400/10 p-6 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none" style={{background: "radial-gradient(circle at 35% 35%, rgba(255, 214, 0, 0.10) 0%, rgba(255, 214, 0, 0.04) 60%, rgba(0,0,0,0.01) 100%)", filter: "blur(8px)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Find Your Path</h3>
              <p className="text-gray-200 text-base">No more confusion or feeling lost. Get clear direction, curated resources, and step-by-step guidance to kickstart your journey.</p>
            </div>
          </div>
          <div className="relative bg-neutral-900 border border-yellow-400/20 rounded-xl shadow-lg shadow-yellow-400/10 p-6 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none" style={{background: "radial-gradient(circle at 35% 35%, rgba(255, 214, 0, 0.10) 0%, rgba(255, 214, 0, 0.04) 60%, rgba(0,0,0,0.01) 100%)", filter: "blur(8px)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Mentorship & Support</h3>
              <p className="text-gray-200 text-base">Access 1:1 mentorship, peer support, and a team that cares about your growth—all for free, with no hidden costs.</p>
            </div>
          </div>
          <div className="relative bg-neutral-900 border border-yellow-400/20 rounded-xl shadow-lg shadow-yellow-400/10 p-6 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none" style={{background: "radial-gradient(circle at 35% 35%, rgba(255, 214, 0, 0.10) 0%, rgba(255, 214, 0, 0.04) 60%, rgba(0,0,0,0.01) 100%)", filter: "blur(8px)"}}></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Purpose-Driven Community</h3>
              <p className="text-gray-200 text-base">Join a vibrant, positive group of students who want to make an impact, share ideas, and grow together—where you truly belong.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community in Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">Community in Action</h2>
        <div className="space-y-8">
          <div className="bg-yellow-400 rounded-lg shadow-md p-6">
            <p className="italic text-lg text-black mb-2">&quot;Because of the Skillzo Community, I found a fellowship that changed how I think.&quot;</p>
            <p className="text-sm text-black">— Zoya, Class 10, Jharkhand</p>
          </div>
          <div className="bg-yellow-400 rounded-lg shadow-md p-6">
            <p className="italic text-lg text-black mb-2">&quot;Every time I check the group, I learn something new. It&apos;s not just info — it&apos;s impact.&quot;</p>
            <p className="text-sm text-black">— Saurabh, Class 12, Bihar</p>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-yellow-400">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-12 md:gap-8">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400 text-black text-3xl font-bold mb-6 shadow-lg">1</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Sign Up Using the Form</h3>
            <p className="text-gray-300 text-lg">Tell us a bit about yourself — it only takes a minute.</p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400 text-black text-3xl font-bold mb-6 shadow-lg">2</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Get Added to the Community</h3>
            <p className="text-gray-300 text-lg"> You&apos;ll start receiving daily updates, handpicked for students like you.</p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400 text-black text-3xl font-bold mb-6 shadow-lg">3</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Have a question? Just DM the admin</h3>
            <p className="text-gray-300 text-lg">Whether it&apos;s a doubt or a dream, we&apos;re here to help you move forward.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Code of Respect */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-400">Code of Respect</h2>
        <div className="bg-neutral-900 border border-yellow-400/20 rounded-xl shadow-md shadow-yellow-400/10 p-6 text-center">
          <p className="text-gray-200 text-lg mb-2">This is a growth-first, safe space.</p>
          <p className="text-gray-400">No spam. No distractions. Just support, access, and action.</p>
        </div>
      </section>
    </main>
  );
}