// components/SkillsSection.tsx
import React from "react";

const skills = [
  { name: "Web3", level: "Expert" },
  { name: "Artificial Intelligence", level: "Advanced" },
  { name: "Decentralized Applications", level: "Advanced" },
  { name: "Full-Stack Development", level: "Expert" },
  { name: "UI/UX Design", level: "Intermediate" },
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 border border-white/20 rounded-xl shadow-lg bg-black bg-opacity-50"
            >
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <p className="text-white/80 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
