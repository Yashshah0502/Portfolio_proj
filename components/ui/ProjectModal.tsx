"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Server, User, Layers, CheckCircle, Cpu, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "highlights">("overview");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Hero Header */}
          <div className="relative p-4 md:p-8 border-b border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
            <div className="absolute top-0 right-0 p-4 z-20">
              <button 
                onClick={onClose} 
                className="p-2 bg-black/50 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors border border-white/5"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded-full border border-blue-500/20">
                  CASE STUDY
                </span>
                <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                  {project.id}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-zinc-800/50 text-gray-300 text-xs rounded-md border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 text-white rounded-full border border-white/10 hover:bg-zinc-700 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-400 text-lg">{project.shortDescription}</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 px-4 md:px-8 relative z-20 bg-zinc-900">
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-4 py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none",
                  activeTab === "overview" ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                )}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={cn(
                  "px-4 py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none",
                  activeTab === "architecture" ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                )}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab("highlights")}
                className={cn(
                  "px-4 py-4 text-sm font-medium border-b-2 transition-colors focus:outline-none",
                  activeTab === "highlights" ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                )}
              >
                Highlights
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-8">
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <User size={18} className="text-blue-400" /> The Challenge & Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.recruiterDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-400" /> Key Impact
                    </h3>
                    <div className="p-4 bg-green-900/10 border border-green-500/20 rounded-xl text-green-300">
                      {project.impact}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                   <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Server size={18} className="text-purple-400" /> System Architecture
                    </h3>
                  <div className="space-y-3">
                    {project.architecture.map((step, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg border border-white/5">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full text-sm">
                          {i + 1}
                        </span>
                        <span className="text-gray-300 font-mono text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "highlights" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <h3 className="text-lg font-bold text-white mb-4">Key Features & Challenges</h3>
                  <div className="grid gap-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                        <div className="mt-1">
                          <CheckCircle size={20} className="text-green-500" />
                        </div>
                        <p className="text-gray-300 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
