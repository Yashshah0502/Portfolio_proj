"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("");
  const fullText = [
    "> Booting Yash's AI Engineer Workspace...",
    "> Loading Projects...",
    "> Initializing Agents...",
    "> Access Granted."
  ];
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= fullText.length) {
      setTimeout(onComplete, 800);
      return;
    }

    let currentText = "";
    let charIndex = 0;
    const line = fullText[lineIndex];

    const interval = setInterval(() => {
      currentText += line[charIndex];
      setText((prev) => {
        const lines = prev.split("\n");
        lines[lines.length - 1] = currentText;
        return lines.join("\n");
      });
      charIndex++;

      if (charIndex >= line.length) {
        clearInterval(interval);
        setTimeout(() => {
          setText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [lineIndex, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-green-500 font-mono text-lg md:text-xl"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="w-full max-w-2xl px-6">
        <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
      </div>
    </motion.div>
  );
}
