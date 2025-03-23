// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-10 bg-black bg-opacity-60 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Profile Picture and Name */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/src/app/images/danyxdev.jpg" // Place your picture at public/images/danyxdev.jpg
              alt="Daniel Meyer"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-white font-bold text-lg">Daniel Meyer Dev</span>
        </div>
        {/* Center: Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition"
          >
            About Me
          </Link>
          <Link
            href="/skills"
            className="text-white hover:text-gray-300 transition"
          >
            Skills
          </Link>
          <Link
            href="/prototypes"
            className="text-white hover:text-gray-300 transition"
          >
            Prototypes
          </Link>
        </nav>
        {/* Right: Hire Me Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/hire-me">
            <div className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-600 transition">
              Hire Me
            </div>
          </Link>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
