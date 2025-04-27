"use client";

import React from "react";
import Header from "../sections/header";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-transparent text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Animated content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 py-32 gap-12"
      >
        {/* Profile Image with a smooth pop effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
        >
          <Image
            src="/danyxdev.jpg"
            alt="Danyx Dev"
            width={200}
            height={200}
            className="object-cover w-48 h-48 md:w-64 md:h-64"
          />
        </motion.div>

        {/* About me text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-500 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
            👨‍💻 About Danyx Dev
          </h1>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            Hi! I am{" "}
            <span className="text-purple-400 font-semibold">Danyx Dev</span>, an
            energetic and enthusiastic developer focused on delivering
            outstanding digital experiences. I am deeply passionate about
            crafting the best, high-performing websites and applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            Specialized in{" "}
            <span className="font-semibold text-purple-400">Web 3.0</span>{" "}
            technologies and always staying up-to-date with the latest trends, I
            constantly push boundaries to ensure my projects are cutting-edge
            and future-proof.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            Beyond coding, I pride myself on my excellent{" "}
            <span className="font-semibold text-purple-400">
              customer service
            </span>{" "}
            skills, ensuring seamless communication and satisfaction throughout
            every project. With a strong work ethic and commitment to
            excellence, I&apos;m ready to bring your ideas to life!
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            Let&apos;s build something amazing together. 🚀
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutMePage;
