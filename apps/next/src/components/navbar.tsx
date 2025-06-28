"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

type  NavLink =  {
  name: string;
  href?: string;
  dropdown?: {
    name: string;
    href: string;
    desc: string;
    ignite?: boolean;
  }[]
}

const navLinks : NavLink[] = [
  { name: "Programs", dropdown: [
    { name: "Community", href: "/community", desc: "A curated WhatsApp-based peer community for daily opportunities, mentorship, and real-time updates." },
    { name: "Skillzo Stories", href: "/programs/skillzo-stories", desc: "Inspiring the next generation." },
    { name: "Sparkle", href: "/programs/sparkle", desc: "Learn, build, and pitch like a founder — while you're still in school." },
    { name: "IgniteBharat", href: "/programs/ignitebharat", desc: "Turning grassroots passion into entrepreneurial action." },
    { name: "E-21", href: "/programs/e-21", desc: "Unlock your entrepreneurial spirit in school." },
    { name: "1:1 Mentorship", href: "/mentorship", desc: "Talk to someone who's been there." },
  ] },
  { name: "Community", href: "/community"},
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faq"},
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showLogo, setShowLogo] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        // Scrolling down
        setShowLogo(false);
      } else {
        // Scrolling up
        setShowLogo(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full flex items-center justify-between px-4 md:px-8 py-4 bg-transparent backdrop-blur z-50 sticky top-0 transition-all duration-700",
        showLogo ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
      )}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <Image priority src={"/skillzo_transparent.png"} width={352 / 3} height={87 / 3} alt="Skillzo Logo" />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 items-center text-base font-semibold">
        {navLinks.map(link =>
          link.dropdown ? (
            <HoverCard key={link.name} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <span className="hover:text-yellow-400 transition flex items-center gap-1 cursor-pointer select-none">
            {link.name}
                  <svg className="w-4 h-4 ml-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="center"
                className="mt-2 w-[700px] rounded-xl bg-accent text-accent-foreground shadow-xl border border-muted p-4"
              >
                <div className="grid grid-cols-3 gap-4">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "bg-card text-card-foreground rounded-lg p-4 border border-muted shadow transition-shadow duration-200 flex flex-col items-start min-h-[90px] relative overflow-hidden",
                        "hover:bg-muted hover:text-accent-foreground hover:shadow-lg hover:border-yellow-300"
                      )}
                    >
                      {/* Subtle gloss only on top left, like mentors */}
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
                      <span className="font-bold text-base mb-1 relative z-10">{item.name}</span>
                      <span className="text-xs relative z-10">{item.desc}</span>
          </Link>
        ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Link key={link.name} href={link.href ?? "/"} className="hover:text-yellow-400 transition">
              {link.name}
            </Link>
          )
        )}
      </div>

      {/* Join Button */}
      <Link href="#join" className="hidden md:inline bg-primary text-black px-6 py-3 rounded-full font-bold text-lg shadow hover:bg-yellow-500 transition">
        Join Skillzo
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-yellow-400 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-yellow-400 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-yellow-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-950/95 shadow-lg flex flex-col py-6 gap-4 md:hidden z-50 animate-fade-in px-4">
          {/* Render navLinks with collapsible dropdowns for mobile */}
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={link.name} className="w-full flex flex-col items-center">
                <button
                  className="w-full text-lg font-semibold flex items-center justify-center gap-2 py-2 hover:text-yellow-400 transition focus:outline-none"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  aria-expanded={openDropdown === idx}
                  aria-controls={`dropdown-${idx}`}
                >
                  <span>{link.name}</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === idx && (
                  <div id={`dropdown-${idx}`} className="w-full grid grid-cols-2 gap-2 py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium hover:text-yellow-400 transition flex flex-col mb-2 items-center text-center px-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <span className="text-xs text-muted-foreground leading-tight">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
            <Link
              key={link.name}
                href={link.href ?? "/"}
                className="text-lg font-semibold hover:text-yellow-400 transition w-full py-2 flex items-center justify-center text-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
            )
          )}
          <Link
            href="#join"
            className="bg-primary text-black px-6 py-3 rounded-full font-bold text-lg shadow hover:bg-yellow-500 transition mt-2 mx-auto"
            onClick={() => setMenuOpen(false)}
          >
            Join Skillzo
          </Link>
        </div>
      )}
    </nav>
  );
}