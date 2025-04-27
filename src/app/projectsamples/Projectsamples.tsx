"use client";

import React from "react";
import Header from "../sections/header";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Danyx Dev Portfolio",
    description:
      "A modern personal portfolio showcasing cutting-edge Web 3.0 technologies, AI integrations, and a focus on seamless user experiences. Designed to be sleek, responsive, and up-to-date with the latest tech trends.",
    link: "https://danyx-portfolio-599l.vercel.app",
  },
  {
    title: "Oscar Business Website",
    description:
      "A professional, elegant business website designed for a real-world client. Focused on clear messaging, smooth navigation, and a premium look while being mobile-first and high-performing.",
    link: "https://oscarwebsite.vercel.app",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-transparent text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Animated Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-6 md:px-20 py-32 gap-12"
      >
        {/* Projects Title with Glow Effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-400 animate-pulse"
        >
          🚀 My Projects
        </motion.h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-purple-500 hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold text-purple-300 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-semibold"
              >
                Visit Site
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
