// components/PrototypesSection.tsx
import React from "react";
import Image from "next/image";

const prototypes = [
  {
    title: "Prototype One",
    image: "/images/prototype1.jpg",
    description:
      "A cutting-edge Web3 project showcasing decentralized technology.",
    link: "#",
  },
  {
    title: "Prototype Two",
    image: "/images/prototype2.jpg",
    description: "An innovative AI solution that transforms user experiences.",
    link: "#",
  },
  {
    title: "Prototype Three",
    image: "/images/prototype3.jpg",
    description:
      "A creative application blending design and technology seamlessly.",
    link: "#",
  },
];

const PrototypesSection: React.FC = () => {
  return (
    <section
      id="prototypes"
      className="py-20 px-4 bg-black bg-opacity-70 backdrop-blur-sm"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Prototypes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prototypes.map((proto) => (
            <div
              key={proto.title}
              className="relative border border-white/20 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={proto.image}
                alt={proto.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4 bg-black bg-opacity-75">
                <h3 className="text-xl font-semibold text-white">
                  {proto.title}
                </h3>
                <p className="text-white/80 mt-2 text-sm">
                  {proto.description}
                </p>
                <a
                  href={proto.link}
                  className="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrototypesSection;
