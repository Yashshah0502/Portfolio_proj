"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText = "> INITIALIZING SYSTEM...\n> LOADING MODULES...\n> ACCESS GRANTED.";

  useEffect(() => {
    // AGGRESSIVE: Force scroll to 0 immediately and continuously
    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    forceScrollTop();
    
    // Keep forcing it every 10ms during intro
    const scrollInterval = setInterval(forceScrollTop, 10);
    
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          // Unlock scroll smoothly
          document.body.style.overflow = "unset";
          clearInterval(scrollInterval);
        }, 800);
      }
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(scrollInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono text-green-500"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <pre className="text-sm md:text-base whitespace-pre-wrap">
            {text}
            <span className="animate-pulse">_</span>
          </pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
