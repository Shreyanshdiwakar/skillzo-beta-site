"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
    { name: "Community", href: "/community", desc: "A curated WhatsApp-based peer community where students receive daily opportunities, mentorship access, and real-time updates on scholarships, internships, fellowships, and more." },
    { name: "IgniteBharat", href: "/programs/ignitebharat", desc: "Lorem ipsum description" },
    { name: "E-21", href: "/e-21", desc: "Lorem ipsum description" },
    { name: "Sparkle", href: "/sparkle", desc: "Lorem ipsum description" },
    { name: "Skillzo Stories", href: "/stories", desc: "Lorem ipsum description" },
    { name: "1:1 Mentorship", href: "/mentorship", desc: "Lorem ipsum description" },
  ] },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-transparent backdrop-blur z-50 sticky top-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
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
        <div className="absolute top-full left-0 w-full bg-neutral-950/95 shadow-lg flex flex-col items-center py-6 gap-4 md:hidden z-50 animate-fade-in">
          {/* Flat list for mobile: show all links including dropdown children */}
          {navLinks.map(link => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href ?? "/"}
                className="text-lg font-semibold hover:text-yellow-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && link.dropdown.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold hover:text-yellow-400 transition pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </React.Fragment>
          ))}
          <Link
            href="#join"
            className="bg-primary text-black px-6 py-3 rounded-full font-bold text-lg shadow hover:bg-yellow-500 transition mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Join Skillzo
          </Link>
        </div>
      )}
    </nav>
  );
}