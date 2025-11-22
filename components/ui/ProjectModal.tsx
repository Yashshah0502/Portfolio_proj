"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Server, User, Layers, CheckCircle } from "lucide-react";
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
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-start bg-zinc-900/50">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-md border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          {/* View Toggle */}
          <div className="px-6 py-4 border-b border-white/10 bg-black/20 flex items-center justify-between flex-wrap gap-4">
            <div className="flex bg-zinc-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode("recruiter")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                  viewMode === "recruiter" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
              >
                <User size={16} /> Recruiter View
              </button>
              <button
                onClick={() => setViewMode("engineer")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                  viewMode === "engineer" ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
              >
                <Server size={16} /> Engineer View
              </button>
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} /> Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {/* Tabs */}
            <div className="flex gap-6 border-b border-white/10 mb-6">
              {[
                { id: "overview", label: "Overview" },
                { id: "architecture", label: "Architecture" },
                { id: "highlights", label: "Highlights" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "pb-3 text-sm font-medium transition-all relative",
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

            <div className="min-h-[200px]">
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {viewMode === "recruiter" ? project.shortDescription : project.fullDescription}
                  </p>
                  <div className="p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                      <Layers size={18} /> Impact
                    </h4>
                    <p className="text-gray-300">{project.impact}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div className="space-y-3">
                    {project.architecture.map((step, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-gray-300 font-mono text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "highlights" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
