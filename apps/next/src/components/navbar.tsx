"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { name: "Programs", href: "/programs", dropdown: [
    { name: "Mentorship", href: "/mentorship" },
    { name: "Stories", href: "/stories" },
  ] },
  { name: "Community", href: "/community" },
  // { name: "Mentorship", href: "/mentorship" },
  // { name: "Stories", href: "/stories" },
  // { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
            <div key={link.name} className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Programs trigger is just a span, not a link */}
              <span className="hover:text-yellow-400 transition flex items-center gap-1 cursor-pointer select-none">
                {link.name}
                <svg className="w-4 h-4 ml-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </span>
              {/* Mega menu dropdown: 2 rows, 4 cols, IgniteBharat takes first col and both rows */}
              <div className={
                `absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[900px] rounded-2xl bg-white shadow-2xl border border-neutral-200 transition-opacity z-50 p-6 overflow-visible ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
              }>
                {/* Yellow radial effect only over dropdown container */}
                <span className='pointer-events-none absolute inset-0 w-full h-full rounded-2xl' style={{background: 'radial-gradient(circle at 40% 40%, #ffe06655 0%, #fffbe622 70%, transparent 100%)', zIndex: 0}} />
                <div className="grid grid-cols-4 grid-rows-2 gap-4 flex-1 relative z-10 min-h-[320px]">
                  {/* IgniteBharat: first col, spans 2 rows */}
                  <Link href="/ignitebharat" onClick={() => setDropdownOpen(false)} className="relative col-span-1 row-span-2 bg-neutral-100 rounded-2xl p-6 border-2 border-yellow-400 shadow-lg hover:shadow-2xl transition flex flex-col items-center justify-center transform-gpu hover:scale-105 duration-300 overflow-hidden min-h-[220px] max-h-[340px]">
                    <img src="https://v0.dev/placeholder.svg?width=120&height=80" alt="IgniteBharat" className="rounded-xl mb-4 w-full h-20 object-cover relative z-10" />
                    <span className="font-bold text-lg mb-1 text-neutral-900 relative z-10">IgniteBharat</span>
                    <span className="text-neutral-500 text-sm text-center relative z-10">Lorem ipsum description</span>
                  </Link>
                  {/* Other 6 items, each 1 cell */}
                  <Link href="/community" onClick={() => setDropdownOpen(false)} className="bg-neutral-100 rounded-xl p-5 hover:bg-yellow-50 transition flex flex-col items-start shadow-sm border border-neutral-100 transform-gpu hover:scale-105 hover:shadow-lg duration-300">
                    <span className="font-bold text-base mb-1 text-neutral-900">Community</span>
                    <span className="text-neutral-500 text-sm">Lorem ipsum description</span>
                  </Link>
                  <Link href="/e-21" onClick={() => setDropdownOpen(false)} className="bg-neutral-100 rounded-xl p-5 hover:bg-yellow-50 transition flex flex-col items-start shadow-sm border border-neutral-100 transform-gpu hover:scale-105 hover:shadow-lg duration-300">
                    <span className="font-bold text-base mb-1 text-neutral-900">E-21</span>
                    <span className="text-neutral-500 text-sm">Lorem ipsum description</span>
                  </Link>
                  <Link href="/sparkle" onClick={() => setDropdownOpen(false)} className="bg-neutral-100 rounded-xl p-5 hover:bg-yellow-50 transition flex flex-col items-start shadow-sm border border-neutral-100 transform-gpu hover:scale-105 hover:shadow-lg duration-300">
                    <span className="font-bold text-base mb-1 text-neutral-900">Sparkle</span>
                    <span className="text-neutral-500 text-sm">Lorem ipsum description</span>
                  </Link>
                  <Link href="/stories" onClick={() => setDropdownOpen(false)} className="bg-neutral-100 rounded-xl p-5 hover:bg-yellow-50 transition flex flex-col items-start shadow-sm border border-neutral-100 transform-gpu hover:scale-105 hover:shadow-lg duration-300">
                    <span className="font-bold text-base mb-1 text-neutral-900">Skillzo Stories</span>
                    <span className="text-neutral-500 text-sm">Lorem ipsum description</span>
                  </Link>
                  <Link href="/internship-accelerator" onClick={() => setDropdownOpen(false)} className="bg-neutral-100 rounded-xl p-5 hover:bg-yellow-50 transition flex flex-col items-start shadow-sm border border-neutral-100 transform-gpu hover:scale-105 hover:shadow-lg duration-300">
                    <span className="font-bold text-base mb-1 text-neutral-900">Internship Accelerator</span>
                    <span className="text-neutral-500 text-sm">Lorem ipsum description</span>
                  </Link>
                  <Link href="/mentorship" onClick={() => setDropdownOpen(false)} className="bg-neutral-100 rounded-xl p-5 hover:bg-yellow-50 transition flex flex-col items-start shadow-sm border border-neutral-100 transform-gpu hover:scale-105 hover:shadow-lg duration-300">
                    <span className="font-bold text-base mb-1 text-neutral-900">1:1 Mentorship</span>
                    <span className="text-neutral-500 text-sm">Lorem ipsum description</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Link key={link.name} href={link.href} className="hover:text-yellow-400 transition">
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
                href={link.href}
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