import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PrototypesSection from "../components/PrototypesSection";
import ContactSection from "../components/ContactSection";
import "../globals.css";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col min-h-screen text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/blackholewallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PrototypesSection />
        <ContactSection />
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
