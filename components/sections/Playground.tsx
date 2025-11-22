"use client";

import { motion } from "framer-motion";
import Puzzle from "@/components/ui/Puzzle";
import AgentWidget from "@/components/ui/AgentWidget";

export default function Playground() {
  return (
    <section id="playground" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Playground</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interactive demos to test my logic and your curiosity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Puzzle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AgentWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
