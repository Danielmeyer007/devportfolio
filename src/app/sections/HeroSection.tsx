import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 bg-black/30 rounded-xl max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
        Welcome to My Portfolio
      </h2>
      <p className="text-lg max-w-2xl text-white drop-shadow-sm">
        I’m a passionate developer specializing in Web3, AI, and decentralized
        applications.
      </p>
      <a
        href="/contact"
        className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default HeroSection;
