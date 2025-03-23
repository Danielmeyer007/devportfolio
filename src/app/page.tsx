import React from "react";
import Header from "./header";
import HeroSection from "./HeroSection";

import "./globals.css";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col min-h-screen text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center bg-black text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} Daniel Meyer. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
