'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image';


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Catalyst
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Build the future with hardware and code
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                <span>August XX, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span>Ottawa&apos;s very first hardware hackathon!</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>200+ Hackers</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
          <a href="https://redshifted.ca" className="absolute top-5 left-5 transform w-[200px] h-[100px] rounded-lg">
            <Image 
              src="/image.png" 
              alt="Logo."
              width={200}                 
              height={100}   
            />
        </a>

        <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
        <a href="https://forms.gle/5sfQv4g3Fby8QF9h9" className="rounded-lg absolute top-10 bg-blue-400 right-10 p-3 shadow-[0_4px_20px_rgba(30,144,255,1)] hover:scale-110 transition-transform duration-300">
            <p>SIGN UP</p>
        </a>
        </motion.div>
        <Image
              src="/meteor.png"  // Use the path to your image
              alt="Centered"
              width={300}  // Specify width
              height={300} // Specify height
              className="absolute top-1 left-1/2 transform -translate-x-1/2 select-none"
        />
        <Image
              src="/crater.png"  // Use the path to your image
              alt="Centered"
              width={300}  // Specify width
              height={300} // Specify height
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 select-none"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Catalyst
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Ottawa&apos;s first hardware hackathon!
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5" />
              <span>August XX 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5" />
              <span>Ottawa, Canada</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>30+ hackers</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <a href="https://forms.gle/b2n71kTgUs7ddHD98">Register Now</a>
            </button>
          </motion.div>
        </motion.div>
        
      </section>
      {/*About Us*/}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center left-10"
        >
          <motion.div
              className="container bg-purple-600 py-6 mx-auto px-4 md:px-8 lg:px-16 text-5xl mb-4 shadow-[0_4px_20px_rgba(255,0,0,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
          
            <h2 className="text-3xl md:text-1xl font-bold mb-6 bg-blue-400 bg-clip-text text-transparent">
              What is <span className="text-3xl md:text-1xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Catalyst</span>?
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Catalyst is a groundbreaking, fully student-organized, hardware hackathon - the first of its kind in all of Ottawa. In Catalyst, participants will race against the clock to build a project while discovering new things, displaying their talents, and collaborating with others. What seperates a hardware hackathon with a normal hackathon? Traditional hackathons are software-focused, where participants are asked to make a computer game in 24 hours. Our hackathon will bring together people of various skills and backgrounds, from programmers to mechanical engineering, to build something greater than what any single person can do alone. 
            </p>
          
          </motion.div>
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/2 mx-auto lg:mx-0 lg:ml-12">
            <img
              src="/globe.svg"
              alt="Image Description"
              className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </section>
      {/*Scheldule section */}
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          Scheldule

        </motion.div>
      </section>
      {/*Sponsorship section */}
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          Sponsor

        </motion.div>
      </section>
      {/*FAQ section */}
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          FAQ

        </motion.div>
      </section>
    <footer className="bg-gray-800 text-white text-center p-4">
        <p>All elements used on this page are under the Creative Commons license or our copyright.</p>
        <p>Made with love by the Redshifted Team ♥</p>
      </footer>
    </main>
    
  )
}