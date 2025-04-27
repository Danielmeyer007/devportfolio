"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  // State to manage mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          {/* Left: Logo as Clickable Button */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              {/* Logo wrapped in Link component to make it clickable */}
              <Link
                href="/" // Direct to the homepage
                className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)] cursor-pointer" // Added cursor-pointer to make it appear clickable
                aria-label="Go to Homepage" // Accessibility feature
              >
                <span className="text-white font-bold text-xs md:text-base">
                  DANYX
                </span>
              </Link>
              {/* Pulsing effect around the logo */}
              <div className="absolute -inset-[2px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Center: Navigation Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav>
              <ul className="flex gap-8 text-sm justify-center">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white transition"
                  >
                    About Danyx
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projectsamples"
                    className="text-white/70 hover:text-white transition"
                  >
                    Project Samples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white/70 hover:text-white transition"
                  >
                    Pricing & Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-white transition"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right: "Hire Me" Button and Mobile Menu */}
          <div className="flex gap-4 items-center">
            {/* Home Button (Little House Icon) */}
            <Link
              href="/"
              className="p-2 rounded-full bg-gray-800 text-white cursor-pointer hover:bg-gray-600 transition"
              aria-label="Go to Homepage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l9-9 9 9M4 12v8a4 4 0 004 4h8a4 4 0 004-4v-8M9 21V12h6v9"
                />
              </svg>
            </Link>

            {/* "Hire Me" button now links to WhatsApp */}
            <a
              href="https://wa.me/qr/3BHNDE5OJGGEN1" // WhatsApp link
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security for opening external links
              className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0a0a0a] to-[#090909] cursor-pointer"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg border border-black/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></div>
              </div>
              <span className="relative text-white">Hire Me</span>
            </a>

            {/* Hamburger Icon (Mobile Menu) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <nav>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-purple-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Danyx
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projectsamples"
                    className="text-white hover:text-purple-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Project Samples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white hover:text-purple-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Pricing & Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-purple-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
