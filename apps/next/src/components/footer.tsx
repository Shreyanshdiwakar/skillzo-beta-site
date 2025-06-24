"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import Image from 'next/image';

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
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com/skillzo.co" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-primary transition flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 9.7 353.3 8c-35.3-1.7-141.3-1.7-176.6 0-35.3 1.7-66.7 9.9-92.9 36.2S9.7 123.4 8 158.7c-1.7 35.3-1.7 141.3 0 176.6 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.3 1.7 141.3 1.7 176.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.3 1.7-141.3 0-176.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"/>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/skillzoco/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-primary transition flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.7 106.7 125.2V448z"/>
              </svg>
            </Link>
          </div>
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
