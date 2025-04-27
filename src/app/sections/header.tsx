"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cambiar el estado del menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          {/* Lado izquierdo: Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              <Link
                href="/"
                className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)] cursor-pointer"
              >
                <span className="text-white font-bold text-xs md:text-base">
                  DANYX
                </span>
              </Link>
              <div className="absolute -inset-[2px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

          {/* Menú de navegación en pantallas grandes */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav>
              <ul className="flex gap-8 text-sm justify-center">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projectsamples"
                    className="text-white/70 hover:text-white transition"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white/70 hover:text-white transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-black text-white`}
      >
        <nav>
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <Link
                href="/about"
                className="text-white/70 hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/projectsamples"
                className="text-white/70 hover:text-white transition"
              >
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/pricing"
                className="text-white/70 hover:text-white transition"
              >
                Pricing
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
