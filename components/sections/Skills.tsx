"use client";

// Force HMR update
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import TechRadar from "@/components/ui/TechRadar";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-400 max-w-2xl">
              A comprehensive breakdown of my stack, from AI models to frontend frameworks, showcasing expertise across the full tech spectrum. Explore the tools and technologies that power my projects.
            </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
          {/* Skills Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skills.map((category, index) => {
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-all group"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-black/40 border border-white/10 rounded-md text-sm text-gray-300 group-hover:border-blue-500/30 group-hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TechRadar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
