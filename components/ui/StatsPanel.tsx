"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Activity, Cpu, Wifi } from "lucide-react";

export default function StatsPanel() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-gray-500 pointer-events-none select-none"
    >
      <div className="flex items-center gap-2">
        <Terminal size={12} className="text-blue-500" />
        <span>SYSTEM.STATUS: ONLINE</span>
      </div>
      <div className="flex items-center gap-2">
        <Activity size={12} className="text-green-500" />
        <span>RUNTIME: NEXT.JS 14</span>
      </div>
      <div className="flex items-center gap-2">
        <Cpu size={12} className="text-purple-500" />
        <span>AI.MODULES: ACTIVE</span>
      </div>
      <div className="flex items-center gap-2">
        <Wifi size={12} className="text-yellow-500" />
        <span>LATENCY: 24ms</span>
      </div>
      <div className="pl-5 text-gray-600">
        LOC.TIME: {time}
      </div>
    </motion.div>
  );
}
