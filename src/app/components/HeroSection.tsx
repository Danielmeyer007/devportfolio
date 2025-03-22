// components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Welcome to My Portfolio
      </h2>
      <p className="text-lg max-w-2xl text-white">
        I’m a passionate developer specializing in Web3, AI, and decentralized
        applications.
      </p>
      <a
        href="#contact"
        className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default HeroSection;
