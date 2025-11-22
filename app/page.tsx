"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroOverlay from "@/components/ui/IntroOverlay";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Playground from "@/components/sections/Playground";
import BuildWithMe from "@/components/sections/BuildWithMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      {!showIntro && (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Playground />
          <BuildWithMe />
          <Contact />
        </>
      )}
    </main>
  );
}
