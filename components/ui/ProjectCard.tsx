"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="text-gray-500 group-hover:text-blue-400 transition-colors" size={20} />
        </div>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md border border-white/5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md border border-white/5">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
