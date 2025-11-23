"use client";

import { useViewMode } from "@/context/ViewModeContext";
import { motion } from "framer-motion";
import { User, Server } from "lucide-react";

export default function ViewToggle() {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="flex items-center bg-zinc-900 rounded-full p-1 border border-white/10 relative">
      <motion.div
        layout
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-600 rounded-full z-0"
        animate={{
          left: viewMode === "recruiter" ? "4px" : "50%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      <button
        onClick={() => setViewMode("recruiter")}
        className={`relative z-10 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
          viewMode === "recruiter" ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        <User size={12} />
        Recruiter
      </button>
      
      <button
        onClick={() => setViewMode("engineer")}
        className={`relative z-10 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
          viewMode === "engineer" ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        <Server size={12} />
        Engineer
      </button>
    </div>
  );
}
