"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Community", href: "/community" },
  { name: "Mentorship", href: "/mentorship" },
  { name: "Stories", href: "/stories" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-transparent backdrop-blur z-50 sticky top-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/skillzo_transparent.png"} width={352 / 2.5} height={87 / 2.5} alt="Skillzo Logo" />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 items-center text-base font-semibold">
        {navLinks.map(link => (
          <Link key={link.name} href={link.href} className="hover:text-yellow-400 transition">
            {link.name}
          </Link>
        ))}
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
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
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