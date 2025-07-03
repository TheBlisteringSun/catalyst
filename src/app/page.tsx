'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen from-slate-900 via-purple-900 to-slate-900">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0" />
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Loading...
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Build the future with hardware and code
            </p>
          </div>
        </section>
      </main>
    )
  }

    return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900 animate-pulse" />
        
        {/* Multiple layered circuit patterns */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_24%,rgba(96,165,250,0.05)_25%,rgba(96,165,250,0.05)_26%,transparent_27%,transparent_74%,rgba(147,51,234,0.05)_75%,rgba(147,51,234,0.05)_76%,transparent_77%),linear-gradient(rgba(96,165,250,0.05)_50%,transparent_50%)] bg-[size:80px_80px] animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_24%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_26%,transparent_27%,transparent_74%,rgba(168,85,247,0.03)_75%,rgba(168,85,247,0.03)_76%,transparent_77%)] bg-[size:120px_120px] animate-pulse [animation-delay:2s]" />
        </div>

        {/* Enhanced glowing orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-cyan-400/25 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-20 w-28 h-28 bg-indigo-500/25 rounded-full blur-2xl animate-pulse [animation-delay:3s]" />
        
        {/* Animated light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse [animation-delay:1s]" />

        {/* Subtle corner frames */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-blue-400/40 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-purple-400/40 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-cyan-400/40 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-violet-400/40 rounded-br-lg" />

        {/* Full-screen content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full max-w-7xl mx-auto text-center px-8"
        >
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4 tracking-wider drop-shadow-2xl"
          >
            CATALYST
          </motion.h1>

          {/* Glowing underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-8 max-w-2xl shadow-[0_0_20px_rgba(96,165,250,0.8)]"
          />

          {/* Presented by and Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center mb-12"
          >
            <p className="text-lg text-gray-300 mb-4 font-light tracking-wide">presented by</p>
            <Image 
              src="/logo_red.png" 
              alt="Redshifted" 
              width={400}
              height={100}
              className="opacity-90 filter drop-shadow-lg"
            />
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mb-14"
          >
            <TypeAnimation
              sequence={[
                "Ottawa's first hardware hackathon",
                3000,
                "Where hardware meets imagination",
                3000,
                "Build the impossible. Code the future.",
                3000,
                "Join the revolution.",
                3000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-mono leading-relaxed font-light tracking-wide drop-shadow-lg"
            />
          </motion.div>

          {/* Event info chips */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl px-6 py-3 rounded-2xl text-white border border-blue-400/30 shadow-[0_8px_32px_rgba(96,165,250,0.3)]">
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-medium">November XX 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-2xl text-white border border-purple-400/30 shadow-[0_8px_32px_rgba(147,51,234,0.3)]">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-medium">Ottawa, Canada</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-6 py-3 rounded-2xl text-white border border-cyan-400/30 shadow-[0_8px_32px_rgba(34,211,238,0.3)]">
              <Users className="w-5 h-5" />
              <span className="text-lg font-medium">100+ hackers</span>
            </div>
          </motion.div>

          {/* Register button */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="relative"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              {/* Animated particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-2 -left-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-orange-400 rounded-full animate-ping [animation-delay:0.2s]" />
                <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-red-400 rounded-full animate-ping [animation-delay:0.4s]" />
                <div className="absolute -bottom-1 -right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping [animation-delay:0.6s]" />
                <div className="absolute top-1/2 -left-3 w-1 h-1 bg-orange-400 rounded-full animate-ping [animation-delay:0.8s]" />
                <div className="absolute top-1/2 -right-3 w-1 h-1 bg-red-400 rounded-full animate-ping [animation-delay:1s]" />
              </div>
              
              {/* Main button */}
            
              <a
                href="https://forms.gle/b2n71kTgUs7ddHD98"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform shadow-[0_4px_20px_rgba(59,130,246,0.6)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.8)] border-2 border-blue-400/50 hover:border-orange-400/80"
              >
                <span className="relative z-10">REGISTER NOW</span>
              </a>

            </motion.div>
        
            {/* Floating particles */}
            <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" />
            <div className="absolute top-32 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60 [animation-delay:1s]" />
            <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60 [animation-delay:2s]" />
            <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-violet-400 rounded-full animate-bounce opacity-60 [animation-delay:3s]" />
          </motion.div>

          {/* Animated scan lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-pulse pointer-events-none" />
        
        </motion.div>
      
      </section>

      {/*About Us*/}
      <section className="relative h-screen flex items-center justify-center overflow-hidden from-slate-900 via-purple-900 to-slate-900">
        {/* Animated circuit pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_24%,rgba(96,165,250,0.03)_25%,rgba(96,165,250,0.03)_26%,transparent_27%,transparent_74%,rgba(147,51,234,0.03)_75%,rgba(147,51,234,0.03)_76%,transparent_77%),linear-gradient(rgba(96,165,250,0.03)_50%,transparent_50%)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="absolute inset-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            className="relative bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-lg border border-blue-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_8px_32px_rgba(96,165,250,0.3)]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Circuit corner decorations */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-blue-400"></div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-blue-400"></div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-blue-400"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-blue-400"></div>
            
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  About_Us.exe 
                </span>
              </h2>
              
              {/* Typing animation effect */}
              <div className="relative">
                <div className="absolute -left-2 top-0 w-1 h-full bg-blue-400 animate-pulse"></div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed pl-4 font-mono">
                  <span className="text-purple-400">&gt;</span> <span className="text-white">Catalyst</span> Catalyst is Ottawa’s first high-school hardware hackathon, a 24‑hour innovation sprint where teams go from idea to working prototype under tight timelines. Unlike traditional software hackathons, Catalyst empowers students to design, build, and test physical hardware from circuits and sensors to mechanical systems with expert mentorship and hands-on support.
                </p>
              </div>
              
              {/* Status indicators */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-gray-400 font-mono">ONLINE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                  <span className="text-xs sm:text-sm text-gray-400 font-mono">READY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                  <span className="text-xs sm:text-sm text-gray-400 font-mono">INNOVATING</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center order-first lg:order-last"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Holographic display frame */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl rounded-full animate-pulse"></div>
              
              {/* Angler Fish visualization container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg border-2 border-blue-400/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(96,165,250,0.4)]">
                
                {/* Animated rings */}
                <div className="absolute inset-3 sm:inset-4 border-2 border-blue-400/30 rounded-full animate-spin"></div>
                <div className="absolute inset-6 sm:inset-8 border-2 border-purple-400/30 rounded-full animate-spin animate-reverse"></div>
                <div className="absolute inset-9 sm:inset-12 border-2 border-blue-500/30 rounded-full animate-spin"></div>
                
                {/* Angler Fish Image*/}
                <div className="relative z-10 w-96 h-96 sm:w-120 sm:h-120 lg:w-144 lg:h-144 flex items-center justify-center">
                  <Image
                  src="/fish3.png"
                  alt="anglerfish"
                  width={2500}
                  height={1000}
                  className="relative flex justify-center order-first lg:order-last"
                  />
                </div>
                
                {/* Floating tech elements - repositioned to avoid fish */}
                <div className="absolute top-6 right-12 sm:top-8 sm:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-12 left-6 sm:top-16 sm:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
                
                {/* Data streams */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-500 transform rotate-45"></div>
              </div>
              
              {/* Hologram scan lines */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-10"
        >
          Our Sponsors
        </motion.h2>

        {/* Sponsor grid container (blank for now) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-blue-400/20 shadow-[0_8px_32px_rgba(96,165,250,0.2)] min-h-[200px]"
        >
          {/* Add logos/components here */}
          <div className="col-span-full text-gray-400 italic">
            Sponsor logos coming soon...
          </div>
        </motion.div>
      </div>
    </section>
      {/* FAQ Section */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 mb-12">
            <span>Got questions? We&apos;ve got answers. Here&apos;s everything you need to know about Catalyst.</span>
          </p>

          <div className="space-y-8 text-left">
            {[
              {
                question: "What is Catalyst?",
                answer:
                  "Catalyst is a high-energy hardware hackathon where students come together to build, learn, and innovate on cutting-edge tech challenges."
              },
              {
                question: "Who can participate?",
                answer:
                  "Catalyst is open to high school students of all skill levels. Whether you're a beginner or a seasoned hacker, you're welcome!"
              },
    
              {
                question: "Is there a fee to participate?",
                answer:
                  "Our price is TBD, depending on the donations from our generous sponsors, but it will be around $50-$100"
              },
              {
                question: "What should I bring?",
                answer:
                  "Just bring your laptop, charger, any necessary personal items, and lots of curiosity. We provide hardware kits and tools!"
              },
              {
                question: "How do I register?",
                answer:
                  "You can sign up through our official website. Registration opens soon—stay tuned!"
              }
            ].map(({ question, answer }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{question}</h3>
                <p className="text-gray-300">{answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <div className="relative flex justify-end">
        <Image
          src="/fish2.png"
          alt="anglerfish"
          width={450}
          height={200}
          className="rounded-lg right-10 p-3 transition-transform duration-300"
          />
        </div>
        <br></br>
    <footer className="bg-gray-800 text-white text-center p-4">
        <p>All elements used on this page are owned by Redshifted.</p>
        <p>Made with love by the Redshifted Team ♥</p>
      </footer>
    </main>
    
  )
}