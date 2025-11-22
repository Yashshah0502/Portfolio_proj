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
              <p>I'm an AI Engineer and Full-Stack Developer with a Master’s in Information Technology from Arizona State University (4.0 GPA). I build systems that reason, automate, and scale - from multi-agent architectures to full-stack applications that ship in production.</p>
              <p>Right now, I’m an IT Business Analyst Intern at Zydus Pharmaceuticals, where I’m building an autonomous multi-agent system inside Microsoft Teams to generate complex data reports and validate insights automatically. Before that, I engineered large-scale data pipelines at ASU and built workflow automation solutions for the NYC Department of Finance.</p>
              <p>I love solving technical problems, whether it's optimizing ETL pipelines that process millions of rows, designing RAG systems for semantic search, or integrating LLMs into real business operations. My focus is simple: build software that doesn’t just function, but thinks and delivers measurable impact.</p>
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
