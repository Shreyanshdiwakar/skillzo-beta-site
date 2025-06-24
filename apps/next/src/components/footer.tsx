"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export default function Footer() {
  return (
    <footer className="bg-backgroud text-background-foreground py-12 px-4 md:px-12 lg:px-18 border-t border-neutral-800 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition">Programs</Link></li>
              <li><Link href="/community" className="hover:text-primary transition">Community</Link></li>
              <li><Link href="/mentorship" className="hover:text-primary transition">Mentorship</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-3 text-primary">Legal</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup (spans 2 columns on mobile) */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-lg font-bold mb-3 text-primary">Newsletter</h3>
            <p className="text-base mb-3 text-neutral-400">Get updates, opportunities, and stories from Skillzo in your inbox.</p>
            <form className="w-full max-w-md">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="w-full px-3 py-1.5 pr-24 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-primary text-sm"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-0 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-primary text-black font-bold hover:bg-yellow-400/90 transition text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t border-neutral-800 mb-16">
          <p className="text-sm text-neutral-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Skillzo. All rights reserved.
          </p>
          <SocialIcons />
        </div>

        {/* Skillzo Logo */}
        <div className="relative">
          <SkillzoFooterLogo />
        </div>
      </div>
    </footer>
  );
}

// Framer Motion animated Skillzo logo for footer
function SkillzoFooterLogo() {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isActive = true;
    async function sequence() {
      while (isActive) {
        // Right to left (normal speed)
        await controls.start({ backgroundPosition: ["200% 50%", "-200% 50%"], transition: { duration: 7, ease: "linear" } });
        // Left to right (double speed)
        await controls.start({ backgroundPosition: ["-200% 50%", "200% 50%"], transition: { duration: 3.5, ease: "linear" } });
      }
    }
    if (inView) {
      sequence();
    } else {
      controls.set({ backgroundPosition: "-200% 50%" });
    }
    return () => { isActive = false; };
  }, [inView, controls]);

  return (
    <motion.span
      ref={ref}
      className="w-full text-center text-[25vw] font-extrabold tracking-tight leading-none pointer-events-auto select-none z-0 skillzo-gradient-text"
      style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
      animate={controls}
      initial={{ backgroundPosition: "-200% 50%" }}
      whileHover={{ scale: 1.07, backgroundPosition: "200% 50%" }}
    >
      Skillzo
    </motion.span>
  );
}

export function SocialIcons({ className }: { className?: ClassValue }) {
  return (
    <>
      <div className={cn("flex h-auto flex-wrap items-center justify-center gap-4", className)}>
      <Link href={"https://instagram.com/skillzo.co"} className={cn("group relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 transition-all duration-500")}>
          <svg
            className="relative z-10 fill-gray-900 transition-all duration-500 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
              fill=""
            />
            <path
              d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
              fill=""
            />
            <defs>
              <radialGradient
                id="paint0_radial_7092_54404"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)"
              >
                <stop offset="0.09" stopColor="#FA8F21" />
                <stop offset="0.78" stopColor="#D82D7E" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_7092_54404"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)"
              >
                <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
                <stop offset="1" stopColor="#8C3AAA" />
              </radialGradient>
            </defs>
          </svg>
          <div className="absolute left-0 top-full z-0 size-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 transition-all duration-500 group-hover:top-0"></div>
        </Link>
        {/* Gmail */}
        <Link href={"mailto:adarsh@skillzo.co"} className={cn("group relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 transition-all duration-500")}>
          <svg
            className="relative z-10 fill-black transition-all duration-300 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 54 41"
            fill="none"
          >
            <path
              d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
            />
            <path
              d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
            />
            <path
              d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
            />
            <path
              d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
            />
            <path
              d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
            />
          </svg>
          <div className="absolute left-0 top-full z-0 size-full rounded-full bg-black transition-all duration-500 group-hover:top-0" />
        </Link>
        {/* LinkedIn */}
        <Link href={"https://www.linkedin.com/company/skillzoco/"} className={cn("group relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 transition-all duration-500")}
          target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg
            className="relative z-10 fill-black transition-all duration-300 group-hover:fill-white"
            width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.1 9.5H9.1V17H7.1V9.5ZM8.1 8.5C7.5 8.5 7 8 7 7.4C7 6.8 7.5 6.3 8.1 6.3C8.7 6.3 9.2 6.8 9.2 7.4C9.2 8 8.7 8.5 8.1 8.5ZM10.7 9.5H12.6V10.4H12.6C12.9 9.9 13.6 9.3 14.6 9.3C16.5 9.3 17 10.5 17 12.1V17H15V12.6C15 11.7 14.8 11.1 14 11.1C13.2 11.1 12.9 11.7 12.9 12.6V17H10.7V9.5Z" />
          </svg>
          <div className="absolute left-0 top-full z-0 size-full rounded-full bg-blue-700 transition-all duration-500 group-hover:top-0" />
        </Link>
      </div>
    </>
  );
}
