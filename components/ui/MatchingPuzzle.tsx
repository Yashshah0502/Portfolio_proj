"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const pairs = [
  { id: 1, model: "LLaMA 3.1", useCase: "Local Inference" },
  { id: 2, model: "GPT-4o", useCase: "Complex Reasoning" },
  { id: 3, model: "Claude 3.5 Sonnet", useCase: "Coding Tasks" },
  { id: 4, model: "Whisper", useCase: "Speech to Text" },
];

export default function MatchingPuzzle() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [wrongPair, setWrongPair] = useState<number[]>([]);

  const handleModelClick = (id: number) => {
    if (matchedPairs.includes(id)) return;
    setSelectedModel(id);
    setWrongPair([]);
  };

  const handleUseCaseClick = (id: number) => {
    if (matchedPairs.includes(id)) return;
    
    if (selectedModel === id) {
      setMatchedPairs([...matchedPairs, id]);
      setSelectedModel(null);
    } else {
      setWrongPair([selectedModel!, id]);
      setTimeout(() => {
        setWrongPair([]);
        setSelectedModel(null);
      }, 800);
    }
  };

  const isComplete = matchedPairs.length === pairs.length;

  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 md:p-8 h-full">
      <h3 className="text-xl font-bold text-white mb-2">Model Matcher</h3>
      <p className="text-gray-400 text-sm mb-6">
        Match the AI model to its ideal use case.
      </p>

      <div className="flex justify-between gap-8">
        <div className="space-y-3 flex-1">
          {pairs.map((pair) => (
            <button
              key={`model-${pair.id}`}
              onClick={() => handleModelClick(pair.id)}
              disabled={matchedPairs.includes(pair.id)}
              className={cn(
                "w-full p-3 rounded-lg text-sm font-mono text-left transition-all border",
                matchedPairs.includes(pair.id)
                  ? "bg-green-900/20 border-green-500/30 text-green-400 opacity-50"
                  : selectedModel === pair.id
                  ? "bg-blue-600 border-blue-500 text-white"
                  : wrongPair.includes(pair.id) && selectedModel === pair.id
                  ? "bg-red-900/20 border-red-500 text-red-400"
                  : "bg-zinc-800 border-white/5 text-gray-300 hover:bg-zinc-700"
              )}
            >
              {pair.model}
            </button>
          ))}
        </div>

        <div className="space-y-3 flex-1">
          {pairs.sort(() => 0.5 - Math.random()).map((pair) => (
            <button
              key={`usecase-${pair.id}`}
              onClick={() => handleUseCaseClick(pair.id)}
              disabled={matchedPairs.includes(pair.id)}
              className={cn(
                "w-full p-3 rounded-lg text-sm font-mono text-right transition-all border",
                matchedPairs.includes(pair.id)
                  ? "bg-green-900/20 border-green-500/30 text-green-400 opacity-50"
                  : wrongPair[1] === pair.id
                  ? "bg-red-900/20 border-red-500 text-red-400"
                  : "bg-zinc-800 border-white/5 text-gray-300 hover:bg-zinc-700"
              )}
            >
              {pair.useCase}
            </button>
          ))}
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-green-400 font-bold flex items-center justify-center gap-2"
        >
          <Check size={18} /> All Systems Optimized.
        </motion.div>
      )}
    </div>
  );
}
