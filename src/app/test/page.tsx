'use client'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_24%,rgba(96,165,250,0.03)_25%,rgba(96,165,250,0.03)_26%,transparent_27%,transparent_74%,rgba(147,51,234,0.03)_75%,rgba(147,51,234,0.03)_76%,transparent_77%),linear-gradient(rgba(96,165,250,0.03)_50%,transparent_50%)] bg-[size:50px_50px]" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600/20 rounded-full blur-xl animate-pulse [animation-delay:1s]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered content box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-center bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-lg border border-blue-400/30 rounded-2xl px-6 py-10 shadow-[0_8px_32px_rgba(96,165,250,0.3)]"
      >
        {/* Circuit corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-400" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-400" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-400" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-400" />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
          Catalyst
        </h1>

        {/* Typing effect */}
        <TypeAnimation
          sequence={[
            "Ottawa's first hardware hackathon", // Text
            2000,                                 // Wait 2s
            "",                                   // Clear text
            500,
            "Where hardware meets imagination",   // Optional: second line
            2000,
            "", 500,
            "Join the revolution.",               // Optional third message
            2000
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-base sm:text-lg lg:text-xl text-gray-300 font-mono leading-relaxed"
        />
      </motion.div>
    </section>
  );
}
