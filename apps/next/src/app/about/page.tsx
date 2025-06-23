"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const instagramPosts = [
  {
    href: "https://www.instagram.com/p/C-hO07ISviE/",
    user: "skillzo_official",
    platform: "Instagram",
    avatarClass: "bg-gradient-to-br from-purple-500 to-pink-500",
    emoji: "📱",
    preview: "Instagram Post Preview",
    text: "Amazing collaboration with @partner! 🚀",
    meta: "5 weeks ago • 30 reactions",
  },
  {
    href: "https://www.linkedin.com/company/skillzoco/",
    user: "Skillzo Team",
    platform: "LinkedIn",
    avatarClass: "bg-blue-600",
    emoji: "💼",
    preview: "LinkedIn Post Preview",
    text: "Excited to announce our latest partnership! 🎉",
    meta: "1 day ago • 456 reactions",
  },
  {
    href: "https://www.instagram.com/p/C-hO07ISviE/",
    user: "skillzo_community",
    platform: "Instagram",
    avatarClass: "bg-gradient-to-br from-orange-500 to-red-500",
    emoji: "🌟",
    preview: "Instagram Post Preview",
    text: "Our community is growing stronger every day! 💪",
    meta: "3 hours ago • 856 likes",
  },
  {
    href: "https://www.linkedin.com/company/skillzoco/",
    user: "Skillzo Leadership",
    platform: "LinkedIn",
    avatarClass: "bg-green-600",
    emoji: "🎯",
    preview: "LinkedIn Post Preview",
    text: "Proud to be featured in TechCrunch! 🚀",
    meta: "2 days ago • 789 reactions",
  },
  {
    href: "https://www.instagram.com/p/C-hO07ISviE/",
    user: "skillzo_events",
    platform: "Instagram",
    avatarClass: "bg-gradient-to-br from-blue-500 to-cyan-500",
    emoji: "🎪",
    preview: "Instagram Post Preview",
    text: "What an incredible event! Thank you everyone! 🙏",
    meta: "5 hours ago • 1.5k likes",
  },
  {
    href: "https://www.linkedin.com/company/skillzoco/",
    user: "Skillzo Innovation",
    platform: "LinkedIn",
    avatarClass: "bg-purple-600",
    emoji: "🔬",
    preview: "LinkedIn Post Preview",
    text: "Innovation at its finest! New features coming soon! 🚀",
    meta: "1 week ago • 1.2k reactions",
  },
  {
    href: "https://www.instagram.com/p/C-hO07ISviE/",
    user: "skillzo_success",
    platform: "Instagram",
    avatarClass: "bg-gradient-to-br from-yellow-500 to-orange-500",
    emoji: "🏆",
    preview: "Instagram Post Preview",
    text: "Success stories that inspire! Keep pushing forward! 💫",
    meta: "1 day ago • 2.1k likes",
  },
];

