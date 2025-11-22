"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl">
            My professional journey building scalable systems and AI solutions.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1 md:mt-0">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-blue-400 mb-4 font-medium">
                <Briefcase size={16} />
                <span>{item.company}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed list-disc list-inside marker:text-blue-500">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-900 border border-white/10 rounded text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
