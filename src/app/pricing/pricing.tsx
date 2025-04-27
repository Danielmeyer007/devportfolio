"use client";

import React from "react";
import Header from "../sections/header"; // Importing the Header component
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Website",
    description:
      "Tailor-made websites built from scratch, focusing on performance, modern design, and your brand identity. Perfect for startups, personal brands, and businesses ready to grow online.",
    price: "Starting at $1,500",
    delivery: "2-4 weeks",
  },
  {
    title: "Web3 & Blockchain Integration",
    description:
      "Upgrade your platform with Web3 technology — smart contracts, crypto payments, NFTs, and more. Stay ahead of the tech revolution.",
    price: "Starting at $2,000",
    delivery: "4-6 weeks",
  },
  {
    title: "Website Redesign",
    description:
      "Breathe new life into your old website with a fresh, modern, and responsive redesign. Faster, sleeker, and better optimized for conversions.",
    price: "Starting at $1,200",
    delivery: "2-3 weeks",
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "On-demand technical support, website updates, performance optimization, and security monitoring. Keep your digital presence powerful and smooth 24/7.",
    price: "$150/month",
    delivery: "Continuous",
  },
  {
    title: "AI & Automation Setup",
    description:
      "Integrate AI tools like chatbots, smart content generators, and customer service automation to boost your website’s functionality and user engagement.",
    price: "Starting at $800",
    delivery: "1-2 weeks",
  },
];

const ServicesPage: React.FC = () => {
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
        {/* Services Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-400 animate-pulse text-center"
        >
          💻 Services & Pricing
        </motion.h1>

        {/* Intro */}
        <p className="max-w-3xl text-center text-gray-300 mb-16 text-lg md:text-xl">
          Every project is unique. My services are completely{" "}
          <span className="text-purple-400 font-semibold">on-demand</span>,
          built around your needs. Whether you&apos;re launching something bold
          or upgrading what you already have, I&apos;m here to bring it to life
          — fast, sleek, and future-ready.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-500 hover:scale-105 transition-transform flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-purple-300 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
              </div>
              <div className="mt-auto">
                <p className="text-lg text-white font-semibold mb-1">
                  {service.price}
                </p>
                <p className="text-sm text-gray-400">
                  Delivery Time: {service.delivery}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
            Ready to Build Something Legendary?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 p-4 mt-6 rounded-full text-lg font-bold transition"
          >
            Get Started Today 🚀
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
