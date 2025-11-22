"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download, Database, Server, Brain, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-500">Yash.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 h-[60px]">
            I am a{" "}
            <span className="text-blue-400 font-mono">
              <Typewriter
                words={[
                  "Data Engineer",
                  "AI Engineer",
                  "Full-Stack Developer",
                  "Software Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I build AI agents and full-stack systems that actually ship. 
            Turning complex data into intelligent, usable products.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
          
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-300 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Open to AI Engineer / Full-Stack / Data Roles
          </div>
        </motion.div>

        {/* Right Content - Profile & Orbiting Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative flex justify-center items-center"
        >
          {/* Orbiting Ring */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          {/* Profile Image Placeholder */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.3)] bg-zinc-800 flex items-center justify-center">
             <span className="text-6xl font-bold text-gray-600">YS</span>
             {/* Replace with actual image: <Image src="/profile.jpg" alt="Yash Shah" fill className="object-cover" /> */}
          </div>

          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-10 p-3 bg-zinc-900 rounded-xl border border-white/10 shadow-xl"
          >
            <Brain className="text-purple-400" size={32} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 p-3 bg-zinc-900 rounded-xl border border-white/10 shadow-xl"
          >
            <Database className="text-blue-400" size={32} />
          </motion.div>
          <motion.div 
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -right-10 p-3 bg-zinc-900 rounded-xl border border-white/10 shadow-xl"
          >
            <Code className="text-green-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
