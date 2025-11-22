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
  const [viewMode, setViewMode] = useState<"recruiter" | "engineer">("recruiter");
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
          className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Hero Header */}
          <div className="relative p-8 border-b border-white/10 overflow-hidden">
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
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
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Github size={18} /> View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-full border border-white/10 hover:bg-zinc-700 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="px-8 py-4 border-b border-white/10 bg-zinc-900/50 flex items-center justify-between gap-4 flex-wrap sticky top-0 z-10 backdrop-blur-sm">
            <div className="flex gap-8">
              {[
                { id: "overview", label: "Overview" },
                { id: "architecture", label: "Architecture" },
                { id: "highlights", label: "Highlights" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-2",
                    activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex bg-zinc-900 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => setViewMode("recruiter")}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2",
                  viewMode === "recruiter" ? "bg-zinc-800 text-white shadow-sm" : "text-gray-500 hover:text-gray-300"
                )}
              >
                <User size={14} /> Recruiter
              </button>
              <button
                onClick={() => setViewMode("engineer")}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2",
                  viewMode === "engineer" ? "bg-zinc-800 text-white shadow-sm" : "text-gray-500 hover:text-gray-300"
                )}
              >
                <Server size={14} /> Engineer
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto flex-1 bg-zinc-950">
            <div className="max-w-3xl mx-auto">
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Project Summary</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {viewMode === "recruiter" ? project.shortDescription : project.fullDescription}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl">
                      <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                        <Layers size={20} /> Impact
                      </h4>
                      <p className="text-gray-300">{project.impact}</p>
                    </div>
                    <div className="p-6 bg-purple-900/10 border border-purple-500/20 rounded-xl">
                      <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                        <Cpu size={20} /> Core Tech
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map(t => (
                          <span key={t} className="text-sm text-gray-400">• {t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <h3 className="text-lg font-bold text-white mb-4">System Architecture</h3>
                  <div className="space-y-0 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
                    
                    {project.architecture.map((step, i) => (
                      <div key={i} className="relative flex gap-6 pb-8 last:pb-0 group">
                        <div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:border-blue-500 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                          <span className="text-blue-400 font-mono font-bold">{i + 1}</span>
                        </div>
                        <div className="pt-2">
                          <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl group-hover:bg-zinc-900 transition-colors">
                            <p className="text-gray-300 font-mono text-sm">{step}</p>
                          </div>
                        </div>
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
