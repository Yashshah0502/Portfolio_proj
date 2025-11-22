"use client";

import { useState, useEffect } from "react";
import { motion, Reorder } from "framer-motion";
import { CheckCircle, RefreshCcw } from "lucide-react";

const initialItems = [
  { id: "sql", label: "SQL Generator" },
  { id: "guard", label: "Guardrails" },
  { id: "validator", label: "Validator" },
  { id: "classifier", label: "Intent Classifier" },
  { id: "formatter", label: "Response Formatter" },
];

// Correct order: Guard -> Classifier -> SQL -> Validator -> Formatter
const correctOrder = ["guard", "classifier", "sql", "validator", "formatter"];

export default function Puzzle() {
  const [items, setItems] = useState(initialItems);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const currentOrder = items.map((item) => item.id);
    const isMatch = currentOrder.every((val, index) => val === correctOrder[index]);
    setIsCorrect(isMatch);
  }, [items]);

  const handleReset = () => {
    setItems([...initialItems].sort(() => Math.random() - 0.5));
    setIsCorrect(false);
  };

  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 md:p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Pipeline Logic Puzzle</h3>
          <p className="text-gray-400 text-sm">
            Drag and drop the components to build a secure Text-to-SQL pipeline.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          title="Shuffle"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
        {items.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className="bg-zinc-800 border border-white/5 p-4 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-between shadow-sm"
          >
            <span className="text-gray-200 font-mono text-sm">{item.label}</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-500 rounded-full" />
              <div className="w-1 h-1 bg-gray-500 rounded-full" />
              <div className="w-1 h-1 bg-gray-500 rounded-full" />
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400"
        >
          <CheckCircle size={20} />
          <span className="font-medium">System Operational! That&apos;s exactly how I build agents.</span>
        </motion.div>
      )}
    </div>
  );
}
