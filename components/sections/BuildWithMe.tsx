"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Code2, ArrowRight } from "lucide-react";

export default function BuildWithMe() {
  return (
    <section className="py-20 bg-zinc-950 text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/20 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to build something <span className="text-blue-400">fast?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I don&apos;t just write code; I ship products. From idea to deployment, I build scalable, AI-powered systems that solve real problems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="text-yellow-400" size={20} />
                  <span>Rapid Prototyping & MVP Development</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="text-green-400" size={20} />
                  <span>Shipped 5+ projects in under 3 months</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Code2 className="text-purple-400" size={20} />
                  <span>Full-Stack + AI Integration Specialist</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                Let&apos;s Work Together <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative h-[300px] bg-black/50 rounded-xl border border-white/10 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500 font-mono">shipping_log.txt</span>
              </div>
              <div className="font-mono text-sm space-y-2 text-gray-400">
                <p><span className="text-green-400">➜</span> Initializing project...</p>
                <p><span className="text-green-400">➜</span> Integrating OpenAI API...</p>
                <p><span className="text-green-400">➜</span> Setting up vector database...</p>
                <p><span className="text-green-400">➜</span> Deploying to Vercel...</p>
                <p className="text-white"><span className="text-green-400">✔</span> Project shipped in 7 days.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-gray-500">
                <span>Status: READY_TO_BUILD</span>
                <span>Latency: 12ms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
