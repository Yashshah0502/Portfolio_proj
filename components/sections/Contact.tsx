"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something</h2>
          <p className="text-gray-400 text-lg mb-8">
            Open to AI Engineer, Full-Stack, and Data roles. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:hello@yashshah.dev"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
              <span>hello@yashshah.dev</span>
            </a>
            <a
              href="https://linkedin.com/in/yashshah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/yashshah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-white/10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">
                What are you interested in?
              </label>
              <select
                id="interest"
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors appearance-none"
              >
                <option>Recruiting for a role</option>
                <option>Freelance project</option>
                <option>Just saying hi</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