const teamMembers = Array.from({ length: 8 }).map((_, i) => ({
  name: `Name ${i + 1}`,
  position: `Position ${i + 1}`,
  img: `https://placehold.co/96x96`,
}));

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: "left" | "right") {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollAmount = 320;
    if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  return (
    <div className="bg-black text-white min-h-screen relative flex flex-col dark">
      {/* Hero highlight left */}
      <div className="pointer-events-none absolute left-0 top-24 md:top-32 h-40 w-24 md:w-40 z-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-full w-full" style={{ background: "linear-gradient(180deg, #FF008A 0%, #6100FF 80%)", filter: "blur(48px)", opacity: 0.10 }} />
      </div>
      {/* SVG Accent at the Top */}
      <svg className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-screen h-auto" width="1171" fill="none" viewBox="0 0 1171 241" style={{ zIndex: 0 }} aria-hidden="true">
        <g filter="url(#filter0_f)" opacity="0.16">
          <path fill="url(#paint0_linear)" d="M731.735-179.55C596.571-157.762 516.36-74.181 552.576 7.132s175.148 129.569 310.311 107.781C998.051 93.125 1078.26 9.545 1042.05-71.769c-36.22-81.313-175.152-129.568-310.315-107.781" />
          <path fill="url(#paint1_linear)" d="M378 114.106c142.489 0 258-68.218 258-152.368 0-84.151-115.511-152.368-258-152.368S120-122.413 120-38.262s115.511 152.368 258 152.368" />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="567.5" x2="1029.02" y1="1.04" y2="64.647" gradientUnits="userSpaceOnUse">
            <stop stopColor="#001AFF" />
            <stop offset="1" stopColor="#6EE5C2" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="155" x2="511.855" y1="-11.023" y2="-162.127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC83A" />
            <stop offset="0.504" stopColor="#FF008A" />
            <stop offset="1" stopColor="#6100FF" />
          </linearGradient>
          <filter id="filter0_f" width="1170.74" height="550.775" x="0" y="-310.63" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="60" />
          </filter>
        </defs>
      </svg>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start w-full px-4 my-6 sm:px-4 sm:my-0 md:px-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden z-10 my-8 md:my-12">
          <h2 className="text-base md:text-lg font-bold font-heading" style={{ color: "#ffcc00" }}>About Us</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide font-heading">
            Our Story & Mission
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl mx-auto">
            This is a placeholder for a jaw-dropping, minimalistic, and futuristic about page. <br className="hidden md:inline" />
            Learn more about Skillzo, our journey, and the people behind the vision.<br className="hidden md:inline" />
            All text and images are placeholders.
          </p>
          <Link href="#founder" className="bg-yellow-400 text-black px-10 py-3 rounded-full font-bold text-xl shadow hover:bg-yellow-500 transition">Meet the Founder</Link>
        </section>
        {/* About Content Section */}
        <section className="flex-1 flex flex-col items-center justify-start w-full px-4 my-6 sm:px-4 sm:my-0 md:px-8">
          <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl flex flex-col gap-4 py-2 sm:py-4 md:py-8 my-6 sm:my-8 md:my-12">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading" style={{ color: "#ffcc00" }}>Our Mission</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-body">
                Placeholder text for Skillzo&apos;s mission. Replace this with a compelling story about your vision, values, and what makes your platform unique. <br />
                Use this space to connect with your audience and share your journey. Add as much text as you need—this section is designed for readability and flow.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading" style={{ color: "#ffcc00" }}>What We Do</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-body">
                Placeholder for a brief description of what Skillzo offers. Highlight your core features, approach, and the impact you aim to create. <br />
                This section can be expanded with more details as needed. The layout is open and text-friendly, perfect for longer content.
              </p>
            </div>
          </div>
          {/* Founder Section */}
          <section id="founder" className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col gap-8 my-6 sm:my-8 md:my-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading mb-4" style={{ color: "#ffcc00" }}>Founder</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Image src="https://placehold.co/128x128" unoptimized width={128} height={128} alt="Founder Placeholder" className="w-28 h-28 rounded-full object-cover grayscale mb-4 md:mb-0 md:mr-6" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2" style={{ color: "#ffcc00" }}>Founder Name</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 font-body">
                  This is a short placeholder description for the founder of Skillzo.co. Replace this with a real bio to tell your story and vision.<br />
                  Add more details about the founder&apos;s background, expertise, and passion.
                </p>
              </div>
            </div>
          </section>
          {/* Founder highlight right */}
          <div className="pointer-events-none absolute right-0 md:top-[1200px] top-[900px] h-40 w-24 md:w-40 z-0" aria-hidden="true">
            <div className="absolute right-0 top-0 h-full w-full" style={{ background: "linear-gradient(180deg, #FFC83A 0%, #FF008A 100%)", filter: "blur(48px)", opacity: 0.10 }} />
          </div>
          {/* Core Team Section */}
          <section className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl flex flex-col items-center my-8 md:my-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading mb-8" style={{ color: "#ffcc00" }}>Core Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center transition-transform duration-200 ease-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                  <Image unoptimized src={member.img} width={96} height={96} alt="Team Member" className="w-24 h-24 rounded-full object-cover grayscale mb-3" />
                  <div className="font-bold font-heading text-[#ffcc00]">{member.name}</div>
                  <div className="text-gray-300 text-sm font-body">{member.position}</div>
                </div>
              ))}
            </div>
          </section>
          {/* Core Team highlight left */}
          <div className="pointer-events-none absolute left-0 md:top-[1600px] top-[1400px] h-40 w-24 md:w-40 z-0" aria-hidden="true">
            <div className="absolute left-0 top-0 h-full w-full" style={{ background: "linear-gradient(180deg, #6EE5C2 0%, #001AFF 100%)", filter: "blur(48px)", opacity: 0.10 }} />
          </div>
          {/* Media Mentions and Collaborations Section */}
          <section className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl flex flex-col items-center my-8 md:my-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading mb-8" style={{ color: "#ffcc00" }}>Media Mentions & Collaborations</h2>
            <div className="relative w-full">
              {/* Carousel Container */}
              <div className="flex overflow-x-auto gap-6 px-4 py-4 snap-x snap-mandatory scrollbar-hide" ref={carouselRef} id="mediaCarousel">
                {instagramPosts.map((post, i) => (
                  <div key={i} className="flex-shrink-0 w-80 md:w-96 snap-start">
                    <Link href={post.href} target="_blank" rel="noopener noreferrer">
                      <div className="bg-zinc-900/90 border border-yellow-400/20 rounded-xl shadow-md shadow-yellow-400/10 p-4 h-96 hover:border-yellow-400/40 transition-colors">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 ${post.avatarClass} rounded-full mr-3`}></div>
                          <div>
                            <div className="font-semibold text-white text-sm">{post.user}</div>
                            <div className="text-gray-400 text-xs">{post.platform}</div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg h-48 mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl mb-2">{post.emoji}</div>
                            <div className="text-white text-sm">{post.preview}</div>
                          </div>
                        </div>
                        <div className="text-white text-sm mb-2">{post.text}</div>
                        <div className="text-gray-400 text-xs">{post.meta}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Navigation Arrows */}
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors" onClick={() => scrollCarousel("left")}> 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors" onClick={() => scrollCarousel("right")}> 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
