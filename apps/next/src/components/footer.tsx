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
              <Image
                src="/logos/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
                className="object-contain"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/skillzoco/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-primary transition flex items-center justify-center">
              <Image
                src="/logos/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="object-contain"
              />
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
