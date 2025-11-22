"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m an AI Engineer and Full-Stack Developer with a Master&apos;s in Information Technology from Arizona State University (4.0 GPA). 
                I specialize in building autonomous agents, RAG pipelines, and scalable full-stack applications.
              </p>
              <p>
                Currently, I&apos;m an IT Business Analyst Intern at Zydus Pharmaceuticals, where I build multi-agent systems in Microsoft Teams 
                to automate complex data reporting. Previously, I&apos;ve engineered data solutions for ASU and the NYC Department of Finance.
              </p>
              <p>
                I thrive on solving hard problems—whether it&apos;s optimizing ETL pipelines for millions of records or fine-tuning LLMs for 
                semantic search. My goal is to build systems that don&apos;t just work, but think.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden bg-zinc-800 border border-white/10 flex items-center justify-center"
          >
             {/* Placeholder for an image or a cool graphic */}
             <div className="text-center p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Always Building</h3>
                <p className="text-gray-400">Turning ideas into reality, one commit at a time.</p>
             </div>
             
             {/* Decorative gradient */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
