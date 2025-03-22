// components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-black bg-opacity-70 backdrop-blur-sm"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="text-white max-w-3xl mx-auto text-lg">
          I&apos;m Daniel Meyer, a dedicated developer with a passion for
          innovation in Web3, AI, and decentralized applications. I thrive on
          building solutions that transform ideas into reality.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
