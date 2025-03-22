import Image from "next/image";
import "./globals.css";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-black text-white shadow-md">
        <h1 className="text-2xl font-bold">Daniel Meyer Dev</h1>
        <Image
          src="/danyxdev.jpg"
          alt="Daniel Meyer"
          width={60}
          height={60}
          className="rounded-full border-2 border-white"
        />
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center p-10 gap-6">
        <h2 className="text-4xl font-extrabold">Welcome to My Portfolio</h2>
        <p className="text-lg max-w-2xl">
          I’m a passionate developer specializing in Web3, AI, and decentralized
          applications.
        </p>
        <a
          href="#contact"
          className="bg-foreground text-background px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
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
